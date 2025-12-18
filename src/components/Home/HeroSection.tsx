import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Search, MapPin, Calendar, Users, Sparkles, ChevronDown } from 'lucide-react';
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
    source: '', destination: '', days: '', people: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search Data:', formData);
  };

  const scrollToFeatures = () => {
    document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen min-h-[850px] overflow-hidden">
      {/* Background Video with lighter overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30" />
        
        {/* Bottom Fade to blend with White (Next Section) */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20" />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            #1 AI Travel Companion
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 drop-shadow-xl">
            Dream. Plan. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-teal-200">Go.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Experience the world's smartest travel planner. Curated itineraries and real-time prices in seconds.
          </p>
        </motion.div>

        {/* Search Bar - Enhanced Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl px-4"
        >
          <form onSubmit={handleSearch} className="relative z-40">
            <div className="bg-white/15 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-4 md:p-6 shadow-2xl shadow-black/10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: 'source', icon: MapPin, label: 'From', ph: 'Origin City' },
                  { id: 'destination', icon: MapPin, label: 'To', ph: 'Dream Destination' },
                  { id: 'days', icon: Calendar, label: 'Duration', ph: 'No. of Days', type: 'number' },
                  { id: 'people', icon: Users, label: 'Guests', ph: 'Travelers', type: 'number' }
                ].map((field) => (
                  <div key={field.id} className="relative group bg-slate-900/40 hover:bg-slate-900/50 rounded-2xl p-4 border border-white/10 focus-within:bg-slate-900/70 focus-within:border-teal-400/50 transition-all duration-300">
                    <label className="block text-[10px] font-bold text-teal-200 uppercase tracking-wider mb-1.5 ml-1">{field.label}</label>
                    <div className="flex items-center gap-3">
                      <field.icon className="w-5 h-5 text-teal-400" />
                      <input
                        type={field.type || 'text'}
                        name={field.id}
                        // @ts-ignore
                        value={formData[field.id]}
                        onChange={handleChange}
                        placeholder={field.ph}
                        className="w-full bg-transparent border-none text-white placeholder-slate-400 focus:ring-0 text-sm font-semibold p-0 tracking-wide"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-50">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold rounded-full shadow-lg shadow-teal-500/40 border border-white/20 text-lg transition-all"
              >
                <Search className="w-5 h-5" />
                <span>Explore Now</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-0 right-0 z-30 flex justify-center cursor-pointer text-slate-400 hover:text-teal-600 transition-colors"
        onClick={scrollToFeatures}
      >
        <ChevronDown className="w-10 h-10 opacity-70 drop-shadow-sm" />
      </motion.div>
    </section>
  );
};

export default HeroSection;