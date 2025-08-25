import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

// REMOVED: No longer need useCart or ShoppingCart
// import { useCart } from '../AutoParts/CartContext';
// import { ShoppingCart } from 'lucide-react';

const NavbarSlot = () => {
  // REMOVED: The useCart hook call is no longer needed.
  // const { toggleCart, totalItems } = useCart();

  return (
    <nav className="bg-teal-600 shadow-md sticky top-0 z-40">
      <div className="w-full px-4">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and brand name */}
          <div className="flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              alt="Car Service Logo"
              className="h-9 mr-3"
            />
            <span className="font-bold text-white text-xl tracking-wide">
              Car Service Center
            </span>
          </div>

          {/* Center - Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Home
            </Link>
            <Link to="/autoparts" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Auto Parts
            </Link>
            <Link to="/slot-booking-2" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Slot Booking
            </Link>
          </div>

          {/* Right side - Profile */}
          <div className="flex items-center space-x-4">
            {/* The cart button was already commented out and can be fully deleted */}
            <Link to="/user" className="p-2 rounded-full text-white hover:bg-teal-500 focus:outline-none transition-colors">
              <span className="sr-only">Profile</span>
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSlot;