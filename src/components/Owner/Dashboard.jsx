import React from 'react';

// --- SVG Icons for a better UI ---
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const WrenchScrewdriverIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const CurrencyRupeeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 4h4m-8 4h10M5 21V3a2 2 0 012-2h10a2 2 0 012 2v3.586a1 1 0 01-.293.707l-2.414 2.414a1 1 0 00-.293.707V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.586a1 1 0 00-.293-.707l-2.414-2.414A1 1 0 015 8.414V21z" />
    </svg>
);


// --- Sub-Components with Enhanced UI ---

const TimeStatusList = ({ data }) => (
  <div className="bg-white shadow-lg rounded-xl p-4 transition-all duration-300 hover:shadow-2xl">
    <h3 className="text-lg font-bold text-gray-800 mb-4">Today's Schedule</h3>
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <ClockIcon />
            <span className="text-gray-700 font-medium ml-2 text-sm">{item.time}</span>
          </div>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            item.status.toLowerCase() === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {item.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const SlotOverview = ({ slots }) => (
  <div className="bg-white shadow-lg rounded-xl p-4 transition-all duration-300 hover:shadow-2xl">
    <h3 className="text-lg font-bold text-gray-800 mb-4">Slot Overview</h3>
    <div className="space-y-4">
      {slots.map((slot, index) => (
        <div key={index} className="flex items-start">
          <div className="bg-indigo-500 text-white font-bold text-center px-3 py-3 rounded-lg shadow-md text-sm flex-shrink-0">
            {slot.slotName}
          </div>
          <div className="ml-3 w-full">
            {slot.activeService.length > 0 && (
              <div className="mb-2">
                <h4 className="text-xs font-semibold text-gray-500 mb-1">Active</h4>
                {slot.activeService.map((service, idx) => (
                  <div key={idx} className="text-sm font-medium text-green-800 bg-green-100 p-2 rounded-md mb-1">{service}</div>
                ))}
              </div>
            )}
            <div>
                <h4 className="text-xs font-semibold text-gray-500 mb-1">Queued</h4>
                {slot.servicesList.map((service, idx) => (
                <div key={idx} className="bg-gray-100 p-2 my-1 text-sm rounded-md text-gray-600">
                    {service}
                </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const VehicleStats = ({ stats }) => (
  <div className="bg-white shadow-lg rounded-xl p-4 transition-all duration-300 hover:shadow-2xl">
    <h3 className="text-lg font-bold text-gray-800 mb-4">Daily Statistics</h3>
    <div className="space-y-3">
      {stats.map((stat, index) => (
        <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center">
                {stat.icon}
                <span className="text-sm text-gray-700 font-medium">{stat.label}</span>
            </div>
          <span className="text-sm font-bold text-indigo-600">{stat.value}</span>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Dashboard Component ---
function Dashboard() {
  // Data remains the same, but we can add icons now
  const pendingItems = [
    { description: "Repair Scheduled", color: "bg-yellow-500" },
    { description: "Washing", color: "bg-yellow-500" },
  ];
  const completedItems = [
    { description: "Repair Done", color: "bg-green-500" },
  ];
  const timeData = [
    { time: '10:00 AM', status: 'Active' },
    { time: '11:00 AM', status: 'Inactive' },
    { time: '12:00 PM', status: 'Active' },
  ];
  const slotData = [
    { slotName: "Slot 1", activeService: ["Washing", "Repair"], servicesList: ["Puncture", "Painting"] },
    { slotName: "Slot 2", activeService: ["Repair"], servicesList: ["Washing", "Painting", "AC Check"] }
  ];
  const vehicleStatsData = [
    { label: "Vehicles Repaired", value: "10", icon: <WrenchScrewdriverIcon /> },
    { label: "Bookings Made", value: "5", icon: <CalendarIcon /> },
    { label: "Total Earnings", value: "₹2500.00", icon: <CurrencyRupeeIcon /> },
  ];

  const mainCardsData = [
      { title: "JOBS", value: "4", subtitle: "Total jobs for today", color: "from-blue-500 to-blue-400" },
      { title: "SLOTS", value: "2", subtitle: "Total slots available", color: "from-red-500 to-red-400" },
      { title: "AVAILABLE", value: "2", subtitle: "Slots available now", color: "from-yellow-500 to-yellow-400" },
      { title: "REVENUE", value: "₹7k", subtitle: "Today's total revenue", color: "from-green-500 to-green-400" },
  ]

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
        {/* Main Dashboard Cards with improved responsive grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {mainCardsData.map((card, index) => (
                <div key={index} className={`bg-gradient-to-br ${card.color} text-white rounded-xl shadow-lg p-4 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                    <div>
                        <div className="text-3xl sm:text-4xl font-extrabold">{card.value}</div>
                        <div className="text-base font-bold uppercase tracking-wider">{card.title}</div>
                    </div>
                    <div className="text-xs opacity-80 mt-2">{card.subtitle}</div>
                </div>
            ))}
        </div>

        {/* Grid for the rest of the dashboard sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Pending & Completed Section */}
            <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-2xl">
                 <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Job Status</h2>
                 <div className="flex flex-col sm:flex-row justify-around items-center gap-4">
                    <div className="w-full">
                        <h3 className="text-base font-semibold mb-2 text-center text-gray-600">Pending</h3>
                        <div className="space-y-2">
                            {pendingItems.map((item, idx) => (
                            <div key={idx} className={`w-full p-2 ${item.color} text-center rounded-lg text-sm font-semibold text-white shadow-md transition-transform hover:scale-105`}>
                                {item.description}
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="text-base font-semibold mb-2 text-center text-gray-600">Completed</h3>
                         <div className="space-y-2">
                            {completedItems.map((item, idx) => (
                            <div key={idx} className={`w-full p-2 ${item.color} text-center rounded-lg text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 flex items-center justify-center`}>
                                <CheckCircleIcon/> {item.description}
                            </div>
                            ))}
                        </div>
                    </div>
                 </div>
            </div>
            
            <TimeStatusList data={timeData} />
            <SlotOverview slots={slotData} />
            <VehicleStats stats={vehicleStatsData} />
        </div>
    </div>
  );
}

export default Dashboard;
