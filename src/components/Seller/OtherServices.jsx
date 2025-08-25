// src/components/Seller/OtherServices.jsx
import React from "react";
import { 
    FaTools, 
    FaUserCog, 
    FaChartBar,
} from "react-icons/fa";
import OtherServicesCard from "./OtherServicesCard"; // Import the separate card component

// --- Main Component for Seller Dashboard ---

const OtherServices = () => {
  // Centralized data for all seller service cards
  const servicesData = [
    {
      category: "Booking & Slot Management",
      icon: <FaTools className="text-xl text-blue-500" />,
      items: [
        { title: "Requests", path: "/seller/requests", iconUrl: "https://placehold.co/64x64/DBEAFE/3B82F6?text=REQ" },
        { title: "Booking History", path: "/history-seller", iconUrl: "https://placehold.co/64x64/DBEAFE/3B82F6?text=HIST" },
        { title: "Upcoming Bookings", path: "/upcoming-seller", iconUrl: "https://placehold.co/64x64/DBEAFE/3B82F6?text=UP" },
        { title: "Job Summary", path: "/seller/job-summary", iconUrl: "https://placehold.co/64x64/DBEAFE/3B82F6?text=SUM" },
      ],
    },
    {
      category: "Profile Setting",
      icon: <FaUserCog className="text-xl text-green-500" />,
      items: [
        { title: "Profile", path: "/seller/profile", iconUrl: "https://placehold.co/64x64/D1FAE5/10B981?text=PROF" },
        { title: "Gallery Setting", path: "/gallery-seller", iconUrl: "https://placehold.co/64x64/D1FAE5/10B981?text=GAL" },
        { title: "Statistics", path: "/statistics-seller", iconUrl: "https://placehold.co/64x64/D1FAE5/10B981?text=STAT" },
        { title: "Accounts & Password", path: "/account-settings-seller", iconUrl: "https://placehold.co/64x64/D1FAE5/10B981?text=KEY" },
      ],
    },
    {
      category: "Business Management",
      icon: <FaChartBar className="text-xl text-purple-500" />,
      items: [
        { title: "Revenue Summary", path: "/seller/revenue", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=REV" },
        { title: "Inventory Management", path: "/inventory", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=INV" },
        { title: "Daily Taskboard", path: "/seller/taskboard", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=TASK" },
        { title: "Customer Feedback", path: "/FeedbackSeller", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=FDBK" },
        { title: "Mechanic Assignment", path: "/seller/mechanics", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=MECH" },
        { title: "Service Reports", path: "/seller/reports", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=RPT" },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {servicesData.map((section) => (
        <div key={section.category}>
          <div className="flex items-center mb-6">
            <div className="mr-3 p-2 bg-gray-100 rounded-full">{section.icon}</div>
            <h2 className="text-xl font-bold text-gray-800">{section.category}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {section.items.map((item) => (
              <OtherServicesCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherServices;
