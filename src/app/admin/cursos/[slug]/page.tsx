import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";
import { addLesson, updateLesson, deleteLesson, updateCourse } from "../actions";
import AddLessonForm from "./AddLessonForm";

const ADMIN_EMAILS = ["enrique280196@gmail.com"];

const levelStyle: Record<string, string> = {
  Básico: "bg-emerald-50 text-emerald-700",
  Intermedio: "bg-amber-50 text-amber-700",
  Avanzado: "bg-red-50 text-red-700",
};

export default async function EditCursoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || !ADMIN_EMAILS.includes(user.email ?? "")) {
    redirect("/dashboard");
  }

  const { data: course } = await supabase
    .from("courses")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!course) notFound();

  const { data: modules } = await supabase
    .from("modules")
    .select("id, title, position")
    .eq("course_id", course.id)
    .order("position", { ascending: true });

  const { data: lessons } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", course.id)
    .order("position", { ascending: true });

  const lessonsByModule: Record<string, typeof lessons> = {};
  (lessons ?? []).forEach((l) => {
    if (!lessonsByModule[l.module_id]) lessonsByModule[l.module_id] = [];
    lessonsByModule[l.module_id]!.push(l);
  });

  const moduleNames = [...new Set((modules ?? []).map((m) => m.title))];

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
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="text-xs text-gray-500 truncate mb-2">{user.email}</div>
          <form action={logout}>
            <button type="submit" className="text-xs text-gray-500 hover:text-red-400 transition-colors">Cerrar sesión</button>
          </form>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 p-6 sm:p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Link href="/admin/cursos" className="text-gray-400 hover:text-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Link>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${levelStyle[course.level] ?? "bg-gray-100 text-gray-600"}`}>
                  {course.level}
                </span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  course.published ? "text-emerald-700 bg-emerald-50" : "text-gray-500 bg-gray-100"
                }`}>
                  {course.published ? "Publicado" : "Borrador"}
                </span>
              </div>
              <h1 className="text-xl font-extrabold text-gray-900 tracking-tight truncate">{course.title}</h1>
            </div>
            <Link
              href={`/escuela/cursos/${course.slug}`}
              target="_blank"
              className="text-xs text-gray-400 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Ver página →
            </Link>
          </div>

          {/* Course details card */}
          <form action={updateCourse} className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <input type="hidden" name="id" value={course.id} />
            <h2 className="font-bold text-gray-900 mb-4 text-sm">Detalles del curso</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Título</label>
                <input
                  name="title"
                  defaultValue={course.title}
                  required
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Descripción</label>
                <textarea
                  name="description"
                  defaultValue={course.description}
                  rows={2}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Nivel</label>
                  <select
                    name="level"
                    defaultValue={course.level}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Duración</label>
                  <input
                    name="duration"
                    defaultValue={course.duration}
                    placeholder="ej. 3h"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="free"
                    value="true"
                    defaultChecked={course.free}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">Gratis</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="published"
                    value="true"
                    defaultChecked={course.published}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">Publicado</span>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors">
                Guardar cambios
              </button>
            </div>
          </form>

          {/* Lessons per module */}
          <div className="mb-6">
            <h2 className="font-bold text-gray-900 mb-4 text-sm">Lecciones ({lessons?.length ?? 0})</h2>

            {(modules ?? []).length === 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-400 text-sm mb-4">
                No hay lecciones todavía. Agrega la primera abajo.
              </div>
            )}

            {(modules ?? []).map((mod) => (
              <div key={mod.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-4">
                <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50">
                  <h3 className="font-semibold text-gray-900 text-sm">{mod.title}</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {(lessonsByModule[mod.id] ?? []).map((lesson) => (
                    <div key={lesson.id} className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                          lesson.free ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"
                        }`}>
                          {lesson.free ? "▶" : "🔒"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <form action={updateLesson} className="space-y-2">
                            <input type="hidden" name="id" value={lesson.id} />
                            <div className="flex gap-2">
                              <input
                                name="title"
                                defaultValue={lesson.title}
                                className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                              <input
                                name="duration"
                                defaultValue={lesson.duration}
                                placeholder="12 min"
                                className="w-20 border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                            <input
                              name="video_url"
                              defaultValue={lesson.video_url ?? ""}
                              placeholder="URL del video (YouTube, Vimeo, Loom...)"
                              className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                            />
                            <input
                              name="pdf_url"
                              defaultValue={lesson.pdf_url ?? ""}
                              placeholder="URL del PDF (opcional)"
                              className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                            />
                            <div className="flex items-center justify-between">
                              <label className="flex items-center gap-1.5 cursor-pointer">
                                <input
                                  type="checkbox"
                                  name="free"
                                  value="true"
                                  defaultChecked={lesson.free}
                                  className="w-3.5 h-3.5 rounded border-gray-300 text-blue-600"
                                />
                                <span className="text-xs text-gray-600">Gratis</span>
                              </label>
                              <button type="submit" className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                                Guardar
                              </button>
                            </div>
                          </form>
                        </div>
                        <form action={deleteLesson}>
                          <input type="hidden" name="id" value={lesson.id} />
                          <button type="submit" className="text-gray-300 hover:text-red-400 transition-colors text-sm mt-0.5" title="Eliminar lección">
                            ✕
                          </button>
                        </form>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Add lesson form — client component for UX */}
          <AddLessonForm courseId={course.id} moduleNames={moduleNames} addLesson={addLesson} />
        </div>
      </div>
    </div>
  );
}
