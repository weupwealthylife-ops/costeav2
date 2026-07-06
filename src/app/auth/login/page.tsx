"use client";

import { useState } from "react";
import Link from "next/link";
import { login } from "../actions";
import BrandLogo from "@/components/ui/BrandLogo";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel — brand + social proof */}
      <div className="hidden lg:flex lg:w-[52%] bg-gradient-to-b from-gray-950 via-[#0d2562] to-blue-700 text-white flex-col justify-between p-12 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          <BrandLogo theme="dark" />
        </div>

        <div className="relative max-w-md">
          <p className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Plataforma de Aprendizaje
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Aprende a dominar<br />los costos de tu<br />negocio.
          </h2>
          <p className="text-blue-100/70 leading-relaxed mb-10">
            Cursos prácticos, herramientas reales y una comunidad de emprendedores que ya toman mejores decisiones.
          </p>
          <div className="flex gap-10 pt-6 border-t border-white/10">
            {[
              { value: "1,200+", label: "Estudiantes activos" },
              { value: "12", label: "Cursos disponibles" },
              { value: "40h+", label: "Contenido" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold">{s.value}</div>
                <div className="text-blue-200/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative text-blue-300/40 text-xs">
          © {new Date().getFullYear()} Costea®. Todos los derechos reservados.
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white">
        {/* Mobile logo */}
        <div className="lg:hidden mb-8">
          <BrandLogo theme="light" />
        </div>

        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Bienvenido de vuelta</h1>
          <p className="text-gray-500 text-sm mb-8">Inicia sesión para continuar tu aprendizaje</p>

          {error && (
            <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error === "Invalid login credentials"
                ? "Correo o contraseña incorrectos"
                : error}
            </div>
          )}

          <form action={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Correo electrónico
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <Link href="/auth/forgot-password" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <input
                name="password"
                type="password"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-60 shadow-lg shadow-blue-200 mt-2"
            >
              {loading ? "Ingresando..." : "Iniciar sesión →"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            ¿No tienes cuenta?{" "}
            <Link href="/auth/signup" className="text-blue-600 font-semibold hover:text-blue-700">
              Regístrate gratis
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
