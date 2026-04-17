"use client";

import React, { useEffect, useRef } from "react";
import { MessageSquareText, ArrowRight } from "lucide-react";

const stories = [
  {
    category: "PROJECT GRULL PIXEL IS A CREATIVE STUDIO",
    title: "WE BUILD DIGITAL DREAMS",
    color: "#39FF14", // Neon Green
    accent: "#FF0080", // Pink
    pattern: "circles",
  },
  {
    category: "NEXT GEN WEB EXPERIENCES",
    title: "INNOVATION THROUGH CODE",
    color: "#FF0080", 
    accent: "#39FF14",
    pattern: "stripes",
  },
  {
    category: "HIGH FIDELITY VISUAL INTERFACE",
    title: "CRAFTING PREMIUM UI",
    color: "#00E0FF", // Cyan
    accent: "#FFD600", // Yellow
    pattern: "dots",
  }
];

export default function StoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-black overflow-hidden relative"
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none motherboard-grid" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 reveal-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display text-white mb-4 uppercase leading-none">
            Success <span className="text-brand-primary">Stories</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl font-mono uppercase tracking-tighter">
            Exploring our most impactful digital interventions and creative solutions.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <div 
              key={index}
              className={`group relative aspect-[16/9] md:aspect-[21/9] lg:aspect-auto min-h-[400px] border-4 border-black overflow-hidden reveal-on-scroll shadow-[12px_12px_0px_rgba(255,255,255,0.1)] hover:shadow-[16px_16px_0px_var(--story-accent)] transition-all duration-500`}
              style={{ 
                backgroundColor: story.color,
                '--story-accent': story.accent 
              } as React.CSSProperties}
            >
              {/* Pattern Layer */}
              <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                {story.pattern === 'circles' && (
                  <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at center, transparent 0, transparent 40%, black 41%, black 50%, transparent 51%)`,
                    backgroundSize: '120px 120px'
                  }} />
                )}
                {story.pattern === 'stripes' && (
                  <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, black 0, black 10px, transparent 10.5px, transparent 20px)`,
                  }} />
                )}
                {story.pattern === 'dots' && (
                  <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(black 3px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }} />
                )}
              </div>

              {/* Decorative Pills from Image */}
              <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[150%] bg-white/10 rotate-45 pointer-events-none" />
              <div className="absolute top-[20%] right-[-5%] w-[10%] h-[60%] bg-black/10 rounded-full rotate-[-20deg] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[10%] w-[30%] h-[20px] bg-white/20 rounded-full rotate-[15deg] pointer-events-none" />

              {/* Content Overlay */}
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-center items-start">
                
                {/* Category Label */}
                <div className="bg-black text-white px-4 py-2 mb-8 inline-block shadow-[4px_4px_0px_white]">
                    <span className="font-mono text-xs md:text-sm font-bold tracking-widest leading-none">
                        {story.category}
                    </span>
                </div>

                {/* Main Heading Box */}
                <div className="bg-white p-6 md:p-10 border-4 border-black shadow-[8px_8px_0px_black] transform rotate-[-1deg] group-hover:rotate-0 transition-transform duration-300 max-w-lg mb-8">
                    <h3 className="text-black text-4xl md:text-6xl font-display leading-[0.9] uppercase">
                        {story.title}
                    </h3>
                </div>

                {/* CTA Button */}
                <button className="flex items-center gap-4 bg-black text-white p-4 pr-6 border-2 border-white shadow-[6px_6px_0px_var(--story-accent)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all group/btn">
                    <span className="font-display text-xl font-black italic tracking-tighter">CONTACT</span>
                    <div className="bg-white text-black p-1 rounded-sm">
                        <MessageSquareText size={20} strokeWidth={3} />
                    </div>
                </button>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-[20px] border-black/10 group-hover:scale-150 transition-transform duration-700" />
            </div>
          ))}

          {/* Special "View All" Card */}
          <div className="flex flex-col items-center justify-center bg-zinc-900 border-4 border-zinc-800 p-12 text-center reveal-on-scroll group hover:bg-zinc-800 transition-colors cursor-pointer">
            <div className="w-24 h-24 rounded-full border-4 border-white/20 flex items-center justify-center mb-6 group-hover:border-brand-primary group-hover:scale-110 transition-all duration-300">
                <ArrowRight className="text-white group-hover:text-brand-primary" size={48} />
            </div>
            <h3 className="text-3xl font-display text-white mb-2 italic">SEE ALL WORK</h3>
            <p className="font-mono text-zinc-500 text-sm">ARCHIVE 2024-2026</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
