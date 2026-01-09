// src/components/Hotels/PopularDestinations.tsx
import React from 'react';
import { MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  hotels: number;
  avgPrice: number;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Goa',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600',
    hotels: 1250,
    avgPrice: 5500,
  },
  {
    id: 2,
    name: 'Jaipur',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600',
    hotels: 850,
    avgPrice: 4500,
  },
  {
    id: 3,
    name: 'Udaipur',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600',
    hotels: 650,
    avgPrice: 6500,
  },
  {
    id: 4,
    name: 'Manali',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600',
    hotels: 720,
    avgPrice: 4000,
  },
];

export const PopularDestinations: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
              <h2 className="text-4xl font-bold text-gray-900">
                Popular Destinations
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Top picks for your next adventure
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{destination.country}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{destination.name}</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <div className="text-white/80">{destination.hotels}+ hotels</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/80">From</div>
                      <div className="text-lg font-bold">₹{destination.avgPrice.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
