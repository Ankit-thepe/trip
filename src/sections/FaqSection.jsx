import React from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import FaqItem from '../components/FaqItem';
import { mockFaqs } from '../data/mockData';

const FaqSection = () => (
    <Section className="bg-white">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="max-w-3xl mx-auto">
            {mockFaqs.map(faq => <FaqItem key={faq.q} {...faq} />)}
        </div>
    </Section>
);

export default FaqSection;