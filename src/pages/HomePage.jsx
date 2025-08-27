import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import SpeakersSection from '../sections/SpeakersSection';
import SponsorsSection from '../sections/SponsorsSection';
import PricingSection from '../sections/PricingSection';
import FaqSection from '../sections/FaqSection';
import Footer from '../sections/Footer';

const HomePage = ({ onNavigate }) => (
    <div>
        <HeroSection onNavigate={onNavigate} />
        <AboutSection />
        <SpeakersSection />
        <SponsorsSection />
        <PricingSection onNavigate={onNavigate} />
        <FaqSection />
        <Footer />
    </div>
);

export default HomePage;