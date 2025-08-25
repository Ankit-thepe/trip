import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const ConfirmationPage = () => (
    <div className="text-center py-10">
        <div className="mx-auto w-20 h-20 flex items-center justify-center bg-green-100 rounded-full">
            <Check className="text-green-600 w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mt-6">Application Submitted!</h1>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">Thank you for your interest in partnering with us. Your details are under review, and our team will get back to you within 3-5 business days.</p>
        <Link to="/" className="mt-8 inline-block bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700">
            Go to Homepage
        </Link>
    </div>
);

export default ConfirmationPage;
