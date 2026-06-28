"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "es" | "en";

interface LanguageCtx {
  lang: Lang;
  toggle: () => void;
  t: (es: string, en: string) => string;
}

const LanguageContext = createContext<LanguageCtx>({
  lang: "es",
  toggle: () => {},
  t: (es) => es,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));
  const t = (es: string, en: string) => (lang === "es" ? es : en);
  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
