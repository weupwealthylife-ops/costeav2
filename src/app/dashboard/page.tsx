import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";

const courses = [
  { slug: "fundamentos-de-costos", title: "Fundamentos de Costos", progress: 0, lessons: 6, level: "Básico", free: true, unlocked: true },
  { slug: "costeo-de-productos", title: "Costeo de Productos", progress: 0, lessons: 8, level: "Intermedio", free: false, unlocked: false },
  { slug: "punto-de-equilibrio", title: "Punto de Equilibrio", progress: 0, lessons: 5, level: "Intermedio", free: false, unlocked: false },
  { slug: "analisis-de-rentabilidad", title: "Análisis de Rentabilidad", progress: 0, lessons: 7, level: "Avanzado", free: false, unlocked: false },
];

const journeySteps = [
  { hu: "HU1", label: "Registro", done: true },
  { hu: "HU2", label: "Onboarding", done: true },
  { hu: "HU3", label: "Aprendizaje", done: false },
  { hu: "HU4", label: "Calificación", done: false },
  { hu: "HU5", label: "Certificación", done: false },
  { hu: "HU6", label: "Costea Premium", done: false },
  { hu: "HU7", label: "Asesoría", done: false },
];

const levelColor: Record<string, string> = {
  Básico: "bg-green-100 text-green-700",
  Intermedio: "bg-yellow-100 text-yellow-700",
  Avanzado: "bg-red-100 text-red-700",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  const firstName = user.user_metadata?.full_name?.split(" ")[0] ?? "estudiante";
  const completedSteps = journeySteps.filter((s) => s.done).length;
  const totalSteps = journeySteps.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top nav */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-blue-600">Costea</span>
            <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">V2</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/escuela/novedades" className="text-sm text-gray-500 hover:text-blue-600 transition-colors hidden sm:block">
              Novedades
            </Link>
            <Link href="/costea" className="text-sm text-gray-500 hover:text-blue-600 transition-colors hidden sm:block">
              Costeapp
            </Link>
            <span className="text-sm text-gray-600 hidden sm:block">{user.email}</span>
            <form action={logout}>
              <button type="submit" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                Salir
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Hola, {firstName} 👋</h1>
          <p className="text-gray-500 mt-1">Tu camino hacia el dominio de los costos.</p>
        </div>

        {/* Journey progress bar */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900">Tu ruta de aprendizaje</h2>
            <span className="text-sm text-gray-400">{completedSteps}/{totalSteps} etapas completadas</span>
          </div>
          <div className="flex items-center gap-1 overflow-x-auto pb-2">
            {journeySteps.map((step, i) => (
              <div key={step.hu} className="flex items-center gap-1 shrink-0">
                <div className={`flex flex-col items-center gap-1`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    step.done
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}>
                    {step.done ? "✓" : i + 1}
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{step.label}</span>
                </div>
                {i < journeySteps.length - 1 && (
                  <div className={`w-8 h-0.5 mb-4 ${step.done ? "bg-blue-300" : "bg-gray-100"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Link
            href="/escuela/cursos/fundamentos-de-costos"
            className="bg-blue-600 text-white rounded-2xl p-6 hover:bg-blue-700 transition-colors"
          >
            <div className="text-3xl mb-2">▶️</div>
            <div className="font-bold text-lg">Continuar aprendiendo</div>
            <div className="text-blue-200 text-sm mt-1">Fundamentos de Costos</div>
          </Link>
          <Link href="/costea/calculadora" className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="text-3xl mb-2">🧮</div>
            <div className="font-bold text-lg text-gray-900">Calculadora de Costos</div>
            <div className="text-gray-400 text-sm mt-1">Costea tu producto ahora</div>
          </Link>
          <Link href="/escuela/novedades" className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="text-3xl mb-2">🚀</div>
            <div className="font-bold text-lg text-gray-900">Novedades</div>
            <div className="text-gray-400 text-sm mt-1">Ver nuevas funciones de Costea</div>
          </Link>
        </div>

        {/* Courses */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Mis cursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course.slug} className={`bg-white border rounded-2xl p-6 transition-all flex flex-col ${
                course.unlocked ? "border-gray-100 hover:shadow-md" : "border-gray-100 opacity-60"
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${levelColor[course.level]}`}>
                    {course.level}
                  </span>
                  <div className="flex gap-2">
                    {course.free && (
                      <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        Gratis
                      </span>
                    )}
                    {!course.unlocked && (
                      <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                        🔒 Bloqueado
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{course.lessons} lecciones</p>

                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Progreso</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: `${course.progress}%` }} />
                  </div>
                </div>

                {course.unlocked ? (
                  <Link
                    href={`/escuela/cursos/${course.slug}`}
                    className="mt-auto block text-center bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    {course.progress > 0 ? "Continuar" : "Comenzar"}
                  </Link>
                ) : (
                  <button
                    disabled
                    className="mt-auto block w-full text-center bg-gray-100 text-gray-400 py-2.5 rounded-lg font-semibold text-sm cursor-not-allowed"
                  >
                    Completa el curso anterior para desbloquear
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Costea light teaser */}
        <div className="mt-10 bg-gradient-to-br from-blue-700 to-blue-500 text-white rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">Costeapp · Versión gratuita</span>
              <h3 className="text-xl font-bold mt-3 mb-2">Pon en práctica lo que aprendes</h3>
              <p className="text-blue-100 text-sm max-w-sm">
                Mientras estudias tienes acceso a una versión simplificada de Costea para calcular costos reales de tu negocio.
              </p>
            </div>
            <Link
              href="/costea/calculadora"
              className="shrink-0 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              Abrir Costea →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
