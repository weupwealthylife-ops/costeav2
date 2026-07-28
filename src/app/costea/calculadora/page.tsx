"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLang } from "@/contexts/LanguageContext";

// ── Interfaces ────────────────────────────────────────────────────────────────

interface Insumo {
  id: number;
  nombre: string;
  cantidadStr: string;
  unidad: string;
  costoStr: string;
}

interface MODRow {
  id: number;
  area: string;
  costoHoraStr: string;
  tiempoStr: string;
}

interface IndustryBenchmark {
  label: string;
  labelEn: string;
  minGrossMargin: number;
  goodGrossMargin: number;
  minOpMargin: number;
  goodOpMargin: number;
  context: string;
  contextEn: string;
}

// ── Industry benchmarks ───────────────────────────────────────────────────────

const INDUSTRIES: Record<string, IndustryBenchmark> = {
  alimentos: {
    label: "Alimentos y Bebidas",
    labelEn: "Food & Beverage",
    minGrossMargin: 25,
    goodGrossMargin: 45,
    minOpMargin: 5,
    goodOpMargin: 12,
    context: "Alta rotación, perecederos y cumplimiento sanitario elevan los costos fijos.",
    contextEn: "High turnover, perishables, and compliance costs raise fixed expenses.",
  },
  moda: {
    label: "Moda y Confección",
    labelEn: "Fashion & Apparel",
    minGrossMargin: 40,
    goodGrossMargin: 60,
    minOpMargin: 10,
    goodOpMargin: 20,
    context: "Estacionalidad e inventario rezagado son los principales riesgos de margen.",
    contextEn: "Seasonality and excess inventory are the main margin risks.",
  },
  manufactura: {
    label: "Manufactura / Producción",
    labelEn: "Manufacturing",
    minGrossMargin: 20,
    goodGrossMargin: 38,
    minOpMargin: 8,
    goodOpMargin: 15,
    context: "CIF y mano de obra son los factores determinantes; eficiencia en planta es clave.",
    contextEn: "Overhead and labor are the key drivers; plant efficiency is critical.",
  },
  retail: {
    label: "Retail / Comercio",
    labelEn: "Retail / Commerce",
    minGrossMargin: 20,
    goodGrossMargin: 50,
    minOpMargin: 2,
    goodOpMargin: 8,
    context: "Alta competencia con márgenes ajustados; el volumen y la rotación son determinantes.",
    contextEn: "Highly competitive with thin margins; volume and turnover are key.",
  },
  servicios: {
    label: "Servicios Profesionales",
    labelEn: "Professional Services",
    minGrossMargin: 50,
    goodGrossMargin: 75,
    minOpMargin: 15,
    goodOpMargin: 30,
    context: "La MOD es el principal costo; maximizar la tarifa por hora y la ocupación es esencial.",
    contextEn: "Labor is the main cost; maximizing hourly rate and utilization is essential.",
  },
  tecnologia: {
    label: "Tecnología / Software",
    labelEn: "Technology / Software",
    minGrossMargin: 60,
    goodGrossMargin: 80,
    minOpMargin: 15,
    goodOpMargin: 30,
    context: "Márgenes brutos altos son la norma; ventas y marketing suelen ser el mayor costo operativo.",
    contextEn: "High gross margins are the norm; sales and marketing are usually the biggest cost.",
  },
  salud: {
    label: "Salud y Estética",
    labelEn: "Health & Beauty",
    minGrossMargin: 40,
    goodGrossMargin: 65,
    minOpMargin: 10,
    goodOpMargin: 22,
    context: "Insumos certificados y cumplimiento normativo elevan los costos; fidelización es clave.",
    contextEn: "Certified inputs and regulatory compliance raise costs; customer retention is key.",
  },
  construccion: {
    label: "Construcción / Obras",
    labelEn: "Construction",
    minGrossMargin: 15,
    goodGrossMargin: 30,
    minOpMargin: 3,
    goodOpMargin: 10,
    context: "Alta inversión inicial y riesgo de sobrecostos; la gestión de proveedores es crítica.",
    contextEn: "High upfront investment and cost overrun risk; supplier management is critical.",
  },
  agro: {
    label: "Agroindustria / Agro",
    labelEn: "Agriculture",
    minGrossMargin: 10,
    goodGrossMargin: 25,
    minOpMargin: 3,
    goodOpMargin: 8,
    context: "Dependencia de clima y precios de commodities; control de costos es la palanca principal.",
    contextEn: "Dependent on weather and commodity prices; cost control is the main lever.",
  },
  artesania: {
    label: "Artesanía / Manualidades",
    labelEn: "Crafts & Handmade",
    minGrossMargin: 50,
    goodGrossMargin: 70,
    minOpMargin: 15,
    goodOpMargin: 30,
    context: "El valor percibido permite márgenes altos; evita competir solo por precio.",
    contextEn: "Perceived value enables high margins; avoid competing on price alone.",
  },
};

