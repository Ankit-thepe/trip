import React, { useState } from "react";
import ProductCard from "./ProductCard";
import VerificationForm from "./VerificationForm";
import brakesImg from "../../assets/images/mechanic.png";
import sideglassImg from "../../assets/images/reports.png";

const initialProducts = [
  { id: 1, name: "Brakes", quantity: 2, image: brakesImg, status: "verification" },
  { id: 2, name: "Sideglass", quantity: 2, image: sideglassImg, status: "verification" },
  { id: 3, name: "Headlight", quantity: 1, image: sideglassImg, status: "verification" },
  { id: 4, name: "Air Filter", quantity: 5, image: brakesImg, status: "verification" },
  { id: 5, name: "Spark Plug", quantity: 8, image: sideglassImg, status: "verification" },
];

const Dashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDoneClick = (product) => setSelectedProduct(product);
  const handleCloseForm = () => setSelectedProduct(null);

  const handleFormSubmit = (product) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, status: "pending" } : item
      )
    );
    setSelectedProduct(null);
  };

  const renderSection = (title, status, bg) => {
    const filteredProducts = products.filter((p) => p.status === status);
    if (filteredProducts.length === 0) return null;

    return (
      <div className={`p-4 rounded-md shadow-sm bg-${bg}-100`}>
        <h2 className={`text-xl font-semibold text-${bg}-800 mb-4`}>{title}</h2>
        {/* FIX: Use a responsive grid for the cards for a clean, wrapping layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDoneClick={handleDoneClick}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    // FIX: Changed from fixed width (w-8/12) to full width to fill its container.
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md w-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Manage your products and orders here.</p>
      </div>
      
      <div className="space-y-6">
        {renderSection("Verification", "verification", "gray")}
        {renderSection("Pending", "pending", "yellow")}
        {renderSection("Completed", "completed", "blue")}
        {renderSection("Cancelled", "cancelled", "red")}
      </div>
      
      {selectedProduct && (
        <VerificationForm
          product={selectedProduct}
          onClose={handleCloseForm}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default Dashboard;