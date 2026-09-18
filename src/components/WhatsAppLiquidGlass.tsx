import React, { useState } from 'react';
import { RESTAURANT_WHATSAPP, RESTAURANT_PHONE } from '../data/dishes';
import { Sparkles, MapPin, Calendar, Utensils, X, PhoneCall } from 'lucide-react';

// Exact authentic WhatsApp SVG with realistic depth & highlights
export const WhatsAppIconSvg: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-5 h-5", 
  size = 20 
}) => (
  <svg 
    viewBox="0 0 48 48" 
    width={size} 
    height={size} 
    className={className} 
    fill="currentColor"
  >
    {/* Inner speech bubble & handset with authentic proportions */}
    <path 
      d="M24 4C12.95 4 4 12.95 4 24C4 27.88 5.11 31.51 7.03 34.6L4.5 44L14.2 41.53C17.18 43.12 20.49 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4ZM34.39 31.81C33.96 33.02 32.26 34.03 30.88 34.32C29.93 34.52 28.71 34.67 24.52 32.93C19.16 30.7 15.71 25.26 15.44 24.9C15.18 24.55 13.26 22 13.26 19.35C13.26 16.7 14.61 15.41 15.14 14.86C15.57 14.42 16.28 14.22 16.94 14.22C17.16 14.22 17.35 14.23 17.52 14.24C18.03 14.26 18.28 14.29 18.62 15.11C19.04 16.14 20.08 18.67 20.2 18.93C20.33 19.19 20.46 19.54 20.28 19.89C20.11 20.25 19.96 20.41 19.7 20.71C19.44 21.01 19.2 21.23 18.93 21.56C18.69 21.84 18.42 22.14 18.73 22.67C19.04 23.19 20.1 24.93 21.67 26.33C23.69 28.13 25.34 28.71 25.93 28.96C26.37 29.14 26.89 29.1 27.21 28.76C27.61 28.32 28.1 27.63 28.61 26.92C28.97 26.41 29.43 26.35 29.91 26.53C30.4 26.7 33 27.99 33.52 28.25C34.04 28.51 34.39 28.64 34.52 28.86C34.65 29.08 34.65 30.11 34.39 31.81Z" 
    />
  </svg>
);

interface RealisticWhatsAppButtonProps {
  label?: string;
  subLabel?: string;
  onClick?: () => void;
  message?: string;
  variant?: 'pill' | 'compact' | 'iconOnly' | 'largeBanner';
  className?: string;
  id?: string;
}

