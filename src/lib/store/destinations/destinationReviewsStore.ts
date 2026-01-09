// lib/store/destinations/destinationReviewsStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface DestinationReview {
  id: string;
  name: string;
  location: string;
  state: string;
  country: string;
  description: string;
  heroImage: string;
  rating: number;
  reviewCount: number;
  bestTimeToVisit: string[];
  currentSeasonStatus: {
    status: 'Perfect' | 'Good' | 'Moderate' | 'Avoid';
    description: string;
    temperature: string;
    crowdLevel: string;
    specialEvents: string[];
  };
  
  // Images Gallery
  images: string[];
  
  // Famous Places
  famousPlaces: {
    name: string;
    description: string;
    type: 'Natural' | 'Historical' | 'Religious' | 'Modern';
    distance: string;
    entryFee?: string;
    bestTime: string;
  }[];
  
  // Things to Do
  thingsToDo: {
    category: string;
    activities: {
      name: string;
      description: string;
      duration: string;
      bestFor: string[];
    }[];
  }[];
  
  // Places to Visit
  placesToVisit: {
    name: string;
    category: 'Must Visit' | 'Hidden Gem' | 'Popular';
    description: string;
    highlights: string[];
    tips: string[];
  }[];
  
  // Food & Cuisine
  foodAndCuisine: {
    name: string;
    type: 'Street Food' | 'Local Dish' | 'Restaurant Specialty';
    description: string;
    mustTry: boolean;
    whereToFind: string[];
    priceRange: string;
  }[];
  
  // Activities
  activities: {
    name: string;
    type: 'Adventure' | 'Relaxation' | 'Cultural' | 'Family';
    description: string;
    season: string;
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
    duration: string;
    estimatedCost: string;
  }[];
  
  // Travel Tips
  travelTips: {
    category: string;
    tips: string[];
  }[];
  
  // Reviews
  userReviews: {
    id: string;
    userName: string;
    userAvatar: string;
    rating: number;
    date: string;
    review: string;
    helpful: number;
    verified: boolean;
    photos: string[];
  }[];
  
  // Quick Facts
  quickFacts: {
    label: string;
    value: string;
    icon: string;
  }[];
  
  // Accommodation
  accommodation: {
    type: string;
    priceRange: string;
    bestAreas: string[];
    recommendations: string[];
  }[];
  
  // Transportation
  transportation: {
    mode: string;
    fromNearestCity: string;
    cost: string;
    duration: string;
    tips: string[];
  }[];
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  relatedTo?: string;
}

interface DestinationReviewStore {
  // Current selected destination
  selectedDestination: string;
  setSelectedDestination: (destination: string) => void;
  
  // All destination reviews data
  destinations: DestinationReview[];
  
  // Chat state
  chatMessages: ChatMessage[];
  addChatMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  clearChat: () => void;
  
  // Get current destination data
  getCurrentDestination: () => DestinationReview | undefined;
  
  // Search destinations
  searchDestinations: (query: string) => DestinationReview[];
}

