"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/escuela", label: t("Escuela de Costos", "School of Costs") },
    { href: "/costea", label: t("Costea App", "Costea App") },
  ];

  return (
    <nav className="bg-white/95 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileOpen(false)}>
            <Image src="/logo.svg" alt="Escuela de Costos" width={30} height={30} />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-extrabold tracking-tight text-gray-900 whitespace-nowrap">
                {t("Escuela de Costos", "School of Costs")}
              </span>
              <span className="text-[9px] text-gray-400 font-medium hidden sm:block">by Costea®</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 pb-0.5 ${
                    active
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600 border-b-2 border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
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
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 hover:-translate-y-px shadow-sm shadow-blue-200 whitespace-nowrap"
            >
              {t("Comenzar gratis", "Get started free")}
            </Link>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              className="flex items-center gap-1 text-xs font-semibold text-gray-500 border border-gray-200 rounded-lg px-2 py-1.5"
              aria-label="Toggle language"
            >
              <span className={lang === "es" ? "text-gray-900" : "text-gray-400"}>ES</span>
              <span className="text-gray-300">/</span>
              <span className={lang === "en" ? "text-gray-900" : "text-gray-400"}>EN</span>
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="border-t border-gray-100 mt-2 pt-3 flex flex-col gap-2">
            <Link
              href="/auth/login"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium py-2.5 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {t("Iniciar sesión", "Sign in")}
            </Link>
            <Link
              href="/auth/signup"
              onClick={() => setMobileOpen(false)}
              className="bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              {t("Comenzar gratis", "Get started free")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
