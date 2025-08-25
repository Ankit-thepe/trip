// src/components/AutoParts/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ part }) => {
  return (
    <Link to={`/product/${part.id}`} className="block group">
      <div className="bg-white border rounded-lg overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-md hover:shadow-xl">
        
        {/* Image Container */}
        <div className="bg-gray-50 p-4 flex justify-center items-center">
          {/* --- CHANGE: Responsive image height --- */}
          <img
            src={part.image}
            alt={part.name}
            className="w-full h-32 sm:h-40 object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* --- CHANGE: Responsive padding --- */}
        <div className="p-3 sm:p-4 flex flex-col flex-grow">
          <p className="text-xs text-gray-500">{part.category}</p>
          
          {/* --- CHANGE: Responsive text size for the title --- */}
          <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate group-hover:text-teal-600 mt-1">{part.name}</h3>
          
          <div className="flex-grow" />
          
          <div className="flex justify-between items-center mt-3">
            {/* --- CHANGE: Responsive text size for the price --- */}
            <p className="text-lg sm:text-xl font-extrabold text-teal-600">₹{part.price.toFixed(2)}</p>
            
            {/* --- CHANGE: Responsive text size for the rating --- */}
            <span className="flex items-center gap-1 text-xs sm:text-sm font-semibold">
              <FaStar className="text-yellow-400" /> {part.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;