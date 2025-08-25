import React from "react";
import DownloadButton from "../Appdownload/DownloadButton"; // Adjust path if needed

// Icons and Images
import logo from "../../assets/images/star.png"; // Replace with your actual logo
import playIcon from "../../assets/images/customer.png"; // Replace with your actual icon
import appleIcon from "../../assets/images/city.png"; // Replace with your actual icon
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// Reusable component for link columns
const FooterLinkColumn = ({ title, items }) => (
  <div>
    <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index}>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  // Organized footer links
  const companyLinks = ["About Us", "Contact Us", "Careers", "Blog"];
  const legalLinks = ["Terms & Conditions", "Privacy Policy", "Cookie Policy"];
  const serviceLinks = ["FAQs", "Locate a Garage", "Offers & Discounts", "Customer Reviews"];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          {/* Left Section: Brand, Socials, and App Downloads */}
          <div className="space-y-8 xl:col-span-2">
            <img className="h-10 w-auto" src={logo} alt="Company Logo" />
            <p className="text-gray-400 text-base max-w-xs">
              Your one-stop solution for trusted car care, quality parts, and seamless service booking.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-teal-400"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400"><FaLinkedinIn /></a>
            </div>
             {/* App Download Buttons */}
             <div className="flex flex-col sm:flex-row gap-4">
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
          
          {/* Right Section: Link Columns */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3 xl:grid-cols-3">
              <FooterLinkColumn title="Company" items={companyLinks} />
              <FooterLinkColumn title="Legal" items={legalLinks} />
              <FooterLinkColumn title="Support" items={serviceLinks} />
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FixnSlot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;