import React from "react";
import { Star, Truck, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <div>
      {/* Header */}
      <div className="bg-teal-500 text-white text-center py-10">
        <h1 className="text-2xl font-medium">Why Choose Us?</h1>
      </div>

      {/* Cards Grid */}
      <div className="bg-[#d9d9d9] px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-50 gap-y-8 max-w-4xl mx-auto w-full ">
          <FeatureCard
            icon={<Star className="w-5 h-5 text-white" />}
            title="Top-Rated Garages"
            description="Trusted & reviewed"
            iconBg="bg-yellow-400"
          />
          <FeatureCard
            icon={
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-2 bg-teal-500 rounded-sm"></div>
              </div>
            }
            title="Live Slot Booking"
            description="Quick availability & book instantly"
            iconBg="bg-teal-500"
          />
          <FeatureCard
            icon={<Shield className="w-5 h-5 text-white" />}
            title="Authorised Parts Dealer"
            description="Only genuine OEM products"
            iconBg="bg-gray-800"
          />
          <FeatureCard
            icon={<Truck className="w-5 h-5 text-white" />}
            title="1-2 Days Delivery"
            description="Speedy part shipments"
            iconBg="bg-red-500"
          />
          <FeatureCard
            icon={<div className="w-5 h-3 bg-white rounded-sm"></div>}
            title="All Vehicle Services"
            description="Bikes, Cars, CVs — all"
            iconBg="bg-gray-700"
          />
          <FeatureCard
            icon={
              <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-blue-900">₹</span>
              </div>
            }
            title="Transparent Pricing"
            description="Know your costs upfront"
            iconBg="bg-blue-500"
          />
        </div>
      </div>

      {/* Separator */}
      <div className="h-0.5 bg-black w-full" />
    </div>
  );
}
