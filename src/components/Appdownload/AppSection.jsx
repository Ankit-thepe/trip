import React from "react";
import StoreButton from "./DownloadButton";

// Images
import phoneImage from "../../assets/images/download.jpg";
import playIcon from "../../assets/images/customer.png";
import appleIcon from "../../assets/images/city.png";

const AppSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-15">

           {/* Left Section - Text + Buttons */}
            <div className="max-w-xl text-center lg:text-left">
               <h1 className="text-5xl sm:text-5xl font-bold text-gray-900 mb-4">
                Book Faster with Our App
               </h1>
               <p className="text-gray-600 mb-8">
                 Book services, get reminders, <br />
                  track orders & more — all in one app.
               </p>

               {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-20 justify-center lg:justify-start">
                   <StoreButton
                       icon={playIcon}
                       label="Google Play"
                       subLabel="GET IT ON"
                       link="https://play.google.com/store"
                    />
                   <StoreButton
                       icon={appleIcon}
                       label="App Store"
                       subLabel="Download on the"
                       link="https://www.apple.com/app-store/"
                     />
                </div>
           </div>

            {/* Right Section - App Mockup Image */}
            <div>
                <img
                src={phoneImage}
                alt="App Preview"
                className="w-[300px] sm:w-[350px] lg:w-[400px] object-contain"
                />
            </div>
        
        </div>
    </div>
  );
};

export default AppSection;
