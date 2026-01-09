// src/lib/store/transport/useTransportStore.ts
import { create } from 'zustand';
import { Plane, Train, Car, LucideIcon } from 'lucide-react';

export interface TransportOption {
  id: string;
  operator: string;
  price: number;
  duration: string;
  departure: string;
  arrival: string;
  stops: string;
  departureTime: string;
  tag?: string; // e.g., 'Best Value', 'Fastest'
}

export interface TransportSummary {
  id: string;
  mode: string;
  icon: LucideIcon;
  minPrice: number;
  avgDuration: string;
  comfort: 'High' | 'Medium' | 'Low';
  listings: TransportOption[];
}

interface TransportState {
  summaries: TransportSummary[];
  selectedMode: string;
  filters: {
    maxBudget: number;
    departureTime: string;
    stops: string;
    sortBy: string;
  };
  setSelectedMode: (mode: string) => void;
  setBudget: (budget: number) => void;
  setDepartureTime: (time: string) => void;
  setStops: (stops: string) => void;
  setSortBy: (sort: string) => void;
}

export const useTransportStore = create<TransportState>((set) => ({
  selectedMode: 'Flight',
  filters: {
    maxBudget: 15000,
    departureTime: 'Any Time',
    stops: 'All',
    sortBy: 'price-low',
  },
  summaries: [
    {
      id: 's1', mode: 'Flight', icon: Plane, minPrice: 2890, avgDuration: '2h 15m', comfort: 'High',
      listings: [
        { id: 'f1', operator: 'United Airlines', price: 2890, duration: '2h 15m', departure: '10:30 AM', arrival: '12:45 PM', stops: 'Non-stop', departureTime: 'Morning', tag: 'Best Value' },
        { id: 'f2', operator: 'Vistara', price: 4500, duration: '2h 10m', departure: '02:00 PM', arrival: '04:10 PM', stops: 'Non-stop', departureTime: 'Afternoon' },
        { id: 'f3', operator: 'IndiGo', price: 3200, duration: '2h 30m', departure: '06:00 AM', arrival: '08:30 AM', stops: 'Non-stop', departureTime: 'Morning' },
        { id: 'f4', operator: 'Air India', price: 5100, duration: '2h 15m', departure: '09:00 PM', arrival: '11:15 PM', stops: 'Non-stop', departureTime: 'Night' },
        { id: 'f5', operator: 'SpiceJet', price: 2750, duration: '5h 45m', departure: '11:00 PM', arrival: '04:45 AM', stops: '1 Stop', departureTime: 'Night' },
      ]
    },
    {
      id: 's2', mode: 'Train', icon: Train, minPrice: 850, avgDuration: '12h 30m', comfort: 'Medium',
      listings: [
        { id: 't1', operator: 'Rajdhani Express', price: 2450, duration: '15h 30m', departure: '04:30 PM', arrival: '08:00 AM', stops: '5 Stops', departureTime: 'Afternoon', tag: 'Most Comfortable' },
        { id: 't2', operator: 'Shatabdi Exp', price: 1200, duration: '6h 45m', departure: '06:00 AM', arrival: '12:45 PM', stops: 'Non-stop', departureTime: 'Morning', tag: 'Fastest' },
        { id: 't3', operator: 'Duronto Exp', price: 1800, duration: '14h 00m', departure: '11:00 AM', arrival: '01:00 AM', stops: '2 Stops', departureTime: 'Morning' },
        { id: 't4', operator: 'Garib Rath', price: 850, duration: '18h 20m', departure: '08:00 PM', arrival: '02:20 PM', stops: '15 Stops', departureTime: 'Night' },
        { id: 't5', operator: 'Tejas Express', price: 2100, duration: '6h 15m', departure: '03:00 PM', arrival: '09:15 PM', stops: 'Non-stop', departureTime: 'Afternoon' },
        { id: 't6', operator: 'Jan Shatabdi', price: 950, duration: '7h 30m', departure: '05:30 AM', arrival: '01:00 PM', stops: '8 Stops', departureTime: 'Morning' },
      ]
    },
    {
      id: 's3', mode: 'Cab', icon: Car, minPrice: 2500, avgDuration: '4h 00m', comfort: 'High',
      listings: [
        { id: 'c1', operator: 'Uber Intercity', price: 4500, duration: '4h 30m', departure: 'Flexible', arrival: 'Flexible', stops: 'Point-to-Point', departureTime: 'Any Time', tag: 'Reliable' },
        { id: 'c2', operator: 'Ola Outstation', price: 4200, duration: '4h 45m', departure: 'Flexible', arrival: 'Flexible', stops: 'Point-to-Point', departureTime: 'Any Time' },
        { id: 'c3', operator: 'MakeMyTrip Cab', price: 3800, duration: '5h 00m', departure: 'Flexible', arrival: 'Flexible', stops: 'Point-to-Point', departureTime: 'Any Time' },
        { id: 'c4', operator: 'Savaari Car', price: 3500, duration: '5h 15m', departure: 'Flexible', arrival: 'Flexible', stops: 'Point-to-Point', departureTime: 'Any Time' },
        { id: 'c5', operator: 'BluSmart', price: 5200, duration: '4h 15m', departure: 'Flexible', arrival: 'Flexible', stops: 'Electric', departureTime: 'Any Time' },
        { id: 'c6', operator: 'Local Taxi', price: 2500, duration: '6h 00m', departure: 'Flexible', arrival: 'Flexible', stops: 'Standard', departureTime: 'Any Time' },
        { id: 'c7', operator: 'Luxury Sedan', price: 8500, duration: '4h 00m', departure: 'Flexible', arrival: 'Flexible', stops: 'Premium', departureTime: 'Any Time' },
      ]
    }
  ],
  setSelectedMode: (mode) => set({ selectedMode: mode }),
  setBudget: (maxBudget) => set((state) => ({ filters: { ...state.filters, maxBudget } })),
  setDepartureTime: (departureTime) => set((state) => ({ filters: { ...state.filters, departureTime } })),
  setStops: (stops) => set((state) => ({ filters: { ...state.filters, stops } })),
  setSortBy: (sortBy) => set((state) => ({ filters: { ...state.filters, sortBy } })),
}));