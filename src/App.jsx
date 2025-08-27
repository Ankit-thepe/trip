import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import HomePage from './pages/HomePage';
import EventListPage from './pages/EventListPage';
import EventDetailsPage from './pages/EventDetailsPage';
import BookingSuccessPage from './pages/BookingSuccessPage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setCurrentPage('details');
  };

  const handleBookTicket = (details) => {
    // In a real app, you'd also update the event's available seats
    setBookingDetails(details);
    setCurrentPage('success');
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
    setCurrentPage('events');
  };
  
  const handleDone = () => {
      setBookingDetails(null);
      setSelectedEvent(null);
      setCurrentPage('events');
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'events':
        return <EventListPage onSelectEvent={handleSelectEvent} onNavigate={setCurrentPage} />;
      case 'details':
        return <EventDetailsPage event={selectedEvent} onBack={handleBackToEvents} onBook={handleBookTicket} />;
      case 'success':
        return <BookingSuccessPage bookingDetails={bookingDetails} onDone={handleDone} />;
      case 'admin':
        return <AdminDashboard onNavigate={setCurrentPage} />;
      case 'home':
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans bg-gray-50">
        {/* Global Admin Panel Nav */}
        {currentPage !== 'home' && (
         <nav className="fixed top-0 right-0 p-4 z-50">
           <button onClick={() => setCurrentPage('admin')} className="bg-white/50 backdrop-blur-sm text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-white/80 transition shadow-md">
             Admin Panel
           </button>
         </nav>
        )}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}