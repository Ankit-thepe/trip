// src/components/Admin/PartnerRequests.jsx
import React, { useState, useEffect } from 'react';
import PartnerRequestCard from './PartnerRequestCard';
import allRequestsData from '../../data/partner-requests.json';
import { FaWrench, FaBoxOpen } from 'react-icons/fa';

const PartnerRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const pendingRequests = allRequestsData.filter(req => req.status === 'pending');
    setRequests(pendingRequests);
  }, []);

  const handleApprove = (id) => {
    console.log(`Approved: ${id}`);
    setRequests(prev => prev.filter(req => req.id !== id));
  };

  const handleReject = (id) => {
    console.log(`Rejected: ${id}`);
    setRequests(prev => prev.filter(req => req.id !== id));
  };

  const ownerRequests = requests.filter(req => req.type === 'Garage Owner');
  const sellerRequests = requests.filter(req => req.type === 'Auto Part Seller');

  const RequestColumn = ({ title, icon, requests, onApprove, onReject }) => (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
      <div className="flex items-center mb-6 pb-3 border-b border-gray-200">
        {icon}
        <h2 className="ml-3 text-lg font-semibold text-gray-800">{title}</h2>
      </div>

      {requests.length > 0 ? (
        <div className="space-y-5">
          {requests.map(req => (
            <PartnerRequestCard
              key={req.id}
              request={req}
              onApprove={onApprove}
              onReject={onReject}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10 italic">
          No pending requests.
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-start">
        <RequestColumn
          title="Garage Owner Requests"
          icon={<FaWrench className="text-xl text-blue-500" />}
          requests={ownerRequests}
          onApprove={handleApprove}
          onReject={handleReject}
        />
        <RequestColumn
          title="Auto Part Seller Requests"
          icon={<FaBoxOpen className="text-xl text-green-500" />}
          requests={sellerRequests}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>
    </div>
  );
};

export default PartnerRequests;
