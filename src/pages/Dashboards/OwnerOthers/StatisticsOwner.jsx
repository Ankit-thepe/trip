import React, { useState, useMemo } from 'react';
import { DollarSign, BarChart2, Users, Star, Car, Bike, Wrench } from 'lucide-react';

// --- Mock Data (Detailed & Hardcoded for Functionality) ---
const mockStatsData = {
    day: {
        revenue: { total: 8500, trend: 15, data: [ { name: 'Today', value: 8500 } ] },
        bookings: { total: 7, new: 3, repeat: 4 },
        vehicleBreakdown: { '4-Wheelers': 5, '2-Wheelers': 2, 'EVs': 0 },
        topServices: [ { name: 'Oil Change', count: 3 }, { name: 'AC Repair', count: 2 } ],
        averageRating: 4.8,
    },
    week: {
        revenue: { total: 52300, trend: 8, data: [ { name: 'Mon', value: 7200 }, { name: 'Tue', value: 8100 }, { name: 'Wed', value: 6500 }, { name: 'Thu', value: 9200 }, { name: 'Fri', value: 11300 }, { name: 'Sat', value: 10000 }, { name: 'Sun', value: 0 } ] },
        bookings: { total: 45, new: 18, repeat: 27 },
        vehicleBreakdown: { '4-Wheelers': 30, '2-Wheelers': 15, 'EVs': 5 },
        topServices: [ { name: 'Oil Change', count: 15 }, { name: 'Car Wash', count: 10 }, { name: 'Suspension', count: 8 } ],
        averageRating: 4.6,
    },
    month: {
        revenue: { total: 215000, trend: 12, data: [ { name: 'Week 1', value: 48000 }, { name: 'Week 2', value: 55000 }, { name: 'Week 3', value: 51000 }, { name: 'Week 4', value: 61000 } ] },
        bookings: { total: 180, new: 60, repeat: 120 },
        vehicleBreakdown: { '4-Wheelers': 120, '2-Wheelers': 50, 'EVs': 10 },
        topServices: [ { name: 'Periodic Service', count: 50 }, { name: 'Oil Change', count: 45 }, { name: 'Denting & Painting', count: 25 } ],
        averageRating: 4.7,
    },
    year: {
        revenue: { total: 2500000, trend: 25, data: [ { name: 'Jan', value: 180000 }, { name: 'Feb', value: 200000 }, { name: 'Mar', value: 220000 }, { name: 'Apr', value: 190000 }, { name: 'May', value: 230000 }, { name: 'Jun', value: 250000 }, { name: 'Jul', value: 210000 }, { name: 'Aug', value: 240000 }, { name: 'Sep', value: 260000 }, { name: 'Oct', value: 280000 }, { name: 'Nov', value: 290000 }, { name: 'Dec', value: 350000 } ] },
        bookings: { total: 2050, new: 700, repeat: 1350 },
        vehicleBreakdown: { '4-Wheelers': 1400, '2-Wheelers': 550, 'EVs': 100 },
        topServices: [ { name: 'Periodic Service', count: 600 }, { name: 'Oil Change', count: 500 }, { name: 'Insurance Renewal', count: 200 } ],
        averageRating: 4.6,
    },
};

