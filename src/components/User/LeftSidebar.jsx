import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy User Data
const mockUser = {
  name: 'Ankit Thepe',
  membership: 'Premium Member',
  email: 'ankitthepe@gmail.com',
  mobile: '+91 987654321',
  gender: 'Male',
  age: 24,
};

// Reusable Card Component for details
const DetailCard = ({ icon, label, value, bgColor }) => (
  <div className="flex items-center gap-4"> 
    <span className={`w-10 h-10 flex items-center justify-center ${bgColor} text-white rounded-lg text-xl shadow`}>
      {icon} 
    </span> 
    <div> 
      <p className="text-xs font-bold text-white/70">{label}</p> 
      <p className="text-sm font-medium text-white/90">{value}</p> 
    </div> 
  </div> 
);

const LeftSidebar = () => {
  const user = mockUser;
  // State to control the expand/collapse on mobile
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`
      bg-gradient-to-br from-teal-500 to-teal-600 text-white 
      w-full p-4 rounded-xl shadow-lg 
      md:flex md:flex-col md:items-stretch md:justify-start 
      md:sticky md:top-20 md:h-max md:w-80 md:py-6 md:px-6
    `}>
      
      {/* Clickable Header (for mobile expand/collapse) */}
      <button 
        className="w-full flex items-center justify-between md:flex-col md:justify-start md:items-stretch md:text-left md:pointer-events-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4 md:flex-col md:gap-3 md:mb-8">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-3xl shadow-lg border-2 md:border-4 border-white/90">
              <FaRegUser className="text-white/90" />
            </div>
          </div>
          {/* Text */}
          <div className="text-left md:text-center">
            <h3 className="text-lg md:text-2xl font-bold tracking-wide text-white/90">{user.name}</h3>
            <p className="text-xs md:text-sm text-white/70">{user.membership}</p>
          </div>
        </div>
        
        {/* Chevron icon, only visible on mobile */}
        <div className="md:hidden">
            <ChevronDown className={`text-white/80 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} size={28} />
        </div>
      </button>

      {/* Collapsible Section for Mobile */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="mobile-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-white/20 space-y-4">
              <DetailCard icon="📧" label="Email" value={user.email} bgColor="bg-blue-500/80" />
              <DetailCard icon="📱" label="Mobile" value={user.mobile} bgColor="bg-green-500/80" />
              <DetailCard icon={user.gender === "Male" ? "♂️" : "♀️"} label="Gender" value={user.gender} bgColor="bg-purple-500/80" />
              <DetailCard icon="🎂" label="Age" value={user.age} bgColor="bg-yellow-500/80" />
              <button className="w-full flex items-center justify-center gap-2 mt-2 py-2.5 rounded-lg bg-white/20 hover:bg-white/30 font-semibold transition-all">
                <FiLogOut />
                <span>Logout</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static Details Section for Desktop */}
      <div className="hidden md:block mt-8 p-4 rounded-2xl border border-white/20 shadow-inner">
        <h3 className="font-semibold mb-5 text-base border-b border-white/20 pb-2">
          Personal Details
        </h3>
        <div className="flex flex-col gap-4">
          <DetailCard icon="📧" label="Email" value={user.email} bgColor="bg-blue-500/80" />
          <DetailCard icon="📱" label="Mobile" value={user.mobile} bgColor="bg-green-500/80" />
          <DetailCard icon={user.gender === "Male" ? "♂️" : "♀️"} label="Gender" value={user.gender} bgColor="bg-purple-500/80" />
          <DetailCard icon="🎂" label="Age" value={user.age} bgColor="bg-yellow-500/80" />
        </div>
      </div>

      {/* Static Logout Button for Desktop */}
      <button className="hidden md:flex items-center justify-center gap-2 mt-auto w-full py-3 rounded-lg bg-white/20 hover:bg-white/30 font-semibold transition-all">
        <FiLogOut className="text-xl" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default LeftSidebar;