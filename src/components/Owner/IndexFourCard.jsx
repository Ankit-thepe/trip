import React from "react";

const IndexFourCard = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center border border-black rounded-md px-4 py-2 mb-4 w-full max-w-md transition-transform duration-300 hover:shadow-lg hover:scale-105">
      <span className="text-base">{label}</span>
      <span className="text-base font-medium">{value}</span>
    </div>
  );
};

export default IndexFourCard;
