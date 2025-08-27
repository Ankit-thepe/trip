import React from 'react';
import Section from '../components/Section';

const AboutSection = () => (
    <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">The Premier Destination for Live Experiences</h2>
                <p className="text-gray-600 leading-relaxed">Evently is a global platform dedicated to connecting people with events that inspire, educate, and entertain. Our mission is to make discovering and attending events seamless and memorable.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-center">
                <div className="bg-gray-100 p-6 rounded-xl">
                    <p className="text-4xl font-bold text-blue-600">1M+</p>
                    <p className="text-gray-700">Tickets Sold</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl">
                    <p className="text-4xl font-bold text-blue-600">5,000+</p>
                    <p className="text-gray-700">Events Hosted</p>
                </div>
            </div>
        </div>
    </Section>
);

export default AboutSection;