import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur flex justify-between items-center px-10 py-5 z-50 shadow-sm">
      {/* Left: Logo + Name */}
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
          alt="Car Service Logo"
          className="h-9 mr-3"
        />
        <span className="font-bold text-xl text-white tracking-wide">
          Car Service Center
        </span>
      </div>
      {/* Right: Login/SignUp */}
      <div>
        <Link
          to="/partner-form"
          className="text-blue-700 font-medium mr-6 text-base hover:underline bg-pink-100 px-3 py-2 rounded-md transition"
        >
          <span className="w-16 ">
          Partner With Us
          </span>
        </Link>
        <Link
          to="/login"
          className="bg-blue-700 text-white px-5 py-2 rounded-md font-semibold text-base hover:bg-blue-800 transition"
        >
          Login/SignUP
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;