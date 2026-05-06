"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-32 bg-brand-primary overflow-hidden">


      {/* Floating Elements from Image Style */}
      <div className="absolute top-10 right-[-10%] w-[40%] h-[30%] bg-brand-secondary neo-border rotate-12 animate-slow-float opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[30%] h-[20%] bg-white neo-border -rotate-12 animate-float opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full grid lg:grid-cols-1 relative z-10">
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <div className="bg-black text-white px-4 md:px-6 py-2 mb-6 md:mb-8 inline-block shadow-[4px_4px_0px_white] transform -rotate-1 max-w-full">
            <span className="font-mono text-[10px] sm:text-xs md:text-lg font-bold tracking-tighter sm:tracking-widest uppercase">
              3 SIDED CUBE IS AN APP DEVELOPMENT AND DIGITAL PRODUCT COMPANY
            </span>
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-16 neo-border shadow-[8px_8px_0px_black] md:shadow-[16px_16px_0px_black] transform rotate-1 mb-10 md:mb-12 max-w-full">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.85] md:leading-[0.8] text-black uppercase tracking-tighter break-words">
              {t.hero.title2}<span className="text-brand-secondary animate-neo-blink ml-2 inline-block">_</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a
              href="#servicios"
              className="group flex items-center justify-between gap-6 sm:gap-12 bg-black text-white px-6 sm:px-10 py-4 sm:py-6 neo-border neo-shadow-brand active:translate-y-1 active:translate-x-1 active:shadow-none transition-all"
            >
              <span className="font-display text-xl sm:text-2xl font-black uppercase tracking-tighter italic">
                {t.hero.btnPlans}
              </span>
              <div className="bg-white text-black p-1.5 sm:p-2 group-hover:rotate-45 transition-transform">
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
              </div>
            </a>

            <a
              href="#contacto"
              className="flex items-center justify-center px-6 sm:px-10 py-4 sm:py-6 bg-white text-black font-black uppercase tracking-tighter text-lg sm:text-xl neo-border shadow-[6px_6px_0px_black] md:shadow-[8px_8px_0px_black] hover:bg-brand-secondary transition-colors"
            >
              {t.hero.btnContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
