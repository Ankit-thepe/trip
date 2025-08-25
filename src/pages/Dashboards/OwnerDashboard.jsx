import React from "react";
import Navbar from "../../components/NavbarMain";
import Dashboard from "../../components/Owner/Dashboard";
import SlotManager from "../../components/Owner/SlotManager";
import SlotBoard from "../../components/Owner/SlotBoard";
import ServiceManager from "../../components/Owner/ServiceManager";
import OtherServices from "../../components/Owner/OtherServices";
import { FaTachometerAlt, FaClipboardList, FaCalendarAlt, FaCogs, FaEllipsisH } from "react-icons/fa";

// A reusable Panel component for consistent styling
const DashboardPanel = ({ title, icon, children }) => (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 h-full flex flex-col">
        <div className="flex items-center mb-4">
            <div className="mr-3 p-2 bg-gray-100 text-indigo-600 rounded-full">{icon}</div>
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="flex-grow">
            {children}
        </div>
    </div>
);


const OwnerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-8 mt-8 sm:p-6 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-6 px-6 text-center rounded-2xl shadow-xl mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">★ STAR GARAGE</h1>
            <p className="text-sm sm:text-base text-indigo-100 mt-1">Welcome, Owner / Manager Name</p>
          </header>

          {/* Main Dashboard Grid */}
          <div className="space-y-8">
            <DashboardPanel title="At a Glance" icon={<FaTachometerAlt />}>
                <Dashboard />
            </DashboardPanel>

            <DashboardPanel title="Today's Slot Board" icon={<FaClipboardList />}>
                <SlotBoard />
            </DashboardPanel>

            <DashboardPanel title="Manage Slots" icon={<FaCalendarAlt />}>
                <SlotManager />
            </DashboardPanel>

            <DashboardPanel title="Service Management" icon={<FaCogs />}>
                <ServiceManager />
            </DashboardPanel>

            <DashboardPanel title="More Options" icon={<FaEllipsisH />}>
                <OtherServices />
            </DashboardPanel>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OwnerDashboard;
