// src/components/Hotels/FeaturedHotels.tsx
import React from 'react';
import { Star, MapPin, Wifi, Coffee, Dumbbell, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  amenities: string[];
  featured?: boolean;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'The Grand Palace Hotel',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    rating: 4.8,
    reviews: 2340,
    price: 8500,
    originalPrice: 12000,
    amenities: ['Free WiFi', 'Pool', 'Gym', 'Restaurant'],
    featured: true,
  },
  {
    id: 2,
    name: 'Beachside Resort & Spa',
    location: 'Goa, India',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    rating: 4.9,
    reviews: 3120,
    price: 12000,
    originalPrice: 15000,
    amenities: ['Beachfront', 'Spa', 'Free WiFi', 'Restaurant'],
    featured: true,
  },
  {
    id: 3,
    name: 'Mountain View Lodge',
    location: 'Manali, India',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    rating: 4.7,
    reviews: 1890,
    price: 5500,
    amenities: ['Mountain View', 'Free WiFi', 'Restaurant', 'Parking'],
  },
  {
    id: 4,
    name: 'Luxury City Hotel',
    location: 'Delhi, India',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    rating: 4.6,
    reviews: 2650,
    price: 7500,
    amenities: ['Free WiFi', 'Gym', 'Business Center', 'Airport Shuttle'],
  },
  {
    id: 5,
    name: 'Heritage Palace',
    location: 'Jaipur, India',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    rating: 4.9,
    reviews: 1450,
    price: 9500,
    originalPrice: 11500,
    amenities: ['Heritage', 'Pool', 'Restaurant', 'Spa'],
    featured: true,
  },
  {
    id: 6,
    name: 'Lakeside Retreat',
    location: 'Udaipur, India',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    rating: 4.8,
    reviews: 2100,
    price: 11000,
    amenities: ['Lake View', 'Restaurant', 'Free WiFi', 'Boat Rides'],
  },
];

const amenityIcons: Record<string, any> = {
  'Free WiFi': Wifi,
  'Wifi': Wifi,
  'Pool': Coffee,
  'Gym': Dumbbell,
  'Restaurant': Coffee,
  'Spa': Award,
};

export const FeaturedHotels: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Hotels
          </h2>
          <p className="text-xl text-gray-600">
            Handpicked stays with exceptional service and great value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {hotel.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                {hotel.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save {Math.round(((hotel.originalPrice - hotel.price) / hotel.originalPrice) * 100)}%
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-indigo-50 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{hotel.rating}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  {hotel.reviews.toLocaleString()} reviews
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.slice(0, 4).map((amenity) => {
                    const Icon = amenityIcons[amenity] || Coffee;
                    return (
                      <div key={amenity} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-700">
                        <Icon className="w-3 h-3" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    {hotel.originalPrice && (
                      <span className="text-sm text-gray-400 line-through mr-2">
                        ₹{hotel.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <div className="text-2xl font-bold text-indigo-600">
                      ₹{hotel.price.toLocaleString()}
                      <span className="text-sm text-gray-500 font-normal">/night</span>
                    </div>
                  </div>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
