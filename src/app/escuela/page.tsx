import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

const problems = [
  {
    label: "01",
    title: "Vendes mucho pero no sabes si estás ganando",
    desc: "La mayoría de emprendedores fijan precios a ojo o copiando a la competencia, sin saber si eso les deja utilidad real.",
  },
  {
    label: "02",
    title: "No tienes un sistema claro de costos",
    desc: "Las hojas de cálculo se complican, los datos se pierden y cada mes es un misterio saber si el negocio es rentable.",
  },
  {
    label: "03",
    title: "No puedes pagar una asesoría personalizada",
    desc: "Los consultores son costosos. Las cámaras de comercio dan talleres genéricos. Nadie te enseña con los números reales de tu negocio.",
  },
];

const journey = [
  { step: "01", title: "Créate una cuenta", desc: "Regístrate gratis con tu nombre, correo y teléfono. En menos de 2 minutos ya tienes acceso." },
  { step: "02", title: "Explora tu dashboard", desc: "Visualiza todos los cursos y módulos disponibles organizados por nivel. Empieza por donde quieras." },
  { step: "03", title: "Aprende a tu ritmo", desc: "Videos cortos y prácticos. Durante el curso accedes a una versión simplificada de Costea para aplicar lo que aprendes." },
  { step: "04", title: "Califica tu experiencia", desc: "Al terminar cada módulo, cuéntanos cómo te fue. Tu feedback nos ayuda a mejorar." },
  { step: "05", title: "Certifícate", desc: "Presenta el examen de certificación para demostrar tu conocimiento y desbloquear el siguiente nivel." },
  { step: "06", title: "Accede a Costea completo", desc: "Al terminar la ruta de aprendizaje desbloqueas acceso completo a la Costeapp con todas sus herramientas." },
  { step: "07", title: "Asesoría personalizada", desc: "Completa todos los exámenes y accede a una sesión de asesoría personalizada con el equipo Costea." },
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
  { title: "Aprendizaje práctico", desc: "Cada lección incluye ejercicios con los números reales de tu negocio." },
  { title: "A tu ritmo", desc: "Accede cuando quieras, desde cualquier dispositivo, sin fechas límite." },
  { title: "Conectado a Costea", desc: "Aplica lo aprendido directamente en la Costeapp desde el primer día." },
  { title: "Certificado por módulo", desc: "Obtén tu certificado al completar cada curso y compártelo." },
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

const stats = [
  { value: "1,200+", label: "Estudiantes activos" },
  { value: "4", label: "Cursos disponibles" },
  { value: "40+", label: "Horas de contenido" },
  { value: "100%", label: "Primer curso gratis" },
];

const levelColor: Record<string, string> = {
  Básico: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  Intermedio: "bg-amber-50 text-amber-700 border border-amber-100",
  Avanzado: "bg-red-50 text-red-700 border border-red-100",
};

export default function EscuelaPage() {
  return (
    <>
      <Navbar />

      {/* Hero — no reveal, instant load */}
      <section className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-6">
                Escuela de Costos · Costea
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="text-6xl font-extrabold tracking-tight leading-[1.05] mb-8">
                Aprende a gestionar<br />los costos de tu<br />negocio con confianza
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
                Cursos prácticos para emprendedores y empresarios colombianos que quieren
                tomar decisiones financieras inteligentes.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
                >
                  Comenzar gratis
                </Link>
                <Link
                  href="#cursos"
                  className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out"
                >
                  Ver cursos
                </Link>
              </div>
              <p className="mt-6 text-gray-500 text-sm">Sin tarjeta de crédito · Primer curso 100% gratis</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats bar */}
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

      {/* Problem section */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">El problema</p>
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                  ¿Te identificas con alguno de estos problemas?
                </h2>
              </div>
            </Reveal>
            <div className="space-y-8">
              {problems.map((p, i) => (
                <Reveal key={p.label} delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
                  <div className="flex gap-6 items-start border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                    <span className="text-xs font-bold text-blue-400 tracking-widest shrink-0 mt-1">{p.label}</span>
                    <div>
                      <h3 className="font-bold tracking-tight text-gray-900 mb-1.5">{p.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={4}>
                <div className="pt-2">
                  <p className="text-blue-700 font-semibold">
                    La Escuela de Costos de Costea existe para resolver exactamente eso.
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Sin jerga contable, con ejemplos reales y conectado directamente a la Costeapp.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">Por qué Costea</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 max-w-lg">
                Todo lo que necesitas para aprender de verdad
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="border-t-2 border-blue-600 pt-6">
                  <span className="text-xs font-bold text-blue-400 tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-bold tracking-tight text-gray-900 mt-3 mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal className="lg:sticky lg:top-28">
              <div>
                <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">Cómo funciona</p>
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
                  Tu camino de aprendizaje, paso a paso
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Desde crear tu cuenta hasta recibir asesoría personalizada — un camino claro
                  que conecta el aprendizaje con la práctica real en tu negocio.
                </p>
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5"
                >
                  Comenzar ahora
                </Link>
              </div>
            </Reveal>
            <div className="space-y-0 divide-y divide-gray-100">
              {journey.map((j, i) => (
                <Reveal key={j.step} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                  <div className="flex gap-6 py-6">
                    <span className="text-xs font-bold text-blue-400 tracking-widest shrink-0 mt-0.5 w-6">{j.step}</span>
                    <div>
                      <h3 className="font-bold tracking-tight text-gray-900 mb-1">{j.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{j.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="cursos" className="py-28 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-14">
              <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">Cursos</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Nuestros cursos</h2>
              <p className="text-gray-500 mt-3">De lo básico a lo avanzado, aprende a tu ritmo.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, i) => (
              <Reveal key={course.slug} delay={(i % 2) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-[0_8px_32px_-8px_rgba(37,99,235,0.15)] hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300 ease-out flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${levelColor[course.level]}`}>
                      {course.level}
                    </span>
                    {course.free && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        Gratis
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{course.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {course.topics.map((t) => (
                      <li key={t} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-6 pt-4 border-t border-gray-50">
                    <span>{course.lessons} lecciones</span>
                    <span>·</span>
                    <span>{course.duration} de contenido</span>
                  </div>
                  <Link
                    href={course.free ? `/escuela/cursos/${course.slug}` : "/auth/signup"}
                    className="mt-auto bg-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 ease-out text-sm"
                  >
                    {course.free ? "Comenzar curso gratis" : "Acceder al curso"}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-4 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Testimonios</p>
              <h2 className="text-4xl font-extrabold tracking-tight">
                Lo que dicen nuestros estudiantes
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-white/5 border border-white/8 rounded-2xl p-8 h-full flex flex-col">
                  <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-1">"{t.text}"</p>
                  <div className="border-t border-white/10 pt-5">
                    <div className="font-semibold tracking-tight text-white">{t.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{t.company}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-5">
              ¿Listo para saber realmente cuánto cuesta tu negocio?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Regístrate gratis y accede al primer curso completo sin tarjeta de crédito.
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-xl text-base font-bold hover:bg-blue-700 transition-all duration-300 ease-out shadow-lg shadow-blue-200 hover:-translate-y-0.5"
            >
              Comenzar gratis ahora
            </Link>
            <p className="mt-5 text-sm text-gray-400">
              Más de 1,200 emprendedores ya están aprendiendo con Costea.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
