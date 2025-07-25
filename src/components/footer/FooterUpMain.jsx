import React from "react";
import FooterColumn from "./FooterUp";

const FooterUpMain = () => {
  const aboutUs = [
    "FAQs",
    "Contact Us",
    "Terms and Conditions",
    "Privacy Policy",
    "Become a Partner",
    "Locate Workshops",
    "Offers & Discounts",
    "Customer Reviews",
    "Garage Directory"
  ];

  const vehicleTypes = [
    "Cars (Hatchback, Sedan, SUV, etc.)",
    "Two-Wheelers (Bikes & Scooters)",
    "Auto Rickshaws",
    "Light Commercial Vehicles",
    "Buses",
    "Trucks (Heavy-duty & Commercial)"
  ];

  const cities = [
    "Garage near me in Delhi",
    "Garage near me in Mumbai",
    "Garage near me in Pune",
    "Garage near me in Indore",
    "Garage near me in Bhopal",
    "Garage near me in Lucknow",
    "Garage near me in Ahmedabad",
    "Garage near me in Gwalior",
    "Garage near me in Jaipur",
    "Garage near me in Bengaluru"
  ];

  return (
    <footer className="bg-teal-600 text-white py-10 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 flex justify-between">
        <FooterColumn title="ABOUT US" items={aboutUs} />
        <FooterColumn title="VEHICLE TYPES WE SERVE" items={vehicleTypes} />
        <FooterColumn title="CITIES WE SERVE" items={cities} />
      </div>
    </footer>
  );
};

export default FooterUpMain;
