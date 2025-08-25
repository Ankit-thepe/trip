// src/pages/ServiceCenterPage/ServiceCenterDetailsPage.jsx
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { serviceCenters, serviceCenterDetails } from "../../data/ServiceCentreDetails";
import { useCart } from '../../components/AutoParts/CartContext';

// Import the redesigned and new components
import ServiceCard from "../../components/BookSlot/SpecificService/ServiceCard";
import ImageGallery from "../../components/BookSlot/SpecificService/ImageGallery";
import BookingWidget from "../../components/BookSlot/SpecificService/BookingWidget";
import CartSummary from "../../components/BookSlot/SpecificService/CartSummary";
import StickyNav from '../../components/BookSlot/SpecificService/StickyNav'; // New component

const ServiceCenterDetailsPage = () => {
  const { id } = useParams();
  const { items: cartItems, addToCart, removeFromCart, clearCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const serviceCenter = serviceCenters.find((center) => center.id === id);
  const details = serviceCenterDetails[id];

  if (!serviceCenter || !details) {
    return <div className="text-center py-8 text-gray-600">Service Center not found.</div>;
  }

  const allServices = [
    { category: "Top Services", services: details.topServices },
    { category: "Scheduled Maintenance", services: details.scheduledMaintenance },
    { category: "AC Services", services: details.acServices },
  ].filter(section => section.services && section.services.length > 0);

  const serviceCategories = allServices.map(s => s.category);

  return (
    <>
      <div className="bg-white min-h-screen font-sans pt-2">
        
        {/* Hero Section */}
<div className="container mx-auto px-4 pt-8">
  {/* This is the main container.
    - It stacks elements vertically on mobile (flex-col).
    - It places them side-by-side on medium screens and up (md:flex-row).
    - It centers them vertically (items-center) and adds space between them (gap-8).
  */}
  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

    {/* Left Column: Image Gallery */}
    {/* It takes up half the width on medium screens and up (md:w-1/2) */}
    <div className="w-full md:w-1/2">
      <ImageGallery images={serviceCenter.images} />
    </div>

    {/* Right Column: Service Center Details */}
    {/* It also takes up half the width on medium screens and up (md:w-1/2) */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{serviceCenter.name}</h1>
      <p className="text-md text-gray-600 mt-2">{serviceCenter.location}</p>
      <p className="text-lg font-semibold text-yellow-500 mt-1">⭐ {serviceCenter.rating}</p>
    </div>

  </div>
</div>

        {/* --- NEW: Sticky "Jump to Category" Navigation --- */}
        <StickyNav serviceCategories={serviceCategories} />

        <div className="container mx-auto px-4 py-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start">
            
            {/* --- Left Column (Scrolling Content) --- */}
            <div className="lg:col-span-2 space-y-8">
              {allServices.map(section => (
                <div key={section.category} id={section.category.replace(/\s+/g, '-')}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{section.category}</h2>
                  <div className="divide-y">
                    {section.services.map(service => (
                      <ServiceCard
                        key={service.id}
                        {...service}
                        selected={cartItems.some(item => item.id === service.id)}
                        onAddToCart={addToCart}
                        onRemoveFromCart={removeFromCart}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* --- Right Column (Sticky Booking Widget for Desktop) --- */}
            <div className="hidden lg:block sticky top-28">
              <BookingWidget cartItems={cartItems} onClearCart={clearCart} />
            </div>
          </div>
        </div>
      </div>
      
      {/* --- Floating Cart Summary (for Mobile/Tablet) - Renders only when cart has items --- */}
      {cartItems.length > 0 && (
          <div className="lg:hidden">
            <CartSummary 
                cartItems={cartItems} 
                showCart={showCart} 
                onToggleCart={() => setShowCart(!showCart)}
            />
          </div>
      )}
    </>
  );
};

export default ServiceCenterDetailsPage;