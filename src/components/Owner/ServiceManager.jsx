import React, { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaPlus, FaArrowRight, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

// --- MOCK DATA (Expanded for better demonstration) ---
const initialServices = [
  { id: 1, name: "Complete Engine Overhaul", description: "Full engine diagnostics and repair", category: "Engine", vehicleType: "Car", price: "₹15000" },
  { id: 2, name: "Brake Pad Replacement", description: "Front and rear brake pad replacement", category: "Brakes", vehicleType: "Bike", price: "₹1200" },
  { id: 3, name: "AC Cooling Check", description: "AC gas refill and cooling coil check", category: "AC", vehicleType: "SUV", price: "₹2500" },
  { id: 4, name: "Suspension Tuning", description: "Shock absorber and strut adjustment", category: "Suspension", vehicleType: "Car", price: "₹3000" },
  { id: 5, name: "Electrical Wiring Check", description: "Full vehicle wiring inspection", category: "Electrical", vehicleType: "Auto", price: "₹1800" },
  { id: 6, name: "Oil Change Service", description: "Standard engine oil and filter change", category: "Engine", vehicleType: "Bike", price: "₹800" },
  { id: 7, name: "Tire Alignment & Balancing", description: "Laser-guided wheel alignment", category: "General", vehicleType: "Car", price: "₹1500" },
  { id: 8, name: "Full Body Wash", description: "Exterior wash and interior vacuum", category: "General", vehicleType: "SUV", price: "₹700" },
];

const categories = ["Engine", "Brakes", "Electrical", "AC", "Suspension", "General"];
const vehicleTypes = ["Car", "Bike", "Auto", "SUV", "Truck"];
const ITEMS_PER_PAGE = 5; // Adjusted for table view

// --- Reusable Modal Component ---
const Modal = ({ children, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md relative animate-fade-in-up">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            {children}
        </div>
    </div>
);

// --- MAIN COMPONENT ---
const ServiceManager = () => {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ category: "", vehicleType: "" });
  const [formData, setFormData] = useState({ id: null, name: "", description: "", category: "", vehicleType: "", price: "" });
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddClick = () => {
    setFormData({ id: null, name: "", description: "", category: "", vehicleType: "", price: "" });
    setEditMode(false);
    setShowForm(true);
  };

  const handleEditClick = (service) => {
    setFormData(service);
    setEditMode(true);
    setShowForm(true);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.price) return;
    if (editMode) {
        setServices((prev) => prev.map((srv) => (srv.id === formData.id ? formData : srv)));
    } else {
        setServices((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setShowDeleteConfirm(id);
  };

  const confirmDelete = () => {
    setServices((prev) => prev.filter((srv) => srv.id !== showDeleteConfirm));
    setShowDeleteConfirm(null);
  };

  const filteredServices = services
    .filter((srv) => srv.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((srv) => (filters.category ? srv.category === filters.category : true))
    .filter((srv) => (filters.vehicleType ? srv.vehicleType === filters.vehicleType : true));

  const pageCount = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const servicesToShow = filteredServices.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  return (
    <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 rounded-lg mt-8 min-h-screen">
      {showDeleteConfirm && (
        <Modal onClose={() => setShowDeleteConfirm(null)}>
            <div className="text-center">
                <FaExclamationTriangle className="text-red-500 text-5xl mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Confirm Deletion</h2>
                <p className="text-gray-600 mb-6">Are you sure you want to delete this service? This action cannot be undone.</p>
                <div className="flex justify-center gap-4">
                    <button onClick={confirmDelete} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">Delete</button>
                    <button onClick={() => setShowDeleteConfirm(null)} className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded-lg transition-colors">Cancel</button>
                </div>
            </div>
        </Modal>
      )}

      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{editMode ? "Edit Service" : "Add New Service"}</h2>
            <div className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Service Name" className="w-full border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500" />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Service Description" className="w-full border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500" rows="3"></textarea>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500"><option value="">Select Vehicle</option>{vehicleTypes.map(t => <option key={t}>{t}</option>)}</select>
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500"><option value="">Select Category</option>{categories.map(c => <option key={c}>{c}</option>)}</select>
                </div>
                <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price (e.g., ₹500)" className="w-full border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="flex justify-end gap-4 mt-6">
                <button onClick={() => setShowForm(false)} className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded-lg transition-colors">Cancel</button>
                <button onClick={handleSubmit} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">{editMode ? "Save Changes" : "Add Service"}</button>
            </div>
        </Modal>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Service Management</h1>
            <p className="text-gray-500 mt-2">Browse, add, and manage all your garage services.</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="relative md:col-span-2">
                    <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search for a service..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full border-gray-300 rounded-lg p-3 pl-10 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <select onChange={(e) => setFilters(f => ({ ...f, vehicleType: e.target.value }))} className="w-full border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500"><option value="">All Vehicles</option>{vehicleTypes.map(t => <option key={t}>{t}</option>)}</select>
                <select onChange={(e) => setFilters(f => ({ ...f, category: e.target.value }))} className="w-full border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500"><option value="">All Categories</option>{categories.map(c => <option key={c}>{c}</option>)}</select>
            </div>
        </div>
        
        <div className="flex justify-end mb-6">
            <button onClick={handleAddClick} className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg">
                <FaPlus /> Add New Service
            </button>
        </div>

        {/* --- Enhanced Responsive View --- */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Mobile Card View */}
            <div className="divide-y divide-gray-200 md:hidden">
                {servicesToShow.length > 0 ? servicesToShow.map(srv => (
                    <div key={srv.id} className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <div className="font-bold text-base text-gray-800">{srv.name}</div>
                                <div className="text-xs text-gray-500">{srv.description}</div>
                            </div>
                            <div className="font-bold text-indigo-600 text-lg flex-shrink-0 ml-2">{srv.price}</div>
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-600 pt-3 mt-3">
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold">{srv.vehicleType}</span>
                                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-semibold">{srv.category}</span>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => handleEditClick(srv)} className="p-2 rounded-full hover:bg-gray-100"><FaEdit className="text-indigo-600"/></button>
                                <button onClick={() => handleDelete(srv.id)} className="p-2 rounded-full hover:bg-gray-100"><FaTrash className="text-red-600"/></button>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="text-center py-10 text-gray-500">
                        No services found. Try adjusting your search or filters.
                    </div>
                )}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Service Details</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Vehicle</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicesToShow.map(srv => (
                            <tr key={srv.id} className="bg-white border-b last:border-b-0">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <div className="font-bold text-base text-gray-800">{srv.name}</div>
                                    <div className="text-xs text-gray-500">{srv.description}</div>
                                </td>
                                <td className="px-6 py-4">{srv.category}</td>
                                <td className="px-6 py-4">{srv.vehicleType}</td>
                                <td className="px-6 py-4 font-bold text-indigo-600">{srv.price}</td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-end gap-4">
                                        <button onClick={() => handleEditClick(srv)} className="font-medium text-indigo-600 hover:underline flex items-center gap-1"><FaEdit/> Edit</button>
                                        <button onClick={() => handleDelete(srv.id)} className="font-medium text-red-600 hover:underline flex items-center gap-1"><FaTrash/> Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {pageCount > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-2">
                <button onClick={() => setCurrentPage(p => Math.max(0, p - 1))} disabled={currentPage === 0} className="p-2 rounded-md bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"><FaArrowLeft /></button>
                {Array.from({ length: pageCount }, (_, i) => (
                    <button key={i} onClick={() => setCurrentPage(i)} className={`px-4 py-2 rounded-md text-sm font-semibold ${currentPage === i ? 'bg-indigo-600 text-white' : 'bg-white shadow-md'}`}>{i + 1}</button>
                ))}
                <button onClick={() => setCurrentPage(p => Math.min(pageCount - 1, p + 1))} disabled={currentPage === pageCount - 1} className="p-2 rounded-md bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"><FaArrowRight /></button>
            </div>
        )}
      </div>
    </div>
  );
};

export default ServiceManager;
