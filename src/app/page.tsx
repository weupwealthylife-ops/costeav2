"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { useLang } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { t, lang } = useLang();

  const stats = [
    { value: "500+", label: t("Empresas que usan Costea", "Businesses using Costea") },
    { value: "12", label: t("Cursos disponibles", "Available courses") },
    { value: "40+", label: t("Horas de contenido", "Hours of content") },
    { value: "1,200+", label: t("Estudiantes activos", "Active students") },
  ];

  const features = [
    {
      step: "01",
      title: t("Escuela de Costos", "School of Costs"),
      description: t(
        "Aprende desde cero hasta avanzado con cursos prácticos sobre costeo de productos, punto de equilibrio, y análisis de márgenes.",
        "Learn from beginner to advanced with practical courses on product costing, break-even analysis, and margin analysis."
      ),
      href: "/escuela",
      cta: t("Ver cursos", "View courses"),
    },
    {
      step: "02",
      title: "Costeapp",
      description: t(
        "La herramienta que ya conoces, ahora mejorada. Calcula costos, analiza tu negocio y toma decisiones con datos.",
        "The tool you already know, now improved. Calculate costs, analyze your business and make data-driven decisions."
      ),
      href: "/costea",
      cta: t("Abrir app", "Open app"),
    },
    {
      step: "03",
      title: t("Análisis en tiempo real", "Real-time analysis"),
      description: t(
        "Visualiza el comportamiento de tus costos, ingresos y rentabilidad con gráficas e indicadores clave.",
        "Visualize your costs, revenue and profitability behavior with charts and key indicators."
      ),
      href: "/costea",
      cta: t("Explorar", "Explore"),
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-950 via-[#0d2562] to-blue-600 text-white py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h1 className="text-6xl font-extrabold tracking-tight leading-[1.05] mb-8">
              {lang === "es" ? (
                <>Aprende a costear<br />y toma <span className="text-blue-300">decisiones inteligentes</span></>
              ) : (
                <>Learn to cost<br />and make <span className="text-blue-300">intelligent decisions</span></>
              )}
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-blue-100/70 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              {t(
                "La Escuela de Costos de Costea te da los conocimientos y las herramientas para gestionar los costos de tu empresa con confianza.",
                "Costea's School of Costs gives you the knowledge and tools to manage your company's costs with confidence."
              )}
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/escuela"
                className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-xl text-base font-bold hover:bg-blue-50 transition-all duration-300 ease-out shadow-xl shadow-black/20 hover:-translate-y-0.5"
              >
                {t("Explorar la Escuela de Costos", "Explore the School of Costs")}
              </Link>
              <Link
                href="/costea"
                className="inline-flex items-center justify-center bg-white/8 hover:bg-white/14 border border-white/15 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out"
              >
                {t("Ir a la Costeapp", "Go to Costeapp")}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Stats seamlessly below */}
        <div className="max-w-5xl mx-auto mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="text-4xl font-extrabold tracking-tight text-white">{s.value}</div>
              <div className="text-blue-200/60 text-sm mt-2">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {t("La plataforma", "The platform")}
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 max-w-lg leading-[1.1]">
                {lang === "es" ? (
                  <>Todo lo que necesitas<br />para gestionar tus costos</>
                ) : (
                  <>Everything you need<br />to manage your costs</>
                )}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.step} delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
                <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-[0_8px_32px_-8px_rgba(37,99,235,0.15)] hover:border-blue-100 transition-all duration-300 ease-out group hover:-translate-y-0.5 h-full flex flex-col">
                  <span className="text-xs font-bold text-blue-400 tracking-[0.15em] mb-5 block">{f.step}</span>
                  <h3 className="text-xl font-extrabold tracking-tight text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{f.description}</p>
                  <Link
                    href={f.href}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-200"
                  >
                    {f.cta} →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-5">
              {lang === "es" ? (
                <>¿Listo para empezar?</>
              ) : (
                <>Ready to get started?</>
              )}
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-gray-500 mb-10 leading-relaxed">
              {t(
                "Regístrate gratis y accede a los primeros módulos de la Escuela de Costos.",
                "Sign up free and access the first modules of the School of Costs."
              )}
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-xl text-base font-bold hover:bg-blue-700 transition-all duration-300 ease-out shadow-xl shadow-blue-200 hover:-translate-y-0.5"
            >
              {t("Crear cuenta gratuita", "Create free account")}
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
