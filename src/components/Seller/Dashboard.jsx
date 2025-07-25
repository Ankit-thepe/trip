import React, { useState } from "react";
import ProductCard from "./ProductCard";
import VerificationForm from "./VerificationForm";
// import brakesImg from "../assets/images/brakes.jpg";
// import sideglassImg from "../assets/images/sideglass.jpg";
import brakesImg from "../../assets/images/mechanic.png";
import sideglassImg from "../../assets/images/reports.png";


const initialProducts = [
  { id: 1, name: "Brakes", quantity: 2, image: brakesImg, status: "verification" },
  { id: 2, name: "Sideglass", quantity: 2, image: sideglassImg, status: "verification" },
  { id: 3, name: "Sideglass", quantity: 2, image: sideglassImg, status: "verification" },
  { id: 4, name: "Sideglass", quantity: 2, image: sideglassImg, status: "verification" },
  { id: 5, name: "Sideglass", quantity: 2, image: sideglassImg, status: "verification" },
];

const Dashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDoneClick = (product) => {
    setSelectedProduct(product);
  };

  const handleFormSubmit = (product) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, status: "pending" } : item
      )
    );
    setSelectedProduct(null);
  };

  const handleCloseForm = () => {
    setSelectedProduct(null);
  };

  const renderSection = (title, status, bg) => {
    return (
        <div className=" ">
             
            <div className={`p-4 mb-6 rounded-md shadow bg-${bg}-100`}>
            <h2 className={`text-lg font-semibold text-${bg}-800 mb-3`}>{title}</h2>
            <div className="flex gap-3  overflow-x-auto whitespace-nowrap flex-wrap border rounded-lg shadow p-4 color-black">
                {products
                .filter((product) => product.status === status)
                .map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    onDoneClick={handleDoneClick}
                    />
                ))}
            </div>
            </div>

        </div>
        
     
    );
  };

  return (
    <div className="p-6 mt-12  bg-white rounded-lg shadow-md w-8/12 mx-auto">
      <div className=" items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-6">Manage your products and orders here.</p>
      </div>
      <div className="grid   gap-4 mb-6">
        {renderSection("Verification", "verification", "gray")}
        {renderSection("Pending", "pending", "yellow")}

      </div>
      <div className="grid   gap-4 mb-6">
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
