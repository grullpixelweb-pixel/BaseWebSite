"use client";

import React from "react";
import { Check, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { cart, addToCart } = useCart();
  const { t } = useLanguage();
  const services = t.servicesConfig.items;

  return (
    <section
      id="servicios"
      className="py-24 relative z-10"
      style={{
        background: "var(--bg-section)",
        borderTop: "1px solid var(--border-faint)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <h2
            className="text-3xl font-extrabold sm:text-4xl"
            style={{ color: "var(--text-primary)" }}
          >
            {t.servicesConfig.title}
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-xl"
            style={{ color: "var(--text-muted)" }}
          >
            {t.servicesConfig.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const isInCart = cart.some((item) => item.id === service.id);
            const isPopular = service.id === 2;

            return (
              <div
                key={service.id}
                className="relative flex flex-col p-8 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  background: "var(--bg-card, var(--bg-surface))",
                  border: isPopular
                    ? "2px solid #8b5cf6"
                    : "1px solid var(--border-card, var(--border-soft))",
                  boxShadow: isPopular
                    ? "0 0 30px rgba(139,92,246,0.20), var(--shadow-card, 0 4px 24px rgba(0,0,0,0.3))"
                    : "var(--shadow-card, 0 4px 24px rgba(0,0,0,0.3))",
                  backdropFilter: "blur(16px)",
                }}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {t.servicesConfig.mostPopular}
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  {/* Title gradient */}
                  <h3
                    className={`text-2xl md:text-3xl font-extrabold pb-1 tracking-tight text-transparent bg-clip-text bg-gradient-to-r
                      ${service.id === 1
                        ? "from-cyan-400 to-blue-500"
                        : service.id === 2
                        ? "from-violet-400 to-fuchsia-400"
                        : "from-amber-400 to-orange-500"
                      }`}
                  >
                    {service.title}
                  </h3>

                  {/* Price */}
                  <p className="mt-4 flex items-baseline">
                    <span
                      className="text-4xl font-extrabold tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      R$ {service.price.toLocaleString("pt-BR")}
                    </span>
                  </p>

                  {/* Description */}
                  <p
                    className="mt-6 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="mt-6 space-y-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="flex-shrink-0 w-5 h-5 text-blue-400 mt-0.5" />
                        <span
                          className="text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add button */}
                <div className="mt-8">
                  <button
                    onClick={() => addToCart(service)}
                    disabled={isInCart}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-medium transition-all
                      ${isInCart
                        ? "cursor-not-allowed"
                        : "hover:bg-blue-600 hover:text-white hover:border-blue-500"
                      }`}
                    style={
                      isInCart
                        ? {
                            background: "rgba(59,130,246,0.15)",
                            color: "#60a5fa",
                            border: "1px solid rgba(59,130,246,0.30)",
                          }
                        : {
                            background: "var(--bg-surface-md, rgba(255,255,255,0.10))",
                            color: "var(--text-primary)",
                            border: "1px solid var(--border-soft)",
                          }
                    }
                  >
                    {isInCart ? (
                      <><Check className="w-5 h-5" /> {t.servicesConfig.selected}</>
                    ) : (
                      <><Plus className="w-5 h-5" /> {t.servicesConfig.addModule}</>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
