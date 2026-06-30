"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
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
      iconBg: "bg-[#F0FDF4]",
      iconColor: "text-[#16A34A]",
      accentColor: "border-l-[#16A34A]",
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
      <section className="bg-gradient-to-b from-gray-950 via-[#0d2562] to-blue-600 text-white pt-24 pb-0 px-4">
        <div className="max-w-6xl mx-auto">

          {/* 2-col layout: copy left, proof card right */}
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center pb-20">

            {/* LEFT — copy */}
            <div>
              <Reveal>
                {/* Trust badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-200 tracking-wide mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  {t("Más de 1,200 emprendedores ya aprenden aquí", "Over 1,200 entrepreneurs already learning here")}
                </div>
              </Reveal>
              <Reveal delay={1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
                  {lang === "es" ? (
                    <>Sabe cuánto cuesta<br /><span className="text-blue-300">cada decisión</span><br />de tu negocio.</>
                  ) : (
                    <>Know the cost of<br /><span className="text-blue-300">every decision</span><br />in your business.</>
                  )}
                </h1>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                  {t(
                    "La primera plataforma de costos para emprendedores en Colombia y México. Aprende, practica y toma el control — sin ser contador.",
                    "The first cost platform for entrepreneurs in Colombia and Mexico. Learn, practice and take control — no accounting background needed."
                  )}
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/auth/signup"
                    className="inline-flex items-center justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-[14px] rounded-[10px] text-[17px] font-semibold transition-all duration-200 shadow-xl shadow-black/20 hover:-translate-y-0.5"
                  >
                    {t("Comenzar gratis", "Get started free")}
                  </Link>
                  <Link
                    href="/escuela#como-funciona"
                    className="inline-flex items-center justify-center bg-transparent hover:bg-white/8 border border-white/35 text-white px-8 py-[14px] rounded-[10px] text-[17px] font-medium transition-all duration-200"
                  >
                    {t("Ver cómo funciona", "See how it works")}
                  </Link>
                </div>
                <p className="mt-[14px] text-[13px] text-[#94A3B8]">
                  {t("Sin tarjeta de crédito · Primer curso 100% gratis", "No credit card · First course 100% free")}
                </p>
              </Reveal>
            </div>

            {/* RIGHT — Mac browser mockup (hidden on mobile) */}
            <div className="hidden lg:flex justify-center items-center">
              <Reveal delay={2} variant="scale">
                {/* Mac window */}
                <div
                  className="w-full max-w-[420px] rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)" }}
                >
                  {/* Title bar */}
                  <div
                    className="flex items-center gap-2 px-4 py-3"
                    style={{ background: "#1E293B", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                    {/* URL bar */}
                    <div
                      className="flex-1 mx-3 flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px]"
                      style={{ background: "rgba(255,255,255,0.06)", color: "#94A3B8" }}
                    >
                      <svg className="w-2.5 h-2.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      escuela.costea.app/cursos
                    </div>
                  </div>

                  {/* Browser content */}
                  <div style={{ background: "#0F172A" }}>
                    {/* App top nav */}
                    <div
                      className="flex items-center justify-between px-4 py-2.5"
                      style={{ background: "#1E293B", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <span className="text-white text-[12px] font-semibold">Escuela de Costos</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">C</div>
                    </div>

                    {/* Video player */}
                    <div className="relative mx-3 mt-3 rounded-xl overflow-hidden" style={{ aspectRatio: "16/9", background: "#020617" }}>
                      {/* Fake video gradient thumbnail */}
                      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0d2562 50%, #1d4ed8 100%)" }} />
                      {/* Grid lines for depth */}
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                      }} />
                      {/* Lesson title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 px-3 pb-2 pt-6" style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}>
                        <p className="text-white text-[11px] font-semibold">Lección 3: Costos fijos vs. variables</p>
                      </div>
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                          <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      {/* Progress bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "rgba(255,255,255,0.15)" }}>
                        <div className="h-full w-2/5 bg-blue-500" />
                      </div>
                    </div>

                    {/* Lesson list */}
                    <div className="px-3 py-2 space-y-1 pb-3">
                      {[
                        { n: "01", title: "¿Qué es un costo?", done: true },
                        { n: "02", title: "Materiales directos", done: true },
                        { n: "03", title: "Costos fijos vs. variables", active: true },
                        { n: "04", title: "Punto de equilibrio", done: false },
                      ].map((l) => (
                        <div
                          key={l.n}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg"
                          style={{
                            background: l.active ? "rgba(37,99,235,0.2)" : "transparent",
                            border: l.active ? "1px solid rgba(37,99,235,0.3)" : "1px solid transparent",
                          }}
                        >
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: l.done ? "rgba(34,197,94,0.2)" : l.active ? "rgba(37,99,235,0.4)" : "rgba(255,255,255,0.06)" }}
                          >
                            {l.done ? (
                              <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <span className="text-[8px] font-bold" style={{ color: l.active ? "#93C5FD" : "#475569" }}>{l.n}</span>
                            )}
                          </div>
                          <span className="text-[11px] truncate" style={{ color: l.active ? "#E2E8F0" : l.done ? "#64748B" : "#475569" }}>{l.title}</span>
                          {l.active && <span className="ml-auto text-[9px] font-bold text-blue-400 shrink-0">EN CURSO</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Stats — frosted cards */}
          <div className="pt-10 pb-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-white/8 border border-white/12 rounded-2xl px-5 py-5 backdrop-blur-sm">
                  <div className="text-3xl font-extrabold tracking-tight text-white">{s.value}</div>
                  <div className="text-slate-400 text-xs mt-1.5">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#2563eb" toColor="#ffffff" />

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
                <div className={`bg-white border border-[#E2E8F0] border-l-[3px] ${card.accentColor} rounded-2xl p-7 flex flex-col h-full transition-all duration-200 ease-out ${
                  card.active
                    ? "hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] cursor-pointer"
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

      <WaveDivider fromColor="#ffffff" toColor="#0F172A" flip={true} />

      {/* CTA */}
      <section className="relative bg-[#0F172A] text-white py-28 px-4 overflow-hidden">
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
