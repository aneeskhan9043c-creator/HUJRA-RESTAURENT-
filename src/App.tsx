import React, { useState } from 'react';
import { DISHES } from './data/dishes';
import { Dish, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { TouristExperienceSection } from './components/TouristExperienceSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { DishModal } from './components/DishModal';
import { FloatingLiquidWhatsAppWidget } from './components/WhatsAppLiquidGlass';

export default function HujraRestaurant() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Initialized empty - no automatic draft pre-filled items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  // Cart total count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (dish: Dish, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.dish.id === dish.id);
      if (existing) {
        return prev.map(item =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { dish, quantity }];
    });
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCartItems(prev => prev.filter(item => item.dish.id !== dishId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderNow = () => {
    handleNavigate('menu');
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans selection:bg-amber-400 selection:text-black">
      {/* Top Navbar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOrderNow={handleOrderNow}
          onBookTable={() => setIsReservationOpen(true)}
        />

        {/* Menu Section */}
        <MenuSection
          dishes={DISHES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onAddToCart={(dish) => handleAddToCart(dish, 1)}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />

        {/* Special Tourist Concierge & Experience Section */}
        <TouristExperienceSection
          onBookMajlis={() => setIsReservationOpen(true)}
        />

        {/* Google Maps & Location Section (Mingora Swat Bypass) */}
        <LocationSection />
      </main>

      {/* Footer & Contact */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Dish Quick Detail Modal */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Realistic Liquid Glass WhatsApp Widget */}
      <FloatingLiquidWhatsAppWidget onOpenBooking={() => setIsReservationOpen(true)} />
    </div>
  );
}
