import React from 'react';
import { useCart } from './CartContext';
import { ShoppingCart, ChevronUp } from 'lucide-react';

const CartSummaryAuto = () => {
  // Get all necessary cart data and functions from the context
  const { totalItems, total, toggleCart } = useCart();

  // If there are no items, the component renders nothing.
  if (totalItems === 0) {
    return null;
  }

  return (
    // This container is fixed to the bottom of the screen
    <div className="fixed bottom-0 left-0 w-full z-40">
      <div className="container mx-auto p-4">
        <div
          onClick={toggleCart} // Clicking this opens the main cart panel
          className="bg-teal-600 text-white rounded-xl shadow-2xl p-4 flex justify-between items-center cursor-pointer hover:bg-teal-700 transition-colors"
        >
          {/* Left Side: Icon and Item Count */}
          <div className="flex items-center gap-3">
            <span className="relative">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            </span>
            <span className="font-bold text-lg">
              {totalItems} {totalItems > 1 ? 'Items' : 'Item'}
            </span>
          </div>

          {/* Right Side: Total Price and Action */}
          <div className="flex items-center gap-4">
            <span className="font-bold text-lg">
              ₹{total.toFixed(2)}
            </span>
            <div className="flex items-center gap-1 font-semibold">
              View Cart <ChevronUp size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummaryAuto;