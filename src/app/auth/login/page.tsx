"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { login } from "../actions";

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
      {/* Left — brand panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-b from-gray-950 via-[#0d2562] to-blue-700 flex-col justify-between p-12 overflow-hidden">
        {/* Space glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-400/8 rounded-full blur-3xl" />
        </div>

        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-3">
          <Image src="/logo.svg" alt="Escuela de Costos" width={36} height={36} />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-extrabold text-base tracking-tight">Escuela de Costos</span>
            <span className="text-blue-300/60 text-xs">by Costea®</span>
          </div>
        </Link>

        {/* Main copy */}
        <div className="relative">
          <p className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-4">Plataforma de aprendizaje</p>
          <h2 className="text-4xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Aprende a dominar<br />los costos de tu<br />negocio.
          </h2>
          <p className="text-blue-100/60 text-base leading-relaxed max-w-sm">
            Cursos prácticos, herramientas reales y una comunidad de emprendedores que ya toman mejores decisiones.
          </p>
        </div>

        {/* Social proof */}
        <div className="relative border-t border-white/10 pt-8 grid grid-cols-3 gap-6">
          {[
            { value: "1,200+", label: "Estudiantes activos" },
            { value: "12", label: "Cursos disponibles" },
            { value: "40h+", label: "Contenido" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold text-white tracking-tight">{s.value}</div>
              <div className="text-blue-300/50 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 bg-white">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <Link href="/" className="lg:hidden flex items-center gap-2.5 mb-10 justify-center">
            <Image src="/logo.svg" alt="Escuela de Costos" width={30} height={30} />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-extrabold tracking-tight text-gray-900">Escuela de Costos</span>
              <span className="text-[9px] text-gray-400">by Costea®</span>
            </div>
          </Link>

          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">Bienvenido de vuelta</h1>
            <p className="text-gray-500 text-sm">Inicia sesión para continuar tu aprendizaje</p>
          </div>

          {error && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
              {error === "Invalid login credentials"
                ? "Correo o contraseña incorrectos. Inténtalo de nuevo."
                : error}
            </div>
          )}

          <form action={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Correo electrónico
              </label>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder:text-gray-400"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-semibold text-gray-700">
                  Contraseña
                </label>
                <Link href="/auth/reset" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder:text-gray-400"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all duration-200 hover:-translate-y-px shadow-lg shadow-blue-200 disabled:opacity-60 disabled:translate-y-0 mt-2"
            >
              {loading ? "Ingresando..." : "Iniciar sesión →"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            ¿No tienes cuenta?{" "}
            <Link href="/auth/signup" className="text-blue-600 font-bold hover:text-blue-700">
              Regístrate gratis
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
