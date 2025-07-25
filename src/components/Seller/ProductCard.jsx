import React from "react";

const ProductCard = ({ product, onDoneClick }) => {
  return (
    <div className="bg-white border rounded shadow p-3 flex flex-col items-center w-[130px]">
      <img src={product.image} alt={product.name} className="h-16 w-16 mb-2 object-contain" />
      <p className="font-medium text-center">{product.name}</p>
      <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>

      {product.status === "verification" && (
        <button
          className="mt-2 px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
          onClick={() => onDoneClick(product)}
        >
          Done
        </button>
      )}

      {product.status === "pending" && (
        <span className="mt-2 px-2 py-1 bg-yellow-500 text-white text-xs rounded">Pending</span>
      )}

      {product.status === "completed" && (
        <span className="mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded">Completed</span>
      )}

      {product.status === "cancelled" && (
        <span className="mt-2 px-2 py-1 bg-red-500 text-white text-xs rounded">Cancelled</span>
      )}
    </div>
  );
};

export default ProductCard;
