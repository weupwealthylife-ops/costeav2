import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-white">Costea V2</span>
            <p className="mt-2 text-sm">
              Aprende gestión de costos y toma mejores decisiones financieras para tu negocio.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Escuela</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/escuela" className="hover:text-white transition-colors">¿Qué es la Escuela de Costos?</Link></li>
              <li><Link href="/escuela/cursos" className="hover:text-white transition-colors">Todos los cursos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Herramienta</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/costea" className="hover:text-white transition-colors">App Costea</Link></li>
              <li><Link href="https://costea.com.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">costea.com.co</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Costea V2. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
