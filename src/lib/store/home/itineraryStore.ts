// src/lib/store/home/itineraryStore.ts
import { create } from 'zustand';

export interface ItineraryStep {
  id: string;
  day: number;
  title: string;
  subtitle: string;
  time: string;
  duration?: string;
  type: 'travel' | 'stay' | 'activity' | 'food';
  status: 'booked' | 'pending';
  transportMode?: 'flight' | 'train' | 'bus' | 'car';
}

interface ItineraryState {
  steps: ItineraryStep[];
  toggleStepStatus: (id: string) => void;
}

export const useItineraryStore = create<ItineraryState>((set) => ({
  steps: [
    {
      id: '1',
      day: 1,
      title: 'Flight to Delhi',
      subtitle: 'Mumbai (BOM) → Delhi (DEL)',
      time: '08:00 AM',
      duration: '2h 15m',
      type: 'travel',
      transportMode: 'flight',
      status: 'booked',
    },
    {
      id: '2',
      day: 1,
      title: 'Airport Transfer',
      subtitle: 'Private Cab to Hotel',
      time: '10:45 AM',
      duration: '45m',
      type: 'travel',
      transportMode: 'car',
      status: 'booked',
    },
    {
      id: '3',
      day: 1,
      title: 'Check-in: The Imperial',
      subtitle: 'Connaught Place, New Delhi',
      time: '12:00 PM',
      type: 'stay',
      status: 'booked',
    },
    {
      id: '4',
      day: 2,
      title: 'Train to Agra',
      subtitle: 'Gatimaan Express',
      time: '08:10 AM',
      duration: '1h 40m',
      type: 'travel',
      transportMode: 'train',
      status: 'pending', // Emphasis on Pending
    },
    {
      id: '5',
      day: 2,
      title: 'Taj Mahal Visit',
      subtitle: 'Guided Tour',
      time: '10:30 AM',
      type: 'activity',
      status: 'pending',
    },
    {
      id: '6',
      day: 3,
      title: 'Return Flight',
      subtitle: 'Delhi (DEL) → Mumbai (BOM)',
      time: '06:00 PM',
      type: 'travel',
      transportMode: 'flight',
      status: 'pending',
    }
  ],
  toggleStepStatus: (id) => set((state) => ({
    steps: state.steps.map((step) => 
      step.id === id 
        ? { ...step, status: step.status === 'booked' ? 'pending' : 'booked' }
        : step
    )
  }))
}));
