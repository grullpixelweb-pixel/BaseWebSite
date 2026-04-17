"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Artistic Mythical Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-bg-base/40 to-transparent z-10" />
        <div className="absolute inset-0 animate-slow-float">
          <img 
            src="/hero-art.png" 
            alt="Mythical Crane Landscape" 
            className="w-full h-full object-cover object-bottom scale-110 animate-subtle-zoom"
          />
        </div>
        {/* Atmosphere overlays for sensory depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(var(--brand-primary)/0.1),transparent_70%)] z-[15]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 items-center gap-12">
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <div className="inline-block px-4 py-1.5 mb-8 text-[11px] font-black uppercase tracking-[0.4em] text-white bg-black/40 backdrop-blur-sm border border-white/10 rounded">
            Landing Pages & Branding
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display mb-12 leading-[1.1] tracking-tighter text-white font-black italic drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {t.hero.title2}
          </h1>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#servicios"
              className="px-12 py-5 bg-brand-primary text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full transition-all duration-500 hover:scale-105 hover:bg-brand-accent active:scale-95 text-center shadow-[0_15px_30px_-10px_hsla(var(--brand-primary)/0.5)]"
            >
              {t.hero.btnPlans}
            </a>
            
            <a
              href="#contacto"
              className="px-12 py-5 text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-500 glass hover:bg-white/10 active:scale-95 border border-white/10 text-white text-center"
            >
              {t.hero.btnContact}
            </a>
          </div>
        </div>

        {/* Framing space */}
        <div className="hidden lg:block h-32" />
      </div>
    </div>
  );
}
