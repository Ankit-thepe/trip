import React from 'react';
import AddressManager from './AddressManager';
import ActivitiesSection from './ActivitiesSection';

const AddressActivity = () => {
  return (
    // This div now uses responsive flexbox classes and a gap utility.
    <div className="flex flex-col md:flex-row bg-white border-gray-200 border-2 rounded-lg p-6 gap-8">
      {/* On medium screens and wider, these two components will each take up half the space.
        On smaller screens, they will automatically take up the full width and stack.
      */}
      <div className="w-full md:w-1/2">
        <AddressManager />
      </div>
      <div className="w-full md:w-1/2">
        <ActivitiesSection />
      </div>
    </div>
  );
};

export default AddressActivity;