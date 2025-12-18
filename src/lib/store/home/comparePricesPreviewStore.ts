import { create } from 'zustand';
import { ReactNode } from 'react';

export interface PriceExample {
  type: string;
  icon: ReactNode;
  time: string;
  price: string;
  tag: string;
  color: string;
  bg: string;
}

interface ComparePricesPreviewStore {
  examples: Omit<PriceExample, 'icon'>[];
  route: {
    from: string;
    to: string;
  };
}

const useComparePricesPreviewStore = create<ComparePricesPreviewStore>(() => ({
  route: {
    from: 'Delhi',
    to: 'Manali'
  },
  examples: [
    { 
      type: 'Flight', 
      time: '1h 20m', 
      price: '4,500', 
      tag: 'Fastest', 
      color: 'blue', 
      bg: 'bg-white' 
    },
    { 
      type: 'Smart Train', 
      time: '6h 30m', 
      price: '1,200', 
      tag: 'Best Value', 
      color: 'teal', 
      bg: 'bg-white scale-105 shadow-xl shadow-teal-900/5 border-teal-200 z-10' 
    },
    { 
      type: 'Volvo Bus', 
      time: '9h 00m', 
      price: '850', 
      tag: 'Cheapest', 
      color: 'orange', 
      bg: 'bg-white' 
    }
  ]
}));

export default useComparePricesPreviewStore;
