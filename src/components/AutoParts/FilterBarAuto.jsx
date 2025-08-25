// src/components/AutoParts/FilterBarAuto.jsx
import React, { useState } from 'react'; // ✅ CORRECTED
import { FaSearch, FaFilter, FaTimes, FaCar, FaTag } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, autoParts } from '../../data/AutoPartsData';

const FilterBarAuto = ({
  searchTerm, setSearchTerm,
  selectedCategory, setSelectedCategory,
  filters, setFilters // Pass a single filters object
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const uniqueVehicleTypes = [...new Set(autoParts.map(part => part.vehicleType))];
  const uniqueProductBrands = [...new Set(autoParts.map(part => part.brand))];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({...prev, [key]: value}));
  };

  const ModalContent = () => (
    <div className="p-6 space-y-6">
      <h3 className="text-xl font-bold text-center">Advanced Filters</h3>
      {/* Vehicle Type Filter */}
      <div className="space-y-2">
        <label className="font-semibold flex items-center gap-2"><FaCar/> Vehicle Type</label>
        <select className="w-full p-3 border rounded-lg" value={filters.vehicleType} onChange={(e) => handleFilterChange('vehicleType', e.target.value)}>
          <option value="">All Types</option>
          {uniqueVehicleTypes.map(type => <option key={type} value={type}>{type}</option>)}
        </select>
      </div>
      {/* Product Brand Filter */}
      <div className="space-y-2">
        <label className="font-semibold flex items-center gap-2"><FaTag/> Product Brand</label>
        <select className="w-full p-3 border rounded-lg" value={filters.productBrand} onChange={(e) => handleFilterChange('productBrand', e.target.value)}>
          <option value="">All Brands</option>
          {uniqueProductBrands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
        </select>
      </div>
      <button onClick={() => setIsModalOpen(false)} className="w-full mt-4 py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600">
        Show Results
      </button>
    </div>
  );

  return (
    <>
      <div className="sticky top-16 bg-white z-30 shadow-sm p-4 border-b">
        <div className="container mx-auto space-y-4">
          {/* Top Row: Search and Filter Button */}
          <div className="flex gap-4">
            <div className="relative flex-grow">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for parts..."
                className="w-full p-3 pl-12 border rounded-lg focus:ring-2 focus:ring-teal-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button onClick={() => setIsModalOpen(true)} className="flex-shrink-0 flex items-center justify-center gap-2 px-4 py-3 border-2 rounded-lg font-semibold hover:bg-gray-100">
              <FaFilter />
              <span className="hidden md:inline">Filters</span>
            </button>
          </div>
          {/* Bottom Row: Category Scroller */}
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name === selectedCategory ? '' : cat.name)}
                className={`py-2 px-4 rounded-full text-sm font-semibold flex items-center gap-2 flex-shrink-0 transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <img src={cat.image} alt={cat.name} className="w-6 h-6"/> {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* The Modal */}
      <AnimatePresence>
        {isModalOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
                <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl w-full max-w-sm">
                    <ModalContent />
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilterBarAuto;