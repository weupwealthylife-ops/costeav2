"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import SectionWave from "@/components/ui/SectionWave";
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      num: "01",
      numBg: "bg-blue-50 text-blue-700",
      title: t("Aprende haciendo", "Learn by doing"),
      desc: t("Cada lección usa los números reales de tu negocio, no ejemplos ficticios.", "Every lesson uses your real business numbers, not fictional examples."),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      num: "02",
      numBg: "bg-emerald-50 text-emerald-700",
      title: t("Sin fecha límite", "No deadlines"),
      desc: t("Avanza a tu propio ritmo, desde cualquier dispositivo, cuando quieras.", "Go at your own pace, from any device, whenever you want."),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
      num: "03",
      numBg: "bg-orange-50 text-orange-700",
      title: t("Conectado a Costea App", "Connected to Costea App"),
      desc: t("Aplica cada concepto directamente en la herramienta desde el primer módulo.", "Apply every concept directly in the tool from the first module."),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      num: "04",
      numBg: "bg-purple-50 text-purple-700",
      title: t("Certificación por nivel", "Level certification"),
      desc: t("Obtén un certificado al completar cada curso y demuestra tu dominio.", "Earn a certificate on each course completion and prove your mastery."),
    },
  ];

  const journey = [
    { step: "01", title: t("Crea tu cuenta", "Create your account"), desc: t("Regístrate gratis en menos de 2 minutos. Solo nombre, correo y teléfono.", "Sign up free in under 2 minutes. Just name, email and phone."), done: false },
    { step: "02", title: t("Explora el dashboard", "Explore the dashboard"), desc: t("Todos los cursos organizados por nivel. Empieza donde quieras.", "All courses organized by level. Start wherever you want."), done: false },
    { step: "03", title: t("Aprende a tu ritmo", "Learn at your own pace"), desc: t("Videos cortos y prácticos, con acceso a Costea App durante el aprendizaje.", "Short, practical videos with access to Costea App during learning."), done: false },
    { step: "04", title: t("Califica y mejora", "Rate and improve"), desc: t("Tu feedback al terminar cada módulo nos ayuda a mejorar el contenido.", "Your feedback at the end of each module helps us improve the content."), done: false },
    { step: "05", title: t("Certifícate", "Get certified"), desc: t("Supera el examen y obtén tu certificado para desbloquear el siguiente nivel.", "Pass the exam and earn your certificate to unlock the next level."), done: false },
    { step: "06", title: t("Accede a Costea App completo", "Access full Costea App"), desc: t("Al completar la ruta desbloqueas todas las herramientas de la plataforma.", "Completing the path unlocks all platform tools."), done: false },
    { step: "07", title: t("Asesoría 1 a 1", "1-on-1 advisory"), desc: t("Completa todos los exámenes y agenda una sesión personalizada con el equipo.", "Complete all exams and book a personalized session with the team."), done: false },
  ];

  const courses = [
    {
      slug: "fundamentos-de-costos",
      title: t("Fundamentos de Costos", "Cost Fundamentals"),
      description: t("Entiende qué son los costos, cómo clasificarlos y por qué son la base de cualquier decisión financiera sólida.", "Understand what costs are, how to classify them, and why they are the foundation of any solid financial decision."),
      level: t("Básico", "Basic"),
      lessons: 6,
      duration: "3h",
      free: true,
    },
    {
      slug: "costeo-de-productos",
      title: t("Costeo de Productos y Servicios", "Product & Service Costing"),
      description: t("Calcula el costo real de lo que produces o vendes: materia prima, mano de obra y gastos indirectos.", "Calculate the real cost of what you produce or sell: raw materials, labor and overhead."),
      level: t("Intermedio", "Intermediate"),
      lessons: 8,
      duration: "5h",
      free: false,
    },
    {
      slug: "punto-de-equilibrio",
      title: t("Punto de Equilibrio", "Break-Even Analysis"),
      description: t("Descubre exactamente cuánto necesitas vender para cubrir todos tus costos y empezar a generar utilidad.", "Discover exactly how much you need to sell to cover all your costs and start generating profit."),
      level: t("Intermedio", "Intermediate"),
      lessons: 5,
      duration: "3h",
      free: false,
    },
    {
      slug: "analisis-de-rentabilidad",
      title: t("Análisis de Rentabilidad", "Profitability Analysis"),
      description: t("Identifica qué productos, líneas o clientes generan más valor real — y cuáles te están costando dinero.", "Identify which products, lines or clients generate the most real value — and which ones are costing you money."),
      level: t("Avanzado", "Advanced"),
      lessons: 7,
      duration: "4h",
      free: false,
    },
  ];

  const testimonials = [
    {
      name: "María Fernanda R.",
      initials: "MF",
      role: t("Pastelería Dulce Arte", "Dulce Arte Bakery"),
      text: t(
        "Antes cobraba a ojo. Después de la Escuela de Costos, sé exactamente cuánto me cuesta cada torta y cuánto debo cobrar para ganar.",
        "I used to price by gut feeling. After the School of Costs, I know exactly how much each cake costs me and how much I need to charge to profit."
      ),
    },
    {
      name: "Carlos Andrés M.",
      initials: "CA",
      role: t("Taller de Confección", "Clothing Workshop"),
      text: t(
        "El curso de punto de equilibrio me abrió los ojos. Estaba trabajando mucho pero ganando poco. Ahora sé exactamente por qué.",
        "The break-even course opened my eyes. I was working a lot but earning little. Now I know exactly why."
      ),
    },
    {
      name: "Lina Marcela G.",
      initials: "LM",
      role: t("Restaurante Sabor Local", "Sabor Local Restaurant"),
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

      {/* ─── Hero + Stats — continuous dark gradient ─── */}
      <section className="bg-gradient-to-b from-gray-950 via-[#0d2562] to-blue-700 text-white">
        <div className="px-4 pt-32 pb-20 max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                {t("Escuela de Costos · Costea", "School of Costs · Costea")}
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] mb-8 text-white">
                {lang === "es" ? (
                  <>Domina los costos<br />de tu negocio.<br /><span className="text-blue-300">Toma el control.</span></>
                ) : (
                  <>Master the costs<br />of your business.<br /><span className="text-blue-300">Take control.</span></>
                )}
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-xl">
                {t(
                  "La primera Escuela de Costos para emprendedores. Aprende, practica y certifícate — sin necesidad de ser contador.",
                  "The first School of Costs for entrepreneurs. Learn, practice and get certified — no accounting background needed."
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
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/18 border border-white/20 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out"
                >
                  {t("Ver cursos", "View courses")}
                </Link>
              </div>
              <p className="mt-6 text-slate-400 text-sm">
                {t("Sin tarjeta de crédito · Primer curso 100% gratis", "No credit card · First course 100% free")}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stats — frosted cards on the gradient */}
        <div className="px-4 pb-0 border-t border-white/10">
          <div className="max-w-5xl mx-auto pt-10 pb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "1,200+", label: t("Estudiantes activos", "Active students") },
              { value: "4", label: t("Cursos disponibles", "Available courses") },
              { value: "40+", label: t("Horas de contenido", "Hours of content") },
              { value: "100%", label: t("Primer curso gratis", "First course free") },
            ].map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-white/8 border border-white/12 rounded-2xl px-5 py-5 backdrop-blur-sm">
                  <div className="text-3xl font-extrabold tracking-tight text-white">{s.value}</div>
                  <div className="text-slate-400 text-xs mt-1.5">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <SectionWave fill="white" />
      </section>

      {/* ─── Problem section ─── */}
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
                    <span className="text-xs font-bold text-blue-600 tracking-widest shrink-0 mt-1">{p.label}</span>
                    <div>
                      <h3 className="font-bold tracking-tight text-gray-900 text-lg mb-2">{p.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
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

      <SectionWave fill="#f9fafb" bgClass="bg-white" direction="down" size="sm" />

      {/* ─── Benefits ─── */}
      <section className="py-28 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-16">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <Reveal key={b.title.toString()} variant="scale" delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 ease-out h-full flex flex-col">
                  {/* Icon container */}
                  <div className={`w-12 h-12 rounded-xl ${b.iconBg} ${b.iconColor} flex items-center justify-center mb-5 shrink-0`}>
                    {b.icon}
                  </div>
                  {/* Number badge */}
                  <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full mb-3 ${b.numBg}`}>
                    {b.num}
                  </span>
                  <h3 className="font-bold tracking-tight text-gray-900 text-lg mb-2">{b.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionWave fill="white" bgClass="bg-gray-50" direction="up" size="sm" />

      {/* ─── How it works ─── */}
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

            {/* Steps with vertical connector line */}
            <div className="relative">
              {/* Vertical connector line — stops before last step */}
              <div className="absolute left-[19px] top-6 w-0.5 bg-slate-200" style={{ height: "calc(100% - 56px)" }} />
              <div className="space-y-0">
                {journey.map((j, i) => (
                  <Reveal key={j.step} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                    <div className="flex gap-5 pb-8 relative">
                      {/* Circle badge — 40px */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold shrink-0 z-10 ${
                        i === 0
                          ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
                          : "bg-slate-100 text-blue-600 hover:bg-blue-50 transition-colors"
                      }`}>
                        {j.step}
                      </div>
                      <div className="pt-1.5 pb-4">
                        <h3 className="font-bold text-gray-900 mb-1" style={{ fontSize: "17px" }}>{j.title}</h3>
                        <p className="text-slate-500 leading-relaxed" style={{ fontSize: "15px" }}>{j.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWave fill="#f9fafb" bgClass="bg-white" direction="down" size="sm" />

      {/* ─── Courses ─── */}
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

          <div className="space-y-3">
            {courses.map((course, i) => (
              <Reveal key={course.slug} variant="scale" delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-white border border-slate-200 rounded-2xl px-6 py-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200 ease-out relative">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Step number */}
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-sm font-bold text-blue-600">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-bold tracking-tight text-gray-900">{course.title}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${levelColor[course.level]}`}>
                          {course.level}
                        </span>
                        {course.free && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                            {t("Gratis", "Free")}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-1">{course.description}</p>
                      <p className="text-slate-400 text-xs mt-1">
                        {course.lessons} {t("lecciones", "lessons")} · {course.duration}
                      </p>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3 shrink-0">
                      {!course.free && (
                        <span className="hidden sm:block text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-50 text-slate-500">
                          {t("Requiere cuenta", "Requires account")}
                        </span>
                      )}
                      <Link
                        href={course.free ? `/escuela/cursos/${course.slug}` : "/auth/signup"}
                        className={`text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 ease-out whitespace-nowrap ${
                          course.free
                            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-200"
                            : "border-[1.5px] border-blue-600 text-blue-600 hover:bg-blue-50"
                        }`}
                      >
                        {course.free ? t("Comenzar gratis", "Start free") : t("Acceder", "Access")}
                      </Link>
                    </div>
                  </div>

                  {/* Lock icon top-right for locked courses */}
                  {!course.free && (
                    <div className="absolute top-4 right-4 sm:hidden">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionWave fill="#f8fafc" bgClass="bg-gray-50" direction="up" size="sm" />

      {/* ─── Testimonials — light section ─── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {t("Testimonios", "Testimonials")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                {t("Resultados que hablan por sí solos.", "Results that speak for themselves.")}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} variant="scale" delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full flex flex-col">
                  {/* Quote mark */}
                  <span className="text-5xl text-blue-600 font-serif leading-none mb-3 select-none opacity-40" style={{ fontFamily: "Georgia, serif" }}>"</span>
                  <p className="text-slate-600 text-sm leading-relaxed italic flex-1 mb-6">{item.text}</p>
                  {/* Person row */}
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-bold shrink-0">
                      {item.initials}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-gray-900">{item.name}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{item.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionWave fill="white" bgClass="bg-slate-50" direction="up" size="sm" />

      {/* ─── Final CTA ─── */}
      <section className="pt-16 pb-28 px-4 bg-white">
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

      <SectionWave fill="#030712" bgClass="bg-white" direction="up" />
      <Footer />
    </>
  );
}
