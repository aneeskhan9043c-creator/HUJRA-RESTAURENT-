import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check, Compass, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_PHONE, RESTAURANT_WHATSAPP, RESTAURANT_LOCATION_TEXT } from '../data/dishes';
import { RealisticWhatsAppButton } from './WhatsAppLiquidGlass';

interface FooterProps {
  onOpenReservation: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 3000);
    }
  };

  const whatsappFooterMsg = "Salam Hujra Restaurant Mingora Swat Bypass! I have an inquiry about dining and tourist family booking.";

  return (
    <footer id="contact" className="bg-[#060606] border-t border-amber-500/20 text-gray-400 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Brand & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-2xl font-extrabold tracking-wider text-white mb-3 flex items-center space-x-2">
              <span className="text-xl">👑</span>
              <span className="font-serif-luxury tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14]">
                HUJRA
              </span>
              <span className="text-amber-400">.</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400 mb-5">
              Taste crafted to perfection. Celebrating Khyber traditions, slow clay Dum Pukht, charcoal grilled delights, and high-flame Chinese wok creations on the banks of Swat River.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={onOpenReservation}
                className="px-5 py-2.5 bg-gradient-to-r from-[#ffd977] via-[#f5bd55] to-[#c67e26] hover:from-white hover:to-white hover:text-black text-black font-extrabold text-xs rounded-full uppercase tracking-wider transition text-center shadow-[0_4px_15px_rgba(232,159,75,0.3)] cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <span>🛎️</span>
                <span>Book a Table</span>
              </button>
              
              <RealisticWhatsAppButton
                label="WhatsApp"
                message={whatsappFooterMsg}
                variant="compact"
                className="py-2.5"
              />
            </div>
          </motion.div>

          {/* Column 2: Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#ffd666]" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] to-[#ffd666]">Dining Hours</span>
              <span className="text-xs">⏱️</span>
            </h4>
            <ul className="text-xs space-y-2.5">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon – Thu (Lunch & Dinner):</span>
                <span className="text-white font-mono font-bold">11:30 AM – 1:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Fri – Sun (Weekend Peak):</span>
                <span className="text-white font-mono font-bold">11:30 AM – 2:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Family Majlis Cabins:</span>
                <span className="text-white font-mono font-bold">All Day Open</span>
              </li>
              <li className="text-[11px] text-[#ffd666] pt-1 font-semibold flex items-center space-x-1">
                <span>🛵</span>
                <span>Fast Delivery throughout Mingora & Fizagat</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Contact & Location */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#ffd666]" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] to-[#ffd666]">Swat Bypass Hub</span>
              <span className="text-xs">🏔️</span>
            </h4>
            <ul className="text-xs space-y-3">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#ffd666] shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {RESTAURANT_LOCATION_TEXT}, Near River Swat Bypass Bridge, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#ffd666] shrink-0" />
                <a href={`tel:${RESTAURANT_PHONE.replace(/\s+/g, '')}`} className="text-gray-300 hover:text-[#ffd666] transition font-mono font-bold">
                  {RESTAURANT_PHONE}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#ffd666] shrink-0" />
                <a href="mailto:info@hujraswat.com" className="text-gray-300 hover:text-[#ffd666] transition">
                  info@hujraswat.com
                </a>
              </li>
              <li className="flex items-center space-x-2.5 pt-1">
                <Compass className="w-4 h-4 text-[#ffd666] shrink-0" />
                <button
                  onClick={() => onNavigate('location')}
                  className="text-xs text-[#ffd666] hover:underline font-bold flex items-center space-x-1 cursor-pointer"
                >
                  <span>View Interactive GPS Map</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter & Updates */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 flex items-center space-x-1.5">
              <span>✨</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] to-[#ffd666]">Hujra VIP Circle</span>
            </h4>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Stay updated with fresh seasonal Swat River trout arrivals, special weekend Dastarkhwan dates, and tourist discount vouchers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter email for tourist perks"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#141414] border border-amber-500/20 rounded-full px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-white hover:to-white text-black rounded-full transition cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {newsletterSubscribed && (
                <div className="text-[11px] text-emerald-400 flex items-center space-x-1 font-bold">
                  <Check className="w-3.5 h-3.5" />
                  <span>🎉 Welcome to the Royal Hujra circle!</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} HUJRA Restaurant (Mingora Swat Bypass). Pure Frontier Hospitality.</span>
            <span>🏔️</span>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 font-medium">
            <button onClick={() => onNavigate('home')} className="hover:text-[#ffd666] transition cursor-pointer min-h-[44px] flex items-center">Home</button>
            <button onClick={() => onNavigate('menu')} className="hover:text-[#ffd666] transition cursor-pointer min-h-[44px] flex items-center">Recipes</button>
            <button onClick={() => onNavigate('tourist-guide')} className="hover:text-[#ffd666] transition cursor-pointer min-h-[44px] flex items-center">Tourist Guide</button>
            <button onClick={() => onNavigate('location')} className="hover:text-[#ffd666] transition cursor-pointer min-h-[44px] flex items-center">Map & Location</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#ffd666] transition cursor-pointer min-h-[44px] flex items-center">Contact</button>
          </div>
        </div>

        {/* Premium Luxury Designer Signature: Designed by ANEES */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 pt-6 border-t border-amber-500/15 flex flex-col items-center justify-center text-center"
        >
          <div className="group relative inline-flex items-center space-x-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 via-[#ffd666]/15 to-amber-500/10 border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300 shadow-[0_0_25px_rgba(232,159,75,0.18)] hover:shadow-[0_0_35px_rgba(232,159,75,0.35)]">
            <span className="text-base drop-shadow-[0_0_8px_rgba(232,159,75,0.6)]">👑</span>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-300 font-semibold">
                Designed by
              </span>
              <span className="font-serif-luxury font-black text-sm sm:text-base tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14] drop-shadow-[0_2px_12px_rgba(232,159,75,0.6)]">
                ANEES
              </span>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-[#ffd666] animate-pulse" />
          </div>
          <p className="text-[10px] text-gray-500 mt-2.5 tracking-wider font-medium">
            Exclusively Crafted for Royal Dining • Pure Frontier Hospitality
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
