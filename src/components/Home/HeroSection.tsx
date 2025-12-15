import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Search, MapPin, Calendar, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/videos/Hero.mp4';

interface FormData {
  source: string;
  destination: string;
  days: string;
  people: string;
}

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    source: '',
    destination: '',
    days: '',
    people: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Search Data:', formData);
    // Handle search logic here
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-teal-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
            Plan Your Perfect Trip with AI
            <motion.span
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block ml-4"
            >
              <Sparkles className="w-10 h-10 md:w-14 md:h-14 text-yellow-300 inline" />
            </motion.span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
            Smart itineraries, best prices, and personalized recommendations—all in one place.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-6xl"
        >
          <form onSubmit={handleSearch} className="relative">
            {/* Enhanced Background Container */}
            <div className="relative bg-gradient-to-br from-white/15 via-white/8 to-white/15 backdrop-blur-3xl border border-white/40 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6),0_0_120px_rgba(59,130,246,0.25),inset_0_1px_0_0_rgba(255,255,255,0.2)] p-8 md:p-10 hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.7),0_0_150px_rgba(59,130,246,0.35),inset_0_1px_0_0_rgba(255,255,255,0.3)] transition-all duration-500 overflow-hidden group">
              
              {/* Animated Gradient Mesh Background */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)',
                    ]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}

              {/* Shimmer Border Effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <motion.div 
                  className="absolute inset-[-2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </div>

              {/* Interactive Hover Effect Layer */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />

              {/* Main Content */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Source */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative group"
                >
                  <label htmlFor="source" className="block text-sm font-semibold text-white/95 mb-3 tracking-wide flex items-center gap-2">
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"
                    />
                    FROM
                  </label>
                  <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-teal-500/40 to-blue-500/40 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20"
                    >
                      <MapPin className="w-5 h-5 text-teal-300" />
                    </motion.div>
                    <input
                      type="text"
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      placeholder="Your location"
                      className="w-full pl-16 pr-4 py-4 bg-white/95 backdrop-blur-md border-2 border-white/50 rounded-xl text-gray-800 placeholder-gray-500 font-medium focus:bg-white focus:border-teal-400 focus:ring-4 focus:ring-teal-500/40 focus:shadow-[0_0_30px_rgba(20,184,166,0.4)] outline-none transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-teal-300 hover:scale-[1.02]"
                    />
                  </div>
                </motion.div>

                {/* Destination */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative group"
                >
                  <label htmlFor="destination" className="block text-sm font-semibold text-white/95 mb-3 tracking-wide flex items-center gap-2">
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    />
                    TO
                  </label>
                  <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20"
                    >
                      <MapPin className="w-5 h-5 text-blue-300" />
                    </motion.div>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Where to?"
                      className="w-full pl-16 pr-4 py-4 bg-white/95 backdrop-blur-md border-2 border-white/50 rounded-xl text-gray-800 placeholder-gray-500 font-medium focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/40 focus:shadow-[0_0_30px_rgba(59,130,246,0.4)] outline-none transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-blue-300 hover:scale-[1.02]"
                    />
                  </div>
                </motion.div>

                {/* Days */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative group"
                >
                  <label htmlFor="days" className="block text-sm font-semibold text-white/95 mb-3 tracking-wide flex items-center gap-2">
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    />
                    DURATION
                  </label>
                  <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20"
                    >
                      <Calendar className="w-5 h-5 text-purple-300" />
                    </motion.div>
                    <input
                      type="number"
                      id="days"
                      name="days"
                      value={formData.days}
                      onChange={handleChange}
                      placeholder="No. of days"
                      min="1"
                      className="w-full pl-16 pr-4 py-4 bg-white/95 backdrop-blur-md border-2 border-white/50 rounded-xl text-gray-800 placeholder-gray-500 font-medium focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-500/40 focus:shadow-[0_0_30px_rgba(168,85,247,0.4)] outline-none transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-purple-300 hover:scale-[1.02]"
                    />
                  </div>
                </motion.div>

                {/* Number of People */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative group"
                >
                  <label htmlFor="people" className="block text-sm font-semibold text-white/95 mb-3 tracking-wide flex items-center gap-2">
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"
                    />
                    TRAVELERS
                  </label>
                  <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-pink-500/40 to-orange-500/40 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20"
                    >
                      <Users className="w-5 h-5 text-pink-300" />
                    </motion.div>
                    <input
                      type="number"
                      id="people"
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      placeholder="How many?"
                      min="1"
                      className="w-full pl-16 pr-4 py-4 bg-white/95 backdrop-blur-md border-2 border-white/50 rounded-xl text-gray-800 placeholder-gray-500 font-medium focus:bg-white focus:border-pink-400 focus:ring-4 focus:ring-pink-500/40 focus:shadow-[0_0_30px_rgba(236,72,153,0.4)] outline-none transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-pink-300 hover:scale-[1.02]"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Search Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative flex justify-center"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-16 py-5 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_80px_rgba(59,130,246,0.4)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_120px_rgba(59,130,246,0.6)] transition-all duration-300 overflow-hidden backdrop-blur-sm"
                >
                  {/* Animated gradient background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  
                  {/* Enhanced shine effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                  </div>
                  
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
                  
                  <div className="relative flex items-center justify-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="opacity-0 group-hover:opacity-100"
                    >
                      <Search className="w-6 h-6" />
                    </motion.div>
                    <Search className="w-6 h-6 opacity-100 group-hover:opacity-0 absolute" />
                    <span className="tracking-wider text-shadow-lg drop-shadow-lg">Plan My Trip</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="opacity-0 group-hover:opacity-100"
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.button>
              </motion.div>

              {/* Enhanced Animated Orbs */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-full blur-3xl"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.4, 1],
                  x: [0, -15, 0],
                  y: [0, 15, 0],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-teal-500/40 to-blue-600/40 rounded-full blur-3xl"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute top-1/3 right-12 w-32 h-32 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full blur-2xl"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;