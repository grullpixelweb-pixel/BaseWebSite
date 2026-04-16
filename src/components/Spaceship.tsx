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
      const initDelay = setTimeout(() => setIsActive(true), 2000);
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
    <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Ship Container */}
      <div 
        className={`absolute transition-transform duration-100 ease-linear pointer-events-auto cursor-pointer group/ship`}
        style={{ 
          left: `${position.x}%`, 
          top: `${position.y}%`,
          transform: `rotate(${isTalking ? 0 : Math.cos((position.x + 20) / 140 * Math.PI * 2 * frequency) * 15}deg)`,
          transition: isTalking ? 'all 0.5s ease-out' : 'none'
        }}
        onClick={handleShipClick}
      >
        <div className="relative">
          {/* Greeting Bubble */}
          <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-6 transition-all duration-500 whitespace-nowrap ${
            isTalking ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"
          }`}>
            <div className="bg-white text-black px-6 py-3 rounded-2xl font-display font-bold text-base shadow-[0_10px_30px_rgba(255,255,255,0.2)] relative">
              {t.spaceship}
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 -translate-y-1.5" />
            </div>
          </div>

          <div className={`transition-all duration-500 ${isTalking ? "scale-125" : ""}`}>
            {/* Subtle trail */}
            {!isTalking && (
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-[300px] h-[2px] bg-gradient-to-l from-brand-primary to-transparent opacity-30" />
            )}
            
            {/* The Ship */}
            <div className={`relative w-24 h-6 bg-white rounded-full flex items-center px-3 overflow-hidden transition-shadow duration-500 ${
              isTalking ? "shadow-[0_0_50px_hsl(var(--brand-primary))]" : "shadow-[0_0_30px_hsla(var(--brand-primary)/0.5)]"
            }`}>
              <div className="w-full h-[1px] bg-brand-primary/20 animate-pulse" />
              <div className="absolute right-0 w-2 h-full bg-brand-primary/40 blur-sm" />
            </div>
            
            {/* Sonic Pulse */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-brand-primary/10 rounded-full opacity-20 ${
              isTalking ? "animate-ping scale-150" : "animate-pulse"
            }`} />
          </div>
        </div>
      </div>
    </div>
  );
}
