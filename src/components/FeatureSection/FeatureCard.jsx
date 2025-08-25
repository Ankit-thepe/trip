import React from "react";

const FeatureCard = ({ icon, title, description, iconBg }) => {
  return (
    // On mobile, card takes up most of the width. On medium screens and up, it takes the full width of its grid cell.
    <div className="w-11/12 md:w-full bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-4 mb-3">
        {/* Icon container with responsive size */}
        <div className={`w-10 h-10 md:w-12 md:h-12 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        {/* Title with responsive text size */}
        <span className="font-bold text-gray-800 text-base md:text-lg">{title}</span>
      </div>
      {/* Description text with responsive size */}
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;