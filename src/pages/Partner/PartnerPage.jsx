import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, User, Mail, MessageSquare } from 'lucide-react';
import pppp from '../../assets/images/pppp.png';

import A from '../../assets/images/MechanicAvatar.png';
import S from '../../assets/images/SellerAvatar.png';

// --- FAQ Item Component ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

// --- Main Partner Page Component ---
export default function PartnerPage() {
  const faqData = [
    {
      question: 'How do I get started?',
      answer:
        'Getting started is easy! Simply choose whether you are a garage owner or a parts seller, fill out the partnership form on our website, and our team will get in touch with you within 24-48 hours to guide you through the next steps.',
    },
    {
      question: 'What are the fees for joining?',
      answer:
        'We offer a transparent and competitive fee structure. There are no hidden charges. The specific fees depend on the partnership model you choose. Detailed information will be provided once you express interest.',
    },
    {
      question: 'How will I receive payments?',
      answer:
        'Payments are processed on a regular, pre-agreed cycle (e.g., weekly or bi-weekly) and are transferred directly to your registered bank account. You can track all your earnings and payments through your dedicated partner dashboard.',
    },
    {
      question: 'Is there a long-term commitment?',
      answer:
        'We believe in building flexible and mutually beneficial relationships. Our partnership agreements are designed to be fair and adaptable, with clear terms and no restrictive long-term lock-ins. You can discuss specific contract details with our partnership team.',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* --- Hero Section --- */}
      <section
        className="relative h-[30vh] sm:h-[40vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${pppp})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-black p-4 bg-white/10 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight 
              [text-shadow:_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white]">
              Partner With Us
            </h1>
            <p className="mt-3 sm:hidden md:block text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Join our growing network of trusted garage owners and auto parts sellers.
              Let's drive success together.
            </p>
          </div>
        </div>
      </section>

      {/* --- Choose Your Partnership Path --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Partnership Path</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Whether you own a garage or sell auto parts, we have a tailored partnership model to help you grow your business and reach more customers.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Garage Owner Card */}
            <div className="relative group">
              <div className="h-80 overflow-hidden rounded-t-xl">
                <img
                  src={A}
                  alt="Garage Owner"
                  className="w-auto h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden mx-4 relative z-10 flex flex-col">
                <div className="p-8 pt-12 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3">For Garage Owners</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Increase your visibility, streamline your bookings, and connect with a larger customer base. We provide the tools you need to manage and expand your service center efficiently.
                  </p>
                  <h4 className="font-semibold mb-3 text-left">Key Perks:</h4>
                  <ul className="space-y-2 text-left text-gray-600 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Access to a wide network of car owners.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Advanced slot booking and management system.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Digital presence and marketing support.</span>
                    </li>
                  </ul>
                  <Link
                    to="/garageregistrationpage"
                    className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors mt-auto"
                  >
                    Become a Garage Partner
                  </Link>
                </div>
              </div>
            </div>

            {/* Parts Seller Card */}
            <div className="relative group">
              <div className="h-80 overflow-hidden rounded-t-xl">
                <img
                  src={S}
                  alt="Auto Parts Seller"
                  className="w-auto h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden mx-4 relative z-10 flex flex-col">
                <div className="p-8 pt-12 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3">For Parts Sellers</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Expand your market reach by selling your auto parts on our platform. We connect you with thousands of customers and garages looking for quality components.
                  </p>
                  <h4 className="font-semibold mb-3 text-left">Key Perks:</h4>
                  <ul className="space-y-2 text-left text-gray-600 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>List your products on a high-traffic platform.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Integrated inventory and order management.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Secure payment processing and logistics support.</span>
                    </li>
                  </ul>
                  <Link
                    to="/sellerregistrationpage"
                    className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors mt-auto"
                  >
                    Become a Seller Partner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Social Proof Section --- */}
      <section className="bg-teal-700 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-extrabold">1,200+</p>
              <p className="text-lg text-teal-200 mt-2">Garages Partnered</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold">800+</p>
              <p className="text-lg text-teal-200 mt-2">Sellers Onboard</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold">50,000+</p>
              <p className="text-lg text-teal-200 mt-2">Services Completed Monthly</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Query Section --- */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have More Questions?</h2>
          <p className="text-gray-600 mb-8">
            Our partnership team is here to help. Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <form className="bg-white p-8 rounded-lg shadow-lg text-left space-y-6">
            <div className="relative">
              <User className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-12 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full pl-12 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
            <div className="relative">
              <MessageSquare className="absolute top-3 left-3 text-gray-400" />
              <textarea
                placeholder="Your Query"
                rows="5"
                className="w-full pl-12 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Submit Query
            </button>
          </form>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-semibold">FicnSlot Auto Services</p>
          <p className="mt-2 text-gray-400">Your one-stop solution for car care and parts.</p>
          <div className="mt-6 flex justify-center space-x-6">
            <Link to="/about" className="hover:text-teal-400">About Us</Link>
            <Link to="/contact" className="hover:text-teal-400">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-teal-400">Privacy Policy</Link>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FicnSlot. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
