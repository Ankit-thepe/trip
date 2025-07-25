import React, { useState } from "react";

const VerificationForm = ({ product, onClose, onSubmit }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const isReadyToSubmit = !!image;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Complete Verification</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✖</button>
        </div>

        <div className="mb-4">
          <img src={product.image} alt={product.name} className="w-16 h-16 object-contain mx-auto mb-2" />
          <p className="text-center font-semibold">{product.name}</p>
          <p className="text-center text-gray-600">Quantity: {product.quantity}</p>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Upload Image:</label>
          <input type="file" onChange={handleImageChange} className="w-full border p-1 rounded" />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Delivery Address:</label>
          <input type="text" value="123, Seller Street, City" disabled className="w-full border p-1 rounded bg-gray-100" />
        </div>

        <button
          onClick={() => onSubmit(product)}
          disabled={!isReadyToSubmit}
          className={`w-full py-2 text-white font-semibold rounded ${
            isReadyToSubmit ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default VerificationForm;
