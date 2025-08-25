import React from 'react';
import { autoParts, categories } from '../../data/AutoPartsData';
import { FaCar, FaTag, FaStar, FaDollarSign, FaShieldAlt } from 'react-icons/fa'; // Icons for filters

const AutoPartsFilterSection = ({
  selectedVehicleType, setSelectedVehicleType,
  selectedVehicleBrand, setSelectedVehicleBrand,
  selectedVehicleModel, setSelectedVehicleModel,
  selectedProductBrand, setSelectedProductBrand,
  selectedSortOption, setSelectedSortOption,
  clearAllFilters
}) => {
  // Extract unique values for dropdowns
  const uniqueVehicleTypes = [...new Set(autoParts.map(part => part.vehicleType))].filter(Boolean).sort();
  const uniqueVehicleBrands = [...new Set(autoParts.map(part => part.brand))].filter(Boolean).sort(); // Assuming 'brand' is vehicle brand
  const uniqueVehicleModels = [...new Set(autoParts.map(part => part.vehicleModel))].filter(Boolean).sort();
  const uniqueProductBrands = [...new Set(autoParts.map(part => part.productBrand || part.brand))].filter(Boolean).sort(); // Use productBrand if available, else generic brand

  const sortOptions = [
    { value: '', label: 'Sort By' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating-desc', label: 'Rating: High to Low' },
    { value: 'warranty-asc', label: 'Warranty: Shortest First' },
    { value: 'warranty-desc', label: 'Warranty: Longest First' },
  ];

  const hasActiveFilters = selectedVehicleType || selectedVehicleBrand || selectedVehicleModel || selectedProductBrand || selectedSortOption;

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Advanced Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-4">
        {/* Vehicle Type */}
        <div className="relative">
          <FaCar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <select
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedVehicleType}
            onChange={(e) => setSelectedVehicleType(e.target.value)}
          >
            <option value="">All Vehicle Types</option>
            {uniqueVehicleTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Vehicle Brand (using 'brand' from data for now, assuming it's vehicle brand) */}
        <div className="relative">
          <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <select
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedVehicleBrand}
            onChange={(e) => setSelectedVehicleBrand(e.target.value)}
          >
            <option value="">All Vehicle Brands</option>
            {uniqueVehicleBrands.map((brand, idx) => (
              <option key={idx} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Vehicle Model */}
        <div className="relative">
          <FaCar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <select
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedVehicleModel}
            onChange={(e) => setSelectedVehicleModel(e.target.value)}
          >
            <option value="">All Vehicle Models</option>
            {uniqueVehicleModels.map((model, idx) => (
              <option key={idx} value={model}>{model}</option>
            ))}
          </select>
        </div>

        {/* Product Brand */}
        <div className="relative">
          <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <select
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedProductBrand}
            onChange={(e) => setSelectedProductBrand(e.target.value)}
          >
            <option value="">All Product Brands</option>
            {uniqueProductBrands.map((brand, idx) => (
              <option key={idx} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div className="relative">
          <FaStar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <select
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedSortOption}
            onChange={(e) => setSelectedSortOption(e.target.value)}
          >
            {sortOptions.map((option, idx) => (
              <option key={idx} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="text-right mt-4">
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition duration-300"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AutoPartsFilterSection;
