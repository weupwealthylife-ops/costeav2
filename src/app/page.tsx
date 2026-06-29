"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import SectionWave from "@/components/ui/SectionWave";
import { useLang } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { t, lang } = useLang();

  const stats = [
    { value: "500+", label: t("Empresas que usan Costea", "Businesses using Costea") },
    { value: "12", label: t("Cursos disponibles", "Available courses") },
    { value: "40+", label: t("Horas de contenido", "Hours of content") },
    { value: "1,200+", label: t("Estudiantes activos", "Active students") },
  ];

  const platformCards = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      accentColor: "border-l-blue-600",
      title: t("Escuela de Costos", "School of Costs"),
      description: t(
        "Cursos prácticos de costeo para emprendedores. Sin jerga contable. Con los números reales de tu negocio.",
        "Practical costing courses for entrepreneurs. No accounting jargon. With your real business numbers."
      ),
      href: "/escuela",
      cta: t("Ver cursos →", "View courses →"),
      active: true,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      accentColor: "border-l-emerald-600",
      title: "Costea App",
      description: t(
        "Calcula costos, analiza márgenes y toma decisiones con datos — sin hojas de cálculo.",
        "Calculate costs, analyze margins and make data-driven decisions — no spreadsheets."
      ),
      href: "/costea",
      cta: t("Abrir app →", "Open app →"),
      active: true,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      iconBg: "bg-slate-50",
      iconColor: "text-slate-400",
      accentColor: "border-l-slate-200",
      title: t("Reportes Exportables", "Exportable Reports"),
      description: t(
        "Exporta tu análisis de costos en PDF o Excel para compartir con tu equipo o contador.",
        "Export your cost analysis in PDF or Excel to share with your team or accountant."
      ),
      href: "#",
      cta: "",
      active: false,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 via-[#0d2562] to-blue-600 text-white py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-200 tracking-wide mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              {t("Más de 1,200 emprendedores ya aprenden aquí", "Over 1,200 entrepreneurs already learning here")}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
              {lang === "es" ? (
                <>Aprende a costear<br />y toma <span className="text-blue-300">decisiones inteligentes</span></>
              ) : (
                <>Learn to cost<br />and make <span className="text-blue-300">intelligent decisions</span></>
              )}
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              {t(
                "La Escuela de Costos de Costea te da los conocimientos y las herramientas para gestionar los costos de tu empresa con confianza.",
                "Costea's School of Costs gives you the knowledge and tools to manage your company's costs with confidence."
              )}
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/escuela"
                className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-xl text-base font-bold hover:bg-blue-50 transition-all duration-300 ease-out shadow-xl shadow-black/20 hover:-translate-y-0.5"
              >
                {t("Explorar la Escuela de Costos", "Explore the School of Costs")}
              </Link>
              <Link
                href="/costea"
                className="inline-flex items-center justify-center bg-white/12 hover:bg-white/20 border border-white/25 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out"
              >
                {t("Ir a la Costea App", "Go to Costea App")}
              </Link>
            </div>
            {/* Micro-trust */}
            <p className="mt-5 text-sm text-blue-300/70">
              {t("Sin tarjeta de crédito · Primer curso gratis", "No credit card · First course free")}
            </p>
          </Reveal>
        </div>

        {/* Stats — frosted cards */}
        <div className="max-w-5xl mx-auto mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="bg-white/8 border border-white/12 rounded-2xl px-5 py-5 backdrop-blur-sm">
                <div className="text-3xl font-extrabold tracking-tight text-white">{s.value}</div>
                <div className="text-slate-400 text-xs mt-1.5">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionWave fill="white" className="mt-16" />
      </section>

      {/* Platform cards */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {t("La plataforma", "The platform")}
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 max-w-lg leading-[1.1]">
                {lang === "es" ? (
                  <>Todo en un<br />solo lugar</>
                ) : (
                  <>Everything in<br />one place</>
                )}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {platformCards.map((card, i) => (
              <Reveal key={card.title.toString()} variant="scale" delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
                <div className={`bg-white border border-slate-200 border-l-4 ${card.accentColor} rounded-2xl p-7 flex flex-col h-full transition-all duration-200 ease-out ${
                  card.active
                    ? "hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 cursor-pointer"
                    : "opacity-70"
                }`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-5 shrink-0`}>
                    {card.icon}
                  </div>

                  {/* Coming soon badge */}
                  {!card.active && (
                    <span className="inline-block mb-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                      {t("Próximamente", "Coming soon")}
                    </span>
                  )}

                  <h3 className="text-lg font-bold tracking-tight text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{card.description}</p>

                  {card.active && (
                    <Link
                      href={card.href}
                      className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {card.cta}
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionWave fill="#030712" bgClass="bg-white" direction="up" />

      {/* CTA */}
      <section className="relative bg-gray-950 text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-5">
              {lang === "es" ? (
                <>¿Listo para empezar?</>
              ) : (
                <>Ready to get started?</>
              )}
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-slate-400 mb-10 leading-relaxed">
              {t(
                "Regístrate gratis y accede a los primeros módulos de la Escuela de Costos.",
                "Sign up free and access the first modules of the School of Costs."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-xl text-base font-bold hover:bg-blue-500 transition-all duration-300 ease-out shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
              >
                {t("Crear cuenta gratuita →", "Create free account →")}
              </Link>
              <Link
                href="/escuela"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/18 border border-white/20 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out"
              >
                {t("Ver cursos", "View courses")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
