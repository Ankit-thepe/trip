import { create } from 'zustand';

export interface Review {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  review: string;
  tripType: string;
  likes: number;
}

interface UserReviewsStore {
  reviews: Review[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  nextReview: () => void;
  prevReview: () => void;
  likeReview: (id: number) => void;
}

const useUserReviewsStore = create<UserReviewsStore>((set, get) => ({
  reviews: [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=0891b2&color=fff&size=128',
      rating: 5,
      date: 'December 2025',
      review: 'TripGenie made our Manali trip absolutely perfect! The customized itinerary was spot-on, and the price comparison feature saved us over ₹15,000. Highly recommend!',
      tripType: 'Hill Station',
      likes: 124
    },
    {
      id: 2,
      name: 'Rahul Verma',
      location: 'Delhi, India',
      avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=14b8a6&color=fff&size=128',
      rating: 5,
      date: 'November 2025',
      review: 'Best travel planning experience ever! The AI recommendations were incredibly accurate. Found amazing local spots that weren\'t in any guidebook. Simply brilliant!',
      tripType: 'Adventure',
      likes: 98
    },
    {
      id: 3,
      name: 'Sneha Patel',
      location: 'Bangalore, India',
      avatar: 'https://ui-avatars.com/api/?name=Sneha+Patel&background=0ea5e9&color=fff&size=128',
      rating: 5,
      date: 'October 2025',
      review: 'The digital tour guide feature is a game-changer! Got real-time suggestions and discovered hidden gems. Customer support was also exceptional - available 24/7.',
      tripType: 'Cultural',
      likes: 156
    },
    {
      id: 4,
      name: 'Arjun Mehta',
      location: 'Pune, India',
      avatar: 'https://ui-avatars.com/api/?name=Arjun+Mehta&background=8b5cf6&color=fff&size=128',
      rating: 5,
      date: 'September 2025',
      review: 'Booking everything in one place was so convenient! From flights to hotels to activities - seamless experience. The instant confirmation feature gave us peace of mind.',
      tripType: 'Family Trip',
      likes: 87
    },
    {
      id: 5,
      name: 'Ananya Singh',
      location: 'Hyderabad, India',
      avatar: 'https://ui-avatars.com/api/?name=Ananya+Singh&background=ec4899&color=fff&size=128',
      rating: 5,
      date: 'August 2025',
      review: 'Absolutely loved the detailed itinerary planning! Every day was perfectly organized. The price transparency and no hidden charges made it even better. Will use again!',
      tripType: 'Leisure',
      likes: 203
    },
    {
      id: 6,
      name: 'Karan Kapoor',
      location: 'Jaipur, India',
      avatar: 'https://ui-avatars.com/api/?name=Karan+Kapoor&background=f59e0b&color=fff&size=128',
      rating: 5,
      date: 'July 2025',
      review: 'The tour guide recommendations were spot on! We discovered places we would have never found on our own. The app made navigating new cities so much easier.',
      tripType: 'Heritage Tour',
      likes: 142
    },
    {
      id: 7,
      name: 'Divya Reddy',
      location: 'Chennai, India',
      avatar: 'https://ui-avatars.com/api/?name=Divya+Reddy&background=06b6d4&color=fff&size=128',
      rating: 5,
      date: 'June 2025',
      review: 'Incredible service from start to finish! The customer support team was available whenever we needed help. The photo memory feature helped us capture every moment beautifully.',
      tripType: 'Beach Vacation',
      likes: 167
    },
    {
      id: 8,
      name: 'Amit Gupta',
      location: 'Kolkata, India',
      avatar: 'https://ui-avatars.com/api/?name=Amit+Gupta&background=10b981&color=fff&size=128',
      rating: 5,
      date: 'May 2025',
      review: 'TripGenie\'s travel insights were incredibly helpful for planning our honeymoon. Everything was perfectly organized and the local experiences they suggested were unforgettable!',
      tripType: 'Honeymoon',
      likes: 234
    }
  ],
  currentIndex: 0,
  
  setCurrentIndex: (index: number) => set({ currentIndex: index }),
  
  nextReview: () => set((state) => ({
    currentIndex: (state.currentIndex + 1) % state.reviews.length
  })),
  
  prevReview: () => set((state) => ({
    currentIndex: (state.currentIndex - 1 + state.reviews.length) % state.reviews.length
  })),
  
  likeReview: (id: number) => set((state) => ({
    reviews: state.reviews.map(review =>
      review.id === id ? { ...review, likes: review.likes + 1 } : review
    )
  }))
}));

export default useUserReviewsStore;
