"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLang } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const pathname = usePathname();

  const navLinks = [
    { href: "/escuela", label: t("Escuela de Costos", "School of Costs") },
    { href: "/costea", label: t("Costea App", "Costea App") },
  ];

  return (
    <nav className="bg-white/95 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo.svg" alt="Escuela de Costos" width={30} height={30} />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-extrabold tracking-tight text-gray-900 whitespace-nowrap">
                {t("Escuela de Costos", "School of Costs")}
              </span>
              <span className="text-[9px] text-gray-400 font-medium hidden sm:block">by Costea®</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    active ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                  {active && <span className="block h-0.5 bg-blue-600 rounded-full mt-px" />}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors duration-200 border border-gray-200 hover:border-gray-300 rounded-lg px-2.5 py-1.5"
              aria-label="Toggle language"
            >
              <span className={lang === "es" ? "text-gray-900" : "text-gray-400"}>ES</span>
              <span className="text-gray-300">/</span>
              <span className={lang === "en" ? "text-gray-900" : "text-gray-400"}>EN</span>
            </button>

            <Link href="/auth/login" className="hidden sm:block text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
              {t("Iniciar sesión", "Sign in")}
            </Link>
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 hover:-translate-y-px shadow-sm shadow-blue-200 whitespace-nowrap"
            >
              {t("Comenzar gratis", "Get started free")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
