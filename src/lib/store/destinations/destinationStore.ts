// lib/store/destinations/destinationStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Destination {
  id: string;
  name: string;
  location: string;
  country: string;
  image: string;
  description: string;
  category: string[];
  bestSeason: string[];
  rating: number;
  priceRange: 'budget' | 'moderate' | 'luxury' | 'premium';
  travelers: string[];
  duration: string;
  personality: string[];
  pace: string[];
  highlights: string[];
  tags: string[];
  aiScore?: number; // For AI matching
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface FilterState {
  destination: string;
  duration: string;
  travelers: string;
  tripType: string[];
  experience: string[];
  personality: string;
  budget: string;
  pace: string;
}

interface DestinationStore {
  // Filter State
  filters: FilterState;
  updateFilters: (filters: Partial<FilterState>) => void;
  clearFilters: () => void;
  
  // Chat State
  chatMessages: ChatMessage[];
  addChatMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  clearChat: () => void;
  
  // All Destinations Data
  allDestinations: Destination[];
  
  // Computed Getters
  getSeasonalDestinations: () => Destination[];
  getRecommendedDestinations: () => Destination[];
  getChatRecommendedDestinations: () => Destination[];
  
  // Search Functions
  searchDestinations: (query: string) => Destination[];
}

// Hardcoded destination data
const ALL_DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Santorini',
    location: 'Greek Islands',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
    description: 'Stunning white-washed buildings with blue domes overlooking the Aegean Sea. Perfect for romantic getaways and sunset views.',
    category: ['beach', 'romantic', 'cultural'],
    bestSeason: ['spring', 'summer', 'autumn'],
    rating: 4.8,
    priceRange: 'luxury',
    travelers: ['couple', 'solo', 'group'],
    duration: '5-7 days',
    personality: ['relaxed', 'balanced'],
    pace: ['relaxed', 'balanced'],
    highlights: ['Oia sunset', 'Caldera views', 'Wine tasting', 'Ancient ruins'],
    tags: ['honeymoon', 'photography', 'luxury']
  },
  {
    id: '2',
    name: 'Swiss Alps',
    location: 'Switzerland',
    country: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w-800',
    description: 'Majestic mountain landscapes with world-class skiing, hiking trails, and charming alpine villages.',
    category: ['mountain', 'adventure', 'nature'],
    bestSeason: ['winter', 'summer'],
    rating: 4.7,
    priceRange: 'premium',
    travelers: ['family', 'couple', 'solo', 'group'],
    duration: '7-10 days',
    personality: ['adventure', 'balanced'],
    pace: ['balanced', 'fast'],
    highlights: ['Jungfraujoch', 'Skiing', 'Hiking trails', 'Cable car rides'],
    tags: ['adventure', 'family', 'snow']
  },
  {
    id: '3',
    name: 'Bali',
    location: 'Indonesia',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800',
    description: 'Tropical paradise with lush rice terraces, ancient temples, and vibrant culture. Perfect for spiritual retreats.',
    category: ['tropical', 'spiritual', 'beach'],
    bestSeason: ['spring', 'summer', 'autumn'],
    rating: 4.6,
    priceRange: 'moderate',
    travelers: ['solo', 'couple', 'family', 'group'],
    duration: '7-14 days',
    personality: ['relaxed', 'balanced'],
    pace: ['relaxed'],
    highlights: ['Ubud rice fields', 'Tanah Lot temple', 'Beach clubs', 'Yoga retreats'],
    tags: ['spiritual', 'wellness', 'budget']
  },
  {
    id: '4',
    name: 'Kyoto',
    location: 'Japan',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
    description: 'Ancient capital with stunning temples, traditional gardens, and geisha culture. Perfect for cultural immersion.',
    category: ['cultural', 'historic', 'city'],
    bestSeason: ['spring', 'autumn'],
    rating: 4.9,
    priceRange: 'moderate',
    travelers: ['solo', 'couple', 'family'],
    duration: '4-6 days',
    personality: ['balanced'],
    pace: ['balanced'],
    highlights: ['Fushimi Inari Shrine', 'Arashiyama Bamboo Grove', 'Kinkaku-ji', 'Geisha district'],
    tags: ['culture', 'history', 'food']
  },
  {
    id: '5',
    name: 'Maldives',
    location: 'Indian Ocean',
    country: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
    description: 'Overwater bungalows, crystal clear waters, and pristine white sand beaches. Ultimate luxury escape.',
    category: ['beach', 'luxury', 'tropical'],
    bestSeason: ['winter', 'spring'],
    rating: 4.8,
    priceRange: 'luxury',
    travelers: ['couple', 'honeymoon'],
    duration: '5-7 days',
    personality: ['relaxed'],
    pace: ['relaxed'],
    highlights: ['Overwater villas', 'Snorkeling', 'Spa treatments', 'Private dining'],
    tags: ['luxury', 'honeymoon', 'romantic']
  },
  {
    id: '6',
    name: 'New York City',
    location: 'USA',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
    description: 'The city that never sleeps with iconic landmarks, world-class museums, and diverse neighborhoods.',
    category: ['city', 'cultural', 'historic'],
    bestSeason: ['spring', 'autumn'],
    rating: 4.5,
    priceRange: 'premium',
    travelers: ['solo', 'couple', 'family', 'group'],
    duration: '5-7 days',
    personality: ['fast', 'balanced'],
    pace: ['fast'],
    highlights: ['Times Square', 'Central Park', 'Broadway shows', 'Museums'],
    tags: ['city', 'entertainment', 'shopping']
  },
  {
    id: '7',
    name: 'Swiss Alps Summer',
    location: 'Switzerland',
    country: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
    description: 'Green alpine meadows, hiking trails, and clear mountain lakes perfect for summer adventures.',
    category: ['mountain', 'nature', 'adventure'],
    bestSeason: ['summer'],
    rating: 4.7,
    priceRange: 'moderate',
    travelers: ['family', 'solo', 'couple'],
    duration: '5-8 days',
    personality: ['adventure', 'balanced'],
    pace: ['balanced'],
    highlights: ['Hiking', 'Mountain biking', 'Lake swimming', 'Cable cars'],
    tags: ['summer', 'adventure', 'nature']
  },
  {
    id: '8',
    name: 'Dubai',
    location: 'UAE',
    country: 'UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    description: 'Ultra-modern city with luxury shopping, futuristic architecture, and desert adventures.',
    category: ['city', 'luxury', 'adventure'],
    bestSeason: ['winter', 'spring'],
    rating: 4.4,
    priceRange: 'luxury',
    travelers: ['family', 'couple', 'group'],
    duration: '4-6 days',
    personality: ['fast'],
    pace: ['fast'],
    highlights: ['Burj Khalifa', 'Desert safari', 'Shopping malls', 'Palm Jumeirah'],
    tags: ['luxury', 'modern', 'adventure']
  },
  {
    id: '9',
    name: 'Paris',
    location: 'France',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    description: 'The city of love with iconic landmarks, world-class cuisine, and romantic ambiance.',
    category: ['city', 'romantic', 'cultural'],
    bestSeason: ['spring', 'autumn'],
    rating: 4.7,
    priceRange: 'premium',
    travelers: ['couple', 'solo', 'family'],
    duration: '4-6 days',
    personality: ['balanced'],
    pace: ['balanced'],
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River cruise', 'French cuisine'],
    tags: ['romantic', 'culture', 'food']
  },
  {
    id: '10',
    name: 'Tokyo',
    location: 'Japan',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
    description: 'Vibrant metropolis blending ultramodern and traditional, famous for cherry blossoms and cuisine.',
    category: ['city', 'cultural', 'food'],
    bestSeason: ['spring', 'autumn'],
    rating: 4.8,
    priceRange: 'moderate',
    travelers: ['solo', 'couple', 'group'],
    duration: '5-7 days',
    personality: ['fast'],
    pace: ['fast'],
    highlights: ['Shibuya Crossing', 'Tokyo Skytree', 'Tsukiji Market', 'Senso-ji Temple'],
    tags: ['city', 'food', 'technology']
  },
  {
    id: '11',
    name: 'Queenstown',
    location: 'New Zealand',
    country: 'New Zealand',
    image: 'https://images.unsplash.com/photo-1582573450341-1e9e6df09d39?w=800',
    description: 'Adventure capital of the world with stunning lake and mountain scenery.',
    category: ['adventure', 'mountain', 'nature'],
    bestSeason: ['summer', 'winter'],
    rating: 4.6,
    priceRange: 'moderate',
    travelers: ['solo', 'couple', 'group'],
    duration: '4-6 days',
    personality: ['adventure'],
    pace: ['fast'],
    highlights: ['Bungee jumping', 'Skiing', 'Milford Sound', 'Wine tours'],
    tags: ['adventure', 'extreme', 'nature']
  },
  {
    id: '12',
    name: 'Amsterdam',
    location: 'Netherlands',
    country: 'Netherlands',
    image: 'https://images.unsplash.com/photo-1512470880441-621f4569f3b8?w=800',
    description: 'Charming canal city with historic architecture, world-class museums, and bicycle culture.',
    category: ['city', 'cultural', 'historic'],
    bestSeason: ['spring', 'summer'],
    rating: 4.5,
    priceRange: 'moderate',
    travelers: ['solo', 'couple', 'family'],
    duration: '3-5 days',
    personality: ['balanced'],
    pace: ['relaxed'],
    highlights: ['Canal cruise', 'Van Gogh Museum', 'Anne Frank House', 'Tulip fields'],
    tags: ['culture', 'history', 'canals']
  },
];

