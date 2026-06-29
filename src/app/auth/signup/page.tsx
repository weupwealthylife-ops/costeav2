"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signup } from "../actions";

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

  /* Shared input class — explicit white bg + dark text so it's always visible */
  const inputClass =
    "w-full bg-white text-slate-900 border border-slate-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 placeholder:text-slate-400 transition-shadow";

  return (
    <div className="min-h-screen flex">

      {/* ── Left — brand panel ── */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-b from-gray-950 via-[#0d2562] to-blue-700 flex-col justify-between p-12 overflow-hidden">
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

        {/* Headline + benefits */}
        <div className="relative">
          <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Únete gratis hoy</p>
          <h2 className="text-4xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Tu negocio merece<br />decisiones basadas<br />en datos reales.
          </h2>
          <ul className="space-y-3">
            {[
              "Primer curso 100% gratis, sin tarjeta",
              "Aprende a tu ritmo, desde cualquier dispositivo",
              "Herramientas de costos incluidas con tu cuenta",
              "Certificación al completar cada nivel",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                {/* Checkmark: #60A5FA = text-blue-400 */}
                <span className="text-blue-400 font-bold mt-px shrink-0">✓</span>
                <span className="text-slate-200 text-[15px] leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="relative border-t border-white/10 pt-8 grid grid-cols-3 gap-6">
          {[
            { value: "1,200+", label: "Estudiantes activos" },
            { value: "12", label: "Cursos disponibles" },
            { value: "40h+", label: "Contenido" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-[32px] font-extrabold text-white tracking-tight leading-none">{s.value}</div>
              <div className="text-slate-400 text-[13px] font-medium mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right — form panel ── */}
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
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">Crea tu cuenta gratuita</h1>
            <p className="text-slate-500 text-sm">Sin tarjeta de crédito · Primer curso gratis</p>
          </div>

          {error && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
              {error}
            </div>
          )}

          <form action={handleSubmit} className="space-y-4">

            {/* Nombre */}
            <div>
              <label className="text-slate-700 text-sm font-medium block mb-1.5">
                Nombre completo
              </label>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Correo */}
            <div>
              <label className="text-slate-700 text-sm font-medium block mb-1.5">
                Correo electrónico
              </label>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
                placeholder="tu@correo.com"
              />
            </div>

            {/* Teléfono — keeping as-is until Option A/B decision */}
            <div>
              <label className="text-slate-700 text-sm font-medium block mb-1.5">
                Teléfono / WhatsApp
              </label>
              <input
                name="phone"
                type="tel"
                required
                className={inputClass}
                placeholder="+57 300 000 0000"
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="text-slate-700 text-sm font-medium block mb-1.5">
                Contraseña
              </label>
              <input
                name="password"
                type="password"
                required
                minLength={6}
                autoComplete="new-password"
                className={inputClass}
                placeholder="Mínimo 6 caracteres"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-px shadow-lg shadow-blue-200 disabled:opacity-60 disabled:translate-y-0 mt-2 cursor-pointer"
            >
              {loading ? "Creando cuenta..." : "Crear cuenta gratuita →"}
            </button>

            {/* Micro-trust line */}
            <p className="text-center text-xs text-slate-500 mt-2.5">
              🔒 Sin tarjeta de crédito · Sin spam · Cancela cuando quieras
            </p>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            ¿Ya tienes cuenta?{" "}
            <Link href="/auth/login" className="text-blue-600 font-bold hover:text-blue-700">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
