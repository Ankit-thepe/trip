// src/components/Destinations/DestinationGrid.tsx
import React, { useState } from 'react';
import { useDestinationStore } from '../../lib/store/destinations/useDestinationStore';
import { Star, Heart, MapPin, Clock } from 'lucide-react';

export const DestinationGrid: React.FC = () => {
  const updateFilters = useDestinationStore((state) => state.updateFilters);
  const getFilteredDestinations = useDestinationStore((state) => state.getFilteredDestinations);
  
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Beach', 'Mountain', 'City', 'Cultural', 'Adventure', 'Wildlife'];
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    updateFilters({ category });
  };
  
  const filteredDestinations = getFilteredDestinations();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Destinations
          </h2>
          <p className="text-xl text-gray-600">
            Find your perfect getaway from our curated collection
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
                {destination.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{destination.country}</span>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{destination.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-gray-500">Starting from</span>
                    <div className="text-2xl font-bold text-blue-600">
                      ₹{destination.price.toLocaleString()}
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No destinations found matching your criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
