import React from "react";

const IndexOneCard = ({ title, items }) => {
  return (
    <div className="rounded-md p-2 w-60 mx-auto gap-2 ">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>

      {items.map((item, idx) => (
        <div key={idx} className="mb-4">
          <div className={`${item.color} text-center py-1 rounded text-sm mb-2 text-white shadow hover:shadow-md transition transition-transform duration-300 hover:shadow-lg hover:scale-105`}>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndexOneCard;
