import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CosteaAppPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-emerald-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">App Costea</h1>
          <p className="text-lg text-gray-600">
            La herramienta de gestión de costos para tu empresa. Calcula, analiza y
            decide con información real.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="text-3xl mb-4">🧮</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Calculadora de Costos</h2>
            <p className="text-gray-600 text-sm">
              Ingresa tus materias primas, mano de obra y gastos indirectos para obtener
              el costo real de producción.
            </p>
          </div>

          <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="text-3xl mb-4">📈</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Punto de Equilibrio</h2>
            <p className="text-gray-600 text-sm">
              Calcula cuántas unidades necesitas vender para cubrir tus costos fijos y
              comenzar a generar utilidad.
            </p>
          </div>

          <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="text-3xl mb-4">📊</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Análisis de Márgenes</h2>
            <p className="text-gray-600 text-sm">
              Compara productos o líneas de negocio y descubre cuál tiene el mejor margen
              de contribución.
            </p>
          </div>

          <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="text-3xl mb-4">📋</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Reportes Exportables</h2>
            <p className="text-gray-600 text-sm">
              Genera reportes en PDF o Excel con el resumen de tus costos, precios
              sugeridos y utilidad proyectada.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            La app completa estará disponible próximamente en esta plataforma.
          </p>
          <a
            href="https://costea.com.co"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
          >
            Ir a costea.com.co →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
