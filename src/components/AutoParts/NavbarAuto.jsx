import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // ✅ CORRECT
 // Import the useCart hook
import { ShoppingCart, User } from 'lucide-react'; // Using lucide-react for icons

const NavbarAuto = () => {
  const { toggleCart, totalItems } = useCart(); // Get cart functions and state

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

          {/* Right side - Cart and Profile */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleCart} className="relative p-2 rounded-full text-white hover:bg-teal-500 focus:outline-none transition-colors">
              <span className="sr-only">Cart</span>
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center transform translate-x-1/3 -translate-y-1/3">
                  {totalItems}
                </span>
              )}
            </button>
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

export default NavbarAuto;
