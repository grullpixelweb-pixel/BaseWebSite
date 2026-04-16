"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { TrendingUp } from "lucide-react";

const SeedAnimation = () => (
  <svg className="w-10 h-10" viewBox="0 0 100 100">
    <circle cx="50" cy="80" r="4" fill="white" className="animate-pulse" />
    <path 
      d="M50 80 Q50 60 55 40" 
      fill="none" 
      stroke="white" 
      strokeWidth="4" 
      strokeLinecap="round"
      className="animate-[grow-path_2s_ease-out_infinite]"
      style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
    />
    <path 
      d="M55 40 Q45 35 40 42 Q45 45 55 40" 
      fill="white" 
      className="animate-[pop-leaf_2s_ease-out_infinite_0.5s]"
      style={{ opacity: 0 }}
    />
    <path 
      d="M55 40 Q65 35 70 42 Q65 45 55 40" 
      fill="white" 
      className="animate-[pop-leaf_2s_ease-out_infinite_0.7s]"
      style={{ opacity: 0 }}
    />
  </svg>
);

const CatAnimation = () => (
   <svg className="w-10 h-10" viewBox="0 0 100 100">
     <path 
       d="M20 50 Q20 20 50 20 Q80 20 80 50 Q80 80 50 80 Q20 80 20 60" 
       fill="none" 
       stroke="white" 
       strokeWidth="5" 
       strokeLinecap="round"
       className="animate-[cat-curl_3s_ease-in-out_infinite]"
       style={{ strokeDasharray: 200, strokeDashoffset: 200 }}
     />
     <circle cx="45" cy="45" r="2" fill="white" className="opacity-40" />
     <circle cx="55" cy="45" r="2" fill="white" className="opacity-40" />
   </svg>
);

const CodeAnimation = () => (
  <div className="w-10 h-10 flex flex-col gap-1.5 overflow-hidden justify-center px-1">
    <div className="w-full h-1.5 bg-white/60 rounded animate-[code-type_1.5s_infinite]" />
    <div className="w-[80%] h-1.5 bg-white/30 rounded animate-[code-type_2s_infinite_0.2s]" />
    <div className="w-[60%] h-1.5 bg-white/60 rounded animate-[code-type_1.5s_infinite_0.4s]" />
  </div>
);

const ConversionAnimation = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 6l-9.5 9.5-5-5L1 18" className="animate-[grow-path_2s_infinite]" style={{ strokeDasharray: 50, strokeDashoffset: 50 }} />
    <path d="M17 6h6v6" className="animate-[pop-leaf_2s_infinite]" style={{ opacity: 0 }} />
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
      className="py-32 relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{ background: "black" }}
    >
      {/* Background LCD Grid */}
      <div className="absolute inset-0 motherboard-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-gradient from-brand-primary/5 via-transparent to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Orbital Container */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-20">
          
          {/* Header (Left side on Desktop) */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-8">
             <div className="inline-block px-4 py-1 border border-brand-primary/40 text-[10px] uppercase font-black tracking-[0.4em] text-brand-primary bg-brand-primary/5">
                System_Core: Digital_Vision
             </div>
             <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                {t.benefits.sectionTitle}
             </h2>
             <p className="text-xl text-brand-primary drop-shadow-[0_0_10px_hsla(var(--brand-primary)/0.4)] font-bold">
                {t.benefits.sectionSubtitle}
             </p>
          </div>

          {/* Radial Hub (Right side on Desktop) */}
          <div className="relative lg:w-2/3 h-[500px] sm:h-[600px] w-full flex items-center justify-center">
             
             {/* Central Core */}
             <div className="relative z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-black border-2 border-brand-primary flex items-center justify-center shadow-[0_0_50px_hsla(var(--brand-primary)/0.3)] group">
                <div className="absolute inset-0 rounded-full bg-brand-primary opacity-5 animate-pulse" />
                <div className="absolute inset-2 border border-brand-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="text-center p-4">
                  <span className="text-[10px] uppercase font-black tracking-widest text-brand-primary block mb-1">Status</span>
                  <span className="text-white font-display font-black text-lg md:text-2xl">GRULL_CORE</span>
                </div>
             </div>

             {/* Orbit Paths (Decorative) */}
             <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full" />
             <div className="absolute w-[60%] h-[60%] border border-white/5 rounded-full" />

             {/* Orbital Items */}
             {t.benefits.items.map((item, index) => {
               // Calculate positions for circle (approximate with CSS positions for better responsive control)
               const positions = [
                 "top-0 left-0 lg:-top-10 lg:left-20", // 01
                 "top-0 right-0 lg:top-20 lg:-right-10", // 02
                 "bottom-0 left-0 lg:bottom-20 lg:-left-10", // 03
                 "bottom-0 right-0 lg:-bottom-10 lg:right-20", // 04
               ];

               return (
                 <div
                   key={index}
                   className={`absolute ${positions[index]} group w-64 md:w-72 p-6 rounded-3xl glass border border-white/10 transition-all duration-500 hover:border-brand-primary hover:scale-110 hover:shadow-[0_0_30px_hsla(var(--brand-primary)/0.2)] animate-float`}
                   style={{ animationDelay: `${index * 0.5}s` }}
                 >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/20">
                        {getIcon(index)}
                      </div>
                      <span className="text-xs font-mono font-black opacity-30">0{index+1}_LOG</span>
                    </div>
                    <h3 className="text-lg font-display font-black text-white mb-2 uppercase tracking-tighter">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans font-bold leading-relaxed opacity-50 block group-hover:opacity-100 transition-opacity">
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
