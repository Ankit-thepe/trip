import { create } from 'zustand';

interface ComparePricesState {
  source: string;
  destination: string;
  travelDate: string;
  selectedTransport: 'flight' | 'train' | 'bus' | null;
  setSource: (source: string) => void;
  setDestination: (destination: string) => void;
  setTravelDate: (date: string) => void;
  setSelectedTransport: (transport: 'flight' | 'train' | 'bus' | null) => void;
}

export const useComparePricesStore = create<ComparePricesState>((set) => ({
  source: 'Delhi',
  destination: 'Shimla',
  travelDate: new Date().toISOString().split('T')[0],
  selectedTransport: null,
  setSource: (source) => set({ source }),
  setDestination: (destination) => set({ destination }),
  setTravelDate: (date) => set({ travelDate: date }),
  setSelectedTransport: (transport) => set({ selectedTransport: transport }),
}));
