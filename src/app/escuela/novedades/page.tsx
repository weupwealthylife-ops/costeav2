import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const roadmap = [
  {
    status: "disponible",
    label: "Disponible",
    date: "Junio 2025",
    title: "Calculadora de costos mejorada",
    description: "Nueva interfaz para calcular costos de productos con hasta 20 ingredientes o insumos, con guardado automático.",
  },
  {
    status: "disponible",
    label: "Disponible",
    date: "Mayo 2025",
    title: "Punto de equilibrio visual",
    description: "Gráfica interactiva del punto de equilibrio que se actualiza en tiempo real mientras modificas tus datos.",
  },
  {
    status: "proximo",
    label: "Próximamente",
    date: "Julio 2025",
    title: "Reportes en PDF",
    description: "Exporta el análisis de costos y punto de equilibrio en un PDF profesional para compartir con tus socios o clientes.",
  },
  {
    status: "proximo",
    label: "Próximamente",
    date: "Agosto 2025",
    title: "Comparador de escenarios",
    description: "Compara hasta 3 escenarios de precio o volumen de ventas y decide cuál es la mejor estrategia para tu negocio.",
  },
  {
    status: "planeado",
    label: "Planeado",
    date: "Q4 2025",
    title: "Integración con la Escuela",
    description: "Practica directamente los ejercicios de cada lección dentro de la App Costea, conectando el aprendizaje con la acción.",
  },
];

const features = [
  {
    tag: "Nuevo",
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "Panel de inicio rediseñado",
    description:
      "Accede de un vistazo a tus productos costeados, el punto de equilibrio actual y tus últimos análisis, todo en un solo lugar.",
    preview: "📊",
    details: [
      "Resumen de todos tus productos",
      "Indicador de margen de contribución",
      "Acceso rápido a tus cálculos recientes",
    ],
  },
  {
    tag: "Mejorado",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Costeo por receta o ficha técnica",
    description:
      "Ingresa los ingredientes con sus cantidades y precios, y Costea calcula el costo unitario y el precio mínimo de venta automáticamente.",
    preview: "🧮",
    details: [
      "Hasta 20 insumos por producto",
      "Cálculo automático de costo unitario",
      "Precio mínimo sugerido con tu % de utilidad",
    ],
  },
  {
    tag: "Nuevo",
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "Análisis de múltiples productos",
    description:
      "Compara la rentabilidad de todos tus productos en una sola vista y descubre cuáles generan más margen.",
    preview: "📈",
    details: [
      "Vista de tabla comparativa",
      "Ranking por margen de contribución",
      "Alerta si un producto está siendo vendido a pérdida",
    ],
  },
  {
    tag: "Próximamente",
    tagColor: "bg-yellow-100 text-yellow-700",
    title: "Exportación y reportes",
    description:
      "Genera reportes listos para presentar a tu equipo, contador o inversionistas con un clic.",
    preview: "📄",
    details: [
      "PDF con diseño profesional",
      "Excel con todos los datos",
      "Compartir por enlace",
    ],
  },
];

const statusStyle: Record<string, string> = {
  disponible: "bg-emerald-500",
  proximo: "bg-yellow-400",
  planeado: "bg-gray-300",
};

export default function NovedadesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-emerald-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-emerald-500/30 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Novedades · App Costea V2
          </span>
          <h1 className="text-4xl font-extrabold mb-4">Lo nuevo en Costea</h1>
          <p className="text-gray-300 text-lg">
            Conoce las mejoras que hemos lanzado y lo que viene próximamente para ayudarte
            a gestionar los costos de tu negocio de forma más fácil y poderosa.
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Hoja de ruta</h2>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-100" />
            <div className="space-y-8">
              {roadmap.map((item) => (
                <div key={item.title} className="flex gap-6 relative">
                  <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 z-10 ${statusStyle[item.status]}`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        item.status === "disponible"
                          ? "bg-emerald-100 text-emerald-700"
                          : item.status === "proximo"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {item.label}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nuevas funciones en detalle</h2>
            <p className="text-gray-500">Así se ve la nueva versión de Costea.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                {/* Preview area */}
                <div className="bg-gradient-to-br from-emerald-50 to-white h-40 flex items-center justify-center text-7xl border-b border-gray-100">
                  {f.preview}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${f.tagColor}`}>
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{f.description}</p>
                  <ul className="space-y-1.5">
                    {f.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-emerald-500 font-bold">✓</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">¿Quieres acceder a todas estas funciones?</h2>
          <p className="text-emerald-200 mb-8 text-sm">
            Crea tu cuenta gratis y empieza a usar la nueva App Costea hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors"
            >
              Crear cuenta gratuita
            </Link>
            <Link
              href="/escuela"
              className="border border-white/40 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Ver cursos de la Escuela
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
