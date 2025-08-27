import React from 'react';
import { motion } from 'framer-motion';
import ActionButton from '../components/ActionButton';

const HeroSection = ({ onNavigate }) => (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center p-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full p-4 z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Evently</h1>
                <ActionButton onClick={() => onNavigate('events')} className="hidden sm:block">Get Started</ActionButton>
            </div>
        </div>
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
        >
            <h2 className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-4 leading-tight">
                Discover. Engage. <br />
                <span className="text-blue-600">Inspire.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                The ultimate platform for discovering and booking tickets for the most exciting events happening worldwide.
            </p>
            <ActionButton onClick={() => onNavigate('events')}>
                Explore Events
            </ActionButton>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-50" />
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }} className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-200 rounded-lg transform rotate-45 opacity-50" />
    </div>
);

export default HeroSection;