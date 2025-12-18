import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, Train, Bus, Car, Hotel, MapPin, 
  CheckCircle2, Clock, ArrowRight, 
  MoreVertical, Ticket, Loader2, Plus, ChevronRight, ChevronLeft
} from 'lucide-react';
import { useItineraryStore, ItineraryStep } from '../../lib/store/home/itineraryStore';

const ItineraryCard = ({ step, index, onBook, isLast }: { step: ItineraryStep; index: number; onBook: (id: string) => void; isLast: boolean; }) => {
  const [isBooking, setIsBooking] = useState(false);
  const isBooked = step.status === 'booked';

  const handleBooking = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBooking(true);
    setTimeout(() => {
      onBook(step.id);
      setIsBooking(false);
    }, 1500);
  };

  const getIcon = () => {
    if (step.type === 'travel') {
      switch (step.transportMode) {
        case 'flight': return <Plane className="w-5 h-5" />;
        case 'train': return <Train className="w-5 h-5" />;
        case 'bus': return <Bus className="w-5 h-5" />;
        case 'car': return <Car className="w-5 h-5" />;
        default: return <ArrowRight className="w-5 h-5" />;
      }
    }
    if (step.type === 'stay') return <Hotel className="w-5 h-5" />;
    return <MapPin className="w-5 h-5" />;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative flex flex-col items-center flex-shrink-0 w-[320px] group"
    >
      {/* 1. Day Indicator */}
      <div className="mb-6">
        <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-colors ${
          isBooked ? 'bg-teal-100 text-teal-700' : 'bg-white border border-slate-200 text-slate-400'
        }`}>
          Day 0{step.day}
        </span>
      </div>

      {/* 2. Timeline Node & Connector */}
      <div className="relative z-10 mb-8 w-full flex justify-center items-center">
        {/* Connectors */}
        <div className="absolute top-1/2 left-0 right-1/2 h-0.5 -z-10" style={{ 
          backgroundColor: isBooked ? '#14b8a6' : '#e2e8f0',
          left: index === 0 ? '50%' : '0' 
        }}></div>
        <div className="absolute top-1/2 left-1/2 right-0 h-0.5 -z-10 bg-slate-200" style={{ 
           display: isLast ? 'none' : 'block'
        }}></div>

        {/* Node */}
        <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center transition-all duration-500 z-20 ${
          isBooked 
            ? 'bg-teal-500 border-teal-100 text-white shadow-lg shadow-teal-200 scale-110' 
            : 'bg-white border-slate-200 text-slate-400 group-hover:border-teal-300 group-hover:text-teal-500'
        }`}>
          {isBooked ? <CheckCircle2 className="w-6 h-6" /> : getIcon()}
        </div>
      </div>

      {/* 3. The Details Card */}
      <div 
        className={`w-full relative overflow-hidden rounded-3xl transition-all duration-300 group-hover:-translate-y-2 ${
          isBooked 
            ? 'bg-white shadow-xl shadow-teal-900/5 border border-teal-100' 
            : 'bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50'
        }`}
      >
        <div className={`h-1.5 w-full ${isBooked ? 'bg-teal-500' : 'bg-slate-200 group-hover:bg-teal-400'}`} />

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded flex items-center gap-1.5 ${
              isBooked ? 'bg-teal-50 text-teal-700' : 'bg-slate-100 text-slate-500'
            }`}>
              {isBooked ? 'Confirmed' : 'Pending'}
            </div>
            <button className="text-slate-300 hover:text-slate-600">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>

          <h3 className="text-lg font-bold leading-tight mb-2 text-slate-800">{step.title}</h3>
          <p className="text-xs text-slate-400 font-medium mb-5">{step.subtitle}</p>

          <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-50 mb-5">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {step.time}
            </div>
            {step.duration && (
              <div className="flex items-center gap-1.5 font-medium">
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                {step.duration}
              </div>
            )}
          </div>

          <div className="h-11 relative">
            {isBooked ? (
              <div className="flex items-center gap-2 text-teal-600 text-xs font-bold bg-teal-50 rounded-xl p-2 justify-center w-full h-full border border-teal-100">
                <Ticket className="w-4 h-4" />
                Booking ID: #TR-{step.id}88
              </div>
            ) : (
              <button
                onClick={handleBooking}
                disabled={isBooking}
                className="w-full h-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-teal-600 text-white text-xs font-bold rounded-xl transition-all shadow-lg active:scale-95"
              >
                {isBooking ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Book Now'}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ItineraryBuilder: React.FC = () => {
  const { steps, toggleStepStatus } = useItineraryStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 340;
      containerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-[1400px] mx-auto w-full relative z-10 px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-500" /> 
              Trip Planner
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight"
            >
              Your Trip <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Timeline</span>
            </motion.h2>
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-100 transition-all shadow-sm">
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-md">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Timeline Scroll Area */}
        <div 
          className="overflow-x-auto pb-16 pt-4 px-2 custom-scrollbar hide-scrollbar cursor-grab active:cursor-grabbing" 
          ref={containerRef}
        >
          <div className="flex gap-8 min-w-max">
            {steps.map((step, index) => (
              <ItineraryCard 
                key={step.id} 
                step={step} 
                index={index} 
                onBook={toggleStepStatus}
                isLast={index === steps.length - 1}
              />
            ))}
            
            {/* "Add Activity" Card */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative flex flex-col items-center justify-end flex-shrink-0 w-[200px] h-[340px]"
            >
               <button className="group flex flex-col items-center justify-center w-full h-[220px] rounded-3xl border-2 border-dashed border-slate-300 hover:border-teal-400 hover:bg-teal-50/30 transition-all gap-4">
                 <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-white group-hover:shadow-md flex items-center justify-center transition-all">
                   <Plus className="w-6 h-6 text-slate-400 group-hover:text-teal-500" />
                 </div>
                 <span className="font-bold text-sm text-slate-500 group-hover:text-teal-600">Add Activity</span>
               </button>
            </motion.div>
          </div>
        </div>

      </div>

      {/* WAVE BOTTOM -> Transition to White (Reviews) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
           <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default ItineraryBuilder;