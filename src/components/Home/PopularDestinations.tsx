import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Star, Calendar, ArrowRight } from 'lucide-react';
import { useCarouselStore } from '../../lib/store/carouselStore';

// Import images (keeping your existing imports)
import shimlaImg from '../../assets/images/shimla.jpg';
import manaliImg from '../../assets/images/manali.jpg';
import darjeelingImg from '../../assets/images/darjeeling.jpg';
import ootyImg from '../../assets/images/ooty.jpg';
import mussoorieImg from '../../assets/images/mussoorie.jpg';
import nainitalImg from '../../assets/images/nainital.jpg';
import coorgImg from '../../assets/images/coorg.jpg';
import munnarImg from '../../assets/images/munnar.jpg';

interface Destination {
  id: number;
  name: string;
  state: string;
  image: string;
  rating: number;
  description: string;
  bestTime: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Shimla',
    state: 'Himachal Pradesh',
    image: shimlaImg,
    rating: 4.5,
    description: 'The Queen of Hills with colonial charm',
    bestTime: 'Mar-Jun'
  },
  {
    id: 2,
    name: 'Manali',
    state: 'Himachal Pradesh',
    image: manaliImg,
    rating: 4.7,
    description: 'Adventure hub with stunning landscapes',
    bestTime: 'Oct-Feb'
  },
  {
    id: 3,
    name: 'Darjeeling',
    state: 'West Bengal',
    image: darjeelingImg,
    rating: 4.6,
    description: 'Tea gardens and mountain views',
    bestTime: 'Mar-May'
  },
  {
    id: 4,
    name: 'Ooty',
    state: 'Tamil Nadu',
    image: ootyImg,
    rating: 4.4,
    description: 'Serene hill station with lush gardens',
    bestTime: 'Apr-Jun'
  },
  {
    id: 5,
    name: 'Mussoorie',
    state: 'Uttarakhand',
    image: mussoorieImg,
    rating: 4.3,
    description: 'Queen of the Hills with waterfalls',
    bestTime: 'Sep-Nov'
  },
  {
    id: 6,
    name: 'Nainital',
    state: 'Uttarakhand',
    image: nainitalImg,
    rating: 4.5,
    description: 'Beautiful lake town in the mountains',
    bestTime: 'Mar-Jun'
  },
  {
    id: 7,
    name: 'Coorg',
    state: 'Karnataka',
    image: coorgImg,
    rating: 4.6,
    description: 'Coffee plantations and misty hills',
    bestTime: 'Oct-Mar'
  },
  {
    id: 8,
    name: 'Munnar',
    state: 'Kerala',
    image: munnarImg,
    rating: 4.7,
    description: 'Enchanting tea estates and valleys',
    bestTime: 'Sep-Mar'
  }
];

const PopularDestinations: React.FC = () => {
  const { currentIndex, isAutoPlaying, setCurrentIndex, setAutoPlay } = useCarouselStore();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  const CARD_WIDTH = 340; // Slightly narrower for a cleaner look
  const GAP = 24;
  const VISIBLE_CARDS = 3;

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        handleNext();
      }, 4000); // Slower, more relaxed interval
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentIndex]);

  const handleNext = () => {
    if (currentIndex < destinations.length - VISIBLE_CARDS) {
      setCurrentIndex(currentIndex + 1);
      controls.start({ x: -(currentIndex + 1) * (CARD_WIDTH + GAP) });
    } else {
      setCurrentIndex(0);
      controls.start({ x: 0 });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      controls.start({ x: -(currentIndex - 1) * (CARD_WIDTH + GAP) });
    } else {
      setCurrentIndex(destinations.length - VISIBLE_CARDS);
      controls.start({ x: -(destinations.length - VISIBLE_CARDS) * (CARD_WIDTH + GAP) });
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    controls.start({ x: -index * (CARD_WIDTH + GAP) });
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
      
      {/* Simple decorative background element */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-teal-50/50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Clean and Bold */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-2 block"
            >
              Discover Nature
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Popular Hill Stations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 mt-4 text-lg font-light"
            >
              Escape to the mountains. Curated destinations for peace and adventure.
            </motion.p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex gap-3">
            <button 
              onClick={() => { handlePrev(); setAutoPlay(false); }}
              className="p-4 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all duration-300 shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => { handleNext(); setAutoPlay(false); }}
              className="p-4 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing py-4 pl-1" ref={constraintsRef}>
          <motion.div
            className="flex gap-6"
            animate={controls}
            drag="x"
            dragConstraints={constraintsRef}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) handleNext();
              else if (swipe > 10000) handlePrev();
              setAutoPlay(false);
            }}
            style={{ x }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 relative bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                style={{ width: CARD_WIDTH }}
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Glassmorphism Rating */}
                  <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm font-bold">{destination.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{destination.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    <span className="text-sm font-medium">{destination.state}</span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {destination.description}
                  </p>

                  {/* Footer Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-semibold">{destination.bestTime}</span>
                    </div>

                    <button className="flex items-center gap-2 text-teal-600 font-bold text-sm hover:gap-3 transition-all duration-300 group">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Navigation / Dots */}
        <div className="flex justify-center items-center gap-2 mt-10 md:hidden">
          {Array.from({ length: destinations.length - VISIBLE_CARDS + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => { handleDotClick(index); setAutoPlay(false); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-teal-600' 
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Bottom View All CTA */}
        <div className="text-center mt-12">
           <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-gray-900 border border-gray-200 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
             View All Destinations
           </button>
        </div>

      </div>
    </section>
  );
};

export default PopularDestinations;