import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const courses = [
  {
    slug: "fundamentos-de-costos",
    title: "Fundamentos de Costos",
    description: "Aprende qué son los costos, cómo clasificarlos y por qué son esenciales para la salud financiera de tu negocio.",
    level: "Básico",
    lessons: 6,
    duration: "3h",
    free: true,
    topics: ["¿Qué son los costos?", "Costos fijos vs variables", "Estructura de costos"],
  },
  {
    slug: "costeo-de-productos",
    title: "Costeo de Productos y Servicios",
    description: "Calcula el costo real de lo que produces o vendes, incluyendo materia prima, mano de obra y gastos indirectos.",
    level: "Intermedio",
    lessons: 8,
    duration: "5h",
    free: false,
    topics: ["Materia prima", "Mano de obra directa", "Gastos indirectos de fabricación"],
  },
  {
    slug: "punto-de-equilibrio",
    title: "Punto de Equilibrio",
    description: "Descubre cuánto necesitas vender para no perder dinero y cómo mejorar tu margen de contribución.",
    level: "Intermedio",
    lessons: 5,
    duration: "3h",
    free: false,
    topics: ["Margen de contribución", "Cálculo del punto de equilibrio", "Análisis de sensibilidad"],
  },
  {
    slug: "analisis-de-rentabilidad",
    title: "Análisis de Rentabilidad",
    description: "Identifica qué productos, líneas o clientes generan más valor real para tu empresa.",
    level: "Avanzado",
    lessons: 7,
    duration: "4h",
    free: false,
    topics: ["Rentabilidad por producto", "ABC de clientes", "Decisiones basadas en datos"],
  },
];

const benefits = [
  { icon: "🎯", title: "Aprendizaje práctico", desc: "Cada lección incluye ejercicios reales con números de tu negocio." },
  { icon: "⚡", title: "A tu ritmo", desc: "Accede cuando quieras, desde cualquier dispositivo, sin horarios fijos." },
  { icon: "🧮", title: "Conectado a Costea", desc: "Aplica lo que aprendes directamente en la App Costea desde el primer día." },
  { icon: "📜", title: "Certificado de finalización", desc: "Obtén tu certificado al completar cada curso y compártelo con tus clientes." },
];

const levelColor: Record<string, string> = {
  Básico: "bg-green-100 text-green-700",
  Intermedio: "bg-yellow-100 text-yellow-700",
  Avanzado: "bg-red-100 text-red-700",
};

const testimonials = [
  {
    name: "María Fernanda R.",
    company: "Pastelería Dulce Arte",
    text: "Antes cobraba a ojo. Después de la Escuela de Costos, sé exactamente cuánto me cuesta cada torta y cuánto debo cobrar.",
  },
  {
    name: "Carlos Andrés M.",
    company: "Taller de Confección",
    text: "El curso de punto de equilibrio me abrió los ojos. Estaba trabajando mucho pero ganando poco. Ahora sé exactamente por qué.",
  },
  {
    name: "Lina Marcela G.",
    company: "Restaurante Sabor Local",
    text: "Con la Escuela aprendí a costear cada plato del menú. Subí mis precios con confianza y mis clientes lo entendieron.",
  },
];

export default function EscuelaPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-500 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Escuela de Costos — Costea V2
          </span>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Aprende a gestionar los costos<br />de tu negocio con confianza
          </h1>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Cursos prácticos diseñados para emprendedores y empresarios colombianos que quieren
            tomar decisiones financieras inteligentes sin ser contadores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="bg-white text-emerald-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Comenzar gratis
            </Link>
            <Link
              href="#cursos"
              className="border border-white/40 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Ver cursos
            </Link>
          </div>
          <p className="mt-6 text-emerald-200 text-sm">Sin tarjeta de crédito · Primer curso 100% gratis</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué aprender con Costea?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="cursos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nuestros cursos</h2>
            <p className="text-gray-500">De lo básico a lo avanzado, aprende a tu ritmo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-200 transition-all flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${levelColor[course.level]}`}>
                    {course.level}
                  </span>
                  {course.free && (
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                      Gratis
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{course.description}</p>
                <ul className="space-y-1 mb-5">
                  {course.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-emerald-500">✓</span> {t}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                  <span>{course.lessons} lecciones</span>
                  <span>{course.duration} de contenido</span>
                </div>
                <Link
                  href={course.free ? `/escuela/cursos/${course.slug}` : "/auth/signup"}
                  className="mt-auto bg-emerald-600 text-white text-center py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-sm"
                >
                  {course.free ? "Comenzar curso" : "Acceder al curso"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Novedades CTA */}
      <section className="py-16 px-4 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold bg-emerald-600 text-white px-3 py-1 rounded-full">Nuevo</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-3 mb-2">Conoce las nuevas funciones de la App Costea</h2>
            <p className="text-gray-600 text-sm">Hemos mejorado la herramienta. Mira lo que viene y cómo te va a ayudar.</p>
          </div>
          <Link
            href="/escuela/novedades"
            className="shrink-0 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap"
          >
            Ver novedades →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Lo que dicen nuestros estudiantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-gray-700 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-emerald-700 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Empieza hoy, es gratis</h2>
          <p className="text-emerald-200 mb-8">
            Crea tu cuenta y accede al primer curso sin costo. Sin tarjeta de crédito.
          </p>
          <Link
            href="/auth/signup"
            className="bg-white text-emerald-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-50 transition-colors"
          >
            Crear cuenta gratuita
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