export const RealisticWhatsAppButton: React.FC<RealisticWhatsAppButtonProps> = ({
  label = "Order on WhatsApp",
  subLabel,
  onClick,
  message = "Salam Hujra Restaurant Swat Bypass! I want to view today's fresh menu and order food.",
  variant = 'pill',
  className = "",
  id = "whatsapp-btn"
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
      return;
    }
    const url = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (variant === 'iconOnly') {
    return (
      <button
        id={id}
        type="button"
        onClick={handleClick}
        title="Chat on WhatsApp"
        aria-label="Order on WhatsApp"
        className={`group relative p-3 rounded-2xl flex items-center justify-center transition-all duration-300 transform active:scale-95 cursor-pointer
          backdrop-blur-2xl bg-gradient-to-b from-[#28e56e]/95 via-[#20bf5b]/90 to-[#0e7d38]/95
          border border-white/40 border-t-white/80 border-b-emerald-950/60
          shadow-[0_8px_24px_rgba(37,211,102,0.45),inset_0_1.5px_2px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.3)]
          hover:shadow-[0_12px_32px_rgba(37,211,102,0.65),inset_0_2px_3px_rgba(255,255,255,0.9)]
          hover:-translate-y-0.5 ${className}`}
      >
        {/* Specular Liquid Glass Curved Highlight */}
        <div className="absolute inset-x-1 top-0.5 h-1/2 bg-gradient-to-b from-white/45 via-white/15 to-transparent rounded-t-xl pointer-events-none" />
        
        {/* Glowing inner orb */}
        <div className="absolute inset-0 rounded-2xl bg-radial from-emerald-300/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <WhatsAppIconSvg size={22} />
        </div>
      </button>
    );
  }

  if (variant === 'compact') {
    return (
      <button
        id={id}
        type="button"
        onClick={handleClick}
        className={`group relative px-4 py-2.5 rounded-full flex items-center space-x-2 transition-all duration-300 transform active:scale-95 cursor-pointer
          backdrop-blur-2xl bg-gradient-to-b from-[#2bf075]/95 via-[#22c75f]/90 to-[#0f873d]/95
          border border-white/40 border-t-white/80 border-b-emerald-950/50
          shadow-[0_6px_20px_rgba(37,211,102,0.4),inset_0_1.5px_2px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.25)]
          hover:shadow-[0_10px_28px_rgba(37,211,102,0.6),inset_0_2px_3px_rgba(255,255,255,0.9)]
          hover:-translate-y-0.5 text-white font-bold text-xs uppercase tracking-wider ${className}`}
      >
        <div className="absolute inset-x-2 top-0.5 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-full pointer-events-none" />
        <WhatsAppIconSvg size={18} className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]" />
        <span className="relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">{label}</span>
      </button>
    );
  }

  // Full Liquid Glass Pill Button (Hero, Specials, Modal)
  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      className={`group relative px-6 sm:px-7 py-3.5 rounded-full flex items-center justify-center space-x-3 transition-all duration-300 transform active:scale-98 cursor-pointer overflow-hidden
        backdrop-blur-2xl bg-gradient-to-b from-[#2fe877]/95 via-[#22c55e]/90 to-[#0e7d38]/95
        border border-white/45 border-t-white/85 border-b-emerald-950/60
        shadow-[0_10px_35px_rgba(37,211,102,0.45),inset_0_2px_2.5px_rgba(255,255,255,0.75),inset_0_-3px_5px_rgba(0,0,0,0.3)]
        hover:shadow-[0_14px_45px_rgba(37,211,102,0.65),inset_0_2px_4px_rgba(255,255,255,0.9)]
        hover:-translate-y-1 text-white ${className}`}
    >
      {/* Top Glass Specular Arc / Lens Reflection */}
      <div className="absolute inset-x-3 top-0.5 h-1/2 bg-gradient-to-b from-white/50 via-white/20 to-transparent rounded-t-full pointer-events-none" />
      
      {/* Liquid animated sheen light beam */}
      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/25 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none" />

      {/* Realistic WhatsApp Emblem with 3D Emboss and Handset */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_2px_6px_rgba(0,0,0,0.3)] shrink-0">
        <WhatsAppIconSvg size={20} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]" />
      </div>

      <div className="relative text-left">
        <div className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.5)] flex items-center space-x-1.5">
          <span>{label}</span>
          <span className="inline-block text-xs group-hover:translate-x-0.5 transition-transform">⚡</span>
        </div>
        {subLabel && (
          <div className="text-[10px] text-emerald-100/90 font-medium tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
            {subLabel}
          </div>
        )}
      </div>
    </button>
  );
};

