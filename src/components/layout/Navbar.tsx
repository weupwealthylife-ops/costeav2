import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Costea logo" width={36} height={36} className="rounded-xl" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold text-gray-900">Escuela de Costos</span>
              <span className="text-xs text-gray-400 font-medium">by Costea®</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/escuela" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Escuela de Costos
            </Link>
            <Link href="/escuela/novedades" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Novedades
            </Link>
            <Link href="/costea" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              App Costea
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm">
              Iniciar sesión
            </Link>
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Comenzar gratis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
