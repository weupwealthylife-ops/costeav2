import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";

const courses = [
  { slug: "fundamentos-de-costos", title: "Fundamentos de Costos", description: "Costos fijos, variables y estructura financiera básica.", progress: 0, lessons: 6, duration: "3h", level: "Básico", free: true, unlocked: true },
  { slug: "costeo-de-productos", title: "Costeo de Productos", description: "Materia prima, mano de obra y gastos indirectos.", progress: 0, lessons: 8, duration: "5h", level: "Intermedio", free: false, unlocked: false },
  { slug: "punto-de-equilibrio", title: "Punto de Equilibrio", description: "Cuánto necesitas vender para empezar a ganar.", progress: 0, lessons: 5, duration: "3h", level: "Intermedio", free: false, unlocked: false },
  { slug: "analisis-de-rentabilidad", title: "Análisis de Rentabilidad", description: "Qué productos y clientes generan más valor real.", progress: 0, lessons: 7, duration: "4h", level: "Avanzado", free: false, unlocked: false },
];

const levelStyle: Record<string, string> = {
  Básico: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  Intermedio: "bg-amber-50 text-amber-700 border border-amber-100",
  Avanzado: "bg-red-50 text-red-700 border border-red-100",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  const firstName = user.user_metadata?.full_name?.split(" ")[0] ?? "estudiante";
  const completedCourses = courses.filter(c => c.progress === 100).length;

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <aside className="hidden md:flex w-60 flex-col bg-white border-r border-gray-100 shrink-0 sticky top-0 h-screen">
        <div className="p-5 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="Escuela de Costos" width={28} height={28} />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-extrabold tracking-tight text-gray-900">Escuela de Costos</span>
              <span className="text-[9px] text-gray-400">by Costea®</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">Aprendizaje</p>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-50 text-blue-700 text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Inicio
          </Link>
          <Link href="/escuela" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            Mis cursos
          </Link>

          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 pt-4 mb-2">Herramientas</p>
          <Link href="/costea/calculadora" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            Calculadora
          </Link>
          <Link href="/costea" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Costea App
          </Link>
        </nav>

        {/* User + logout */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {firstName[0]?.toUpperCase()}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-gray-900 truncate">{firstName}</div>
              <div className="text-[10px] text-gray-400 truncate">{user.email}</div>
            </div>
          </div>
          <form action={logout}>
            <button type="submit" className="w-full text-xs text-gray-400 hover:text-red-500 transition-colors text-left py-1">
              Cerrar sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">

        {/* Mobile header */}
        <header className="md:hidden bg-white border-b border-gray-100 px-4 py-3.5 flex items-center justify-between sticky top-0 z-40">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Escuela de Costos" width={24} height={24} />
            <span className="text-sm font-extrabold text-gray-900">Escuela de Costos</span>
          </Link>
          <form action={logout}>
            <button type="submit" className="text-xs text-gray-400 hover:text-red-500 transition-colors">Salir</button>
          </form>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Hola, {firstName}</h1>
            <p className="text-gray-500 text-sm mt-1">Continúa tu ruta de aprendizaje en costos.</p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Cursos completados", value: `${completedCourses}/${courses.length}` },
              { label: "Lecciones", value: `0/${courses.reduce((a, c) => a + c.lessons, 0)}` },
              { label: "Horas de contenido", value: "15h+" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-4 border border-gray-100">
                <div className="text-xl font-extrabold text-gray-900 tracking-tight">{s.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Continue CTA */}
          <Link
            href="/escuela/cursos/fundamentos-de-costos"
            className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 mb-8 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-200 group"
          >
            <div>
              <p className="text-blue-200 text-xs font-semibold mb-1">Continuar donde lo dejaste</p>
              <h2 className="text-lg font-extrabold tracking-tight">Fundamentos de Costos</h2>
              <p className="text-blue-200 text-sm mt-1">Lección 1 · 6 lecciones · 3h</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0">
              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </Link>

          {/* Courses */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-gray-900 mb-4">Mis cursos</h2>
            <div className="space-y-3">
              {courses.map((course) => (
                <div
                  key={course.slug}
                  className={`bg-white border rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 ${
                    course.unlocked ? "border-gray-100 hover:border-blue-100 hover:shadow-sm" : "border-gray-100 opacity-55"
                  }`}
                >
                  {/* Progress ring placeholder */}
                  <div className="shrink-0 w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center bg-gray-50 text-xs font-bold text-gray-400">
                    {course.progress > 0 ? `${course.progress}%` : course.unlocked ? "▶" : "🔒"}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${levelStyle[course.level]}`}>
                        {course.level}
                      </span>
                      {course.free && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                          Gratis
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm truncate">{course.title}</h3>
                    <p className="text-gray-400 text-xs mt-0.5">{course.lessons} lecciones · {course.duration}</p>

                    <div className="mt-2 h-1 bg-gray-100 rounded-full w-full">
                      <div className="h-1 bg-blue-500 rounded-full transition-all" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>

                  {course.unlocked ? (
                    <Link
                      href={`/escuela/cursos/${course.slug}`}
                      className="shrink-0 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
                    >
                      {course.progress > 0 ? "Continuar →" : "Comenzar →"}
                    </Link>
                  ) : (
                    <span className="shrink-0 text-xs text-gray-300 whitespace-nowrap">Bloqueado</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Costea App teaser */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-1">Costea App</p>
              <h3 className="font-extrabold tracking-tight">Pon en práctica lo que aprendes</h3>
              <p className="text-gray-400 text-sm mt-1 max-w-sm">
                Calcula los costos reales de tu negocio mientras avanzas en el curso.
              </p>
            </div>
            <Link
              href="/costea/calculadora"
              className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors whitespace-nowrap"
            >
              Abrir calculadora →
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
