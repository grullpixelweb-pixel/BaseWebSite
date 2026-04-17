"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { cart, addToCart } = useCart();
  const { t } = useLanguage();
  const services = t.servicesConfig.items;

  return (
    <section
      id="servicios"
      className="py-32 bg-black dark:bg-zinc-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 100px), repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 100px)`,
        backgroundSize: '100px 100px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <header className="text-center mb-24">
          <div className="inline-block px-6 py-2 bg-brand-primary text-black neo-border font-black uppercase text-sm mb-6 shadow-[4px_4px_0px_white]">
              SERVICE INFRASTRUCTURE // v2.0
          </div>
          <h2 className="text-4xl sm:text-7xl md:text-9xl font-display font-black text-white italic uppercase tracking-tighter leading-none mb-8">
            {t.servicesConfig.title}
          </h2>
          <div className="h-4 w-64 bg-brand-secondary mx-auto neo-border shadow-[4px_4px_0px_white]" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service) => {
            const isInCart = cart.some((item) => item.id === service.id);
            const isMiddle = service.id === 2;

            return (
              <div
                key={service.id}
                className={`flex flex-col neo-card !p-0 overflow-hidden ${isMiddle ? '!bg-brand-primary' : '!bg-white'} group transition-transform hover:-translate-y-4`}
              >
                {/* Card Header */}
                <div className="p-8 border-b-4 border-black flex justify-between items-start bg-black text-white">
                    <div>
                        <div className="text-[10px] font-mono font-bold opacity-50 mb-1">ALLOCATION_REF: {service.id}</div>
                        <h3 className="text-4xl font-display font-black uppercase tracking-tighter italic">
                            {service.title}
                        </h3>
                    </div>
                    <div className="w-12 h-12 bg-white text-black neo-border flex items-center justify-center font-black text-xl">
                        {service.id}
                    </div>
                </div>

                <div className="p-8 flex-1 text-black">
                    <div className="mb-8 flex items-end gap-2">
                        <span className="text-6xl font-display font-black text-black">
                            ${service.price}
                        </span>
                        <span className="text-sm font-mono font-black opacity-30 pb-2">/ PROJECT UNIT</span>
                    </div>

                    <p className="mb-8 text-black font-bold uppercase text-xs leading-tight opacity-70">
                        {service.description}
                    </p>

                    <ul className="space-y-4 mb-12">
                        {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <div className="mt-1 bg-black text-white p-0.5 neo-border">
                                <Check size={14} strokeWidth={4} />
                            </div>
                            <span className="text-black font-black uppercase text-[10px] tracking-widest leading-none pt-1">
                                {feature}
                            </span>
                        </li>
                        ))}
                    </ul>
                </div>

                <button
                  onClick={() => addToCart(service)}
                  disabled={isInCart}
                  className={`w-full py-8 border-t-4 border-black font-black text-xl uppercase tracking-tighter transition-all flex items-center justify-center gap-4 ${
                    isInCart
                      ? "bg-black/10 text-black/20"
                      : "bg-black text-white hover:bg-brand-secondary active:bg-white active:text-black"
                  }`}
                >
                  {isInCart ? t.servicesConfig.selected : (
                    <>
                        {t.servicesConfig.addModule}
                        <ArrowRight size={24} strokeWidth={3} />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
