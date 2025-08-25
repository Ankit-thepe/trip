// src/components/TimeSlotButton.jsx
import React from 'react';

const TimeSlotButton = ({ time, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        isSelected
          ? 'bg-teal-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {time}
    </button>
  );
};

export default TimeSlotButton;