import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Calendar, Sparkles, Shield, Zap, ArrowRight } from 'lucide-react';
import useFeaturesStore from '../../lib/store/home/featuresStore';

const Features: React.FC = () => {
  const { features: storeFeatures } = useFeaturesStore();
  
  const iconMap: Record<string, React.ReactNode> = {
    'Sparkles': <Sparkles className="w-6 h-6" />,
    'TrendingDown': <TrendingDown className="w-6 h-6" />,
    'Shield': <Shield className="w-6 h-6" />,
    'Zap': <Zap className="w-6 h-6" />,
    'Calendar': <Calendar className="w-6 h-6" />
  };
  
  const features = storeFeatures.map(f => ({
    ...f,
    icon: iconMap[f.icon] || <Sparkles className="w-6 h-6" />
  }));

  return (
    <section id="features-section" className="relative py-24 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-teal-600 font-bold text-sm tracking-widest uppercase mb-3"
            >
              <span className="w-8 h-[2px] bg-teal-500"></span>
              Why Choose Us
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              Travel Smarter, <br className="hidden md:block" />
              Not Harder.
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <p className="text-slate-500 max-w-sm text-right leading-relaxed text-lg">
              We combine advanced AI with local expertise to give you a seamless travel experience.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(13,148,136,0.1)] hover:border-teal-100 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-6 ${feature.color} bg-opacity-10`}>
                {React.cloneElement(feature.icon as React.ReactElement, { className: `w-7 h-7 ${feature.color.replace('bg-', 'text-')}` })}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                {feature.description}
              </p>

              {/* Interactive Arrow */}
              <div className="flex items-center gap-2 text-sm font-bold text-slate-300 group-hover:text-teal-600 transition-colors cursor-pointer mt-auto">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WAVE BOTTOM -> Transition to Slate-50 (Popular Destinations) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50 transform rotate-180 origin-center"></path>
        </svg>
      </div>
    </section>
  );
};

export default Features;