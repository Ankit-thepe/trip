import React from "react";
import InventoryAlert from "./InventoryAlert";

const pendingItems = [
  {
    description: "Side Glass",
    color: "bg-amber-500",
    tag: "at",
  },
  {
    description: "Tyre",
    color: "bg-amber-500",
    tag: "kag",
  },
];

const IndexTwo = () => {
  return (
    <div className="w-full">
      <div className=" rounded-lg shadow-md">
        

        {/* Inventory Alert Popup Trigger */}
        <div className="flex justify-center ">
          <InventoryAlert
            title="🕒 Pending Alerts"
            badgeText="pending Alerts"
            badgeColor="bg-amber-500"
            items={pendingItems}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexTwo;
