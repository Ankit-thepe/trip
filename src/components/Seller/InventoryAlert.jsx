import React, { useState, useRef, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";

const CardItem = ({ item }) => (
  <div className={`flex items-center justify-between px-4 py-2 my-2 rounded-md shadow-sm text-white ${item.color} hover:shadow-lg hover:scale-105`}>
    <div className="flex items-center gap-2 text-sm font-medium">
      {item.icon}
      {item.description}
    </div>
    <span className="text-xs bg-white text-black px-2 py-0.5 rounded">
      {item.tag || ""}
    </span>
  </div>
);

const InventoryAlert = ({ title, badgeText, badgeColor, items }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    if (showPopup) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);

  return (
    <div className="relative">
      <button
        className="text-blue-500 hover:text-blue-700 "
        onClick={() => setShowPopup(!showPopup)}
      >
        <div className={`w-90 h-5 ${badgeColor} rounded-b-xl flex items-center justify-center`}>
          <span className="text-sm font-semibold text-white">{badgeText}</span>
        </div>
      </button>

      {showPopup && (
        <div
          ref={popupRef}
          className="absolute top-full mt-2 right-0 z-50 bg-white shadow-lg rounded-lg p-4 w-80 border border-gray-200"
        >
          <h4 className="text-sm font-semibold flex items-center gap-2 mb-1 text-gray-700">
            <FaInfoCircle /> {title}
          </h4>

          <div className="max-h-[250px] overflow-y-auto space-y-4 pr-1">
            {items.map((item, idx) => (
              <CardItem key={idx} item={item} />
            ))}
          </div>

          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-1 right-2 text-gray-400 hover:text-black"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default InventoryAlert;