// ── Defaults ──────────────────────────────────────────────────────────────────

const defaultInsumos: Insumo[] = [
  { id: 1, nombre: "", cantidadStr: "1", unidad: "und", costoStr: "" },
];

const defaultMOD: MODRow[] = [
  { id: 1, area: "", costoHoraStr: "", tiempoStr: "" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

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

function num(s: string) {
  const v = parseFloat(s);
  return isNaN(v) ? 0 : v;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function CalculadoraPage() {
  const { t } = useLang();

  const [industria, setIndustria] = useState("");
  const [productoNombre, setProductoNombre] = useState("");
  const [insumos, setInsumos] = useState<Insumo[]>(defaultInsumos);
  const [modRows, setModRows] = useState<MODRow[]>(defaultMOD);
  const [ordenamientoHabilitado, setOrdenamientoHabilitado] = useState(false);
  const [cifStr, setCifStr] = useState("");
  const [gastosStr, setGastosStr] = useState("");
  const [margenBruto, setMargenBruto] = useState(30);

  // ── Calculations ───────────────────────────────────────────────────────────
  const costoMateriaPrima = insumos.reduce(
    (sum, i) => sum + num(i.cantidadStr) * num(i.costoStr),
    0
  );
  const totalMOD = modRows.reduce(
    (sum, r) => sum + num(r.costoHoraStr) * num(r.tiempoStr),
    0
  );
  const totalHoras = modRows.reduce((sum, r) => sum + num(r.tiempoStr), 0);
  const cifPorUnidad = num(cifStr);
  const gastosAdmonVentas = num(gastosStr);
  const costoUnitario = costoMateriaPrima + totalMOD + cifPorUnidad;
  const margenBrutoPesos = costoUnitario * (margenBruto / 100);
  const precioMinimo = costoUnitario + margenBrutoPesos;
  const utilidadOperacional = margenBrutoPesos - gastosAdmonVentas;
  const utilidadOperacionalPct =
    precioMinimo > 0 ? (utilidadOperacional / precioMinimo) * 100 : 0;

  // ── Industry-aware recommendations ────────────────────────────────────────
  const benchmark = industria ? INDUSTRIES[industria] : null;
  const hasData = costoUnitario > 0;

  type AlertLevel = "error" | "warning" | "success" | "info";
  interface Rec { level: AlertLevel; title: string; titleEn: string; body: string; bodyEn: string }
  const recommendations: Rec[] = [];

  if (benchmark && hasData) {
    if (margenBruto < benchmark.minGrossMargin) {
      recommendations.push({
        level: "error",
        title: "Margen bruto muy bajo para tu sector",
        titleEn: "Gross margin too low for your sector",
        body: `Tu margen bruto es ${margenBruto}%, por debajo del mínimo recomendado para ${benchmark.label} (${benchmark.minGrossMargin}%). Revisa tus costos de producción o sube el precio de venta. ${benchmark.context}`,
        bodyEn: `Your gross margin is ${margenBruto}%, below the recommended minimum for ${benchmark.labelEn} (${benchmark.minGrossMargin}%). Review production costs or raise the selling price. ${benchmark.contextEn}`,
      });
    } else if (margenBruto < benchmark.goodGrossMargin) {
      recommendations.push({
        level: "warning",
        title: "Margen bruto aceptable, pero con margen de mejora",
        titleEn: "Acceptable gross margin, room for improvement",
        body: `Tu margen de ${margenBruto}% es aceptable para ${benchmark.label}, aunque el rango saludable está en ${benchmark.goodGrossMargin}%+. Busca optimizar costos de insumos o CIF.`,
        bodyEn: `Your ${margenBruto}% margin is acceptable for ${benchmark.labelEn}, but the healthy range starts at ${benchmark.goodGrossMargin}%+. Look to optimize input or overhead costs.`,
      });
    } else {
      recommendations.push({
        level: "success",
        title: "Margen bruto saludable",
        titleEn: "Healthy gross margin",
        body: `¡Bien! Tu margen de ${margenBruto}% supera el benchmark saludable para ${benchmark.label} (${benchmark.minGrossMargin}%–${benchmark.goodGrossMargin}%+).`,
        bodyEn: `Your ${margenBruto}% margin exceeds the healthy benchmark for ${benchmark.labelEn} (${benchmark.minGrossMargin}%–${benchmark.goodGrossMargin}%+).`,
      });
    }

    if (utilidadOperacional < 0) {
      recommendations.push({
        level: "error",
        title: "Utilidad operacional negativa — estás operando a pérdida",
        titleEn: "Negative operating profit — you are losing money",
        body: `Tus gastos de administración y ventas (${fmt(gastosAdmonVentas)}) superan el margen bruto (${fmt(margenBrutoPesos)}). Reduce gastos fijos o incrementa el margen bruto.`,
        bodyEn: `Your admin & sales expenses (${fmt(gastosAdmonVentas)}) exceed the gross margin (${fmt(margenBrutoPesos)}). Reduce fixed costs or increase the gross margin.`,
      });
    } else if (utilidadOperacionalPct < benchmark.minOpMargin) {
      recommendations.push({
        level: "warning",
        title: "Utilidad operacional en zona de riesgo",
        titleEn: "Operating profit in the risk zone",
        body: `Con ${utilidadOperacionalPct.toFixed(1)}% de utilidad sobre el precio de venta, estás por debajo del mínimo recomendado para ${benchmark.label} (${benchmark.minOpMargin}%). Cualquier imprevisto puede generar pérdidas.`,
        bodyEn: `At ${utilidadOperacionalPct.toFixed(1)}% operating profit over selling price, you are below the recommended minimum for ${benchmark.labelEn} (${benchmark.minOpMargin}%). Any unexpected cost can lead to losses.`,
      });
    } else if (utilidadOperacionalPct < benchmark.goodOpMargin) {
      recommendations.push({
        level: "warning",
        title: "Utilidad operacional aceptable",
        titleEn: "Acceptable operating profit",
        body: `Tu utilidad operacional de ${utilidadOperacionalPct.toFixed(1)}% es aceptable, pero el nivel saludable para ${benchmark.label} está en ${benchmark.goodOpMargin}%+. Revisa si puedes reducir gastos administrativos.`,
        bodyEn: `Your ${utilidadOperacionalPct.toFixed(1)}% operating profit is acceptable, but the healthy level for ${benchmark.labelEn} is ${benchmark.goodOpMargin}%+. Consider reducing admin costs.`,
      });
    } else {
      recommendations.push({
        level: "success",
        title: "Utilidad operacional excelente",
        titleEn: "Excellent operating profit",
        body: `¡Excelente! Tu utilidad de ${utilidadOperacionalPct.toFixed(1)}% supera el benchmark para ${benchmark.label} (${benchmark.goodOpMargin}%+). Estás en una posición financiera sólida.`,
        bodyEn: `Your ${utilidadOperacionalPct.toFixed(1)}% operating profit exceeds the benchmark for ${benchmark.labelEn} (${benchmark.goodOpMargin}%+). You are in a strong financial position.`,
      });
    }

    recommendations.push({
      level: "info",
      title: `Contexto: ${benchmark.label}`,
      titleEn: `Context: ${benchmark.labelEn}`,
      body: benchmark.context,
      bodyEn: benchmark.contextEn,
    });
  }

  // ── Insumo handlers ────────────────────────────────────────────────────────
  function addInsumo() {
    setInsumos((prev) => [
      ...prev,
      { id: Date.now(), nombre: "", cantidadStr: "1", unidad: "und", costoStr: "" },
    ]);
  }
  function removeInsumo(id: number) {
    setInsumos((prev) => prev.filter((i) => i.id !== id));
  }
  function updateInsumo(id: number, field: keyof Insumo, value: string) {
    setInsumos((prev) =>
      prev.map((i) => (i.id === id ? { ...i, [field]: value } : i))
    );
  }

  // ── MOD handlers ───────────────────────────────────────────────────────────
  function addMOD() {
    setModRows((prev) => [
      ...prev,
      { id: Date.now(), area: "", costoHoraStr: "", tiempoStr: "" },
    ]);
  }
  function removeMOD(id: number) {
    setModRows((prev) => prev.filter((r) => r.id !== id));
  }
  function updateMOD(id: number, field: keyof MODRow, value: string) {
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

  // ── Alert styles ───────────────────────────────────────────────────────────
  const alertStyles: Record<AlertLevel, { card: string; title: string; body: string; dot: string }> = {
    error:   { card: "bg-red-50 border border-red-200",     title: "text-red-800",    body: "text-red-700",    dot: "bg-red-500" },
    warning: { card: "bg-amber-50 border border-amber-200", title: "text-amber-800",  body: "text-amber-700",  dot: "bg-amber-400" },
    success: { card: "bg-green-50 border border-green-200", title: "text-green-800",  body: "text-green-700",  dot: "bg-green-500" },
    info:    { card: "bg-blue-50 border border-blue-100",   title: "text-blue-800",   body: "text-blue-700",   dot: "bg-blue-400" },
  };
  const levelIcons: Record<AlertLevel, string> = { error: "✕", warning: "⚠", success: "✓", info: "i" };

  // Slider benchmark marker positions (clamped so labels stay visible)
  const minPct = benchmark ? Math.min(Math.max((benchmark.minGrossMargin / 200) * 100, 3), 94) : 0;
  const goodPct = benchmark ? Math.min(Math.max((benchmark.goodGrossMargin / 200) * 100, 3), 94) : 0;

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

          {/* ── Industry selector ─────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3">
              <div className="shrink-0">
                <label htmlFor="tipo-industria" className="font-bold text-gray-900 block">
                  {t("Tipo de industria", "Industry type")}
                </label>
                <p className="text-xs text-gray-400 mt-0.5">
                  {t(
                    "Activa recomendaciones personalizadas según tu sector",
                    "Activates personalized recommendations for your sector"
                  )}
                </p>
              </div>
              <div className="sm:ml-auto w-full sm:w-72">
                <select
                  id="tipo-industria"
                  value={industria}
                  onChange={(e) => setIndustria(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">{t("— Selecciona tu industria —", "— Select your industry —")}</option>
                  {Object.entries(INDUSTRIES).map(([key, ind]) => (
                    <option key={key} value={key}>
                      {t(ind.label, ind.labelEn)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {benchmark && (
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {t("Margen bruto mín.", "Min. gross margin")}: {benchmark.minGrossMargin}%
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  {t("Margen bruto ideal", "Ideal gross margin")}: {benchmark.goodGrossMargin}%+
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-green-50 text-green-700 border border-green-100 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  {t("Utilidad op. ideal", "Ideal op. margin")}: {benchmark.goodOpMargin}%+
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* ── Left: Inputs ──────────────────────────────────────────────── */}
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
                  {/* Column headers — desktop */}
                  <div className="hidden sm:grid grid-cols-12 gap-2 text-xs text-gray-400 font-medium px-1">
                    <span className="col-span-3">{t("Insumo", "Input")}</span>
                    <span className="col-span-2">{t("Cant.", "Qty")}</span>
                    <span className="col-span-2">{t("Unidad", "Unit")}</span>
                    <span className="col-span-2">{t("Costo c/u ($)", "Unit cost ($)")}</span>
                    <span className="col-span-2 text-right">{t("Total", "Total")}</span>
                    <span className="col-span-1" />
                  </div>

                  {insumos.map((insumo) => {
                    const rowTotal = num(insumo.cantidadStr) * num(insumo.costoStr);
                    return (
                      <div key={insumo.id} className="flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:items-center bg-gray-50 sm:bg-transparent rounded-xl sm:rounded-none p-3 sm:p-0">
                        {/* Nombre */}
                        <input
                          type="text"
                          value={insumo.nombre}
                          onChange={(e) => updateInsumo(insumo.id, "nombre", e.target.value)}
                          placeholder={t("Ej: Harina", "e.g. Flour")}
                          aria-label={t("Nombre del insumo", "Input name")}
                          className="sm:col-span-3 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-0"
                        />
                        {/* Cantidad + Unidad + Costo — flex row on mobile, grid cells on desktop */}
                        <div className="flex gap-2 sm:contents">
                          <input
                            type="text"
                            inputMode="decimal"
                            value={insumo.cantidadStr}
                            onChange={(e) => updateInsumo(insumo.id, "cantidadStr", e.target.value)}
                            aria-label={t("Cantidad", "Quantity")}
                            placeholder="0"
                            className="flex-1 sm:col-span-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-0"
                          />
                          <select
                            value={insumo.unidad}
                            onChange={(e) => updateInsumo(insumo.id, "unidad", e.target.value)}
                            aria-label={t("Unidad", "Unit")}
                            className="flex-1 sm:col-span-2 border border-gray-200 rounded-lg px-2 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-0"
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
                            type="text"
                            inputMode="decimal"
                            value={insumo.costoStr}
                            onChange={(e) => updateInsumo(insumo.id, "costoStr", e.target.value)}
                            aria-label={t("Costo unitario", "Unit cost")}
                            placeholder="0"
                            className="flex-1 sm:col-span-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-0"
                          />
                          {/* Total — desktop: grid cell; mobile: hidden here, shown below */}
                          <div className="hidden sm:flex sm:col-span-2 items-center justify-end pr-1 min-w-0">
                            <span className="text-sm font-semibold text-gray-800 tabular-nums truncate">
                              {fmt(rowTotal)}
                            </span>
                          </div>
                          <button
                            onClick={() => removeInsumo(insumo.id)}
                            aria-label={t("Eliminar insumo", "Remove input")}
                            className="sm:col-span-1 w-9 h-9 flex items-center justify-center text-gray-300 hover:text-red-400 transition-colors text-lg font-bold rounded-lg hover:bg-red-50 shrink-0"
                          >
                            ×
                          </button>
                        </div>
                        {/* Mobile total */}
                        <div className="sm:hidden flex justify-between items-center text-xs text-gray-500 px-1">
                          <span>{t("Total fila:", "Row total:")}</span>
                          <span className="font-semibold text-gray-800 tabular-nums">{fmt(rowTotal)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Grand total row */}
                <div className="mt-3 border-t border-gray-100 pt-3 flex items-center justify-between px-1">
                  <button
                    onClick={addInsumo}
                    className="text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                  >
                    + {t("Agregar insumo", "Add input")}
                  </button>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">{t("Total materia prima:", "Total raw materials:")}</span>
                    <span className="font-bold text-gray-900 tabular-nums">{fmt(costoMateriaPrima)}</span>
                  </div>
                </div>
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
                      className={`inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                        ordenamientoHabilitado
                          ? "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200"
                          : "bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100"
                      }`}
                    >
                      {t("Habilitar Ordenamiento", "Enable Sorting")}
                    </button>
                  </div>
                </div>

                {modRows.length > 0 && (
                  <div className="space-y-2">
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
                      const costoPorArea = num(row.costoHoraStr) * num(row.tiempoStr);
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
                              >▲</button>
                              <button
                                onClick={() => moveMOD(idx, 1)}
                                disabled={idx === modRows.length - 1}
                                aria-label={t("Mover abajo", "Move down")}
                                className="text-gray-300 hover:text-gray-600 disabled:opacity-20 text-[10px] p-0.5 leading-none"
                              >▼</button>
                            </div>
                          )}
                          <input
                            type="text"
                            value={row.area}
                            onChange={(e) => updateMOD(row.id, "area", e.target.value)}
                            placeholder={t("Ej: Confección", "e.g. Assembly")}
                            aria-label={t("Área fabricante", "Production area")}
                            className={`border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-0 ${ordenamientoHabilitado ? "sm:col-span-3" : "sm:col-span-4"}`}
                          />
                          <input
                            type="text"
                            inputMode="decimal"
                            value={row.costoHoraStr}
                            onChange={(e) => updateMOD(row.id, "costoHoraStr", e.target.value)}
                            aria-label={t("Costo hora hombre", "Hourly rate")}
                            placeholder="0"
                            className="sm:col-span-3 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-0"
                          />
                          <input
                            type="text"
                            inputMode="decimal"
                            value={row.tiempoStr}
                            onChange={(e) => updateMOD(row.id, "tiempoStr", e.target.value)}
                            aria-label={t("Tiempo estándar en horas", "Standard time in hours")}
                            placeholder="0"
                            className="sm:col-span-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-0"
                          />
                          <div className="sm:col-span-2 text-right text-sm font-semibold text-gray-700 tabular-nums hidden sm:block pr-1">
                            {fmt(costoPorArea)}
                          </div>
                          <button
                            onClick={() => removeMOD(row.id)}
                            aria-label={t("Eliminar área", "Remove area")}
                            className="sm:col-span-1 w-9 h-9 flex items-center justify-center text-gray-300 hover:text-red-400 transition-colors text-lg font-bold rounded-lg hover:bg-red-50 ml-auto sm:ml-0"
                          >×</button>
                        </div>
                      );
                    })}

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

              {/* CIF */}
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
                    type="text"
                    inputMode="decimal"
                    value={cifStr}
                    onChange={(e) => setCifStr(e.target.value)}
                    className="w-full sm:w-48 border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

              {/* Margen bruto */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
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

                {/* Benchmark markers below slider */}
                {benchmark ? (
                  <div className="relative h-7 mt-1 mb-1">
                    <div
                      style={{ left: `${minPct}%` }}
                      className="absolute top-0 -translate-x-1/2 flex flex-col items-center gap-px"
                    >
                      <span className="w-px h-2 bg-amber-400 block" />
                      <span className="text-[10px] font-semibold text-amber-600 whitespace-nowrap leading-none">
                        mín {benchmark.minGrossMargin}%
                      </span>
                    </div>
                    <div
                      style={{ left: `${goodPct}%` }}
                      className="absolute top-0 -translate-x-1/2 flex flex-col items-center gap-px"
                    >
                      <span className="w-px h-2 bg-green-500 block" />
                      <span className="text-[10px] font-semibold text-green-600 whitespace-nowrap leading-none">
                        ideal {benchmark.goodGrossMargin}%
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-2 mt-1 mb-1" />
                )}

                <div className="flex justify-between text-xs text-gray-400">
                  <span>0%</span>
                  <span>100%</span>
                  <span>200%</span>
                </div>
              </div>

              {/* Gastos admon */}
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
                    type="text"
                    inputMode="decimal"
                    value={gastosStr}
                    onChange={(e) => setGastosStr(e.target.value)}
                    className="w-full sm:w-48 border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">
                  <div className="flex-1 bg-blue-50 border border-blue-100 rounded-xl p-4 min-w-0">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2 truncate">
                      {t("Margen bruto", "Gross margin")}
                    </div>
                    <div className="text-2xl font-extrabold text-gray-900 tabular-nums truncate">
                      {fmt(margenBrutoPesos)}
                    </div>
                  </div>

                  <div className="flex items-center justify-center px-3 shrink-0">
                    <span className="text-xl font-bold text-gray-400">−</span>
                  </div>

                  <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-4 min-w-0">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 truncate">
                      {t("Gastos admon.", "Admin & sales")}
                    </div>
                    <div className="text-2xl font-extrabold text-gray-900 tabular-nums truncate">
                      {fmt(gastosAdmonVentas)}
                    </div>
                  </div>

                  <div className="flex items-center justify-center px-3 shrink-0">
                    <span className="text-xl font-bold text-gray-400">=</span>
                  </div>

                  <div
                    className={`flex-1 rounded-xl p-4 border-2 min-w-0 ${
                      utilidadOperacional >= 0
                        ? "bg-green-50 border-green-200"
                        : "bg-red-50 border-red-200"
                    }`}
                  >
                    <div
                      className={`text-xs font-semibold uppercase tracking-wide mb-2 truncate ${
                        utilidadOperacional >= 0 ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {t("Utilidad op.", "Op. profit")}
                    </div>
                    <div
                      className={`text-2xl font-extrabold tabular-nums truncate ${
                        utilidadOperacional >= 0 ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {fmt(utilidadOperacional)}
                    </div>
                    <div
                      className={`text-sm font-semibold tabular-nums mt-1 ${
                        utilidadOperacional >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {utilidadOperacionalPct.toFixed(1)}%{" "}
                      <span className="font-normal text-xs opacity-70">
                        {t("sobre precio", "of price")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 text-center text-sm text-gray-500">
                  {t("¿Tienes dudas al calcularlo?", "Questions about the calculation?")}{" "}
                  <a
                    href="https://wa.me/573205046723?text=Hola%2C%20tengo%20dudas%20usando%20la%20calculadora%20de%20costos%2C%20me%20gustar%C3%ADa%20una%20consultor%C3%ADa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2"
                  >
                    {t("contáctanos", "contact us")}
                  </a>
                </div>
              </div>

            </div>

            {/* ── Right: Results (sticky) ────────────────────────────────────── */}
            <div className="space-y-4 lg:sticky lg:top-20 lg:self-start">

              <div className="bg-blue-600 text-white rounded-2xl p-6">
                <h2 className="font-bold text-lg mb-6">{t("Resumen de costos", "Cost summary")}</h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm gap-2">
                    <span className="text-white/80 truncate">{t("Materia prima", "Raw materials")}</span>
                    <span className="font-semibold tabular-nums shrink-0">{fmt(costoMateriaPrima)}</span>
                  </div>
                  <div className="flex justify-between text-sm gap-2">
                    <span className="text-white/80 truncate">{t("Mano de obra (MOD)", "Labor (MOD)")}</span>
                    <span className="font-semibold tabular-nums shrink-0">{fmt(totalMOD)}</span>
                  </div>
                  <div className="flex justify-between text-sm gap-2">
                    <span className="text-white/80 truncate">{t("CIF por unidad", "CIF per unit")}</span>
                    <span className="font-semibold tabular-nums shrink-0">{fmt(cifPorUnidad)}</span>
                  </div>
                  <div className="border-t border-blue-500 pt-3 flex justify-between text-sm gap-2">
                    <span className="text-white/80 truncate">{t("Costo unitario", "Unit cost")}</span>
                    <span className="font-bold tabular-nums shrink-0">{fmt(costoUnitario)}</span>
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

          {/* ── Recomendaciones ───────────────────────────────────────────────── */}
          {benchmark && hasData ? (
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-lg font-extrabold text-gray-900">
                  {t("Recomendaciones", "Recommendations")}
                </h2>
                <span className="text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-2.5 py-0.5">
                  {t(benchmark.label, benchmark.labelEn)}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendations.map((rec, i) => {
                  const s = alertStyles[rec.level];
                  return (
                    <div key={i} className={`rounded-2xl p-5 ${s.card}`}>
                      <div className="flex items-start gap-3">
                        <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${s.dot}`}>
                          {levelIcons[rec.level]}
                        </span>
                        <div className="min-w-0">
                          <p className={`text-sm font-bold leading-snug ${s.title}`}>
                            {t(rec.title, rec.titleEn)}
                          </p>
                          <p className={`text-xs mt-1.5 leading-relaxed ${s.body}`}>
                            {t(rec.body, rec.bodyEn)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : !benchmark && hasData ? (
            <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-center gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">i</span>
              <p className="text-sm text-blue-700">
                {t(
                  "Selecciona tu tipo de industria arriba para ver recomendaciones personalizadas basadas en benchmarks de tu sector.",
                  "Select your industry type above to see personalized recommendations based on sector benchmarks."
                )}
              </p>
            </div>
          ) : null}

        </div>
      </div>
      <Footer />
    </>
  );
}
