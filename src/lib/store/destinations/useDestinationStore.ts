// src/lib/store/destinations/useDestinationStore.ts
import { create } from 'zustand';
import { DestinationState, ChatMessage } from './types';
import { mockDestinations, mockPackages } from './destinationData';

export type { ChatMessage };

export const useDestinationStore = create<DestinationState>((set, get) => ({
  destinations: mockDestinations,
  packages: mockPackages,
  selectedDestination: null,
  chatMessages: [],
  filters: {
    category: 'All',
    priceRange: {
      min: 0,
      max: 100000,
    },
    duration: 'All',
    rating: 0,
    searchQuery: '',
    travelType: [],
    budget: '',
    climate: [],
    activities: [],
  },

  setDestinations: (destinations) => set({ destinations }),
  
  setPackages: (packages) => set({ packages }),
  
  setSelectedDestination: (destination) => set({ selectedDestination: destination }),
  
  updateFilters: (newFilters) => 
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  
  getFilteredDestinations: () => {
    const { destinations, filters } = get();
    
    return destinations.filter((dest) => {
      // Category filter
      if (filters.category !== 'All' && dest.category !== filters.category) {
        return false;
      }
      
      // Price filter
      if (dest.price < filters.priceRange.min || dest.price > filters.priceRange.max) {
        return false;
      }
      
      // Rating filter
      if (dest.rating < filters.rating) {
        return false;
      }
      
      // Search query filter
      if (filters.searchQuery && !dest.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
          !dest.country.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  },
  
  getPackagesByDestination: (destinationId) => {
    const { packages } = get();
    return packages.filter((pkg) => pkg.destinationId === destinationId);
  },

  getSeasonalDestinations: () => {
    const { destinations } = get();
    const currentMonth = new Date().getMonth();
    let currentSeason = '';
    
    if (currentMonth >= 2 && currentMonth <= 4) currentSeason = 'spring';
    else if (currentMonth >= 5 && currentMonth <= 7) currentSeason = 'summer';
    else if (currentMonth >= 8 && currentMonth <= 10) currentSeason = 'autumn';
    else currentSeason = 'winter';
    
    return destinations.filter(dest => 
      dest.season && dest.season.includes(currentSeason)
    ).slice(0, 4);
  },

  getRecommendedDestinations: () => {
    const { destinations, filters } = get();
    
    // If no filters are applied, return top rated destinations
    const hasActiveFilters = 
      filters.category !== 'All' ||
      (filters.travelType && filters.travelType.length > 0) ||
      (filters.activities && filters.activities.length > 0) ||
      filters.budget !== '';
    
    if (!hasActiveFilters) {
      return destinations
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);
    }
    
    // Apply filters
    return destinations.filter((dest) => {
      if (filters.category !== 'All' && dest.category !== filters.category) {
        return false;
      }
      
      if (filters.travelType && filters.travelType.length > 0 && dest.travelers) {
        const hasMatch = filters.travelType.some(type => 
          dest.travelers!.includes(type.toLowerCase())
        );
        if (!hasMatch) return false;
      }
      
      if (filters.budget) {
        if (filters.budget === 'budget' && dest.priceRange !== 'budget') return false;
        if (filters.budget === 'moderate' && dest.priceRange !== 'moderate') return false;
        if (filters.budget === 'luxury' && dest.priceRange !== 'luxury') return false;
      }
      
      if (filters.activities && filters.activities.length > 0) {
        const hasMatch = filters.activities.some(activity =>
          dest.tags.some(tag => tag.toLowerCase().includes(activity.toLowerCase()))
        );
        if (!hasMatch) return false;
      }
      
      return true;
    }).slice(0, 8);
  },

  getChatRecommendedDestinations: () => {
    const { destinations, chatMessages } = get();
    
    if (chatMessages.length === 0) {
      return destinations.slice(0, 4);
    }
    
    // Analyze chat messages for keywords
    const userMessages = chatMessages
      .filter(msg => msg.sender === 'user')
      .map(msg => msg.text.toLowerCase());
    
    const allText = userMessages.join(' ');
    
    // Score destinations based on chat content
    const scoredDestinations = destinations.map(dest => {
      let score = 0;
      
      // Check category mentions
      if (allText.includes(dest.category.toLowerCase())) score += 3;
      
      // Check destination name
      if (allText.includes(dest.name.toLowerCase())) score += 5;
      
      // Check tags
      dest.tags.forEach(tag => {
        if (allText.includes(tag.toLowerCase())) score += 2;
      });
      
      // Check keywords
      const keywords = ['beach', 'mountain', 'city', 'culture', 'adventure', 'luxury', 'budget'];
      keywords.forEach(keyword => {
        if (allText.includes(keyword)) {
          if (dest.tags.some(tag => tag.toLowerCase().includes(keyword))) score += 1;
          if (dest.description.toLowerCase().includes(keyword)) score += 1;
        }
      });
      
      return { ...dest, score };
    });
    
    return scoredDestinations
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  },

  searchDestinations: (query: string) => {
    const { destinations } = get();
    const lowerQuery = query.toLowerCase();
    
    return destinations.filter(dest =>
      dest.name.toLowerCase().includes(lowerQuery) ||
      dest.country.toLowerCase().includes(lowerQuery) ||
      dest.description.toLowerCase().includes(lowerQuery) ||
      dest.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  },

  addChatMessage: (message) => {
    set((state) => ({
      chatMessages: [
        ...state.chatMessages,
        { ...message, id: Date.now().toString(), timestamp: new Date() }
      ]
    }));
  },

  clearChat: () => {
    set({ chatMessages: [] });
  },
}));
