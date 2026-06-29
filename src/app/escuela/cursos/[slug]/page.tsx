import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { createClient } from "@/lib/supabase/server";

const levelColor: Record<string, string> = {
  Básico: "bg-green-100 text-green-700",
  Intermedio: "bg-yellow-100 text-yellow-700",
  Avanzado: "bg-red-100 text-red-700",
};

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: course } = await supabase
    .from("courses")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!course) notFound();

  const { data: modules } = await supabase
    .from("modules")
    .select("id, title, position")
    .eq("course_id", course.id)
    .order("position", { ascending: true });

  const { data: lessons } = await supabase
    .from("lessons")
    .select("id, module_id, title, duration, free, video_url, position")
    .eq("course_id", course.id)
    .order("position", { ascending: true });

  const lessonsByModule: Record<string, typeof lessons> = {};
  (lessons ?? []).forEach((l) => {
    if (!lessonsByModule[l.module_id]) lessonsByModule[l.module_id] = [];
    lessonsByModule[l.module_id]!.push(l);
  });

  const totalLessons = lessons?.length ?? 0;
  const freeLessons = (lessons ?? []).filter((l) => l.free).length;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/escuela" className="text-blue-200 text-sm hover:text-white transition-colors mb-4 inline-block">
            ← Volver a cursos
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${levelColor[course.level] ?? "bg-blue-100 text-blue-700"}`}>
              {course.level}
            </span>
            <span className="text-xs text-blue-200">{totalLessons} lecciones · {freeLessons} gratis</span>
            {course.duration && <span className="text-xs text-blue-200">· {course.duration}</span>}
          </div>
          <h1 className="text-4xl font-extrabold mb-3">{course.title}</h1>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl">{course.description}</p>
          <Link
            href="/auth/signup"
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            Comenzar curso gratis
          </Link>
        </div>
      </section>

      {/* Modules & Lessons */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Contenido del curso</h2>

        {(modules ?? []).length === 0 && (
          <div className="border border-gray-100 rounded-2xl p-8 text-center text-gray-400">
            Contenido disponible próximamente.
          </div>
        )}

        <div className="space-y-6">
          {(modules ?? []).map((module) => (
            <div key={module.id} className="border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm">{module.title}</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {(lessonsByModule[module.id] ?? []).map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${
                        lesson.free ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"
                      }`}>
                        {lesson.free ? "▶" : "🔒"}
                      </div>
                      <span className={`text-sm ${lesson.free ? "text-gray-800" : "text-gray-400"}`}>
                        {lesson.title}
                      </span>
                      {lesson.free && (
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                          Gratis
                        </span>
                      )}
                    </div>
                    {lesson.duration && (
                      <span className="text-xs text-gray-400 shrink-0 ml-4">{lesson.duration}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ¿Listo para desbloquear todo el curso?
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Crea tu cuenta gratis y accede a las lecciones gratuitas. Las demás se desbloquean al completar tu perfil.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Crear cuenta gratuita
            </Link>
            <Link
              href="/auth/login"
              className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-300 transition-colors"
            >
              Ya tengo cuenta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
