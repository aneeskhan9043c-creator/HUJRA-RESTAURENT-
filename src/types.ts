export interface Dish {
  id: string;
  name: string;
  price: string; // e.g. "Rs. 1,850"
  priceNum: number; // e.g. 1850 in PKR
  category: 'Hujra Special' | 'Chicken & Handi' | 'Biryani & Rice' | 'Chinese' | 'Spicy & BBQ';
  image: string;
  rating: number;
  description: string;
  serving?: string; // e.g. "1kg / Serves 3-4" or "Half / Full"
  prepTime?: string;
  spiceLevel?: 1 | 2 | 3 | 4 | 5;
  calories?: string;
  isChefSpecial?: boolean;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface ReservationDetails {
  fullName: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Traditional Majlis' | 'Family Hall' | 'VIP Private Cabin' | 'River-View Terrace';
  notes?: string;
}

