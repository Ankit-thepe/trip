// src/components/BookSlot/SpecificService/ImageGallery.jsx
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const goToPrevious = () => setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full rounded-xl overflow-hidden group">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`slide-${index}`} className="w-full h-64 md:h-96 object-cover flex-shrink-0"/>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button onClick={goToPrevious} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"><FaChevronLeft /></button>
      <button onClick={goToNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"><FaChevronRight /></button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`h-2 w-2 rounded-full transition-all ${currentIndex === index ? 'bg-white w-4' : 'bg-white/50'}`}></button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;