import React from "react";
import DashboardCard from "../components/Seller/DashboardCard";

import Navbar from "../components/Navbar";
import IndexOne from "../components/Seller/IndexOne";
import IndexTwo from "../components/Seller/IndexTwo";
import IndexThree from "../components/Seller/IndexThree";
import IndexFour from "../components/Seller/IndexFour";
import AutoPartsDashboard from "../components/Seller/AutoPartsDashboard";

import OtherServices from "../components/Seller/OtherServices";
import Dashboard from "../components/Seller/Dashboard";

const dashboardData = [
  {
    title: "Items Listed",
    value: 50,
    color: "border-green-500",
    
  },
  {
    title: "Verification Pendings",
    value: 3,
    color: "border-yellow-500",
    
  },
  {
    title: "Out of Stock",
    value: 5, 
    color: "border-red-500",  
  },
  {
    title: "Orders Today",
    value: "10",
    
    color: "border-blue-500",
  },
];


// 👇 Render dynamic component based on index
const renderIndexComponent = (index) => {
  switch (index) {
    case 0:
      return null;
    case 1:
      return <IndexTwo/>;
    case 2:
      return <IndexThree />;
    case 3:
      return <IndexFour />;
    default:
      return null;
  }
};

const SellerDashboard = () => {
  return (
    <div className="min-h-screen py-6 px-4 pt-20" style={{ backgroundColor: "#dfdfdf" }}>
      {/* Header */}
      <Navbar />
      <div className="bg-teal-500 text-white py-4 text-center rounded-md">
        <h1 className="text-4xl font-bold">AUTO PARTS SELLER</h1>
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
      <div>
        
        <Dashboard />
      </div>
      <AutoPartsDashboard />
      <OtherServices />
      

      {/* Footer */}
    </div>
  );
};

export default SellerDashboard;
