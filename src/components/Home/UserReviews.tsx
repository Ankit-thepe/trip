import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, ThumbsUp, Users, Trophy, Globe } from 'lucide-react';
import useUserReviewsStore from '../../lib/store/home/userReviewsStore';

const UserReviews: React.FC = () => {
  const { reviews, currentIndex, nextReview, prevReview, likeReview } = useUserReviewsStore();
  const currentReview = reviews[currentIndex];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-5 text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-[11px] font-bold uppercase tracking-widest mb-4">
                <Star className="w-3 h-3 fill-teal-600" />
                Trusted by Experts
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
                Loved by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Travelers</span>.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                See why over 50,000 adventurers trust us to plan their perfect getaways. Real stories, real memories.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-10 border-t border-slate-100 pt-8"
            >
              {[
                { icon: Users, label: 'Happy Users', val: '50k+' },
                { icon: Trophy, label: 'App Rating', val: '4.9' },
                { icon: Globe, label: 'Trips Planned', val: '100k' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-black text-slate-900 flex items-center gap-1.5 mb-1">
                    {stat.val}
                  </span>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <stat.icon className="w-3 h-3 text-teal-500" /> {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="lg:col-span-7 relative h-full flex items-center">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-teal-50 to-blue-50 rounded-full blur-3xl -z-10" />

            <div className="w-full relative px-4 md:px-12">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentReview.id}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 relative"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-5">
                      <div className="relative">
                        <img 
                          src={currentReview.avatar} 
                          alt={currentReview.name} 
                          className="w-16 h-16 rounded-2xl object-cover shadow-md"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-teal-500 text-white p-1.5 rounded-lg border-[3px] border-white shadow-sm">
                          <Quote className="w-3 h-3 fill-current" />
                        </div>
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-slate-900 text-xl leading-tight">{currentReview.name}</h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold mt-1 uppercase tracking-wide">
                          <MapPin className="w-3 h-3 text-teal-500" />
                          {currentReview.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-0.5 bg-yellow-50 px-3 py-1.5 rounded-xl border border-yellow-100">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < currentReview.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-xl text-slate-600 leading-relaxed mb-8 font-medium italic">
                    "{currentReview.review}"
                  </blockquote>

                  <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => likeReview(currentReview.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-teal-50 text-slate-500 hover:text-teal-600 transition-colors text-xs font-bold"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{currentReview.likes} Helpful</span>
                    </motion.button>

                    <div className="flex gap-3">
                      <button 
                        onClick={prevReview} 
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={nextReview} 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:bg-teal-600 hover:shadow-teal-500/30 transition-all"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* WAVE BOTTOM -> Transition to Dark Footer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-900 transform rotate-180 origin-center"></path>
        </svg>
      </div>
    </section>
  );
};

export default UserReviews;