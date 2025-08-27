import React from 'react';
import { motion } from 'framer-motion';

const ActionButton = ({ children, onClick, className = '', type = 'button' }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0px 5px 20px rgba(0,0,0,0.2)" }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    type={type}
    className={`px-8 py-3 font-semibold text-white bg-blue-600 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 ${className}`}
  >
    {children}
  </motion.button>
);

export default ActionButton;