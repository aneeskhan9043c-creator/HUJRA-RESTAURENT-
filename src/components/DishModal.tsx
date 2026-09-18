import React, { useState } from 'react';
import { X, Star, Clock, Flame, ShoppingBag, Plus, Minus, Check } from 'lucide-react';
import { Dish } from '../types';
import { RESTAURANT_WHATSAPP, FALLBACK_IMAGE } from '../data/dishes';
import { RealisticWhatsAppButton } from './WhatsAppLiquidGlass';

interface DishModalProps {
  dish: Dish | null;
  onClose: () => void;
  onAddToCart: (dish: Dish, quantity: number) => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!dish) return null;

  const handleAdd = () => {
    onAddToCart(dish, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 800);
  };

  const handleWhatsAppOrder = () => {
    const totalAmount = (dish.priceNum * quantity).toLocaleString();
    const msg = `Assalam-o-Alaikum! I want to order ${quantity}x "${dish.name}" (Total: Rs. ${totalAmount}) from Hujra Restaurant Swat Bypass.`;
    window.open(`https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      <div className="relative bg-[#141414] border border-white/10 rounded-2xl max-w-lg w-full text-white shadow-2xl overflow-hidden my-8 z-10">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-gray-300 hover:text-white transition backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Banner Image */}
        <div className="relative h-64 w-full overflow-hidden bg-black/40">
          <img
            src={dish.image}
            alt={dish.name}
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
          
          <div className="absolute bottom-4 left-6 flex items-center space-x-3">
            <span className="bg-[#e89f4b] text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {dish.category}
            </span>
            <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#e89f4b] flex items-center font-bold">
              <Star className="w-3.5 h-3.5 mr-1" fill="currentColor" /> {dish.rating}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-xl sm:text-2xl font-bold">{dish.name}</h3>
            <span className="text-xl sm:text-2xl font-bold text-[#e89f4b] font-mono">{dish.price}</span>
          </div>

          {dish.serving && (
            <div className="text-xs text-[#e89f4b] font-semibold mb-3">
              Serving: {dish.serving}
            </div>
          )}

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
            {dish.description}
          </p>

          {/* Details badges */}
          <div className="grid grid-cols-3 gap-3 bg-[#1a1a1a] p-3 rounded-xl border border-white/5 mb-6 text-center text-xs">
            <div>
              <div className="text-gray-400 text-[11px] mb-1 flex items-center justify-center space-x-1">
                <Clock className="w-3 h-3 text-[#e89f4b]" />
                <span>Prep Time</span>
              </div>
              <span className="font-semibold text-white">{dish.prepTime || '20 mins'}</span>
            </div>
            <div>
              <div className="text-gray-400 text-[11px] mb-1 flex items-center justify-center space-x-1">
                <Flame className="w-3 h-3 text-red-400" />
                <span>Spice Level</span>
              </div>
              <div className="flex items-center justify-center space-x-0.5 text-xs text-[#e89f4b]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < (dish.spiceLevel || 3) ? 'text-red-400' : 'text-gray-700'}>
                    ●
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-[11px] mb-1">Calories</div>
              <span className="font-semibold text-white">{dish.calories || '550 kcal'}</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-2 mb-4">
            <span className="text-xs text-gray-400">Order Quantity</span>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded-full bg-[#252525] hover:bg-[#333] flex items-center justify-center text-gray-300 transition"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 font-bold text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded-full bg-[#252525] hover:bg-[#333] flex items-center justify-center text-gray-300 transition"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Action Row with Realistic Liquid Glass WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <RealisticWhatsAppButton
              label="WhatsApp Order"
              onClick={handleWhatsAppOrder}
              variant="compact"
              className="w-full sm:w-auto py-3.5"
            />

            <button
              type="button"
              onClick={handleAdd}
              disabled={justAdded}
              className={`flex-1 w-full py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition shadow-lg cursor-pointer ${
                justAdded
                  ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                  : 'bg-gradient-to-r from-[#ffd977] via-[#f5bd55] to-[#c67e26] hover:from-white hover:to-white hover:text-black text-black shadow-[0_4px_20px_rgba(232,159,75,0.4)]'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Bag!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag • Rs. {(dish.priceNum * quantity).toLocaleString()}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
