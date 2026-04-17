"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { TrendingUp, Zap, Code, Target } from "lucide-react";

export default function Benefits() {
  const { t } = useLanguage();

  const icons = [
    <Zap key="zap" size={48} strokeWidth={3} />,
    <Target key="target" size={48} strokeWidth={3} />,
    <Code key="code" size={48} strokeWidth={3} />,
    <TrendingUp key="trend" size={48} strokeWidth={3} />
  ];

  return (
    <section
      id="beneficios"
      className="py-32 bg-white dark:bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <header className="mb-20 grid lg:grid-cols-2 gap-8 items-end">
            <div>
                <div className="bg-brand-secondary text-black px-4 py-1 mb-6 inline-block neo-border font-mono text-xs font-bold uppercase">
                    Core Advantages // 2024
                </div>
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-black dark:text-white leading-none uppercase italic">
                    {t.benefits.sectionTitle}
                </h2>
            </div>
            <p className="text-xl sm:text-2xl text-black/60 dark:text-white/60 font-bold uppercase tracking-tighter">
                {t.benefits.sectionSubtitle}
            </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((item, index) => (
                <div 
                    key={index}
                    className="neo-card flex flex-col items-start gap-8 group"
                >
                    <div className="w-20 h-20 bg-brand-primary neo-border flex items-center justify-center text-black transform group-hover:-rotate-6 transition-transform">
                        {icons[index] || icons[0]}
                    </div>
                    
                    <div className="flex-1">
                        <div className="text-[10px] font-mono font-bold opacity-30 mb-2">0{index + 1} / INFRA</div>
                        <h3 className="text-3xl font-display font-black text-black dark:text-white mb-4 uppercase leading-none">
                            {item.title}
                        </h3>
                        <p className="text-black/70 dark:text-white/70 font-bold text-sm uppercase leading-tight">
                            {item.desc}
                        </p>
                    </div>

                    <div className="w-full h-2 bg-black dark:bg-white/20 mt-4 opacity-10" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
