// src/components/Admin/DashboardPanel.jsx
import React from 'react';

const DashboardPanel = ({ title, icon, children }) => (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 h-full flex flex-col">
        <div className="flex items-center mb-4">
            <div className="mr-4 p-3 bg-gray-100 text-indigo-600 rounded-full">
                {icon}
            </div>
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="flex-grow text-gray-600">
            {children}
        </div>
    </div>
);

export default DashboardPanel;