import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Calendar, Phone, PhoneCall, MapPin } from 'lucide-react';
import { RESTAURANT_PHONE } from '../data/dishes';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  onNavigate,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  const dialNumber = RESTAURANT_PHONE.replace(/\s+/g, '');

  return (
    <nav className="sticky top-0 z-40 bg-[#070707]/95 backdrop-blur-xl border-b border-amber-500/20 transition-colors shadow-[0_4px_25px_rgba(0,0,0,0.7)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-12 py-3 sm:py-3.5">
        {/* Brand Logo with Radiant Golden Text */}
        <button 
          onClick={() => handleLinkClick('home')}
          className="text-left text-white group flex items-center cursor-pointer"
        >
          <span className="text-xl sm:text-2xl font-serif-luxury tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14] drop-shadow-[0_2px_10px_rgba(232,159,75,0.4)]">
            HUJRA
          </span>
          <span className="text-[#ffd666] text-3xl font-extrabold group-hover:scale-125 transition-transform inline-block ml-0.5 animate-pulse">.</span>
          <span className="hidden sm:inline-flex items-center space-x-1 ml-3 text-[10px] text-amber-200/80 uppercase tracking-widest border-l border-amber-500/30 pl-3">
            <span>Mingora Swat Bypass</span>
            <span className="text-xs">🏔️</span>
          </span>
        </button>

        {/* Desktop Links with Cartoonish Emojis & Golden Text */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-xs uppercase tracking-wider text-gray-300 font-semibold">
          <button 
            onClick={() => handleLinkClick('home')}
            className={`transition-all duration-300 hover:text-[#ffd666] flex items-center space-x-1.5 cursor-pointer py-1 ${
              activeSection === 'home' ? 'text-[#ffd666] border-b-2 border-[#ffd666]' : ''
            }`}
          >
            <span>🏡</span>
            <span>Home</span>
          </button>
          <button 
            onClick={() => handleLinkClick('menu')}
            className={`transition-all duration-300 hover:text-[#ffd666] flex items-center space-x-1.5 cursor-pointer py-1 ${
              activeSection === 'menu' ? 'text-[#ffd666] border-b-2 border-[#ffd666]' : ''
            }`}
          >
            <span>🍗</span>
            <span>Menu</span>
          </button>
          <button 
            onClick={() => handleLinkClick('tourist-guide')}
            className={`transition-all duration-300 hover:text-[#ffd666] flex items-center space-x-1.5 cursor-pointer py-1 ${
              activeSection === 'tourist-guide' ? 'text-[#ffd666] border-b-2 border-[#ffd666]' : ''
            }`}
          >
            <span>🏔️</span>
            <span className="text-amber-300">Tourist Guide</span>
          </button>
          <button 
            onClick={() => handleLinkClick('location')}
            className={`transition-all duration-300 hover:text-[#ffd666] flex items-center space-x-1.5 cursor-pointer py-1 ${
              activeSection === 'location' ? 'text-[#ffd666] border-b-2 border-[#ffd666]' : ''
            }`}
          >
            <span>📍</span>
            <span>Location</span>
          </button>
          <button 
            onClick={() => handleLinkClick('contact')}
            className={`transition-all duration-300 hover:text-[#ffd666] flex items-center space-x-1.5 cursor-pointer py-1 ${
              activeSection === 'contact' ? 'text-[#ffd666] border-b-2 border-[#ffd666]' : ''
            }`}
          >
            <span>📞</span>
            <span>Contact</span>
          </button>
        </div>

        {/* Right Actions: Direct Call Logo + Table Booking + Cart + Mobile Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Header Direct Call Button (Large/Medium screens) */}
          <a
            id="header-call-btn"
            href={`tel:${dialNumber}`}
            title={`Direct Call or Dial ${RESTAURANT_PHONE}`}
            className="hidden sm:inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-amber-500/40 hover:border-amber-400 bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-amber-500/10 hover:bg-amber-500/25 transition-all duration-300 shadow-[0_0_15px_rgba(232,159,75,0.2)] group cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/30 transition-transform">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase tracking-widest text-amber-400 font-bold leading-tight flex items-center space-x-1">
                <span>Call Hotline</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping inline-block" />
              </span>
              <span className="text-xs font-mono font-bold tracking-tight text-white group-hover:text-[#ffd666] transition-colors">
                {RESTAURANT_PHONE}
              </span>
            </div>
          </a>

          {/* Compact Mobile Call Logo Button */}
          <a
            id="header-call-mobile-btn"
            href={`tel:${dialNumber}`}
            title={`Direct Call or Dial ${RESTAURANT_PHONE}`}
            aria-label={`Call ${RESTAURANT_PHONE}`}
            className="sm:hidden relative p-2 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/30 hover:bg-amber-500/40 border border-amber-400/50 text-amber-400 hover:text-white transition-all duration-300 shadow-[0_0_12px_rgba(232,159,75,0.3)] flex items-center justify-center cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-amber-400 animate-pulse" />
          </a>

          {/* Table Booking */}
          <button
            onClick={onOpenReservation}
            className="hidden md:inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-amber-400/40 hover:border-amber-300 bg-amber-500/10 hover:bg-amber-500/20 text-[#ffe58f] hover:text-white transition duration-300 cursor-pointer shadow-[0_0_15px_rgba(232,159,75,0.2)]"
          >
            <span className="text-sm">👑</span>
            <span>Booking</span>
          </button>

          {/* Shopping Bag Button */}
          <button 
            id="nav-cart-btn"
            onClick={onOpenCart}
            aria-label="View Shopping Bag"
            className="relative p-2.5 rounded-full hover:bg-amber-500/15 transition border border-white/10 hover:border-amber-400/50 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffe58f] transition-transform group-hover:scale-110" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 min-w-4 h-4 px-1 bg-gradient-to-r from-amber-400 to-amber-600 text-black text-[10px] font-extrabold rounded-full flex items-center justify-center animate-pulse shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-b border-amber-500/20 px-6 py-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1.5 uppercase tracking-wider text-xs text-gray-300 font-semibold">
            <button 
              onClick={() => handleLinkClick('home')}
              className="text-left py-3 px-2 hover:bg-white/5 rounded-xl hover:text-[#ffd666] transition flex items-center space-x-3 min-h-[44px] cursor-pointer"
            >
              <span className="text-base">🏡</span>
              <span>Home</span>
            </button>
            <button 
              onClick={() => handleLinkClick('menu')}
              className="text-left py-3 px-2 hover:bg-white/5 rounded-xl hover:text-[#ffd666] transition flex items-center space-x-3 min-h-[44px] cursor-pointer"
            >
              <span className="text-base">🍗</span>
              <span>Menu Collection</span>
            </button>
            <button 
              onClick={() => handleLinkClick('tourist-guide')}
              className="text-left py-3 px-2 hover:bg-white/5 rounded-xl hover:text-[#ffd666] transition flex items-center space-x-3 min-h-[44px] text-amber-300 cursor-pointer"
            >
              <span className="text-base">🏔️</span>
              <span>Tourist & Traveler Guide</span>
            </button>
            <button 
              onClick={() => handleLinkClick('location')}
              className="text-left py-3 px-2 hover:bg-white/5 rounded-xl hover:text-[#ffd666] transition flex items-center space-x-3 min-h-[44px] cursor-pointer"
            >
              <span className="text-base">📍</span>
              <span>Location (Mingora Swat Bypass)</span>
            </button>
            <button 
              onClick={() => handleLinkClick('contact')}
              className="text-left py-3 px-2 hover:bg-white/5 rounded-xl hover:text-[#ffd666] transition flex items-center space-x-3 min-h-[44px] cursor-pointer"
            >
              <span className="text-base">📞</span>
              <span>Contact & Hotline</span>
            </button>
          </div>

          <div className="pt-2 flex flex-col space-y-3">
            {/* Direct Dial Call Banner in Mobile Menu */}
            <a 
              id="mobile-drawer-call-btn"
              href={`tel:${dialNumber}`}
              className="w-full min-h-[48px] py-3 bg-gradient-to-r from-amber-600 via-amber-500 to-[#ffd666] text-white font-extrabold rounded-full text-xs uppercase tracking-wider flex items-center justify-center space-x-2.5 shadow-[0_4px_20px_rgba(232,159,75,0.35)] transition-transform active:scale-95 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-white animate-bounce" />
              <span>Direct Dial Call: {RESTAURANT_PHONE}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full min-h-[48px] py-3 bg-gradient-to-r from-[#ffd977] via-[#f5bd55] to-[#c67e26] text-black font-extrabold rounded-full text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(232,159,75,0.4)] cursor-pointer"
            >
              <span>👑</span>
              <span>Book a Table / Majlis</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
