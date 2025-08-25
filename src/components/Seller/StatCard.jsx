import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const StatCard = ({ title, value, icon, color, items = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isExpandable = items.length > 0;

  return (
    <div className="w-full bg-white rounded-2xl shadow-md border border-gray-100 
                    transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Main clickable area */}
      <button
        onClick={() => isExpandable && setIsExpanded(!isExpanded)}
        className={`w-full p-6 flex items-center justify-between text-left 
                   ${isExpandable ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <div className="flex items-center space-x-4">
          {/* Icon with circular background */}
          <div className={`flex items-center justify-center w-12 h-12 rounded-full ${color} bg-opacity-20`}>
            <span className="text-2xl">{icon}</span>
          </div>

          {/* Title + Value */}
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>

        {/* Chevron */}
        {isExpandable && (
          <ChevronDown
            className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            size={20}
          />
        )}
      </button>

      {/* Expandable details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 px-6">
              <div className="border-t border-gray-200 -mx-6 mb-3"></div>
              <ul className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center p-2 rounded-md transition-colors duration-200 hover:bg-gray-50"
                  >
                    <span className="text-lg mr-3">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-800">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StatCard;
