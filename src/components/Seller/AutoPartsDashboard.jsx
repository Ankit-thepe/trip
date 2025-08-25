import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch, FaTimes } from "react-icons/fa";
import sampleImg from "../../assets/images/sample-part.png";

const initialParts = [
  {
    id: 1,
    name: "Brake Pad",
    description: "Front brake pad for cars",
    category: "Engine",
    vehicleType: "Car",
    vehicleBrand: "Maruti",
    vehicleModel: "Swift",
    price: "₹1200",
    image: sampleImg,
    status: "pending",
  },
  {
    id: 2,
    name: "Side Mirror",
    description: "Right-side mirror for bikes",
    category: "Exterior",
    vehicleType: "Bike",
    vehicleBrand: "Bajaj",
    vehicleModel: "Pulsar",
    price: "₹400",
    image: sampleImg,
    status: "completed",
  },
];

const categories = ["Engine", "Exterior", "Interior"];
const vehicleTypes = ["Car", "Bike", "SUV"];
const brands = ["Maruti", "Hyundai", "Honda", "Bajaj"];
const models = ["Swift", "Pulsar", "i20", "Activa"];

const AutoPartsDashboard = () => {
  const [autoParts, setAutoParts] = useState(initialParts);
  const [filters, setFilters] = useState({ category: "", vehicleType: "" });
  const [showForm, setShowForm] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);
  const [editingPartId, setEditingPartId] = useState(null); // 🆕 Track edit state
  const [newPart, setNewPart] = useState({
    name: "",
    description: "",
    category: "",
    vehicleType: "",
    vehicleBrand: "",
    vehicleModel: "",
    price: "",
    image: "",
    status: "pending",
  });

  const filteredParts = autoParts.filter((part) => {
    const matchCategory = filters.category ? part.category === filters.category : true;
    const matchType = filters.vehicleType ? part.vehicleType === filters.vehicleType : true;
    return matchCategory && matchType;
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImageFile(imgURL);
      setNewPart({ ...newPart, image: imgURL });
    }
  };

  const handleDone = () => {
    if (!imageFile && editingPartId === null) return;

    if (editingPartId !== null) {
      // Update existing
      const updated = autoParts.map((part) =>
        part.id === editingPartId
          ? { ...newPart, id: editingPartId, image: imageFile || part.image }
          : part
      );
      setAutoParts(updated);
    } else {
      // Add new
      const partToAdd = {
        ...newPart,
        id: Date.now(),
        image: imageFile,
        status: "pending",
      };
      setAutoParts([...autoParts, partToAdd]);
    }

    setShowForm(false);
    setEditingPartId(null);
    setImageFile(null);
    setNewPart({
      name: "",
      description: "",
      category: "",
      vehicleType: "",
      vehicleBrand: "",
      vehicleModel: "",
      price: "",
      image: "",
      status: "pending",
    });
  };

  const handleEdit = (part) => {
    setNewPart({ ...part });
    setEditingPartId(part.id);
    setImageFile(part.image);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this part?");
    if (confirmDelete) {
      setAutoParts(autoParts.filter((part) => part.id !== id));
    }
  };

  const renderPartCard = (part) => (
    <div
      key={part.id}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border p-3 bg-white rounded shadow"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex-shrink-0">
            <img
            src={part.image}
            alt={part.name}
            className="object-cover w-full h-full rounded cursor-pointer"
            onClick={() => setExpandedImage(part.image)}
            />
        </div>

        <div className="flex flex-col">
            <div className="font-semibold">{part.name}</div>
            <div className="text-sm text-gray-500 flex flex-wrap gap-x-2">
                <span>{part.category}</span>
                <span>• {part.vehicleType}</span>
                <span>• {part.vehicleBrand}</span>
                <span>• {part.vehicleModel}</span>
            </div>
            <div className="text-sm font-medium">{part.price}</div>
        </div>
      </div>


      <div className="flex gap-3 self-end sm:self-center">
        <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEdit(part)}>
          <FaEdit />
        </button>
        <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(part.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 bg-gray-100 mt-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Auto Parts Listing</h1>
        <button
          onClick={() => {
            setShowForm(true);
            setNewPart({
              name: "",
              description: "",
              category: "",
              vehicleType: "",
              vehicleBrand: "",
              vehicleModel: "",
              price: "",
              image: "",
              status: "pending",
            });
            setImageFile(null);
            setEditingPartId(null);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-700 w-full sm:w-auto justify-center"
        >
          <FaPlus /> List Auto Part
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select
          className="border px-4 py-2 rounded w-full"
          value={filters.vehicleType}
          onChange={(e) => setFilters({ ...filters, vehicleType: e.target.value })}
        >
          <option value="">All Types</option>
          {vehicleTypes.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
        <select
          className="border px-4 py-2 rounded w-full"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Parts List */}
      <div className="space-y-4">
        {filteredParts.length ? (
          filteredParts.map(renderPartCard)
        ) : (
          <p className="text-center text-gray-500">No parts found.</p>
        )}
      </div>

      {/* Image Expand Overlay */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setExpandedImage(null)}
        >
          <img
            src={expandedImage}
            alt="Expanded"
            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">
              {editingPartId ? "Edit Auto Part" : "List Auto Part"}
            </h2>

            {/* Upload Image */}
            <div className="mb-4">
              <label className="font-medium mb-1 block">Upload Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="text-sm"/>
              {(imageFile || newPart.image) && (
                <img
                  src={imageFile || newPart.image}
                  alt="Preview"
                  className="w-24 h-24 mt-2 object-cover border rounded"
                />
              )}
            </div>

            <div className="mb-2">
              <label className="font-medium">Part Name</label>
              <input
                value={newPart.name}
                onChange={(e) => setNewPart({ ...newPart, name: e.target.value })}
                className="border px-3 py-2 rounded w-full"
              />
            </div>
            <div className="mb-2">
              <label className="font-medium">Description</label>
              <textarea
                value={newPart.description}
                onChange={(e) => setNewPart({ ...newPart, description: e.target.value })}
                className="border px-3 py-2 rounded w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <select
                value={newPart.vehicleType}
                onChange={(e) => setNewPart({ ...newPart, vehicleType: e.target.value })}
                className="border px-3 py-2 rounded"
              >
                <option value="">Select Type</option>
                {vehicleTypes.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>

              <select
                value={newPart.vehicleBrand}
                onChange={(e) => setNewPart({ ...newPart, vehicleBrand: e.target.value })}
                className="border px-3 py-2 rounded"
              >
                <option value="">Select Brand</option>
                {brands.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>

              <select
                value={newPart.vehicleModel}
                onChange={(e) => setNewPart({ ...newPart, vehicleModel: e.target.value })}
                className="border px-3 py-2 rounded"
              >
                <option value="">Select Model</option>
                {models.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>

              <select
                value={newPart.category}
                onChange={(e) => setNewPart({ ...newPart, category: e.target.value })}
                className="border px-3 py-2 rounded"
              >
                <option value="">Select Category</option>
                {categories.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="font-medium">Price</label>
              <input
                value={newPart.price}
                onChange={(e) => setNewPart({ ...newPart, price: e.target.value })}
                className="border px-3 py-2 rounded w-full"
              />
            </div>

            <button
              disabled={!imageFile && editingPartId === null}
              onClick={handleDone}
              className={`w-full py-2 rounded text-white ${
                imageFile || editingPartId !== null
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoPartsDashboard;