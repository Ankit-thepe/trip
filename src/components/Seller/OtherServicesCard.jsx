import React from "react";
import { useNavigate } from "react-router-dom";

const OtherServicesCard = ({ title, iconUrl, path }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-300"
    >
      <img
        src={iconUrl}
        alt={title}
        className="w-16 h-16 object-contain mb-3 rounded-full bg-white p-1 shadow-md"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/ccc/ffffff?text=Error'; }}
      />
      <p className="text-sm font-semibold text-gray-800">{title}</p>
    </div>
  );
};

export default OtherServicesCard;