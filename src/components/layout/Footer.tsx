"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0f1e] via-[#0d1b3e] to-[#1a3a6b] overflow-hidden">
      {/* Subtle glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-48 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-40 bg-blue-700/6 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 sm:pt-16 sm:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand col */}
          <div className="md:col-span-2 max-w-[280px]">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo is dark — invert to white for dark bg */}
              <Image
                src="/logo.svg"
                alt="Escuela de Costos"
                width={32}
                height={32}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-semibold text-base tracking-tight">
                  {t("Escuela De Costos", "School of Costs")}
                </span>
                <span className="text-slate-400 text-xs">by Costea®</span>
              </div>
            </div>
            <p className="text-[14px] leading-[1.6] text-[#CBD5E1] max-w-xs">
              {t(
                "Aprende gestión de costos y toma mejores decisiones financieras para tu negocio.",
                "Learn cost management and make better financial decisions for your business."
              )}
            </p>
            <Link
              href="/auth/signup"
              className="inline-flex items-center mt-6 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[14px] font-semibold px-5 py-[10px] rounded-[10px] transition-all duration-200 hover:-translate-y-px shadow-lg shadow-blue-900/30"
            >
              {t("Crear cuenta gratis →", "Create free account →")}
            </Link>
          </div>

          {/* Escuela col */}
          <div>
            <h3 className="text-white font-semibold text-[14px] tracking-[0.03em] mb-4">
              {t("Escuela", "School")}
            </h3>
            <ul className="space-y-[10px] text-[14px]">
              <li>
                <Link href="/escuela" className="text-[#94A3B8] hover:text-[#E2E8F0] hover:underline transition-colors duration-200">
                  {t("¿Qué es la Escuela?", "What is the School?")}
                </Link>
              </li>
              <li>
                <Link href="/escuela/cursos/fundamentos-de-costos" className="text-[#94A3B8] hover:text-[#E2E8F0] hover:underline transition-colors duration-200">
                  {t("Todos los cursos", "All courses")}
                </Link>
              </li>
              <li>
                <Link href="/auth/signup" className="text-[#94A3B8] hover:text-[#E2E8F0] hover:underline transition-colors duration-200">
                  {t("Crear cuenta gratis", "Create free account")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Costea App col */}
          <div>
            <h3 className="text-white font-semibold text-[14px] tracking-[0.03em] mb-4">
              Costea App
            </h3>
            <ul className="space-y-[10px] text-[14px]">
              <li>
                <Link href="/costea" className="text-[#94A3B8] hover:text-[#E2E8F0] hover:underline transition-colors duration-200">
                  {t("Herramientas", "Tools")}
                </Link>
              </li>
              <li>
                <Link href="/costea/calculadora" className="text-[#94A3B8] hover:text-[#E2E8F0] hover:underline transition-colors duration-200">
                  {t("Calculadora de Costos", "Cost Calculator")}
                </Link>
              </li>
              <li>
                <Link href="https://costea.com.co" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#E2E8F0] hover:underline transition-colors duration-200">
                  costea.com.co ↗
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[13px] text-[#475569]">
            © 2026 Costea® · {t("Todos los derechos reservados", "All rights reserved")} · Colombia
          </span>
          <div className="flex items-center gap-4 text-[13px]">
            <Link href="/auth/login" className="text-[#64748B] hover:text-[#94A3B8] transition-colors duration-200">
              {t("Iniciar sesión", "Sign in")}
            </Link>
            <Link href="/auth/signup" className="text-[#64748B] hover:text-[#94A3B8] transition-colors duration-200">
              {t("Registrarse", "Sign up")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
