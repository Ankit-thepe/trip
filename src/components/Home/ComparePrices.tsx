import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Train, Bus, ArrowRight, Clock, IndianRupee, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import useComparePricesPreviewStore from '../../lib/store/home/comparePricesPreviewStore';

const ComparePricesPreview: React.FC = () => {
  const { examples: storeExamples, route } = useComparePricesPreviewStore();
  
  const iconMap: Record<string, React.ReactNode> = {
    'Flight': <Plane className="w-5 h-5" />,
    'Smart Train': <Train className="w-5 h-5" />,
    'Volvo Bus': <Bus className="w-5 h-5" />
  };
  
  const examples = storeExamples.map(ex => ({
    ...ex,
    icon: iconMap[ex.type] || <Plane className="w-5 h-5" />
  }));

  return (
    <section id="compare-section" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-600 text-xs font-bold uppercase tracking-wider mb-6 border border-yellow-100">
              Money Saver
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Compare & <span className="text-teal-600">Save</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              We analyze thousands of routes instantly. Find the sweet spot between time saved and money spent in a single click.
            </p>
            <Link to="/transport"> 
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:bg-teal-600 transition-colors"
              >
                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" /> Start Comparing
              </motion.button>
            </Link>
          </div>

          {/* Comparison Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="flex-1 w-full max-w-md"
          >
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative">
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                Best Value Found!
              </div>

              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                <div className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                  {route.from} <ArrowRight className="w-4 h-4 text-slate-300" /> {route.to}
                </div>
                <div className="bg-green-50 px-2 py-1 rounded text-[10px] font-bold border border-green-100 text-green-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/> Live
                </div>
              </div>

              <div className="space-y-4">
                {examples.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ x: 30, opacity: 0 }} 
                    whileInView={{ x: 0, opacity: 1 }} 
                    transition={{ delay: i * 0.1 }}
                    className={`flex justify-between items-center p-4 rounded-2xl border transition-all ${
                      item.bg.includes('teal') 
                        ? 'bg-teal-50/50 border-teal-200 scale-105 shadow-md z-10' 
                        : 'bg-white border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${item.color}-50 text-${item.color}-600`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-sm mb-0.5">{item.type}</div>
                        <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                          <Clock className="w-3 h-3"/> {item.time}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-[9px] font-bold uppercase mb-1 px-2 py-0.5 rounded-full inline-block bg-${item.color}-50 text-${item.color}-600`}>
                        {item.tag}
                      </div>
                      <div className="flex items-center justify-end font-bold text-slate-900 text-lg">
                        <IndianRupee className="w-4 h-4"/> {item.price}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CURVED BOTTOM -> Transition to Slate-50 (Itinerary) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-slate-50 transform rotate-180 origin-center"></path>
        </svg>
      </div>
    </section>
  );
};

export default ComparePricesPreview;