// src/components/Admin/PartnerRequestCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const PartnerRequestCard = ({ request }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between transition hover:shadow-md hover:-translate-y-0.5"
    >
      {/* Left: Name + Location */}
      <div>
        <h3 className="text-base font-semibold text-gray-900">{request.businessName}</h3>
        <div className="flex items-center text-gray-600 mt-1">
          <FaMapMarkerAlt className="mr-2 text-gray-400" />
          <span className="text-sm">{request.location}</span>
        </div>
      </div>

      {/* Right: View Details button */}
      <button
        onClick={() => navigate(`/admin/partner-details/${request.id}`)}
        className="flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-600 transition"
      >
        <FaExternalLinkAlt className="mr-2" />
        View
      </button>
    </div>
  );
};

export default PartnerRequestCard;
