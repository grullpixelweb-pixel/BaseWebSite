"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Spaceship() {
  const { t } = useLanguage();
  const [position, setPosition] = useState({ x: -20, y: 50 });
  const [isActive, setIsActive] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const frameRef = useRef<number>(null);
  const startTimeRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Flight parameters
  const duration = 12000;
  const amplitude = 15;
  const frequency = 2;

  const startFlight = () => {
    if (!startTimeRef.current) startTimeRef.current = performance.now();
    const startY = 50; // Random baseline height logic could be more complex but keeping it simple for now

    const animate = (time: number) => {
      if (isTalking) return; // Stop animation loop if talking

      const elapsed = time - startTimeRef.current;
      const progress = elapsed / duration;

      if (progress <= 1) {
        const x = -20 + (140 * progress);
        const y = startY + Math.sin(progress * Math.PI * 2 * frequency) * amplitude;

        setPosition({ x, y });
        lastTimeRef.current = time;
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setIsActive(false);
        startTimeRef.current = 0;
        setTimeout(() => setIsActive(true), Math.random() * 5000 + 2000);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isActive && !isTalking) {
      startFlight();
    } else if (!isActive && !isTalking) {
      const initDelay = setTimeout(() => setIsActive(true), 500);
      return () => clearTimeout(initDelay);
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isActive, isTalking]);

  const handleShipClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTalking(true);

    // Resume after 4 seconds
    setTimeout(() => {
      setIsTalking(false);
      // Adjust start time so it continues from where it was
      startTimeRef.current = performance.now() - (lastTimeRef.current - startTimeRef.current);
    }, 4000);
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-[50] overflow-hidden [perspective:1200px]">
      {/* Ship Container */}
      <div 
        className={`absolute transition-transform duration-100 ease-linear pointer-events-auto cursor-pointer group/ship [transform-style:preserve-3d]`}
        style={{ 
          left: `${position.x}%`, 
          top: `${position.y}%`,
          transform: `
            rotateZ(${isTalking ? 0 : Math.cos((position.x + 20) / 140 * Math.PI * 2 * frequency) * 12}deg)
            rotateX(${isTalking ? 0 : Math.sin(position.x / 10) * 15}deg)
            rotateY(${isTalking ? 0 : -15}deg)
            scale(${isTalking ? 1.5 : 0.9 + Math.sin(position.x / 15) * 0.1})
          `,
          transition: isTalking ? 'all 0.5s ease-out' : 'none'
        }}
        onClick={handleShipClick}
      >
        <div className="relative">
          {/* Greeting Bubble */}
          <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-6 transition-all duration-500 whitespace-nowrap ${isTalking ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"
            }`}>
            <div className="bg-white text-black px-6 py-3 rounded-2xl font-display font-bold text-base shadow-[0_10px_30px_rgba(255,255,255,0.2)] relative">
              {t.spaceship}
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 -translate-y-1.5" />
            </div>
          </div>

          <div className={`transition-all duration-500 ${isTalking ? "scale-150" : ""}`}>
            {/* The Detailed White Ship */}
            <div className="relative w-36 h-12 flex items-center justify-center">
              {/* Ship Shadow (Glow) */}
              <div className={`absolute inset-0 blur-2xl transition-all duration-500 ${
                isTalking ? "bg-brand-primary/40" : "bg-white/10"
              }`} />

              {/* Top/Bottom Fins (Aleticas) */}
              <div className="absolute top-0 right-1/4 w-6 h-4 bg-white/40 [clip-path:polygon(100%_100%,0%_100%,100%_0%)]" />
              <div className="absolute bottom-0 right-1/4 w-6 h-4 bg-white/40 [clip-path:polygon(100%_0%,0%_0%,100%_100%)]" />

              {/* Main Fuselage */}
              <div className={`relative w-full h-full bg-gradient-to-r from-white via-white/90 to-[#eee] z-10 [clip-path:polygon(0%_50%,20%_20%,85%_20%,100%_40%,100%_60%,85%_80%,20%_80%)] shadow-2xl transition-all duration-500 ${
                isTalking ? "shadow-[0_0_40px_rgba(255,255,255,0.8)]" : ""
              }`}>
                {/* Bridge Windows */}
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-brand-primary animate-pulse shadow-[0_0_10px_hsl(var(--brand-primary))]" />
                  <div className="w-2 h-2 rounded-sm bg-brand-primary animate-pulse delay-75 shadow-[0_0_8px_hsl(var(--brand-primary))]" />
                  <div className="w-1.5 h-1.5 rounded-sm bg-brand-primary animate-pulse delay-150 shadow-[0_0_6px_hsl(var(--brand-primary))]" />
                </div>

                {/* Technical Decals */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[6px] font-mono font-black text-black/20 opacity-50 uppercase tracking-tighter">
                  GRULL_STRAT_01
                </div>

                {/* Speed Lines inside the hull */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent animate-speed-lines" />
              </div>
            </div>
            
            {/* Sonic Pulse */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/10 rounded-full opacity-20 ${
              isTalking ? "animate-ping scale-150 text-brand-primary" : "animate-pulse"
            }`} />
          </div>
        </div>
      </div>
    </div>
  );
}
