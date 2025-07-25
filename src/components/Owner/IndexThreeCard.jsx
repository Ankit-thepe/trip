import React from "react";

const IndexThreeCard = ({ slotName, activeService, servicesList }) => {
  return (
    <div className="flex items-start mb-3 ">
      {/* Slot box */}
      <div className="bg-gray-300 text-center px-4 py-2 rounded-l-md shadow-md text-sm font-semibold h-12 transition-transform duration-300 hover:shadow-lg hover:scale-105">
        {slotName}
      </div>

      {/* Services box */}
      <div className="border border-gray-600 rounded-md ml-2 px-4 py-2 bg-white shadow-sm w-60 transition-transform duration-300 hover:shadow-lg hover:scale-105">
        {/* Active services */}
        {activeService.length > 0 && (
          <>
            {activeService.map((service, idx) => (
              <div key={idx} className="mb-1">
                <div className="text-sm font-medium text-black bg-green-300 mb-1">
                  {service}
                </div>
                
              </div>
            ))}
            <hr className="my-2" />
          </>
        )}

        {/* Other services */}
        {servicesList.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-200 px-3 py-1 my-1 text-sm rounded-sm text-black h-5 flex items-center transition-transform duration-300 hover:shadow-lg hover:scale-105"
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexThreeCard;