// Floating Liquid Glass WhatsApp Concierge Widget for Tourists & Customers
export const FloatingLiquidWhatsAppWidget: React.FC<{ onOpenBooking?: () => void }> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (type: 'menu' | 'location' | 'tourist' | 'call') => {
    setIsOpen(false);
    if (type === 'call') {
      window.location.href = `tel:${RESTAURANT_PHONE.replace(/\s+/g, '')}`;
      return;
    }
    let msg = "";
    if (type === 'menu') {
      msg = "Assalam-o-Alaikum Hujra Swat! I want to view today's fresh menu prices and place a quick order.";
    } else if (type === 'location') {
      msg = "Salam! I am traveling to Swat and need exact location directions to your Mingora Bypass branch.";
    } else if (type === 'tourist') {
      msg = "Salam Hujra Team! We are tourists visiting Swat Valley. Do you have family seating / parking available?";
    }
    window.open(`https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Options Card with Liquid Glass */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-80 max-w-sm bg-[#0d0d0d]/95 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(37,211,102,0.25)] text-white animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#25d366] to-[#075e54] flex items-center justify-center shadow-md">
                <WhatsAppIconSvg size={18} className="text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffd977] via-[#f5bd55] to-[#c67e26]">
                  Hujra Swat Concierge
                </h4>
                <div className="flex items-center space-x-1.5 text-[10px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Online • Mingora Swat Bypass</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10"
              aria-label="Close WhatsApp Concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => handleAction('menu')}
              className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/5 hover:border-emerald-500/40 transition flex items-center justify-between group text-xs cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <span className="text-base">🥘</span>
                <span className="font-semibold text-gray-200 group-hover:text-white">Order Food on WhatsApp</span>
              </div>
              <span className="text-[10px] text-[#f5bd55]">Fast</span>
            </button>

            <button
              onClick={() => handleAction('tourist')}
              className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/5 hover:border-emerald-500/40 transition flex items-center justify-between group text-xs cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <span className="text-base">🏔️</span>
                <span className="font-semibold text-gray-200 group-hover:text-white">Tourist & Family Assistance</span>
              </div>
              <span className="text-[10px] text-emerald-400">VIP</span>
            </button>

            <button
              onClick={() => handleAction('location')}
              className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/5 hover:border-emerald-500/40 transition flex items-center justify-between group text-xs cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <span className="text-base">📍</span>
                <span className="font-semibold text-gray-200 group-hover:text-white">Live Location on WhatsApp</span>
              </div>
              <span className="text-[10px] text-gray-400">Map</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking?.();
              }}
              className="w-full text-left p-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/10 hover:from-amber-500/30 border border-amber-500/30 transition flex items-center justify-between group text-xs cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <span className="text-base">👑</span>
                <span className="font-semibold text-[#ffd977] group-hover:text-white">Book Majlis / Royal Dastarkhwan</span>
              </div>
              <span className="text-[10px] text-[#ffd977]">Book</span>
            </button>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-400">
            <span>Call Hotline: {RESTAURANT_PHONE}</span>
            <button 
              onClick={() => handleAction('call')}
              className="text-[#f5bd55] hover:underline flex items-center space-x-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>Direct Call</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Trigger: Realistic Liquid Glass Orb */}
      <button
        id="floating-whatsapp-widget"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Quick Order"
        className="group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 active:scale-95 cursor-pointer
          backdrop-blur-3xl bg-gradient-to-b from-[#2bf075]/95 via-[#22c75f]/90 to-[#0e7d38]/95
          border-2 border-white/60 border-t-white/90 border-b-emerald-950/70
          shadow-[0_12px_40px_rgba(37,211,102,0.55),inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-3px_6px_rgba(0,0,0,0.4)]
          hover:shadow-[0_18px_50px_rgba(37,211,102,0.75),inset_0_3px_5px_rgba(255,255,255,1)]"
      >
        {/* Specular curved liquid glass highlight */}
        <div className="absolute inset-x-2 top-1 h-1/2 bg-gradient-to-b from-white/60 via-white/20 to-transparent rounded-t-full pointer-events-none" />
        
        {/* Animated radar rings */}
        <span className="absolute -inset-1 rounded-full border border-emerald-400/40 animate-ping pointer-events-none opacity-60"></span>

        {/* 3D Realistic WhatsApp Emblem */}
        <div className="relative text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)] transform group-hover:rotate-6 transition-transform">
          <WhatsAppIconSvg size={34} />
        </div>

        {/* Tourist Notification Badge */}
        <span className="absolute -top-1 -left-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-extrabold text-[9px] shadow-[0_2px_8px_rgba(0,0,0,0.6)] border border-white/40 flex items-center space-x-0.5">
          <span>⚡</span>
          <span>Order</span>
        </span>
      </button>
    </div>
  );
};
