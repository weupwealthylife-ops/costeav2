"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { useLang } from "@/contexts/LanguageContext";

export default function EscuelaPage() {
  const { t, lang } = useLang();

  const problems = [
    {
      label: "01",
      title: t("Vendes, pero no sabes si ganas", "You sell, but you don't know if you profit"),
      desc: t(
        "La mayoría fija precios a ojo o copiando a la competencia. Sin claridad en costos, cada venta puede ser una pérdida disfrazada.",
        "Most entrepreneurs set prices by gut or by copying competitors. Without cost clarity, every sale could be a disguised loss."
      ),
    },
    {
      label: "02",
      title: t("Tus finanzas son un misterio mensual", "Your finances are a monthly mystery"),
      desc: t(
        "Las hojas de cálculo se complican, los datos se pierden y al cierre del mes no sabes si el negocio fue rentable.",
        "Spreadsheets get complicated, data gets lost, and at month's end you still don't know if the business was profitable."
      ),
    },
    {
      label: "03",
      title: t("Las asesorías son inaccesibles", "Professional advice is out of reach"),
      desc: t(
        "Los consultores son costosos. Los talleres son genéricos. Nadie te enseña con los números reales de tu negocio.",
        "Consultants are expensive. Workshops are generic. Nobody teaches you with the real numbers of your business."
      ),
    },
  ];

  const benefits = [
    {
      title: t("Aprende haciendo", "Learn by doing"),
      desc: t("Cada lección usa los números reales de tu negocio, no ejemplos ficticios.", "Every lesson uses your real business numbers, not fictional examples."),
    },
    {
      title: t("Sin fecha límite", "No deadlines"),
      desc: t("Avanza a tu propio ritmo, desde cualquier dispositivo, cuando quieras.", "Go at your own pace, from any device, whenever you want."),
    },
    {
      title: t("Conectado a Costeapp", "Connected to Costeapp"),
      desc: t("Aplica cada concepto directamente en la herramienta desde el primer módulo.", "Apply every concept directly in the tool from the first module."),
    },
    {
      title: t("Certificación por nivel", "Level certification"),
      desc: t("Obtén un certificado al completar cada curso y demuestra tu dominio.", "Earn a certificate on each course completion and prove your mastery."),
    },
  ];

  const journey = [
    { step: "01", title: t("Crea tu cuenta", "Create your account"), desc: t("Regístrate gratis en menos de 2 minutos. Solo nombre, correo y teléfono.", "Sign up free in under 2 minutes. Just name, email and phone.") },
    { step: "02", title: t("Explora el dashboard", "Explore the dashboard"), desc: t("Todos los cursos organizados por nivel. Empieza donde quieras.", "All courses organized by level. Start wherever you want.") },
    { step: "03", title: t("Aprende a tu ritmo", "Learn at your own pace"), desc: t("Videos cortos y prácticos, con acceso a Costeapp durante el aprendizaje.", "Short, practical videos with access to Costeapp during learning.") },
    { step: "04", title: t("Califica y mejora", "Rate and improve"), desc: t("Tu feedback al terminar cada módulo nos ayuda a mejorar el contenido.", "Your feedback at the end of each module helps us improve the content.") },
    { step: "05", title: t("Certifícate", "Get certified"), desc: t("Supera el examen y obtén tu certificado para desbloquear el siguiente nivel.", "Pass the exam and earn your certificate to unlock the next level.") },
    { step: "06", title: t("Accede a Costeapp completo", "Access full Costeapp"), desc: t("Al completar la ruta desbloqueas todas las herramientas de la plataforma.", "Completing the path unlocks all platform tools.") },
    { step: "07", title: t("Asesoría 1 a 1", "1-on-1 advisory"), desc: t("Completa todos los exámenes y agenda una sesión personalizada con el equipo.", "Complete all exams and book a personalized session with the team.") },
  ];

  const courses = [
    {
      slug: "fundamentos-de-costos",
      title: t("Fundamentos de Costos", "Cost Fundamentals"),
      description: t("Entiende qué son los costos, cómo clasificarlos y por qué son la base de cualquier decisión financiera sólida.", "Understand what costs are, how to classify them, and why they are the foundation of any solid financial decision."),
      level: t("Básico", "Basic"),
      levelEn: "Basic",
      lessons: 6,
      duration: "3h",
      free: true,
      topics: [
        t("¿Qué son los costos?", "What are costs?"),
        t("Costos fijos vs variables", "Fixed vs variable costs"),
        t("Estructura de costos", "Cost structure"),
      ],
    },
    {
      slug: "costeo-de-productos",
      title: t("Costeo de Productos y Servicios", "Product & Service Costing"),
      description: t("Calcula el costo real de lo que produces o vendes: materia prima, mano de obra y gastos indirectos.", "Calculate the real cost of what you produce or sell: raw materials, labor and overhead."),
      level: t("Intermedio", "Intermediate"),
      levelEn: "Intermediate",
      lessons: 8,
      duration: "5h",
      free: false,
      topics: [
        t("Materia prima", "Raw materials"),
        t("Mano de obra directa", "Direct labor"),
        t("Gastos indirectos de fabricación", "Manufacturing overhead"),
      ],
    },
    {
      slug: "punto-de-equilibrio",
      title: t("Punto de Equilibrio", "Break-Even Analysis"),
      description: t("Descubre exactamente cuánto necesitas vender para cubrir todos tus costos y empezar a generar utilidad.", "Discover exactly how much you need to sell to cover all your costs and start generating profit."),
      level: t("Intermedio", "Intermediate"),
      levelEn: "Intermediate",
      lessons: 5,
      duration: "3h",
      free: false,
      topics: [
        t("Margen de contribución", "Contribution margin"),
        t("Cálculo del punto de equilibrio", "Break-even calculation"),
        t("Análisis de sensibilidad", "Sensitivity analysis"),
      ],
    },
    {
      slug: "analisis-de-rentabilidad",
      title: t("Análisis de Rentabilidad", "Profitability Analysis"),
      description: t("Identifica qué productos, líneas o clientes generan más valor real — y cuáles te están costando dinero.", "Identify which products, lines or clients generate the most real value — and which ones are costing you money."),
      level: t("Avanzado", "Advanced"),
      levelEn: "Advanced",
      lessons: 7,
      duration: "4h",
      free: false,
      topics: [
        t("Rentabilidad por producto", "Profitability by product"),
        t("ABC de clientes", "Customer ABC analysis"),
        t("Decisiones basadas en datos", "Data-driven decisions"),
      ],
    },
  ];

  const testimonials = [
    {
      name: "María Fernanda R.",
      company: t("Pastelería Dulce Arte", "Dulce Arte Bakery"),
      text: t(
        "Antes cobraba a ojo. Después de la Escuela de Costos, sé exactamente cuánto me cuesta cada torta y cuánto debo cobrar para ganar.",
        "I used to price by gut feeling. After the School of Costs, I know exactly how much each cake costs me and how much I need to charge to profit."
      ),
    },
    {
      name: "Carlos Andrés M.",
      company: t("Taller de Confección", "Clothing Workshop"),
      text: t(
        "El curso de punto de equilibrio me abrió los ojos. Estaba trabajando mucho pero ganando poco. Ahora sé exactamente por qué.",
        "The break-even course opened my eyes. I was working a lot but earning little. Now I know exactly why."
      ),
    },
    {
      name: "Lina Marcela G.",
      company: t("Restaurante Sabor Local", "Sabor Local Restaurant"),
      text: t(
        "Con la Escuela aprendí a costear cada plato del menú. Subí mis precios con confianza y mis clientes lo entendieron.",
        "With the School I learned to cost every menu item. I raised my prices confidently and my clients understood."
      ),
    },
  ];

  const levelColor: Record<string, string> = {
    Básico: "text-emerald-600 bg-emerald-50 border-emerald-100",
    Intermedio: "text-amber-600 bg-amber-50 border-amber-100",
    Avanzado: "text-red-600 bg-red-50 border-red-100",
    Basic: "text-emerald-600 bg-emerald-50 border-emerald-100",
    Intermediate: "text-amber-600 bg-amber-50 border-amber-100",
    Advanced: "text-red-600 bg-red-50 border-red-100",
  };

  return (
    <>
      <Navbar />

      {/* Hero + Stats — one continuous dark-to-blue gradient */}
      <section className="bg-gradient-to-b from-gray-950 via-[#0d2562] to-blue-600 text-white">
        {/* Hero */}
        <div className="px-4 pt-32 pb-20 max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                {t("Escuela de Costos · Costea", "School of Costs · Costea")}
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] mb-8">
                {lang === "es" ? (
                  <>Domina los costos<br />de tu negocio.<br /><span className="text-blue-300">Toma el control.</span></>
                ) : (
                  <>Master the costs<br />of your business.<br /><span className="text-blue-300">Take control.</span></>
                )}
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-blue-100/70 text-xl leading-relaxed mb-10 max-w-xl">
                {t(
                  "La primera Escuela de Costos para emprendedores colombianos. Aprende, practica y certifícate — sin necesidad de ser contador.",
                  "The first School of Costs for Colombian entrepreneurs. Learn, practice and get certified — no accounting background needed."
                )}
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-xl text-base font-bold hover:bg-blue-50 transition-all duration-300 ease-out shadow-xl shadow-black/20 hover:-translate-y-0.5"
                >
                  {t("Comenzar gratis", "Get started free")}
                </Link>
                <Link
                  href="#cursos"
                  className="inline-flex items-center justify-center bg-white/8 hover:bg-white/14 border border-white/15 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out"
                >
                  {t("Ver cursos", "View courses")}
                </Link>
              </div>
              <p className="mt-6 text-blue-200/60 text-sm">
                {t("Sin tarjeta de crédito · Primer curso 100% gratis", "No credit card · First course 100% free")}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stats — seamlessly below hero, same gradient */}
        <div className="px-4 pb-16 border-t border-white/10">
          <div className="max-w-5xl mx-auto pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1,200+", label: t("Estudiantes activos", "Active students") },
              { value: "4", label: t("Cursos disponibles", "Available courses") },
              { value: "40+", label: t("Horas de contenido", "Hours of content") },
              { value: "100%", label: t("Primer curso gratis", "First course free") },
            ].map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="text-4xl font-extrabold tracking-tight text-white">{s.value}</div>
                <div className="text-blue-200/70 text-sm mt-2">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  {t("El problema", "The problem")}
                </p>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
                  {lang === "es" ? (
                    <>¿Cuánto te<br />cuesta no saber<br />tus costos?</>
                  ) : (
                    <>How much does<br />not knowing your<br />costs cost you?</>
                  )}
                </h2>
              </div>
            </Reveal>
            <div className="space-y-0 divide-y divide-gray-100">
              {problems.map((p, i) => (
                <Reveal key={p.label} delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
                  <div className="flex gap-6 py-8">
                    <span className="text-xs font-bold text-blue-400 tracking-widest shrink-0 mt-1">{p.label}</span>
                    <div>
                      <h3 className="font-bold tracking-tight text-gray-900 text-lg mb-2">{p.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={4}>
                <div className="pt-8 pb-2">
                  <p className="text-blue-700 font-bold text-lg leading-snug">
                    {t(
                      "La Escuela de Costos de Costea existe para que nunca más tengas que adivinar.",
                      "Costea School of Costs exists so you never have to guess again."
                    )}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {t("Sin jerga contable. Con los números reales de tu negocio.", "No accounting jargon. With the real numbers of your business.")}
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
            <div className="mb-20">
              <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {t("Por qué Costea", "Why Costea")}
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 max-w-lg leading-[1.05]">
                {lang === "es" ? (
                  <>Diseñado para<br />emprendedores reales.</>
                ) : (
                  <>Designed for<br />real entrepreneurs.</>
                )}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {benefits.map((b, i) => (
              <Reveal key={b.title.toString()} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="border-t-2 border-blue-600 pt-6">
                  <span className="text-xs font-bold text-blue-400 tracking-[0.15em]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-extrabold tracking-tight text-gray-900 text-lg mt-4 mb-2">{b.title}</h3>
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
            <Reveal className="lg:sticky lg:top-28">
              <div>
                <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  {t("Cómo funciona", "How it works")}
                </p>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.05] mb-6">
                  {lang === "es" ? (
                    <>De cero a<br />experto en costos.</>
                  ) : (
                    <>From zero to<br />cost expert.</>
                  )}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-10 max-w-sm">
                  {t(
                    "Un camino claro de 7 pasos que conecta el aprendizaje con la práctica real en tu negocio.",
                    "A clear 7-step path that connects learning with real practice in your business."
                  )}
                </p>
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-lg shadow-blue-200"
                >
                  {t("Empezar ahora", "Start now")}
                </Link>
              </div>
            </Reveal>
            <div className="divide-y divide-gray-100">
              {journey.map((j, i) => (
                <Reveal key={j.step} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                  <div className="flex gap-6 py-6">
                    <span className="text-xs font-bold text-blue-500 tracking-widest shrink-0 mt-1 w-7">{j.step}</span>
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

      {/* Courses — compact list */}
      <section id="cursos" className="py-28 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-14">
              <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {t("Cursos", "Courses")}
              </p>
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                  {t("Ruta de aprendizaje", "Learning path")}
                </h2>
                <p className="text-gray-500 text-sm">
                  {t("De lo básico a lo avanzado.", "From basics to advanced.")}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Compact course rows */}
          <div className="space-y-3">
            {courses.map((course, i) => (
              <Reveal key={course.slug} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-white border border-gray-100 rounded-2xl px-6 py-5 hover:border-blue-100 hover:shadow-[0_4px_24px_-6px_rgba(37,99,235,0.12)] hover:-translate-y-px transition-all duration-300 ease-out">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Step number */}
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-sm font-bold text-blue-600">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Title + topics */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-bold tracking-tight text-gray-900">{course.title}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${levelColor[course.level]}`}>
                          {course.level}
                        </span>
                        {course.free && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                            {t("Gratis", "Free")}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-1">{course.description}</p>
                    </div>

                    {/* Meta + CTA */}
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="hidden md:flex items-center gap-3 text-xs text-gray-400">
                        <span>{course.lessons} {t("lecciones", "lessons")}</span>
                        <span>·</span>
                        <span>{course.duration}</span>
                      </div>
                      <Link
                        href={course.free ? `/escuela/cursos/${course.slug}` : "/auth/signup"}
                        className={`text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-out whitespace-nowrap ${
                          course.free
                            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-200"
                            : "border border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-700"
                        }`}
                      >
                        {course.free ? t("Comenzar gratis", "Start free") : t("Acceder", "Access")}
                      </Link>
                    </div>
                  </div>
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
              <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {t("Testimonios", "Testimonials")}
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight">
                {t("Resultados que hablan por sí solos.", "Results that speak for themselves.")}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-white/5 border border-white/8 rounded-2xl p-8 h-full flex flex-col">
                  <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-1">"{item.text}"</p>
                  <div className="border-t border-white/10 pt-5">
                    <div className="font-bold tracking-tight text-white">{item.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.company}</div>
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
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.05] mb-6">
              {lang === "es" ? (
                <>¿Listo para saber<br />exactamente cuánto<br />cuesta tu negocio?</>
              ) : (
                <>Ready to know<br />exactly how much<br />your business costs?</>
              )}
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-gray-500 mb-10 leading-relaxed">
              {t(
                "Regístrate gratis y accede al primer curso completo. Sin tarjeta de crédito.",
                "Sign up free and access the full first course. No credit card required."
              )}
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-xl text-base font-bold hover:bg-blue-700 transition-all duration-300 ease-out shadow-xl shadow-blue-200 hover:-translate-y-0.5"
            >
              {t("Comenzar gratis ahora", "Start free now")}
            </Link>
            <p className="mt-5 text-sm text-gray-400">
              {t("Más de 1,200 emprendedores ya están aprendiendo con Costea.", "Over 1,200 entrepreneurs are already learning with Costea.")}
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
