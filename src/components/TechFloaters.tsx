"use client";

import React, { useEffect, useState } from "react";

export default function TechFloaters() {
  const [elements, setElements] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number; borderRadius: string }[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      borderRadius: Math.random() > 0.5 ? "4px" : "100%",
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute border border-white/5 glass opacity-[0.03] animate-float"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
            borderRadius: el.borderRadius,
          }}
        >
          {/* Subtle circuit line inside the floater */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10" />
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/10" />
        </div>
      ))}
    </div>
  );
}
