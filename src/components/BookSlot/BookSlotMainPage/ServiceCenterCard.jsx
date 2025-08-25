// src/components/BookSlot/BookSlotMainPage/ServiceCenterCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const ServiceCenterCard = ({ id, name, description, location, rating, imageUrl, availability, distance }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/service-center/${id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group hover:-translate-y-2 transition-transform duration-300"
      onClick={handleClick}
    >
      <div className="relative">
        {/* Responsive image height */}
        <img src={imageUrl} alt={name} className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white ${
            availability === 'Available' ? 'bg-green-500' : 'bg-red-500'
          }`}>
            {availability}
        </span>
      </div>
      
      {/* Responsive padding */}
      <div className="p-3 sm:p-5">
        {/* Responsive text sizes */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{name}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center gap-1">
            <FaMapMarkerAlt className="flex-shrink-0" /> {location}
        </p>

        <div className="flex justify-between items-center mt-3 sm:mt-4">
          <span className="flex items-center gap-1 font-bold text-base sm:text-lg text-gray-800">
            <FaStar className="text-yellow-400" /> {rating}
          </span>
          {distance && (
            <span className="text-xs sm:text-sm font-semibold text-teal-600 bg-teal-50 px-2 sm:px-3 py-1 rounded-full">
              {distance} km away
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCenterCard;