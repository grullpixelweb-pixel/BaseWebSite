"use client";

import React, { useState, useEffect } from "react";
import { X, ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../locales/translations";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, clearCart } = useCart();
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleLangChange = (l: Language) => {
    if (l !== lang) {
      setLang(l);
      clearCart();
    }
  };

  const navLinks = [
    { href: "#inicio", label: t.navbar.home, num: "01/" },
    { href: "#beneficios", label: t.navbar.benefits, num: "02/" },
    { href: "#servicios", label: t.navbar.services, num: "03/" },
    { href: "#contacto", label: t.navbar.contact, num: "04/" },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[60] transition-all duration-500 py-6 px-12 flex items-center justify-between ${scrolled ? "bg-bg-base/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}>
        {/* Logo */}
        <a href="#inicio" className="text-xl font-display font-black tracking-tighter uppercase whitespace-nowrap text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          Grull Picture Web
        </a>

        {/* Action icons + Menu Toggle */}
        <div className="flex items-center gap-6">
          <button
            className="relative p-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] opacity-80 hover:opacity-100 transition-opacity"
            onClick={() => document.getElementById("cart-sidebar")?.classList.toggle("translate-x-full")}
          >
            <ShoppingCart className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-[10px] font-bold text-black bg-brand-primary rounded-full shadow-lg">
                {cart.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 rounded-full glass border flex flex-col items-center justify-center gap-1.5 group transition-all duration-500 hover:scale-110 z-[100] relative ${isOpen
              ? "border-brand-secondary shadow-[0_0_20px_hsla(var(--brand-secondary)/0.5)]"
              : "border-white/20 hover:border-white/60 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
              }`}
          >
            <div className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "bg-brand-secondary rotate-45 translate-y-[7px]" : "bg-white"}`} />
            <div className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "bg-transparent opacity-0" : "bg-white"}`} />
            <div className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "bg-brand-secondary -rotate-45 -translate-y-[7px]" : "bg-white"}`} />
          </button>
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      <div className={`fixed inset-0 z-[55] flex flex-col md:flex-row transition-all duration-700 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
        {/* Left Side: Navigation */}
        <div className="w-full md:w-1/2 h-full bg-black p-12 md:p-24 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-brand-primary/10">
          <div className="absolute inset-0 motherboard-grid opacity-10"></div>

          <div className="relative z-10 pt-16 md:pt-24 space-y-2 md:space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                }}
                className="group flex items-baseline gap-4 md:gap-8 text-3xl md:text-8xl font-display font-black hover:translate-x-2 md:hover:translate-x-4 transition-all duration-500 text-white/40 hover:text-white"
              >
                <span className="text-[10px] md:text-base font-sans font-black tracking-widest text-brand-primary opacity-40 group-hover:opacity-100">{link.num}</span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="relative z-10 flex items-center gap-6 py-6 md:py-0 border-t border-white/5 md:border-t-0">
            {(["pt", "es", "en"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => handleLangChange(l)}
                className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${lang === l ? "text-brand-primary drop-shadow-[0_0_8px_hsla(var(--brand-primary)/0.5)]" : "text-white/30 hover:text-white"
                  }`}
              >
                {l === "pt" ? "PT" : l === "es" ? "ES" : "EN"}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Contact / CTA */}
        <div className="w-full md:w-1/2 h-full bg-black p-8 md:p-24 flex flex-col justify-center items-center text-center relative overflow-hidden border-t md:border-t-0 border-white/5">
          <div className="absolute inset-0 circuit-pattern opacity-[0.03]"></div>

          <div className="relative z-10 w-full max-w-md">
            <div className="mb-2 md:mb-4 inline-block px-3 py-1 border border-brand-primary/20 text-[8px] md:text-[10px] uppercase font-black tracking-[0.4em] text-brand-primary">
              Status: Available
            </div>

            <div className="flex flex-col items-center gap-6 md:gap-12 mt-6 md:mt-12">
              <a
                href="https://wa.me/5511981718899"
                className="group relative flex items-center justify-between gap-4 md:gap-8 p-1 border border-brand-primary/30 rounded-full pl-6 md:pl-10 pr-1 hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-500"
              >
                <span className="text-white font-black uppercase tracking-widest text-[10px] md:text-sm">Fale com a Grull</span>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-black stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              </a>

              <div className="flex gap-8 opacity-30 hover:opacity-100 transition-opacity">
                <a href="https://www.instagram.com/grullpixel/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors">
                  <svg className="w-6 h-6 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative LCD corner */}
          <div className="absolute bottom-10 right-10 opacity-10">
            <div className="text-[10px] font-mono text-brand-primary text-right">
              GRULL_PICTURE_WEB_v2.0<br />
              COORD: 23.5505° S, 46.6333° W
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
