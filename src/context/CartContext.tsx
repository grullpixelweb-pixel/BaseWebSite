"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface ServiceItem {
  id: number;
  title: string;
  price: number;
  description: string;
  features: string[];
}

interface CartContextType {
  cart: ServiceItem[];
  addToCart: (item: ServiceItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ServiceItem[]>([]);

  const addToCart = (item: ServiceItem) => {
    // Prevent duplicates
    if (!cart.find((i) => i.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
