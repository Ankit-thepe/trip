import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
  FaCalendarCheck,
  FaClipboardList,
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaTags,
  FaCreditCard,
  FaMoneyCheckAlt,
  FaUndo,
  FaChevronRight,
} from "react-icons/fa";

const sections = [
  {
    title: "Booking & Order Activity",
    items: [
      { icon: <FaCalendarCheck className="text-blue-500" />, label: "Booking History", to: "#" },
      { icon: <FaClipboardList className="text-green-600" />, label: "Order History", to: "#" },
      { icon: <FaShoppingCart className="text-purple-500" />, label: "Cart", to: "/cart" }, // Example link
    ],
  },
  {
    title: "Saved Items & Interests",
    items: [
      { icon: <FaHeart className="text-red-500" />, label: "Favourites", to: "#" },
      { icon: <FaStar className="text-yellow-400" />, label: "Wishlist", to: "#" },
      { icon: <FaTags className="text-green-600" />, label: "Offers & Coupons", to: "#" },
    ],
  },
  {
    title: "Payments & Transactions",
    items: [
      { icon: <FaCreditCard className="text-blue-600" />, label: "Payment Methods", to: "#" },
      { icon: <FaMoneyCheckAlt className="text-green-500" />, label: "Transaction History", to: "#" },
      { icon: <FaUndo className="text-purple-600" />, label: "Refund & Exchange", to: "#" },
    ],
  },
];

const BookingOrderCart = () => {
  return (
    // The component is now a single, self-contained card
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-200">
      {sections.map((section, idx) => (
        <div key={idx} className={idx > 0 ? "mt-6 pt-6 border-t" : ""}>
          {/* Section Title now acts as a subheading */}
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            {section.title}
          </h2>

          {/* Items are now in a clean, vertical list */}
          <div className="space-y-2">
            {section.items.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-xl">{item.icon}</div>
                  <p className="font-semibold text-gray-700">{item.label}</p>
                </div>
                <FaChevronRight className="text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingOrderCart;