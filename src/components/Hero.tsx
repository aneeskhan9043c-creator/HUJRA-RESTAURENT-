import React from 'react';
import { ChevronRight, Star, Flame, Award, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { FALLBACK_IMAGE, heroDishImg } from '../data/dishes';
import { RealisticWhatsAppButton } from './WhatsAppLiquidGlass';

interface HeroProps {
  onOrderNow: () => void;
  onBookTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onBookTable }) => {
  return (
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8 pb-14 md:py-20 min-h-[85vh] overflow-hidden max-w-7xl mx-auto scroll-mt-20 sm:scroll-mt-24">
      {/* Background Ambience with Radiant Golden & Dark Atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Rotating Dish Presentation (Order-1 on Mobile to be on top, Order-2 on Desktop) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="order-1 md:order-2 w-full md:w-1/2 relative mb-8 md:mb-0 flex justify-center items-center"
      >
        {/* Glowing golden background halo */}
        <div className="absolute w-[260px] sm:w-[350px] md:w-[480px] h-[260px] sm:h-[350px] md:h-[480px] bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-transparent rounded-full blur-[90px] pointer-events-none" />
        
        {/* Main rotating dish */}
        <div className="relative animate-[spin_40s_linear_infinite] rounded-full p-2.5 sm:p-4 border-2 border-dashed border-amber-400/40 shadow-[0_0_50px_rgba(232,159,75,0.25)]">
          <img 
            src={heroDishImg} 
            alt="Authentic Peshawari Feast with Chapli Kabab and Shinwari Karahi" 
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
            className="w-[220px] sm:w-[320px] md:w-[440px] h-[220px] sm:h-[320px] md:h-[440px] object-cover rounded-full shadow-[0_0_60px_rgba(232,159,75,0.4)]"
          />
        </div>

        {/* Floating authentic badge with cartoonish emoji & realistic glass */}
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={onBookTable}
          className="absolute -top-2 sm:top-6 md:top-10 right-2 sm:right-6 md:right-8 bg-[#141414]/90 border border-amber-400/30 p-2.5 sm:p-3.5 rounded-2xl flex items-center space-x-3 shadow-[0_10px_30px_rgba(0,0,0,0.7)] z-20 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-xl group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-xl shadow-[0_4px_12px_rgba(232,159,75,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-transform">
            <span>🍗</span>
          </div>
          <div>
            <div className="text-xs sm:text-sm font-extrabold text-white leading-tight flex items-center space-x-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] to-[#ffd666]">100% Desi Murgh</span>
            </div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider flex items-center space-x-1">
              <span>Swat Bypass Specialty</span>
              <span className="text-xs">✨</span>
            </div>
          </div>
        </motion.div>

        {/* Floating badge for Live Shinwari Coal with cartoonish emoji */}
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-2 sm:bottom-4 md:bottom-8 left-2 sm:left-6 bg-[#141414]/90 border border-amber-400/30 p-2.5 sm:p-3 rounded-2xl flex items-center space-x-3 shadow-[0_10px_30px_rgba(0,0,0,0.7)] z-20 backdrop-blur-xl group hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2a1a0f] to-[#1a110a] border border-amber-500/30 flex items-center justify-center text-xl shadow-md group-hover:scale-110 group-hover:-rotate-6 transition-transform">
            <span>🥩</span>
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white leading-tight">
              Authentic Dum Pukht
            </div>
            <div className="text-[10px] text-amber-300/80 flex items-center space-x-1">
              <span>6-Hour Clay Pot</span>
              <span className="text-xs">🔥</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Text Content (Order-2 on Mobile, Order-1 on Desktop) */}
      <motion.div 
        initial={{ opacity: 0, y: 35, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="order-2 md:order-1 w-full md:w-1/2 z-10 text-center md:text-left"
      >
        {/* Cartoonish & Golden Header Pill */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-600/15 border border-amber-400/30 px-4 py-1.5 rounded-full mb-4 shadow-[0_0_20px_rgba(232,159,75,0.2)]">
          <span className="text-base animate-pulse">🔥</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14] uppercase tracking-widest text-xs font-bold">
            Mingora Swat Bypass • Frontier Fine Dining
          </span>
          <span className="text-base">✨</span>
        </div>
        
        {/* Majestic Golden Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
          <span className="text-white">Taste Crafted </span>
          <br className="hidden sm:inline" />
          <span className="text-white">to </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#d48806] drop-shadow-[0_4px_25px_rgba(232,159,75,0.45)]">
            Perfection
          </span>
        </h1>
        
        <p className="text-gray-300 max-w-lg mx-auto md:mx-0 mb-6 text-sm sm:text-base leading-relaxed">
          Welcome to Swat Valley's premier destination for authentic Khyber cuisine. Savor slow-cooked clay Dum Pukht, sizzling Chicken Shinwari Karahi, golden Peshawari Chapli Kababs, and Chinese wok delicacies right on Mingora Bypass.
        </p>
        
        {/* Realistic CTA Buttons with Supreme Liquid Glass WhatsApp */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <RealisticWhatsAppButton
            id="hero-whatsapp-order-cta"
            label="Order on WhatsApp"
            subLabel="Fast Delivery & Instant Chat"
            message="Salam Hujra Restaurant Swat Bypass! I want to view today's fresh menu and place an order."
            className="w-full sm:w-auto justify-center"
          />

          <button 
            id="hero-order-btn"
            onClick={onOrderNow}
            className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#ffd977] via-[#f5bd55] to-[#c67e26] hover:from-white hover:to-white hover:text-black text-black px-6 sm:px-8 py-3.5 rounded-full font-extrabold transition duration-300 flex items-center shadow-[0_6px_25px_rgba(232,159,75,0.4)] cursor-pointer text-xs sm:text-sm uppercase tracking-wider min-h-[48px]"
          >
            <span>Explore Menu</span>
            <ChevronRight className="w-4 h-4 ml-1 font-bold" />
          </button>
          
          <button 
            id="hero-book-btn"
            onClick={onBookTable}
            className="w-full sm:w-auto justify-center border border-white/20 hover:border-amber-400 hover:bg-amber-500/10 text-white px-6 sm:px-7 py-3.5 rounded-full font-medium transition duration-300 cursor-pointer text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-1.5 min-h-[48px]"
          >
            <span>👑</span>
            <span>Book a Table</span>
          </button>
        </div>

        {/* Quick Highlights Bar with Golden Numbers & Cartoonish Emojis */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-center md:text-left text-xs text-gray-400">
          <div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] to-[#ffd666] text-lg sm:text-xl font-extrabold font-serif-luxury flex items-center justify-center md:justify-start space-x-1">
              <span>6+ Hours</span>
              <span className="text-sm">🍲</span>
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-300 font-medium">Clay Pot Cooking</div>
          </div>
          <div className="border-l border-white/10 pl-3">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] to-[#ffd666] text-lg sm:text-xl font-extrabold font-serif-luxury flex items-center justify-center md:justify-start space-x-1">
              <span>100% Halal</span>
              <span className="text-sm">🥩</span>
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-300 font-medium">Fresh Meat & Murgh</div>
          </div>
          <div className="border-l border-white/10 pl-3">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] to-[#ffd666] text-lg sm:text-xl font-extrabold font-serif-luxury flex items-center justify-center md:justify-start space-x-1">
              <span>Swat Bypass</span>
              <span className="text-sm">🏔️</span>
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-300 font-medium">River View Majlis</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
