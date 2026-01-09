// src/components/Destinations/TestimonialsSection.tsx
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  destination: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'The AI recommendations were spot on! Found the perfect beach destination for our family vacation. The planning tools made everything so easy.',
    destination: 'Bali, Indonesia',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    image: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    text: 'Incredible experience! The personalized suggestions helped us discover hidden gems in Japan that we would have never found on our own.',
    destination: 'Kyoto, Japan',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Madrid, Spain',
    image: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    text: 'Best travel planning platform I\'ve used. The seasonal recommendations were perfect, and we saved so much money with the price comparisons!',
    destination: 'Swiss Alps',
  },
  {
    id: 4,
    name: 'Raj Patel',
    location: 'Mumbai, India',
    image: 'https://i.pravatar.cc/150?img=4',
    rating: 5,
    text: 'The chat feature understood exactly what we were looking for. Ended up booking an amazing adventure trip to Manali. Highly recommend!',
    destination: 'Manali, India',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">Trusted by Thousands</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real travelers who found their perfect destinations with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Destination Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-6">
                <span>✈️</span>
                <span>{testimonial.destination}</span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-50"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50K+', label: 'Happy Travelers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '150+', label: 'Destinations' },
            { value: '98%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
