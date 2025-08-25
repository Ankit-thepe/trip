import React, { useState } from 'react';
import { FaCalendarCheck, FaTruck, FaCar, FaMotorcycle } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ActivitiesSection = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  const bookedSlots = [
    { id: 1, date: "30 July", time: "12 PM", vehicle: "Car" },
    { id: 2, date: "5 Aug", time: "3 PM", vehicle: "Bike" },
    { id: 3, date: "12 Aug", time: "10 AM", vehicle: "Car" },
  ];
  const ongoingOrders = [
    { id: 1, item: "2 Seat Covers", status: "Arriving Today" },
    { id: 2, item: "4 Brakes", status: "Arriving 30 July" },
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    // --- CHANGE: Added flex flex-col and the fixed h-70 class ---
    <div className="bg-white rounded-xl p-4 h-70 shadow-md border flex flex-col">
      <h2 className="text-xl py-2 px-2 font-bold text-gray-800 flex-shrink-0">My Activities</h2>

      {/* --- Tab Navigation (flex-shrink-0 prevents it from shrinking) --- */}
      <div className="flex border-b border-gray-200 flex-shrink-0">
        <button
          onClick={() => setActiveTab('bookings')}
          className={`flex-1 py-2 font-semibold text-center transition-colors duration-300 flex items-center justify-center gap-2 ${
            activeTab === 'bookings' 
              ? 'text-teal-600 border-b-2 border-teal-600' 
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          <FaCalendarCheck />
          Booked Slots
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`flex-1 py-2 font-semibold text-center transition-colors duration-300 flex items-center justify-center gap-2 ${
            activeTab === 'orders' 
              ? 'text-teal-600 border-b-2 border-teal-600' 
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          <FaTruck />
          Ongoing Orders
        </button>
      </div>

      {/* --- Tab Content (flex-grow makes it fill the remaining space) --- */}
      <div className="pt-3 overflow-y-auto flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'bookings' && (
            <motion.div
              key="bookings"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-3"
            >
              {bookedSlots.map((slot) => (
                <div key={slot.id} className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-xl">
                      {slot.vehicle === 'Car' ? <FaCar /> : <FaMotorcycle />}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800">{slot.vehicle} Service</p>
                      <p className="text-sm text-gray-500">{slot.date} at {slot.time}</p>
                    </div>
                  </div>
                  <Link to="#" className="text-sm font-semibold text-teal-600 hover:underline">View</Link>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'orders' && (
            <motion.div
              key="orders"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-3"
            >
              {ongoingOrders.map((order) => (
                <div key={order.id} className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border">
                  <div>
                      <p className="font-semibold text-gray-800">{order.item}</p>
                      <p className="text-sm text-gray-500">{order.status}</p>
                  </div>
                  <Link to="#" className="text-sm font-semibold text-teal-600 hover:underline">Track</Link>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ActivitiesSection;