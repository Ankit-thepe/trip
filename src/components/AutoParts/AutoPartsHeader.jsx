// src/components/AutoParts/AutoPartsHeader.jsx
import React from 'react';
import autoPartsCoverImage from '../../assets/images/auto-parts-cover.webp'; // Ensure this path is correct

const AutoPartsHeader   = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <img
        src={autoPartsCoverImage}
        alt="Service center garage"
        // Responsive height and object-contain to prevent image compression
        className="w-full h-48 sm:h-56 md:h-64 object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Find the Right Part for Your Ride
        </h1>
        <p className="mt-2 text-lg drop-shadow-md">
          Search by part name, brand, or category to find exactly what you need.
        </p>
      </div>
    </div>
  );
};

export default AutoPartsHeader;