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
    <section id="servicios" className="py-24 bg-gray-900 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t.servicesConfig.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            {t.servicesConfig.subtitle}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const isInCart = cart.some((item) => item.id === service.id);
            return (
              <div 
                key={service.id} 
                className={`relative flex flex-col p-8 glass rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 ${service.id === 4 ? 'border-2 border-violet-500' : ''}`}
              >
                {service.id === 4 && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {t.servicesConfig.mostPopular}
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 flex items-baseline text-white">
                    <span className="text-4xl font-extrabold tracking-tight">${service.price}</span>
                    {service.id >= 5 && <span className="ml-1 text-xl font-medium text-gray-400">{t.servicesConfig.perSession}</span>}
                  </p>
                  <p className="mt-6 text-gray-300 text-sm">{service.description}</p>

                  <ul className="mt-6 space-y-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <Check className="flex-shrink-0 w-5 h-5 text-blue-400" />
                        <span className="ml-3 text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => addToCart(service)}
                    disabled={isInCart}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg transition-colors 
                      ${isInCart 
                        ? 'bg-blue-600/20 text-blue-300 cursor-not-allowed border-blue-500/30' 
                        : 'bg-white/10 text-white hover:bg-blue-600 border-white/20 hover:border-blue-500'
                      }`}
                  >
                    {isInCart ? (
                      <>
                        <Check className="w-5 h-5"/> {t.servicesConfig.selected}
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5"/> {t.servicesConfig.addModule}
                      </>
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
