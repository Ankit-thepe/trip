import React from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ActionButton from '../components/ActionButton';
import { CheckIcon } from '../components/Icons';
import { mockPricing } from '../data/mockData';

const PricingSection = ({ onNavigate }) => (
    <Section>
        <SectionTitle>Choose Your Pass</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
            {mockPricing.map(tier => (
                <div key={tier.tier} className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col">
                    <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                    <p className="text-4xl font-extrabold text-blue-600 mb-6">${tier.price}</p>
                    <ul className="text-left space-y-3 mb-8 flex-grow">
                        {tier.features.map(feature => (
                            <li key={feature} className="flex items-center">
                                <CheckIcon />
                                <span className="ml-3 text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <ActionButton onClick={() => onNavigate('events')} className="mt-auto">Get Your Ticket</ActionButton>
                </div>
            ))}
        </div>
    </Section>
);

export default PricingSection;