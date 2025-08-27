import React, { useState } from 'react';
import { mockEvents } from '../data/mockData';
import ActionButton from '../components/ActionButton';

const AdminDashboard = ({ onNavigate }) => {
    const [events, setEvents] = useState(mockEvents);

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this event?")) {
            // In a real app, this would be an API call.
            setEvents(events.filter(e => e.id !== id));
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
                    <div>
                        <button onClick={() => onNavigate('home')} className="text-blue-600 font-semibold hover:underline mr-4">&larr; Back to Home</button>
                        <ActionButton onClick={() => alert("The form to add a new event would open here.")}>+ Add New Event</ActionButton>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-2xl overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="p-4 font-semibold">Event Title</th>
                                <th className="p-4 font-semibold">Location</th>
                                <th className="p-4 font-semibold">Date</th>
                                <th className="p-4 font-semibold">Seats (Available / Total)</th>
                                <th className="p-4 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map(event => (
                                <tr key={event.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="p-4 font-medium text-gray-800">{event.title}</td>
                                    <td className="p-4 text-gray-600">{event.location}</td>
                                    <td className="p-4 text-gray-600">{new Date(event.date).toLocaleDateString()}</td>
                                    <td className="p-4 text-gray-600">{event.available_seats} / {event.total_seats}</td>
                                    <td className="p-4">
                                        <button className="text-blue-500 hover:text-blue-700 font-semibold mr-4">Edit</button>
                                        <button onClick={() => handleDelete(event.id)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;