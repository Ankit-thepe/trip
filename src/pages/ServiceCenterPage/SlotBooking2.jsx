// src/pages/ServiceCenterPage/SlotBooking2.jsx
import React, { useState, useMemo } from 'react';
import PageHeader from '../../components/BookSlot/BookSlotMainPage/PageHeader';
import FilterBar from '../../components/BookSlot/BookSlotMainPage/FilterBar';
import ServiceCenterCard from '../../components/BookSlot/BookSlotMainPage/ServiceCenterCard';
import { serviceCenters } from '../../data/ServiceCentreDetails';

const SlotBooking2 = () => {
  const [filters, setFilters] = useState({
    city: '',
    service: '',
    vehicleType: 'All',
    distance: 'All',
    rating: 'All',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  
  const filteredServiceCenters = useMemo(() => {
    // ... (filtering logic remains the same)
    return serviceCenters.filter((center) => {
      const matchesCity = filters.city ? center.location.includes(filters.city) : true;
      const matchesService = filters.service ? center.services.includes(filters.service) : true;
      const matchesVehicleType = filters.vehicleType !== 'All' ? center.supportedVehicles.includes(filters.vehicleType) : true;
      const matchesDistance = (() => {
        if (filters.distance === 'All') return true;
        const distanceKm = center.distance || 0;
        if (filters.distance === '0-5km') return distanceKm <= 5;
        if (filters.distance === '5-10km') return distanceKm > 5 && distanceKm <= 10;
        if (filters.distance === '10+km') return distanceKm > 10;
        return true;
      })();
      const matchesRating = (() => {
        if (filters.rating === 'All') return true;
        const rating = center.rating || 0;
        if (filters.rating === '4+') return rating >= 4;
        if (filters.rating === '3+') return rating >= 3;
        return true;
      })();
      return matchesCity && matchesService && matchesVehicleType && matchesDistance && matchesRating;
    });
  }, [filters]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader />
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <main className="container mx-auto py-8 px-4">
        {/* Responsive grid gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredServiceCenters.length > 0 ? (
            filteredServiceCenters.map((center) => (
              <ServiceCenterCard key={center.id} {...center} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 py-16 text-lg">
              No service centers found matching your criteria. Please adjust your filters.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default SlotBooking2;