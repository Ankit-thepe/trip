import React from "react";
import { Star, Truck, Shield, CircleDollarSign, Wrench, CalendarCheck } from "lucide-react";
// Import the 'motion' component from framer-motion for animations
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const featuresData = [
  {
    icon: <Star className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "Top-Rated Garages",
    description: "Access our network of trusted and customer-reviewed garages.",
    iconBg: "bg-yellow-500",
  },
  {
    icon: <CalendarCheck className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "Live Slot Booking",
    description: "Check for quick availability and book your service instantly.",
    iconBg: "bg-teal-500",
  },
  {
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "Authorised Parts",
    description: "We guarantee only genuine OEM and OES parts for your vehicle.",
    iconBg: "bg-gray-800",
  },
  {
    icon: <Truck className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "Speedy Delivery",
    description: "Get your auto parts delivered swiftly, typically within 1-2 days.",
    iconBg: "bg-red-500",
  },
  {
    icon: <Wrench className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "All Vehicle Services",
    description: "Comprehensive care for all vehicles — Bikes, Cars, and CVs.",
    iconBg: "bg-slate-600",
  },
  {
    icon: <CircleDollarSign className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    title: "Transparent Pricing",
    description: "No hidden fees. Know your service and parts costs upfront.",
    iconBg: "bg-blue-500",
  },
];


export default function FeaturesSection() {
  return (
    <section className="overflow-x-hidden"> {/* Prevents horizontal scrollbars from animations */}
      {/* Header with improved styling */}
      <div className="bg-teal-600 text-white text-center py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
        <p className="max-w-2xl mx-auto mt-2 text-teal-100">
          We provide a seamless and trustworthy experience for all your car care needs.
        </p>
      </div>

      {/* Container for cards */}
      <div className="bg-slate-50 px-4 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => {
            // Define animation variants for sliding in from left or right
            const cardVariants = {
              hidden: { 
                opacity: 0, 
                x: index % 2 === 0 ? 100 : -100 // Slide from right for even, left for odd
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            };
            
            return (
              // This wrapper div is now a motion component
              <motion.div
                key={feature.title}
                className={`flex md:contents ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible" // Triggers animation when element is in view
                viewport={{ once: true, amount: 0.5 }} // Animation runs once when 50% is visible
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  iconBg={feature.iconBg}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}