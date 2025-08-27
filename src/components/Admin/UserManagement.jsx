// src/components/Admin/UserManagement.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaWrench, FaBoxOpen, FaArrowRight } from 'react-icons/fa';

// A reusable card component for each user type
const UserTypeCard = ({ icon, title, description, path, color }) => {
    const navigate = useNavigate();

    return (
        <div className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 ${color} flex flex-col group`}>
            {/* Main content area */}
            <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full bg-gray-100`}>
                        {icon}
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>

            {/* Footer with navigation button */}
            <button
                onClick={() => navigate(path)}
                className="w-full mt-auto bg-gray-50 p-4 text-left text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-indigo-600 flex items-center justify-between"
            >
                <span>Manage {title}</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
        </div>
    );
};

// The main component that arranges the cards
const UserManagement = () => {
    const userTypes = [
        {
            title: "Users",
            description: "View and manage all registered application users.",
            icon: <FaUser className="text-2xl text-indigo-500" />,
            path: "/admin/users",
            color: "border-indigo-500",
        },
        {
            title: "Garage Owners",
            description: "Manage all approved garage owner partner accounts.",
            icon: <FaWrench className="text-2xl text-blue-500" />,
            path: "/admin/owners",
            color: "border-blue-500",
        },
        {
            title: "Part Sellers",
            description: "Oversee all approved auto part seller partner accounts.",
            icon: <FaBoxOpen className="text-2xl text-green-500" />,
            path: "/admin/sellers",
            color: "border-green-500",
        },
    ];

    return (
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
            {/* On mobile, 1 column. On desktop (lg), 3 columns. */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
                {userTypes.map((userType) => (
                    <UserTypeCard key={userType.title} {...userType} />
                ))}
            </div>
        </div>
    );
};

export default UserManagement;
