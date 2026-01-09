// src/components/Destinations/PopularPackages.tsx
import React from 'react';
import { useDestinationStore } from '../../lib/store/destinations/useDestinationStore';
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react';

export const PopularPackages: React.FC = () => {
  const packages = useDestinationStore((state) => state.packages);
  const destinations = useDestinationStore((state) => state.destinations);

  const getDestinationName = (destinationId: string) => {
    const dest = destinations.find(d => d.id === destinationId);
    return dest ? dest.name : 'Unknown';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Travel Packages
          </h2>
          <p className="text-xl text-gray-600">
            Handpicked packages for your perfect vacation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-48">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                {pkg.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{pkg.originalPrice - pkg.price}
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {getDestinationName(pkg.destinationId)}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {pkg.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {pkg.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{pkg.duration}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    {pkg.originalPrice && (
                      <span className="text-sm text-gray-400 line-through mr-2">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <div className="text-2xl font-bold text-blue-600">
                      ₹{pkg.price.toLocaleString()}
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1">
                    View
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
