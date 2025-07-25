import React from "react";
import CategoryCard from "./IndexOne";

const DashboardCard = ({ title, value, subtitle, icon, color ,category1,category2 }) => {
  return (
    <div className={`bg-white rounded-t-xl shadow-md p-4 flex-1 text-center border-t-4 ${color}`}>
      <div className="text-5xl font-bold">{value}</div>
      <div className="text-gray-700 font-medium">{title}</div>
      <div className="text-xs text-gray-500">{subtitle}</div>
      <div className="h-0.5 flex justify-center mt-4 bg-black "></div>
      
    </div>

  );
};

export default DashboardCard;
