import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const courses = [
  {
    slug: "fundamentos-de-costos",
    title: "Fundamentos de Costos",
    description: "Aprende qué son los costos, cómo clasificarlos y por qué son esenciales para tu negocio.",
    level: "Básico",
    lessons: 6,
    duration: "3h",
    free: true,
  },
  {
    slug: "costeo-de-productos",
    title: "Costeo de Productos y Servicios",
    description: "Calcula el costo real de lo que produces o vendes, incluyendo materia prima, mano de obra y gastos indirectos.",
    level: "Intermedio",
    lessons: 8,
    duration: "5h",
    free: false,
  },
  {
    slug: "punto-de-equilibrio",
    title: "Punto de Equilibrio",
    description: "Descubre cuánto necesitas vender para no perder dinero y cómo mejorar tu margen.",
    level: "Intermedio",
    lessons: 5,
    duration: "3h",
    free: false,
  },
  {
    slug: "analisis-de-rentabilidad",
    title: "Análisis de Rentabilidad",
    description: "Identifica qué productos, líneas o clientes generan más valor para tu empresa.",
    level: "Avanzado",
    lessons: 7,
    duration: "4h",
    free: false,
  },
];

const levelColor: Record<string, string> = {
  Básico: "bg-green-100 text-green-700",
  Intermedio: "bg-yellow-100 text-yellow-700",
  Avanzado: "bg-red-100 text-red-700",
};

export default function EscuelaPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-emerald-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Escuela de Costos
          </h1>
          <p className="text-lg text-gray-600">
            Cursos prácticos para que entiendas y controles los costos de tu negocio,
            sin importar si eres emprendedor o llevas años en el mercado.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.slug}
              className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-200 transition-all flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${levelColor[course.level]}`}>
                  {course.level}
                </span>
                {course.free && (
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                    Gratis
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h2>
              <p className="text-gray-600 text-sm mb-4 flex-1">{course.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
                <span>{course.lessons} lecciones</span>
                <span>{course.duration} de contenido</span>
              </div>
              <Link
                href={`/escuela/cursos/${course.slug}`}
                className="mt-auto bg-emerald-600 text-white text-center py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-sm"
              >
                Ver curso
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
