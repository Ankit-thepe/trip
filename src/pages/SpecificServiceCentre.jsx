import React from "react";

const SpecificServiceCentre = () => {
  return (
    <div className="min-h-screen bg-[#d6d6d6] flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">FixNSlot</h1>
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Welcome to FixNSlot!
        </h2>
      </div>
    </div>
  );
};

export default SpecificServiceCentre;
