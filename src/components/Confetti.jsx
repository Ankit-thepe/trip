import React from 'react';
import { motion } from 'framer-motion';

const Confetti = () => {
  const colors = ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"];
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 150 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ backgroundColor: colors[i % colors.length], left: `${Math.random() * 100}%`, top: `${Math.random() * -50}%`, width: `${Math.random() * 12 + 4}px`, height: `${Math.random() * 12 + 4}px` }}
          animate={{ y: '120vh', x: `${Math.random() * 200 - 100}px`, rotate: Math.random() * 360 }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
        />
      ))}
    </div>
  );
};

export default Confetti;