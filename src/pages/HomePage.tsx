// src/pages/Home.tsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import Features from '../components/home/Features';
import PopularDestinations from '../components/home/PopularDestinations';
import ComparePricesPreview from '../components/home/ComparePrices';
import ItineraryBuilder from '../components/home/Itinerary';
import UserReviews from '../components/home/UserReviews';
import Footer from '../components/home/Footer';

const Home: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <HeroSection />
      
  
      
      {/* Inspiration */}
      <PopularDestinations />
      
      {/* Logic/Savings */}
      <ComparePricesPreview />
      
      {/* Engagement/Planning */}
      <ItineraryBuilder />

      {/* Value Proposition */}
      <Features />
      
      {/* Trust */}
      <UserReviews />
      
      <Footer />
    </main>
  );
};

export default Home;