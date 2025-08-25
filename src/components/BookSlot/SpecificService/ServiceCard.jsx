// src/components/BookSlot/SpecificService/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ id, name, description, price, imageUrl, selected, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="flex items-start gap-4 py-4 border-b last:border-b-0">
      <img src={imageUrl} alt={name} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0" />
      <div className="flex-1">
        <h4 className="text-base sm:text-lg font-bold text-gray-900">{name}</h4>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        <span className="text-teal-600 font-bold text-lg mt-2 block">{price}</span>
      </div>
      {selected ? (
        <button
          onClick={() => onRemoveFromCart(id)}
          className="px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-red-100 text-red-700 hover:bg-red-200 flex-shrink-0"
        >
          Remove
        </button>
      ) : (
        <button
          onClick={() => onAddToCart({ id, name, price, imageUrl })}
          className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white flex-shrink-0"
        >
          Add
        </button>
      )}
    </div>
  );
};

export default ServiceCard;