// src/components/BookSlot/SpecificService/BookingWidget.jsx
import React from 'react';

const BookingWidget = ({ cartItems, onClearCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace("₹", "")), 0);

  return (
    <div className="sticky top-24 bg-white rounded-2xl shadow-lg border p-6">
      <h3 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">Your Selections</h3>
      {cartItems.length > 0 ? (
        <>
          <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <span className="text-gray-700">{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-4 border-t mt-4 font-bold text-lg">
            <span>Total</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={onClearCart} className="text-xs text-red-500 hover:underline mt-2">Clear All</button>
          <button className="w-full mt-4 bg-teal-500 text-white font-bold py-3 rounded-xl hover:bg-teal-600 transition-colors shadow-lg">
            Proceed to Book
          </button>
        </>
      ) : (
        <p className="text-gray-500 text-center py-8">Your cart is empty. Add services to proceed.</p>
      )}
    </div>
  );
};

export default BookingWidget;