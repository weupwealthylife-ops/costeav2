"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { useLang } from "@/contexts/LanguageContext";

export default function CosteaAppPage() {
  const { t, lang } = useLang();

  const roadmap = [
    {
      status: "done",
      label: t("Disponible", "Available"),
      title: t("Calculadora de costos mejorada", "Improved cost calculator"),
      description: t(
        "Nueva interfaz para calcular costos de productos con hasta 20 insumos, con guardado automático.",
        "New interface to calculate product costs with up to 20 inputs, with automatic saving."
      ),
    },
    {
      status: "done",
      label: t("Disponible", "Available"),
      title: t("Punto de equilibrio visual", "Visual break-even point"),
      description: t(
        "Gráfica interactiva del punto de equilibrio que se actualiza en tiempo real mientras modificas tus datos.",
        "Interactive break-even chart that updates in real time as you modify your data."
      ),
    },
    {
      status: "soon",
      label: t("Próximamente", "Coming soon"),
      title: t("Reportes en PDF", "PDF reports"),
      description: t(
        "Exporta el análisis de costos en un PDF profesional para compartir con socios o clientes.",
        "Export cost analysis in a professional PDF to share with partners or clients."
      ),
    },
    {
      status: "soon",
      label: t("Próximamente", "Coming soon"),
      title: t("Comparador de escenarios", "Scenario comparator"),
      description: t(
        "Compara hasta 3 escenarios de precio o volumen de ventas para decidir la mejor estrategia.",
        "Compare up to 3 price or sales volume scenarios to decide the best strategy."
      ),
    },
    {
      status: "planned",
      label: t("Planeado", "Planned"),
      title: t("Integración con la Escuela", "School integration"),
      description: t(
        "Practica los ejercicios de cada lección dentro de la Costea App, conectando el aprendizaje con la acción.",
        "Practice lesson exercises directly inside Costea App, connecting learning with action."
      ),
    },
  ];

  const statusStyle: Record<string, string> = {
    done: "bg-blue-500",
    soon: "bg-amber-400",
    planned: "bg-gray-300",
  };

  const statusTagStyle: Record<string, string> = {
    done: "bg-blue-50 text-blue-700 border border-blue-100",
    soon: "bg-amber-50 text-amber-700 border border-amber-100",
    planned: "bg-gray-100 text-gray-500 border border-gray-200",
  };

  const doneCount = roadmap.filter(r => r.status === "done").length;

  const comingSoon = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t("Punto de Equilibrio", "Break-Even Analysis"),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: t("Reportes Exportables", "Exportable Reports"),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: t("Comparador de Escenarios", "Scenario Comparator"),
    },
  ];

  return (
    <>
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-b from-gray-950 via-[#0d2562] to-blue-700 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Costea App · {t("Plataforma de Costos", "Cost Platform")}
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] mb-8 text-white">
                {lang === "es" ? (
                  <>Gestiona los costos<br />de tu negocio.<br /><span className="text-blue-300">Sin complicaciones.</span></>
                ) : (
                  <>Manage your business<br />costs.<br /><span className="text-blue-300">Without complications.</span></>
                )}
              </h1>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-xl">
                {t(
                  "Sin hojas de cálculo. Sin fórmulas manuales. Solo ingresa tus datos y Costea App hace los cálculos por ti en segundos.",
                  "No spreadsheets. No manual formulas. Just enter your data and Costea App does the calculations for you in seconds."
                )}
              </p>
            </Reveal>
            <Reveal delay={2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://app.costea.com.co/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-xl text-base font-bold hover:bg-blue-50 transition-all duration-300 ease-out shadow-xl shadow-black/20 hover:-translate-y-0.5"
                >
                  {t("Ir a Costea App →", "Go to Costea App →")}
                </Link>
                <Link
                  href="/costea/calculadora"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/18 border border-white/25 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out"
                >
                  {t("Usar la Calculadora gratis", "Use the Calculator free")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

      </section>

      <WaveDivider fromColor="#1d4ed8" toColor="#f8fafc" />

      {/* ─── Calculadora feature section ─── */}
      <section className="pb-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: copy */}
            <Reveal variant="left">
              <div>
                <p className="text-[#16A34A] text-[12px] font-bold tracking-[0.08em] uppercase mb-5">
                  {t("✓ Disponible ahora", "✓ Available now")}
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-5">
                  {lang === "es" ? (
                    <>Calcula el costo real de<br />cualquier producto<br />en minutos.</>
                  ) : (
                    <>Calculate the real cost of<br />any product<br />in minutes.</>
                  )}
                </h2>
                <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
                  {t(
                    "Ingresa tus insumos, mano de obra y gastos indirectos. Costea calcula el costo unitario y el precio mínimo de venta con el margen que tú defines.",
                    "Enter your inputs, labor and overhead. Costea calculates unit cost and minimum selling price with the margin you define."
                  )}
                </p>
                <Link
                  href="/costea/calculadora"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-lg shadow-blue-200"
                >
                  {t("Abrir Calculadora gratis →", "Open Calculator free →")}
                </Link>
              </div>
            </Reveal>

            {/* Right: product mockup card */}
            <Reveal variant="right">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-6 max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                <div className="text-xs font-semibold text-slate-500 mb-4 pb-3 border-b border-slate-100">
                  {t("Cálculo de costos · Torta de chocolate", "Cost calculation · Chocolate cake")}
                </div>

                {/* Cost rows */}
                <div className="space-y-3 mb-4">
                  {[
                    { label: t("Materia prima", "Raw materials"), value: "$12,400" },
                    { label: t("Mano de obra", "Labor"), value: "$3,800" },
                    { label: t("Gastos indirectos", "Overhead"), value: "$2,300" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">{row.label}</span>
                      <span className="text-sm font-semibold text-gray-900 font-mono">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-3 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">{t("Costo total", "Total cost")}</span>
                    <span className="text-xl font-extrabold text-gray-900 font-mono">$18,500</span>
                  </div>
                </div>

                {/* Result chips */}
                <div className="flex gap-2">
                  <div className="flex-1 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-2.5 text-center">
                    {t("Precio sugerido", "Suggested price")}<br />
                    <span className="text-base font-extrabold">$28,000</span>
                  </div>
                  <div className="flex-1 rounded-xl bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-2.5 text-center">
                    {t("Margen", "Margin")}<br />
                    <span className="text-base font-extrabold">51%</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#f8fafc" toColor="#ffffff" flip={true} />

      {/* ─── Coming soon tools (compact) ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-3">
              {t("Próximamente en Costea App", "Coming soon to Costea App")}
            </p>
          </Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            {comingSoon.map((item) => (
              <Reveal key={item.title.toString()} variant="scale">
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-gray-800">{item.title}</div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {t("Próximamente", "Coming soon")}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#ffffff" toColor="#f9fafb" />

      {/* ─── Roadmap ─── */}
      <section id="roadmap" className="py-28 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: sticky panel */}
            <Reveal variant="left" className="lg:sticky lg:top-28">
              <div>
                <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  {t("Hoja de ruta", "Roadmap")}
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-[1.05] mb-4">
                  {lang === "es" ? (
                    <>Lo que viene<br />en Costea App.</>
                  ) : (
                    <>What's coming<br />to Costea App.</>
                  )}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-sm text-sm">
                  {t(
                    "Estamos construyendo el sistema de costos más completo para emprendedores colombianos.",
                    "We're building the most complete cost system for Colombian entrepreneurs."
                  )}
                </p>

                {/* Visual progress track */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{t("Progreso", "Progress")}</span>
                    <span className="text-sm font-bold text-blue-600">{doneCount}/{roadmap.length} {t("lanzadas", "shipped")}</span>
                  </div>

                  {/* Circle track */}
                  <div className="relative flex items-center mb-4">
                    {/* Connecting line */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 mx-6" />
                    {roadmap.map((item, i) => (
                      <div key={i} className="relative z-10 flex-1 flex justify-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                          item.status === "done"
                            ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-200"
                            : "bg-white border-slate-200 text-slate-400"
                        }`}>
                          {item.status === "done" ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            i + 1
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-500 text-xs text-center">
                    {doneCount} {t("de", "of")} {roadmap.length} {t("funciones lanzadas", "features launched")}
                  </p>
                </div>

                <Link
                  href="https://app.costea.com.co/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-lg shadow-blue-200"
                >
                  {t("Entrar a Costea App →", "Go to Costea App →")}
                </Link>
              </div>
            </Reveal>

            {/* Right: timeline */}
            <div className="relative">
              <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-gray-200" />
              <div className="space-y-0">
                {roadmap.map((item, i) => (
                  <Reveal key={item.title.toString()} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                    <div className="flex gap-6 pb-8">
                      <div className={`w-3.5 h-3.5 rounded-full mt-1.5 shrink-0 z-10 ring-4 ring-gray-50 ${statusStyle[item.status]}`} />
                      <div className="flex-1 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-gray-200 transition-colors">
                        <div className="mb-1.5">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusTagStyle[item.status]}`}>
                            {item.label}
                          </span>
                        </div>
                        <h3 className="font-bold tracking-tight text-gray-900 mb-1 text-sm">{item.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#f9fafb" toColor="#030712" flip={true} />

      {/* ─── CTA ─── */}
      <section className="relative py-28 px-4 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5 text-white">
              {lang === "es" ? (
                <>Empieza a gestionar tus<br />costos hoy mismo.</>
              ) : (
                <>Start managing your<br />costs today.</>
              )}
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-slate-400 mb-10 leading-relaxed">
              {t(
                "Inicia sesión en Costea App o usa la calculadora gratuita sin registro.",
                "Sign in to Costea App or use the free calculator without registration."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.costea.com.co/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 ease-out shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
              >
                {t("Entrar a Costea App →", "Go to Costea App →")}
              </Link>
              <Link
                href="/costea/calculadora"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/18 border border-white/20 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out"
              >
                {t("Usar la Calculadora gratis", "Use the Calculator free")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
