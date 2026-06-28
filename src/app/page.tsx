import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    title: "Escuela de Costos",
    description:
      "Aprende desde cero hasta avanzado con cursos prácticos sobre costeo de productos, punto de equilibrio, y análisis de márgenes.",
    href: "/escuela",
    cta: "Ver cursos",
  },
  {
    title: "Costeapp",
    description:
      "La herramienta que ya conoces, ahora mejorada. Calcula costos, analiza tu negocio y toma decisiones con datos.",
    href: "/costea",
    cta: "Abrir app",
  },
  {
    title: "Análisis en tiempo real",
    description:
      "Visualiza el comportamiento de tus costos, ingresos y rentabilidad con gráficas e indicadores clave.",
    href: "/costea",
    cta: "Explorar",
  },
];

const stats = [
  { label: "Empresas que usan Costea", value: "500+" },
  { label: "Cursos disponibles", value: "12" },
  { label: "Horas de contenido", value: "40+" },
  { label: "Estudiantes activos", value: "1,200+" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Aprende a costear tu negocio y toma{" "}
              <span className="text-blue-600">decisiones inteligentes</span>
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              La Escuela de Costos de Costea te da los conocimientos y las herramientas
              para gestionar los costos de tu empresa con confianza.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/escuela"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-700 transition-all duration-300 ease-out shadow-lg shadow-blue-200 hover:-translate-y-0.5"
              >
                Explorar la Escuela de Costos
              </Link>
              <Link
                href="/costea"
                className="inline-flex items-center justify-center bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl text-base font-semibold hover:border-blue-300 hover:text-blue-700 transition-all duration-300 ease-out hover:-translate-y-0.5"
              >
                Ir a la Costeapp
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="text-4xl font-extrabold tracking-tight">{s.value}</div>
              <div className="text-blue-100 text-sm mt-1.5">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">
                Todo lo que necesitas para gestionar tus costos
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">Una plataforma completa, desde el aprendizaje hasta la herramienta.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
                <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-[0_8px_32px_-8px_rgba(37,99,235,0.15)] hover:border-blue-100 transition-all duration-300 ease-out group hover:-translate-y-0.5 h-full flex flex-col">
                  <h3 className="text-lg font-bold tracking-tight text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{f.description}</p>
                  <Link
                    href={f.href}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-200 group-hover:underline underline-offset-2"
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
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              ¿Listo para empezar?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Regístrate gratis y accede a los primeros módulos de la Escuela de Costos.
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-xl text-base font-semibold hover:bg-blue-700 transition-all duration-300 ease-out shadow-lg shadow-blue-200 hover:-translate-y-0.5"
            >
              Crear cuenta gratuita
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
