import React from "react";

const DownloadButton = ({ icon, label, subLabel, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-black text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
    >
      <img src={icon} alt={label} className="w-6 h-6" />
      <div className="text-left">
        <p className="text-[10px] text-gray-300">{subLabel}</p>
        <p className="text-sm font-semibold">{label}</p>
      </div>
    </a>
  );
};

export default DownloadButton;
