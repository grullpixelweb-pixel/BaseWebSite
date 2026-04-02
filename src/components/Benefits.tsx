"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Activity, ShieldCheck, Zap, Globe2, TrendingUp, LineChart, Award, ShieldAlert, Code } from "lucide-react";

export default function Benefits() {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    const icons = [Activity, ShieldCheck, Zap, Globe2, TrendingUp, LineChart, Award, ShieldAlert];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-8 h-8 opacity-80" />;
  };

  return (
    <section id="beneficios" className="py-24 relative overflow-hidden bg-gray-950">

      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-fuchsia-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="relative z-30 -mt-20 md:-mt-32 mx-auto w-full max-w-5xl mb-12 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)] border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10 pointer-events-none"></div>
            <img 
              src="/web-sales.png" 
              alt="Digital Growth and Sales" 
              className="w-full h-64 md:h-80 object-cover object-center transform transition-transform duration-1000 group-hover:scale-105 opacity-100"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            {t.benefits.sectionTitle}
          </h2>
          <p className="text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 font-semibold inline-block">
            {t.benefits.sectionSubtitle}
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {t.benefits.items.map((item, index) => {
            // Making the first and sixth items span 2 columns on large screens for an innovative layout
            const isWide = index === 0 || index === 5;

            return (
              <div
                key={index}
                className={`relative group p-6 rounded-3xl glass border border-white/5 transition-all duration-500 hover:border-violet-500/50 hover:bg-white/10 hover:-translate-y-1 overflow-hidden
                  ${isWide ? 'lg:col-span-2' : 'lg:col-span-1'}
                  flex flex-col justify-between
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg 
                  ${index % 2 === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : 'bg-gradient-to-br from-violet-500 to-fuchsia-500'}`}>
                  {getIcon(index)}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto p-8 rounded-3xl glass border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-violet-600/10 mix-blend-overlay"></div>
          <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed italic relative z-10">
            "{t.benefits.summary}"
          </p>
        </div>

      </div>
    </section>
  );
}
