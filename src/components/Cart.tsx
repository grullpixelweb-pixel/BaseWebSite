"use client";

import React from "react";
import { X, Trash2, Send } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();
  const { t } = useLanguage();

  const handleCheckout = () => {
    const phoneNumber = "5511981718899";
    const header = t.cart.whatsappHeader;
    
    const items = cart
      .map((item) => `- *${item.title}* ($${item.price})`)
      .join("%0A");

    const footer = t.cart.whatsappTotal.replace("%s", total.toString());

    const message = header + items + footer;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div 
      id="cart-sidebar" 
      className="fixed inset-y-0 right-0 z-[60] w-full md:w-[400px] h-full transform translate-x-full transition-transform duration-300 ease-in-out bg-gray-950 border-l border-white/10 shadow-2xl flex flex-col"
    >
      <div className="flex items-center justify-between p-6 border-b border-white/10 glass">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          {t.cart.title}
        </h2>
        <button 
          onClick={() => document.getElementById("cart-sidebar")?.classList.add("translate-x-full")}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 mt-20 flex flex-col items-center">
            <span className="text-6xl text-gray-700 block mb-4">🛒</span>
            {t.cart.empty}
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-start">
              <div className="flex-1 pr-4">
                <h4 className="text-sm font-semibold text-gray-200">{item.title}</h4>
                <p className="text-lg font-bold text-blue-400 mt-1">${item.price}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-gray-500 hover:text-red-500 transition-colors p-1"
                aria-label="Remove item"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="p-6 border-t border-white/10 glass">
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-400 text-lg">{t.cart.totalBg}</span>
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
            ${total}
          </span>
        </div>
        
        <button
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg transition-all shadow-lg
            ${cart.length === 0 
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-400 hover:to-emerald-500 hover:shadow-green-500/30'}
          `}
        >
          <Send className="w-6 h-6" />
          {t.cart.checkout}
        </button>
      </div>
    </div>
  );
}
