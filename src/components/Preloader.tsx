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
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700 ease-in-out bg-brand-primary ${
      fadeOut ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"
    }`}>
      
      {/* Pattern Layer */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(black 2px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative flex flex-col items-center max-w-full px-4 text-center">
        <div className="bg-black p-6 sm:p-8 md:p-12 neo-border shadow-[12px_12px_0px_white] transform -rotate-2 w-full">
            <h1 className="text-3xl sm:text-6xl md:text-[8rem] font-display font-black tracking-tighter uppercase text-white leading-none break-words">
                GRULL<span className="text-brand-secondary">PIXEL</span>
            </h1>
        </div>
        
        <div className="mt-12 flex gap-4">
            <div className="w-4 h-4 bg-black animate-bounce delay-0" />
            <div className="w-4 h-4 bg-white animate-bounce delay-100" />
            <div className="w-4 h-4 bg-brand-secondary animate-bounce delay-200" />
        </div>

        <div className="mt-8 bg-white px-4 py-1 neo-border font-mono text-xs font-bold uppercase tracking-widest text-black">
            SYSTEM_INITIALIZATION_2026
        </div>
      </div>
    </div>
  );
}
