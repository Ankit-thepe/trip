// src/components/Destinations/TrendingCategories.tsx
import React from 'react';
import { Compass, TrendingUp, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    icon: '🏖️',
    title: 'Beach Escapes',
    count: '245',
    color: 'from-cyan-400 to-blue-500',
    description: 'Sun, sand, and crystal waters'
  },
  {
    icon: '🏔️',
    title: 'Mountain Adventures',
    count: '189',
    color: 'from-emerald-400 to-green-500',
    description: 'Peaks and panoramic views'
  },
  {
    icon: '🏙️',
    title: 'City Breaks',
    count: '312',
    color: 'from-purple-400 to-pink-500',
    description: 'Urban exploration'
  },
  {
    icon: '🏰',
    title: 'Historic Journeys',
    count: '156',
    color: 'from-orange-400 to-red-500',
    description: 'Ancient wonders'
  },
  {
    icon: '🌴',
    title: 'Tropical Paradises',
    count: '178',
    color: 'from-green-400 to-emerald-500',
    description: 'Island getaways'
  },
  {
    icon: '❄️',
    title: 'Winter Wonders',
    count: '134',
    color: 'from-blue-400 to-cyan-500',
    description: 'Snowy adventures'
  }
];

export const TrendingCategories: React.FC = () => {
  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Trending Categories</h2>
          </div>
          <p className="text-gray-600">Explore destinations by popular themes</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-medium rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 overflow-hidden h-full">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{category.title}</h3>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{category.count}+ options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all">
                    Explore
                  </button>
                </div>
              </div>
              
              {/* Animated background effect */}
              <div className={`h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};