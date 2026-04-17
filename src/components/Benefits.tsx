"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { TrendingUp } from "lucide-react";

const SeedAnimation = () => (
  <svg className="w-10 h-10 animate-seed" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="80" r="4" fill="white" />
    <path
      d="M50 80 Q50 60 55 40"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M55 40 Q45 35 40 42 Q45 45 55 40"
      fill="white"
    />
    <path
      d="M55 40 Q65 35 70 42 Q65 45 55 40"
      fill="white"
    />
  </svg>
);

const CatAnimation = () => (
  <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
    <path
      d="M20 50 Q20 20 50 20 Q80 20 80 50 Q80 80 50 80 Q20 80 20 60"
      stroke="white"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <circle cx="45" cy="45" r="2.5" fill="white" className="animate-blink" />
    <circle cx="55" cy="45" r="2.5" fill="white" className="animate-blink" />
  </svg>
);

const CodeAnimation = () => (
  <div className="w-10 h-10 flex flex-col gap-1.5 overflow-hidden justify-center px-1">
    <div className="w-full h-1.5 bg-white/60 rounded animate-terminal-1" />
    <div className="w-[80%] h-1.5 bg-white/30 rounded animate-terminal-2" />
    <div className="w-[60%] h-1.5 bg-white/60 rounded animate-terminal-3" />
  </div>
);

const ConversionAnimation = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 6l-9.5 9.5-5-5L1 18" className="animate-graph" />
    <path d="M17 6h6v6" />
  </svg>
);

export default function Benefits() {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    if (index === 0) return <SeedAnimation />;
    if (index === 1) return <CatAnimation />;
    if (index === 2) return <CodeAnimation />;
    if (index === 3) return <ConversionAnimation />;
    return <TrendingUp className="w-7 h-7 text-white" />;
  };

  return (
    <section
      id="beneficios"
      className="py-16 md:py-24 relative overflow-hidden flex items-center justify-center"
      style={{ background: "black" }}
    >
      {/* Background LCD Grid */}
      <div className="absolute inset-0 motherboard-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-gradient from-brand-primary/5 via-transparent to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Orbital Container */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-20">

          {/* Header (Left side on Desktop) */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-8">
            <div className="inline-block px-4 py-1 border border-brand-primary/40 text-[10px] uppercase font-black tracking-[0.4em] text-brand-primary bg-brand-primary/5">
              Alquimia_Digital: Arte & Mitología
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight italic">
              {t.benefits.sectionTitle}
            </h2>
            <p className="text-xl text-brand-accent drop-shadow-[0_0_10px_hsla(var(--brand-accent)/0.2)] font-bold italic">
              {t.benefits.sectionSubtitle}
            </p>
          </div>

          {/* Radial Hub (Right side on Desktop) */}
          <div className="relative lg:w-2/3 min-h-[500px] lg:h-[600px] w-full grid grid-cols-2 lg:block items-center justify-center gap-4 md:gap-8 mt-10 lg:mt-0">

            {/* Central Core (Hidden or repositioned on mobile for better flow) */}
            <div className="relative z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-black border-2 border-brand-primary flex items-center justify-center shadow-[0_0_30px_hsla(var(--brand-primary)/0.2)] group lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 col-span-2 mx-auto mb-8 lg:mb-0">
              <div className="absolute inset-2 border border-brand-primary/10 rounded-full" />
              <div className="text-center p-4">
                <span className="text-[10px] uppercase font-black tracking-widest text-brand-primary block mb-1">Status</span>
                <span className="text-white font-display font-black text-lg md:text-2xl">GRULL_CORE</span>
              </div>
            </div>

            {/* Orbit Paths (Decorative - Hidden on mobile) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full hidden lg:block" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/5 rounded-full hidden lg:block" />

            {/* Orbital Items */}
            {t.benefits.items.map((item, index) => {
              // Orbital positions for desktop only
              const desktopPositions = [
                "lg:-top-10 lg:left-20", // 01
                "lg:top-20 lg:-right-10", // 02
                "lg:bottom-20 lg:-left-10", // 03
                "lg:-bottom-10 lg:right-20", // 04
              ];

              return (
                <div
                  key={index}
                  className={`relative lg:absolute ${desktopPositions[index]} group w-full lg:w-72 p-4 md:p-6 rounded-2xl md:rounded-3xl glass border border-white/10 transition-all duration-500 hover:border-brand-primary hover:scale-105 lg:hover:scale-110 flex flex-col items-center lg:items-start text-center lg:text-left`}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/20">
                      {getIcon(index)}
                    </div>
                    <span className="text-[8px] md:text-xs font-mono font-black opacity-30">0{index + 1}_LOG</span>
                  </div>
                  <h3 className="text-sm md:text-lg font-display font-black text-white mb-1 md:mb-2 uppercase tracking-tighter">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs font-sans font-bold leading-relaxed opacity-50 block group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
