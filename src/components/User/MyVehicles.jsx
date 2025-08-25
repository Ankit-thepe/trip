import React from 'react';
import { FaCar, FaMotorcycle, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // It's good practice to use Link for internal navigation

const mockVehicles = [
  { id: 1, brand: 'Maruti', model: 'Breeza', number: 'MH 12 AB 1234', type: 'Car' },
  { id: 2, brand: 'Honda', model: 'Activa', number: 'MH 12 AB 5678', type: 'Bike' },
];

const MyVehicles = () => {
  const [vehicles, setVehicles] = React.useState(mockVehicles);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border">
      {/* --- New, Clean Header --- */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">My Vehicles</h2>
        <button
          className="border-2 border-dashed rounded-lg p-1 flex flex-col items-center justify-center text-gray-500 hover:border-teal-500 hover:text-teal-600 transition-colors"
        >
          <FaPlus className="text-2xl p-2"/>
          
        </button>
      </div>

      {/* --- Responsive Grid for Vehicle Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="border rounded-lg p-4 flex items-center gap-4 hover:shadow-md hover:border-teal-500 transition-all cursor-pointer"
          >
            {/* Vehicle Icon */}
            <div className="text-3xl p-3 bg-slate-100 rounded-lg">
              {vehicle.type === 'Car' ? (
                <FaCar className="text-blue-500" />
              ) : (
                <FaMotorcycle className="text-green-500" />
              )}
            </div>
            {/* Vehicle Details */}
            <div className="flex-grow">
              <h5 className="font-semibold text-gray-900">
                {vehicle.brand} {vehicle.model}
              </h5>
              <p className="text-xs text-gray-600 bg-gray-200 inline-block px-2 py-0.5 rounded-full mt-1">
                {vehicle.number}
              </p>
            </div>
          </div>
        ))}

        {/* --- New "Add Vehicle" Card --- */}
        
      </div>
    </div>
  );
};

export default MyVehicles;