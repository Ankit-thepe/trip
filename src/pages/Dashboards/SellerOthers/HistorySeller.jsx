import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, User, Car, Wrench, Calendar, FileText, Search, Clock } from 'lucide-react';

// --- Mock Data (Expanded for better date grouping) ---
const mockBookings = [
    {
        id: 1, bookingId: 'BKN-001', date: '2025-08-03', slotTime: '10:00 AM - 11:00 AM', status: 'Completed', totalAmount: 4500,
        customer: { name: 'Rohan Sharma', phone: '9876543210', email: 'rohan.sharma@email.com' },
        vehicle: { make: 'Maruti Suzuki', model: 'Swift', year: 2021, regNo: 'MH12 AB1234' },
        workSummary: 'Periodic Service & AC Checkup',
        workDetails: 'Completed the 40,000 km periodic service. Replaced engine oil, oil filter, and air filter. Topped up all fluids. AC cooling was low, performed gas top-up and cleaned the condenser.',
        partsUsed: [ { name: 'Engine Oil (3.5L)', qty: 1, price: 1800 }, { name: 'Oil Filter', qty: 1, price: 450 }, { name: 'AC Gas Top-up', qty: 1, price: 1200 } ],
        labourCharges: 1050,
    },
    {
        id: 4, bookingId: 'BKN-004', date: '2025-08-03', slotTime: '12:00 PM - 01:00 PM', status: 'Completed', totalAmount: 1200,
        customer: { name: 'Sneha Iyer', phone: '9876501234', email: 'sneha.i@email.com' },
        vehicle: { make: 'Honda', model: 'Activa', year: 2022, regNo: 'MH14 GH5678' },
        workSummary: 'General Checkup & Oil Change',
        workDetails: 'Standard oil change and general inspection.',
        partsUsed: [ { name: 'Scooter Engine Oil', qty: 1, price: 800 } ],
        labourCharges: 400,
    },
    {
        id: 2, bookingId: 'BKN-002', date: '2025-08-02', slotTime: '02:00 PM - 03:30 PM', status: 'Completed', totalAmount: 8200,
        customer: { name: 'Priya Patel', phone: '9123456789', email: 'priya.p@email.com' },
        vehicle: { make: 'Hyundai', model: 'Creta', year: 2020, regNo: 'GJ05 CD5678' },
        workSummary: 'Brake Pad Replacement & Suspension Noise',
        workDetails: 'Replaced front brake pads and skimmed rotors. Diagnosed suspension noise, found a faulty link rod. Replaced the front-left link rod. Wheel alignment and balancing performed.',
        partsUsed: [ { name: 'Front Brake Pads Set', qty: 1, price: 3500 }, { name: 'Link Rod', qty: 1, price: 1200 } ],
        labourCharges: 3500,
    },
    {
        id: 3, bookingId: 'BKN-003', date: '2025-07-30', slotTime: '11:00 AM - 12:00 PM', status: 'Cancelled', totalAmount: 0,
        customer: { name: 'Ankit Desai', phone: '9988776655', email: 'ankit.d@email.com' },
        vehicle: { make: 'Tata', model: 'Nexon', year: 2022, regNo: 'DL10 EF9101' },
        workSummary: 'Scheduled Car Wash',
        workDetails: 'Customer cancelled the booking due to a personal emergency.',
        partsUsed: [],
        labourCharges: 0,
    },
];

