import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import Preloader from "../components/Preloader";
import CustomCursor from "../components/CustomCursor";
import TechFloaters from "../components/TechFloaters";
import ProjectileFX from "../components/ProjectileFX";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "GRULL PICTURE WEB - SIMPLE PAGES",
  description: "Más allá de un 'Me Gusta', construye tu territorio. Tu propia web es tu casa digital, donde tú pones las reglas y tu negocio nunca cierra.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen flex flex-col antialiased relative`}>
        {/* Design Layers */}
        <div className="fixed inset-0 pointer-events-none z-[0] motherboard-grid opacity-10"></div>
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay noise-bg"></div>

        <CustomCursor />
        <TechFloaters />
        <Preloader />
        <ProjectileFX />

        <ThemeProvider>
          <LanguageProvider>
            <CartProvider>
              <div className="relative z-10 flex flex-col min-h-screen">
                {children}
              </div>
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
