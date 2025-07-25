import React from 'react';

const StatsCard = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300 ease-in-out">
      <div className="w-20 h-20 mb-3">
        <img src={icon} alt={label} className="w-full h-full object-contain w-15 h-15 object-contain mx-auto mb-3" />
      </div>
      <h3 className="text-xl font-bold">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatsCard;
