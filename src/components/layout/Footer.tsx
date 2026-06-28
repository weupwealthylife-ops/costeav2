"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-gray-950 text-gray-400 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="Escuela de Costos" width={32} height={32} />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-extrabold text-base tracking-tight">
                  {t("Escuela de Costos", "School of Costs")}
                </span>
                <span className="text-gray-600 text-xs">by Costea®</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              {t(
                "Aprende gestión de costos y toma mejores decisiones financieras para tu negocio.",
                "Learn cost management and make better financial decisions for your business."
              )}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-tight">
              {t("Escuela", "School")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/escuela" className="text-gray-500 hover:text-white transition-colors duration-200">
                  {t("¿Qué es la Escuela de Costos?", "What is the School of Costs?")}
                </Link>
              </li>
              <li>
                <Link href="/escuela/cursos/fundamentos-de-costos" className="text-gray-500 hover:text-white transition-colors duration-200">
                  {t("Todos los cursos", "All courses")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-tight">
              {t("Herramienta", "Tool")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/costea" className="text-gray-500 hover:text-white transition-colors duration-200">
                  Costeapp
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

        <div className="border-t border-gray-800 mt-12 pt-6 text-xs text-center text-gray-600">
          © 2026 Costea® · {t("Todos los derechos reservados", "All rights reserved")} · Colombia
        </div>
      </div>
    </footer>
  );
}
