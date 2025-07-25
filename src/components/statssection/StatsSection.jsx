import React from "react";
import StatsCard from "./StatsCard";

// ✅ Correct relative paths
import serviceIcon from "../../assets/images/servicecentre.png";
import partsIcon from "../../assets/images/star.png";
import ratingIcon from "../../assets/images/star.png";
import customerIcon from "../../assets/images/customer.png";
import cityIcon from "../../assets/images/city.png";

const StatsSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-16 border-t-2 border-b-2 border-black-500">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        <StatsCard icon={serviceIcon} value="100+" label="Service Centres" />
        <StatsCard icon={partsIcon} value="30+" label="Autoparts Dealer" />
        <StatsCard icon={ratingIcon} value="4.0" label="4/5 rating" />
        <StatsCard icon={customerIcon} value="10k+" label="Happy Customers" />
        <StatsCard icon={cityIcon} value="50+" label="Cities" />
      </div>
    </div>
  );
};

export default StatsSection;
