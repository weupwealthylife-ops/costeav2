import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const problems = [
  {
    icon: "😔",
    title: "Vendes mucho pero no sabes si estás ganando",
    desc: "La mayoría de emprendedores fijan precios a ojo o copiando a la competencia, sin saber si eso les deja utilidad real.",
  },
  {
    icon: "📉",
    title: "No tienes un sistema claro de costos",
    desc: "Las hojas de cálculo se complican, los datos se pierden y cada mes es un misterio saber si el negocio es rentable.",
  },
  {
    icon: "💸",
    title: "No puedes pagar una asesoría personalizada",
    desc: "Los consultores son costosos. Las cámaras de comercio dan talleres genéricos. Nadie te enseña con los números reales de tu negocio.",
  },
];

const journey = [
  {
    step: "01",
    hu: "HU1",
    title: "Créate una cuenta",
    desc: "Regístrate gratis con tu nombre, correo y teléfono. En menos de 2 minutos ya tienes acceso.",
    color: "bg-blue-500",
  },
  {
    step: "02",
    hu: "HU2",
    title: "Explora tu dashboard",
    desc: "Visualiza todos los cursos y módulos disponibles organizados por nivel. Empieza por donde quieras.",
    color: "bg-blue-500",
  },
  {
    step: "03",
    hu: "HU3",
    title: "Aprende a tu ritmo",
    desc: "Videos cortos y prácticos. Durante el curso accedes a una versión simplificada de Costea para aplicar lo que aprendes.",
    color: "bg-blue-600",
  },
  {
    step: "04",
    hu: "HU4",
    title: "Califica tu experiencia",
    desc: "Al terminar cada módulo, cuéntanos cómo te fue. Tu feedback nos ayuda a mejorar.",
    color: "bg-blue-600",
  },
  {
    step: "05",
    hu: "HU5",
    title: "Certifícate",
    desc: "Presenta el examen de certificación para demostrar tu conocimiento y desbloquear el siguiente nivel.",
    color: "bg-blue-700",
  },
  {
    step: "06",
    hu: "HU6",
    title: "Accede a Costea completo",
    desc: "Al terminar la ruta de aprendizaje desbloqueas acceso completo a la Costeapp con todas sus herramientas.",
    color: "bg-blue-700",
  },
  {
    step: "07",
    hu: "HU7",
    title: "Asesoría personalizada",
    desc: "Completa todos los exámenes y accede a una sesión de asesoría personalizada con el equipo Costea.",
    color: "bg-blue-800",
  },
];

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
  { icon: "🎯", title: "Aprendizaje práctico", desc: "Cada lección incluye ejercicios con los números de tu negocio." },
  { icon: "⚡", title: "A tu ritmo", desc: "Accede cuando quieras, desde cualquier dispositivo." },
  { icon: "🧮", title: "Conectado a Costea", desc: "Aplica lo aprendido directamente en la Costeapp desde el primer día." },
  { icon: "📜", title: "Certificado por módulo", desc: "Obtén tu certificado al completar cada curso y compártelo." },
];

const testimonials = [
  {
    name: "María Fernanda R.",
    company: "Pastelería Dulce Arte",
    text: "Antes cobraba a ojo. Después de la Escuela de Costos, sé exactamente cuánto me cuesta cada torta y cuánto debo cobrar para ganar.",
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

const levelColor: Record<string, string> = {
  Básico: "bg-green-100 text-green-700",
  Intermedio: "bg-yellow-100 text-yellow-700",
  Avanzado: "bg-red-100 text-red-700",
};

export default function EscuelaPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 border border-white/20">
            Escuela de Costos · Costea V2
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Aprende a gestionar los costos<br />de tu negocio con confianza
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl mx-auto">
            Cursos prácticos para emprendedores y empresarios colombianos que quieren
            tomar decisiones financieras inteligentes, sin necesidad de ser contadores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-xl text-base font-bold hover:bg-blue-50 transition-all duration-300 ease-out shadow-lg hover:-translate-y-0.5"
            >
              Comenzar gratis
            </Link>
            <Link
              href="#cursos"
              className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/10 transition-all duration-300 ease-out"
            >
              Ver cursos
            </Link>
          </div>
          <p className="mt-8 text-blue-200 text-sm">Sin tarjeta de crédito · Primer curso 100% gratis</p>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              ¿Te identificas con alguno de estos problemas?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              La mayoría de emprendedores trabajan mucho pero ganan poco porque
              no tienen claridad sobre sus costos reales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_1px_8px_-2px_rgba(0,0,0,0.06)]">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold tracking-tight text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
            <p className="text-blue-800 font-semibold text-lg">
              La Escuela de Costos de Costea existe para resolver exactamente eso.
            </p>
            <p className="text-blue-600 text-sm mt-1">
              Sin jerga contable, con ejemplos reales y conectado directamente a la Costeapp.
            </p>
          </div>
        </div>
      </section>

      {/* Journey / How it works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">¿Cómo funciona?</h2>
            <p className="text-gray-500">Tu camino de aprendizaje, paso a paso.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block" />
            <div className="space-y-6">
              {journey.map((j) => (
                <div key={j.step} className="flex gap-6 items-start">
                  <div className={`w-12 h-12 rounded-full ${j.color} text-white font-bold text-sm flex items-center justify-center shrink-0 z-10`}>
                    {j.step}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{j.title}</h3>
                      <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">{j.hu}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{j.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gray-50">
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
      <section id="cursos" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nuestros cursos</h2>
            <p className="text-gray-500">De lo básico a lo avanzado, aprende a tu ritmo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-[0_8px_32px_-8px_rgba(37,99,235,0.15)] hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300 ease-out flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${levelColor[course.level]}`}>
                    {course.level}
                  </span>
                  {course.free && (
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                      Gratis
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{course.description}</p>
                <ul className="space-y-1 mb-5">
                  {course.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> {t}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                  <span>{course.lessons} lecciones</span>
                  <span>{course.duration} de contenido</span>
                </div>
                <Link
                  href={course.free ? `/escuela/cursos/${course.slug}` : "/auth/signup"}
                  className="mt-auto bg-blue-600 text-white text-center py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  {course.free ? "Comenzar curso gratis" : "Acceder al curso"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Lo que dicen nuestros estudiantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 rounded-2xl p-6">
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-blue-300 text-xs">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para saber realmente cuánto cuesta tu negocio?
          </h2>
          <p className="text-gray-500 mb-8">
            Regístrate gratis y accede al primer curso completo sin tarjeta de crédito.
          </p>
          <Link
            href="/auth/signup"
            className="bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Comenzar gratis ahora
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Más de 1,200 emprendedores ya están aprendiendo con Costea.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
