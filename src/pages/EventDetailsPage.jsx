import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ActionButton from '../components/ActionButton';
import { LocationIcon, CalendarIcon, TicketIcon } from '../components/Icons';

const EventDetailsPage = ({ event, onBack, onBook }) => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && quantity > 0) onBook({ ...event, quantity, name, email });
    else alert("Please fill in all fields and select at least one ticket.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8">
          <button onClick={onBack} className="text-blue-600 font-semibold mb-4 hover:underline">&larr; Back to Events</button>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{event.title}</h1>
          <img src={event.img} alt={event.title} className="w-full h-64 object-cover rounded-lg mb-4" />
          <p className="text-gray-700 mb-6">{event.description}</p>
          <div className="flex items-center text-gray-600 mb-2"><LocationIcon /><span className="ml-2">{event.location}</span></div>
          <div className="flex items-center text-gray-600 mb-4"><CalendarIcon /><span className="ml-2">{new Date(event.date).toLocaleString()}</span></div>
        </div>
        <div className="bg-gray-50 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Book Your Tickets</h2>
          <form onSubmit={handleSubmit}>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Full Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" required />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email Address</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" required />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <div className="flex justify-between items-center mb-6">
                <label className="text-gray-700 font-semibold">Quantity</label>
                <div className="flex items-center">
                  <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-1 bg-gray-200 rounded-l-lg font-bold">-</button>
                  <span className="px-4 py-1 bg-white border-t border-b">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(q => Math.min(event.available_seats, q + 1))} className="px-3 py-1 bg-gray-200 rounded-r-lg font-bold">+</button>
                </div>
              </div>
            </motion.div>
            <div className="text-center text-3xl font-bold my-6">Total: <span className="text-blue-600">${(event.price * quantity).toFixed(2)}</span></div>
            <ActionButton type="submit" className="w-full flex items-center justify-center"><TicketIcon /><span className="ml-2">Book Now</span></ActionButton>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default EventDetailsPage;