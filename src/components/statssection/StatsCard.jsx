import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter'; // Ensure this file exists

const StatsCard = ({ icon, value, label, isInteger = true, isMobile = false }) => {
  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center p-4 h-full bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
      variants={cardVariants}
    >
      {/* Icon is hidden only on mobile devices */}
      {!isMobile && (
        <div className="w-16 h-16 mb-3">
          <img src={icon} alt={label} className="w-full h-full object-contain" />
        </div>
      )}

      {/* Text sizes are adjusted for a consistent feel */}
      <h3 className="text-3xl font-bold text-teal-600">
        <AnimatedCounter to={parseFloat(value)} isInteger={isInteger} />
      </h3>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </motion.div>
  );
};

export default StatsCard;