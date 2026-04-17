"use client";

import React from "react";
import { MessageCircle, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contacto" className="relative pt-24 pb-12 overflow-hidden" 
            style={{ background: "hsl(var(--bg-base))", borderTop: "1px solid hsla(var(--text-primary) / 0.05)" }}>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-secondary))] rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg">
                GP
              </div>
              <h3 className="text-2xl font-display font-bold text-gradient">
                Grull Picture Web
              </h3>
            </div>
            <p className="text-lg leading-relaxed opacity-60 font-sans max-w-md">
              {t.footer.text}
            </p>
            <div className="flex gap-4">
               <a href="https://wa.me/5511981718899" target="_blank" className="p-3 rounded-xl glass hover:bg-white/10 transition-all text-brand-primary hover-jump">
                 <MessageCircle className="w-6 h-6" />
               </a>
               <a href="https://instagram.com/grullpixelweb" target="_blank" className="p-3 rounded-xl glass hover:bg-white/10 transition-all text-brand-secondary hover-jump">
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                 </svg>
               </a>
               <a href="#" className="p-3 rounded-xl glass hover:bg-white/10 transition-all text-brand-accent hover-jump">
                 <Globe className="w-6 h-6" />
               </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] opacity-40">{t.footer.links}</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#inicio" className="text-secondary hover:text-primary transition-colors">{t.navbar.home}</a></li>
              <li><a href="#beneficios" className="text-secondary hover:text-primary transition-colors">{t.navbar.benefits}</a></li>
              <li><a href="#servicios" className="text-secondary hover:text-primary transition-colors">{t.navbar.services}</a></li>
              <li><a href="#contacto" className="text-secondary hover:text-primary transition-colors">{t.navbar.contact}</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] opacity-40">{t.footer.connect}</h4>
            <div className="space-y-6">
              <div className="p-6 rounded-[2rem] border border-gradient glass group cursor-pointer hover:bg-white/5 transition-all">
                <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">WhatsApp Direct</p>
                <p className="text-xl font-display font-bold">+55 11 981718899</p>
              </div>
              <p className="text-sm opacity-40 leading-relaxed font-sans">
                Construye tu propio territorio digital hoy mismo. No dependas de plataformas de terceros. 
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6" 
             style={{ borderColor: "hsla(var(--text-primary) / 0.05)" }}>
          <p className="text-sm font-medium opacity-40 leading-none" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">{t.footer.terms}</a>
            <a href="#" className="hover:opacity-100 transition-opacity">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
