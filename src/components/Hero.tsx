"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div id="inicio" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-fuchsia-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl max-w-4xl mx-auto">
          <span className="block">{t.hero.title1}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 pb-2">
            {t.hero.title2}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 sm:text-xl">
          {t.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#servicios"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
          >
            {t.hero.btnPlans}
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 border border-white/20 text-base font-medium rounded-lg text-white bg-white/5 hover:bg-white/10 glass md:text-lg transition-all"
          >
            {t.hero.btnContact}
          </a>
        </div>
      </div>
    </div>
  );
}
