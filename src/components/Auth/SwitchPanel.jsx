import React from "react";

const SwitchPanel = ({ title, text, buttonLabel, onClick }) => {
  return (
    <div className="text-white text-center px-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{text}</p>
      <button onClick={onClick} className="px-6 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-green-500 transition font-semibold">
        {buttonLabel}
      </button>
    </div>
  );
};

export default SwitchPanel;
