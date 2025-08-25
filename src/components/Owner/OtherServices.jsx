import React from "react";
import { useNavigate } from "react-router-dom";
import { 
    FaTools, 
    FaUserCog, 
    FaChartBar,
} from "react-icons/fa";

// --- Combined and Enhanced Component ---

const OtherServices = () => {
  const navigate = useNavigate();

  // Centralized data for all service cards
  // NOTE: Replace the placeholder URLs with your actual image paths.
  const servicesData = [
    {
      category: "Booking & Slot Management",
      icon: <FaTools className="text-xl text-blue-500" />,
      items: [
        { title: "Requests", path: "/owner/requests", iconUrl: "https://placehold.co/64x64/DBEAFE/3B82F6?text=REQ" },
        { title: "Booking History", path: "/historyowner", iconUrl: "https://placehold.co/64x64/DBEAFE/3B82F6?text=HIST" },
        { title: "Upcoming Bookings", path: "/upcomingowner", iconUrl: "https://placehold.co/64x64/DBEAFE/3B82F6?text=UP" },
        { title: "Job Summary", path: "/owner/job-summary", iconUrl: "https://placehold.co/64x64/DBEAFE/3B82F6?text=SUM" },
      ],
    },
    {
      category: "Profile Setting",
      icon: <FaUserCog className="text-xl text-green-500" />,
      items: [
        { title: "Profile", path: "/owner/profile", iconUrl: "https://placehold.co/64x64/D1FAE5/10B981?text=PROF" },
        { title: "Gallery Setting", path: "/galleryowner", iconUrl: "https://placehold.co/64x64/D1FAE5/10B981?text=GAL" },
        { title: "Statistics", path: "/statisticsowner", iconUrl: "https://placehold.co/64x64/D1FAE5/10B981?text=STAT" },
        { title: "Accounts & Password", path: "/passwordowner", iconUrl: "https://placehold.co/64x64/D1FAE5/10B981?text=KEY" },
      ],
    },
    {
      category: "Business Management",
      icon: <FaChartBar className="text-xl text-purple-500" />,
      items: [
        { title: "Revenue Summary", path: "/owner/revenue", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=REV" },
        { title: "Inventory Management", path: "/owner/inventory", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=INV" },
        { title: "Daily Taskboard", path: "/owner/taskboard", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=TASK" },
        { title: "Customer Feedback", path: "/feedbackowner", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=FDBK" },
        { title: "Mechanic Assignment", path: "/owner/mechanics", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=MECH" },
        { title: "Service Reports", path: "/owner/reports", iconUrl: "https://placehold.co/64x64/E9D5FF/8B5CF6?text=RPT" },
      ],
    },
  ];

  const ServiceCard = ({ title, iconUrl, path }) => (
    <div
      onClick={() => navigate(path)}
      className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-300"
    >
      <img
        src={iconUrl}
        alt={title}
        className="w-16 h-16 object-contain mb-3 rounded-full bg-white p-1 shadow-md"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/ccc/ffffff?text=Error'; }}
      />
      <p className="text-sm font-semibold text-gray-800">{title}</p>
    </div>
  );

  return (
    <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 rounded-lg mt-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Dashboard Controls</h1>
            <p className="text-gray-500 mt-2">Access all your management tools and settings from one place.</p>
        </div>

        <div className="space-y-12">
          {servicesData.map((section) => (
            <div key={section.category} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="mr-3 p-2 bg-gray-100 rounded-full">{section.icon}</div>
                <h2 className="text-xl font-bold text-gray-800">{section.category}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {section.items.map((item) => (
                  <ServiceCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
