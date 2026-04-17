"use client";

import React from "react";
import { MessageCircle, Globe, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contacto" className="bg-white dark:bg-black py-24 border-t-8 border-black dark:border-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-20 -translate-y-1/2 translate-x-1/2 rotate-45" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          <div className="md:col-span-6 space-y-12">
            <div>
                <h3 className="text-5xl md:text-7xl font-display font-black text-black dark:text-white uppercase tracking-tighter italic mb-8">
                    GRULL<span className="text-brand-secondary">PIXEL</span><span className="text-brand-primary">_</span>
                </h3>
                <p className="text-2xl leading-[1.1] text-black dark:text-white font-bold uppercase tracking-tighter max-w-xl">
                    {t.footer.text}
                </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
               <a href="https://wa.me/5511981718899" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-black text-white neo-border neo-shadow-brand hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                 <span className="font-black uppercase text-sm">WHATSAPP</span>
                 <MessageCircle className="w-5 h-5" />
               </a>
               <a href="https://instagram.com/grullpixelweb" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-white text-black neo-border shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                 <span className="font-black uppercase text-sm">INSTAGRAM</span>
                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
               </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="text-black dark:text-white font-mono font-bold uppercase text-xs opacity-40">NAVIGATION_PATH</h4>
            <ul className="space-y-4">
              {['home', 'benefits', 'services', 'contact'].map((item) => (
                <li key={item}>
                    <a href={`#${item === 'home' ? 'inicio' : item}`} className="group flex items-center justify-between text-2xl font-display font-black text-black dark:text-white uppercase tracking-tighter hover:text-brand-primary transition-colors">
                        {t.navbar[item as keyof typeof t.navbar]}
                        <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="text-black dark:text-white font-mono font-bold uppercase text-xs opacity-40">DIRECT_COMM</h4>
            <div className="bg-brand-primary p-8 neo-border shadow-[6px_6px_0px_black]">
                <p className="text-[10px] font-mono font-bold text-black opacity-50 mb-2 uppercase tracking-widest">Connect with team</p>
                <p className="text-xl font-display font-black text-black">+55 11 981718899</p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t-4 border-black dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-mono font-bold text-black dark:text-white/40 uppercase tracking-widest" suppressHydrationWarning>
            [ {new Date().getFullYear()} ] &copy; GRULL_PIXEL_SYSTEMS_ALL_RIGHTS_RESERVED
          </p>
          <div className="flex gap-12 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-black dark:text-white/40">
            <a href="#" className="hover:text-brand-primary transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-brand-primary transition-colors">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
