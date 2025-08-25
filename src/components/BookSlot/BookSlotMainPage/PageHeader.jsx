// src/components/BookSlot/BookSlotMainPage/PageHeader.jsx
import React from 'react';
import garageImage from '../../../assets/images/bookslot.webp';

const PageHeader = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <img
        src={garageImage}
        alt="Service center garage"
        // Responsive height and object-contain to prevent image compression
        className="w-full h-48 sm:h-56 md:h-64 object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Find Your Perfect Service Center
        </h1>
        <p className="mt-2 text-lg drop-shadow-md">
          Select your city and service to get started.
        </p>
      </div>
    </div>
  );
};

export default PageHeader;