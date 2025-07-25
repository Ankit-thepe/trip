// components/OtherServicesCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const OtherServicesCard = ({ icon, title }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/work-in-progress")}
      className="flex flex-col items-center justify-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-transform cursor-pointer"
    >
      {icon && (
        <div className="mb-3 w-12 h-12">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <p className="text-sm font-medium text-center text-gray-700">{title}</p>
    </div>
  );
};

export default OtherServicesCard;
