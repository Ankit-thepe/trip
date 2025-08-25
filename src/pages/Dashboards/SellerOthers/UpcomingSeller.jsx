import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, User, Car, Wrench, Calendar, FileText, Search, Clock, PhoneCall, XCircle } from 'lucide-react';

// --- Mock Data for Upcoming Bookings ---
const mockUpcomingBookings = [
    {
        id: 5, bookingId: 'BKN-005', date: '2025-08-03', slotTime: '04:00 PM - 05:00 PM', status: 'Scheduled', estimatedAmount: 3500,
        customer: { name: 'Arjun Nair', phone: '9112233445', email: 'arjun.nair@email.com' },
        vehicle: { make: 'Volkswagen', model: 'Polo', year: 2019, regNo: 'KL07 XY7890' },
        workSummary: 'Clutch plate inspection',
        workDetails: 'Customer reports clutch slipping at high RPMs. Needs inspection and possible replacement.',
        estimatedParts: [ { name: 'Clutch Set (Estimate)', qty: 1, price: 2500 } ],
        estimatedLabour: 1000,
    },
    {
        id: 6, bookingId: 'BKN-006', date: '2025-08-04', slotTime: '11:00 AM - 12:30 PM', status: 'Scheduled', estimatedAmount: 6500,
        customer: { name: 'Meera Krishnan', phone: '9988771122', email: 'meera.k@email.com' },
        vehicle: { make: 'Kia', model: 'Seltos', year: 2022, regNo: 'TN05 YZ1122' },
        workSummary: 'Denting and Painting for front bumper',
        workDetails: 'Minor dent on the front-left side of the bumper with paint scratches. Requires dent pulling and repainting.',
        estimatedParts: [ { name: 'Paint & Consumables', qty: 1, price: 3000 } ],
        estimatedLabour: 3500,
    },
    {
        id: 7, bookingId: 'BKN-007', date: '2025-08-04', slotTime: '03:00 PM - 03:30 PM', status: 'Scheduled', estimatedAmount: 800,
        customer: { name: 'Rohan Sharma', phone: '9876543210', email: 'rohan.sharma@email.com' },
        vehicle: { make: 'Maruti Suzuki', model: 'Swift', year: 2021, regNo: 'MH12 AB1234' },
        workSummary: 'Tyre Puncture Repair',
        workDetails: 'Customer has a flat tyre (rear-right). Needs puncture repair and tyre rotation.',
        estimatedParts: [ { name: 'Puncture Kit', qty: 1, price: 150 } ],
        estimatedLabour: 650,
    },
];

