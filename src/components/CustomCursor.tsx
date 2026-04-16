"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (target) {
        const isClickable = window.getComputedStyle(target).cursor === "pointer" || 
                           target.closest('button') || 
                           target.closest('a');
        setIsPointer(!!isClickable);
      }
    };

    const animate = () => {
      // Lerp for ring
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-4 h-4 bg-brand-primary pointer-events-none z-[10001] [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] shadow-[0_0_15px_hsl(var(--brand-primary))] drop-shadow-[0_0_8px_hsl(var(--brand-primary))]"
        style={{ willChange: 'transform' }}
      />
      <div 
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[10000] transition-[width,height,background-color] duration-500 ease-out flex items-center justify-center ${
          isPointer ? "w-28 h-28 bg-brand-primary/25" : "w-16 h-16 bg-brand-primary/10"
        } [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] border border-brand-primary/40`}
        style={{ willChange: 'transform' }}
      >
        {/* Decorative rotating scanner */}
        <div className="w-[92%] h-[92%] border-2 border-brand-primary/60 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] animate-[spin_6s_linear_infinite]" />
      </div>
    </>
  );
}
