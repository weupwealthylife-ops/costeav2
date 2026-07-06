"use client";

import { useState } from "react";
import Link from "next/link";
import { signup } from "../actions";
import BrandLogo from "@/components/ui/BrandLogo";

const benefits = [
  { icon: "📚", text: "Acceso al primer curso completo — 100% gratis" },
  { icon: "🧮", text: "Calculadora de costos sin límite de productos" },
  { icon: "📊", text: "Dashboard con tus costos y márgenes en tiempo real" },
  { icon: "🎓", text: "Certificado al completar cada nivel" },
];

export default function SignupPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await signup(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-row-reverse">
      {/* Right panel — brand + benefits */}
      <div className="hidden lg:flex lg:w-[52%] bg-gradient-to-b from-gray-950 via-[#0d2562] to-blue-700 text-white flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          <BrandLogo theme="dark" />
        </div>

        <div className="relative max-w-md">
          <p className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Empieza gratis hoy
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Todo lo que necesitas<br />para dominar los<br />costos de tu negocio.
          </h2>
          <p className="text-blue-100/70 leading-relaxed mb-10">
            Sin tarjeta de crédito. Sin jerga contable. Con los números reales de tu negocio.
          </p>
          <div className="space-y-4">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-start gap-3">
                <span className="text-xl shrink-0 mt-0.5">{b.icon}</span>
                <span className="text-blue-100/80 text-sm leading-relaxed">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative text-blue-300/40 text-xs">
          © {new Date().getFullYear()} Costea®. Todos los derechos reservados.
        </div>
      </div>

      {/* Left panel — form */}
      <div className="flex-1 min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white">
        {/* Mobile logo */}
        <div className="lg:hidden mb-8">
          <BrandLogo theme="light" />
        </div>

        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Crea tu cuenta gratuita</h1>
          <p className="text-gray-500 text-sm mb-8">Accede a la Escuela de Costos y a la Costea App</p>

          {error && (
            <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form action={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Nombre completo
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Correo electrónico
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Teléfono / WhatsApp
              </label>
              <input
                name="phone"
                type="tel"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                placeholder="+57 300 000 0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Contraseña
              </label>
              <input
                name="password"
                type="password"
                required
                minLength={6}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                placeholder="Mínimo 6 caracteres"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-60 shadow-lg shadow-blue-200 mt-2"
            >
              {loading ? "Creando cuenta..." : "Crear cuenta gratuita →"}
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-400 text-center">
            Sin tarjeta de crédito · Primer curso 100% gratis
          </p>

          <p className="mt-4 text-center text-sm text-gray-500">
            ¿Ya tienes cuenta?{" "}
            <Link href="/auth/login" className="text-blue-600 font-semibold hover:text-blue-700">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
