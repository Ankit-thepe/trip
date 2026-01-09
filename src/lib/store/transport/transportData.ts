import { TransportOption } from './types';

export const MOCK_DATA: TransportOption[] = [
  // --- FLIGHTS ---
  {
    id: 'f1', mode: 'Flight', provider: 'IndiGo', price: 4500, currency: 'INR',
    duration: '2h 10m', durationMinutes: 130, departureTime: '06:00 AM', arrivalTime: '08:10 AM',
    tags: ['Affordable', 'Fastest'], rating: 4.2
  },
  {
    id: 'f2', mode: 'Flight', provider: 'Air India', price: 5200, currency: 'INR',
    duration: '2h 15m', durationMinutes: 135, departureTime: '10:00 AM', arrivalTime: '12:15 PM',
    tags: ['Comfort', 'Best Value'], rating: 4.5
  },
  {
    id: 'f3', mode: 'Flight', provider: 'Vistara', price: 6500, currency: 'INR',
    duration: '2h 05m', durationMinutes: 125, departureTime: '05:00 PM', arrivalTime: '07:05 PM',
    tags: ['Luxury', 'Comfort'], rating: 4.8
  },
  {
    id: 'f4', mode: 'Flight', provider: 'SpiceJet', price: 4200, currency: 'INR',
    duration: '2h 20m', durationMinutes: 140, departureTime: '09:00 PM', arrivalTime: '11:20 PM',
    tags: ['Affordable'], rating: 3.8
  },
  {
    id: 'f5', mode: 'Flight', provider: 'Akasa Air', price: 4800, currency: 'INR',
    duration: '2h 10m', durationMinutes: 130, departureTime: '07:30 AM', arrivalTime: '09:40 AM',
    tags: ['Affordable'], rating: 4.0
  },

  // --- TRAINS ---
  {
    id: 't1', mode: 'Train', provider: 'Rajdhani Express', price: 2800, currency: 'INR',
    duration: '15h 30m', durationMinutes: 930, departureTime: '04:00 PM', arrivalTime: '07:30 AM',
    tags: ['Comfort', 'Best Value'], rating: 4.6
  },
  {
    id: 't2', mode: 'Train', provider: 'August Kranti', price: 2600, currency: 'INR',
    duration: '16h 00m', durationMinutes: 960, departureTime: '05:00 PM', arrivalTime: '09:00 AM',
    tags: ['Comfort'], rating: 4.3
  },
  {
    id: 't3', mode: 'Train', provider: 'Garib Rath', price: 1200, currency: 'INR',
    duration: '18h 10m', durationMinutes: 1090, departureTime: '12:00 PM', arrivalTime: '06:10 AM',
    tags: ['Affordable'], rating: 3.5
  },
  {
    id: 't4', mode: 'Train', provider: 'Duronto Express', price: 3100, currency: 'INR',
    duration: '14h 40m', durationMinutes: 880, departureTime: '11:00 PM', arrivalTime: '01:40 PM',
    tags: ['Fastest', 'Comfort'], rating: 4.4
  },
  {
    id: 't5', mode: 'Train', provider: 'Punjab Mail', price: 900, currency: 'INR',
    duration: '24h 00m', durationMinutes: 1440, departureTime: '07:00 PM', arrivalTime: '07:00 PM',
    tags: ['Affordable'], rating: 3.2
  },

  // --- BUSES ---
  {
    id: 'b1', mode: 'Bus', provider: 'ZingBus', price: 1500, currency: 'INR',
    duration: '22h 00m', durationMinutes: 1320, departureTime: '02:00 PM', arrivalTime: '12:00 PM',
    tags: ['Affordable'], rating: 4.1
  },
  {
    id: 'b2', mode: 'Bus', provider: 'Orange Travels', price: 1800, currency: 'INR',
    duration: '21h 30m', durationMinutes: 1290, departureTime: '04:00 PM', arrivalTime: '01:30 PM',
    tags: ['Comfort'], rating: 3.9
  },
  {
    id: 'b3', mode: 'Bus', provider: 'VRL Logistics', price: 1600, currency: 'INR',
    duration: '23h 00m', durationMinutes: 1380, departureTime: '06:00 PM', arrivalTime: '05:00 PM',
    tags: ['Affordable'], rating: 3.7
  },
  {
    id: 'b4', mode: 'Bus', provider: 'IntrCity SmartBus', price: 2100, currency: 'INR',
    duration: '20h 45m', durationMinutes: 1245, departureTime: '08:00 PM', arrivalTime: '04:45 PM',
    tags: ['Luxury'], rating: 4.5
  },
  {
    id: 'b5', mode: 'Bus', provider: 'MSRTC Shivneri', price: 1400, currency: 'INR',
    duration: '25h 00m', durationMinutes: 1500, departureTime: '10:00 AM', arrivalTime: '11:00 AM',
    tags: ['Affordable'], rating: 3.6
  },

  // --- CABS ---
  {
    id: 'c1', mode: 'Cab', provider: 'Uber Intercity', price: 14000, currency: 'INR',
    duration: '21h 00m', durationMinutes: 1260, departureTime: 'Anytime', arrivalTime: 'Next Day',
    tags: ['Luxury'], rating: 4.7
  },
  {
    id: 'c2', mode: 'Cab', provider: 'Ola Outstation', price: 13500, currency: 'INR',
    duration: '21h 15m', durationMinutes: 1275, departureTime: 'Anytime', arrivalTime: 'Next Day',
    tags: ['Comfort'], rating: 4.3
  },
  {
    id: 'c3', mode: 'Cab', provider: 'MakeMyTrip Cabs', price: 12800, currency: 'INR',
    duration: '22h 00m', durationMinutes: 1320, departureTime: 'Flexible', arrivalTime: 'Next Day',
    tags: ['Best Value'], rating: 4.4
  },
  {
    id: 'c4', mode: 'Cab', provider: 'Savaari', price: 15000, currency: 'INR',
    duration: '20h 30m', durationMinutes: 1230, departureTime: 'Anytime', arrivalTime: 'Next Day',
    tags: ['Luxury'], rating: 4.8
  },
  {
    id: 'c5', mode: 'Cab', provider: 'Gozo Cabs', price: 12000, currency: 'INR',
    duration: '22h 30m', durationMinutes: 1350, departureTime: 'Flexible', arrivalTime: 'Next Day',
    tags: ['Affordable'], rating: 4.0
  },
];
