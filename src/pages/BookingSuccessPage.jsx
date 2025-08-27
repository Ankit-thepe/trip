import React from 'react';
import { motion } from 'framer-motion';
import Confetti from '../components/Confetti';
import ActionButton from '../components/ActionButton';
import { CheckCircleIcon, QRIcon } from '../components/Icons';

const BookingSuccessPage = ({ bookingDetails, onDone }) => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
    <Confetti />
    <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: 'spring' }} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-2xl w-full z-10">
      <CheckCircleIcon />
      <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-2">Booking Confirmed!</h1>
      <p className="text-gray-600 mb-6">Thank you, {bookingDetails.name}! Your tickets for {bookingDetails.title} are confirmed. A confirmation email has been sent to {bookingDetails.email}.</p>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-xl font-semibold mb-4">Your Ticket QR Code</h3>
        <div className="flex justify-center"><QRIcon /></div>
        <p className="text-sm text-gray-500 mt-4">Download or screenshot this code for entry.</p>
      </div>
      <ActionButton onClick={onDone}>Explore More Events</ActionButton>
    </motion.div>
  </div>
);

export default BookingSuccessPage;