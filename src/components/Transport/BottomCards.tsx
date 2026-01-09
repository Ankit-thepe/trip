import { useTransportStore } from '../../lib/store/transport/useTransportStore';
import { Clock, Star, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export const BottomCards = () => {
  const { summaries, selectedMode, filters } = useTransportStore();
  const activeModeData = summaries.find(s => s.mode === selectedMode);

  let filteredListings =
    activeModeData?.listings.filter(listing => {
      const withinBudget = listing.price <= filters.maxBudget;
      const matchesTime =
        filters.departureTime === 'Any Time' ||
        listing.departureTime === filters.departureTime;
      const matchesStops =
        filters.stops === 'All' ||
        (filters.stops === 'Non-stop'
          ? listing.stops === 'Non-stop'
          : listing.stops !== 'Non-stop');
      return withinBudget && matchesTime && matchesStops;
    }) || [];

  if (filters.sortBy === 'price-low') {
    filteredListings.sort((a, b) => a.price - b.price);
  }

  return (
    <div className="space-y-10 py-8 perspective-1000">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Live Availability</span>
          </div>
          <h3 className="text-4xl font-black tracking-tight text-slate-900">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 uppercase">{selectedMode}s</span>
          </h3>
        </div>

        <div className="flex items-center gap-3 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
          <span className="pl-3 text-xs font-bold text-slate-500">Showing {filteredListings.length} options</span>
          <div className="rounded-xl bg-white shadow-sm px-4 py-1.5 text-xs font-black text-slate-900 border border-slate-100">
            {selectedMode}
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredListings.map(listing => (
          <div
            key={listing.id}
            className="group relative flex flex-col bg-white rounded-[40px] border border-slate-100 p-2 transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_40px_80px_-15px_rgba(30,64,175,0.2)] hover:border-blue-200"
          >
            {/* Animated Glow Background */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-400/0 via-blue-400/0 to-indigo-500/0 opacity-0 group-hover:opacity-10 group-hover:from-blue-400/20 group-hover:to-indigo-500/20 transition-all duration-700 pointer-events-none" />

            {/* Top Badge Overlay */}
            <div className="absolute top-6 right-8 z-20">
                <div className="flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 shadow-sm border border-orange-100 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <Star className="h-3 w-3 fill-orange-400 text-orange-400" />
                  <span className="text-xs font-bold text-slate-700">4.9</span>
                </div>
            </div>

            {/* Inner Content Container */}
            <div className="flex-1 px-6 pt-8 pb-4 relative z-10">
              <div className="mb-6 overflow-hidden">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1 transition-transform duration-500 translate-y-0 group-hover:-translate-y-1">
                  {listing.stops}
                </p>
                <h4 className="text-2xl font-black tracking-tight text-slate-900 leading-tight transition-colors group-hover:text-blue-700">
                  {listing.operator}
                </h4>
              </div>

              {/* Route Display */}
              <div className="relative flex items-center justify-between mb-8 px-2">
                <div className="z-10 bg-white pr-4 group-hover:bg-transparent transition-colors">
                   <p className="text-xl font-black text-slate-900">{listing.departure}</p>
                   <p className="text-[10px] font-bold text-slate-400 uppercase">Origin</p>
                </div>

                {/* Animated Flight Path */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
                   <div className="w-full h-[1px] bg-slate-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:animate-[progress_2s_ease-in-out_infinite]" />
                   </div>
                   <div className="mt-4 bg-slate-50 rounded-full px-3 py-1 border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:scale-110 transition-all duration-300">
                     <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-500 group-hover:text-white">
                        <Clock className="h-3 w-3 animate-pulse" /> {listing.duration}
                     </span>
                   </div>
                </div>

                <div className="z-10 bg-white pl-4 text-right group-hover:bg-transparent transition-colors">
                   <p className="text-xl font-black text-slate-900">{listing.arrival}</p>
                   <p className="text-[10px] font-bold text-slate-400 uppercase">Dest</p>
                </div>
              </div>

              {/* Features Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                 <div className="flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600 transition-transform group-hover:translate-x-1">
                    <Zap className="h-3 w-3" /> Instant
                 </div>
                 <div className="flex items-center gap-1 rounded-lg bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-500 transition-transform group-hover:translate-x-1 delay-75">
                    <ShieldCheck className="h-3 w-3" /> Insured
                 </div>
              </div>
            </div>

            {/* Bottom Section (Action Area) */}
            <div className="mt-auto bg-slate-50/50 rounded-[32px] p-6 border border-slate-50 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-blue-50/80 group-hover:to-indigo-50/80">
              <div className="flex items-center justify-between mb-5">
                <div className="transform transition-transform group-hover:scale-105 origin-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Final Price</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black tracking-tighter text-slate-900">₹{listing.price}</span>
                    <span className="text-xs font-bold text-slate-400">/seat</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-block px-2 py-0.5 rounded bg-orange-100 text-[10px] font-black text-orange-600 uppercase animate-bounce">
                    Only 4 Left
                  </div>
                </div>
              </div>

              <button className="relative group/btn overflow-hidden w-full h-14 rounded-2xl bg-slate-900 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-[1.02] active:scale-95 shadow-lg">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1s_infinite]" />
                
                <span className="relative flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em]">
                  Reserve Seat
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};