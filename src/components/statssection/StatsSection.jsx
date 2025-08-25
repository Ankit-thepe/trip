import React from "react";
import { motion } from "framer-motion";
import StatsCard from "./StatsCard";
import { useScreenSize } from "../../hooks/useScreenSize"; // Ensure this hook exists

// Import your icons
import serviceIcon from "../../assets/images/servicecentre.png";
import partsIcon from "../../assets/images/star.png";
import ratingIcon from "../../assets/images/star.png";
import customerIcon from "../../assets/images/customer.png";
import cityIcon from "../../assets/images/city.png";

const statsData = [
  { icon: serviceIcon, value: "100", label: "Service Centres" },
  { icon: partsIcon, value: "30", label: "Autoparts Dealers" },
  { icon: ratingIcon, value: "4.0", label: "Average Rating", isInteger: false },
  { icon: customerIcon, value: "10000", label: "Happy Customers" },
  { icon: cityIcon, value: "50", label: "Cities Covered" },
];

const StatsSection = () => {
  const { isMobile } = useScreenSize();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <div className="bg-slate-50 py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* --- NEW: Section Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Journey in Numbers
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud of the trust we've built with our customers and partners across the country.
          </p>
        </div>
        {/* --- End of Section Header --- */}
        
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 hidden md:block lg:hidden" />

          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-6">
            {statsData.map((stat, index) => {
              let tabletLayoutClasses = '';
              if (index < 3) {
                tabletLayoutClasses = `md:col-span-2 md:col-start-${index * 2 + 1}`;
              } else {
                tabletLayoutClasses = `md:col-span-2 md:col-start-${index === 3 ? 2 : 4} md:mt-8`;
              }
              const laptopLayoutClasses = 'lg:col-span-1 lg:col-start-auto lg:mt-0';

              return (
                <div
                  key={index}
                  className={`${tabletLayoutClasses} ${laptopLayoutClasses}`}
                >
                  <StatsCard
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    isInteger={stat.isInteger}
                    isMobile={isMobile}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;