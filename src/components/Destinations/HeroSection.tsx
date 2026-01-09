// src/components/Destinations/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Calendar,
  Users,
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
  Zap,
  Heart,
  Compass,
  Moon,
  X,
} from 'lucide-react';
import { useDestinationStore } from '../../lib/store/destinations/useDestinationStore';
import { motion, AnimatePresence } from 'framer-motion';
import worldMapImage from '../../assets/images/worldmap.png'; // Import the world map image

export const HeroSection: React.FC = () => {
  const updateFilters = useDestinationStore((s) => s.updateFilters);

  /* ---------------- STATE ---------------- */
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [travelers, setTravelers] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [tripType, setTripType] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [personality, setPersonality] = useState('');
  const [budget, setBudget] = useState('');
  const [pace, setPace] = useState('');

  /* ---------------- EFFECTS ---------------- */
  useEffect(() => {
    if (showAdvanced) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [showAdvanced]);

  /* ---------------- HELPERS ---------------- */
  const toggle = (
    value: string,
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleSearch = () => {
    // Add search animation
    setIsAnimating(true);
    setTimeout(() => {
      updateFilters({
        searchQuery: destination,
        duration,
        travelType: tripType,
        activities: experience,
        budget,
      });
      setIsAnimating(false);
    }, 800);
  };

  const clearAll = () => {
    setDestination('');
    setDuration('');
    setTravelers('');
    setTripType([]);
    setExperience([]);
    setPersonality('');
    setBudget('');
    setPace('');
  };

  /* ---------------- UI ---------------- */
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0">
        {/* Main World Map Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${worldMapImage})`,
          }}
        />
        
        {/* Dark Overlay for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-purple-900/90" />
        
        {/* Additional Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000" />
        
        {/* Travel Route Lines (Animated) */}
        <div className="absolute inset-0">
          {/* Animated Travel Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <defs>
              <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7">
                  <animate attributeName="stop-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7">
                  <animate attributeName="stop-opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            
            {/* Travel Routes */}
            <path
              d="M10,500 Q250,300 500,200 T900,400"
              stroke="url(#route-gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,10"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="100"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            
            <path
              d="M100,600 Q400,400 700,300 T1200,500"
              stroke="url(#route-gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,10"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="100"
                to="0"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        {/* Floating Animated Destination Points */}
        <div className="absolute inset-0">
          {[
            { top: '30%', left: '25%', color: 'bg-cyan-400' }, // Europe
            { top: '45%', left: '55%', color: 'bg-purple-400' }, // Asia
            { top: '60%', left: '40%', color: 'bg-pink-400' }, // Africa
            { top: '50%', left: '75%', color: 'bg-yellow-400' }, // Australia
            { top: '35%', left: '15%', color: 'bg-green-400' }, // Americas
          ].map((point, index) => (
            <motion.div
              key={index}
              className={`absolute w-3 h-3 ${point.color} rounded-full shadow-lg`}
              style={{ top: point.top, left: point.left }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
              }}
              animate={{
                y: [null, `-${Math.random() * 100 + 30}px`],
                opacity: [0.2, 0, 0.2],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-12">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20"
          >
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold">AI-Powered Trip Planning</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-purple-300 bg-clip-text text-transparent leading-tight drop-shadow-lg"
          >
            Your Perfect Journey
            <br />
            <span className="text-white drop-shadow-md">Awaits</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-light"
          >
            Discover destinations tailored to your unique travel DNA across our beautiful world.
            <span className="block mt-3 text-cyan-200 font-medium text-lg">
              ✨ 98% of travelers find their dream trip in under 10 seconds
            </span>
          </motion.p>
        </motion.div>

        {/* Main Card with Glass Morphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          }}
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/15 to-transparent rounded-br-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/15 to-transparent rounded-tl-3xl" />
          
          {/* Subtle Map Pattern Inside Card */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          {/* Quick Filters Bar */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {['🌊 Beach', '🏔️ Mountains', '🏙️ City', '🌴 Tropical', '🏰 Historic'].map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setDestination(tag.slice(2))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-white/20 transition-all hover:shadow-lg hover:shadow-white/10"
              >
                {tag}
              </motion.button>
            ))}
          </div>

          {/* BASIC INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <Input
              icon={<MapPin className="text-blue-300" />}
              label="Dream Destination"
              placeholder="Anywhere, Bali, Santorini..."
              value={destination}
              onChange={setDestination}
              gradient="from-blue-500 to-cyan-400"
            />
            <Select
              icon={<Calendar className="text-purple-300" />}
              label="Trip Duration"
              options={['Weekend Escape', '3–5 Days', '7–10 Days', '2+ Weeks']}
              value={duration}
              onChange={setDuration}
              gradient="from-purple-500 to-pink-400"
            />
            <Select
              icon={<Users className="text-green-300" />}
              label="Travel Companions"
              options={['Solo Explorer', 'Romantic Couple', 'Family Trip', 'Friends Group']}
              value={travelers}
              onChange={setTravelers}
              gradient="from-green-500 to-emerald-400"
            />
          </div>

          {/* ADVANCED TOGGLE */}
          <motion.button
            onClick={() => setShowAdvanced(!showAdvanced)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mb-4 py-4 rounded-xl bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-white/20 backdrop-blur-sm hover:from-blue-500/25 hover:to-purple-500/25 transition-all group"
          >
            <div className="flex items-center justify-center gap-3 text-white font-semibold">
              <motion.div
                animate={{ rotate: showAdvanced ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <SlidersHorizontal className="w-5 h-5" />
              </motion.div>
              <span className="text-lg">
                {showAdvanced ? 'Hide Trip DNA' : '✨ Unlock Personalization'}
              </span>
              <motion.div
                animate={{ rotate: showAdvanced ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.div>
            </div>
            <p className="text-sm text-white/60 mt-1">
              {showAdvanced ? 'Customize every detail' : 'Add preferences for AI-powered matching'}
            </p>
          </motion.button>

          {/* ADVANCED PANEL */}
          <AnimatePresence>
            {showAdvanced && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: "auto", 
                  opacity: 1,
                  transition: {
                    height: { duration: 0.4, ease: "easeOut" },
                    opacity: { duration: 0.3, delay: 0.1 }
                  }
                }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-10 pt-6 border-t border-white/20">
                  {/* Trip Type Section */}
                  <Section 
                    title="Travel Vibe" 
                    subtitle="Select all that match your style"
                    icon={<Compass className="w-5 h-5" />}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {[
                        { label: 'Spiritual', emoji: '🕉️', color: 'from-violet-500 to-purple-500' },
                        { label: 'Family', emoji: '👨‍👩‍👧‍👦', color: 'from-blue-500 to-cyan-500' },
                        { label: 'Friends', emoji: '🎉', color: 'from-green-500 to-emerald-500' },
                        { label: 'Honeymoon', emoji: '💝', color: 'from-pink-500 to-rose-500' },
                        { label: 'Solo', emoji: '🚶‍♂️', color: 'from-orange-500 to-amber-500' },
                      ].map((t) => (
                        <BigChip
                          key={t.label}
                          label={t.label}
                          emoji={t.emoji}
                          gradient={t.color}
                          active={tripType.includes(t.label)}
                          onClick={() => toggle(t.label, setTripType)}
                        />
                      ))}
                    </div>
                  </Section>

                  {/* Experience Section */}
                  <Section 
                    title="Experience Palette" 
                    subtitle="What colors your journey?"
                    icon={<Heart className="w-5 h-5" />}
                  >
                    <div className="flex flex-wrap gap-3">
                      {[
                        'Adventure', 'Exploration', 'Comfort', 'Nature',
                        'Culture', 'Food', 'Luxury', 'Budget', 'Wellness', 'Photography'
                      ].map((e) => (
                        <Chip
                          key={e}
                          label={e}
                          active={experience.includes(e)}
                          onClick={() => toggle(e, setExperience)}
                        />
                      ))}
                    </div>
                  </Section>

                  {/* Personality Section */}
                  <Section 
                    title="Travel Personality" 
                    subtitle="How do you like to explore?"
                    icon={personality.includes('fast') ? <Zap /> : <Moon />}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          id: 'relaxed',
                          label: 'Peaceful Wanderer',
                          description: 'Slow, mindful exploration',
                          icon: '🧘',
                          gradient: 'from-blue-400 to-teal-400'
                        },
                        {
                          id: 'balanced',
                          label: 'Balanced Explorer',
                          description: 'Mix of activity & relaxation',
                          icon: '⚖️',
                          gradient: 'from-purple-400 to-pink-400'
                        },
                        {
                          id: 'fast',
                          label: 'Adventure Seeker',
                          description: 'Maximum experiences, fast pace',
                          icon: '⚡',
                          gradient: 'from-orange-400 to-red-400'
                        },
                      ].map((p) => (
                        <PersonalityCard
                          key={p.id}
                          label={p.label}
                          description={p.description}
                          icon={p.icon}
                          gradient={p.gradient}
                          active={personality === p.id}
                          onClick={() => setPersonality(p.id)}
                        />
                      ))}
                    </div>
                  </Section>

                  {/* Budget & Pace */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="Budget Style"
                      icon={<Sparkles />}
                      options={['Backpacker', 'Smart Saver', 'Comfort Class', 'Luxury Experience']}
                      value={budget}
                      onChange={setBudget}
                      gradient="from-green-400 to-emerald-400"
                    />
                    <Select
                      label="Travel Rhythm"
                      icon={<Zap />}
                      options={['Slow & Serene', 'Balanced Flow', 'Fast & Furious', 'Custom Pace']}
                      value={pace}
                      onChange={setPace}
                      gradient="from-orange-400 to-amber-400"
                    />
                  </div>

                  {/* Clear All Button */}
                  {(tripType.length > 0 || experience.length > 0 || personality || budget || pace) && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={clearAll}
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition hover:scale-105"
                    >
                      <X className="w-4 h-4" />
                      Clear all preferences
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Button */}
          <motion.button
            onClick={handleSearch}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`mt-10 w-full py-5 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center justify-center gap-3 ${isAnimating ? 'animate-pulse' : ''}`}
          >
            <motion.div
              animate={isAnimating ? { rotate: 360 } : {}}
              transition={isAnimating ? { duration: 1, repeat: Infinity } : {}}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <span>{isAnimating ? 'Crafting Your Journey...' : 'Discover My Perfect Trip'}</span>
          </motion.button>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>🚀 10-second matching</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
              <span>🎯 95% satisfaction rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600" />
              <span>🤖 AI-powered personalization</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown className="w-6 h-6 hover:text-white transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- ENHANCED COMPONENTS ---------------- */

const Input = ({ icon, label, placeholder, value, onChange, gradient }: any) => (
  <motion.div
    whileFocus={{ scale: 1.02 }}
    className="relative group"
  >
    <label className="text-sm font-medium text-white/90 flex items-center gap-2 mb-2">
      <div className={`p-1.5 rounded-lg bg-gradient-to-br ${gradient} shadow-md`}>
        {React.cloneElement(icon, { className: "w-4 h-4" })}
      </div>
      {label}
    </label>
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-all group-hover:border-white/40 shadow-inner"
      />
      {value && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition-transform"
        >
          <X className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  </motion.div>
);

const Select = ({ icon, label, options, value, onChange, gradient }: any) => (
  <div className="relative group">
    <label className="text-sm font-medium text-white/90 flex items-center gap-2 mb-2">
      <div className={`p-1.5 rounded-lg bg-gradient-to-br ${gradient} shadow-md`}>
        {React.cloneElement(icon, { className: "w-4 h-4" })}
      </div>
      {label}
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white focus:outline-none focus:border-purple-400 transition-all appearance-none group-hover:border-white/40 shadow-inner"
      >
        <option value="" className="bg-gray-800">Select an option</option>
        {options.map((o: string) => (
          <option key={o} value={o} className="bg-gray-800">{o}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 pointer-events-none w-4 h-4 group-hover:text-white transition-colors" />
    </div>
  </div>
);

const Section = ({ title, subtitle, icon, children }: any) => (
  <div>
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-white/10 border border-white/20">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white drop-shadow-sm">{title}</h3>
        {subtitle && <p className="text-sm text-white/60 mt-1">{subtitle}</p>}
      </div>
    </div>
    {children}
  </div>
);

const Chip = ({ label, active, onClick }: any) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-4 py-2.5 rounded-full border-2 text-sm font-medium transition-all backdrop-blur-sm ${active
      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg'
      : 'bg-white/5 text-white/90 border-white/20 hover:border-white/40 hover:bg-white/10'
    }`}
  >
    {label}
  </motion.button>
);

const BigChip = ({ label, emoji, gradient, active, onClick }: any) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`relative overflow-hidden rounded-2xl border-2 p-4 transition-all backdrop-blur-sm ${active
      ? `bg-gradient-to-br ${gradient} text-white border-transparent shadow-xl`
      : 'bg-white/5 text-white/90 border-white/20 hover:border-white/40'
    }`}
  >
    <div className="flex flex-col items-center gap-2">
      <span className="text-2xl">{emoji}</span>
      <span className="font-semibold">{label}</span>
    </div>
    {active && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-2 right-2"
      >
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="w-2 h-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
        </div>
      </motion.div>
    )}
  </motion.button>
);

const PersonalityCard = ({ label, description, icon, gradient, active, onClick }: any) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all backdrop-blur-sm ${active
      ? `bg-gradient-to-br ${gradient} text-white border-transparent shadow-xl`
      : 'bg-white/5 text-white/90 border-white/20 hover:border-white/40'
    }`}
  >
    <div className="flex items-start gap-4">
      <span className="text-3xl">{icon}</span>
      <div>
        <div className="font-bold text-lg mb-1 drop-shadow-sm">{label}</div>
        <div className="text-sm opacity-90">{description}</div>
      </div>
    </div>
    {active && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-4 right-4"
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${gradient}`} />
        </div>
      </motion.div>
    )}
  </motion.button>
);