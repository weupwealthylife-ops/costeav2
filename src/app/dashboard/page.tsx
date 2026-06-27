import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";

const courses = [
  { slug: "fundamentos-de-costos", title: "Fundamentos de Costos", progress: 0, lessons: 6, level: "Básico", free: true },
  { slug: "costeo-de-productos", title: "Costeo de Productos", progress: 0, lessons: 8, level: "Intermedio", free: false },
  { slug: "punto-de-equilibrio", title: "Punto de Equilibrio", progress: 0, lessons: 5, level: "Intermedio", free: false },
  { slug: "analisis-de-rentabilidad", title: "Análisis de Rentabilidad", progress: 0, lessons: 7, level: "Avanzado", free: false },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  const firstName = user.user_metadata?.full_name?.split(" ")[0] ?? "estudiante";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top nav */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-emerald-600">Costea</span>
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">V2</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 hidden sm:block">{user.email}</span>
            <form action={logout}>
              <button
                type="submit"
                className="text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                Cerrar sesión
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Greeting */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Hola, {firstName} 👋
          </h1>
          <p className="text-gray-500 mt-1">¿Listo para aprender hoy?</p>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-emerald-600 text-white rounded-2xl p-6">
            <div className="text-3xl mb-2">📚</div>
            <div className="font-bold text-lg">Mis cursos</div>
            <div className="text-emerald-200 text-sm mt-1">{courses.length} cursos disponibles</div>
          </div>
          <Link href="/costea" className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="text-3xl mb-2">🧮</div>
            <div className="font-bold text-lg text-gray-900">App Costea</div>
            <div className="text-gray-400 text-sm mt-1">Ir a la herramienta</div>
          </Link>
          <Link href="/escuela/novedades" className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="text-3xl mb-2">🚀</div>
            <div className="font-bold text-lg text-gray-900">Novedades</div>
            <div className="text-gray-400 text-sm mt-1">Ver nuevas funciones</div>
          </Link>
        </div>

        {/* Courses */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Mis cursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course.slug} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                  {course.free && (
                    <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                      Gratis
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{course.lessons} lecciones</p>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Progreso</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div
                      className="h-1.5 bg-emerald-500 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                <Link
                  href={`/escuela/cursos/${course.slug}`}
                  className="block text-center bg-emerald-600 text-white py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-sm"
                >
                  {course.progress > 0 ? "Continuar" : "Comenzar"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
