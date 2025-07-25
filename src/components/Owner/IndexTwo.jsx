import React from "react";

const IndexTwo = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-b-xl p-6 w-full max-w-sm mx-auto border border-gray-300">
      <div className="flex justify-between border-b pb-2 mb-4 transition-transform duration-300 hover:shadow-lg hover:scale-105">
        <h2 className="text-gray-700 font-semibold">Time</h2>
        <h2 className="text-gray-700 font-semibold">Status</h2>
      </div>

      {data.map((item, index) => (
        <div key={index} className="flex justify-between py-2 border-b last:border-b-0">
          <span className="text-gray-800">{item.time}</span>
          <span
            className={`${
              item.status.toLowerCase() === "active"
                ? "text-green-600 font-semibold"
                : "text-gray-400"
            }`}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default IndexTwo;
