import React from "react";
import NavbarMain from "../components/NavbarMain.jsx";
import { Link } from "react-router-dom";
import { CircleArrowRight, Wrench, Package } from "lucide-react";
import { motion } from "framer-motion";

// Import your background image
import designBackground from "../assets/images/design-background2.png";

import FeaturesSection from "../components/FeatureSection/FeaturesSection";
import AppSection from "../components/Appdownload/AppSection.jsx";
import ServiceCarousel from "../components/ServiceCenterSection/ServiceCarousel";
import StatsSection from "../components/statssection/StatsSection";
import Footer from "../components/footer/Footer.jsx";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Increased delay between each item
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8, // Increased duration for a slower slide
      ease: "easeOut",
    },
  },
};


// SectionCard component
const SectionCard = ({ title, to, description, icon }) => {
  const tealColor = '#008080';
  return (
    <Link
      to={to}
      className="group flex items-center w-full max-w-lg p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200"
      style={{ color: '#2D3748' }}
    >
      <div className="p-5 h-auto rounded-lg" style={{ backgroundColor: '#E2E8F0' }}>
        {React.cloneElement(icon, { style: { color: tealColor } })}
      </div>
      <div className="flex-grow mx-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
      <div
        className="p-6 bg-white rounded-full transition-colors duration-300 group-hover:bg-gray-100"
        style={{ border: `2px solid ${tealColor}` }}
      >
        <CircleArrowRight size={28} style={{ color: tealColor }} />
      </div>
    </Link>
  );
};


const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col bg-white overflow-hidden">
        
        {/* Animated background image slides in from the left */}
        <motion.img
          src={designBackground}
          alt="Decorative background"
          className="absolute top-0 left-0 h-full w-full object-cover"
          initial={{ x: "-100%" }} // Start off-screen to the left
          animate={{ x: "0%" }}      // Animate to its final position
          transition={{ duration: 1.5, ease: "easeOut" }} // Increased duration
        />
        
        {/* --- FIX: Dark overlay opacity is now set to 10% --- */}
        <div className="absolute inset-0 bg-teal/10" />

        {/* Navbar is positioned at the top */}
        <div className="absolute top-0 left-0 w-full z-30">
          <NavbarMain />
        </div>

        {/* Main Content Area */}
        <div className="relative flex-grow flex items-center w-full h-full z-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            
            <div className="hidden md:block"></div>

            {/* Right Column: Animation container */}
            <motion.div 
              className="flex flex-col justify-center items-center md:items-start gap-8 px-4 h-full pt-28 md:pt-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Animated Text Block */}
              <motion.div variants={itemVariants} className="text-center md:text-left">
                <h1 className="text-7xl md:text-8xl font-extrabold text-black drop-shadow-lg text-stroke-2 text-stroke-white">
                  Total Car Care
                </h1>
                <p className="mt-4 text-lg text-white drop-shadow-md">
                  Your one-stop destination for quality auto parts and expert vehicle services.
                </p>
              </motion.div>

              {/* Animated Cards */}
              <motion.div variants={itemVariants} className="w-full max-w-lg">
                <SectionCard
                  title="Auto Parts"
                  to="/autoparts"
                  description="Find quality spares for your car"
                  icon={<Package size={32} />}
                />
              </motion.div>
              <motion.div variants={itemVariants} className="w-full max-w-lg">
                <SectionCard
                  title="Services"
                  to="/slot-booking-2"
                  description="Book a service for your vehicle"
                  icon={<Wrench size={32} />}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subsequent Page Sections */}
      <ServiceCarousel service="Popular Service Centers" />
      <ServiceCarousel service="Featured Services" />
      <FeaturesSection />
      <StatsSection />
      <AppSection />
      <Footer />
    </div>
  );
};

export default Home;