// --- Helper Components ---
const StatCard = ({ title, value, icon, trend }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <div className="text-gray-400">{icon}</div>
        </div>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        {trend && <p className={`text-xs mt-1 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? `▲ ${trend}%` : `▼ ${Math.abs(trend)}%`} vs previous period
        </p>}
    </div>
);

const RevenueChart = ({ data }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    return (
        <div className="h-64 flex items-end justify-around gap-2 pt-4">
            {data.map(item => (
                <div key={item.name} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-indigo-100 rounded-t-lg hover:bg-indigo-300 transition-colors" style={{ height: `${(item.value / maxValue) * 100}%` }}></div>
                    <p className="text-xs text-gray-500 mt-2">{item.name}</p>
                </div>
            ))}
        </div>
    );
};

const VehicleTypePieChart = ({ data }) => {
    const total = Object.values(data).reduce((sum, val) => sum + val, 0);
    const colors = { '4-Wheelers': 'bg-blue-500', '2-Wheelers': 'bg-teal-500', 'EVs': 'bg-green-500' };
    let cumulativePercentage = 0;
    const segments = Object.entries(data).map(([name, value]) => {
        const percentage = (value / total) * 100;
        const segment = { name, value, percentage, startAngle: cumulativePercentage };
        cumulativePercentage += percentage;
        return segment;
    });

    const conicGradient = `conic-gradient(${segments.map(s => `${colors[s.name]} ${s.startAngle}% ${s.startAngle + s.percentage}%`).join(', ')})`;

    return (
        <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-40 h-40 rounded-full" style={{ background: conicGradient }}></div>
            <div className="space-y-2">
                {segments.map(s => (
                    <div key={s.name} className="flex items-center">
                        <div className={`w-4 h-4 rounded-sm mr-2 ${colors[s.name]}`}></div>
                        <span className="font-semibold text-gray-700">{s.name}:</span>
                        <span className="ml-2 text-gray-600">{s.value} ({s.percentage.toFixed(1)}%)</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Main Statistics Page Component ---
export default function StatisticsOwner() {
    const [timeFilter, setTimeFilter] = useState('month');
    const stats = mockStatsData[timeFilter];

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* --- Header & Filters --- */}
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900">Business Statistics</h1>
                        <p className="mt-2 text-lg text-gray-600">Your performance overview at a glance.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center bg-gray-200 p-1 rounded-lg">
                        {['day', 'week', 'month', 'year'].map(filter => (
                            <button
                                key={filter}
                                onClick={() => setTimeFilter(filter)}
                                className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors capitalize ${timeFilter === filter ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-600 hover:bg-gray-300'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Key Metrics Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard title="Total Revenue" value={`₹${stats.revenue.total.toLocaleString('en-IN')}`} icon={<DollarSign />} trend={stats.revenue.trend} />
                    <StatCard title="Total Bookings" value={stats.bookings.total} icon={<BarChart2 />} />
                    <StatCard title="New Customers" value={stats.bookings.new} icon={<Users />} />
                    <StatCard title="Average Rating" value={stats.averageRating} icon={<Star />} />
                </div>

                {/* --- Revenue & Bookings Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
                    <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-800">Revenue Overview</h3>
                        <p className="text-sm text-gray-500 mb-4">Revenue generated in the selected period.</p>
                        <RevenueChart data={stats.revenue.data} />
                    </div>
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-800">Bookings by Vehicle Type</h3>
                        <p className="text-sm text-gray-500 mb-4">Breakdown of services by vehicle.</p>
                        <VehicleTypePieChart data={stats.vehicleBreakdown} />
                    </div>
                </div>

                {/* --- Service & Customer Details Section --- */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">More Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-3">Top Services</h4>
                            <ul className="space-y-2">
                                {stats.topServices.map(service => (
                                    <li key={service.name} className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded-md">
                                        <span className="flex items-center"><Wrench size={14} className="mr-2 text-gray-500"/> {service.name}</span>
                                        <span className="font-bold text-gray-800">{service.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-3">Customer Mix</h4>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-2/3">
                                        <p className="text-sm">New Customers</p>
                                        <div className="bg-gray-200 rounded-full h-2.5"><div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(stats.bookings.new / stats.bookings.total) * 100}%`}}></div></div>
                                    </div>
                                    <p className="w-1/3 text-right font-bold">{stats.bookings.new}</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2/3">
                                        <p className="text-sm">Repeat Customers</p>
                                        <div className="bg-gray-200 rounded-full h-2.5"><div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(stats.bookings.repeat / stats.bookings.total) * 100}%`}}></div></div>
                                    </div>
                                    <p className="w-1/3 text-right font-bold">{stats.bookings.repeat}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
