import React, { useState, useEffect } from "react";
import sampleImg from "D:/React/fixNslot/src/assets/images/sample-part.png";

const VEHICLE_TYPES = [
  { label: "All", value: "all" },
  { label: "Car", value: "car" },
  { label: "Bike", value: "bike" },
  { label: "Scooter", value: "scooter" },
];

const SERVICE_CENTRES = [
  {
    id: 1,
    serviceCentreName: "AutoFix Car Care",
    description: "Comprehensive car servicing and repairs.",
    rating: 4.5,
    distance: "2.3 km",
    image: sampleImg,
    availabilityStatus: "Available",
    type: "car",
  },
  {
    id: 2,
    serviceCentreName: "BikePro Garage",
    description: "Expert bike maintenance and upgrades.",
    rating: 4.7,
    distance: "1.8 km",
    image: sampleImg,
    availabilityStatus: "Available",
    type: "bike",
  },
  {
    id: 3,
    serviceCentreName: "Speedy Motors",
    description:
      "Quick service for all vehicles. This is the extra content to check whether it is working.",
    rating: 4.2,
    distance: "3.1 km",
    image: sampleImg,
    availabilityStatus: "Busy",
    type: "car",
  },
  {
    id: 4,
    serviceCentreName: "ScooterCare",
    description: "Specialized in scooter repairs.",
    rating: 4.0,
    distance: "2.0 km",
    image: sampleImg,
    availabilityStatus: "Available",
    type: "scooter",
  },
  {
    id: 5,
    serviceCentreName: "Urban Auto Hub",
    description: "All-in-one service for cars and bikes.",
    rating: 4.6,
    distance: "2.7 km",
    image: sampleImg,
    availabilityStatus: "Available",
    type: "car",
  },
  {
    id: 6,
    serviceCentreName: "MotoMasters",
    description: "Premium bike and scooter servicing.",
    rating: 4.8,
    distance: "1.2 km",
    image: sampleImg,
    availabilityStatus: "Busy",
    type: "bike",
  },
  {
    id: 7,
    serviceCentreName: "Family Wheels",
    description: "Family car specialists.",
    rating: 4.3,
    distance: "3.5 km",
    image: sampleImg,
    availabilityStatus: "Available",
    type: "car",
  },
  {
    id: 8,
    serviceCentreName: "ScootXpress",
    description: "Fast scooter repairs and service.",
    rating: 4.1,
    distance: "2.8 km",
    image: sampleImg,
    availabilityStatus: "Available",
    type: "scooter",
  },
  {
    id: 9,
    serviceCentreName: "Elite Auto Works",
    description: "Luxury car maintenance.",
    rating: 4.9,
    distance: "4.0 km",
    image: sampleImg,
    availabilityStatus: "Available",
    type: "car",
  },
  {
    id: 10,
    serviceCentreName: "BikeZone",
    description: "Affordable bike repairs.",
    rating: 4.4,
    distance: "1.5 km",
    image: sampleImg,
    availabilityStatus: "Busy",
    type: "bike",
  },
];

const SlotBooking = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [filteredCentres, setFilteredCentres] = useState([]);

  const filterCentres = (type) => {
    if (type === "all") return SERVICE_CENTRES;
    return SERVICE_CENTRES.filter((centre) => centre.type === type);
  };

  useEffect(() => {
    setFilteredCentres(filterCentres(selectedType));
  }, [selectedType]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      <nav className="w-full mt-2 mb-6 py-6 bg-green-300"></nav>

      {/* Summary Box */}
      <div className="w-full max-w-2xl min-h-[180px] border-2 border-black mt-8 rounded-md bg-gray-50"></div>

      {/* Filter Buttons */}
      <div className="mt-8 mb-6 flex flex-col justify-center w-full max-w-2xl">
        <h3 className="text-xl font-serif font-bold mb-4 text-center sm:text-left m-auto">
          Select Vehicle Type
        </h3>
        <div className="flex m-auto border-2 border-black rounded-lg overflow-hidden">
          {VEHICLE_TYPES.map((type) => (
            <button
              key={type.value}
              className={`px-4 py-3 bg-white border-r-2 border-black last:border-r-0 hover:bg-green-100 transition-colors duration-150 font-medium focus:outline-none ${
                selectedType === type.value
                  ? "bg-green-200 text-green-900 font-bold"
                  : "text-gray-700"
              }`}
              onClick={() => setSelectedType(type.value)}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Heading */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-4 px-2">
        <h3 className="text-lg font-semibold">Popular Service Centers</h3>
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition font-medium border border-gray-300">
          Filter
        </button>
      </div>

      {/* Service Center Cards */}
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {filteredCentres.length === 0 ? (
          <div className="text-center w-full col-span-2">
            No service centres found.
          </div>
        ) : (
          filteredCentres.map((centre) => (
            <div
              key={centre.id}
              className="border rounded-lg p-4 bg-white flex flex-col gap-2 shadow"
            >
              <div className="flex items-center gap-3">
                <img
                  src={`D:/React/fixNslot/src/assets/images/sample-part.png`}
                  alt={centre.serviceCentreName}
                  className="w-16 h-16 object-cover rounded"
                  onError={(e) => {
                    e.target.src = "";
                  }}
                />
                <div>
                  <h4 className="font-bold text-lg">{centre.serviceCentreName}</h4>
                  <div className="text-sm text-gray-600">
                    {centre.distance} | Rating: {centre.rating}
                  </div>
                  <div
                    className={`text-xs font-semibold ${
                      centre.availabilityStatus === "Available"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {centre.availabilityStatus}
                  </div>
                </div>
              </div>
              <div
                className="text-gray-700 text-sm mt-2 truncate"
                title={centre.description}
              >
                {centre.description}
              </div>
              <div className="flex justify-end mt-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm">
                  View
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SlotBooking;
