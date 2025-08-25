// src/pages/AutoParts/AutoPartsHomePage.jsx
import React, { useState, useMemo } from 'react';
import { autoParts } from '../../data/AutoPartsData';

// Import the new and updated components
import AutoPartsHeader from '../../components/AutoParts/AutoPartsHeader';
import FilterBarAuto from '../../components/AutoParts/FilterBarAuto';
import ProductCard from '../../components/AutoParts/ProductCard';

const AutoPartsHomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filters, setFilters] = useState({ vehicleType: '', productBrand: '' });

  const filteredParts = useMemo(() => {
    return autoParts.filter(part => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      
      const matchesCategory = selectedCategory ? part.category === selectedCategory : true;
      const matchesVehicleType = filters.vehicleType ? part.vehicleType === filters.vehicleType : true;
      const matchesProductBrand = filters.productBrand ? part.brand === filters.productBrand : true;
      
      const matchesSearch = searchTerm ? 
        part.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        part.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        part.brand.toLowerCase().includes(lowerCaseSearchTerm) ||
        part.sku.toLowerCase().includes(lowerCaseSearchTerm)
        : true;
      
      return matchesCategory && matchesVehicleType && matchesProductBrand && matchesSearch;
    });
  }, [searchTerm, selectedCategory, filters]);

  return (
    <div className="bg-slate-50 min-h-screen ">
      {/* --- Use the new, clean header --- */}
      <AutoPartsHeader />
      
      {/* --- The sticky filter bar now handles all interactions --- */}
      <FilterBarAuto
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filters={filters}
        setFilters={setFilters}
      />

      <main className="container mx-auto p-4">
        {/* --- Product Listing Section --- */}
        <section className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {selectedCategory || 'All Products'} ({filteredParts.length})
          </h2>
          {filteredParts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredParts.map((part) => (
                <ProductCard key={part.id} part={part} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 py-16">
              <h3 className="text-xl font-semibold">No products found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AutoPartsHomePage;