import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Escuela De Costos | by Costea®",
  description: "Aprende gestión de costos y accede a la herramienta Costea para el análisis financiero de tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-geist)]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
