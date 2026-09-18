import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_WHATSAPP, FALLBACK_IMAGE } from '../data/dishes';
import { RealisticWhatsAppButton } from './WhatsAppLiquidGlass';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  
  // Checkout flow state
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.dish.priceNum * item.quantity), 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const deliveryFee = orderType === 'delivery' ? (subtotal >= 2500 ? 0 : 150) : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'HUJRA15' || code === 'SWAT15') {
      setDiscountPercent(15);
      setPromoSuccess('15% off applied successfully!');
    } else if (code === 'HUJRA10' || code === 'BYPASS10') {
      setDiscountPercent(10);
      setPromoSuccess('10% off applied successfully!');
    } else {
      setPromoError('Invalid coupon. Try "HUJRA10" or "SWAT15"');
    }
  };

  const handleWhatsAppCheckout = () => {
    let orderText = `*Assalam-o-Alaikum Hujra Restaurant (Mingora Swat Bypass)*%0A%0A`;
    orderText += `*New Order Details:*%0A`;
    cartItems.forEach((item, idx) => {
      orderText += `${idx + 1}. ${item.quantity}x ${item.dish.name} - Rs. ${(item.dish.priceNum * item.quantity).toLocaleString()}%0A`;
    });
    orderText += `%0A*Subtotal:* Rs. ${subtotal.toLocaleString()}`;
    if (discountAmount > 0) {
      orderText += `%0A*Discount (${discountPercent}%):* -Rs. ${discountAmount.toLocaleString()}`;
    }
    orderText += `%0A*Delivery Fee:* ${deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}`;
    orderText += `%0A*Grand Total:* Rs. ${grandTotal.toLocaleString()}%0A`;
    orderText += `%0A*Type:* ${orderType === 'delivery' ? 'Home Delivery' : 'Self Pickup / Takeaway'}`;
    if (customerName) orderText += `%0A*Name:* ${customerName}`;
    if (customerPhone) orderText += `%0A*Phone:* ${customerPhone}`;
    if (deliveryAddress && orderType === 'delivery') orderText += `%0A*Address:* ${deliveryAddress}`;
    
    window.open(`https://wa.me/${RESTAURANT_WHATSAPP}?text=${orderText}`, '_blank');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'HJR-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderSuccess(true);
    onClearCart();
  };

  const handleCloseAll = () => {
    setOrderSuccess(false);
    setIsCheckingOut(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={handleCloseAll}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-white/10 text-white flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#e89f4b]/10 rounded-lg text-[#e89f4b]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold">Your Order Bag</h3>
                <p className="text-xs text-gray-400">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)} item(s) • Swat Bypass Branch
                </p>
              </div>
            </div>
            <button 
              onClick={handleCloseAll}
              className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          {orderSuccess ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6 border border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Order Received!</h4>
              <p className="text-[#e89f4b] font-mono text-sm tracking-wider mb-4">Reference: #{orderId}</p>
              <p className="text-gray-400 text-xs sm:text-sm max-w-xs mb-6">
                Shukriya {customerName || 'valued guest'}! Our kitchen team at Swat Bypass is firing up the clay ovens and wok.
              </p>
              <div className="bg-[#181818] p-4 rounded-xl border border-white/10 text-left w-full mb-6 text-xs text-gray-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Kitchen Status:</span>
                  <span className="text-emerald-400 font-semibold">Preparing Fresh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Estimated Cooking Time:</span>
                  <span className="text-white font-medium">30 - 45 mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Order Method:</span>
                  <span className="capitalize text-white">{orderType} (Mingora & Swat Area)</span>
                </div>
              </div>
              <div className="w-full space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    const notifyMsg = `Salam Hujra Swat! I placed order #${orderId} (${orderType}) for ${customerName || 'guest'}. Please confirm and send kitchen update.`;
                    window.open(`https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(notifyMsg)}`, '_blank');
                  }}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition shadow-lg cursor-pointer"
                >
                  <span>💬 Notify Kitchen on WhatsApp</span>
                </button>
                <button
                  onClick={handleCloseAll}
                  className="w-full py-3 bg-white/10 hover:bg-[#e89f4b] hover:text-black text-white font-semibold rounded-full text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  Return to Menu
                </button>
              </div>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Form */
            <form onSubmit={handlePlaceOrder} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              <div>
                <h4 className="font-bold text-base mb-1">Delivery & Contact Details</h4>
                <p className="text-xs text-gray-400">Provide details for your authentic dining experience</p>
              </div>

              {/* Order Type Toggle */}
              <div className="grid grid-cols-2 gap-2 bg-[#181818] p-1 rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 text-xs uppercase tracking-wider rounded-lg font-semibold transition ${
                    orderType === 'delivery' ? 'bg-[#e89f4b] text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Home Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('pickup')}
                  className={`py-2 text-xs uppercase tracking-wider rounded-lg font-semibold transition ${
                    orderType === 'pickup' ? 'bg-[#e89f4b] text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Takeaway / Pickup
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-gray-400 mb-1 uppercase tracking-wider">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Asfandyar Khan"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#e89f4b]"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-1 uppercase tracking-wider">Mobile Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. 0345-9000000"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#e89f4b]"
                  />
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label className="block text-gray-400 mb-1 uppercase tracking-wider">Delivery Address *</label>
                    <textarea
                      required
                      rows={2}
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="House / Street, Area, Landmark (Mingora, Saidu Sharif, Fizagat...)"
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#e89f4b]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-gray-400 mb-1 uppercase tracking-wider">Payment Method</label>
                  <div className="bg-[#181818] border border-white/10 rounded-xl p-3 flex items-center justify-between">
                    <span className="text-white">Cash on Delivery / JazzCash / Easypaisa</span>
                    <span className="text-xs text-[#e89f4b] font-medium">Standard</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total Payable:</span>
                  <span className="text-[#e89f4b] font-bold text-lg font-mono">Rs. {grandTotal.toLocaleString()}</span>
                </div>

                {/* WhatsApp Direct Order Button with Liquid Glass */}
                <RealisticWhatsAppButton
                  label="Send Order to WhatsApp"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5"
                />

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="w-1/3 py-3 border border-white/20 rounded-full text-xs uppercase tracking-wider hover:bg-white/5 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 bg-[#e89f4b] hover:bg-white hover:text-black text-black font-bold rounded-full text-xs uppercase tracking-wider transition shadow-lg"
                  >
                    In-App Confirm
                  </button>
                </div>
              </div>
            </form>
          ) : cartItems.length === 0 ? (
            /* Empty State */
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4 text-gray-500">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold mb-2">Your Bag is Empty</h4>
              <p className="text-gray-400 text-xs sm:text-sm max-w-xs mb-6">
                Explore our Swat Bypass specials including Peshawari Chapli Kabab, Shinwari Karahi, and Chicken Handi.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#e89f4b] text-black font-semibold rounded-full text-xs uppercase tracking-wider hover:bg-white transition"
              >
                Explore Menu
              </button>
            </div>
          ) : (
            /* Cart Item List */
            <div className="flex-1 flex flex-col justify-between overflow-hidden">
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-3">
                {cartItems.map(item => (
                  <div 
                    key={item.dish.id}
                    className="flex items-center space-x-3 bg-[#181818] p-3 rounded-xl border border-white/5"
                  >
                    <img 
                      src={item.dish.image} 
                      alt={item.dish.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                      className="w-16 h-16 rounded-lg object-cover bg-black/40 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-xs sm:text-sm truncate text-white">{item.dish.name}</h5>
                      <span className="text-[#e89f4b] font-bold text-xs font-mono">{item.dish.price}</span>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, -1)}
                          className="w-6 h-6 rounded bg-[#252525] hover:bg-[#333] flex items-center justify-center text-gray-300 transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, 1)}
                          className="w-6 h-6 rounded bg-[#252525] hover:bg-[#333] flex items-center justify-center text-gray-300 transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between self-stretch">
                      <button
                        onClick={() => onRemoveItem(item.dish.id)}
                        className="text-gray-500 hover:text-red-400 p-1 transition"
                        title="Remove dish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-xs sm:text-sm text-white font-mono">
                        Rs. {(item.dish.priceNum * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Promo Code Form */}
                <form onSubmit={applyPromo} className="pt-2">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. HUJRA10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-[#181818] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#e89f4b]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-white/10 hover:bg-[#e89f4b] hover:text-black text-xs font-semibold rounded-lg transition"
                    >
                      Apply
                    </button>
                  </div>
                  {promoSuccess && <p className="text-[11px] text-emerald-400 mt-1">{promoSuccess}</p>}
                  {promoError && <p className="text-[11px] text-red-400 mt-1">{promoError}</p>}
                </form>
              </div>

              {/* Order Calculations & Checkout CTA */}
              <div className="p-5 sm:p-6 border-t border-white/10 bg-[#161616] space-y-2.5 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white font-mono">Rs. {subtotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({discountPercent}%)</span>
                    <span className="font-mono">-Rs. {discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-400">
                  <span>Delivery ({orderType})</span>
                  <span className="text-white font-mono">{deliveryFee === 0 ? 'FREE (Orders over Rs. 2,500)' : `Rs. ${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-white/10">
                  <span className="text-white">Total</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14] font-extrabold font-mono text-lg">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <RealisticWhatsAppButton
                    label="Quick Order on WhatsApp"
                    onClick={handleWhatsAppCheckout}
                    className="w-full py-3"
                  />

                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full py-3.5 bg-gradient-to-r from-[#ffd977] via-[#f5bd55] to-[#c67e26] hover:from-white hover:to-white hover:text-black text-black font-extrabold rounded-full text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition shadow-[0_4px_20px_rgba(232,159,75,0.4)] cursor-pointer"
                  >
                    <span>Proceed to Delivery Checkout</span>
                    <ArrowRight className="w-4 h-4 font-bold" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
