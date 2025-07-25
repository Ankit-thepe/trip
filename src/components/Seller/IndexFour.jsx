import React from "react";
import InventoryAlert from "./InventoryAlert";

const todaySummaryItems = [
  { description: "Total Order", color: "bg-blue-500", tag: "10" },
  { description: "Completed", color: "bg-blue-500", tag: "5" },
  { description: "Pending", color: "bg-blue-500", tag: "3" },
  { description: "Cancelled", color: "bg-blue-500", tag: "2" },
  { description: "Returned", color: "bg-blue-500", tag: "1" },
];

const IndexFour = () => {
  return (
    <div className="w-full">
      <div className="rounded-lg shadow-md">
       
        {/* Button Trigger */}
        <div className="flex justify-center">
          <InventoryAlert
            title="📅 Today's Summary"
            badgeText="Today's Summary"
            badgeColor="bg-blue-600"
            items={todaySummaryItems}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexFour;
