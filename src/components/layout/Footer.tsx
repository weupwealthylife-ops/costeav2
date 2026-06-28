"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-[#070f2b] to-gray-950 text-gray-400 overflow-hidden">
      {/* Space glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-48 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-40 bg-blue-700/6 rounded-full blur-3xl" />
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="Escuela de Costos" width={32} height={32} />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-extrabold text-base tracking-tight">
                  {t("Escuela de Costos", "School of Costs")}
                </span>
                <span className="text-gray-600 text-xs">by Costea®</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs mb-6">
              {t(
                "Aprende gestión de costos y toma mejores decisiones financieras para tu negocio.",
                "Learn cost management and make better financial decisions for your business."
              )}
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-px shadow-lg shadow-blue-900/30"
            >
              {t("Crear cuenta gratis →", "Create free account →")}
            </Link>
          </div>

          {/* Escuela col */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-tight">
              {t("Escuela", "School")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/escuela" className="text-gray-500 hover:text-white transition-colors duration-200">
                  {t("¿Qué es la Escuela?", "What is the School?")}
                </Link>
              </li>
              <li>
                <Link href="/escuela/cursos/fundamentos-de-costos" className="text-gray-500 hover:text-white transition-colors duration-200">
                  {t("Todos los cursos", "All courses")}
                </Link>
              </li>
              <li>
                <Link href="/auth/signup" className="text-gray-500 hover:text-white transition-colors duration-200">
                  {t("Crear cuenta gratis", "Create free account")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Costea App col */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-tight">
              Costea App
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/costea" className="text-gray-500 hover:text-white transition-colors duration-200">
                  {t("Herramientas", "Tools")}
                </Link>
              </li>
              <li>
                <Link href="/costea/calculadora" className="text-gray-500 hover:text-white transition-colors duration-200">
                  {t("Calculadora de Costos", "Cost Calculator")}
                </Link>
              </li>
              <li>
                <Link href="https://costea.com.co" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-200">
                  costea.com.co
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© 2026 Costea® · {t("Todos los derechos reservados", "All rights reserved")} · Colombia</span>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="hover:text-gray-400 transition-colors">
              {t("Iniciar sesión", "Sign in")}
            </Link>
            <Link href="/auth/signup" className="hover:text-gray-400 transition-colors">
              {t("Registrarse", "Sign up")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
