"use client";

import React, { useEffect, useState } from "react";

export default function ProjectileFX() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.random() * 80 + 10;
      const y = Math.random() * 80 + 10;
      const id = Date.now();

      setRipples(prev => [...prev.slice(-3), { id, x, y }]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden [perspective:1200px]">
      {/* 3D Spinning Cryo-Missile 01 */}
      <div className="absolute top-1/3 left-0 animate-bullet-slide [transform-style:preserve-3d]">
        <div className="relative flex items-center group/missile">
          
          {/* HIGH-OUTPUT SONIC BREAK (Breaking Waves) */}
          <div className="absolute left-[95%] flex items-center justify-center">
            <div className="absolute w-12 h-12 border-l-[3px] border-[#00fbff] rounded-full [transform:rotateY(-45deg)_scaleX(0.3)] animate-ping opacity-70" />
            <div className="absolute w-16 h-16 border-l-2 border-[#00fbff]/50 rounded-full [transform:rotateY(-45deg)_scaleX(0.4)] animate-ping opacity-40 delay-75" />
            <div className="absolute w-20 h-20 border-l border-[#00fbff]/30 rounded-full [transform:rotateY(-45deg)_scaleX(0.5)] animate-ping opacity-20 delay-150" />
            {/* Plasma Core at Tip */}
            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_20px_#fff,_0_0_40px_#00fbff] animate-pulse relative z-20" />
          </div>

          {/* Rotating Fins (Aleticas) */}
          <div className="absolute right-0 w-8 h-12 flex flex-col justify-between items-center animate-fin-rotate">
            <div className="w-full h-4 bg-white/60 [clip-path:polygon(0%_40%,100%_0%,100%_100%)] shadow-[0_0_10px_white/20]" />
            <div className="w-full h-4 bg-white/60 [clip-path:polygon(0%_60%,100%_0%,100%_100%)] shadow-[0_0_10px_white/20]" />
          </div>

          {/* Spin-Animated Missile Body */}
          <div className="w-32 h-5 bg-white relative z-10 shadow-[0_0_20px_#00fbff] [clip-path:polygon(0%_40%,10%_40%,100%_50%,10%_60%,0%_60%)] [transform:rotateY(-30deg)] overflow-hidden">
             <div className="absolute inset-0 opacity-40 animate-hustle" 
                  style={{ background: 'repeating-linear-gradient(45deg, #00fbff 0%, #00fbff 10%, transparent 10%, transparent 20%)', backgroundSize: '10px 10px' }} />
             <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
          </div>
          
          {/* Blue Rocket Fire */}
          <div className="absolute right-[98%] w-40 h-10 flex items-center justify-end overflow-visible">
            <div className="w-full h-full bg-[#00fbff] [clip-path:polygon(100%_20%,0%_50%,100%_80%)] animate-flicker opacity-80 blur-[2px]" />
          </div>
        </div>
      </div>

      {/* 3D Spinning Cryo-Missile 02 (Reverse) */}
      <div className="absolute top-2/3 right-0 animate-bullet-slide-reverse [transform-style:preserve-3d]">
        <div className="relative flex flex-row-reverse items-center">
          
          {/* HIGH-OUTPUT SONIC BREAK */}
          <div className="absolute right-[95%] flex items-center justify-center">
            <div className="absolute w-14 h-14 border-r-[4px] border-[#00fbff] rounded-full [transform:rotateY(45deg)_scaleX(0.3)] animate-ping opacity-60" />
            <div className="absolute w-20 h-20 border-r-2 border-[#00fbff]/40 rounded-full [transform:rotateY(45deg)_scaleX(0.4)] animate-ping opacity-30 delay-100" />
            {/* Plasma Core at Tip */}
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_25px_#fff,_0_0_45px_#00fbff] animate-pulse relative z-20" />
          </div>
          
          {/* Rotating Fins (Aleticas) */}
          <div className="absolute left-0 w-10 h-14 flex flex-col justify-between items-center animate-fin-rotate-reverse">
            <div className="w-full h-5 bg-white/60 [clip-path:polygon(100%_40%,0%_0%,0%_100%)]" />
            <div className="w-full h-5 bg-white/60 [clip-path:polygon(100%_60%,0%_0%,0%_100%)]" />
          </div>

          {/* Spin-Animated Missile Body */}
          <div className="w-40 h-6 bg-white relative z-10 shadow-[0_0_30px_#00fbff] [clip-path:polygon(100%_40%,90%_40%,0%_50%,90%_60%,100%_60%)] [transform:rotateY(30deg)] overflow-hidden">
             <div className="absolute inset-0 opacity-40 animate-hustle" 
                  style={{ background: 'repeating-linear-gradient(-45deg, #00fbff 0%, #00fbff 10%, transparent 10%, transparent 20%)', backgroundSize: '12px 12px' }} />
             <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
          </div>
          
          {/* Blue Rocket Fire */}
          <div className="absolute left-[98%] w-56 h-12 flex items-center justify-start overflow-visible">
            <div className="w-full h-full bg-[#00fbff] [clip-path:polygon(0%_20%,100%_50%,0%_80%)] animate-flicker opacity-80 blur-[3px]" />
          </div>
        </div>
      </div>

      {/* Periodic Shockwaves (Random Impact) */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute w-2 h-2 border-2 border-[#00fbff] rounded-full animate-shockwave"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
          }}
        />
      ))}
    </div>
  );
}
