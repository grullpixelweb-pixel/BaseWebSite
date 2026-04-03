"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Activity, ShieldCheck, Zap, Globe2, TrendingUp, LineChart, Award, ShieldAlert } from "lucide-react";

export default function Benefits() {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    const icons = [Activity, ShieldCheck, Zap, Globe2, TrendingUp, LineChart, Award, ShieldAlert];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-8 h-8 opacity-90 text-white" />;
  };

  return (
    <section
      id="beneficios"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Background glow */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-fuchsia-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div
            className="relative z-30 -mt-20 md:-mt-32 mx-auto w-full max-w-5xl mb-12 rounded-3xl overflow-hidden group"
            style={{
              border: "1px solid var(--border-soft)",
              boxShadow: "0 0 50px rgba(139,92,246,0.15)",
            }}
          >
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to top, var(--bg-base), transparent)" }}
            />
            <img
              src="/web-sales.png"
              alt="Digital Growth and Sales"
              className="w-full h-64 md:h-80 object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <h2
            className="text-3xl md:text-5xl font-extrabold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            {t.benefits.sectionTitle}
          </h2>
          <p className="text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 font-semibold inline-block">
            {t.benefits.sectionSubtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {t.benefits.items.map((item, index) => {
            const isWide = index === 0 || index === 5;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative group p-6 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-500
                  ${isWide ? "lg:col-span-2" : "lg:col-span-1"}
                `}
                style={{
                  background: "var(--bg-card, var(--bg-surface))",
                  border: "1px solid var(--border-card, var(--border-faint))",
                  boxShadow: "var(--shadow-card, 0 4px 24px rgba(0,0,0,0.3))",
                  backdropFilter: "blur(16px)",
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg
                    ${isEven
                      ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                      : "bg-gradient-to-br from-violet-500 to-fuchsia-500"
                    }`}
                >
                  {getIcon(index)}
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3
                    className="text-xl font-bold mb-2 leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary quote */}
        <div
          className="mt-16 text-center max-w-4xl mx-auto p-8 rounded-3xl relative overflow-hidden"
          style={{
            background: "var(--bg-card, var(--bg-surface))",
            border: "1px solid var(--border-soft)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-violet-600/10 pointer-events-none" />
          <p
            className="text-xl md:text-2xl font-light leading-relaxed italic relative z-10"
            style={{ color: "var(--text-secondary)" }}
          >
            &ldquo;{t.benefits.summary}&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
