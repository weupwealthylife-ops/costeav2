import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";
import { createCourse } from "../actions";

const ADMIN_EMAILS = ["enrique280196@gmail.com"];

export default async function NuevoCursoPage() {
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
      <div className="flex-1 min-w-0 p-6 sm:p-8">
        <div className="max-w-2xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <Link href="/admin/cursos" className="text-gray-400 hover:text-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Link>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Nuevo curso</h1>
              <p className="text-gray-500 text-sm mt-0.5">Crea el curso y luego agrega sus lecciones</p>
            </div>
          </div>

          <form action={createCourse} className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Título del curso</label>
              <input
                name="title"
                type="text"
                required
                placeholder="ej. Fundamentos de Costos"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Slug (URL)
                <span className="font-normal text-gray-400 ml-1">· Solo minúsculas y guiones</span>
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                <span className="text-gray-400 text-sm pl-4 pr-2 shrink-0">/escuela/cursos/</span>
                <input
                  name="slug"
                  type="text"
                  required
                  pattern="[a-z0-9-]+"
                  placeholder="fundamentos-de-costos"
                  className="flex-1 py-3 pr-4 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Descripción corta</label>
              <textarea
                name="description"
                required
                rows={3}
                placeholder="Qué aprenderán los estudiantes en este curso..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nivel</label>
                <select
                  name="level"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="Básico">Básico</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Duración estimada</label>
                <input
                  name="duration"
                  type="text"
                  placeholder="ej. 3h"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input type="hidden" name="free" value="false" />
                <input
                  type="checkbox"
                  name="free"
                  value="true"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Primer curso gratuito</span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input type="hidden" name="published" value="false" />
                <input
                  type="checkbox"
                  name="published"
                  value="true"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Publicar ahora</span>
              </label>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors"
              >
                Crear curso →
              </button>
              <Link
                href="/admin/cursos"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
