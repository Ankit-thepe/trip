import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, Train, Bus, ArrowRight, Clock, 
  IndianRupee, Zap, CheckCircle, MapPin, 
  ArrowRightLeft
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Assuming you use react-router

const ComparePricesPreview: React.FC = () => {
  
  // Static example data to demonstrate the feature
  const examples = [
    {
      type: 'Flight',
      icon: <Plane className="w-5 h-5" />,
      duration: '1h 20m',
      price: '4,500',
      tag: 'Fastest',
      tagColor: 'bg-blue-100 text-blue-700',
      accent: 'border-blue-200',
      bg: 'bg-blue-50/50'
    },
    {
      type: 'Smart Train',
      icon: <Train className="w-5 h-5" />,
      duration: '6h 30m',
      price: '1,200',
      tag: 'Best Value',
      tagColor: 'bg-emerald-100 text-emerald-700',
      accent: 'border-emerald-500 ring-1 ring-emerald-500', // Highlighted option
      bg: 'bg-white shadow-xl scale-105 z-10' // Popped out
    },
    {
      type: 'Volvo Bus',
      icon: <Bus className="w-5 h-5" />,
      duration: '9h 00m',
      price: '850',
      tag: 'Cheapest',
      tagColor: 'bg-amber-100 text-amber-700',
      accent: 'border-amber-200',
      bg: 'bg-amber-50/50'
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
      }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Don't Overpay. <span className="text-teal-600">Compare Smart.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-xl mx-auto"
          >
            We analyze flights, trains, and buses simultaneously to find the perfect balance between speed and cost.
          </motion.p>
        </div>

        {/* The "Preview" Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-slate-50 rounded-[2rem] border border-slate-200 p-6 md:p-8"
        >
          {/* Mock Route Header */}
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-slate-700 font-bold text-lg">
                <MapPin className="w-5 h-5 text-teal-500" />
                Delhi
                <ArrowRight className="w-4 h-4 text-slate-400" />
                Manali
              </div>
              <span className="hidden sm:inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-500 font-medium">
                12 Dec, 2024
              </span>
            </div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Example Result
            </div>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {examples.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`relative rounded-2xl p-5 border ${item.accent} ${item.bg} transition-all duration-300`}
              >
                {/* Badge */}
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.tagColor}`}>
                  {item.tag}
                </div>

                <div className="flex flex-col items-center text-center gap-3 mt-2">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-700">
                    {item.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-slate-800">{item.type}</h3>
                    <div className="flex items-center justify-center gap-4 mt-2 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {item.duration}
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-slate-200/50 my-1"></div>

                  <div className="flex items-center justify-center gap-1 text-slate-900">
                    <IndianRupee className="w-4 h-4" />
                    <span className="text-xl font-bold">{item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Action Area */}
          <div className="mt-8 text-center">
            <Link to="/compare-prices"> 
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white rounded-xl font-semibold shadow-lg hover:bg-slate-800 transition-all"
              >
                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>Try Comparison Tool</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <p className="mt-3 text-xs text-slate-400">
              *Prices shown are real-time estimates based on live APIs.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ComparePricesPreview;