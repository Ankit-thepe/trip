// src/components/Destinations/SeasonalRecommendations.tsx
import React, { useState } from 'react';
import { Calendar, Star, MapPin, ChevronRight, Filter, Zap, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDestinationStore } from '../../lib/store/destinations/useDestinationStore';

export const SeasonalRecommendations: React.FC = () => {
  const { filters, getSeasonalDestinations, getRecommendedDestinations } = useDestinationStore();
  const [activeTab, setActiveTab] = useState<'seasonal' | 'recommended'>('seasonal');
  
  const seasonalDestinations = getSeasonalDestinations();
  const recommendedDestinations = getRecommendedDestinations();
  
  const getCurrentSeason = () => {
    const currentMonth = new Date().getMonth();
    const seasons = [
      { name: 'Winter', icon: '❄️', color: 'from-blue-400 to-cyan-400' },
      { name: 'Spring', icon: '🌸', color: 'from-pink-400 to-purple-400' },
      { name: 'Summer', icon: '☀️', color: 'from-yellow-400 to-orange-400' },
      { name: 'Autumn', icon: '🍂', color: 'from-orange-400 to-red-400' },
    ];
    return seasons[currentMonth % 12];
  };

  const currentSeason = getCurrentSeason();
  const hasFilters = Object.values(filters).some(value => 
    Array.isArray(value) ? value.length > 0 : value !== ''
  );

  return (
    <div className="py-8 md:py-16">
      {/* Header with Animated Background */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl -m-4" />
        
        <div className="relative flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${currentSeason.color} shadow-lg`}>
                <span className="text-2xl">{currentSeason.icon}</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {activeTab === 'seasonal' 
                    ? `Perfect for ${currentSeason.name}`
                    : 'Your Personalized Picks'
                  }
                </h2>
                <p className="text-gray-600 mt-2">
                  {activeTab === 'seasonal'
                    ? 'Destinations that shine brightest this season'
                    : 'Handpicked based on your preferences'
                  }
                </p>
              </div>
            </div>
          </div>
          
          {/* Tab Switch */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-1">
            <button
              onClick={() => setActiveTab('seasonal')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'seasonal'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Seasonal
              </div>
            </button>
            <button
              onClick={() => setActiveTab('recommended')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'recommended'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                For You
              </div>
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Destinations</p>
                <p className="text-2xl font-bold text-gray-900">
                  {activeTab === 'seasonal' ? seasonalDestinations.length : recommendedDestinations.length}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">
                  4.7
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Perfect Match</p>
                <p className="text-2xl font-bold text-gray-900">
                  {hasFilters ? '98%' : '95%'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'seasonal' ? (
        <div className="space-y-8">
          {/* Seasonal Grid - Unique Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Card - Larger */}
            {seasonalDestinations[0] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="lg:col-span-2 group"
              >
                <div className="relative h-96 rounded-3xl overflow-hidden">
                  <img
                    src={seasonalDestinations[0].image}
                    alt={seasonalDestinations[0].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                          #1 Pick
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium">
                          {seasonalDestinations[0].duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-300 fill-current" />
                        <span className="text-white font-bold">{seasonalDestinations[0].rating}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {seasonalDestinations[0].name}
                    </h3>
                    <p className="text-white/90 mb-4 line-clamp-2">
                      {seasonalDestinations[0].description}
                    </p>
                    <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2 group-hover:gap-3">
                      Explore Now
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Side Cards */}
            <div className="space-y-6">
              {seasonalDestinations.slice(1, 3).map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 1) * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 overflow-hidden"
                >
                  <div className="relative h-40">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
                        <span className="text-xs font-semibold text-gray-800">
                          {destination.priceRange}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900">{destination.name}</h4>
                        <div className="flex items-center gap-1 text-gray-600 text-xs mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{destination.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs line-clamp-2 mb-3">
                      {destination.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {destination.tags.slice(0, 2).map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* More Seasonal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalDestinations.slice(3).map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 overflow-hidden h-full">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{destination.name}</h4>
                        <div className="flex items-center gap-1 text-gray-600 text-xs mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{destination.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {destination.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold">{destination.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-600">{destination.duration}</span>
                      </div>
                      <button className="px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {/* Personalized Recommendations */}
          {hasFilters && recommendedDestinations.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 max-w-2xl mx-auto border border-blue-100">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No exact matches found
                </h3>
                <p className="text-gray-600 mb-8">
                  Try adjusting your filters or describe your dream trip in detail using our AI assistant below.
                </p>
                <div className="flex gap-4 justify-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:opacity-90 transition-all">
                    Adjust Filters
                  </button>
                  <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all">
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Top Recommendations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {recommendedDestinations.slice(0, 2).map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="group"
                  >
                    <div className="relative h-80 rounded-3xl overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium">
                              {Math.round(destination.aiScore || 0)}% Match
                            </span>
                          </div>
                          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Star className="w-4 h-4 text-yellow-300 fill-current" />
                            <span className="text-white font-bold">{destination.rating}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {destination.name}
                        </h3>
                        <p className="text-white/90 text-sm mb-4 line-clamp-2">
                          {destination.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {destination.tags.slice(0, 2).map((tag: string) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button className="px-4 py-2 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Recommendations */}
              {recommendedDestinations.length > 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {recommendedDestinations.slice(2).map((destination, index) => (
                    <motion.div
                      key={destination.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index % 4) * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 overflow-hidden h-full">
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-lg overflow-hidden">
                                <img
                                  src={destination.image}
                                  alt={destination.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900 text-sm">{destination.name}</h4>
                                <div className="text-xs text-gray-500">{destination.location}</div>
                              </div>
                            </div>
                            <div className="text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700">
                              {Math.round(destination.aiScore || 0)}%
                            </div>
                          </div>
                          <p className="text-gray-600 text-xs line-clamp-2 mb-4">
                            {destination.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">
                              <span className="font-semibold text-gray-900">{destination.priceRange}</span>
                              <span className="text-gray-500 ml-2">• {destination.duration}</span>
                            </div>
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                              Select
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};