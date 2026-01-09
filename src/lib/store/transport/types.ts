export type TransportMode = 'Flight' | 'Train' | 'Bus' | 'Cab';

export interface TransportOption {
  id: string;
  mode: TransportMode;
  provider: string;
  price: number;
  currency: string;
  duration: string; // e.g., "2h 15m"
  durationMinutes: number; // for calculation
  departureTime: string;
  arrivalTime: string;
  tags: ('Affordable' | 'Comfort' | 'Fastest' | 'Luxury' | 'Best Value')[];
  rating: number; // 0-5
}

export interface TransportState {
  source: string;
  destination: string;
  selectedMode: TransportMode | 'All';
  transportOptions: TransportOption[];
  setSource: (source: string) => void;
  setDestination: (dest: string) => void;
  setSelectedMode: (mode: TransportMode | 'All') => void;
}
