import React from "react";
import { motion } from "framer-motion";
import DownloadButton from "./DownloadButton";

// Images
import phoneImage from "../../assets/images/download.jpg";
import playIcon from "../../assets/images/customer.png"; // Assuming these are your correct play store icons
import appleIcon from "../../assets/images/city.png"; // Assuming these are your correct app store icons

const AppSection = () => {
  return (
    // The main container is now relative to position the background color block
    <div className="relative bg-slate-50 overflow-hidden">
      {/* This div creates the teal background shape */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 bg-teal-500" />

      <div className="relative max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Section - Text + Buttons */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
              Book Faster with Our App
            </h2>
            <p className="mt-4 max-w-md mx-auto lg:mx-0 text-lg text-gray-600 leading-relaxed">
              Book services, get reminders, track your orders, and access exclusive
              offers—all in one place.
            </p>

            {/* Buttons - with corrected gap */}
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <DownloadButton
                icon={playIcon}
                label="Google Play"
                subLabel="GET IT ON"
                link="https://play.google.com/store"
              />
              <DownloadButton
                icon={appleIcon}
                label="App Store"
                subLabel="Download on the"
                link="https://www.apple.com/app-store/"
              />
            </div>
          </div>

          {/* Right Section - App Mockup Image with Animation */}
          <div className="flex justify-center">
            {/* Using motion.img to animate the phone */}
            <motion.img
              src={phoneImage}
              alt="App Preview"
              className="w-[280px] sm:w-[320px] lg:w-[350px] object-contain drop-shadow-2xl"
              // This creates the subtle floating animation
              animate={{ y: ["0%", "-4%", "0%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;