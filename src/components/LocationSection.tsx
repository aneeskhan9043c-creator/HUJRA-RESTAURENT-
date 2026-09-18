import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_PHONE, RESTAURANT_WHATSAPP, RESTAURANT_LOCATION_TEXT } from '../data/dishes';
import { RealisticWhatsAppButton, WhatsAppIconSvg } from './WhatsAppLiquidGlass';

export const LocationSection: React.FC = () => {
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Mingora+Bypass+Road+Swat+Khyber+Pakhtunkhwa+Pakistan";
  const locationWhatsAppMsg = "Salam Hujra Restaurant! I am traveling on Mingora Swat Bypass and need exact live location pin.";

  return (
    <section id="location" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#070707] border-t border-amber-500/20 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-600/15 border border-amber-400/30 px-3.5 sm:px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(232,159,75,0.2)]">
            <span className="text-base animate-bounce">📍</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14]">
              لوکیشن اور پتہ • Swat Valley Scenic Bypass
            </span>
            <span className="text-base">🏔️</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Visit Us on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14] drop-shadow-[0_2px_15px_rgba(232,159,75,0.4)]">
              Mingora Swat Bypass
            </span>
          </h2>
          <p className="text-gray-300 mt-2 sm:mt-3 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed px-2">
            Conveniently situated along the scenic Swat River Bypass road with majestic mountain views, expansive traditional Majlis halls, and dedicated tourist parking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Amenities, and Direct Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -35, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#121212]/95 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300"
          >
            <div className="space-y-6">
              {/* Main Address Card */}
              <div className="flex items-start space-x-4 pb-6 border-b border-white/10">
                <div className="p-3.5 bg-gradient-to-br from-amber-400 to-amber-600 text-black rounded-2xl shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-extrabold text-lg mb-1 flex items-center space-x-1.5">
                    <span>Hujra Restaurant</span>
                    <span className="text-sm">👑</span>
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2 font-medium">
                    {RESTAURANT_LOCATION_TEXT}, Pakistan
                  </p>
                  <p className="text-xs text-amber-300/80 flex items-center space-x-1">
                    <span>🌊</span>
                    <span>Landmark: Near Fizagat River Bank / Main Mingora Bypass Junction</span>
                  </p>
                </div>
              </div>

              {/* Operating Hours & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#181818] p-3.5 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-2 text-[#ffd666] font-bold mb-1">
                    <Clock className="w-4 h-4" />
                    <span>Serving Hours</span>
                  </div>
                  <p className="text-white font-extrabold">11:30 AM – 2:00 AM</p>
                  <p className="text-[11px] text-gray-400">Open 7 Days a Week</p>
                </div>

                <div className="bg-[#181818] p-3.5 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold mb-1">
                    <WhatsAppIconSvg size={16} />
                    <span>WhatsApp Line</span>
                  </div>
                  <p className="text-white font-extrabold">{RESTAURANT_PHONE}</p>
                  <p className="text-[11px] text-gray-400">Instant Orders & Table Help</p>
                </div>
              </div>

              {/* Special Swat Bypass Amenities */}
              <div className="space-y-2.5 text-xs text-gray-300 pt-2">
                <div className="flex items-center space-x-2.5">
                  <span className="text-base">👨‍👩‍👧‍👦</span>
                  <span>Spacious Family Dining & Private VIP Majlis Cabins</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-base">🍗</span>
                  <span>Fresh Live Desi Murgh & Shinwari Karahi Cooking</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-base">🚗</span>
                  <span>Ample Safe Car & Tourist Bus Parking</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-base">🌊</span>
                  <span>River Swat Cool Breeze Open-Air Terrace</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-gradient-to-r from-[#ffd977] via-[#f5bd55] to-[#c67e26] hover:from-white hover:to-white hover:text-black text-black font-extrabold rounded-full text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition shadow-[0_4px_20px_rgba(232,159,75,0.35)] text-center cursor-pointer"
              >
                <Navigation className="w-4 h-4 font-bold" />
                <span>Get Directions (Maps)</span>
              </a>

              <RealisticWhatsAppButton
                label="WhatsApp Pin"
                message={locationWhatsAppMsg}
                variant="compact"
                className="py-3.5"
              />
            </div>
          </motion.div>

          {/* Right Column: Google Maps Interactive Embed for Mingora Bypass Swat */}
          <motion.div 
            initial={{ opacity: 0, x: 35, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#121212]/95 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative min-h-[380px] lg:min-h-[440px] flex flex-col"
          >
            {/* Top Bar for Map */}
            <div className="px-5 py-3 bg-[#181818] border-b border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-gray-300 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-white font-bold">Live GPS Map • Mingora Bypass, Swat Valley</span>
              </div>
              <a
                href="https://maps.google.com/?q=Mingora+Bypass+Road+Swat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffd666] hover:underline flex items-center space-x-1 font-semibold"
              >
                <span>Expand Full Map</span>
              </a>
            </div>

            {/* Embedded Google Map Iframe */}
            <div className="relative flex-1 w-full min-h-[350px]">
              <iframe
                title="Hujra Restaurant Mingora Swat Bypass Google Maps"
                src="https://maps.google.com/maps?q=Mingora+Bypass+Swat+Khyber+Pakhtunkhwa&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0 filter invert-[90%] hue-rotate-180 contrast-[105%]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
