import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function AuthPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-md p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Bienvenido a Costea V2
          </h1>
          <p className="text-gray-500 text-center text-sm mb-8">
            Crea tu cuenta o inicia sesión para continuar
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            ¿No tienes cuenta?{" "}
            <Link href="#" className="text-emerald-600 font-semibold hover:text-emerald-700">
              Regístrate gratis
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
