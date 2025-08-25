import React from "react";

const DownloadButton = ({ icon, label, subLabel, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
    >
      <img src={icon} alt={label} className="w-7 h-7" />
      <div className="text-left">
        <p className="text-xs text-gray-300">{subLabel}</p>
        <p className="text-base font-semibold">{label}</p>
      </div>
    </a>
  );
};

export default DownloadButton;