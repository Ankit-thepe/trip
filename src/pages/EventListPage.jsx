import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { mockEvents } from '../data/mockData';
import EventCard from '../components/EventCard';

const EventListPage = ({ onSelectEvent, onNavigate }) => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    let filteredEvents = mockEvents;
    if (searchTerm) filteredEvents = filteredEvents.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()));
    if (location) filteredEvents = filteredEvents.filter(e => e.location === location);
    if (date) filteredEvents = filteredEvents.filter(e => new Date(e.date) >= new Date(date));
    setEvents(filteredEvents);
  }, [searchTerm, location, date]);

  const uniqueLocations = [...new Set(mockEvents.map(e => e.location))];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Upcoming Events</h1>
            <button onClick={() => onNavigate('home')} className="text-blue-600 font-semibold hover:underline">&larr; Back to Home</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-6 bg-white rounded-xl shadow-md">
          <input type="text" placeholder="Search by event name..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition bg-white" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">All Locations</option>
            {uniqueLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
          <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => <EventCard key={event.id} event={event} onSelect={onSelectEvent} />)}
          </div>
        </AnimatePresence>
        {events.length === 0 && <div className="text-center py-16"><p className="text-xl text-gray-500">No events match your criteria.</p></div>}
      </div>
    </div>
  );
};

export default EventListPage;