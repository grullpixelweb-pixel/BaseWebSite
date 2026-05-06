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
        <div className="flex flex-col items-center text-center gap-12 mb-24">
          
          <div className="space-y-8 w-full">
            <div className="flex flex-col items-center">
                <h3 className="text-5xl md:text-7xl font-display font-black text-black dark:text-white uppercase tracking-tighter italic mb-8">
                    GRULL<span className="text-brand-secondary">PICTURE</span>WEB<span className="text-brand-primary">_</span>
                </h3>
                <p className="text-2xl leading-[1.1] text-black dark:text-white font-bold uppercase tracking-tighter max-w-xl mb-12 mx-auto">
                    {t.footer.text}
                </p>
                
                <div className="space-y-4 max-w-md w-full mx-auto">
                  <h4 className="text-black dark:text-white font-mono font-bold uppercase text-xs opacity-40 text-center">DIRECT_COMM</h4>
                  <div className="bg-brand-primary p-6 neo-border shadow-[6px_6px_0px_black] w-full">
                      <p className="text-[10px] font-mono font-bold text-black opacity-50 mb-4 uppercase tracking-widest text-center">Connect with team</p>
                      <div className="flex flex-wrap justify-center gap-6">
                        {/* WhatsApp */}
                        <a href="https://wa.me/5511981718899" target="_blank" className="text-black hover:scale-125 transition-transform">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-13.4 8.38 8.38 0 0 1 3.8.9L21 3z"/><path d="M15.5 10.5l-3.5 3.5-2-2"/></svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://instagram.com/grullpixelweb" target="_blank" className="text-black hover:scale-125 transition-transform">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                        </a>
                        {/* GitHub */}
                        <a href="https://github.com/grullpixel" target="_blank" className="text-black hover:scale-125 transition-transform">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                        </a>
                        {/* Discord */}
                        <a href="https://discord.gg/yourlink" target="_blank" className="text-black hover:scale-125 transition-transform">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107a14.313 14.313 0 0 0 1.227 1.994a.078.078 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.54-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/></svg>
                        </a>
                        {/* Facebook */}
                        <a href="https://facebook.com/grullpixel" target="_blank" className="text-black hover:scale-125 transition-transform">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                        {/* Telegram */}
                        <a href="https://t.me/yourtelegram" target="_blank" className="text-black hover:scale-125 transition-transform">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </a>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t-4 border-black dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-mono font-bold text-black dark:text-white/40 uppercase tracking-widest" suppressHydrationWarning>
            [ {new Date().getFullYear()} ] &copy; GRULL_PICTURE_WEB_SYSTEMS_ALL_RIGHTS_RESERVED
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
