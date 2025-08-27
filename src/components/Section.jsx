import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = '' }) => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`py-16 md:py-24 px-4 ${className}`}
    >
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    </motion.section>
);

export default Section;