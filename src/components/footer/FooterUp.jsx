import React from "react";

const FooterUp = ({ title, items }) => {
  return (
    <div>
      <h3 className="font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2 text-sm text-white">
        {items.map((item, index) => (
          <li key={index} className="hover:underline cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterUp;
