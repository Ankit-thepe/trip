import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { User, Menu, X, MapPin, Calendar, Plane, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavbarStore } from '../lib/store/navbarStore';

interface NavLinkItem {
  href: string;
  label: string;
}

interface AppNavLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: 'light' | 'dark';
}

interface ProfileLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
  const { 
    isScrolled, 
    isMenuOpen, 
    isProfileOpen, 
    setIsScrolled, 
    setIsMenuOpen, 
    setIsProfileOpen,
    toggleMenuOpen 
  } = useNavbarStore();

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsProfileOpen]);

  const navLinks: NavLinkItem[] = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/transport", label: "Transport" },
    { href: "/events", label: "Trip Planner" },
    { href: "/hotels", label: "Hotels" },
  ];

  const AppNavLink: React.FC<AppNavLinkProps> = ({ to, children, variant = 'light' }) => {
    const baseClasses = "text-sm font-medium transition-all duration-200";
    
    const lightClasses = (isActive: boolean): string => 
      isActive ? "text-white font-bold" : "text-white/90 hover:text-white";
      
    const darkClasses = (isActive: boolean): string => 
      isActive ? "text-teal-600 font-bold" : "text-gray-600 hover:text-teal-600";

    return (
      <NavLink
        to={to}
        end
        className={({ isActive }) => `
          ${baseClasses} 
          ${variant === 'light' ? lightClasses(isActive) : darkClasses(isActive)}
        `}
      >
        {children}
      </NavLink>
    );
  };

  const ProfileLink: React.FC<ProfileLinkProps> = ({ to, icon, children }) => (
    <Link
      to={to}
      onClick={() => setIsProfileOpen(false)}
      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-10 py-4 z-40 bg-transparent transition-all duration-300 ${
          isScrolled 
            ? 'opacity-0 pointer-events-none -translate-y-full' 
            : 'opacity-100 pointer-events-auto translate-y-0'
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl shadow-md">
            <Plane className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl tracking-wide text-white">
            TripGenie
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
             <AppNavLink key={link.href} to={link.href}>
               {link.label}
             </AppNavLink>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link to="/booking" className="text-sm font-semibold bg-gradient-to-r from-teal-600 to-blue-600 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
              Book Now
            </Link>
            
            <button className="p-2 rounded-full transition-all duration-200 hover:bg-white/20 border border-white/30">
               <User className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenuOpen}
              className="p-2 rounded-lg transition-all duration-200 border border-white/30 hover:bg-white/20"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Floating Pill Navbar */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: -100, x: "-50%", opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 20 }}
            className="hidden md:flex fixed top-4 left-1/2 z-40 items-center bg-white/95 backdrop-blur-xl border border-gray-200/60 shadow-xl rounded-full px-2 py-2"
          >
              <Link to="/" className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-teal-50 to-teal-100 rounded-full hover:shadow-sm transition-all ml-1">
                <Plane className="h-5 w-5 text-teal-600" />
              </Link>

            <div className="w-px h-5 bg-gray-200 mx-4"></div>

            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <AppNavLink key={link.href} to={link.href} variant="dark">
                  {link.label}
                </AppNavLink>
              ))}
            </div>

            <div className="w-px h-5 bg-gray-200 mx-4"></div>

            <div className="relative mr-1" ref={profileRef}>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User size={18} className="text-gray-700" />
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl py-2 z-[60] border border-gray-100 overflow-hidden origin-top-right"
                  >
                    <ProfileLink to="/my-trips" icon={<MapPin size={16} />}>My Trips</ProfileLink>
                    <ProfileLink to="/bookings" icon={<Calendar size={16} />}>My Bookings</ProfileLink>
                    <div className="border-t border-gray-100 my-1"></div>
                    <ProfileLink to="/login" icon={<User size={16} />}>Login / Sign Up</ProfileLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 w-full bg-white shadow-lg border-b border-gray-200 md:hidden z-30 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                 <NavLink
                   key={link.href} 
                   to={link.href} 
                   end
                   onClick={() => setIsMenuOpen(false)}
                   className={({ isActive }) =>
                     `py-3 px-4 rounded-xl transition-all duration-200 ${
                       isActive
                         ? "font-bold text-teal-700 bg-teal-50"
                         : "text-gray-600 hover:bg-gray-50"
                     }`
                   }
                 >
                   {link.label}
                 </NavLink>
              ))}
              <div className="border-t border-gray-100 pt-3 mt-2">
                <Link to="/booking" onClick={() => setIsMenuOpen(false)} className="block w-full text-center py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors">
                  Book Now
                </Link>
              </div>
              <div className="border-t border-gray-100 pt-3 mt-1">
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block w-full text-center py-3 text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-colors">
                  Login / Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
