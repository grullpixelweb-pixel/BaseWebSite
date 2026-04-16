"use client";

import React from "react";
import { X, Trash2, Send, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();
  const { t } = useLanguage();

  const formatPrice = (price: number) => price.toLocaleString("pt-BR");

  const handleCheckout = () => {
    const phoneNumber = "5511981718899";
    const header = t.cart.whatsappHeader;

    const items = cart
      .map((item) => `- *${item.title}* (R$ ${formatPrice(item.price)})`)
      .join("%0A");

    const footer = t.cart.whatsappTotal.replace(
      "%s",
      "R$ " + formatPrice(total),
    );

    const message = header + items + footer;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  const closeCart = () => {
    document.getElementById("cart-sidebar")?.classList.add("translate-x-full");
  };

  return (
    <div
      id="cart-sidebar"
      className="fixed inset-y-0 right-0 z-[60] w-full md:w-[450px] h-full transform translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] glass shadow-2xl flex flex-col border-l"
      style={{ borderColor: "hsla(var(--text-primary) / 0.1)" }}
    >
      <div className="flex items-center justify-between p-8 border-b" style={{ borderColor: "hsla(var(--text-primary) / 0.05)" }}>
        <h2 className="text-2xl font-display font-bold flex items-center gap-3" style={{ color: "hsl(var(--text-primary))" }}>
          <ShoppingCart className="w-6 h-6 text-brand-primary" />
          {t.cart.title}
        </h2>
        <button
          onClick={closeCart}
          className="p-2 rounded-xl hover:bg-white/5 transition-all opacity-50 hover:opacity-100"
          style={{ color: "hsl(var(--text-primary))" }}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        {cart.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
            <div className="w-20 h-20 mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <ShoppingCart className="w-10 h-10" />
            </div>
            <p className="text-lg font-medium">{t.cart.empty}</p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/5 transition-all hover:bg-white/10"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-display font-bold pr-8" style={{ color: "hsl(var(--text-primary))" }}>
                  {item.title}
                </h4>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500/50 hover:text-red-500 transition-colors p-1"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xl font-black" style={{ color: "hsl(var(--brand-primary))" }}>
                R$ {formatPrice(item.price)}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="p-8 border-t space-y-8" style={{ borderColor: "hsla(var(--text-primary) / 0.05)" }}>
        <div className="flex justify-between items-end">
          <span className="text-sm font-black uppercase tracking-[0.2em] opacity-40">{t.cart.totalBg}</span>
          <div className="text-right">
            <span className="block text-4xl font-display font-black text-gradient">
              R$ {formatPrice(total)}
            </span>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl ${
            cart.length === 0
              ? "bg-white/5 text-muted cursor-not-allowed border border-white/5"
              : "bg-[hsl(var(--brand-primary))] text-white hover:scale-[1.02] active:scale-[0.98] shadow-brand-primary/20"
          }`}
          style={cart.length > 0 ? { backgroundColor: "hsl(var(--brand-primary))" } : {}}
        >
          <Send className="w-5 h-5" />
          {t.cart.checkout}
        </button>
      </div>
    </div>
  );
}
