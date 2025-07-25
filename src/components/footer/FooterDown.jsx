import React from "react";
import DownloadButton from "../../components/Appdownload/DownloadButton.jsx";

// Icons and Images (replace with your actual paths)
import logo from "../../assets/images/star.png";
import playIcon from "../../assets/images/customer.png";
import appleIcon from "../../assets/images/city.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";


const FooterDown = () => {
  return (
    <footer className="bg-gray-200 py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        
        {/* Left: Logo and Address */}
        <div className="flex flex-col gap-4 max-w-sm">
          <img src={logo} alt="Logo" className="w-28 h-auto" />
          <h2 className="text-xl font-semibold">Company Name</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Racecourse Rd, near Gola ka Mandir, <br />
            Mela Ground, Thatipur, <br />
            Gwalior, Madhya Pradesh 474005
          </p>
          <div className="flex gap-4 mt-2 text-2xl text-gray-800">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </div>
        </div>

        {/* Middle: Contact Info */}
        <div className="flex flex-col gap-4 pt-5">
          <div className="flex items-center gap-2">
            <MdEmail className="text-lg" />
            <p>FixnSlot@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone className="text-lg" />
            <p>9999999999</p>
          </div>
          <div className="mt-45">
            <p>@@devlopment work in progress</p>
          </div>
        </div>

        {/* Right: App Download Buttons */}
        <div className="flex flex-col gap-20 py-10">
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
    </footer>
  );
};

export default FooterDown;
