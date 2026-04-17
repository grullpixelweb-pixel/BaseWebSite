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
      className="fixed inset-y-0 right-0 z-[60] w-full md:w-[450px] h-full transform translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white dark:bg-black flex flex-col border-l-8 border-black shadow-[0_0_0_100vmax_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center justify-between p-8 border-b-4 border-black bg-brand-primary">
        <h2 className="text-3xl font-display font-black flex items-center gap-3 text-black">
          <ShoppingCart className="w-8 h-8" strokeWidth={3} />
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

      <div className="p-8 border-t-4 border-black bg-zinc-50 dark:bg-zinc-900 space-y-8">
        <div className="flex justify-between items-end">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-black/40">TOTAL_ALLOCATION</span>
          <div className="text-right">
            <span className="block text-4xl font-display font-black text-black dark:text-white uppercase italic">
              R$ {formatPrice(total)}
            </span>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className={`w-full py-6 flex items-center justify-center gap-3 font-black text-xl uppercase tracking-tighter transition-all neo-border neo-shadow-brand active:translate-y-1 active:translate-x-1 active:shadow-none ${
            cart.length === 0
              ? "bg-zinc-100 text-zinc-300 border-zinc-200 cursor-not-allowed"
              : "bg-black text-white"
          }`}
        >
          <Send className="w-6 h-6" strokeWidth={3} />
          {t.cart.checkout}
        </button>
      </div>
    </div>
  );
}
