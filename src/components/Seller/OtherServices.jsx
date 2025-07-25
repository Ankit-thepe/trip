// src/components/Owner/OtherServices.jsx
import React from "react";
import OtherServicesCard from "./OtherServicesCard";
import { FaTools, FaUserCog } from "react-icons/fa";

// Booking & Slot Icons
import requestsIcon from "../../assets/images/requests.png";
import bookingIcon from "../../assets/images/booking-history.png";
import upcomingIcon from "../../assets/images/services.png"; // substitute with correct one if needed
import summaryIcon from "../../assets/images/job-summary.png";

// Profile Setting Icons
import profileIcon from "../../assets/images/profile.png";
import galleryIcon from "../../assets/images/gallery.png";
import statsIcon from "../../assets/images/statistics.png";
import passwordIcon from "../../assets/images/password.jpg";

// Business Management Icons
import revenueIcon from "../../assets/images/revenue.png";
import inventoryIcon from "../../assets/images/inventory.png";
import taskboardIcon from "../../assets/images/taskboard.png";
import feedbackIcon from "../../assets/images/feedback.png";
import mechanicIcon from "../../assets/images/mechanic.png";
import reportsIcon from "../../assets/images/reports.png";

const OtherServices = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-white bg-teal-500 py-4 rounded-md shadow-md">
        Others
      </h1>

      {/* Booking & Slot Management */}
      <div className="mb-10 w-full bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <FaTools className="text-xl mr-2 text-teal-600" />
          <h2 className="text-xl font-semibold text-gray-800">
            Booking & Slot Management
          </h2>
        </div>
        <hr className="mb-6 border-gray-300" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <OtherServicesCard title="Requests" icon={requestsIcon} />
          <OtherServicesCard title="Booking History" icon={bookingIcon} />
          <OtherServicesCard title="Upcoming Bookings" icon={upcomingIcon} />
          <OtherServicesCard title="Job Summary per Booking" icon={summaryIcon} />
        </div>
      </div>

      {/* Profile Setting */}
      <div className="mb-10 w-full bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <FaUserCog className="text-xl mr-2 text-teal-600" />
          <h2 className="text-xl font-semibold text-gray-800">Profile Setting</h2>
        </div>
        <hr className="mb-6 border-gray-300" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <OtherServicesCard title="Profile" icon={profileIcon} />
          <OtherServicesCard title="Gallery Setting" icon={galleryIcon} />
          <OtherServicesCard title="Statistics" icon={statsIcon} />
          <OtherServicesCard title="Accounts & Password" icon={passwordIcon} />
        </div>
      </div>

      {/* Business Management */}
      <div className="mb-10 w-full bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <span className="text-xl mr-2 text-teal-600">📊</span>
          <h2 className="text-xl font-semibold text-gray-800">Business Management</h2>
        </div>
        <hr className="mb-6 border-gray-300" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <OtherServicesCard title="Revenue Summary" icon={revenueIcon} />
          <OtherServicesCard title="Inventory Management" icon={inventoryIcon} />
          <OtherServicesCard title="Daily Taskboard" icon={taskboardIcon} />
          <OtherServicesCard title="Customer Feedback" icon={feedbackIcon} />
          <OtherServicesCard title="Mechanic Assignment" icon={mechanicIcon} />
          <OtherServicesCard title="Service Reports" icon={reportsIcon} />
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
