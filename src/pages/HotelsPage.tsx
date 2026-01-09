// src/pages/HotelsPage.tsx
import { HeroSection } from '../components/Hotels/HeroSection';
import { HotelCategories } from '../components/Hotels/HotelCategories';
import { FeaturedHotels } from '../components/Hotels/FeaturedHotels';
import { PopularDestinations } from '../components/Hotels/PopularDestinations';
import { WhyBookWithUs } from '../components/Hotels/WhyBookWithUs';

export default function HotelsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* Hero Section with Search */}
      <HeroSection />
      
      {/* Hotel Categories */}
      <HotelCategories />
      
      {/* Featured Hotels */}
      <FeaturedHotels />
      
      {/* Popular Destinations */}
      <PopularDestinations />
      
      {/* Why Book With Us */}
      <WhyBookWithUs />
    </main>
  );
}
