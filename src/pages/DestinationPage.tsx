// src/pages/DestinationPage.tsx
import { HeroSection } from '../components/Destinations/HeroSection';
import { SeasonalRecommendations } from '../components/Destinations/SeasonalRecommendations';
import { AIChatRecommendations } from '../components/Destinations/AIChatRecommendations';
import { DestinationReview } from '../components/Destinations/DestinationReview';
import { TrendingCategories } from '../components/Destinations/TrendingCategories';
import { TestimonialsSection } from '../components/Destinations/TestimonialsSection';

export default function DestinationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
        <HeroSection />
        
        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            className="w-full h-16 text-gray-50" 
            viewBox="0 0 1440 120" 
            fill="none"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 120V0C217.5 62.5 434.5 87.5 722 87.5C1009.5 87.5 1222.5 62.5 1440 0V120H0Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Trending Categories */}
       
        
        {/* Seasonal Recommendations */}
        <div className="mt-16">
          <SeasonalRecommendations />
        </div>
        <div className="mt-20">
          <AIChatRecommendations />
        </div>
        {/* Destination Review & Insights */}
        <div className="mt-20">
          <DestinationReview />
        </div>
        
        {/* AI Chat Recommendations */}
        
        
        {/* Testimonials */}
        
      </div>
    </div>
  );
}