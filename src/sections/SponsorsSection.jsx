import React from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import { mockSponsors } from '../data/mockData';

const SponsorsSection = () => (
    <Section className="bg-white">
        <SectionTitle>In Collaboration With</SectionTitle>
        <div className="flex flex-wrap justify-center items-center gap-8">
            {mockSponsors.map(sponsor => (
                <img key={sponsor.name} src={sponsor.logo} alt={sponsor.name} className="h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            ))}
        </div>
    </Section>
);

export default SponsorsSection;