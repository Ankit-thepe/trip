// src/components/SellerDashboard/Alerts.jsx
import React from 'react';
import { FaExclamationCircle, FaExclamationTriangle, FaFileAlt, FaClipboardCheck, FaTimesCircle } from "react-icons/fa";

// A reusable item for displaying alerts and summaries
const AlertItem = ({ item }) => (
    <div className={`flex items-center justify-between p-3 rounded-lg ${item.color}`}>
        <div className="flex items-center">
            <span className="text-white mr-3 text-lg">{item.icon}</span>
            <p className="text-sm font-semibold text-white flex-grow">{item.description}</p>
        </div>
        {item.tag && <span className="text-xs font-bold text-white bg-black bg-opacity-20 px-2 py-1 rounded-full">{item.tag}</span>}
    </div>
);

const Alerts = () => {
  // Mock data is now self-contained in this component
  const outOfStockItems = [
    { description: "Sideglass", color: "bg-red-500", icon: <FaExclamationCircle />, tag: "Out of Stock" },
  ];
  const lowStockItems = [
    { description: "Brake Pads", color: "bg-orange-500", icon: <FaExclamationTriangle />, tag: "Low Stock" },
  ];
  const todaySummaryItems = [
    { description: "Total Orders", color: "bg-blue-500", icon: <FaFileAlt />, tag: "10" },
    { description: "Completed", color: "bg-green-500", icon: <FaClipboardCheck />, tag: "5" },
    { description: "Cancelled", color: "bg-red-500", icon: <FaTimesCircle />, tag: "2" },
  ];

  return (
    <div className="space-y-8">
        {/* Inventory Alerts Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Inventory Alerts</h2>
            <div className="space-y-3">
                {outOfStockItems.map((item, i) => <AlertItem key={i} item={item} />)}
                {lowStockItems.map((item, i) => <AlertItem key={i} item={item} />)}
                {outOfStockItems.length === 0 && lowStockItems.length === 0 && (
                    <p className="text-sm text-gray-400">Inventory is healthy.</p>
                )}
            </div>
        </div>
        
        {/* Today's Summary Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Today's Summary</h2>
            <div className="space-y-3">
                {todaySummaryItems.map((item, i) => <AlertItem key={i} item={item} />)}
            </div>
        </div>
    </div>
  );
};

export default Alerts;