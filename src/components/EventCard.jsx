import React from 'react';
import { motion } from 'framer-motion';
import { LocationIcon, CalendarIcon } from './Icons';

const EventCard = ({ event, onSelect }) => {
  const availabilityRatio = event.available_seats / event.total_seats;
  let availabilityColor = 'bg-green-500';
  let availabilityText = 'Available';

  if (availabilityRatio < 0.1) {
    availabilityColor = 'bg-red-500';
    availabilityText = 'Selling Fast!';
  } else if (availabilityRatio < 0.5) {
    availabilityColor = 'bg-yellow-500';
    availabilityText = 'Limited Seats';
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, type: "spring" }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
      onClick={() => onSelect(event)}
    >
      <div className="relative">
        <img src={event.img} alt={event.title} className="w-full h-48 object-cover" />
        <div className={`absolute top-4 right-4 text-xs font-bold text-white px-3 py-1 rounded-full ${availabilityColor}`}>
          {availabilityText}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <LocationIcon />
          <span className="ml-2">{event.location}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <CalendarIcon />
          <span className="ml-2">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-blue-600">${event.price}</p>
          <span className="text-sm font-semibold text-gray-700">{event.available_seats} / {event.total_seats} seats left</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;