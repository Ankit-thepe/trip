import React from "react";
import InventoryAlert from "./InventoryAlert";
import { FaExclamationCircle, FaExclamationTriangle } from "react-icons/fa";

const CompleteOutOfStock = [
  {
    description: "sideglass",
    color: "bg-red-500",
    icon: <FaExclamationCircle />,
    tag: "Out of Stock",
  },
  {
    description: "tyre",
    color: "bg-red-500",
    icon: <FaExclamationCircle />,
    tag: "Out of Stock",
  },
];

const FewLeft = [
  {
    description: "brake",
    color: "bg-orange-500",
    icon: <FaExclamationTriangle />,
    tag: "Low Stock",
  },
  {
    description: "windshield",
    color: "bg-orange-500",
    icon: <FaExclamationTriangle />,
    tag: "Low Stock",
  },
];

const IndexThree = () => {
  return (
    <div className="w-full">
      <div className="rounded-lg shadow-md ">
        

        {/* Inventory Alert Popup Trigger */}
        <div className="flex justify-center ">
          <InventoryAlert
            title="📦 Inventory Alerts"
            badgeText="Inventory Alerts"
            badgeColor="bg-red-600"
            items={[...CompleteOutOfStock, ...FewLeft]}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexThree;
