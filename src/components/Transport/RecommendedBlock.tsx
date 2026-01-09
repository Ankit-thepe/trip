// src/components/Transport/RecommendedBlock.tsx
import React from 'react';
import { useTransportStore } from '../../lib/store/transport/useTransportStore';
import { Sparkles, ArrowRight } from 'lucide-react';

export const RecommendedBlock = () => {
  const { summaries, selectedMode } = useTransportStore();

  // Find the selected mode's listings
  const activeMode = summaries.find(s => s.mode === selectedMode);
  
  // Logic to find the "Best" (e.g., tagged 'Best Value' or just the first/cheapest)
  const bestOption = activeMode?.listings.find(l => l.tag) || activeMode?.listings[0];

  if (!bestOption) return null;

  return (
    <div className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[32px] p-8 shadow-2xl shadow-blue-200 transition-all duration-500 hover:scale-[1.01]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full -ml-10 -mb-10 blur-2xl" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3 fill-white" /> Recommended {selectedMode}
          </div>
          <h3 className="text-3xl font-black text-white mb-2 tracking-tight">
            {bestOption.operator} <span className="text-blue-200">Express</span>
          </h3>
          <p className="text-blue-100/80 text-sm font-bold max-w-md">
            The most reliable and cost-effective {selectedMode.toLowerCase()} for your journey with {bestOption.stops} connectivity.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mt-6">
             <div className="text-white">
                <div className="text-[10px] font-black uppercase text-blue-200/60">Departure</div>
                <div className="text-xl font-black">{bestOption.departure}</div>
             </div>
             <div className="h-8 w-[1px] bg-white/20 hidden md:block" />
             <div className="text-white">
                <div className="text-[10px] font-black uppercase text-blue-200/60">Duration</div>
                <div className="text-xl font-black">{bestOption.duration}</div>
             </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="text-[10px] font-black text-blue-200 uppercase tracking-widest">Starting At Just</div>
          <div className="text-5xl font-black text-white tracking-tighter">₹{bestOption.price}</div>
          <button className="mt-4 bg-white text-blue-700 px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl hover:bg-blue-50 transition-colors flex items-center gap-3 group/btn">
            Book Best Choice
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};