import React from 'react';
import { useCart } from './CartContext';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartAuto = () => {
  const { items, total, removeFromCart, updateQuantity, isCartOpen, toggleCart } = useCart();
  const navigate = useNavigate();

  // This line controls whether the cart is visible or not.
  if (!isCartOpen) return null;

  return (
    <div className="fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] bg-white shadow-lg z-50 p-4 overflow-y-auto transition-transform duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={toggleCart}><X /></button>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500 text-center">No items in cart.</p>
      ) : (
        <>
          {/* ... rest of your cart item mapping ... */}
          {items.map(item => (
            <div key={item.id} className="mb-4 border-b pb-2">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <p className="text-sm">₹{item.price.toFixed(2)}</p>
                </div>
                <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">Remove</button>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => {
                toggleCart();
                navigate('/checkout');
              }}
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartAuto;