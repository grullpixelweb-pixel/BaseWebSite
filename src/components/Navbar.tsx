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
        <a href="#" className="flex items-center gap-2 group relative z-50">
          <span className="text-white font-display font-black tracking-[0.3em] uppercase text-sm md:text-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] animate-shimmer-text">
            Grull Picture Web
          </span>
        </a>

        {/* Action icons + Menu Toggle */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 md:gap-4 relative z-50">
            <button 
              className="p-2 text-white hover:text-brand-primary transition-all duration-300 relative group animate-cart-interact animate-cart-vibe"
              onClick={() => document.getElementById("cart-sidebar")?.classList.toggle("translate-x-full")}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-brand-primary rounded-full animate-pulse shadow-[0_0_10px_hsla(var(--brand-primary)/0.8)]"></span>
            </button>
          </div>

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
      <div className={`fixed inset-0 z-[55] bg-black transition-all duration-700 cubic-bezier(0.85, 0, 0.15, 1) overflow-y-auto ${isOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="flex flex-col lg:flex-row min-h-full">
          {/* Left Side: Navigation */}
          <div className="w-full lg:w-[60%] h-auto lg:h-screen bg-black p-8 lg:p-32 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-brand-primary/10">
          <div className="absolute inset-0 motherboard-grid opacity-10"></div>

            <div className="relative z-10 pt-24 lg:pt-0 lg:h-full lg:flex lg:flex-col lg:justify-center space-y-6 lg:space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-baseline gap-4 lg:gap-8 text-3xl md:text-5xl lg:text-7xl font-display font-black hover:translate-x-4 transition-all duration-700 text-white/20 hover:text-white"
                >
                  <span className="text-[10px] lg:text-xs font-sans font-black tracking-[0.4em] text-brand-primary/40 group-hover:text-brand-primary transition-colors">{link.num}/</span>
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-brand-primary group-hover:w-full transition-all duration-700 delay-100" />
                  </span>
                </a>
              ))}
            </div>

          <div className="relative z-10 flex items-center gap-6 py-8 border-t border-white/5 lg:border-t-0">
            {(["pt", "es", "en"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => handleLangChange(l)}
                className={`text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover-jump ${lang === l ? "text-brand-primary" : "text-white/20 hover:text-white"
                  }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

          {/* Right Side: Contact / CTA */}
          <div className="w-full lg:w-[40%] h-auto lg:h-screen bg-[#050505] p-12 lg:p-24 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsla(var(--brand-primary)/0.05),transparent_70%)]"></div>
            
            {/* Decorative core element for menu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] animate-pulse"></div>
  
            <div className="relative z-10 w-full max-w-sm">
              <div className="mb-12">
                <div className="inline-block px-4 py-1.5 border border-brand-primary/20 text-[10px] uppercase font-black tracking-[0.4em] text-brand-primary mb-6">
                  Status: {t.menu.status}
                </div>
                <h4 className="text-white font-display font-bold text-2xl mb-2 italic animate-reveal-up">{t.menu.title}</h4>
                <p className="text-white/40 text-xs font-medium uppercase tracking-widest">{t.menu.subtitle}</p>
              </div>
  
              <div className="flex flex-col items-center gap-12">
                <a
                  href="https://wa.me/5511981718899"
                  className="group relative flex items-center justify-between gap-8 p-1.5 border border-white/10 rounded-full pl-10 pr-1.5 hover:border-brand-primary/50 hover:bg-white/5 transition-all duration-500 w-full"
                >
                  <span className="text-white font-black uppercase tracking-[0.2em] text-xs">Fale com a Grull</span>
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center group-hover:rotate-12 group-hover:scale-105 transition-all duration-500 shadow-[0_0_30px_hsla(var(--brand-primary)/0.3)]">
                    <svg className="w-7 h-7 text-black stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                </a>
  
                <div className="flex gap-12 group pb-12 lg:pb-0">
                  <a href="https://www.instagram.com/grullpixel/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-brand-primary hover:scale-125 transition-all duration-500 hover-jump">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
  
            <div className="absolute bottom-12 right-12 opacity-20 hidden lg:block">
              <div className="text-[9px] font-mono text-brand-primary text-right tracking-tighter">
                GRULL_PICTURE_WEB_v2.0<br />
                <span className="opacity-50">NODE: ALPHA_STATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
