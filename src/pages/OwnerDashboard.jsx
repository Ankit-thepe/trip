import React from "react";
import DashboardCard from "../components/Owner/DashboardCard";
import SlotManager from "../components/Owner/SlotManager";
import Navbar from "../components/Navbar";
import IndexOne from "../components/Owner/IndexOne";
import IndexTwo from "../components/Owner/IndexTwo";
import IndexThree from "../components/Owner/IndexThree";
import IndexFour from "../components/Owner/IndexFour";
import SlotBoard from "../components/Owner/SlotBoard";
import ServiceManager from "../components/Owner/ServiceManager";
import OtherServices from "../components/Owner/OtherServices";

const dashboardData = [
  {
    title: "Today's Booking",
    value: 5,
    subtitle: "✅ Completed: 2 | ⏳ Ongoing: 3",
    color: "border-green-500",
    category1: "Completed",
    category2: "Pending",
  },
  {
    title: "Active Slots",
    value: 3,
    subtitle: "🔴 Occupied: 2 | 🟢 Free: 1",
    color: "border-red-500",
    category1: "Occupied",
    category2: "Free",
  },
  {
    title: "In Progress",
    value: 2,
    subtitle: "🧼 Washing: 2 | 🛠 Mechanical: 2",
    color: "border-yellow-500",
    category1: "Washing",
    category2: "Mechanical",
  },
  {
    title: "Daily Summary",
    value: "2.5K",
    subtitle: "📈 New Arrivals: 3 | 📋 Bookings: 14",
    color: "border-blue-500",
  },
];
const sampleData = [
  { time: "2 PM", status: "Booked" },
  { time: "2 PM", status: "Booked" },
  { time: "2 PM", status: "Active" },
];

// 👇 Render dynamic component based on index
const renderIndexComponent = (index) => {
  switch (index) {
    case 0:
      return <IndexOne />;
    case 1:
      return <IndexTwo data={sampleData}/>;
    case 2:
      return <IndexThree />;
    case 3:
      return <IndexFour />;
    default:
      return null;
  }
};

const OwnerDashboard = () => {
  return (
    <div className="min-h-screen py-6 px-4 pt-20" style={{ backgroundColor: "#dfdfdf" }}>
      {/* Header */}
      <Navbar />
      <div className="bg-teal-500 text-white py-4 text-center rounded-md">
        <h1 className="text-2xl font-bold">★ STAR GARAGE</h1>
        <p className="text-sm italic">~ owner / manager name</p>
      </div>

      {/* Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardData.map((item, index) => (
          <div key={index}>
            <DashboardCard {...item} />
            {/* Render component conditionally */}
            {renderIndexComponent(index)}
          </div>
        ))}
      </div>

      {/* Slot Management (optional) */}
      <SlotBoard />
      <SlotManager /> 
      <ServiceManager />
      <OtherServices />
    </div>
  );
};

export default OwnerDashboard;
