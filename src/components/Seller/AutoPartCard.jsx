import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const AutoPartCard = ({ part, onEdit, onDelete, onImageClick }) => {
  return (
    <div className="flex- items-center justify-between border rounded p-3 bg-white shadow">
      <div className="flex items-center space-x-3">
        <img
          src={part.image}
          alt="icon"
          onClick={() => onImageClick(part.image)}
          className="w-12 h-12 object-cover rounded cursor-pointer"
        />
        <div>
          <div className="font-bold">{part.name}</div>
          <div className="text-sm text-gray-600">{part.description}</div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-4 text-sm text-gray-700">
        <div>Category: {part.category}</div>
        <div>Type: {part.vehicleType}</div>
        <div>Brand: {part.brand}</div>
        <div>Model: {part.model}</div>
        <div className="font-bold">₹{part.price}</div>
      </div>

      <div className="flex gap-2 text-xl text-blue-500">
        <button onClick={onEdit}><FaEdit /></button>
        <button onClick={onDelete} className="text-red-500"><FaTrash /></button>
      </div>
    </div>
  );
};

export default AutoPartCard;
