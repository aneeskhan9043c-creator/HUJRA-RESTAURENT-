import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Sparkles, MessageSquare, MapPin } from 'lucide-react';
import { ReservationDetails } from '../types';
import { RESTAURANT_WHATSAPP } from '../data/dishes';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationDetails>({
    fullName: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: 4,
    seatingArea: 'Traditional Majlis',
    notes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [reservationRef, setReservationRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = 'HJR-SWAT-' + Math.floor(1000 + Math.random() * 9000);
    setReservationRef(refCode);
    setBookingConfirmed(true);
  };

  const handleWhatsAppReservation = () => {
    const msg = `*Assalam-o-Alaikum Hujra Restaurant (Mingora Swat Bypass)*%0A%0A` +
      `*Table Reservation Request:*%0A` +
      `• *Guest Name:* ${formData.fullName || 'Guest'}%0A` +
      `• *Phone:* ${formData.phone || 'N/A'}%0A` +
      `• *Date:* ${formData.date}%0A` +
      `• *Time:* ${formData.time}%0A` +
      `• *Guests:* ${formData.guests} Persons%0A` +
      `• *Seating Area:* ${formData.seatingArea}%0A` +
      (formData.notes ? `• *Special Notes:* ${formData.notes}%0A` : '');
    
    window.open(`https://wa.me/${RESTAURANT_WHATSAPP}?text=${msg}`, '_blank');
  };

  const handleResetAndClose = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      <div className="relative bg-[#141414] border border-white/10 rounded-2xl max-w-lg w-full text-white shadow-2xl overflow-hidden my-8 z-10">
        {/* Top Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#191919]">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-[#e89f4b]/20 text-[#e89f4b] rounded-lg">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Reserve a Table / Majlis</h3>
              <p className="text-xs text-gray-400">Mingora Swat Bypass • Khyber Hospitality</p>
            </div>
          </div>
          <button 
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {bookingConfirmed ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-500/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="inline-flex items-center space-x-1.5 text-[#e89f4b] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Reservation Received</span>
            </div>
            <h4 className="text-2xl font-bold mb-2">We Look Forward to Welcoming You</h4>
            <p className="text-xs text-gray-400 max-w-sm mx-auto mb-6">
              A table has been requested in our <span className="text-white font-medium">{formData.seatingArea}</span> under your name.
            </p>

            <div className="bg-[#1b1b1b] border border-white/10 rounded-xl p-5 text-left text-xs space-y-2.5 mb-6">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Reservation Reference:</span>
                <span className="font-mono text-[#e89f4b] font-bold">{reservationRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Guest Name:</span>
                <span className="font-semibold text-white">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date & Time:</span>
                <span className="font-semibold text-white">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Guests:</span>
                <span className="font-semibold text-white">{formData.guests} Persons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Seating Area:</span>
                <span className="font-semibold text-white">{formData.seatingArea}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleWhatsAppReservation}
                className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Notify Restaurant on WhatsApp</span>
              </button>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3 bg-[#e89f4b] hover:bg-white hover:text-black text-black font-semibold rounded-full text-xs uppercase tracking-wider transition"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-1 uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Asadullah Khan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#e89f4b]"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1 uppercase tracking-wider">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0345-9043000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#e89f4b]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-gray-400 mb-1 uppercase tracking-wider">Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#e89f4b]"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1 uppercase tracking-wider">Time Slot *</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#e89f4b]"
                >
                  <option value="12:30">12:30 PM (Lunch)</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="18:30">6:30 PM (Dinner)</option>
                  <option value="19:30">7:30 PM (Peak)</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="22:00">10:00 PM</option>
                  <option value="23:30">11:30 PM (Late Night)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-1 uppercase tracking-wider">Guests *</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#e89f4b]"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Person' : 'Persons'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Seating Style Choice */}
            <div>
              <label className="block text-gray-400 mb-1.5 uppercase tracking-wider">Seating Area Preference</label>
              <div className="grid grid-cols-2 gap-2">
                {(['Traditional Majlis', 'Family Hall', 'VIP Private Cabin', 'River-View Terrace'] as const).map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setFormData({ ...formData, seatingArea: area })}
                    className={`py-2 px-3 rounded-xl border text-left transition ${
                      formData.seatingArea === area
                        ? 'border-[#e89f4b] bg-[#e89f4b]/10 text-white'
                        : 'border-white/10 bg-[#191919] text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{area}</div>
                    <div className="text-[10px] text-gray-400">
                      {area === 'Traditional Majlis' && 'Carpeted floor & Pashtun cushions'}
                      {area === 'Family Hall' && 'Spacious dining for families'}
                      {area === 'VIP Private Cabin' && 'Exclusive private dining rooms'}
                      {area === 'River-View Terrace' && 'Fresh Swat River breeze & view'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-1 uppercase tracking-wider">Special Requests / Dish Pre-Order</label>
              <textarea
                rows={2}
                placeholder="e.g. Pre-order 1kg Dum Pukht, mild spices for children, birthday setup"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#e89f4b]"
              />
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#e89f4b] hover:bg-white hover:text-black text-black font-bold rounded-full text-xs uppercase tracking-wider transition shadow-lg cursor-pointer"
              >
                Confirm Table Reservation
              </button>

              <button
                type="button"
                onClick={handleWhatsAppReservation}
                className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Booking</span>
              </button>

              <p className="text-[10px] text-center text-gray-500 mt-1">
                Reservations are held for 20 minutes past the scheduled booking time.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
