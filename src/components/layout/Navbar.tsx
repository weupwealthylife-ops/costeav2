"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { lang, toggle, t } = useLang();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Escuela de Costos" width={32} height={32} />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-extrabold tracking-tight text-gray-900">
                {t("Escuela de Costos", "School of Costs")}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">by Costea®</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/escuela" className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
              {t("Escuela de Costos", "School of Costs")}
            </Link>
            <Link href="/costea" className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
              Costeapp
            </Link>
            <Link href="/escuela/novedades" className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
              {t("Novedades", "What's New")}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors duration-200 border border-gray-200 hover:border-gray-300 rounded-lg px-2.5 py-1.5"
              aria-label="Toggle language"
            >
              <span className={lang === "es" ? "text-gray-900" : "text-gray-400"}>ES</span>
              <span className="text-gray-300">/</span>
              <span className={lang === "en" ? "text-gray-900" : "text-gray-400"}>EN</span>
            </button>

            <Link href="/auth/login" className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
              {t("Iniciar sesión", "Sign in")}
            </Link>
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 hover:-translate-y-px shadow-sm shadow-blue-200"
            >
              {t("Comenzar gratis", "Get started free")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
