import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { User, Menu, X } from 'lucide-react';

const NavbarMain = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Effect to handle scroll-based navbar style changes
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to handle clicks outside the profile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClasses = `font-medium text-base transition-colors duration-300 ${isTop ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-indigo-600"}`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-10 py-4 z-50 transition-all duration-300 ${
        isTop ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      {/* Left: Logo + Name */}
      <Link to="/" className="flex items-center">
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
          FixnSlot
        </span>
      </Link>

      {/* Center: Main Navigation Links (Hidden on Mobile) */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/partner" className={navLinkClasses}>
          Partner With Us
        </Link>
        {/* Add other main links here if needed */}
      </div>

      {/* Right: Actions (Profile & Mobile Menu) */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={`p-2 rounded-full transition-colors duration-300 ${isTop ? "hover:bg-white/20" : "hover:bg-gray-200"}`}
            >
              <User className={isTop ? "text-white" : "text-gray-700"} />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                <Link to="/user" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">User Dashboard</Link>
                <Link to="/owner-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Owner Dashboard</Link>
                <Link to="/seller-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seller Dashboard</Link>
                <Link to="/admin-dashboard" className="text-gray-700 hover:text-indigo-600 py-1 pl-2">Admin</Link>
                <div className="border-t my-1"></div>
                <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login / Sign Up</Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={isTop ? "text-white" : "text-gray-800"} /> : <Menu className={isTop ? "text-white" : "text-gray-800"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col p-4 space-y-2">
            <Link to="/partner" className="text-gray-700 hover:text-indigo-600 py-2">Partner With Us</Link>
            <div className="border-t"></div>
            <h3 className="text-sm font-semibold text-gray-500 pt-2">Dashboards</h3>
            <Link to="/user" className="text-gray-700 hover:text-indigo-600 py-1 pl-2">User</Link>
            <Link to="/owner-dashboard" className="text-gray-700 hover:text-indigo-600 py-1 pl-2">Owner</Link>
            <Link to="/seller-dashboard" className="text-gray-700 hover:text-indigo-600 py-1 pl-2">Seller</Link>
            <Link to="/admin-dashboard" className="text-gray-700 hover:text-indigo-600 py-1 pl-2">Admin</Link>
            <div className="border-t pt-2">
                <Link to="/login" className="text-indigo-600 font-semibold">Login / Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
