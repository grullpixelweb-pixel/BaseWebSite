"use client";

import React from "react";
import { Check, Plus, Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { cart, addToCart } = useCart();
  const { t } = useLanguage();
  const services = t.servicesConfig.items;

  return (
    <section
      id="servicios"
      className="py-44 relative z-10 overflow-hidden min-h-screen flex items-center justify-center"
      style={{ background: "black" }}
    >
      <div className="absolute inset-0 motherboard-grid opacity-10"></div>
      <div className="absolute inset-0 bg-radial-gradient from-brand-secondary/5 via-transparent to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header (Floating above the orbit) */}
        <div className="text-center mb-32">
          <div className="inline-block px-4 py-1 border border-brand-primary/30 text-[10px] uppercase font-black tracking-[0.4em] text-brand-primary mb-6">
             Ecosistema_Mitológico: Sabores & Visiones
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-6 italic">
            {t.servicesConfig.title}
          </h2>
        </div>

        {/* Circular/Orbital Hub */}
        <div className="relative min-h-[800px] lg:h-[900px] w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
          
          {/* Central Server Core */}
          <div className="relative z-20 w-32 h-32 md:w-56 md:h-56 rounded-full bg-black border-4 border-brand-secondary/40 flex items-center justify-center shadow-[0_0_40px_hsla(var(--brand-secondary)/0.15)] group hover:border-brand-secondary transition-all duration-700 lg:absolute">
             <div className="absolute -inset-4 border border-brand-secondary/5 rounded-full" />
             <div className="absolute -inset-8 border border-white/5 rounded-full" />
             
             <div className="text-center p-4">
               <div className="w-12 h-12 mx-auto mb-2 text-brand-secondary opacity-50">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                   <rect x="2" y="2" width="20" height="8" rx="2" />
                   <rect x="2" y="14" width="20" height="8" rx="2" />
                   <path d="M6 6h.01M6 18h.01" strokeWidth="3" strokeLinecap="round" />
                 </svg>
               </div>
               <span className="text-[10px] uppercase font-black tracking-widest text-brand-secondary block">Server_Hub</span>
             </div>
          </div>

          {/* Connection Lines (SVGs - Hidden on mobile) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
             <svg className="w-full h-full opacity-10" viewBox="0 0 1000 1000">
                <line x1="500" y1="500" x2="500" y2="150" stroke="hsl(var(--brand-primary))" strokeWidth="1" strokeDasharray="10 10" />
                <line x1="500" y1="500" x2="150" y2="750" stroke="hsl(var(--brand-primary))" strokeWidth="1" strokeDasharray="10 10" />
                <line x1="500" y1="500" x2="850" y2="750" stroke="hsl(var(--brand-secondary))" strokeWidth="1" strokeDasharray="10 10" />
             </svg>
          </div>

          {/* Tactical Cards Around the Core */}
          {services.map((service, index) => {
            const isInCart = cart.some((item) => item.id === service.id);
            const isPopular = service.id === 2;
            const isEcosystem = service.id === 3;

            // Orbital positions for desktop only
            const desktopPositions = [
              "lg:top-[-100px] lg:left-1/2 lg:-translate-x-1/2", // Top (Lançamento)
              "lg:bottom-0 lg:left-[50px]", // Bottom Left (Identidade)
              "lg:bottom-0 lg:right-[50px]", // Bottom Right (Ecossistema)
            ];

            return (
              <div
                key={service.id}
                className={`relative lg:absolute ${desktopPositions[index]} flex flex-col w-full lg:w-80 p-8 rounded-3xl transition-all duration-700 group border h-fit glass ${
                  isPopular 
                    ? "border-brand-primary shadow-[0_0_40px_hsla(var(--brand-primary)/0.2)] z-30" 
                    : isEcosystem
                    ? "border-brand-secondary shadow-[0_0_40px_hsla(var(--brand-secondary)/0.2)] z-30"
                    : "border-white/10 z-20"
                } hover:-translate-y-4 lg:hover:scale-110`}
              >
                {/* ID & Status */}
                <div className="flex justify-between items-center mb-6">
                  <div className={`w-2 h-2 rounded-full ${isPopular ? "bg-brand-primary" : isEcosystem ? "bg-brand-secondary" : "bg-white/30"}`} />
                  <span className="text-[10px] font-mono opacity-20 tracking-widest">MODULE_0{service.id}</span>
                </div>

                {/* Title & Price */}
                <h3 className={`text-2xl font-display font-black mb-4 uppercase tracking-tighter ${isEcosystem ? "text-brand-secondary" : "text-white"}`}>
                  {service.title}
                </h3>
                
                <div className="mb-6 flex items-baseline gap-1 bg-white/[0.03] p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono opacity-30">BRL</span>
                  <span className="text-3xl font-mono font-black text-brand-primary">
                    {service.price}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="mb-6 text-[10px] leading-relaxed opacity-40 font-black uppercase tracking-widest">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className={`w-1 h-1 rounded-full ${isEcosystem ? "bg-brand-secondary" : "bg-brand-primary"}`} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => addToCart(service)}
                  disabled={isInCart}
                  className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-500 ${
                    isInCart
                      ? "bg-white/5 text-white/20 border border-white/5"
                      : isEcosystem
                      ? "bg-brand-secondary text-black shadow-[0_0_15px_hsla(var(--brand-secondary)/0.3)]"
                      : "bg-brand-primary text-black shadow-[0_0_15px_hsla(var(--brand-primary)/0.3)]"
                  }`}
                >
                  {isInCart ? t.servicesConfig.selected : t.servicesConfig.addModule}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
