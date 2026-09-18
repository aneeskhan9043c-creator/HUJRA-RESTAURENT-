import React from 'react';
import { Compass, Car, Users, Coffee, ShieldCheck, Heart, Sparkles, Navigation, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_WHATSAPP, RESTAURANT_LOCATION_TEXT } from '../data/dishes';
import { RealisticWhatsAppButton } from './WhatsAppLiquidGlass';

interface TouristExperienceSectionProps {
  onBookMajlis: () => void;
}

export const TouristExperienceSection: React.FC<TouristExperienceSectionProps> = ({ onBookMajlis }) => {
  const touristDestinations = [
    { name: "Fizagat Riverfront", time: "5 Mins", icon: "🌊", desc: "Just across the bypass bridge" },
    { name: "Mingora City & Bazaar", time: "8 Mins", icon: "🏙️", desc: "Easy drive along river road" },
    { name: "Malam Jabba Ski Resort", time: "45 Mins", icon: "⛷️", desc: "Direct route towards hill station" },
    { name: "Kalam & Bahrain Valley", time: "Direct Access", icon: "🏔️", desc: "Main tourist highway junction" },
  ];

  const touristPerks = [
    {
      emoji: "🥩",
      title: "Live Meat Selection",
      desc: "Tourists can visit our fresh meat counter and personally select their cut of Desi Murgh or fresh lamb before cooking on live charcoal.",
      tag: "100% Fresh"
    },
    {
      emoji: "👨‍👩‍👧‍👦",
      title: "Private Family Majlis Cabins",
      desc: "Traditional carpeted Pashtun Majlis with plush bolster cushions (gao-takiya), complete privacy, and serene Swat river breezes.",
      tag: "Family Purdah"
    },
    {
      emoji: "🍵",
      title: "Complimentary Green Kahwah",
      desc: "Every guest and traveler is welcomed with authentic steaming Peshawari Kahwah infused with wild green tea leaves, green cardamom, and saffron.",
      tag: "Free Hospitality"
    },
    {
      emoji: "🚗",
      title: "Dedicated Tourist Parking",
      desc: "Spacious, secure, and monitored parking area accommodating luxury tourist vans, coasters, Prados, and family vehicles with valet assistance.",
      tag: "Safe Parking"
    },
  ];

  return (
    <section id="tourist-guide" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#090909] via-[#0d0d0d] to-[#070707] relative overflow-hidden border-t border-amber-500/20 scroll-mt-20 sm:scroll-mt-24">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Golden Heading with AI Slope Vibe and Cartoonish Emojis */}
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-600/15 border border-amber-400/30 text-[11px] sm:text-xs uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(232,159,75,0.2)] mb-3 sm:mb-4">
            <span className="text-base animate-bounce">🏔️</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14]">
              سیاحوں کے لیے خصوصی گائیڈ • Swat Valley Traveler Concierge
            </span>
            <span className="text-base animate-bounce">✨</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-white">The Ultimate </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] via-[#f5bd55] to-[#c67e26] drop-shadow-[0_2px_15px_rgba(232,159,75,0.4)]">
              Tourist Food Destination
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-300 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed px-2">
            Visiting Swat Valley from Islamabad, Lahore, Peshawar, or abroad? Hujra Restaurant on Mingora Bypass is your scenic riverfront stopover for unforgettable Pashtun feasts.
          </p>
        </motion.div>

        {/* Tourist Travel Distance Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {touristDestinations.map((dest, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 25, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-4 sm:p-5 rounded-2xl bg-[#121212]/90 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl filter drop-shadow-md group-hover:scale-125 transition-transform duration-300">
                  {dest.icon}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[#f5bd55] font-mono font-bold text-xs">
                  {dest.time}
                </span>
              </div>
              <h4 className="text-white font-bold text-sm sm:text-base group-hover:text-[#ffd666] transition-colors">
                {dest.name}
              </h4>
              <p className="text-[11px] text-gray-400 mt-1">
                {dest.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Realistic Interactive Tourist Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {touristPerks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative p-6 rounded-3xl bg-gradient-to-b from-[#171717] to-[#101010] border border-white/10 hover:border-amber-400/40 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between group"
            >
              {/* Top Row with Cartoonish Emoji and Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#222] to-[#161616] border border-white/15 flex items-center justify-center text-3xl shadow-[0_6px_16px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="filter drop-shadow-lg">{perk.emoji}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-amber-500/20 text-[#ffe082] border border-amber-400/30">
                    {perk.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f5bd55] transition-colors">
                  {perk.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {perk.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
                <span className="text-emerald-400 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Service</span>
                </span>
                <span className="text-amber-400/80 font-mono">Swat Valley</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tourist Fast-Track Action Box with Liquid Glass WhatsApp */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-r from-[#171717]/95 via-[#131313]/95 to-[#1a140f]/95 border-2 border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(232,159,75,0.15)] flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-2xl"
        >
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#ffd977] uppercase tracking-wider mb-2">
              <span className="text-base animate-pulse">👑</span>
              <span>Exclusive Tourist Dastarkhwan Experience</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Traveling to Swat with Family or Friends?
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Message us ahead on WhatsApp with your vehicle ETA. We will reserve your private riverside Majlis and prepare your Dum Pukht or Desi Murgh so it is piping hot upon your arrival!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            {/* The Masterpiece Realistic WhatsApp Liquid Glass Button */}
            <RealisticWhatsAppButton
              id="tourist-whatsapp-order-cta"
              label="Tourist WhatsApp Booking"
              subLabel="Instant Reply & Menu Confirmation"
              message="Assalam-o-Alaikum Hujra Swat! We are tourists on our way to Swat Bypass and would like to reserve a family table and pre-order our meal."
            />

            <button
              onClick={onBookMajlis}
              className="px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white border border-amber-400/50 hover:bg-amber-500/20 transition-all duration-300 shadow-lg cursor-pointer flex items-center space-x-2"
            >
              <span>Book Table Online</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
