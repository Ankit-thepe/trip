// src/components/Destinations/TravelGuide.tsx
import React from 'react';
import { BookOpen, Map, Camera, Compass } from 'lucide-react';

export const TravelGuide: React.FC = () => {
  const guides = [
    {
      icon: BookOpen,
      title: 'Travel Tips',
      description: 'Essential advice for planning your perfect trip',
      color: 'blue',
    },
    {
      icon: Map,
      title: 'Local Guides',
      description: 'Connect with experienced local tour guides',
      color: 'green',
    },
    {
      icon: Camera,
      title: 'Photo Spots',
      description: 'Discover the most Instagram-worthy locations',
      color: 'purple',
    },
    {
      icon: Compass,
      title: 'Hidden Gems',
      description: 'Explore off-the-beaten-path destinations',
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; hover: string }> = {
      blue: { bg: 'bg-blue-100', icon: 'text-blue-600', hover: 'hover:bg-blue-200' },
      green: { bg: 'bg-green-100', icon: 'text-green-600', hover: 'hover:bg-green-200' },
      purple: { bg: 'bg-purple-100', icon: 'text-purple-600', hover: 'hover:bg-purple-200' },
      orange: { bg: 'bg-orange-100', icon: 'text-orange-600', hover: 'hover:bg-orange-200' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Travel Resources
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to make your trip unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => {
            const Icon = guide.icon;
            const colors = getColorClasses(guide.color);
            
            return (
              <div 
                key={guide.title}
                className={`${colors.bg} ${colors.hover} p-6 rounded-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className={`${colors.icon} mb-4`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600">
                  {guide.description}
                </p>
                <button className="mt-4 text-sm font-semibold text-gray-900 group-hover:underline">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
