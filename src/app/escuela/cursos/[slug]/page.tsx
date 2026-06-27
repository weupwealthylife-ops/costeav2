import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

const courseData: Record<string, {
  title: string;
  level: string;
  description: string;
  modules: { title: string; lessons: { title: string; duration: string; free: boolean }[] }[];
}> = {
  "fundamentos-de-costos": {
    title: "Fundamentos de Costos",
    level: "Básico",
    description: "Aprende qué son los costos, cómo clasificarlos y por qué son esenciales para la salud financiera de tu negocio.",
    modules: [
      {
        title: "Módulo 1 · ¿Qué son los costos?",
        lessons: [
          { title: "Introducción: Por qué los costos importan", duration: "8 min", free: true },
          { title: "Diferencia entre costo y gasto", duration: "12 min", free: true },
        ],
      },
      {
        title: "Módulo 2 · Tipos de costos",
        lessons: [
          { title: "Costos fijos: Los que no dependen de cuánto produces", duration: "10 min", free: true },
          { title: "Costos variables: Los que crecen con tu producción", duration: "10 min", free: true },
          { title: "Costos semivariables: El caso intermedio", duration: "8 min", free: false },
        ],
      },
      {
        title: "Módulo 3 · Estructura de costos",
        lessons: [
          { title: "Cómo construir tu estructura de costos", duration: "15 min", free: false },
          { title: "Ejercicio práctico con Costea", duration: "20 min", free: false },
        ],
      },
    ],
  },
  "costeo-de-productos": {
    title: "Costeo de Productos y Servicios",
    level: "Intermedio",
    description: "Calcula el costo real de lo que produces o vendes.",
    modules: [
      {
        title: "Módulo 1 · Materia Prima",
        lessons: [
          { title: "Cómo identificar y costear los ingredientes o insumos", duration: "12 min", free: false },
          { title: "Unidades de medida y conversiones", duration: "10 min", free: false },
        ],
      },
      {
        title: "Módulo 2 · Mano de Obra",
        lessons: [
          { title: "¿Cuánto cuesta la hora de trabajo?", duration: "14 min", free: false },
          { title: "Cómo asignar la mano de obra a cada producto", duration: "12 min", free: false },
        ],
      },
    ],
  },
  "punto-de-equilibrio": {
    title: "Punto de Equilibrio",
    level: "Intermedio",
    description: "Descubre cuánto necesitas vender para no perder dinero.",
    modules: [
      {
        title: "Módulo 1 · Margen de Contribución",
        lessons: [
          { title: "¿Qué es el margen de contribución?", duration: "10 min", free: false },
          { title: "Cómo calcularlo para tus productos", duration: "12 min", free: false },
        ],
      },
    ],
  },
  "analisis-de-rentabilidad": {
    title: "Análisis de Rentabilidad",
    level: "Avanzado",
    description: "Identifica qué productos generan más valor.",
    modules: [
      {
        title: "Módulo 1 · Rentabilidad por producto",
        lessons: [
          { title: "Cómo comparar la rentabilidad de tus productos", duration: "15 min", free: false },
          { title: "ABC de productos: Cuáles priorizar", duration: "12 min", free: false },
        ],
      },
    ],
  },
};

const levelColor: Record<string, string> = {
  Básico: "bg-green-100 text-green-700",
  Intermedio: "bg-yellow-100 text-yellow-700",
  Avanzado: "bg-red-100 text-red-700",
};

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courseData[slug];
  if (!course) notFound();

  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const freeLessons = course.modules.reduce((acc, m) => acc + m.lessons.filter((l) => l.free).length, 0);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/escuela" className="text-emerald-200 text-sm hover:text-white transition-colors mb-4 inline-block">
            ← Volver a cursos
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${levelColor[course.level]}`}>
              {course.level}
            </span>
            <span className="text-xs text-emerald-200">{totalLessons} lecciones · {freeLessons} gratis</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-3">{course.title}</h1>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl">{course.description}</p>
          <Link
            href="/auth/signup"
            className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors"
          >
            Comenzar curso gratis
          </Link>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Contenido del curso</h2>
        <div className="space-y-6">
          {course.modules.map((module) => (
            <div key={module.title} className="border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm">{module.title}</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {module.lessons.map((lesson) => (
                  <div key={lesson.title} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                        lesson.free ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-400"
                      }`}>
                        {lesson.free ? "▶" : "🔒"}
                      </div>
                      <span className={`text-sm ${lesson.free ? "text-gray-800" : "text-gray-400"}`}>
                        {lesson.title}
                      </span>
                      {lesson.free && (
                        <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">
                          Gratis
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-400 shrink-0 ml-4">{lesson.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ¿Listo para desbloquear todo el curso?
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Crea tu cuenta gratis y accede a las lecciones gratuitas. Las demás se desbloquean al completar tu perfil.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/auth/signup"
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors"
            >
              Crear cuenta gratuita
            </Link>
            <Link
              href="/auth/login"
              className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-emerald-300 transition-colors"
            >
              Ya tengo cuenta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
