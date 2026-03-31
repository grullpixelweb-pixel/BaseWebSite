"use client";

import React, { useState } from "react";
import { Menu, X, ShoppingCart, Globe } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../locales/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const { t, lang, setLang } = useLanguage();

  const handleLangChange = (l: Language) => {
    setLang(l);
  };

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 lg:gap-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center font-bold text-sm lg:text-xl shadow-lg shadow-blue-500/20">
              GP
            </div>
            <span className="font-bold text-base lg:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
              Grull Picture Web
            </span>
          </div>
          <div className="hidden md:block">
            <div className="md:ml-4 lg:ml-10 flex items-center md:space-x-3 lg:space-x-8">
              <a href="#inicio" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">{t.navbar.home}</a>
              <a href="#beneficios" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">{t.navbar.benefits}</a>
              <a href="#servicios" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">{t.navbar.services}</a>
              <a href="#contacto" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">{t.navbar.contact}</a>

              <div className="flex items-center gap-1 lg:gap-2 border-l border-white/20 md:pl-3 lg:pl-6">
                <Globe className="w-4 h-4 text-gray-400 hidden lg:block" />
                <button onClick={() => handleLangChange("pt")} className={`text-xs font-bold px-1 py-0.5 rounded ${lang === 'pt' ? 'bg-blue-600/30 text-blue-400' : 'text-gray-500 hover:text-gray-300'}`}>PT</button>
                <button onClick={() => handleLangChange("es")} className={`text-xs font-bold px-1 py-0.5 rounded ${lang === 'es' ? 'bg-blue-600/30 text-blue-400' : 'text-gray-500 hover:text-gray-300'}`}>ES</button>
                <button onClick={() => handleLangChange("en")} className={`text-xs font-bold px-1 py-0.5 rounded ${lang === 'en' ? 'bg-blue-600/30 text-blue-400' : 'text-gray-500 hover:text-gray-300'}`}>EN</button>
              </div>

              <button
                className="relative p-2 text-gray-300 hover:text-white transition-colors md:ml-1 lg:ml-4"
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
          <div className="-mr-2 flex items-center md:hidden gap-4">
            <div className="flex items-center gap-1 mr-2">
              <button onClick={() => handleLangChange("pt")} className={`text-xs font-bold px-1.5 py-1 rounded ${lang === 'pt' ? 'bg-white/10 text-white' : 'text-gray-500'}`}>PT</button>
              <button onClick={() => handleLangChange("es")} className={`text-xs font-bold px-1.5 py-1 rounded ${lang === 'es' ? 'bg-white/10 text-white' : 'text-gray-500'}`}>ES</button>
              <button onClick={() => handleLangChange("en")} className={`text-xs font-bold px-1.5 py-1 rounded ${lang === 'en' ? 'bg-white/10 text-white' : 'text-gray-500'}`}>EN</button>
            </div>
            <button
              className="relative p-2 text-gray-300 hover:text-white transition-colors"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">{t.navbar.home}</a>
            <a href="#beneficios" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">{t.navbar.benefits}</a>
            <a href="#servicios" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">{t.navbar.services}</a>
            <a href="#contacto" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">{t.navbar.contact}</a>
          </div>
        </div>
      )}
    </nav>
  );
}
