// src/components/Hotels/HeroSection.tsx
import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  ChevronDown, 
  Sparkles,
  Building,
  Bed,
  Filter,
  X,
  Clock,
  CheckCircle,
  Hotel,
  Heart,
  TrendingUp,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const quickDestinations = [
    { name: 'Goa', hotels: '234', emoji: '🏖️' },
    { name: 'Manali', hotels: '189', emoji: '🏔️' },
    { name: 'Mumbai', hotels: '312', emoji: '🏙️' },
    { name: 'Delhi', hotels: '287', emoji: '🏛️' },
    { name: 'Jaipur', hotels: '156', emoji: '🕌' },
  ];

  const handleSearch = () => {
    console.log('Searching hotels...', { location, checkIn, checkOut, guests, rooms });
  };

  return (
    <div className="relative h-[70vh] min-h-[600px] max-h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920)',
            animation: 'slowZoom 30s ease-in-out infinite alternate'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-900/80 to-purple-900/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        
        {/* Animated Hotel Elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${(i * 8 + 5) % 100}%`,
                top: `${(i * 15 + 20) % 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <Building className="w-8 h-8 text-white" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, `-${Math.random() * 100 + 30}px`],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white mb-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full mb-5 border border-white/20 shadow-lg"
            >
              <Award className="w-5 h-5 text-yellow-300 fill-current" />
              <span className="text-sm font-semibold">Premium Hotel Collection</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-300" />
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-600" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-200 bg-clip-text text-transparent">
                Luxury Stays
              </span>
              <br />
              <span className="text-white">Made Simple</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/90 max-w-2xl mx-auto mb-6"
            >
              Discover handpicked hotels with verified reviews and best price guarantee
            </motion.p>
          </motion.div>

          {/* Main Search Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
          >
            {/* Quick Destinations */}
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>Trending destinations:</span>
                </div>
                <span className="text-white/60 text-sm">{quickDestinations.length}+ options</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {quickDestinations.map((dest, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLocation(dest.name)}
                    className={`px-3 py-2 rounded-lg border transition-all flex items-center gap-2 ${
                      location === dest.name
                        ? 'bg-white text-blue-900 border-white shadow-md'
                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <span className="text-lg">{dest.emoji}</span>
                    <span className="font-medium">{dest.name}</span>
                    <span className="text-xs opacity-70">{dest.hotels} hotels</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Search Form */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Location */}
                <div className="lg:col-span-4">
                  <div className="relative group">
                    <div className="flex items-center gap-3 text-white mb-2">
                      <MapPin className="w-5 h-5 text-cyan-300" />
                      <label className="text-sm font-semibold">Destination</label>
                    </div>
                    <input
                      type="text"
                      placeholder="Where do you want to stay?"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3.5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/60 rounded-xl focus:outline-none focus:ring-3 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all text-lg"
                    />
                    {location && (
                      <button
                        onClick={() => setLocation('')}
                        className="absolute right-3 top-[calc(50%+12px)] transform -translate-y-1/2 text-white/50 hover:text-white"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Dates */}
                <div className="lg:col-span-3">
                  <div className="relative group">
                    <div className="flex items-center gap-3 text-white mb-2">
                      <Calendar className="w-5 h-5 text-purple-300" />
                      <label className="text-sm font-semibold">Check-in</label>
                    </div>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkIn}
                        min={today}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full px-4 py-3.5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl focus:outline-none focus:ring-3 focus:ring-purple-500/40 focus:border-purple-400 transition-all [color-scheme:dark]"
                      />
                      <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="relative group">
                    <div className="flex items-center gap-3 text-white mb-2">
                      <Calendar className="w-5 h-5 text-purple-300" />
                      <label className="text-sm font-semibold">Check-out</label>
                    </div>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkOut}
                        min={checkIn || today}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full px-4 py-3.5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl focus:outline-none focus:ring-3 focus:ring-purple-500/40 focus:border-purple-400 transition-all [color-scheme:dark]"
                      />
                      <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Guests & Rooms */}
                <div className="lg:col-span-2">
                  <div className="relative group">
                    <div className="flex items-center gap-3 text-white mb-2">
                      <Users className="w-5 h-5 text-green-300" />
                      <label className="text-sm font-semibold">Guests</label>
                    </div>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-4 py-3.5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl focus:outline-none focus:ring-3 focus:ring-green-500/40 focus:border-green-400 appearance-none transition-all"
                    >
                      <option value="1" className="bg-gray-900">1 Guest</option>
                      <option value="2" className="bg-gray-900">2 Guests</option>
                      <option value="3" className="bg-gray-900">3 Guests</option>
                      <option value="4" className="bg-gray-900">4 Guests</option>
                      <option value="5" className="bg-gray-900">5+ Guests</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-[calc(50%+12px)] transform -translate-y-1/2 text-white/50 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Advanced Filters */}
              <AnimatePresence>
                {showAdvanced && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-4 pt-4 border-t border-white/20"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Rooms
                        </label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4].map((num) => (
                            <button
                              key={num}
                              onClick={() => setRooms(num.toString())}
                              className={`flex-1 py-2.5 rounded-lg border transition-all ${
                                rooms === num.toString()
                                  ? 'bg-white text-blue-900 border-white shadow-sm'
                                  : 'bg-white/5 text-white border-white/20 hover:bg-white/10'
                              }`}
                            >
                              {num} {num === 1 ? 'Room' : 'Rooms'}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Star Rating
                        </label>
                        <div className="flex gap-2">
                          {[3, 4, 5].map((star) => (
                            <button
                              key={star}
                              className="flex-1 py-2.5 bg-white/5 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-1"
                            >
                              <Star className="w-4 h-4 text-yellow-300 fill-current" />
                              <span>{star}+</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Price Range
                        </label>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 w-3/4" />
                          </div>
                          <span className="text-white font-medium text-sm">₹2K - ₹15K</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.button
                  onClick={handleSearch}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-3 text-lg"
                >
                  <Search className="w-6 h-6" />
                  <span>Search Hotels</span>
                  <Sparkles className="w-5 h-5" />
                </motion.button>
                
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 min-w-[140px]"
                >
                  <Filter className="w-5 h-5" />
                  <span>{showAdvanced ? 'Less' : 'More'}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="px-6 pb-6 pt-4 border-t border-white/20">
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Best Price Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free Cancellation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No Booking Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex flex-wrap justify-center gap-6 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <Hotel className="w-4 h-4 text-cyan-300" />
              <span>10,000+ Verified Hotels</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-300 fill-current" />
              <span>4.8 Avg. Guest Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-300" />
              <span>98% Guest Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-8 text-gray-50" 
          viewBox="0 0 1440 80" 
          fill="none"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 80V0C240 40 480 60 720 60C960 60 1200 40 1440 0V80H0Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* CSS for slow zoom animation */}
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};