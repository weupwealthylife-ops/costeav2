import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const tools = [
  {
    icon: "🧮",
    tag: "Disponible",
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "Calculadora de Costos",
    description:
      "Ingresa tus insumos, mano de obra y gastos indirectos. Costea calcula el costo unitario y el precio mínimo de venta con el margen que tú defines.",
    href: "/costea/calculadora",
    cta: "Abrir calculadora",
    primary: true,
  },
  {
    icon: "📈",
    tag: "Próximamente",
    tagColor: "bg-yellow-100 text-yellow-700",
    title: "Punto de Equilibrio",
    description:
      "Descubre cuántas unidades necesitas vender para cubrir todos tus costos fijos y comenzar a generar utilidad real.",
    href: "/escuela/novedades",
    cta: "Ver novedades",
    primary: false,
  },
  {
    icon: "📊",
    tag: "Próximamente",
    tagColor: "bg-yellow-100 text-yellow-700",
    title: "Análisis de Rentabilidad",
    description:
      "Compara todos tus productos en una sola vista. Descubre cuáles generan más margen y cuáles te están haciendo perder dinero.",
    href: "/escuela/novedades",
    cta: "Ver novedades",
    primary: false,
  },
  {
    icon: "📄",
    tag: "Próximamente",
    tagColor: "bg-yellow-100 text-yellow-700",
    title: "Reportes Exportables",
    description:
      "Genera un PDF o Excel con el resumen de tus costos, precio sugerido y utilidad proyectada para compartir con tu equipo o contador.",
    href: "/escuela/novedades",
    cta: "Ver novedades",
    primary: false,
  },
];

export default function CosteaAppPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-gray-900 to-emerald-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-emerald-500/30 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            App Costea V2
          </span>
          <h1 className="text-4xl font-extrabold mb-4">
            Herramientas para gestionar los costos de tu negocio
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Sin hojas de cálculo complicadas. Sin errores. Solo ingresa tus datos
            y Costea hace los cálculos por ti.
          </p>
          <Link
            href="/costea/calculadora"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl text-lg font-bold transition-colors shadow-lg"
          >
            Usar la Calculadora de Costos →
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Todas las herramientas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((t) => (
            <div
              key={t.title}
              className={`border rounded-2xl p-8 hover:shadow-lg transition-all flex flex-col ${
                t.primary ? "border-emerald-200 bg-emerald-50" : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{t.icon}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${t.tagColor}`}>
                  {t.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">{t.description}</p>
              <Link
                href={t.href}
                className={`text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  t.primary
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
