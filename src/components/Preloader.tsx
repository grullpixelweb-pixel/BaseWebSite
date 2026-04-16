"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShow(false), 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700 ease-in-out ${
      fadeOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
    }`}
    style={{ backgroundColor: "hsl(var(--bg-base))" }}>
      
      {/* Circuit board background in preloader */}
      <div className="absolute inset-0 opacity-[0.05] circuit-board-pattern"></div>
      
      <div className="relative flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase text-white animate-pulse">
          <span className="relative">
            Grull
            <span className="absolute -inset-1 blur-2xl opacity-20" style={{ backgroundColor: "hsl(var(--brand-primary))" }}></span>
          </span>
        </h1>
        <div className="mt-8 w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 animate-loading-bar" 
               style={{ background: "linear-gradient(90deg, transparent, hsl(var(--brand-primary)), transparent)" }}></div>
        </div>
      </div>
    </div>
  );
}
