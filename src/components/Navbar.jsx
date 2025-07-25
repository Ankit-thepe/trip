import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // At the top → make transparent
      // Any scroll down → set background
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 z-50 transition-all duration-300 ${
        isTop ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      {/* Left: Logo + Name */}
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
          alt="Car Service Logo"
          className="h-9 mr-3"
        />
        <span
          className={`font-bold text-xl tracking-wide transition-all duration-300 ${
            isTop ? "text-white" : "text-gray-800"
          }`}
        >
          Car Service Center
        </span>
      </div>
      <div>
        

       <Link
        to="/owner-dashboard"
        className="text-blue-600 hover:underline font-semibold"
        >
        Owner Dashboard
       </Link>
       <Link
        to="/seller-dashboard"
        className="text-blue-600 hover:underline font-semibold"
        >
        Seller Dashboard
       </Link>
       <Link
        to="/slot-booking"
        className="text-blue-600 hover:underline font-semibold"
        >
        Slot booking
       </Link>

      </div>
      {/* Right: Buttons */}
      <div>
        <Link
          to="/partner-form"
          className={`font-medium mr-6 text-base px-3 py-2 rounded-md transition ${
            isTop
              ? "text-white bg-white/20 hover:bg-white/30"
              : "text-blue-700 bg-pink-100 hover:underline"
          }`}
        >
          Partner With Us
        </Link>
        <Link
          to="/login"
          className={`px-5 py-2 rounded-md font-semibold text-base transition ${
            isTop
              ? "bg-white text-blue-700 hover:bg-gray-200"
              : "bg-blue-700 text-white hover:bg-blue-800"
          }`}
        >
          Login/SignUP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;