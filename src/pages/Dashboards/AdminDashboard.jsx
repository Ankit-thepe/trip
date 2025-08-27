// src/pages/Dashboards/AdminDashboard.jsx
import React from 'react';
import { 
    FaUsers, 
    FaChartBar, 
    FaShieldAlt, 
    FaCogs,
    FaFileAlt,
    FaBell
} from 'react-icons/fa';
import DashboardPanel from '../../components/Admin/DashboardPanel.jsx'; // Import the new component
import PartnerRequest from '../../components/Admin/PartnerRequests.jsx';
import UserManagement from '../../components/Admin/UserManagement.jsx';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-4 sm:p-6 lg:p-8 pt-20">
        <div className="max-w-7xl mx-auto">
          
          <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-6 text-center rounded-2xl shadow-xl mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Admin Control Panel</h1>
            <p className="text-sm sm:text-base text-indigo-100 mt-1">
              Manage users, content, and system settings.
            </p>
          </header>

          <div className="space-y-8">

            <DashboardPanel title="Partner Management" icon={<FaUsers />}>
              <PartnerRequest />
            </DashboardPanel>

            <DashboardPanel title="Management" icon={<FaChartBar />}>
               <UserManagement />
            </DashboardPanel>
            
            <DashboardPanel title="Content Moderation" icon={<FaShieldAlt />}>
              <p>Content for moderating user-generated content goes here...</p>
            </DashboardPanel>

            <DashboardPanel title="Reports & Logs" icon={<FaFileAlt />}>
              <p>Content for viewing reports and system logs goes here...</p>
            </DashboardPanel>

            <DashboardPanel title="Notifications" icon={<FaBell />}>
              <p>Content for sending notifications to users goes here...</p>
            </DashboardPanel>

            <DashboardPanel title="System Settings" icon={<FaCogs />}>
              <p>Content for configuring system settings goes here...</p>
            </DashboardPanel>

          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;