// --- Helper: Booking Card Component ---
const BookingCard = ({ booking, isExpanded, onToggle }) => {
    const statusColor = booking.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';

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
                        <p className="text-lg font-bold text-gray-900 mt-1">₹{booking.totalAmount.toLocaleString('en-IN')}</p>
                        <p className="text-xs text-gray-500">{new Date(booking.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p className="text-sm text-gray-600 truncate pr-4">Summary: {booking.workSummary}</p>
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
                            <h4 className="font-bold text-gray-700 mb-3">Details</h4>
                            <div className="space-y-3 text-sm">
                                <p className="flex items-center"><User size={14} className="mr-2 text-gray-500"/><strong>Customer:</strong> <span className="ml-2 text-gray-600">{booking.customer.name} ({booking.customer.phone})</span></p>
                                <p className="flex items-center"><Car size={14} className="mr-2 text-gray-500"/><strong>Vehicle:</strong> <span className="ml-2 text-gray-600">{booking.vehicle.make} {booking.vehicle.model} ({booking.vehicle.regNo})</span></p>
                                <p className="flex items-center"><Calendar size={14} className="mr-2 text-gray-500"/><strong>Service Date:</strong> <span className="ml-2 text-gray-600">{new Date(booking.date).toLocaleDateString()}</span></p>
                                <p className="flex items-center"><Clock size={14} className="mr-2 text-gray-500"/><strong>Slot Time:</strong> <span className="ml-2 text-gray-600">{booking.slotTime}</span></p>
                            </div>
                        </div>
                        {/* Work Description */}
                        <div>
                            <h4 className="font-bold text-gray-700 mb-3">Work Description</h4>
                            <p className="text-sm text-gray-600 bg-white p-3 rounded-md border">{booking.workDetails}</p>
                        </div>
                    </div>
                    {/* Billing Summary */}
                    {booking.status === 'Completed' && (
                        <div className="mt-6">
                            <h4 className="font-bold text-gray-700 mb-3">Billing Summary</h4>
                            <div className="bg-white border rounded-lg p-4">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-2 font-semibold">Item</th>
                                            <th className="text-center py-2 font-semibold">Qty</th>
                                            <th className="text-right py-2 font-semibold">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {booking.partsUsed.map(part => (
                                            <tr key={part.name} className="border-b">
                                                <td className="py-2 text-gray-600">{part.name}</td>
                                                <td className="py-2 text-center text-gray-600">{part.qty}</td>
                                                <td className="py-2 text-right text-gray-600">₹{part.price.toLocaleString('en-IN')}</td>
                                            </tr>
                                        ))}
                                        <tr className="border-b">
                                            <td className="py-2 text-gray-600">Labour Charges</td>
                                            <td className="py-2 text-center text-gray-600">-</td>
                                            <td className="py-2 text-right text-gray-600">₹{booking.labourCharges.toLocaleString('en-IN')}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr className="font-bold">
                                            <td colSpan="2" className="text-right py-2">Total Amount</td>
                                            <td className="text-right py-2 text-lg">₹{booking.totalAmount.toLocaleString('en-IN')}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    )}
                    <div className="text-right mt-4">
                        <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm ml-auto">
                            <FileText size={16} className="mr-2"/> View Full Receipt
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Main Booking History Page Component ---
export default function HistorySeller() {
    const [expandedBookingId, setExpandedBookingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleToggleExpand = (id) => {
        setExpandedBookingId(expandedBookingId === id ? null : id);
    };

    const groupedBookings = useMemo(() => {
        let bookings = [...mockBookings];

        // Filter by search term first
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

        // Sort bookings by date, newest first
        bookings.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Group the sorted bookings by date
        const groups = bookings.reduce((acc, booking) => {
            const date = new Date(booking.date);
            const today = new Date();
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            let dateString;
            if (date.toDateString() === today.toDateString()) {
                dateString = 'Today';
            } else if (date.toDateString() === yesterday.toDateString()) {
                dateString = 'Yesterday';
            } else {
                dateString = date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
            }

            if (!acc[dateString]) {
                acc[dateString] = [];
            }
            acc[dateString].push(booking);
            return acc;
        }, {});

        return groups;

    }, [searchTerm]);

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* --- Header --- */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900">Booking History</h1>
                    <p className="mt-2 text-lg text-gray-600">Review all past service records for your garage.</p>
                </div>

                {/* --- Search Filter --- */}
                <div className="mb-6 sticky top-4 z-10">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <Search size={20} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by Customer, Vehicle, or Booking ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* --- Bookings List --- */}
                <div className="space-y-6">
                    {Object.keys(groupedBookings).length > 0 ? (
                        Object.entries(groupedBookings).map(([date, bookings]) => (
                            <section key={date}>
                                <h2 className="text-lg font-bold text-gray-800 pb-2 mb-4 border-b-2 border-gray-200">{date}</h2>
                                <div className="space-y-4">
                                    {bookings.map(booking => (
                                        <BookingCard
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
                            <p className="text-gray-500">No bookings found for the selected criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
