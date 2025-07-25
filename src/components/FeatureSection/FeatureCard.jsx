import React from "react";

const FeatureCard = ({ icon, title, description, iconBg }) => {
  return (
    <div className="bg-white rounded-tr-4xl rounded-bl-4xl p-4 shadow-sm w-100">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-15 h-15 ${iconBg} rounded-full flex items-center justify-center`}>
          {icon}
        </div>
        <span className="font-bold text-sm px-15">{title}</span>
      </div>
      <p className="text-xs text-gray-600 px-1 flex justify-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
