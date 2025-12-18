import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Send, Heart, Plane, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 border-b border-slate-800 pb-12">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-900/20">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">TripGenie</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted companion for smart travel. We combine AI precision with human passion to craft unforgettable journeys.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, backgroundColor: '#0f766e', borderColor: '#0f766e' }}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-slate-700"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold mb-6">Discover</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['Destinations', 'Flight Deals', 'Travel Guides', 'Activities'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['About Us', 'Careers', 'Privacy Policy', 'Terms'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                Join the Newsletter <Send className="w-4 h-4 text-teal-400" />
              </h4>
              <p className="text-xs text-slate-400 mb-4">Get travel deals & tips delivered to your inbox.</p>
              
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter email address"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500 transition-colors placeholder-slate-600"
                />
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white text-sm font-bold py-3 rounded-xl transition-colors shadow-lg shadow-teal-900/20"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {currentYear} TripGenie Inc. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 hover:text-teal-400 transition-colors cursor-pointer">
               <MapPin className="w-3.5 h-3.5" />
               <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-teal-400 transition-colors cursor-pointer">
               <Mail className="w-3.5 h-3.5" />
               <span>support@tripgenie.com</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> for travelers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;