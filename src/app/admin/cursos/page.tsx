import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";
import { togglePublished } from "./actions";

const ADMIN_EMAILS = ["enrique280196@gmail.com"];

const levelStyle: Record<string, string> = {
  Básico: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  Intermedio: "bg-amber-50 text-amber-700 border border-amber-100",
  Avanzado: "bg-red-50 text-red-700 border border-red-100",
};

export default async function AdminCursosPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || !ADMIN_EMAILS.includes(user.email ?? "")) {
    redirect("/dashboard");
  }

  const { data: courses } = await supabase
    .from("courses")
    .select("id, title, slug, level, published, position")
    .order("position", { ascending: true });

  // Lesson counts per course
  const { data: lessons } = await supabase
    .from("lessons")
    .select("course_id");

  const lessonCounts: Record<string, number> = {};
  (lessons ?? []).forEach((l) => {
    lessonCounts[l.course_id] = (lessonCounts[l.course_id] ?? 0) + 1;
  });

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
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:bg-white/8 hover:text-white text-sm font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            Dashboard
          </Link>
          <Link href="/admin/cursos" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/10 text-white text-sm font-semibold">
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
            <button type="submit" className="text-xs text-gray-500 hover:text-red-400 transition-colors">Cerrar sesión</button>
          </form>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 p-6 sm:p-8">
        <div className="max-w-4xl mx-auto">

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Cursos</h1>
              <p className="text-gray-500 text-sm mt-0.5">{courses?.length ?? 0} cursos · Gestiona contenido y lecciones</p>
            </div>
            <Link
              href="/admin/cursos/nuevo"
              className="bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors"
            >
              + Nuevo curso
            </Link>
          </div>

          {(!courses || courses.length === 0) && (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">No hay cursos todavía</h3>
              <p className="text-gray-500 text-sm mb-6">Crea el primer curso para empezar a agregar lecciones y contenido.</p>
              <Link href="/admin/cursos/nuevo" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors">
                Crear primer curso
              </Link>
            </div>
          )}

          {courses && courses.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="divide-y divide-gray-50">
                {courses.map((course) => (
                  <div key={course.id} className="flex items-center gap-4 px-6 py-5 hover:bg-gray-50 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${levelStyle[course.level] ?? "bg-gray-100 text-gray-600"}`}>
                          {course.level}
                        </span>
                      </div>
                      <div className="font-semibold text-sm text-gray-900">{course.title}</div>
                      <div className="text-xs text-gray-400 mt-0.5">
                        {lessonCounts[course.id] ?? 0} lecciones · /{course.slug}
                      </div>
                    </div>

                    <form action={togglePublished}>
                      <input type="hidden" name="id" value={course.id} />
                      <input type="hidden" name="published" value={String(course.published)} />
                      <button
                        type="submit"
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                          course.published
                            ? "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100"
                            : "bg-gray-100 text-gray-500 border-gray-200 hover:bg-gray-200"
                        }`}
                      >
                        {course.published ? "Publicado" : "Borrador"}
                      </button>
                    </form>

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
          )}

          {/* Note about DB setup */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-2xl text-xs text-amber-700">
            <strong>Nota:</strong> Si no aparecen cursos, ejecuta el SQL de configuración en tu proyecto Supabase para crear las tablas{" "}
            <code className="font-mono bg-amber-100 px-1 rounded">courses</code>,{" "}
            <code className="font-mono bg-amber-100 px-1 rounded">modules</code> y{" "}
            <code className="font-mono bg-amber-100 px-1 rounded">lessons</code>.
          </div>
        </div>
      </div>
    </div>
  );
}
