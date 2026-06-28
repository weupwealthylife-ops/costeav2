"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { useLang } from "@/contexts/LanguageContext";

export default function CosteaAppPage() {
  const { t, lang } = useLang();

  const tools = [
    {
      tag: t("Disponible", "Available"),
      tagColor: "bg-blue-100 text-blue-700 border-blue-100",
      title: t("Calculadora de Costos", "Cost Calculator"),
      description: t(
        "Ingresa tus insumos, mano de obra y gastos indirectos. Costea calcula el costo unitario y el precio mínimo de venta con el margen que tú defines.",
        "Enter your inputs, labor and overhead. Costea calculates unit cost and minimum selling price with the margin you define."
      ),
      href: "/costea/calculadora",
      cta: t("Abrir calculadora", "Open calculator"),
      primary: true,
    },
    {
      tag: t("Próximamente", "Coming soon"),
      tagColor: "bg-amber-50 text-amber-700 border-amber-100",
      title: t("Punto de Equilibrio", "Break-Even Analysis"),
      description: t(
        "Descubre cuántas unidades necesitas vender para cubrir todos tus costos fijos y comenzar a generar utilidad real.",
        "Discover how many units you need to sell to cover all fixed costs and start generating real profit."
      ),
      href: "#roadmap",
      cta: t("Ver hoja de ruta", "View roadmap"),
      primary: false,
    },
    {
      tag: t("Próximamente", "Coming soon"),
      tagColor: "bg-amber-50 text-amber-700 border-amber-100",
      title: t("Análisis de Rentabilidad", "Profitability Analysis"),
      description: t(
        "Compara todos tus productos en una sola vista. Descubre cuáles generan más margen y cuáles te están haciendo perder dinero.",
        "Compare all your products in one view. Discover which generate the most margin and which are losing you money."
      ),
      href: "#roadmap",
      cta: t("Ver hoja de ruta", "View roadmap"),
      primary: false,
    },
    {
      tag: t("Próximamente", "Coming soon"),
      tagColor: "bg-amber-50 text-amber-700 border-amber-100",
      title: t("Reportes Exportables", "Exportable Reports"),
      description: t(
        "Genera un PDF o Excel con el resumen de tus costos, precio sugerido y utilidad proyectada para compartir con tu equipo o contador.",
        "Generate a PDF or Excel with your cost summary, suggested price and projected profit to share with your team or accountant."
      ),
      href: "#roadmap",
      cta: t("Ver hoja de ruta", "View roadmap"),
      primary: false,
    },
  ];

  const roadmap = [
    {
      status: "done",
      label: t("Disponible", "Available"),
      date: t("Junio 2025", "June 2025"),
      title: t("Calculadora de costos mejorada", "Improved cost calculator"),
      description: t(
        "Nueva interfaz para calcular costos de productos con hasta 20 insumos, con guardado automático.",
        "New interface to calculate product costs with up to 20 inputs, with automatic saving."
      ),
    },
    {
      status: "done",
      label: t("Disponible", "Available"),
      date: t("Mayo 2025", "May 2025"),
      title: t("Punto de equilibrio visual", "Visual break-even point"),
      description: t(
        "Gráfica interactiva del punto de equilibrio que se actualiza en tiempo real mientras modificas tus datos.",
        "Interactive break-even chart that updates in real time as you modify your data."
      ),
    },
    {
      status: "soon",
      label: t("Próximamente", "Coming soon"),
      date: t("Julio 2025", "July 2025"),
      title: t("Reportes en PDF", "PDF reports"),
      description: t(
        "Exporta el análisis de costos en un PDF profesional para compartir con socios o clientes.",
        "Export cost analysis in a professional PDF to share with partners or clients."
      ),
    },
    {
      status: "soon",
      label: t("Próximamente", "Coming soon"),
      date: t("Agosto 2025", "August 2025"),
      title: t("Comparador de escenarios", "Scenario comparator"),
      description: t(
        "Compara hasta 3 escenarios de precio o volumen de ventas para decidir la mejor estrategia.",
        "Compare up to 3 price or sales volume scenarios to decide the best strategy."
      ),
    },
    {
      status: "planned",
      label: t("Planeado", "Planned"),
      date: "Q4 2025",
      title: t("Integración con la Escuela", "School integration"),
      description: t(
        "Practica los ejercicios de cada lección dentro de la Costeapp, conectando el aprendizaje con la acción.",
        "Practice lesson exercises directly inside Costeapp, connecting learning with action."
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

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 via-[#0d2562] to-blue-700 text-white py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Costeapp · {t("Plataforma de Costos", "Cost Platform")}
              </p>
              <h1 className="text-6xl font-extrabold tracking-tight leading-[1.05] mb-8">
                {lang === "es" ? (
                  <>Gestiona los costos<br />de tu negocio.<br /><span className="text-blue-300">Sin complicaciones.</span></>
                ) : (
                  <>Manage your business<br />costs.<br /><span className="text-blue-300">Without complications.</span></>
                )}
              </h1>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-blue-100/70 text-xl leading-relaxed mb-10 max-w-xl">
                {t(
                  "Sin hojas de cálculo. Sin fórmulas manuales. Solo ingresa tus datos y Costeapp hace los cálculos por ti en segundos.",
                  "No spreadsheets. No manual formulas. Just enter your data and Costeapp does the calculations for you in seconds."
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
                  {t("Ir a Costeapp →", "Go to Costeapp →")}
                </Link>
                <Link
                  href="/costea/calculadora"
                  className="inline-flex items-center justify-center bg-white/8 hover:bg-white/14 border border-white/15 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out"
                >
                  {t("Usar la Calculadora gratis", "Use the Calculator free")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-14">
              <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {t("Herramientas", "Tools")}
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                {t("Todo en un solo lugar", "Everything in one place")}
              </h2>
              <p className="text-gray-500 mt-3">
                {t("Disponibles ahora y próximamente en Costeapp.", "Available now and coming soon to Costeapp.")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tools.map((tool, i) => (
              <Reveal key={tool.title.toString()} delay={(i % 2) as 0 | 1 | 2 | 3 | 4}>
                <div
                  className={`rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                    tool.primary
                      ? "bg-blue-600 text-white shadow-[0_8px_32px_-8px_rgba(37,99,235,0.4)]"
                      : "bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-sm"
                  }`}
                >
                  <div className="mb-5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                      tool.primary ? "bg-white/20 text-white border-white/20" : tool.tagColor
                    }`}>
                      {tool.tag}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold tracking-tight mb-2 ${tool.primary ? "text-white" : "text-gray-900"}`}>
                    {tool.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 flex-1 ${tool.primary ? "text-blue-100" : "text-gray-500"}`}>
                    {tool.description}
                  </p>
                  <Link
                    href={tool.href}
                    className={`text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ease-out ${
                      tool.primary
                        ? "bg-white text-blue-700 hover:bg-blue-50"
                        : "bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-700"
                    }`}
                  >
                    {tool.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap / Novedades */}
      <section id="roadmap" className="py-28 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal className="lg:sticky lg:top-28">
              <div>
                <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  {t("Hoja de ruta", "Roadmap")}
                </p>
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-[1.05] mb-6">
                  {lang === "es" ? (
                    <>Lo que viene<br />en Costeapp.</>
                  ) : (
                    <>What's coming<br />to Costeapp.</>
                  )}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
                  {t(
                    "Estamos construyendo el sistema de costos más completo para emprendedores colombianos.",
                    "We're building the most complete cost system for Colombian entrepreneurs."
                  )}
                </p>
                <Link
                  href="https://app.costea.com.co/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-lg shadow-blue-200"
                >
                  {t("Entrar a Costeapp →", "Go to Costeapp →")}
                </Link>
              </div>
            </Reveal>

            <div className="relative">
              <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-gray-200" />
              <div className="space-y-0">
                {roadmap.map((item, i) => (
                  <Reveal key={item.title.toString()} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                    <div className="flex gap-6 pb-8">
                      <div className={`w-3.5 h-3.5 rounded-full mt-1 shrink-0 z-10 ring-4 ring-gray-50 ${statusStyle[item.status]}`} />
                      <div className="flex-1 pt-0.5">
                        <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusTagStyle[item.status]}`}>
                            {item.label}
                          </span>
                          <span className="text-xs text-gray-400">{item.date}</span>
                        </div>
                        <h3 className="font-bold tracking-tight text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-tight mb-5">
              {lang === "es" ? (
                <>Empieza a gestionar tus<br />costos hoy mismo.</>
              ) : (
                <>Start managing your<br />costs today.</>
              )}
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-gray-400 mb-10 leading-relaxed">
              {t(
                "Inicia sesión en Costeapp o usa la calculadora gratuita sin registro.",
                "Sign in to Costeapp or use the free calculator without registration."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.costea.com.co/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 ease-out shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
              >
                {t("Entrar a Costeapp →", "Go to Costeapp →")}
              </Link>
              <Link
                href="/costea/calculadora"
                className="inline-flex items-center justify-center bg-white/8 hover:bg-white/14 border border-white/15 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out"
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
