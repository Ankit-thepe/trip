import React from "react";
import CategoryCard from "./IndexOne";

const DashboardCard = ({ title, value, color ,}) => {
  return (
    <div className={`bg-white h-32 rounded-t-xl rounded-b-xl shadow-md p-4 flex-1 border-t-4 ${color} border-b-4 ${color} flex flex-col items-center justify-center`}>
      <div className="text-5xl font-bold">{value}</div>
      <div className="text-gray-700 font-medium mt-2">{title}</div>
      
    </div>
  );
};

export default DashboardCard;
