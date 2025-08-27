// src/pages/SellerDashboard.jsx
import React from "react";
import Navbar from "../../components/NavbarMain";
import { FaTachometerAlt, FaBoxOpen, FaEllipsisH, FaBoxes, FaClock, FaExclamationCircle, FaFileAlt } from "react-icons/fa";
import StatCard from "../../components/Seller/StatCard";
import AutoPartsDashboard from "../../components/Seller/AutoPartsDashboard";
import OtherServices from "../../components/Seller/OtherServices";
import Dashboard from "../../components/Seller/Dashboard";

// A reusable Panel component for consistent styling, based on the design prompt.


const SellerDashboard = () => {
  // Data for the StatCards
  const dashboardData = [
    { title: "Items Listed", value: 50, icon: <FaBoxes className="text-green-500"/>, color: "border-green-500", items: [] },
    { title: "Verification Pending", value: 3, icon: <FaClock className="text-yellow-500"/>, color: "border-yellow-500", items: [{ description: "Side Glass", icon: "🕒" }] },
    { title: "Out of Stock", value: 5, icon: <FaExclamationCircle className="text-red-500"/>, color: "border-red-500", items: [{ description: "Brake Pads", icon: "❗️" }] },
    { title: "Orders Today", value: "10", icon: <FaFileAlt className="text-blue-500"/>, color: "border-blue-500", items: [{ description: "Total Orders: 10", icon: "📦" }] },
  ];

  return (
    // 1. Overall Page & Theme: Light gray background
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* Layout Container: Centered, max-width, with responsive padding */}
      <main className="p-4 sm:p-6 lg:p-8 pt-20">
        <div className="max-w-7xl mx-auto">
          
          {/* 2. Main Header Banner: Gradient, soft corners, strong shadow, and updated typography */}
          <header className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-6 px-6 text-center rounded-2xl shadow-xl mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AUTO PARTS SELLER</h1>
            <p className="text-sm sm:text-base text-teal-100 mt-1">~ owner / manager name</p>
          </header>

          {/* Stat Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardData.map((item, index) => (
              <StatCard key={index} {...item} />
            ))}
          </div>

          {/* 3. Core Component Structure: Vertically stacked panels with significant spacing */}
          <div className="space-y-8">
            
            {/* Panel for the main Dashboard */}
            <DashboardPanel title="Order Dashboard" icon={<FaTachometerAlt />}>
                <Dashboard />
            </DashboardPanel>

            {/* Panel for the Auto Parts Listing */}
            <DashboardPanel title="Auto Parts Listing" icon={<FaBoxOpen />}>
                <AutoPartsDashboard />
            </DashboardPanel>
            
            {/* Panel for Other Services */}
            <DashboardPanel title="More Options" icon={<FaEllipsisH />}>
                <OtherServices />
            </DashboardPanel>

          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;
