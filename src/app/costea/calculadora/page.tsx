"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Insumo {
  id: number;
  nombre: string;
  cantidad: number;
  unidad: string;
  costoUnitario: number;
}

const defaultInsumos: Insumo[] = [
  { id: 1, nombre: "", cantidad: 1, unidad: "und", costoUnitario: 0 },
];

function fmt(n: number) {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);
}

export default function CalculadoraPage() {
  const [productoNombre, setProductoNombre] = useState("");
  const [insumos, setInsumos] = useState<Insumo[]>(defaultInsumos);
  const [manoDeObra, setManoDeObra] = useState(0);
  const [gastosIndirectos, setGastosIndirectos] = useState(0);
  const [margenUtilidad, setMargenUtilidad] = useState(30);
  const [unidadesPorLote, setUnidadesPorLote] = useState(1);

  const costoMateriaPrima = insumos.reduce(
    (sum, i) => sum + i.cantidad * i.costoUnitario,
    0
  );
  const costoTotalLote = costoMateriaPrima + manoDeObra + gastosIndirectos;
  const costoUnitario = unidadesPorLote > 0 ? costoTotalLote / unidadesPorLote : 0;
  const precioMinimo = costoUnitario * (1 + margenUtilidad / 100);
  const utilidadUnidad = precioMinimo - costoUnitario;

  function addInsumo() {
    setInsumos((prev) => [
      ...prev,
      { id: Date.now(), nombre: "", cantidad: 1, unidad: "und", costoUnitario: 0 },
    ]);
  }

  function removeInsumo(id: number) {
    setInsumos((prev) => prev.filter((i) => i.id !== id));
  }

  function updateInsumo(id: number, field: keyof Insumo, value: string | number) {
    setInsumos((prev) =>
      prev.map((i) => (i.id === id ? { ...i, [field]: value } : i))
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/costea" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
              ← Volver a App Costea
            </Link>
            <h1 className="text-3xl font-extrabold text-gray-900 mt-3">Calculadora de Costos</h1>
            <p className="text-gray-500 mt-1">Calcula el costo real de tu producto o servicio y define el precio de venta.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Inputs */}
            <div className="lg:col-span-2 space-y-6">

              {/* Nombre del producto */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">Producto o servicio</h2>
                <input
                  type="text"
                  value={productoNombre}
                  onChange={(e) => setProductoNombre(e.target.value)}
                  placeholder="Ej: Torta de cumpleaños 20 porciones"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <div className="mt-4 flex items-center gap-4">
                  <label className="text-sm text-gray-600 whitespace-nowrap">Unidades por lote:</label>
                  <input
                    type="number"
                    min={1}
                    value={unidadesPorLote}
                    onChange={(e) => setUnidadesPorLote(Number(e.target.value))}
                    className="w-24 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Insumos / Materia prima */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">Materia prima e insumos</h2>
                  <span className="text-sm text-emerald-600 font-semibold">{fmt(costoMateriaPrima)}</span>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-12 gap-2 text-xs text-gray-400 font-medium px-1">
                    <span className="col-span-4">Insumo</span>
                    <span className="col-span-2">Cantidad</span>
                    <span className="col-span-2">Unidad</span>
                    <span className="col-span-3">Costo c/u ($)</span>
                    <span className="col-span-1" />
                  </div>
                  {insumos.map((insumo) => (
                    <div key={insumo.id} className="grid grid-cols-12 gap-2 items-center">
                      <input
                        type="text"
                        value={insumo.nombre}
                        onChange={(e) => updateInsumo(insumo.id, "nombre", e.target.value)}
                        placeholder="Ej: Harina"
                        className="col-span-4 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <input
                        type="number"
                        min={0}
                        value={insumo.cantidad}
                        onChange={(e) => updateInsumo(insumo.id, "cantidad", Number(e.target.value))}
                        className="col-span-2 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <select
                        value={insumo.unidad}
                        onChange={(e) => updateInsumo(insumo.id, "unidad", e.target.value)}
                        className="col-span-2 border border-gray-200 rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option>und</option>
                        <option>kg</option>
                        <option>g</option>
                        <option>lt</option>
                        <option>ml</option>
                        <option>m</option>
                        <option>cm</option>
                        <option>hora</option>
                      </select>
                      <input
                        type="number"
                        min={0}
                        value={insumo.costoUnitario}
                        onChange={(e) => updateInsumo(insumo.id, "costoUnitario", Number(e.target.value))}
                        className="col-span-3 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <button
                        onClick={() => removeInsumo(insumo.id)}
                        className="col-span-1 text-gray-300 hover:text-red-400 transition-colors text-lg font-bold text-center"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={addInsumo}
                  className="mt-4 text-sm text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1"
                >
                  + Agregar insumo
                </button>
              </div>

              {/* Mano de obra */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">Mano de obra</h2>
                <div className="flex items-center gap-4">
                  <label className="text-sm text-gray-600 whitespace-nowrap">Costo total por lote ($):</label>
                  <input
                    type="number"
                    min={0}
                    value={manoDeObra}
                    onChange={(e) => setManoDeObra(Number(e.target.value))}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Incluye el valor de tu tiempo o el de tus empleados para producir este lote.
                </p>
              </div>

              {/* Gastos indirectos */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">Gastos indirectos</h2>
                <div className="flex items-center gap-4">
                  <label className="text-sm text-gray-600 whitespace-nowrap">Costo por lote ($):</label>
                  <input
                    type="number"
                    min={0}
                    value={gastosIndirectos}
                    onChange={(e) => setGastosIndirectos(Number(e.target.value))}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Luz, gas, arriendo del local, empaques u otros costos asociados al lote.
                </p>
              </div>

              {/* Margen de utilidad */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-bold text-gray-900">Margen de utilidad deseado</h2>
                  <span className="text-2xl font-extrabold text-emerald-600">{margenUtilidad}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={200}
                  step={5}
                  value={margenUtilidad}
                  onChange={(e) => setMargenUtilidad(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                  <span>200%</span>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div className="space-y-4">
              <div className="bg-emerald-600 text-white rounded-2xl p-6 sticky top-20">
                <h2 className="font-bold text-lg mb-6">Resumen de costos</h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-100">Materia prima</span>
                    <span className="font-semibold">{fmt(costoMateriaPrima)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-100">Mano de obra</span>
                    <span className="font-semibold">{fmt(manoDeObra)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-100">Gastos indirectos</span>
                    <span className="font-semibold">{fmt(gastosIndirectos)}</span>
                  </div>
                  <div className="border-t border-emerald-500 pt-3 flex justify-between text-sm">
                    <span className="text-emerald-100">Costo total del lote</span>
                    <span className="font-bold">{fmt(costoTotalLote)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-100">Unidades en el lote</span>
                    <span className="font-semibold">{unidadesPorLote}</span>
                  </div>
                </div>

                <div className="mt-6 bg-white/15 rounded-xl p-4 space-y-3">
                  <div>
                    <div className="text-emerald-200 text-xs mb-1">Costo unitario</div>
                    <div className="text-2xl font-extrabold">{fmt(costoUnitario)}</div>
                  </div>
                  <div>
                    <div className="text-emerald-200 text-xs mb-1">Precio mínimo de venta ({margenUtilidad}% utilidad)</div>
                    <div className="text-3xl font-extrabold">{fmt(precioMinimo)}</div>
                  </div>
                  <div>
                    <div className="text-emerald-200 text-xs mb-1">Utilidad por unidad</div>
                    <div className="text-xl font-bold">{fmt(utilidadUnidad)}</div>
                  </div>
                </div>

                {costoUnitario === 0 && (
                  <p className="text-emerald-200 text-xs mt-4 text-center">
                    Ingresa tus insumos y costos para ver el resultado.
                  </p>
                )}
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-5 text-sm text-gray-600">
                <div className="font-semibold text-gray-900 mb-2">💡 Recuerda</div>
                <p>El precio de venta final también depende del mercado y la competencia. Usa este resultado como el <strong>precio mínimo</strong> para no vender a pérdida.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
