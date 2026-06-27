import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-emerald-600">Costea</span>
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">V2</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/escuela" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
              Escuela de Costos
            </Link>
            <Link href="/escuela/novedades" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
              Novedades
            </Link>
            <Link href="/costea" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
              App Costea
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors text-sm">
              Iniciar sesión
            </Link>
            <Link
              href="/auth/signup"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
            >
              Comenzar gratis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
