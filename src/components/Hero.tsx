"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Spaceship from "./Spaceship";

export default function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id="inicio" className="relative pt-32 pb-20 sm:pt-44 sm:pb-32 overflow-hidden min-h-[90vh] flex items-start">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Spaceship />
        
        {/* Discrete orbit border */}
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] opacity-10 border border-brand-primary/20 rounded-full animate-orbit" />
             
        {/* Background Grid Accent */}
        <div className="absolute top-0 right-0 w-full h-full circuit-pattern opacity-[0.03]" />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="inline-block px-5 py-2 mb-10 text-xs font-black tracking-[0.3em] uppercase rounded-full border border-gradient glass reveal-up"
             style={{ color: "hsl(var(--brand-primary))", animationDelay: "0.2s" }}>
          {t.hero.title1 || "Estúdio Digital"}
        </div>
        
        <h1 className="text-6xl tracking-tighter sm:text-8xl md:text-9xl max-w-6xl mx-auto font-display mb-12 leading-tight">
          <span className="text-gradient block reveal-up" style={{ animationDelay: "0.6s" }}>
            {t.hero.title2}
          </span>
        </h1>

        {/* Workflow Process Integration */}
        <div className="mt-16 mb-20 flex justify-center items-center gap-4 sm:gap-12 reveal-up" style={{ animationDelay: "0.8s" }}>
           <div className="flex flex-col items-center">
             <span className="text-3xl sm:text-4xl font-display font-black text-white/90">01</span>
             <span className="text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Ideia</span>
           </div>
           <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
           <div className="flex flex-col items-center">
             <span className="text-3xl sm:text-4xl font-display font-black text-white/90">02</span>
             <span className="text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Design</span>
           </div>
           <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
           <div className="flex flex-col items-center">
             <span className="text-3xl sm:text-4xl font-display font-black text-white/90">03</span>
             <span className="text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Code</span>
           </div>
        </div>
        
        {t.hero.subtitle && (
          <p className="max-w-2xl mx-auto text-xl font-bold tracking-tight opacity-60 mb-16 reveal-up"
             style={{ color: "hsl(var(--text-secondary))", animationDelay: "1s" }}>
            {t.hero.subtitle}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row justify-center gap-8 reveal-up" style={{ animationDelay: "1.2s" }}>
          <a
            href="#servicios"
            className="group relative px-12 py-6 bg-[hsl(var(--brand-primary))] text-black font-black uppercase tracking-widest text-sm rounded-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 active:scale-95 shadow-[0_20px_40px_-10px_hsla(var(--brand-primary)/0.4)]"
          >
            <span className="relative z-10">{t.hero.btnPlans}</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl" />
          </a>
          
          <a
            href="#contacto"
            className="px-12 py-6 text-sm font-black uppercase tracking-widest rounded-2xl transition-all duration-500 glass hover:bg-white/10 active:scale-95 border border-white/10"
            style={{ color: "hsl(var(--text-primary))" }}
          >
            {t.hero.btnContact}
          </a>
        </div>
      </div>
      
      {/* Scroll indicator animation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-[1px] h-20 bg-gradient-to-b from-brand-primary to-transparent" />
      </div>
    </div>
  );
}
