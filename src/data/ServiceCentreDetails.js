// src/data.js

export const serviceCenters = [
  {
    id: 'sc1',
    name: 'Auto Fix Pro',
    description: 'Your one-stop shop for all car services.',
    location: '123 Main St, Anytown',
    rating: 4.8, // Already present
    distance: 3.2, // Added distance in km
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
    availability: 'Available',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxzGGjKGxxh9EM4x9raDHqSBD3SdZ9EMHWw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxzGGjKGxxh9EM4x9raDHqSBD3SdZ9EMHWw&s',
    ],
    supportedVehicles: ['car', 'van'],
  },
  {
    id: 'sc2',
    name: 'Bike & Car Care',
    description: 'Expert mechanics for bikes and cars.',
    location: '456 Oak Ave, Anytown',
    rating: 4.5, // Already present
    distance: 7.8, // Added distance in km
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQp5-GmDcvyiuX2yxrkguPdIwfqzrDeP9iw&s',
    availability: 'Available',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQp5-GmDcvyiuX2yxrkguPdIwfqzrDeP9iw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCv-QTwk8MtcLoTN02rNk-xFaX69-s6Hzjg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQp5-GmDcvyiuX2yxrkguPdIwfqzrDeP9iw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCv-QTwk8MtcLoTN02rNk-xFaX69-s6Hzjg&s',
    ],
    supportedVehicles: ['car', 'motorcycle'],
  },
  {
    id: 'sc3',
    name: 'The Garage Hub',
    description: 'Premium service for all vehicle types.',
    location: '789 Pine Ln, Anytown',
    rating: 3.9, // Changed rating for testing filters
    distance: 1.5, // Added distance in km
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCv-QTwk8MtcLoTN02rNk-xFaX69-s6Hzjg&s',
    availability: 'Available',
    images: [
      'https://placehold.co/800x500/A133FF/FFFFFF?text=Bike+Car+Care+1',
      'https://placehold.co/800x500/FF33A1/FFFFFF?text=Bike+Car+Care+2',
      'https://placehold.co/800x500/33FFFF/FFFFFF?text=Bike+Car+Care+3',
      'https://placehold.co/800x500/FFD700/FFFFFF?text=Bike+Car+Care+4',
    ],
    supportedVehicles: ['car', 'motorcycle', 'auto-rickshaw', 'van', 'bus', 'truck', 'ev'],
  },
  {
    id: 'sc4',
    name: 'Electric Vehicle Service',
    description: 'Specialized service for electric vehicles.',
    location: '101 EV Road, Electrictown',
    rating: 4.7,
    distance: 9.1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjU_u4-F6W4vW7B-gS-gB8v2Z-eY0-Q1pLA&s',
    availability: 'Available',
    images: [],
    supportedVehicles: ['ev'],
  },
  {
    id: 'sc5',
    name: 'Heavy Duty Motors',
    description: 'Servicing trucks and buses with care.',
    location: '202 Industrial Park, Heavyville',
    rating: 4.1,
    distance: 12.5,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1_Yq_Xy2_z-v7o-d0p-Q3lW5l8p-N5j9rQ&s',
    availability: 'Available',
    images: [],
    supportedVehicles: ['truck', 'bus'],
  },
];



export const serviceCenterDetails = {
  sc1: { // Details for Auto Fix Pro
    availableSlots: [
      { date: '2025-07-29', time: '09:00 AM' },
      { date: '2025-07-29', time: '10:00 AM' },
      { date: '2025-07-29', time: '11:00 AM' },
      { date: '2025-07-29', time: '02:00 PM' },
    ],
    topServices: [
      {
        id: 'ts1',
        name: 'Oil Change',
        description: 'Includes oil and filter replacement.',
        price: '₹999',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'ts2',
        name: 'Tire Rotation',
        description: 'Extends tire life and improves handling.',
        price: '₹499',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'ts3',
        name: 'Brake Inspection',
        description: 'Comprehensive brake system check.',
        price: '₹299',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'ts4',
        name: 'Oil Change',
        description: 'Includes oil and filter replacement.',
        price: '₹999',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'ts5',
        name: 'Tire Rotation',
        description: 'Extends tire life and improves handling.',
        price: '₹499',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'ts6',
        name: 'Brake Inspection',
        description: 'Comprehensive brake system check.',
        price: '₹299',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
    ],
    scheduledMaintenance: [
      {
        id: 'sm1',
        name: '10,000 KM Service',
        description: 'Routine check-up and fluid top-up.',
        price: '₹1499',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'sm2',
        name: 'Major Service',
        description: 'Includes spark plugs, air filter, etc.',
        price: '₹2999',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'sm3',
        name: '10,000 KM Service',
        description: 'Routine check-up and fluid top-up.',
        price: '₹1499',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'sm4',
        name: 'Major Service',
        description: 'Includes spark plugs, air filter, etc.',
        price: '₹2999',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
    ],
    acServices: [
      {
        id: 'ac1',
        name: 'AC Gas Refill',
        description: 'Replenish refrigerant for optimal cooling.',
        price: '₹1200',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'ac2',
        name: 'AC System Check',
        description: 'Diagnose and fix AC issues.',
        price: '₹600',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'ac3',
        name: 'AC Gas Refill',
        description: 'Replenish refrigerant for optimal cooling.',
        price: '₹1200',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'ac4',
        name: 'AC System Check',
        description: 'Diagnose and fix AC issues.',
        price: '₹600',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
    ],
  },
  sc2: { // Details for Bike & Car Care
    availableSlots: [
      { date: '2025-07-29', time: '09:30 AM' },
      { date: '2025-07-29', time: '10:30 AM' },
      { date: '2025-07-30', time: '09:00 AM' },
    ],
    topServices: [
      {
        id: 'ts_b2_1',
        name: 'Bike Chain Lube',
        description: 'Lubrication for smooth chain operation.',
        price: '₹150',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
      {
        id: 'ts_b2_2',
        name: 'Car Wash & Wax',
        description: 'Complete exterior wash and wax.',
        price: '₹700',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
    ],
    scheduledMaintenance: [
      {
        id: 'sm_b2_1',
        name: 'Bike Annual Service',
        description: 'Full inspection and tune-up for bikes.',
        price: '₹800',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvHDGXu8SPKlf3QS8dfQ7BTa08tTGotUqJw&s',
      },
    ],
    acServices: [], // No AC services for this center, or empty array if not applicable
  },
  // Add details for other service centers following the same structure
};