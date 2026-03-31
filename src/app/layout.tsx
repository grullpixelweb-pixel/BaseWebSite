import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { LanguageProvider } from "../context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grull Picture Web - Crea tu Propio Sitio Web",
  description: "Más allá de un 'Me Gusta', construye tu territorio. Tu propia web es tu casa digital, donde tú pones las reglas y tu negocio nunca cierra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen flex flex-col antialiased`}>
        <LanguageProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
