import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const tools = [
  {
    icon: "🧮",
    tag: "Disponible",
    tagColor: "bg-blue-100 text-blue-700",
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
    tagColor: "bg-amber-100 text-amber-700",
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
    tagColor: "bg-amber-100 text-amber-700",
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
    tagColor: "bg-amber-100 text-amber-700",
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 border border-blue-500/20">
            Costeapp · Plataforma de Costos
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Gestiona los costos de tu negocio{" "}
            <span className="text-blue-400">sin complicaciones</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Sin hojas de cálculo. Sin fórmulas manuales. Solo ingresa tus datos
            y Costeapp hace los cálculos por ti en segundos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.costea.com.co/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out shadow-lg shadow-blue-900/40 hover:shadow-blue-700/40 hover:-translate-y-0.5"
            >
              Ir a Costeapp →
            </Link>
            <Link
              href="/costea/calculadora"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ease-out"
            >
              Usar la Calculadora
            </Link>
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
              Todas las herramientas
            </h2>
            <p className="text-gray-500">Disponibles ahora y próximamente en Costeapp.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((t) => (
              <div
                key={t.title}
                className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ease-out group ${
                  t.primary
                    ? "bg-white border border-blue-100 shadow-[0_2px_16px_-4px_rgba(37,99,235,0.12)] hover:shadow-[0_8px_32px_-8px_rgba(37,99,235,0.2)] hover:-translate-y-0.5"
                    : "bg-white border border-gray-100/80 shadow-[0_1px_8px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                    t.primary ? "bg-blue-50" : "bg-gray-50"
                  }`}>
                    {t.icon}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.tagColor}`}>
                    {t.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{t.description}</p>
                <Link
                  href={t.href}
                  className={`text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ease-out ${
                    t.primary
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-200"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
                  }`}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_8px_48px_-12px_rgba(37,99,235,0.5)]">
            <div>
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Costeapp · Plataforma completa</p>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                Accede a todas las herramientas
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
                Inicia sesión en Costeapp y gestiona los costos de tu negocio con todas las funciones disponibles.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="https://app.costea.com.co/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all duration-300 ease-out text-center hover:-translate-y-0.5 shadow-lg shadow-blue-800/20"
              >
                Entrar a Costeapp →
              </Link>
              <Link
                href="/costea/calculadora"
                className="bg-blue-500/30 hover:bg-blue-500/40 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ease-out text-center"
              >
                Usar la Calculadora gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
