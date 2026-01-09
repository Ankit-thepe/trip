// src/components/Hotels/HotelCategories.tsx
import React from 'react';
import { Home, Building2, Crown, Tent, Ship, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

interface Category {
  id: number;
  name: string;
  icon: any;
  count: number;
  color: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Hotels',
    icon: Building2,
    count: 1250,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Resorts',
    icon: Crown,
    count: 450,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'Villas',
    icon: Home,
    count: 320,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    name: 'Camps',
    icon: Tent,
    count: 180,
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 5,
    name: 'Houseboats',
    icon: Ship,
    count: 95,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 6,
    name: 'Homestays',
    icon: Mountain,
    count: 560,
    color: 'from-indigo-500 to-blue-500',
  },
];

export const HotelCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse by Property Type
          </h2>
          <p className="text-xl text-gray-600">
            Find the perfect accommodation for your travel style
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-12 h-12 mb-4 mx-auto" />
                  <h3 className="text-lg font-bold text-center mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-center text-white/90">
                    {category.count}+ properties
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
