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
        className="fixed top-0 left-0 w-2 h-2 bg-brand-primary rounded-full pointer-events-none z-[10001] shadow-[0_0_15px_hsl(var(--brand-primary))]"
        style={{ willChange: 'transform' }}
      />
      <div 
        ref={ringRef}
        className={`fixed top-0 left-0 border border-brand-primary/40 rounded-full pointer-events-none z-[10000] transition-[width,height,background-color] duration-500 ease-out flex items-center justify-center ${
          isPointer ? "w-16 h-16 bg-brand-primary/10" : "w-8 h-8 bg-transparent"
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
