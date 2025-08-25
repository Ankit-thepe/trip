// src/components/BookSlot/SpecificService/CartSummary.jsx
import React from "react";

const CartSummary = ({ cartItems, onToggleCart, showCart }) => {
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace("₹", "")), 0);

  if (totalItems === 0) return null;

  return (
    <div className={`fixed bottom-0 left-0 w-full bg-white border-t-2 border-teal-500 shadow-2xl transition-all duration-300 z-50`}>
      {/* Collapsed View */}
      <div className={`p-4 flex justify-between items-center cursor-pointer ${showCart ? 'hidden' : 'flex'}`} onClick={onToggleCart}>
        <div className="flex items-center gap-3">
            <span className="bg-teal-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">{totalItems}</span>
            <span className="font-bold text-lg text-gray-800">View Selections</span>
        </div>
        <div className="font-bold text-lg text-teal-600">
            ₹{totalPrice.toFixed(2)}
        </div>
      </div>
      
      {/* Expanded View */}
      <div className={`p-4 ${showCart ? 'block' : 'hidden'}`}>
        <div className="flex justify-between items-center cursor-pointer mb-4" onClick={onToggleCart}>
            <h3 className="font-bold text-lg">Your Selections ({totalItems})</h3>
            <span className="text-sm text-gray-500">▼ Collapse</span>
        </div>
        <div className="space-y-2 max-h-48 overflow-y-auto mb-4">
            {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.price}</span>
                </div>
            ))}
        </div>
        <div className="flex justify-between items-center pt-4 border-t font-bold text-lg">
            <span>Total</span>
            <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-teal-500 text-white font-semibold py-3 rounded-xl hover:bg-teal-600 transition-colors">
            Proceed
        </button>
      </div>
    </div>
  );
};

export default CartSummary;