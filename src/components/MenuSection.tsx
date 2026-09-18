import React, { useState } from 'react';
import { ShoppingBag, ChevronRight, Star, Check, Sparkles, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Dish } from '../types';
import { RESTAURANT_WHATSAPP, FALLBACK_IMAGE } from '../data/dishes';
import { WhatsAppIconSvg } from './WhatsAppLiquidGlass';

interface MenuSectionProps {
  dishes: Dish[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onAddToCart: (dish: Dish) => void;
  onSelectDish: (dish: Dish) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  dishes,
  activeCategory,
  onSelectCategory,
  onAddToCart,
  onSelectDish,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [addedDishId, setAddedDishId] = useState<string | null>(null);

  const categories = [
    { name: 'All', emoji: '🍽️' },
    { name: 'Hujra Special', emoji: '👑' },
    { name: 'Chicken & Handi', emoji: '🍗' },
    { name: 'Biryani & Rice', emoji: '🍚' },
    { name: 'Chinese', emoji: '🥢' },
    { name: 'Spicy & BBQ', emoji: '🍢' }
  ];

  // Filter dishes based on active category
  const filteredDishes = activeCategory === 'All'
    ? dishes
    : dishes.filter(dish => dish.category === activeCategory);

  // Limit display to 4 recipes by default
  const displayedDishes = showAll ? filteredDishes : filteredDishes.slice(0, 4);

  const handleCategoryChange = (category: string) => {
    setShowAll(false);
    onSelectCategory(category);
  };

  const handleAddClick = (e: React.MouseEvent, dish: Dish) => {
    e.stopPropagation();
    onAddToCart(dish);
    setAddedDishId(dish.id);
    setTimeout(() => {
      setAddedDishId(null);
    }, 1200);
  };

  const handleWhatsAppOrder = (e: React.MouseEvent, dish: Dish) => {
    e.stopPropagation();
    const msg = `Assalam-o-Alaikum! I want to order "${dish.name}" (${dish.price}) from Hujra Restaurant Swat Bypass.`;
    window.open(`https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="menu" className="px-4 sm:px-6 lg:px-12 py-14 sm:py-20 bg-gradient-to-b from-[#080808] via-[#0d0d0d] to-[#0a0a0a] relative border-t border-amber-500/15 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Golden Header with Cartoonish Emojis */}
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs mb-3 font-bold bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-600/15 border border-amber-400/30 px-3.5 sm:px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(232,159,75,0.2)]">
            <span className="text-base animate-bounce">🥘</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14] uppercase tracking-wider">
              خالص روایتی ذائقہ • Authentic Frontier Recipes
            </span>
            <span className="text-base">✨</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Signature{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#d48806] drop-shadow-[0_2px_15px_rgba(232,159,75,0.4)]">
              Recipe Collection
            </span>
          </h2>
          <p className="text-gray-300 mt-2 sm:mt-3 max-w-xl mx-auto text-xs sm:text-base leading-relaxed px-2">
            From slow-cooked clay Dum Pukht and Desi Murgh Handi to spicy charcoal BBQ and high-flame Chinese wok delicacies.
          </p>
        </motion.div>

        {/* Categories Bar with Cartoonish Emojis - Touch Friendly & Horizontally Scrollable on Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex overflow-x-auto sm:overflow-visible sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 pb-2 sm:pb-0 no-scrollbar px-1"
        >
          {categories.map(cat => {
            const isActive = activeCategory === cat.name;
            return (
              <button 
                key={cat.name}
                id={`cat-${cat.name.toLowerCase().replace(/[\s&]+/g, '-')}`}
                onClick={() => handleCategoryChange(cat.name)}
                className={`whitespace-nowrap flex-shrink-0 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 font-bold cursor-pointer flex items-center space-x-2 min-h-[44px] ${
                  isActive 
                  ? 'bg-gradient-to-r from-[#ffd977] via-[#f5bd55] to-[#c67e26] text-black shadow-[0_4px_20px_rgba(232,159,75,0.45)] scale-105' 
                  : 'bg-[#161616] text-gray-300 hover:bg-[#222] hover:text-white border border-white/10 hover:border-amber-400/40'
                }`}
              >
                <span className="text-base filter drop-shadow-sm">{cat.emoji}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Recipe Cards Grid (Showing 3-4 initial items or expanded) */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-[#151515]/60 rounded-3xl border border-white/10 max-w-lg mx-auto backdrop-blur-md">
            <p className="text-gray-400 mb-4 text-sm">No dishes found in this category.</p>
            <button
              onClick={() => handleCategoryChange('All')}
              className="text-xs uppercase tracking-wider text-[#ffd666] font-bold hover:underline cursor-pointer"
            >
              Show All Dishes
            </button>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedDishes.map((dish, idx) => {
                const isAdded = addedDishId === dish.id;
                return (
                  <motion.div 
                    key={dish.id} 
                    id={`dish-${dish.id}`}
                    initial={{ opacity: 0, y: 35, scale: 0.93 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.5, delay: (idx % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    onClick={() => onSelectDish(dish)}
                    className="bg-[#131313]/90 backdrop-blur-xl rounded-3xl p-4 sm:p-5 border border-white/10 hover:border-amber-400/50 group transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Dish Image with Fallback and Badges */}
                      <div className="relative overflow-hidden rounded-2xl mb-4 bg-black/40">
                        <img 
                          src={dish.image} 
                          alt={dish.name} 
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = FALLBACK_IMAGE;
                          }}
                          className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition duration-500 ease-out" 
                        />
                        <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs text-[#ffd666] flex items-center font-bold border border-amber-400/30 shadow-md">
                          <Star className="w-3.5 h-3.5 mr-1" fill="currentColor" /> {dish.rating}
                        </div>

                        {dish.isChefSpecial && (
                          <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-amber-400 to-amber-600 text-black px-2.5 py-0.5 rounded-lg text-[10px] uppercase font-extrabold tracking-wider shadow-md flex items-center space-x-1">
                            <span>👑</span>
                            <span>Specialty</span>
                          </div>
                        )}

                        {dish.prepTime && (
                          <div className="absolute bottom-2.5 left-2.5 bg-black/80 backdrop-blur-md text-gray-200 px-2.5 py-0.5 rounded-lg text-[10px] flex items-center space-x-1 border border-white/10">
                            <Clock className="w-3 h-3 text-[#ffd666]" />
                            <span>{dish.prepTime}</span>
                          </div>
                        )}
                      </div>

                      <div className="text-[11px] uppercase tracking-wider text-[#ffd666] font-bold mb-1">
                        {dish.category}
                      </div>

                      <h3 className="text-lg font-bold mb-1.5 text-white group-hover:text-[#ffd666] transition-colors leading-snug">
                        {dish.name}
                      </h3>

                      {dish.serving && (
                        <div className="text-[11px] text-gray-400 font-medium mb-2">
                          {dish.serving}
                        </div>
                      )}

                      <p className="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    {/* Pricing and Action Buttons */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#ffd666] to-[#faad14] text-xl font-extrabold font-mono drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                          {dish.price}
                        </span>
                        <span className="block text-[10px] text-gray-400">PKR Fresh Daily</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        {/* Direct WhatsApp Quick Order Button with Liquid Glass Effect */}
                        <button
                          type="button"
                          onClick={(e) => handleWhatsAppOrder(e, dish)}
                          title="Order this recipe on WhatsApp"
                          aria-label={`Order ${dish.name} on WhatsApp`}
                          className="relative group/wa p-2.5 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden
                            backdrop-blur-xl bg-gradient-to-b from-[#2bf075]/90 to-[#0e7d38]/95
                            border border-white/40 border-t-white/80 border-b-emerald-950/60
                            shadow-[0_4px_15px_rgba(37,211,102,0.4),inset_0_1px_2px_rgba(255,255,255,0.7)]
                            hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:-translate-y-0.5"
                        >
                          <div className="absolute inset-x-1 top-0.5 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-lg pointer-events-none" />
                          <WhatsAppIconSvg size={18} className="text-white drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.4)]" />
                        </button>

                        {/* Add to Bag */}
                        <button 
                          id={`add-btn-${dish.id}`}
                          type="button"
                          onClick={(e) => handleAddClick(e, dish)}
                          title="Add to Order Bag"
                          aria-label={`Add ${dish.name} to cart`}
                          className={`p-2.5 rounded-xl transition-all duration-300 cursor-pointer border border-white/10 ${
                            isAdded 
                            ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]' 
                            : 'bg-[#222] hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 text-gray-200 hover:text-black hover:border-amber-300'
                          }`}
                        >
                          {isAdded ? (
                            <Check className="w-4 h-4 text-white" />
                          ) : (
                            <ShoppingBag className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Read More Recipes Button with Golden Accent & Smooth State */}
            {filteredDishes.length > 4 && (
              <div className="mt-12 text-center">
                <button
                  id="read-more-recipes-btn"
                  type="button"
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-[#161616] hover:bg-gradient-to-r hover:from-[#ffd977] hover:via-[#f5bd55] hover:to-[#c67e26] text-white hover:text-black border border-amber-400/40 hover:border-amber-300 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.6)] cursor-pointer group"
                >
                  <span>
                    {showAll 
                      ? 'Show Fewer Recipes' 
                      : `Read More Recipes (${filteredDishes.length - 4} More)`}
                  </span>
                  <ChevronRight 
                    className={`w-4 h-4 transition-transform duration-300 ${
                      showAll ? '-rotate-90' : 'rotate-90 group-hover:translate-y-0.5'
                    }`} 
                  />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
