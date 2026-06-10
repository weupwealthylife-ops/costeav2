import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const features = [
  {
    icon: "📚",
    title: "Escuela de Costos",
    description:
      "Aprende desde cero hasta avanzado con cursos prácticos sobre costeo de productos, punto de equilibrio, y análisis de márgenes.",
    href: "/escuela",
    cta: "Ver cursos",
  },
  {
    icon: "🧮",
    title: "App Costea",
    description:
      "La herramienta que ya conoces, ahora mejorada. Calcula costos, analiza tu negocio y toma decisiones con datos.",
    href: "/costea",
    cta: "Abrir app",
  },
  {
    icon: "📊",
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
      <section className="bg-gradient-to-br from-emerald-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full mb-6">
            Nueva versión disponible — Costea V2
          </span>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Aprende a costear tu negocio y toma{" "}
            <span className="text-emerald-600">decisiones inteligentes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            La Escuela de Costos de Costea te da los conocimientos y las herramientas
            para gestionar los costos de tu empresa con confianza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/escuela"
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
            >
              Explorar la Escuela de Costos
            </Link>
            <Link
              href="/costea"
              className="bg-white text-gray-800 border border-gray-300 px-8 py-4 rounded-xl text-lg font-semibold hover:border-emerald-400 hover:text-emerald-700 transition-colors"
            >
              Ir a la App Costea
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-emerald-600 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold">{s.value}</div>
              <div className="text-emerald-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Todo lo que necesitas para gestionar tus costos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-emerald-200 transition-all"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 mb-6">{f.description}</p>
                <Link
                  href={f.href}
                  className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  {f.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-gray-600 mb-8">
            Regístrate gratis y accede a los primeros módulos de la Escuela de Costos.
          </p>
          <Link
            href="/auth"
            className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Crear cuenta gratuita
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
