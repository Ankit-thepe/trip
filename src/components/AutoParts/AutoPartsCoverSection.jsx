    import React from 'react';
    import autoPartsCoverImage from '../../assets/images/auto-parts-cover.webp'; // Ensure this path is correct
    import { FaSearch } from 'react-icons/fa'; // Only FaSearch icon needed now

    const AutoPartsCoverSection = ({ searchTerm, setSearchTerm }) => {
      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };

      return (
        <div className="bg-gray-100 rounded-xl shadow-md mt-10 p-2 mb-8 text-center w-full mx-auto relative overflow-hidden">
          {/* Image Section */}
          <img
            src={autoPartsCoverImage}
            alt="Find your auto parts"
            className="w-full h-96 object-cover rounded-lg"
          />

          {/* Overlay Search */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-3/4 lg:w-2/3 p-6  bg-opacity-0 rounded-lg shadow-xl">
            <h2 className="text-3xl md:text-4xl  drop-shadow-[0_0_3px_#000] font-extrabold text-white mb-6">Find the Right Part for Your Ride</h2>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
  <div className="relative flex-grow">
    <input
      type="text"
      placeholder="Search by part name, brand, or SKU..."
      className="w-full p-4 pl-12 pr-4 text-white bg-black-100 border-4 border-blue rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md placeholder-gray-300"
      value={searchTerm}
      onChange={handleSearchChange}
    />
    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
  </div>
  <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 text-lg">
    Search
  </button>
</div>

          </div>
        </div>
      );
    };

    export default AutoPartsCoverSection;
    