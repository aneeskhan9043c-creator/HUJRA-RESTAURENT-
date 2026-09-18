import React from 'react';
import { Flame, Clock, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';
import { FALLBACK_IMAGE, masterChefImg } from '../data/dishes';
import { RealisticWhatsAppButton } from './WhatsAppLiquidGlass';

interface SpecialsSectionProps {
  onBookTasting: () => void;
  onExploreMenu: () => void;
}

export const SpecialsSection: React.FC<SpecialsSectionProps> = ({ onBookTasting, onExploreMenu }) => {
  return (
    <section id="specials" className="py-20 px-6 lg:px-12 bg-gradient-to-b from-[#090909] via-[#0d0d0d] to-[#080808] border-t border-amber-500/20 relative overflow-hidden">
      {/* Background golden ambience */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider mb-3 bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-600/15 border border-amber-400/30 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(232,159,75,0.2)]">
            <span className="text-base animate-pulse">👑</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14]">
              The Swat Hujra Culinary Heritage
            </span>
            <span className="text-base">✨</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Time-Honored{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14] drop-shadow-[0_2px_15px_rgba(232,159,75,0.4)]">
              Pashtun Hospitality
            </span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            In our traditions, a 'Hujra' represents the sacred community space of warmth, camaraderie, and royal feasting. We bring that soul to every tourist and family along Swat River.
          </p>
        </div>

        {/* 3 Pillars with cartoonish emojis and realistic glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          <div className="bg-[#131313]/90 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group hover:-translate-y-1.5">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2a1a0f] to-[#1a110a] border border-amber-500/30 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-[0_6px_16px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <span className="filter drop-shadow-md">🍲</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2.5 group-hover:text-[#ffd666] transition-colors">
              6-Hour Clay Dum Pukht
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Tender mutton cuts and potatoes slow-cooked inside hand-thrown earthen pots sealed with flour dough over low embers. Zero water added, yielding 100% natural marrow juices.
            </p>
          </div>

          <div className="bg-[#131313]/90 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group hover:-translate-y-1.5">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2a1a0f] to-[#1a110a] border border-amber-500/30 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-[0_6px_16px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:-rotate-6 transition-transform">
              <span className="filter drop-shadow-md">🥘</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2.5 group-hover:text-[#ffd666] transition-colors">
              Live Shinwari Charcoal Wok
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Desi Murgh and Lamb Shinwari Karahi cooked fresh to order in iron woks over high volcanic coals with ripe tomatoes and cracked black pepper for unmistakable smoky wok-hei.
            </p>
          </div>

          <div className="bg-[#131313]/90 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group hover:-translate-y-1.5">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2a1a0f] to-[#1a110a] border border-amber-500/30 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-[0_6px_16px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <span className="filter drop-shadow-md">🌶️</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2.5 group-hover:text-[#ffd666] transition-colors">
              Stone-Crushed Masalas
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Wild pomegranate seeds (anardana), whole coriander seeds, and mountain spices freshly ground daily on traditional stone mortars for our golden Peshawari Chapli Kababs.
            </p>
          </div>
        </div>

        {/* Featured Royal Dastarkhwan Banner with Realistic Chef Image & Liquid Glass WhatsApp */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 bg-[#141414] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(232,159,75,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-6 sm:p-10 lg:p-14 z-10">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-[#ffd666] font-extrabold mb-3">
                <span className="text-base">👑</span>
                <span>Special Group & Tourist Dining</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1 mb-4 leading-tight">
                The Master Chef’s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#d48806] drop-shadow-[0_2px_15px_rgba(232,159,75,0.4)]">
                  Swat Royal Dastarkhwan
                </span>
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-6 max-w-md leading-relaxed">
                An unforgettable multi-course feast featuring 1kg Dum Pukht Mutton, Peshawari Chapli Kabab platter, Chicken White Handi, Kabuli Pulao, freshly baked Roghani Naan, and authentic Peshawari Kahwah with green cardamom.
              </p>
              
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onBookTasting}
                  className="bg-gradient-to-r from-[#ffd977] via-[#f5bd55] to-[#c67e26] hover:from-white hover:to-white hover:text-black text-black font-extrabold px-6 sm:px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition shadow-[0_4px_20px_rgba(232,159,75,0.35)] flex items-center cursor-pointer"
                >
                  <span>Book Royal Feast</span>
                  <ChevronRight className="w-4 h-4 ml-1.5 font-bold" />
                </button>

                <RealisticWhatsAppButton
                  id="specials-whatsapp-inquiry"
                  label="WhatsApp Inquiry"
                  subLabel="Instant Reply & Menu Confirmation"
                  message="Salam Hujra Restaurant Swat Bypass! I want to enquire about the Royal Dastarkhwan feast package for my family/guests."
                  variant="compact"
                />

                <button
                  onClick={onExploreMenu}
                  className="border border-white/20 hover:border-amber-400 text-white px-5 py-3 rounded-full text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  View Menu
                </button>
              </div>
            </div>

            <div className="h-72 sm:h-96 lg:h-full relative min-h-[340px] bg-black/50">
              <img
                src={masterChefImg}
                alt="Master Chef Swat Pashtun Culinary Specialist"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#141414] via-[#141414]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
