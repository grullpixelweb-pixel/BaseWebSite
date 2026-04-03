"use client";

import React, { useState } from "react";
import { Menu, X, ShoppingCart, Globe } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../locales/translations";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, clearCart } = useCart();
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const handleLangChange = (l: Language) => {
    if (l !== lang) {
      setLang(l);
      clearCart();
    }
  };

  return (
    <nav
      className="fixed w-full z-50 glass border-b"
      style={{ borderColor: "var(--border-soft)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 lg:gap-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center font-bold text-sm lg:text-xl text-white shadow-lg shadow-blue-500/20">
              GP
            </div>
            <span
              className="font-bold text-sm sm:text-base lg:text-xl tracking-tight whitespace-nowrap"
              style={{ color: "var(--text-primary)" }}
            >
              Grull Picture Web
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="md:ml-4 lg:ml-10 flex items-center md:space-x-3 lg:space-x-8">
              <a href="#inicio"     style={{ color: "var(--text-muted)" }} className="text-sm lg:text-base hover:opacity-100 transition-opacity">{t.navbar.home}</a>
              <a href="#beneficios" style={{ color: "var(--text-muted)" }} className="text-sm lg:text-base hover:opacity-100 transition-opacity">{t.navbar.benefits}</a>
              <a href="#servicios"  style={{ color: "var(--text-muted)" }} className="text-sm lg:text-base hover:opacity-100 transition-opacity">{t.navbar.services}</a>
              <a href="#contacto"   style={{ color: "var(--text-muted)" }} className="text-sm lg:text-base hover:opacity-100 transition-opacity">{t.navbar.contact}</a>

              {/* Language */}
              <div className="flex items-center gap-1 lg:gap-2 border-l md:pl-3 lg:pl-6" style={{ borderColor: "var(--border-soft)" }}>
                <Globe className="w-4 h-4 hidden lg:block" style={{ color: "var(--text-muted)" }} />
                {(["pt","es","en"] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => handleLangChange(l)}
                    className={`text-xs font-bold px-1 py-0.5 rounded transition-colors ${
                      lang === l
                        ? "bg-blue-500/20 text-blue-400"
                        : "hover:opacity-80"
                    }`}
                    style={{ color: lang === l ? undefined : "var(--text-muted)" }}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Theme toggle switch */}
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              {/* Cart */}
              <button
                className="relative p-2 transition-colors md:ml-1 lg:ml-2"
                style={{ color: "var(--text-muted)" }}
                onClick={() => document.getElementById("cart-sidebar")?.classList.toggle("translate-x-full")}
              >
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile: cart + theme + menu */}
          <div className="-mr-2 flex items-center md:hidden gap-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              className="relative p-2 transition-colors"
              style={{ color: "var(--text-muted)" }}
              onClick={() => document.getElementById("cart-sidebar")?.classList.toggle("translate-x-full")}
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none"
              style={{ color: "var(--text-muted)" }}
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t" style={{ borderColor: "var(--border-faint)" }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { href: "#inicio",     label: t.navbar.home },
              { href: "#beneficios", label: t.navbar.benefits },
              { href: "#servicios",  label: t.navbar.services },
              { href: "#contacto",   label: t.navbar.contact },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {label}
              </a>
            ))}

            <div className="px-3 py-4 mt-2 border-t" style={{ borderColor: "var(--border-soft)" }}>
              <p className="text-sm mb-3 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                <Globe className="w-4 h-4" /> Idioma / Language
              </p>
              <div className="flex items-center gap-2">
                {(["pt","es","en"] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => handleLangChange(l)}
                    className={`text-sm font-bold px-3 py-1.5 rounded-md flex-1 border transition-colors ${
                      lang === l
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        : "border-opacity-20"
                    }`}
                    style={lang !== l ? { borderColor: "var(--border-soft)", color: "var(--text-muted)", background: "var(--bg-surface)" } : {}}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ── Theme Toggle Switch ─────────────────────────────────────────── */
function ThemeToggle({ theme, toggleTheme }: { theme: "dark" | "light"; toggleTheme: () => void }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="relative inline-flex items-center w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1 flex-shrink-0"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #1e1b4b, #312e81)"
          : "linear-gradient(135deg, #bfdbfe, #ddd6fe)",
        boxShadow: isDark
          ? "0 0 12px rgba(99,102,241,0.4)"
          : "0 0 12px rgba(167,139,250,0.3)",
      }}
    >
      {/* Track icons */}
      <span className="absolute left-1.5 text-xs select-none" style={{ opacity: isDark ? 0.9 : 0.4 }}>
        🌙
      </span>
      <span className="absolute right-1.5 text-xs select-none" style={{ opacity: isDark ? 0.4 : 0.9 }}>
        ☀️
      </span>
      {/* Knob */}
      <span
        className="absolute w-5 h-5 rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-[9px] font-black"
        style={{
          left: isDark ? "4px" : "calc(100% - 24px)",
          background: isDark ? "#f9fafb" : "#7c3aed",
          color: isDark ? "#1e1b4b" : "#fff",
        }}
      >
        {isDark ? "I" : "O"}
      </span>
    </button>
  );
}
