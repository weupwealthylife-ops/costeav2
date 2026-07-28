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

interface MODRow {
  id: number;
  area: string;
  costoHoraHombre: number;
  tiempoEstandar: number;
}

const defaultInsumos: Insumo[] = [
  { id: 1, nombre: "", cantidad: 1, unidad: "und", costoUnitario: 0 },
];

const defaultMOD: MODRow[] = [
  { id: 1, area: "", costoHoraHombre: 0, tiempoEstandar: 0 },
];

function fmt(n: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);
}

function fmtDec(n: number) {
  return new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(n);
}

function selectAll(e: React.FocusEvent<HTMLInputElement>) {
  e.target.select();
}

export default function CalculadoraPage() {
  const { t } = useLang();

  const [productoNombre, setProductoNombre] = useState("");
  const [insumos, setInsumos] = useState<Insumo[]>(defaultInsumos);
  const [modRows, setModRows] = useState<MODRow[]>(defaultMOD);
  const [ordenamientoHabilitado, setOrdenamientoHabilitado] = useState(false);
  const [cifPorUnidad, setCifPorUnidad] = useState(0);
  const [gastosAdmonVentas, setGastosAdmonVentas] = useState(0);
  const [margenBruto, setMargenBruto] = useState(30);

  // ── Calculations ──────────────────────────────────────────────────────────
  const costoMateriaPrima = insumos.reduce(
    (sum, i) => sum + i.cantidad * i.costoUnitario,
    0
  );
  const totalMOD = modRows.reduce(
    (sum, r) => sum + r.costoHoraHombre * r.tiempoEstandar,
    0
  );
  const totalHoras = modRows.reduce((sum, r) => sum + r.tiempoEstandar, 0);
  const costoUnitario = costoMateriaPrima + totalMOD + cifPorUnidad;
  const margenBrutoPesos = costoUnitario * (margenBruto / 100);
  const precioMinimo = costoUnitario + margenBrutoPesos;
  const utilidadOperacional = margenBrutoPesos - gastosAdmonVentas;

  // ── Insumo handlers ───────────────────────────────────────────────────────
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

  // ── MOD handlers ──────────────────────────────────────────────────────────
  function addMOD() {
    setModRows((prev) => [
      ...prev,
      { id: Date.now(), area: "", costoHoraHombre: 0, tiempoEstandar: 0 },
    ]);
  }
  function removeMOD(id: number) {
    setModRows((prev) => prev.filter((r) => r.id !== id));
  }
  function updateMOD(id: number, field: keyof MODRow, value: string | number) {
    setModRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  }
  function moveMOD(index: number, direction: -1 | 1) {
    const next = [...modRows];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setModRows(next);
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
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3">
              {t("Calculadora de Costos", "Cost Calculator")}
            </h1>
            <p className="text-gray-500 mt-1">
              {t(
                "Calcula el costo real de tu producto o servicio y define el precio de venta.",
                "Calculate the real cost of your product or service and set your selling price."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* ── Left: Inputs ─────────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Producto */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">
                  {t("Producto o servicio", "Product or service")}
                </h2>
                <input
                  type="text"
                  value={productoNombre}
                  onChange={(e) => setProductoNombre(e.target.value)}
                  placeholder={t("Ej: Torta de cumpleaños 20 porciones", "e.g. Birthday cake 20 servings")}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Materia prima e insumos */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">
                    {t("Materia prima e insumos", "Raw materials & inputs")}
                  </h2>
                  <span className="text-sm text-blue-600 font-semibold tabular-nums">
                    {fmt(costoMateriaPrima)}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="hidden sm:grid grid-cols-12 gap-2 text-xs text-gray-400 font-medium px-1">
                    <span className="col-span-4">{t("Insumo", "Input")}</span>
                    <span className="col-span-2">{t("Cant.", "Qty")}</span>
                    <span className="col-span-2">{t("Unidad", "Unit")}</span>
                    <span className="col-span-3">{t("Costo c/u ($)", "Unit cost ($)")}</span>
                    <span className="col-span-1" />
                  </div>
                  {insumos.map((insumo) => (
                    <div
                      key={insumo.id}
                      className="flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:items-center bg-gray-50 sm:bg-transparent rounded-xl sm:rounded-none p-3 sm:p-0"
                    >
                      <input
                        type="text"
                        value={insumo.nombre}
                        onChange={(e) => updateInsumo(insumo.id, "nombre", e.target.value)}
                        placeholder={t("Ej: Harina", "e.g. Flour")}
                        aria-label={t("Nombre del insumo", "Input name")}
                        className="sm:col-span-4 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      />
                      <div className="flex gap-2 sm:contents">
                        <input
                          type="number"
                          min={0}
                          value={insumo.cantidad}
                          onFocus={selectAll}
                          onChange={(e) => updateInsumo(insumo.id, "cantidad", Number(e.target.value))}
                          aria-label={t("Cantidad", "Quantity")}
                          className="flex-1 sm:col-span-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                        <select
                          value={insumo.unidad}
                          onChange={(e) => updateInsumo(insumo.id, "unidad", e.target.value)}
                          aria-label={t("Unidad", "Unit")}
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
                          onFocus={selectAll}
                          onChange={(e) => updateInsumo(insumo.id, "costoUnitario", Number(e.target.value))}
                          aria-label={t("Costo unitario", "Unit cost")}
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
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h2 className="font-bold text-gray-900">{t("Mano de obra", "Labor")}</h2>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={addMOD}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100 transition-colors"
                    >
                      {t("Agregar área", "Add area")}
                      <span className="text-sm leading-none font-bold">+</span>
                    </button>
                    <button
                      onClick={() => setOrdenamientoHabilitado((o) => !o)}
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                        ordenamientoHabilitado
                          ? "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200"
                          : "bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100"
                      }`}
                    >
                      {t("Habilitar Ordenamiento", "Enable Sorting")}
                      <span className="text-sm leading-none">⇅</span>
                    </button>
                  </div>
                </div>

                {modRows.length > 0 && (
                  <div className="space-y-2">
                    {/* Column headers */}
                    <div className="hidden sm:grid grid-cols-12 gap-2 text-xs text-gray-400 font-medium px-1 mb-1">
                      {ordenamientoHabilitado && <span className="col-span-1" />}
                      <span className={ordenamientoHabilitado ? "col-span-3" : "col-span-4"}>
                        {t("Área", "Area")}
                      </span>
                      <span className="col-span-3">{t("$/hora hombre", "$/man-hour")}</span>
                      <span className="col-span-2">{t("Horas", "Hours")}</span>
                      <span className="col-span-2 text-right">{t("Costo", "Cost")}</span>
                      <span className="col-span-1" />
                    </div>

                    {modRows.map((row, idx) => {
                      const costoPorArea = row.costoHoraHombre * row.tiempoEstandar;
                      return (
                        <div
                          key={row.id}
                          className="flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:items-center bg-gray-50 sm:bg-transparent rounded-xl sm:rounded-none p-3 sm:p-0"
                        >
                          {ordenamientoHabilitado && (
                            <div className="sm:col-span-1 hidden sm:flex flex-col gap-0.5 items-center">
                              <button
                                onClick={() => moveMOD(idx, -1)}
                                disabled={idx === 0}
                                aria-label={t("Mover arriba", "Move up")}
                                className="text-gray-300 hover:text-gray-600 disabled:opacity-20 text-[10px] p-0.5 leading-none"
                              >
                                ▲
                              </button>
                              <button
                                onClick={() => moveMOD(idx, 1)}
                                disabled={idx === modRows.length - 1}
                                aria-label={t("Mover abajo", "Move down")}
                                className="text-gray-300 hover:text-gray-600 disabled:opacity-20 text-[10px] p-0.5 leading-none"
                              >
                                ▼
                              </button>
                            </div>
                          )}
                          <input
                            type="text"
                            value={row.area}
                            onChange={(e) => updateMOD(row.id, "area", e.target.value)}
                            placeholder={t("Ej: Confección", "e.g. Assembly")}
                            aria-label={t("Área fabricante", "Production area")}
                            className={`border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${ordenamientoHabilitado ? "sm:col-span-3" : "sm:col-span-4"}`}
                          />
                          <input
                            type="number"
                            min={0}
                            value={row.costoHoraHombre}
                            onFocus={selectAll}
                            onChange={(e) => updateMOD(row.id, "costoHoraHombre", Number(e.target.value))}
                            aria-label={t("Costo hora hombre", "Hourly rate")}
                            className="sm:col-span-3 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                          />
                          <input
                            type="number"
                            min={0}
                            step={0.0001}
                            value={row.tiempoEstandar}
                            onFocus={selectAll}
                            onChange={(e) => updateMOD(row.id, "tiempoEstandar", Number(e.target.value))}
                            aria-label={t("Tiempo estándar en horas", "Standard time in hours")}
                            className="sm:col-span-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                          />
                          <div className="sm:col-span-2 text-right text-sm font-semibold text-gray-700 tabular-nums hidden sm:block pr-1">
                            {fmt(costoPorArea)}
                          </div>
                          <button
                            onClick={() => removeMOD(row.id)}
                            aria-label={t("Eliminar área", "Remove area")}
                            className="sm:col-span-1 w-9 h-9 flex items-center justify-center text-gray-300 hover:text-red-400 transition-colors text-lg font-bold rounded-lg hover:bg-red-50 ml-auto sm:ml-0"
                          >
                            ×
                          </button>
                        </div>
                      );
                    })}

                    {/* Totals row */}
                    <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-sm px-1">
                      <span className="text-gray-500 text-xs">
                        {t("Total horas:", "Total hours:")}{" "}
                        <span className="font-semibold text-gray-700 tabular-nums">{fmtDec(totalHoras)}</span>
                      </span>
                      <span className="font-bold text-gray-800 tabular-nums text-sm">
                        {t("Total MOD:", "Total MOD:")} {fmt(totalMOD)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Costos indirectos por producto (CIF) */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">
                  {t("Costos indirectos por producto", "Indirect costs per product")}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label htmlFor="cif-por-unidad" className="text-sm text-gray-600 sm:whitespace-nowrap">
                    {t("CIF por unidad ($):", "CIF per unit ($):")}
                  </label>
                  <input
                    id="cif-por-unidad"
                    type="number"
                    min={0}
                    value={cifPorUnidad}
                    onFocus={selectAll}
                    onChange={(e) => setCifPorUnidad(Number(e.target.value))}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {t(
                    "Luz, gas, arriendo del local, empaques u otros costos indirectos prorrateados por unidad.",
                    "Electricity, gas, rent, packaging, or other indirect costs allocated per unit."
                  )}
                </p>
              </div>

              {/* Margen bruto esperado */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-bold text-gray-900">
                    {t("Margen bruto esperado", "Expected gross margin")}
                  </h2>
                  <span className="text-2xl font-extrabold text-blue-600 tabular-nums">
                    {margenBruto}%
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={200}
                  step={5}
                  value={margenBruto}
                  onChange={(e) => setMargenBruto(Number(e.target.value))}
                  aria-label={t("Margen bruto esperado", "Expected gross margin")}
                  aria-valuetext={`${margenBruto}%`}
                  className="w-full accent-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                  <span>200%</span>
                </div>
              </div>

              {/* Gastos de administración y ventas */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">
                  {t("Gastos de administración y ventas por unidad", "Admin & sales expenses per unit")}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label htmlFor="gastos-admon" className="text-sm text-gray-600 sm:whitespace-nowrap">
                    {t("Gasto por unidad ($):", "Expense per unit ($):")}
                  </label>
                  <input
                    id="gastos-admon"
                    type="number"
                    min={0}
                    value={gastosAdmonVentas}
                    onFocus={selectAll}
                    onChange={(e) => setGastosAdmonVentas(Number(e.target.value))}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {t(
                    "Salarios administrativos, comisiones de ventas, publicidad y otros gastos no productivos prorrateados por unidad.",
                    "Administrative salaries, sales commissions, advertising, and other non-production expenses allocated per unit."
                  )}
                </p>
              </div>

              {/* Utilidad operacional */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="mb-5">
                  <h2 className="font-bold text-gray-900">{t("Utilidad operacional", "Operating profit")}</h2>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {t("Margen bruto − Gastos de administración y ventas", "Gross margin − Admin & sales expenses")}
                  </p>
                </div>

                {/* Equation tiles */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">
                  {/* Margen bruto */}
                  <div className="flex-1 bg-blue-50 border border-blue-100 rounded-xl p-4">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                      {t("Margen bruto", "Gross margin")}
                    </div>
                    <div className="text-2xl font-extrabold text-gray-900 tabular-nums">
                      {fmt(margenBrutoPesos)}
                    </div>
                  </div>

                  {/* − operator */}
                  <div className="flex items-center justify-center px-3 shrink-0">
                    <span className="text-xl font-bold text-gray-400">−</span>
                  </div>

                  {/* Gastos admon */}
                  <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      {t("Gastos admon y ventas", "Admin & sales")}
                    </div>
                    <div className="text-2xl font-extrabold text-gray-900 tabular-nums">
                      {fmt(gastosAdmonVentas)}
                    </div>
                  </div>

                  {/* = operator */}
                  <div className="flex items-center justify-center px-3 shrink-0">
                    <span className="text-xl font-bold text-gray-400">=</span>
                  </div>

                  {/* Result */}
                  <div
                    className={`flex-1 rounded-xl p-4 border-2 ${
                      utilidadOperacional >= 0
                        ? "bg-green-50 border-green-200"
                        : "bg-red-50 border-red-200"
                    }`}
                  >
                    <div
                      className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                        utilidadOperacional >= 0 ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {t("Utilidad operacional", "Operating profit")}
                    </div>
                    <div
                      className={`text-2xl font-extrabold tabular-nums ${
                        utilidadOperacional >= 0 ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {fmt(utilidadOperacional)}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ── Right: Results (entire column sticky) ────────────────── */}
            <div className="space-y-4 lg:sticky lg:top-20 lg:self-start">

              {/* Results panel */}
              <div className="bg-blue-600 text-white rounded-2xl p-6">
                <h2 className="font-bold text-lg mb-6">{t("Resumen de costos", "Cost summary")}</h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{t("Materia prima", "Raw materials")}</span>
                    <span className="font-semibold tabular-nums">{fmt(costoMateriaPrima)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{t("Mano de obra (MOD)", "Labor (MOD)")}</span>
                    <span className="font-semibold tabular-nums">{fmt(totalMOD)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{t("CIF por unidad", "CIF per unit")}</span>
                    <span className="font-semibold tabular-nums">{fmt(cifPorUnidad)}</span>
                  </div>
                  <div className="border-t border-blue-500 pt-3 flex justify-between text-sm">
                    <span className="text-white/80">{t("Costo unitario", "Unit cost")}</span>
                    <span className="font-bold tabular-nums">{fmt(costoUnitario)}</span>
                  </div>
                </div>

                <div className="mt-6 bg-white/15 rounded-xl p-4 space-y-3">
                  <div>
                    <div className="text-white/70 text-xs mb-1">{t("Costo unitario", "Unit cost")}</div>
                    <div className="text-2xl font-extrabold tabular-nums">{fmt(costoUnitario)}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">
                      {t(
                        `Precio mínimo de venta (${margenBruto}% margen bruto)`,
                        `Minimum selling price (${margenBruto}% gross margin)`
                      )}
                    </div>
                    <div className="text-3xl font-extrabold tabular-nums">{fmt(precioMinimo)}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">
                      {t("Utilidad operacional por unidad", "Operating profit per unit")}
                    </div>
                    <div
                      className={`text-xl font-bold tabular-nums ${
                        utilidadOperacional >= 0 ? "text-green-300" : "text-red-300"
                      }`}
                    >
                      {fmt(utilidadOperacional)}
                    </div>
                  </div>
                </div>

                {costoUnitario === 0 && (
                  <p className="text-white/70 text-xs mt-4 text-center">
                    {t(
                      "Ingresa tus insumos y costos para ver el resultado.",
                      "Enter your inputs and costs to see the result."
                    )}
                  </p>
                )}
              </div>

              {/* Recuerda — stays with the sticky column */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 text-sm text-gray-600">
                <div className="font-semibold text-gray-900 mb-2">
                  💡 {t("Recuerda", "Remember")}
                </div>
                <p>
                  {t(
                    "El precio de venta final también depende del mercado y la competencia. Usa este resultado como el",
                    "The final selling price also depends on the market and competition. Use this as the"
                  )}{" "}
                  <strong>{t("precio mínimo", "minimum price")}</strong>{" "}
                  {t("para no vender a pérdida.", "to avoid selling at a loss.")}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
