import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";

const courses = [
  { slug: "fundamentos-de-costos", title: "Fundamentos de Costos", level: "Básico", lessons: 6, published: true },
  { slug: "costeo-de-productos", title: "Costeo de Productos", level: "Intermedio", lessons: 8, published: true },
  { slug: "punto-de-equilibrio", title: "Punto de Equilibrio", level: "Intermedio", lessons: 5, published: true },
  { slug: "analisis-de-rentabilidad", title: "Análisis de Rentabilidad", level: "Avanzado", lessons: 7, published: false },
];

const stats = [
  { label: "Estudiantes", value: "1,247" },
  { label: "Cursos activos", value: "3" },
  { label: "Lecciones totales", value: "26" },
  { label: "Tasa de finalización", value: "34%" },
];

const ADMIN_EMAILS = ["enrique280196@gmail.com"];

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || !ADMIN_EMAILS.includes(user.email ?? "")) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <aside className="hidden md:flex w-60 flex-col bg-gray-950 shrink-0 sticky top-0 h-screen">
        <div className="p-5 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="Escuela de Costos" width={28} height={28} />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-extrabold tracking-tight text-white">Escuela de Costos</span>
              <span className="text-[9px] text-blue-400">Admin Panel</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-3 mb-2">Panel</p>
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/10 text-white text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            Dashboard
          </Link>
          <Link href="/admin/cursos" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:bg-white/8 hover:text-white text-sm font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            Cursos
          </Link>
          <Link href="/admin/usuarios" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:bg-white/8 hover:text-white text-sm font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Usuarios
          </Link>

          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-3 pt-4 mb-2">Vista</p>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:bg-white/8 hover:text-white text-sm font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            Ver como usuario
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="text-xs text-gray-500 truncate mb-2">{user.email}</div>
          <form action={logout}>
            <button type="submit" className="text-xs text-gray-500 hover:text-red-400 transition-colors">
              Cerrar sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 p-6 sm:p-8">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Panel de administración</h1>
              <p className="text-gray-500 text-sm mt-0.5">Escuela de Costos · Costea®</p>
            </div>
            <Link
              href="/admin/cursos/nuevo"
              className="bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors"
            >
              + Nuevo curso
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="text-2xl font-extrabold text-gray-900 tracking-tight">{s.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Courses table */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-bold text-gray-900">Cursos</h2>
              <Link href="/admin/cursos" className="text-xs text-blue-600 font-semibold hover:text-blue-700">
                Ver todos →
              </Link>
            </div>
            <div className="divide-y divide-gray-50">
              {courses.map((course) => (
                <div key={course.slug} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-gray-900">{course.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{course.level} · {course.lessons} lecciones</div>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    course.published
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      : "bg-gray-100 text-gray-500 border border-gray-200"
                  }`}>
                    {course.published ? "Publicado" : "Borrador"}
                  </span>
                  <Link
                    href={`/admin/cursos/${course.slug}`}
                    className="text-xs text-blue-600 font-semibold hover:text-blue-700 transition-colors whitespace-nowrap"
                  >
                    Editar →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/admin/cursos" className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-blue-100 hover:shadow-sm transition-all group">
              <div className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Gestionar cursos y lecciones</div>
              <p className="text-gray-400 text-xs">Agrega, edita o elimina cursos. Sube enlaces de video y PDF por lección.</p>
            </Link>
            <Link href="/admin/usuarios" className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-blue-100 hover:shadow-sm transition-all group">
              <div className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Gestionar usuarios</div>
              <p className="text-gray-400 text-xs">Revisa el progreso de los estudiantes, asigna acceso premium y exporta reportes.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