export const useDestinationStore = create<DestinationStore>()(
  persist(
    (set, get) => ({
      // Initial filter state
      filters: {
        destination: '',
        duration: '',
        travelers: '',
        tripType: [],
        experience: [],
        personality: '',
        budget: '',
        pace: '',
      },

      // Initial chat state
      chatMessages: [],

      // All destinations data
      allDestinations: ALL_DESTINATIONS,

      // Update filters
      updateFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        })),

      // Clear all filters
      clearFilters: () =>
        set({
          filters: {
            destination: '',
            duration: '',
            travelers: '',
            tripType: [],
            experience: [],
            personality: '',
            budget: '',
            pace: '',
          },
        }),

      // Add chat message
      addChatMessage: (message) =>
        set((state) => ({
          chatMessages: [
            ...state.chatMessages,
            {
              ...message,
              id: Date.now().toString(),
              timestamp: new Date(),
            },
          ],
        })),

      // Clear chat
      clearChat: () => set({ chatMessages: [] }),

      // Get seasonal destinations (for current season)
      getSeasonalDestinations: () => {
        const currentMonth = new Date().getMonth();
        let currentSeason: string;
        
        if (currentMonth >= 2 && currentMonth <= 4) currentSeason = 'spring';
        else if (currentMonth >= 5 && currentMonth <= 7) currentSeason = 'summer';
        else if (currentMonth >= 8 && currentMonth <= 10) currentSeason = 'autumn';
        else currentSeason = 'winter';

        return ALL_DESTINATIONS
          .filter(dest => dest.bestSeason.includes(currentSeason))
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4);
      },

      // Get recommended destinations based on filters
      getRecommendedDestinations: () => {
        const { filters } = get();
        let destinations = [...ALL_DESTINATIONS];

        // Apply filters
        if (filters.destination) {
          destinations = destinations.filter(dest =>
            dest.name.toLowerCase().includes(filters.destination.toLowerCase()) ||
            dest.location.toLowerCase().includes(filters.destination.toLowerCase()) ||
            dest.country.toLowerCase().includes(filters.destination.toLowerCase())
          );
        }

        if (filters.duration) {
          destinations = destinations.filter(dest =>
            dest.duration.includes(filters.duration.split('–')[0]) ||
            filters.duration === 'Weekend' && dest.duration.includes('3-4') ||
            filters.duration === 'Week' && dest.duration.includes('7')
          );
        }

        if (filters.travelers) {
          destinations = destinations.filter(dest =>
            dest.travelers.includes(filters.travelers.toLowerCase())
          );
        }

        if (filters.tripType.length > 0) {
          destinations = destinations.filter(dest =>
            filters.tripType.some(type =>
              dest.category.includes(type.toLowerCase()) ||
              dest.tags.includes(type.toLowerCase())
            )
          );
        }

        if (filters.experience.length > 0) {
          destinations = destinations.filter(dest =>
            filters.experience.some(exp =>
              dest.category.includes(exp.toLowerCase()) ||
              dest.highlights.some(h => h.toLowerCase().includes(exp.toLowerCase()))
            )
          );
        }

        if (filters.personality) {
          destinations = destinations.filter(dest =>
            dest.personality.includes(filters.personality)
          );
        }

        if (filters.budget) {
          destinations = destinations.filter(dest =>
            dest.priceRange === filters.budget.toLowerCase()
          );
        }

        if (filters.pace) {
          destinations = destinations.filter(dest =>
            dest.pace.includes(filters.pace.toLowerCase())
          );
        }

        // Calculate AI score for remaining destinations
        destinations = destinations.map(dest => {
          let score = dest.rating * 20; // Base score from rating
          
          // Boost score for better matches
          if (filters.destination && (
            dest.name.toLowerCase().includes(filters.destination.toLowerCase()) ||
            dest.location.toLowerCase().includes(filters.destination.toLowerCase())
          )) {
            score += 30;
          }

          if (filters.tripType.length > 0 && filters.tripType.some(type =>
            dest.category.includes(type.toLowerCase())
          )) {
            score += 15;
          }

          return { ...dest, aiScore: score };
        });

        // Sort by AI score and return top 8
        return destinations
          .sort((a, b) => (b.aiScore || 0) - (a.aiScore || 0))
          .slice(0, 8);
      },

      // Get destinations based on chat conversation
      getChatRecommendedDestinations: () => {
        const { chatMessages } = get();
        
        if (chatMessages.length === 0) {
          // Return some initial suggestions
          return ALL_DESTINATIONS
            .filter(dest => dest.category.includes('popular'))
            .slice(0, 4);
        }

        // Extract keywords from chat
        const allMessages = chatMessages.map(msg => msg.text.toLowerCase()).join(' ');
        const keywords = [
          'beach', 'mountain', 'city', 'adventure', 'relax', 'cultural',
          'food', 'luxury', 'budget', 'family', 'couple', 'solo', 'group',
          'summer', 'winter', 'spring', 'autumn'
        ];

        const matchedKeywords = keywords.filter(keyword => 
          allMessages.includes(keyword)
        );

        // Find destinations matching chat keywords
        let destinations = ALL_DESTINATIONS.filter(dest => {
          if (matchedKeywords.length === 0) return true;
          
          return matchedKeywords.some(keyword =>
            dest.name.toLowerCase().includes(keyword) ||
            dest.description.toLowerCase().includes(keyword) ||
            dest.category.includes(keyword) ||
            dest.tags.includes(keyword) ||
            dest.highlights.some(h => h.toLowerCase().includes(keyword))
          );
        });

        return destinations.slice(0, 4);
      },

      // Search destinations by query
      searchDestinations: (query) => {
        const searchTerm = query.toLowerCase();
        return ALL_DESTINATIONS.filter(dest =>
          dest.name.toLowerCase().includes(searchTerm) ||
          dest.location.toLowerCase().includes(searchTerm) ||
          dest.country.toLowerCase().includes(searchTerm) ||
          dest.description.toLowerCase().includes(searchTerm) ||
          dest.category.some(cat => cat.includes(searchTerm)) ||
          dest.tags.some(tag => tag.includes(searchTerm))
        );
      },
    }),
    {
      name: 'destination-store',
      partialize: (state) => ({
        filters: state.filters,
        chatMessages: state.chatMessages,
      }),
    }
  )
);