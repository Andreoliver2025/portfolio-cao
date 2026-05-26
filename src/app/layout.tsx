import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Anti-flash de tema: lê a preferência persistida (cao-theme) ANTES da
 * hidratação e aplica a classe `.light` em <html> se necessário.
 * Ver DESIGN-SYSTEM.md §7.3 e store em src/stores/theme-store.ts.
 */
const themeInitScript = `(function(){try{var s=localStorage.getItem("cao-theme");if(s){var p=JSON.parse(s);if(p&&p.state&&p.state.theme==="light"){document.documentElement.classList.add("light")}}}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Carlos André Oliveira — Estrategista de IA",
  description:
    "Estrategista híbrido de IA: aconselha e constrói soluções de IA para empresas e startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