// Hardcoded detailed destination data
const DESTINATION_REVIEWS: DestinationReview[] = [
  {
    id: 'manali-1',
    name: 'Manali',
    location: 'Himachal Pradesh',
    state: 'Himachal Pradesh',
    country: 'India',
    description: 'Nestled in the breathtaking Himalayas, Manali is a picturesque hill station known for its snow-capped mountains, lush valleys, and adventure sports. A perfect blend of natural beauty and vibrant culture.',
    heroImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200',
    rating: 4.8,
    reviewCount: 2847,
    bestTimeToVisit: ['March to June', 'October to February'],
    
    currentSeasonStatus: {
      status: 'Perfect',
      description: 'Winter wonderland with fresh snowfall. Perfect for snow activities and cozy stays.',
      temperature: '-2°C to 8°C',
      crowdLevel: 'Moderate',
      specialEvents: ['Winter Carnival', 'Snow Festival', 'Ice Skating Competitions']
    },
    
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      'https://images.unsplash.com/photo-1564574662336-88c9f5a6c8d8?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    ],
    
    famousPlaces: [
      {
        name: 'Rohtang Pass',
        description: 'High mountain pass connecting Kullu Valley with Lahaul and Spiti.',
        type: 'Natural',
        distance: '51 km from Manali',
        bestTime: 'May to November'
      },
      {
        name: 'Hadimba Temple',
        description: 'Ancient cave temple dedicated to Hidimba Devi, surrounded by cedar forest.',
        type: 'Religious',
        distance: '2.5 km from Mall Road',
        entryFee: '₹30',
        bestTime: 'All year'
      },
      {
        name: 'Solang Valley',
        description: 'Adventure sports hub with paragliding, zorbing, and skiing facilities.',
        type: 'Natural',
        distance: '14 km from Manali',
        bestTime: 'Winter for snow, Summer for adventure sports'
      }
    ],
    
    thingsToDo: [
      {
        category: 'Adventure Sports',
        activities: [
          {
            name: 'Paragliding',
            description: 'Soar over the beautiful valleys with professional instructors',
            duration: '30-60 minutes',
            bestFor: ['Adventure seekers', 'Couples']
          },
          {
            name: 'River Rafting',
            description: 'White water rafting in the Beas River',
            duration: '2-3 hours',
            bestFor: ['Groups', 'Adventure enthusiasts']
          }
        ]
      },
      {
        category: 'Nature & Relaxation',
        activities: [
          {
            name: 'Hot Springs at Vashisht',
            description: 'Natural sulphuric hot water springs',
            duration: '1-2 hours',
            bestFor: ['Families', 'Couples', 'Solo travelers']
          }
        ]
      }
    ],
    
    placesToVisit: [
      {
        name: 'Old Manali',
        category: 'Hidden Gem',
        description: 'Charming area with cafes, hippie culture, and traditional houses',
        highlights: ['Bohemian cafes', 'Local handicrafts', 'Riverside walks'],
        tips: ['Visit early morning', 'Try local apple products']
      },
      {
        name: 'Manu Temple',
        category: 'Must Visit',
        description: 'Dedicated to sage Manu, with beautiful architecture',
        highlights: ['Ancient architecture', 'Peaceful atmosphere', 'City views'],
        tips: ['Wear appropriate clothing', 'Photography allowed']
      }
    ],
    
    foodAndCuisine: [
      {
        name: 'Sidu',
        type: 'Local Dish',
        description: 'Traditional steamed bread stuffed with walnuts or poppy seeds',
        mustTry: true,
        whereToFind: ['Local dhabas', 'Traditional restaurants'],
        priceRange: '₹80-150'
      },
      {
        name: 'Trout Fish',
        type: 'Restaurant Specialty',
        description: 'Fresh river trout prepared in local Himachali style',
        mustTry: true,
        whereToFind: ['Riverside restaurants', 'Specialty eateries'],
        priceRange: '₹400-800'
      }
    ],
    
    activities: [
      {
        name: 'Skiing',
        type: 'Adventure',
        description: 'Ski on fresh snow slopes with professional guidance',
        season: 'December to February',
        difficulty: 'Moderate',
        duration: '2-4 hours',
        estimatedCost: '₹2000-5000'
      },
      {
        name: 'Trek to Hampta Pass',
        type: 'Adventure',
        description: 'Moderate trek through diverse landscapes',
        season: 'June to September',
        difficulty: 'Challenging',
        duration: '4-5 days',
        estimatedCost: '₹8000-15000'
      }
    ],
    
    travelTips: [
      {
        category: 'Health & Safety',
        tips: [
          'Carry warm clothes even in summer',
          'Acclimatize to avoid altitude sickness',
          'Stay hydrated'
        ]
      }
    ],
    
    userReviews: [
      {
        id: 'rev-1',
        userName: 'Aarav Sharma',
        userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
        rating: 5,
        date: '2 weeks ago',
        review: 'Absolutely magical experience! The snowfall was breathtaking and the adventure activities were well organized. Will definitely visit again.',
        helpful: 42,
        verified: true,
        photos: []
      },
      {
        id: 'rev-2',
        userName: 'Priya Patel',
        userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
        rating: 4,
        date: '1 month ago',
        review: 'Perfect family vacation spot. Kids loved the snow activities and the food was amazing.',
        helpful: 28,
        verified: true,
        photos: []
      }
    ],
    
    quickFacts: [
      { label: 'Altitude', value: '2,050 m', icon: '🏔️' },
      { label: 'Language', value: 'Hindi, English, Pahari', icon: '🗣️' },
      { label: 'Ideal Duration', value: '4-5 days', icon: '⏱️' },
      { label: 'Budget/Day', value: '₹1500-3000', icon: '💰' }
    ],
    
    accommodation: [
      {
        type: 'Luxury Resorts',
        priceRange: '₹5000-15000/night',
        bestAreas: ['Old Manali', 'Near Mall Road'],
        recommendations: ['The Himalayan', 'Span Resort']
      }
    ],
    
    transportation: [
      {
        mode: 'By Road',
        fromNearestCity: 'Delhi (540 km)',
        cost: '₹2000-4000',
        duration: '12-14 hours',
        tips: ['Book Volvo buses in advance', 'Better to travel during day']
      }
    ]
  },
  {
    id: 'goa-1',
    name: 'Goa',
    location: 'West Coast',
    state: 'Goa',
    country: 'India',
    description: 'India\'s party capital with stunning beaches, Portuguese heritage, and vibrant nightlife. A perfect blend of relaxation, adventure, and cultural exploration.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200',
    rating: 4.7,
    reviewCount: 5241,
    bestTimeToVisit: ['November to February'],
    
    currentSeasonStatus: {
      status: 'Good',
      description: 'Perfect beach weather with occasional showers. Great for water sports and parties.',
      temperature: '25°C to 32°C',
      crowdLevel: 'High',
      specialEvents: ['Sunburn Festival', 'Christmas Celebrations', 'New Year Parties']
    },
    
    images: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      'https://images.unsplash.com/photo-1564574662336-88c9f5a6c8d8?w=800',
    ],
    
    famousPlaces: [
      {
        name: 'Baga Beach',
        description: 'Most popular beach known for water sports, shacks, and nightlife',
        type: 'Natural',
        distance: 'Central North Goa',
        bestTime: 'November to March'
      },
      {
        name: 'Basilica of Bom Jesus',
        description: 'UNESCO World Heritage site with baroque architecture',
        type: 'Historical',
        distance: 'Old Goa',
        entryFee: 'Free',
        bestTime: 'All year'
      }
    ],
    
    thingsToDo: [
      {
        category: 'Beach Activities',
        activities: [
          {
            name: 'Water Sports',
            description: 'Jet skiing, parasailing, banana boat rides',
            duration: '2-4 hours',
            bestFor: ['Groups', 'Adventure seekers']
          }
        ]
      }
    ],
    
    placesToVisit: [
      {
        name: 'Fort Aguada',
        category: 'Must Visit',
        description: '17th century Portuguese fort with lighthouse',
        highlights: ['Sunset views', 'Historical significance', 'Photography spot'],
        tips: ['Visit during sunset', 'Carry water']
      }
    ],
    
    foodAndCuisine: [
      {
        name: 'Fish Curry Rice',
        type: 'Local Dish',
        description: 'Traditional Goan fish curry with rice',
        mustTry: true,
        whereToFind: ['Beach shacks', 'Local restaurants'],
        priceRange: '₹200-400'
      }
    ],
    
    activities: [
      {
        name: 'Dolphin Watching',
        type: 'Family',
        description: 'Boat trip to see dolphins in their natural habitat',
        season: 'October to May',
        difficulty: 'Easy',
        duration: '2-3 hours',
        estimatedCost: '₹500-1000'
      }
    ],
    
    travelTips: [
      {
        category: 'Beach Tips',
        tips: [
          'Bargain for water sports',
          'Respect beach timings',
          'Stay hydrated'
        ]
      }
    ],
    
    userReviews: [
      {
        id: 'rev-3',
        userName: 'Rohan Desai',
        userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
        rating: 5,
        date: '1 week ago',
        review: 'Best vacation ever! Beaches were clean, nightlife was amazing, and the food was incredible.',
        helpful: 56,
        verified: true,
        photos: []
      }
    ],
    
    quickFacts: [
      { label: 'Best For', value: 'Beaches & Parties', icon: '🏖️' },
      { label: 'Language', value: 'Konkani, English', icon: '🗣️' },
      { label: 'Ideal Duration', value: '5-7 days', icon: '⏱️' },
      { label: 'Budget/Day', value: '₹2000-5000', icon: '💰' }
    ],
    
    accommodation: [
      {
        type: 'Beach Resorts',
        priceRange: '₹3000-10000/night',
        bestAreas: ['Calangute', 'Baga', 'Anjuna'],
        recommendations: ['Taj Fort Aguada', 'W Goa']
      }
    ],
    
    transportation: [
      {
        mode: 'Flight',
        fromNearestCity: 'Mumbai (1 hour)',
        cost: '₹3000-8000',
        duration: '1 hour',
        tips: ['Book in advance for better rates', 'Check baggage limits']
      }
    ]
  },
  {
    id: 'meghalaya-1',
    name: 'Meghalaya',
    location: 'North-East India',
    state: 'Meghalaya',
    country: 'India',
    description: 'The abode of clouds with lush green landscapes, living root bridges, and waterfalls. Known for its pristine beauty and unique tribal culture.',
    heroImage: 'https://images.unsplash.com/photo-1589552950456-75eeaf5c5f24?w=1200',
    rating: 4.9,
    reviewCount: 1893,
    bestTimeToVisit: ['October to June'],
    
    currentSeasonStatus: {
      status: 'Perfect',
      description: 'Mild weather with lush greenery. Perfect for trekking and exploring natural wonders.',
      temperature: '15°C to 25°C',
      crowdLevel: 'Low',
      specialEvents: ['Nongkrem Dance Festival', 'Wangala Festival']
    },
    
    images: [
      'https://images.unsplash.com/photo-1589552950456-75eeaf5c5f24?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      'https://images.unsplash.com/photo-1564574662336-88c9f5a6c8d8?w=800',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    ],
    
    famousPlaces: [
      {
        name: 'Cherrapunji',
        description: 'One of the wettest places on earth with stunning waterfalls',
        type: 'Natural',
        distance: '54 km from Shillong',
        bestTime: 'October to May'
      },
      {
        name: 'Living Root Bridges',
        description: 'Natural bridges grown from rubber tree roots',
        type: 'Natural',
        distance: 'Various locations',
        bestTime: 'All year'
      }
    ],
    
    thingsToDo: [
      {
        category: 'Nature Exploration',
        activities: [
          {
            name: 'Trek to Double Decker Bridge',
            description: 'Trek through rainforest to see unique living root bridges',
            duration: '4-6 hours',
            bestFor: ['Adventure seekers', 'Nature lovers']
          }
        ]
      }
    ],
    
    placesToVisit: [
      {
        name: 'Mawlynnong',
        category: 'Must Visit',
        description: 'Asia\'s cleanest village with beautiful gardens',
        highlights: ['Cleanliness', 'Garden walks', 'Sky view point'],
        tips: ['Respect local customs', 'Carry rain gear']
      }
    ],
    
    foodAndCuisine: [
      {
        name: 'Jadoh',
        type: 'Local Dish',
        description: 'Rice cooked with meat (pork or chicken) and spices',
        mustTry: true,
        whereToFind: ['Local eateries', 'Traditional restaurants'],
        priceRange: '₹150-300'
      }
    ],
    
    activities: [
      {
        name: 'Caving Expedition',
        type: 'Adventure',
        description: 'Explore some of Asia\'s longest caves',
        season: 'October to May',
        difficulty: 'Moderate',
        duration: '3-5 hours',
        estimatedCost: '₹1000-3000'
      }
    ],
    
    travelTips: [
      {
        category: 'Rainforest Tips',
        tips: [
          'Carry rain gear always',
          'Wear comfortable trekking shoes',
          'Respect tribal traditions'
        ]
      }
    ],
    
    userReviews: [
      {
        id: 'rev-4',
        userName: 'Neha Singh',
        userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
        rating: 5,
        date: '3 weeks ago',
        review: 'Most magical place I\'ve ever visited. The living root bridges are unbelievable. Pure natural beauty!',
        helpful: 39,
        verified: true,
        photos: []
      }
    ],
    
    quickFacts: [
      { label: 'Nickname', value: 'Scotland of East', icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
      { label: 'Language', value: 'Khasi, English', icon: '🗣️' },
      { label: 'Ideal Duration', value: '6-8 days', icon: '⏱️' },
      { label: 'Budget/Day', value: '₹2000-4000', icon: '💰' }
    ],
    
    accommodation: [
      {
        type: 'Eco Resorts',
        priceRange: '₹2500-6000/night',
        bestAreas: ['Shillong', 'Cherrapunji'],
        recommendations: ['Ri Kynjai', 'Polo Orchid Resort']
      }
    ],
    
    transportation: [
      {
        mode: 'Flight',
        fromNearestCity: 'Guwahati (100 km)',
        cost: '₹1500-3000',
        duration: '3-4 hours by road',
        tips: ['Book taxis in advance', 'Better to hire local drivers']
      }
    ]
  },
  {
    id: 'jaisalmer-1',
    name: 'Jaisalmer',
    location: 'Thar Desert',
    state: 'Rajasthan',
    country: 'India',
    description: 'The Golden City rising from the Thar Desert with magnificent forts, havelis, and camel safaris. A living museum of Rajasthani culture.',
    heroImage: 'https://images.unsplash.com/photo-1524307875964-4c93d5c57242?w=1200',
    rating: 4.6,
    reviewCount: 2145,
    bestTimeToVisit: ['October to March'],
    
    currentSeasonStatus: {
      status: 'Good',
      description: 'Pleasant desert weather with cool nights. Perfect for desert safaris and fort exploration.',
      temperature: '10°C to 25°C',
      crowdLevel: 'Moderate',
      specialEvents: ['Desert Festival', 'Cultural Performances']
    },
    
    images: [
      'https://images.unsplash.com/photo-1524307875964-4c93d5c57242?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      'https://images.unsplash.com/photo-1564574662336-88c9f5a6c8d8?w=800',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    ],
    
    famousPlaces: [
      {
        name: 'Jaisalmer Fort',
        description: 'Living fort with residents, shops, and hotels inside',
        type: 'Historical',
        distance: 'City center',
        entryFee: '₹50',
        bestTime: 'October to March'
      },
      {
        name: 'Sam Sand Dunes',
        description: 'Golden sand dunes perfect for sunset views and camel rides',
        type: 'Natural',
        distance: '42 km from city',
        bestTime: 'Sunset time'
      }
    ],
    
    thingsToDo: [
      {
        category: 'Desert Experience',
        activities: [
          {
            name: 'Camel Safari',
            description: 'Ride through sand dunes to experience desert life',
            duration: '2 hours to overnight',
            bestFor: ['Families', 'Couples', 'Adventure seekers']
          }
        ]
      }
    ],
    
    placesToVisit: [
      {
        name: 'Patwon Ki Haveli',
        category: 'Must Visit',
        description: 'Cluster of five havelis with intricate architecture',
        highlights: ['Jail work', 'Frescoes', 'Historical artifacts'],
        tips: ['Hire a guide', 'Visit morning hours']
      }
    ],
    
    foodAndCuisine: [
      {
        name: 'Ker Sangri',
        type: 'Local Dish',
        description: 'Traditional desert vegetable preparation',
        mustTry: true,
        whereToFind: ['Local restaurants', 'Heritage hotels'],
        priceRange: '₹150-300'
      }
    ],
    
    activities: [
      {
        name: 'Desert Camp Stay',
        type: 'Cultural',
        description: 'Overnight stay in luxury desert camps with cultural performances',
        season: 'October to March',
        difficulty: 'Easy',
        duration: 'Overnight',
        estimatedCost: '₹3000-8000'
      }
    ],
    
    travelTips: [
      {
        category: 'Desert Tips',
        tips: [
          'Carry sunscreen and hats',
          'Stay hydrated',
          'Bargain for souvenirs'
        ]
      }
    ],
    
    userReviews: [
      {
        id: 'rev-5',
        userName: 'Vikram Mehta',
        userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
        rating: 4,
        date: '2 months ago',
        review: 'Golden city lives up to its name. The fort is magnificent and desert safari was unforgettable.',
        helpful: 31,
        verified: true,
        photos: []
      }
    ],
    
    quickFacts: [
      { label: 'Nickname', value: 'Golden City', icon: '🏰' },
      { label: 'Language', value: 'Rajasthani, Hindi', icon: '🗣️' },
      { label: 'Ideal Duration', value: '3-4 days', icon: '⏱️' },
      { label: 'Budget/Day', value: '₹2500-5000', icon: '💰' }
    ],
    
    accommodation: [
      {
        type: 'Heritage Hotels',
        priceRange: '₹4000-12000/night',
        bestAreas: ['Inside Fort', 'Near Sam Dunes'],
        recommendations: ['Suryagarh', 'The Serai']
      }
    ],
    
    transportation: [
      {
        mode: 'Train',
        fromNearestCity: 'Jodhpur (285 km)',
        cost: '₹500-1500',
        duration: '5-6 hours',
        tips: ['Book trains in advance', 'Try Palace on Wheels for luxury']
      }
    ]
  }
];

export const useDestinationReviewStore = create<DestinationReviewStore>()(
  persist(
    (set, get) => ({
      selectedDestination: 'manali',
      destinations: DESTINATION_REVIEWS,
      chatMessages: [],
      
      setSelectedDestination: (destination) =>
        set({ selectedDestination: destination }),
      
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
      
      clearChat: () => set({ chatMessages: [] }),
      
      getCurrentDestination: () => {
        const { selectedDestination, destinations } = get();
        return destinations.find(dest => 
          dest.name.toLowerCase() === selectedDestination.toLowerCase() ||
          dest.id === selectedDestination
        );
      },
      
      searchDestinations: (query) => {
        const searchTerm = query.toLowerCase();
        return DESTINATION_REVIEWS.filter(dest =>
          dest.name.toLowerCase().includes(searchTerm) ||
          dest.location.toLowerCase().includes(searchTerm) ||
          dest.description.toLowerCase().includes(searchTerm)
        );
      },
    }),
    {
      name: 'destination-review-store',
    }
  )
);