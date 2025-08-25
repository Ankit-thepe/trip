// src/components/BookSlot/BookSlotMainPage/FilterBar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaCogs, FaCar, FaMotorcycle, FaTruck, FaBolt, FaFilter, FaStar, FaRoute } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// A custom hook to detect clicks outside a component
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

const FilterBar = ({ filters, onFilterChange }) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const advancedFilterRef = useRef();

  // Close the popover if a click is detected outside of it
  useClickOutside(advancedFilterRef, () => setIsAdvancedOpen(false));

  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Pune', 'Indore'];
  const services = ['Car Wash', 'AC Repair', 'Oil Change', 'General Service'];
  const vehicleTypes = [
    { type: 'All', icon: 'All' },
    { type: 'car', icon: <FaCar /> },
    { type: 'motorcycle', icon: <FaMotorcycle /> },
    { type: 'truck', icon: <FaTruck /> },
    { type: 'ev', icon: <FaBolt /> },
  ];

  const handleFilter = (key, value) => {
    if (key === 'vehicleType' && filters.vehicleType === value) {
      onFilterChange({ ...filters, [key]: 'All' });
    } else {
      onFilterChange({ ...filters, [key]: value });
    }
  };

  return (
    <div className="sticky top-16 bg-white shadow-sm z-40 p-3 sm:p-4 border-b border-gray-200">
      <div className="container mx-auto">
        {/* --- Top Bar: Now a Flexbox layout --- */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* City Dropdown - now wider */}
          <div className="relative flex-grow">
            <FaMapMarkerAlt className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <select className="w-full text-sm sm:text-base pl-8 sm:pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none appearance-none" value={filters.city} onChange={(e) => handleFilter('city', e.target.value)}>
              <option value="">All Cities</option>
              {cities.map((city) => <option key={city} value={city}>{city}</option>)}
            </select>
          </div>
          {/* Service Dropdown - now wider */}
          <div className="relative flex-grow">
            <FaCogs className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <select className="w-full text-sm sm:text-base pl-8 sm:pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none appearance-none" value={filters.service} onChange={(e) => handleFilter('service', e.target.value)}>
              <option value="">All Services</option>
              {services.map((srv) => <option key={srv} value={srv}>{srv}</option>)}
            </select>
          </div>
          
          {/* Advanced Filters Button - now icon-only and compact */}
          <div className="relative flex-shrink-0" ref={advancedFilterRef}>
            <button 
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)} 
              className="w-12 h-12 flex items-center justify-center border rounded-lg bg-gray-50 hover:bg-gray-100 font-semibold"
            >
              <FaFilter className="text-lg" />
            </button>
            <AnimatePresence>
              {isAdvancedOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border p-4 space-y-4"
                >
                  <h4 className="font-semibold">Advanced Filters</h4>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><FaRoute /> Distance</label>
                    <select className="w-full p-2 border rounded-md text-sm" value={filters.distance} onChange={(e) => handleFilter('distance', e.target.value)}>
                      <option value="All">Any</option>
                      <option value="0-5km">0-5 km</option>
                      <option value="5-10km">5-10 km</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><FaStar /> Rating</label>
                    <select className="w-full p-2 border rounded-md text-sm" value={filters.rating} onChange={(e) => handleFilter('rating', e.target.value)}>
                      <option value="All">Any</option>
                      <option value="4+">4+ Stars</option>
                      <option value="3+">3+ Stars</option>
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* --- Category Bar: Always visible with larger, responsive buttons --- */}
        <div className="pt-4 mt-4 border-t border-gray-100">
           <h3 className="text-center text-sm font-semibold text-gray-600 mb-3">Select Vehicle Type</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {vehicleTypes.map((vehicle) => (
              <button
                key={vehicle.type}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold rounded-full flex items-center justify-center gap-2 transition-all duration-300 ${
                  filters.vehicleType === vehicle.type
                    ? `bg-teal-500 text-white shadow-md`
                    : `bg-gray-100 text-gray-700 hover:bg-gray-200`
                }`}
                onClick={() => handleFilter('vehicleType', vehicle.type)}
              >
                {vehicle.icon}
                <span className="hidden sm:inline">{vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilterBar;