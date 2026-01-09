// src/lib/store/destinations/types.ts

export interface Destination {
  id: string;
  name: string;
  country: string;
  location?: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  priceRange?: 'budget' | 'moderate' | 'luxury';
  duration: string;
  category: 'Beach' | 'Mountain' | 'City' | 'Cultural' | 'Adventure' | 'Wildlife';
  tags: string[];
  travelers?: string[];
  season?: string[];
  featured?: boolean;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp?: Date;
}

export interface TravelPackage {
  id: string;
  destinationId: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  includes: string[];
  highlights: string[];
  rating: number;
  image: string;
  bestTimeToVisit?: string;
}

export interface DestinationFilters {
  category: string;
  priceRange: {
    min: number;
    max: number;
  };
  duration: string;
  rating: number;
  searchQuery: string;
  travelType?: string[];
  budget?: string;
  climate?: string[];
  activities?: string[];
}

export interface DestinationState {
  destinations: Destination[];
  packages: TravelPackage[];
  selectedDestination: Destination | null;
  filters: DestinationFilters;
  chatMessages: ChatMessage[];
  setDestinations: (destinations: Destination[]) => void;
  setPackages: (packages: TravelPackage[]) => void;
  setSelectedDestination: (destination: Destination | null) => void;
  updateFilters: (filters: Partial<DestinationFilters>) => void;
  getFilteredDestinations: () => Destination[];
  getPackagesByDestination: (destinationId: string) => TravelPackage[];
  getSeasonalDestinations: () => Destination[];
  getRecommendedDestinations: () => Destination[];
  getChatRecommendedDestinations: () => Destination[];
  searchDestinations: (query: string) => Destination[];
  addChatMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  clearChat: () => void;
}
