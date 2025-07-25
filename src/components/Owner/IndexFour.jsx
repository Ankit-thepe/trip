import React from "react";
import IndexFourCard from "./IndexFourCard";


const IndexFour = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-white p-6">
      <IndexFourCard label="Vehicle repaired" value="10" />
      <IndexFourCard label="Booking’s made" value="5" />
      <IndexFourCard label="Earning" value="2500.00Rs" />
    </div>
  );
};

export default IndexFour;
