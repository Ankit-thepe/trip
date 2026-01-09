// src/components/Hotels/WhyBookWithUs.tsx
import React from 'react';
import { Shield, DollarSign, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Best Price Guarantee',
    description: 'Find a lower price? We\'ll match it and give you an extra discount.',
  },
  {
    icon: Shield,
    title: 'Secure Booking',
    description: 'Your payment information is protected with bank-level security.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our customer service team is available round the clock to help you.',
  },
  {
    icon: Award,
    title: 'Quality Verified',
    description: 'All properties are verified and rated by real travelers.',
  },
];

export const WhyBookWithUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Book With Us?
          </h2>
          <p className="text-xl text-gray-600">
            We make hotel booking simple, secure, and rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
