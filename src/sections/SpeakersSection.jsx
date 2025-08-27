import React from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import { mockSpeakers } from '../data/mockData';

const SpeakersSection = () => (
    <Section>
        <SectionTitle>Meet the Top Minds</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mockSpeakers.map(speaker => (
                <div key={speaker.name} className="text-center">
                    <img src={speaker.img} alt={speaker.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
                    <h3 className="font-bold text-lg text-gray-800">{speaker.name}</h3>
                    <p className="text-gray-600">{speaker.title}, {speaker.company}</p>
                </div>
            ))}
        </div>
    </Section>
);

export default SpeakersSection;