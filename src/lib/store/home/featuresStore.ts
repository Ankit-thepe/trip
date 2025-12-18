import { create } from 'zustand';
import { ReactNode } from 'react';

export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
  delay: number;
}

interface FeaturesStore {
  features: Feature[];
}

const useFeaturesStore = create<FeaturesStore>(() => ({
  features: [
    {
      icon: 'Sparkles',
      title: 'AI-Powered Planning',
      description: 'Our algorithms build the perfect day-by-day itinerary based on your budget and interests instantly.',
      color: 'bg-violet-100 text-violet-600',
      delay: 0.1
    },
    {
      icon: 'TrendingDown',
      title: 'Smart Price Engine',
      description: 'We track prices across 500+ airlines and transport services to ensure you never overpay.',
      color: 'bg-teal-100 text-teal-600',
      delay: 0.2
    },
    {
      icon: 'Shield',
      title: 'Secure & Insured',
      description: 'Bank-grade encryption for payments with optional travel insurance included in every booking.',
      color: 'bg-blue-100 text-blue-600',
      delay: 0.3
    },
    {
      icon: 'Zap',
      title: 'Instant Confirmation',
      description: 'No waiting periods. Get your tickets, hotel vouchers, and receipts delivered immediately via WhatsApp.',
      color: 'bg-amber-100 text-amber-600',
      delay: 0.4
    }
  ]
}));

export default useFeaturesStore;
