import React from 'react';
import { useTransportStore } from '../../lib/store/transport/useTransportStore';
import { MapPin, ArrowRightLeft, Search, Calendar, Plane } from 'lucide-react';

// Import the local video file
// Adjust the relative path ('../../') if your folder structure is different
import transportVideo from '../../assets/videos/transportvideo.mp4';

export const SearchSection: React.FC = () => {
  const { source, destination, setSource, setDestination } = useTransportStore();

  return (
    <div className="relative w-full h-[50vh] min-h-[500px] flex flex-col justify-center items-center mb-12 group">
      
      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark Overlay for readability */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
        >
          {/* Using local asset import */}
          <source src={transportVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-20 text-center px-4 w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
        
        {/* Animated Title Section */}
        <div className="mb-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-50 text-sm font-semibold mb-4">
                <Plane className="w-4 h-4" />
                <span>The world is yours to explore</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            Where will you go next?
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 font-medium max-w-2xl mx-auto drop-shadow-md">
            Compare Flight, Train, Bus, and Cab prices across top platforms in real-time.
            </p>
        </div>
        
        {/* --- SEARCH BAR COMPONENT --- */}
        {/* Placed to look like it's floating above the content */}
        <div className="w-full bg-white/95 backdrop-blur-xl p-3 md:p-4 rounded-3xl shadow-2xl border border-white/50 max-w-5xl mx-auto transform translate-y-6 md:translate-y-12 transition-transform hover:-translate-y-1 duration-300">
            <div className="flex flex-col md:flex-row gap-3 items-center">
            
            {/* Source Input */}
            <div className="flex-1 w-full relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-50 p-2.5 rounded-xl text-gray-400 group-focus-within/input:bg-blue-600 group-focus-within/input:text-white transition-all duration-300">
                <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col w-full">
                    <label className="absolute left-16 top-3 text-[10px] uppercase tracking-wider text-gray-400 font-bold pointer-events-none">From</label>
                    <input 
                    type="text" 
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="City or Airport"
                    className="w-full pl-16 pr-4 pt-6 pb-2 bg-gray-50/50 border border-gray-100 rounded-2xl text-gray-800 font-bold placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                </div>
            </div>

            {/* Swap Button (Floating) */}
            <div className="relative z-10 -my-3 md:my-0 md:-mx-5">
                <button className="bg-white hover:bg-blue-50 text-gray-400 hover:text-blue-600 p-3 rounded-full shadow-lg border border-gray-100 transition-all transform hover:rotate-180 hover:scale-110 active:scale-95">
                <ArrowRightLeft className="w-5 h-5" />
                </button>
            </div>

            {/* Destination Input */}
            <div className="flex-1 w-full relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-50 p-2.5 rounded-xl text-gray-400 group-focus-within/input:bg-blue-600 group-focus-within/input:text-white transition-all duration-300">
                <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col w-full">
                    <label className="absolute left-16 top-3 text-[10px] uppercase tracking-wider text-gray-400 font-bold pointer-events-none">To</label>
                    <input 
                    type="text" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="City or Airport"
                    className="w-full pl-16 pr-4 pt-6 pb-2 bg-gray-50/50 border border-gray-100 rounded-2xl text-gray-800 font-bold placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                </div>
            </div>

            {/* Date Picker (Hidden on Mobile) */}
            <div className="hidden lg:block w-48 relative border-l border-gray-200 pl-3">
                <div className="w-full h-full relative cursor-pointer group/date bg-gray-50/50 hover:bg-white border border-gray-100 rounded-2xl transition-all">
                     <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover/date:text-blue-600 transition-colors">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <div className="pl-10 pr-4 py-3">
                        <span className="block text-[10px] uppercase text-gray-400 font-bold">Departure</span>
                        <span className="text-gray-800 font-bold">Today</span>
                    </div>
                </div>
            </div>

            {/* Search Button */}
            <button className="w-full md:w-auto h-[60px] px-10 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-orange-200/50 transition-all flex items-center justify-center gap-2 transform active:scale-95">
                <Search className="w-5 h-5 stroke-[3px]" /> 
                <span className="text-lg">Search</span>
            </button>
            </div>
        </div>

      </div>
      
      {/* Decorative curve at the bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
         <svg className="relative block w-full h-12 md:h-24 text-gray-50 fill-current opacity-90" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
         </svg>
      </div>
    </div>
  );
};