// --- Helper: Upcoming Booking Card Component ---
const UpcomingBookingCard = ({ booking, isExpanded, onToggle }) => {
    const statusColor = 'bg-blue-100 text-blue-800';

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* --- Summary View --- */}
            <div className="p-4 cursor-pointer hover:bg-gray-50" onClick={onToggle}>
                <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div>
                        <p className="font-bold text-indigo-600">ID: {booking.bookingId}</p>
                        <p className="text-lg font-bold text-gray-800">{booking.vehicle.make} {booking.vehicle.model}</p>
                        <p className="text-sm text-gray-500">{booking.customer.name}</p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                        <p className={`text-xs font-bold px-2 py-1 rounded-full inline-block ${statusColor}`}>{booking.status}</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">~ ₹{booking.estimatedAmount.toLocaleString('en-IN')}</p>
                        <p className="text-xs text-gray-500">{new Date(booking.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p className="text-sm text-gray-600 truncate pr-4">Service: {booking.workSummary}</p>
                    <button className="flex items-center text-sm font-semibold text-indigo-600">
                        {isExpanded ? 'View Less' : 'View Details'}
                        {isExpanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                    </button>
                </div>
            </div>

            {/* --- Detailed View (Expanded) --- */}
            {isExpanded && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Customer & Vehicle Details */}
                        <div>
                            <h4 className="font-bold text-gray-700 mb-3">Booking Details</h4>
                            <div className="space-y-3 text-sm">
                                <p className="flex items-center"><User size={14} className="mr-2 text-gray-500"/><strong>Customer:</strong> <span className="ml-2 text-gray-600">{booking.customer.name} ({booking.customer.phone})</span></p>
                                <p className="flex items-center"><Car size={14} className="mr-2 text-gray-500"/><strong>Vehicle:</strong> <span className="ml-2 text-gray-600">{booking.vehicle.make} {booking.vehicle.model} ({booking.vehicle.regNo})</span></p>
                                <p className="flex items-center"><Calendar size={14} className="mr-2 text-gray-500"/><strong>Service Date:</strong> <span className="ml-2 text-gray-600">{new Date(booking.date).toLocaleDateString()}</span></p>
                                <p className="flex items-center"><Clock size={14} className="mr-2 text-gray-500"/><strong>Slot Time:</strong> <span className="ml-2 text-gray-600">{booking.slotTime}</span></p>
                            </div>
                        </div>
                        {/* Work to be Done */}
                        <div>
                            <h4 className="font-bold text-gray-700 mb-3">Work to be Done</h4>
                            <p className="text-sm text-gray-600 bg-white p-3 rounded-md border">{booking.workDetails}</p>
                        </div>
                    </div>
                    {/* Booking Receipt (Pro-forma) */}
                    <div className="mt-6">
                        <h4 className="font-bold text-gray-700 mb-3">Booking Receipt (Estimated)</h4>
                        <div className="bg-white border rounded-lg p-4">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2 font-semibold">Item (Estimated)</th>
                                        <th className="text-center py-2 font-semibold">Qty</th>
                                        <th className="text-right py-2 font-semibold">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {booking.estimatedParts.map(part => (
                                        <tr key={part.name} className="border-b">
                                            <td className="py-2 text-gray-600">{part.name}</td>
                                            <td className="py-2 text-center text-gray-600">{part.qty}</td>
                                            <td className="py-2 text-right text-gray-600">₹{part.price.toLocaleString('en-IN')}</td>
                                        </tr>
                                    ))}
                                    <tr className="border-b">
                                        <td className="py-2 text-gray-600">Labour Charges (Est.)</td>
                                        <td className="py-2 text-center text-gray-600">-</td>
                                        <td className="py-2 text-right text-gray-600">₹{booking.estimatedLabour.toLocaleString('en-IN')}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="font-bold">
                                        <td colSpan="2" className="text-right py-2">Estimated Total</td>
                                        <td className="text-right py-2 text-lg">₹{booking.estimatedAmount.toLocaleString('en-IN')}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-end items-center gap-3 mt-4">
                        <button className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-sm">
                            <XCircle size={16} className="mr-2"/> Cancel Booking
                        </button>
                        <button className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            <PhoneCall size={16} className="mr-2"/> Call Customer
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Main Upcoming Bookings Page Component ---
export default function UpcomingSeller() {
    const [expandedBookingId, setExpandedBookingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleToggleExpand = (id) => {
        setExpandedBookingId(expandedBookingId === id ? null : id);
    };

    const groupedBookings = useMemo(() => {
        let bookings = [...mockUpcomingBookings];

        if (searchTerm) {
            const lowercasedFilter = searchTerm.toLowerCase();
            bookings = bookings.filter(booking =>
                booking.customer.name.toLowerCase().includes(lowercasedFilter) ||
                booking.vehicle.make.toLowerCase().includes(lowercasedFilter) ||
                booking.vehicle.model.toLowerCase().includes(lowercasedFilter) ||
                booking.vehicle.regNo.toLowerCase().replace(/\s+/g, '').includes(lowercasedFilter.replace(/\s+/g, '')) ||
                booking.bookingId.toLowerCase().includes(lowercasedFilter)
            );
        }

        bookings.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort ascending for upcoming

        const groups = bookings.reduce((acc, booking) => {
            const date = new Date(booking.date);
            const today = new Date();
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);

            let dateString;
            if (date.toDateString() === today.toDateString()) {
                dateString = 'Today';
            } else if (date.toDateString() === tomorrow.toDateString()) {
                dateString = 'Tomorrow';
            } else {
                dateString = date.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            }

            if (!acc[dateString]) acc[dateString] = [];
            acc[dateString].push(booking);
            return acc;
        }, {});

        return groups;

    }, [searchTerm]);

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900">Upcoming Bookings</h1>
                    <p className="mt-2 text-lg text-gray-600">Manage your scheduled appointments and prepare for services.</p>
                </div>

                <div className="mb-6 sticky top-4 z-10">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><Search size={20} /></span>
                        <input
                            type="text"
                            placeholder="Search by Customer, Vehicle, or Booking ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {Object.keys(groupedBookings).length > 0 ? (
                        Object.entries(groupedBookings).map(([date, bookings]) => (
                            <section key={date}>
                                <h2 className="text-lg font-bold text-gray-800 pb-2 mb-4 border-b-2 border-gray-200">{date}</h2>
                                <div className="space-y-4">
                                    {bookings.map(booking => (
                                        <UpcomingBookingCard
                                            key={booking.id}
                                            booking={booking}
                                            isExpanded={expandedBookingId === booking.id}
                                            onToggle={() => handleToggleExpand(booking.id)}
                                        />
                                    ))}
                                </div>
                            </section>
                        ))
                    ) : (
                        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                            <p className="text-gray-500">No upcoming bookings found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
