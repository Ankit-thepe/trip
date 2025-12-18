import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Star, Calendar, ArrowRight } from 'lucide-react';
import { useCarouselStore } from '../../lib/store/home/carouselStore';
import usePopularDestinationsStore from '../../lib/store/home/popularDestinationsStore';

// Keep existing imports for images
import shimlaImg from '../../assets/images/shimla.jpg';
import manaliImg from '../../assets/images/manali.jpg';
import darjeelingImg from '../../assets/images/darjeeling.jpg';
import ootyImg from '../../assets/images/ooty.jpg';
import mussoorieImg from '../../assets/images/mussoorie.jpg';
import nainitalImg from '../../assets/images/nainital.jpg';
import coorgImg from '../../assets/images/coorg.jpg';
import munnarImg from '../../assets/images/munnar.jpg';

const imageMap: Record<string, string> = {
  '/src/assets/images/shimla.jpg': shimlaImg,
  '/src/assets/images/manali.jpg': manaliImg,
  '/src/assets/images/darjeeling.jpg': darjeelingImg,
  '/src/assets/images/ooty.jpg': ootyImg,
  '/src/assets/images/mussoorie.jpg': mussoorieImg,
  '/src/assets/images/nainital.jpg': nainitalImg,
  '/src/assets/images/coorg.jpg': coorgImg,
  '/src/assets/images/munnar.jpg': munnarImg,
};

const PopularDestinations: React.FC = () => {
  const { currentIndex, isAutoPlaying, setCurrentIndex, setAutoPlay } = useCarouselStore();
  const { destinations: storeDestinations } = usePopularDestinationsStore();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  
  const destinations = storeDestinations.map(dest => ({
    ...dest,
    image: imageMap[dest.image] || dest.image
  }));

  const CARD_WIDTH = 340;
  const GAP = 32; // Increased gap for airy feel
  const VISIBLE_CARDS = 3;

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => handleNext(), 5000); // Slower interval
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

  return (
    <section id="destinations-section" className="relative pt-20 pb-32 bg-slate-50 overflow-hidden">
      
      {/* Soft Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-100/50 blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-100/50 blur-3xl mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-teal-600 font-bold text-sm tracking-widest uppercase mb-3"
            >
              <span className="w-8 h-[2px] bg-teal-600"></span>
              Discover Nature
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              Popular <span className="text-teal-600 relative">
                Destinations
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </motion.h2>
          </div>

          <div className="hidden md:flex gap-3">
            <button 
              onClick={() => { handlePrev(); setAutoPlay(false); }}
              className="group p-4 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-800 hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => { handleNext(); setAutoPlay(false); }}
              className="group p-4 rounded-full bg-slate-900 text-white hover:bg-teal-600 transition-all shadow-md hover:shadow-teal-500/30"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing py-8 -mx-4 px-4" ref={constraintsRef}>
          <motion.div
            className="flex"
            style={{ gap: GAP, x }}
            animate={controls}
            drag="x"
            dragConstraints={constraintsRef}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) handleNext();
              else if (swipe > 10000) handlePrev();
              setAutoPlay(false);
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 relative bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 overflow-hidden group border border-slate-100"
                style={{ width: CARD_WIDTH }}
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-slate-900 text-xs font-bold">{destination.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <div className="flex items-center gap-1 text-teal-600 text-xs font-bold uppercase tracking-wide mb-1.5">
                      <MapPin className="w-3 h-3" />
                      {destination.state}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{destination.name}</h3>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {destination.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">{destination.bestTime}</span>
                    </div>

                    <button className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CURVED BOTTOM -> Transition to White (Compare Prices) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default PopularDestinations;