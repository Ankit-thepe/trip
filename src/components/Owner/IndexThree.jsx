import React from "react";
import IndexThreeCard from "./IndexThreeCard";

const SlotOverview = () => {
  return (
    <div className="flex flex-col items-start justify-start bg-white px-6 py-3 rounded-b-xl">
      {/* Slot 1 */}
      <IndexThreeCard
        slotName="Slot 1"
        activeService={["Washing" ,"Repair"]}
        servicesList={[ "Puncture", "Painting"]}
      />

      {/* Slot 2 */}
      <IndexThreeCard
        slotName="Slot 2"
        activeService={["Repair"]}
        servicesList={["Washing", "Painting", "AC Check"]}
      />
    </div>
  );
};

export default SlotOverview;
