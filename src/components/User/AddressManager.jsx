// src/components/User/AddressManager.jsx
import React, { useState } from "react";
import { FaHome, FaStore, FaPlus, FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from "../../hooks/useMediaQuery"; // Adjust path if needed

const AddressManager = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, type: "Home", hno: "123", area: "Sector 15", city: "Delhi" },
    { id: 2, type: "Shop", hno: "42B", area: "MG Road", city: "Gurgaon" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formMode, setFormMode] = useState("add"); 
  const [formData, setFormData] = useState({});

  // Use the hook to check if we are on a mobile-sized screen
  const isMobile = useMediaQuery('(max-width: 640px)');
  
  const openModal = (mode, address = null) => {
    setFormMode(mode);
    setFormData(mode === 'add' 
      ? { id: Date.now(), type: "", hno: "", area: "", city: "" } 
      : { ...address }
    );
    setIsModalOpen(true);
  };
  
  const handleSave = () => {
    if (formMode === "add") setAddresses([...addresses, formData]);
    else setAddresses(addresses.map((a) => (a.id === formData.id ? formData : a)));
    setIsModalOpen(false);
  };
  
  const handleDelete = (id) => {
    setAddresses(addresses.filter((a) => a.id !== id));
    setIsModalOpen(false);
  };

  const AddressForm = () => (
    <div className="space-y-4">
      {/* On mobile, add a "handle" for the bottom sheet */}
      {isMobile && <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-4" />}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">{formMode === 'add' ? 'Add New Address' : 'Edit Address'}</h2>
        <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-full hover:bg-gray-100"><FaTimes className="text-gray-600" /></button>
      </div>
      <input type="text" placeholder="Type (e.g., Home, Shop)" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full border p-2 rounded-lg" />
      <input type="text" placeholder="House No. / Building Name" value={formData.hno} onChange={(e) => setFormData({ ...formData, hno: e.target.value })} className="w-full border p-2 rounded-lg" />
      <input type="text" placeholder="Area / Street" value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} className="w-full border p-2 rounded-lg" />
      <input type="text" placeholder="City" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full border p-2 rounded-lg" />
      <div className="flex justify-between items-center gap-4 mt-4">
        {formMode === 'edit' && <button onClick={() => handleDelete(formData.id)} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg flex items-center gap-2"><FaTrash /> Delete</button>}
        <button onClick={handleSave} className="w-full px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600">Save Address</button>
      </div>
    </div>
  );

  // Animation variants for the two types of modals
  const modalVariants = { visible: { scale: 1, opacity: 1 }, hidden: { scale: 0.9, opacity: 0 } };
  const sheetVariants = { visible: { y: 0 }, hidden: { y: "100%" } };

  return (
    <div className="bg-white rounded-xl h-70 shadow-md p-4 sm:p-6 border">
      <h2 className="text-xl font-bold text-gray-800 mb-4 items-center justify-center p-auto">My Addresses</h2>
      <div className="space-y-3 max-h-56 overflow-y-auto pr-2">
        {addresses.map((addr) => (
          <div key={addr.id} className="border rounded-lg p-1 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-xl">{addr.type === "Home" ? <FaHome className="text-blue-500"/> : <FaStore className="text-green-500"/>}</span>
              <div>
                <p className="font-semibold text-gray-800">{addr.type}</p>
                <p className="text-sm text-gray-500">{`${addr.hno}, ${addr.area}, ${addr.city}`}</p>
              </div>
            </div>
            <button onClick={() => openModal('edit', addr)} className="p-2 rounded-full hover:bg-gray-100 transition-colors"><FaEdit className="text-gray-600"/></button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
  <button
    onClick={() => openModal('add')}
    className="w-50% sm:w-auto px-3 py-1.5 border-2 border-dashed rounded-lg flex items-center justify-center gap-2 text-gray-600 hover:border-teal-500 hover:text-teal-600 transition-colors font-semibold max-w-xs"
  >
    <FaPlus /> Add New Address
  </button>
</div>


      {/* The Modal / Bottom Sheet */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className={`fixed inset-0 bg-black/60 z-50 flex justify-center p-4 ${isMobile ? 'items-end' : 'items-center'}`}
            onClick={() => setIsModalOpen(false)}>
            <motion.div
              variants={isMobile ? sheetVariants : modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={isMobile ? { type: "spring", stiffness: 300, damping: 30 } : {}}
              onClick={(e) => e.stopPropagation()} 
              className={`bg-white w-full max-w-md ${isMobile ? 'rounded-t-2xl p-6' : 'rounded-xl p-6'}`}
            >
              <AddressForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddressManager;