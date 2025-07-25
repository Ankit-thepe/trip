import React, { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaPlus, FaArrowRight } from "react-icons/fa";

const initialServices = [
  {
    id: 1,
    name: "Oil Change",
    description: "Complete engine oil change",
    category: "Engine",
    vehicleType: "Car",
    price: "₹500",
  },
  {
    id: 2,
    name: "Brake Check",
    description: "Brake pad inspection and replacement",
    category: "Brakes",
    vehicleType: "Bike",
    price: "₹300",
  },
  {
    id: 3,
    name: "Brake Check",
    description: "Brake pad inspection and replacement",
    category: "Brakes",
    vehicleType: "Bike",
    price: "₹300",
  },
  {
    id: 4,
    name: "Brake Check",
    description: "Brake pad inspection and replacement",
    category: "Brakes",
    vehicleType: "Bike",
    price: "₹300",
  },
  {
    id: 5,
    name: "Brake Check",
    description: "Brake pad inspection and replacement",
    category: "Brakes",
    vehicleType: "Bike",
    price: "₹300",
  },
  {
    id: 6,
    name: "Brake Check",
    description: "Brake pad inspection and replacement",
    category: "Brakes",
    vehicleType: "Bike",
    price: "₹300",
  },
  
  // Add more services if needed
];

const categories = ["Engine", "Brakes", "Electrical", "AC", "Suspension"];
const vehicleTypes = ["Car", "Bike", "Auto", "SUV"];

const ServiceManager = () => {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ category: "", vehicleType: "" });
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "",
    category: "",
    vehicleType: "",
    price: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddClick = () => {
    setFormData({
      id: null,
      name: "",
      description: "",
      category: "",
      vehicleType: "",
      price: "",
    });
    setEditMode(false);
    setShowForm(true);
  };

  const handleEditClick = (service) => {
    setFormData(service);
    setEditMode(true);
    setShowForm(true);
  };

  const handleAddService = () => {
    if (!formData.name) return;
    setServices((prev) => [...prev, { ...formData, id: Date.now() }]);
    setShowForm(false);
  };

  const handleSaveChanges = () => {
    setServices((prev) =>
      prev.map((srv) => (srv.id === formData.id ? formData : srv))
    );
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setServices((prev) => prev.filter((srv) => srv.id !== id));
    setShowForm(false);
  };

  const filteredServices = services
    .filter((srv) => srv.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((srv) =>
      filters.category ? srv.category === filters.category : true
    )
    .filter((srv) =>
      filters.vehicleType ? srv.vehicleType === filters.vehicleType : true
    );

  const servicesToShow = filteredServices.slice(currentPage * 10, (currentPage + 1) * 10);

  return (
    <div className="p-6 bg-gray-100 ">
      <h1 className="text-3xl font-bold text-center mb-10 text-white bg-teal-500 py-4 rounded-md shadow-md">
        Services
      </h1>
      <div className="bg-white p-4 rounded shadow-md w-full max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Garage Services Listing</h2>
          
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap items-center ml-160 gap-2 mb-4">
          <div className="flex items-center border rounded px-2">
            <FaSearch className="text-gray-500 mr-1" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none py-1"
            />
          </div>
          <select
            className="border rounded px-3 py-1"
            onChange={(e) => setFilters((f) => ({ ...f, vehicleType: e.target.value }))}
          >
            <option value="">Vehicle Type</option>
            {vehicleTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <select
            className="border rounded px-3 py-1"
            onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
          >
            <option value="">Category</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

        </div>

        {/* Table Cards */}
        <div className="grid grid-cols-1 gap-4">
          {servicesToShow.map((srv) => (
            <div
              key={srv.id}
              className="grid grid-cols-5 border p-3 rounded bg-white items-center"
            >
              <div>
                <div className="text-sm font-semibold text-gray-800">{srv.name}</div>
                <div className="text-xs text-gray-500">{srv.description}</div>
              </div>
              <div className="text-sm">{srv.category}</div>
              <div className="text-sm">{srv.vehicleType}</div>
              <div className="text-sm">{srv.price}</div>
              <div className="flex justify-end gap-2">
                <button onClick={() => handleEditClick(srv)}>
                  <FaEdit className="text-blue-500 hover:scale-110" />
                </button>
                <button onClick={() => handleDelete(srv.id)}>
                  <FaTrash className="text-red-500 hover:scale-110" />
                </button>
              </div>
              
            </div>
            
          ))}
          <button onClick={handleAddClick} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 w-50" >
               <FaPlus />
                Add Service
            </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-4">
          {filteredServices.length > (currentPage + 1) * 10 && (
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              className="text-blue-600 flex items-center gap-1 font-semibold hover:underline"
            >
              Next <FaArrowRight />
            </button>
          )}
        </div>

        {/* Conditional Form */}
        {showForm && (
          <div className="mt-6 bg-gray-50 p-4 rounded shadow-inner">
            <h3 className="text-lg font-semibold mb-2">
              {editMode ? "Edit Service" : "Add New Service"}
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Service Name"
                className="border px-3 py-2 rounded"
              />
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="border px-3 py-2 rounded"
              />
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="border px-3 py-2 rounded col-span-2"
              />
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="border px-3 py-2 rounded"
              >
                <option value="">Select Vehicle Type</option>
                {vehicleTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="border px-3 py-2 rounded"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-3">
              {editMode ? (
                <>
                  <button
                    onClick={handleSaveChanges}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => handleDelete(formData.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Remove Service
                  </button>
                </>
              ) : (
                <button
                  onClick={handleAddService}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add Service
                </button>
              )}
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceManager;
