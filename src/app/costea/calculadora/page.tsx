"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLang } from "@/contexts/LanguageContext";

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
  const { t } = useLang();
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
            <Link href="/costea" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              ← {t("Volver a Costea App", "Back to Costea App")}
            </Link>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3">{t("Calculadora de Costos", "Cost Calculator")}</h1>
            <p className="text-gray-500 mt-1">{t("Calcula el costo real de tu producto o servicio y define el precio de venta.", "Calculate the real cost of your product or service and set your selling price.")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Inputs */}
            <div className="lg:col-span-2 space-y-6">

              {/* Nombre del producto */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">{t("Producto o servicio", "Product or service")}</h2>
                <input
                  type="text"
                  value={productoNombre}
                  onChange={(e) => setProductoNombre(e.target.value)}
                  placeholder={t("Ej: Torta de cumpleaños 20 porciones", "e.g. Birthday cake 20 servings")}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-sm text-gray-600">{t("Unidades por lote:", "Units per batch:")}</label>
                  <input
                    type="number"
                    min={1}
                    value={unidadesPorLote}
                    onChange={(e) => setUnidadesPorLote(Number(e.target.value))}
                    className="w-full sm:w-24 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Insumos / Materia prima */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">{t("Materia prima e insumos", "Raw materials & inputs")}</h2>
                  <span className="text-sm text-blue-600 font-semibold tabular-nums">{fmt(costoMateriaPrima)}</span>
                </div>

                <div className="space-y-3">
                  {/* Column headers — desktop only */}
                  <div className="hidden sm:grid grid-cols-12 gap-2 text-xs text-gray-400 font-medium px-1">
                    <span className="col-span-4">{t("Insumo", "Input")}</span>
                    <span className="col-span-2">{t("Cantidad", "Qty")}</span>
                    <span className="col-span-2">{t("Unidad", "Unit")}</span>
                    <span className="col-span-3">{t("Costo c/u ($)", "Unit cost ($)")}</span>
                    <span className="col-span-1" />
                  </div>
                  {insumos.map((insumo) => (
                    <div key={insumo.id} className="flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:items-center bg-gray-50 sm:bg-transparent rounded-xl sm:rounded-none p-3 sm:p-0">
                      <input
                        type="text"
                        value={insumo.nombre}
                        onChange={(e) => updateInsumo(insumo.id, "nombre", e.target.value)}
                        placeholder={t("Ej: Harina", "e.g. Flour")}
                        className="sm:col-span-4 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      />
                      <div className="flex gap-2 sm:contents">
                        <input
                          type="number"
                          min={0}
                          value={insumo.cantidad}
                          onChange={(e) => updateInsumo(insumo.id, "cantidad", Number(e.target.value))}
                          className="flex-1 sm:col-span-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                        <select
                          value={insumo.unidad}
                          onChange={(e) => updateInsumo(insumo.id, "unidad", e.target.value)}
                          className="flex-1 sm:col-span-2 border border-gray-200 rounded-lg px-2 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
                          className="flex-1 sm:col-span-3 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                        <button
                          onClick={() => removeInsumo(insumo.id)}
                          aria-label={t("Eliminar insumo", "Remove input")}
                          className="sm:col-span-1 w-9 h-9 flex items-center justify-center text-gray-300 hover:text-red-400 transition-colors text-lg font-bold rounded-lg hover:bg-red-50"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={addInsumo}
                  className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                >
                  + {t("Agregar insumo", "Add input")}
                </button>
              </div>

              {/* Mano de obra */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">{t("Mano de obra", "Labor")}</h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-sm text-gray-600 sm:whitespace-nowrap">{t("Costo total por lote ($):", "Total batch cost ($):")}</label>
                  <input
                    type="number"
                    min={0}
                    value={manoDeObra}
                    onChange={(e) => setManoDeObra(Number(e.target.value))}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {t("Incluye el valor de tu tiempo o el de tus empleados para producir este lote.", "Include the value of your time or your employees' time to produce this batch.")}
                </p>
              </div>

              {/* Gastos indirectos */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">{t("Gastos indirectos", "Overhead costs")}</h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-sm text-gray-600 sm:whitespace-nowrap">{t("Costo por lote ($):", "Batch cost ($):")}</label>
                  <input
                    type="number"
                    min={0}
                    value={gastosIndirectos}
                    onChange={(e) => setGastosIndirectos(Number(e.target.value))}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {t("Luz, gas, arriendo del local, empaques u otros costos asociados al lote.", "Electricity, gas, rent, packaging, or other costs associated with the batch.")}
                </p>
              </div>

              {/* Margen de utilidad */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-bold text-gray-900">{t("Margen de utilidad deseado", "Desired profit margin")}</h2>
                  <span className="text-2xl font-extrabold text-blue-600 tabular-nums">{margenUtilidad}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={200}
                  step={5}
                  value={margenUtilidad}
                  onChange={(e) => setMargenUtilidad(Number(e.target.value))}
                  aria-label={t("Margen de utilidad deseado", "Desired profit margin")}
                  aria-valuetext={`${margenUtilidad}%`}
                  className="w-full accent-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
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
              <div className="bg-blue-600 text-white rounded-2xl p-6 sticky top-20">
                <h2 className="font-bold text-lg mb-6">{t("Resumen de costos", "Cost summary")}</h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{t("Materia prima", "Raw materials")}</span>
                    <span className="font-semibold tabular-nums">{fmt(costoMateriaPrima)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{t("Mano de obra", "Labor")}</span>
                    <span className="font-semibold tabular-nums">{fmt(manoDeObra)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{t("Gastos indirectos", "Overhead")}</span>
                    <span className="font-semibold tabular-nums">{fmt(gastosIndirectos)}</span>
                  </div>
                  <div className="border-t border-blue-500 pt-3 flex justify-between text-sm">
                    <span className="text-white/80">{t("Costo total del lote", "Total batch cost")}</span>
                    <span className="font-bold tabular-nums">{fmt(costoTotalLote)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{t("Unidades en el lote", "Units in batch")}</span>
                    <span className="font-semibold">{unidadesPorLote}</span>
                  </div>
                </div>

                <div className="mt-6 bg-white/15 rounded-xl p-4 space-y-3">
                  <div>
                    <div className="text-white/70 text-xs mb-1">{t("Costo unitario", "Unit cost")}</div>
                    <div className="text-2xl font-extrabold tabular-nums">{fmt(costoUnitario)}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">{t(`Precio mínimo de venta (${margenUtilidad}% utilidad)`, `Minimum selling price (${margenUtilidad}% margin)`)}</div>
                    <div className="text-3xl font-extrabold tabular-nums">{fmt(precioMinimo)}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">{t("Utilidad por unidad", "Profit per unit")}</div>
                    <div className="text-xl font-bold tabular-nums">{fmt(utilidadUnidad)}</div>
                  </div>
                </div>

                {costoUnitario === 0 && (
                  <p className="text-blue-200 text-xs mt-4 text-center">
                    {t("Ingresa tus insumos y costos para ver el resultado.", "Enter your inputs and costs to see the result.")}
                  </p>
                )}
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-5 text-sm text-gray-600">
                <div className="font-semibold text-gray-900 mb-2">💡 {t("Recuerda", "Remember")}</div>
                <p>{t("El precio de venta final también depende del mercado y la competencia. Usa este resultado como el", "The final selling price also depends on the market and competition. Use this as the")} <strong>{t("precio mínimo", "minimum price")}</strong> {t("para no vender a pérdida.", "to avoid selling at a loss.")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
