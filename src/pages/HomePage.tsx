import React from 'react';
import HeroSection from '../components/Home/HeroSection';

const HomePage: React.FC = () => (
    <div className="min-h-screen">
        <HeroSection />
        
        {/* Additional Content Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">🌍</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Discover Places</h3>
                        <p className="text-gray-600">Explore amazing destinations around the world</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">🎫</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Book Events</h3>
                        <p className="text-gray-600">Secure your spot at incredible events</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">✨</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Make Memories</h3>
                        <p className="text-gray-600">Create unforgettable experiences</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;
