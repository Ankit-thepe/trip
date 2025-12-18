import { create } from 'zustand';

export interface Destination {
  id: number;
  name: string;
  state: string;
  image: string;
  rating: number;
  description: string;
  bestTime: string;
}

interface PopularDestinationsStore {
  destinations: Destination[];
}

const usePopularDestinationsStore = create<PopularDestinationsStore>(() => ({
  destinations: [
    {
      id: 1,
      name: 'Shimla',
      state: 'Himachal Pradesh',
      image: '/src/assets/images/shimla.jpg',
      rating: 4.5,
      description: 'The Queen of Hills with colonial charm',
      bestTime: 'Mar-Jun'
    },
    {
      id: 2,
      name: 'Manali',
      state: 'Himachal Pradesh',
      image: '/src/assets/images/manali.jpg',
      rating: 4.7,
      description: 'Adventure hub with stunning landscapes',
      bestTime: 'Oct-Feb'
    },
    {
      id: 3,
      name: 'Darjeeling',
      state: 'West Bengal',
      image: '/src/assets/images/darjeeling.jpg',
      rating: 4.6,
      description: 'Tea gardens and mountain views',
      bestTime: 'Mar-May'
    },
    {
      id: 4,
      name: 'Ooty',
      state: 'Tamil Nadu',
      image: '/src/assets/images/ooty.jpg',
      rating: 4.4,
      description: 'Serene hill station with lush gardens',
      bestTime: 'Apr-Jun'
    },
    {
      id: 5,
      name: 'Mussoorie',
      state: 'Uttarakhand',
      image: '/src/assets/images/mussoorie.jpg',
      rating: 4.3,
      description: 'Queen of the Hills with waterfalls',
      bestTime: 'Sep-Nov'
    },
    {
      id: 6,
      name: 'Nainital',
      state: 'Uttarakhand',
      image: '/src/assets/images/nainital.jpg',
      rating: 4.5,
      description: 'Beautiful lake town in the mountains',
      bestTime: 'Mar-Jun'
    },
    {
      id: 7,
      name: 'Coorg',
      state: 'Karnataka',
      image: '/src/assets/images/coorg.jpg',
      rating: 4.6,
      description: 'Coffee plantations and misty hills',
      bestTime: 'Oct-Mar'
    },
    {
      id: 8,
      name: 'Munnar',
      state: 'Kerala',
      image: '/src/assets/images/munnar.jpg',
      rating: 4.7,
      description: 'Enchanting tea estates and valleys',
      bestTime: 'Sep-Mar'
    }
  ]
}));

export default usePopularDestinationsStore;
