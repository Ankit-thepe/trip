// src/data/autoPartsData.js
import CeramicBrakePad from '../assets/images/CeramicBrakePad.jpg';
// import DrilledSlottedRotors from '../assets/images/DrilledSlilledRotors.jpg';
import brakes from '../assets/images/brakes.jpg';
import EngineParts from '../assets/images/EngineParts.jpg';
import SuspensionSteering from '../assets/images/SuspensionSteering.jpg';
import Lighting from '../assets/images/Lighting.jpg';
import ExhaustSystems from '../assets/images/ExhaustSystems.jpg';
import Wheels from '../assets/images/Wheels.jpg';

// Additional imports for individual product images
import BrakeCaliperAssembly from '../assets/images/BrakeCaliperAssembly.jpg';
import BrakeFluidDOT4 from '../assets/images/BrakeFluidDOT4.jpg';
import SyntheticEngineOil from '../assets/images/SyntheticEngineOil.jpg';
import OilFilter from '../assets/images/OilFilter.jpg';
import AirFilter from '../assets/images/AirFilter.jpg';
import IridiumSparkPlugs from '../assets/images/IridiumSparkPlugs.jpg';
import TimingBeltKit from '../assets/images/TimingBeltKit.jpg';
import FrontShockAbsorber from '../assets/images/FrontShockAbsorber.jpg';
import ControlArmAssembly from '../assets/images/ControlArmAssembly.jpg';
import PowerSteeringPump from '../assets/images/PowerSteeringPump.jpg';
import LEDHeadlightBulbs from '../assets/images/LEDHeadlightBulbs.jpg';
import TailLightAssembly from '../assets/images/TailLightAssembly.jpg';
import PerformanceMuffler from '../assets/images/PerformanceMuffler.jpg';
import AllSeasonTire from '../assets/images/AllSeasonTire.jpg';
import CarBattery from '../assets/images/CarBattery.jpg';
import AllWeatherFloorMats from '../assets/images/AllWeatherFloorMats.jpg';


export const categories = [
  {
    id: 'cat1',
    name: 'Brakes',
    image: brakes,
    description: 'Brake pads, rotors, calipers, and fluid for optimal stopping power.'
  },
  {
    id: 'cat2',
    name: 'Engine Parts',
    image: EngineParts,
    description: 'Spark plugs, oil filters, air filters, engine oil, and timing belts.'
  },
  {
    id: 'cat3',
    name: 'Suspension & Steering',
    image: SuspensionSteering,
    description: 'Shock absorbers, struts, control arms, and power steering components.'
  },
  {
    id: 'cat4',
    name: 'Lighting',
    image: Lighting,
    description: 'Headlights, tail lights, fog lights, and various bulbs.'
  },
  {
    id: 'cat5',
    name: 'Exhaust Systems',
    image: ExhaustSystems,
    description: 'Mufflers, catalytic converters, exhaust pipes, and headers.'
  },
  {
    id: 'cat6',
    name: 'Tires & Wheels',
    image: Wheels,
    description: 'All-season, performance, and off-road tires, plus alloy and steel wheels.'
  },
  // Added back Batteries & Electrical and Interior Parts categories for completeness,
  // assuming you might have images for them or want to add them later.
  // If you don't have specific images, you can use a placeholder image.
  {
    id: 'cat7',
    name: 'Batteries & Electrical',
    image: CarBattery, // Using CarBattery as a placeholder for the category image
    description: 'Car batteries, alternators, starters, and wiring harnesses.'
  },
  {
    id: 'cat8',
    name: 'Interior Parts',
    image: AllWeatherFloorMats, // Using AllWeatherFloorMats as a placeholder for the category image
    description: 'Floor mats, seat covers, dashboard components, and interior lighting.'
  },
];

export const dealers = [
  { id: 'dealer1', name: 'AutoParts Pro' },
  { id: 'dealer2', name: 'CarCare Express' },
  { id: 'dealer3', name: 'Global Auto Spares' },
  { id: 'dealer4', name: 'Speedy Parts Co.' },
];

export const autoParts = [
  // Brakes
  {
    id: '101',
    name: 'Ceramic Brake Pads',
    description: 'Premium ceramic brake pads for superior stopping power and reduced dust. Long-lasting and quiet performance.',
    price: 75.99,
    image: CeramicBrakePad,
    category: 'Brakes',
    vehicleType: 'Sedan',
    vehicleModel: 'Civic', // Added
    brand: 'Bosch',
    productBrand: 'Bosch', // Added for clarity
    dealer: 'AutoParts Pro',
    sku: 'BOSCH-BP123',
    stock: 150,
    rating: 4.5,
    warranty: '2 years' // Added
  },
  {
    id: '102',
    name: 'Drilled & Slotted Rotors',
    description: 'High-performance drilled and slotted brake rotors for enhanced cooling and wet braking.',
    price: 120.50,
    image: BrakeFluidDOT4,
    category: 'Brakes',
    vehicleType: 'SUV',
    vehicleModel: 'CR-V', // Added
    brand: 'Brembo',
    productBrand: 'Brembo', // Added for clarity
    dealer: 'Global Auto Spares',
    sku: 'BREMBO-DRS456',
    stock: 80,
    rating: 4.7,
    warranty: '1 year' // Added
  },
  {
    id: '103',
    name: 'Brake Caliper Assembly (Front Left)',
    description: 'New OEM replacement brake caliper for reliable braking.',
    price: 95.00,
    image: BrakeCaliperAssembly,
    category: 'Brakes',
    vehicleType: 'Truck',
    vehicleModel: 'F-150', // Added
    brand: 'ACDelco',
    productBrand: 'ACDelco', // Added for clarity
    dealer: 'CarCare Express',
    sku: 'ACD-BCAL789',
    stock: 60,
    rating: 4.2,
    warranty: '90 days' // Added
  },
  {
    id: '104',
    name: 'Brake Fluid DOT 4',
    description: 'High-performance DOT 4 brake fluid for consistent pedal feel.',
    price: 15.99,
    image: BrakeFluidDOT4,
    category: 'Brakes',
    vehicleType: 'All',
    vehicleModel: 'Universal', // Added
    brand: 'Castrol',
    productBrand: 'Castrol', // Added for clarity
    dealer: 'Speedy Parts Co.',
    sku: 'CASTROL-BF001',
    stock: 200,
    rating: 4.6,
    warranty: 'N/A' // Added
  },

  // Engine Parts
  {
    id: '201',
    name: 'Synthetic Engine Oil (5W-30)',
    description: 'Full synthetic engine oil providing superior protection and performance.',
    price: 35.00,
    image: SyntheticEngineOil,
    category: 'Engine Parts',
    vehicleType: 'All',
    vehicleModel: 'Universal', // Added
    brand: 'Mobil 1',
    productBrand: 'Mobil 1', // Added for clarity
    dealer: 'AutoParts Pro',
    sku: 'MOBIL1-EO5W30',
    stock: 300,
    rating: 4.8,
    warranty: 'N/A' // Added
  },
  {
    id: '202',
    name: 'Oil Filter',
    description: 'High-efficiency oil filter for clean engine oil flow.',
    price: 8.50,
    image: OilFilter,
    category: 'Engine Parts',
    vehicleType: 'Sedan',
    vehicleModel: 'Corolla', // Added
    brand: 'Mann-Filter',
    productBrand: 'Mann-Filter', // Added for clarity
    dealer: 'CarCare Express',
    sku: 'MANN-OF100',
    stock: 250,
    rating: 4.4,
    warranty: '6 months' // Added
  },
  {
    id: '203',
    name: 'Air Filter',
    description: 'Premium air filter designed for optimal engine breathing and performance.',
    price: 18.00,
    image: AirFilter,
    category: 'Engine Parts',
    vehicleType: 'SUV',
    vehicleModel: 'RAV4', // Added
    brand: 'K&N',
    productBrand: 'K&N', // Added for clarity
    dealer: 'Global Auto Spares',
    sku: 'KN-AF200',
    stock: 120,
    rating: 4.7,
    warranty: '1 year' // Added
  },
  {
    id: '204',
    name: 'Iridium Spark Plugs (Set of 4)',
    description: 'Long-life iridium spark plugs for improved ignition and fuel efficiency.',
    price: 45.00,
    image: IridiumSparkPlugs,
    category: 'Engine Parts',
    vehicleType: 'Hatchback',
    vehicleModel: 'Golf', // Added
    brand: 'NGK',
    productBrand: 'NGK', // Added for clarity
    dealer: 'Speedy Parts Co.',
    sku: 'NGK-SP300',
    stock: 90,
    rating: 4.6,
    warranty: '5 years' // Added
  },
  {
    id: '205',
    name: 'Timing Belt Kit',
    description: 'Complete timing belt kit with water pump for comprehensive maintenance.',
    price: 180.00,
    image: TimingBeltKit,
    category: 'Engine Parts',
    vehicleType: 'Sedan',
    vehicleModel: 'Accord', // Added
    brand: 'Gates',
    productBrand: 'Gates', // Added for clarity
    dealer: 'AutoParts Pro',
    sku: 'GATES-TBK400',
    stock: 40,
    rating: 4.5,
    warranty: '2 years' // Added
  },

  // Suspension & Steering
  {
    id: '301',
    name: 'Front Shock Absorber',
    description: 'Gas-charged shock absorber for a smooth and controlled ride.',
    price: 70.00,
    image: FrontShockAbsorber,
    category: 'Suspension & Steering',
    vehicleType: 'Sedan',
    vehicleModel: 'Camry', // Added
    brand: 'Monroe',
    productBrand: 'Monroe', // Added for clarity
    dealer: 'CarCare Express',
    sku: 'MONROE-SA501',
    stock: 75,
    rating: 4.3,
    warranty: '3 years' // Added
  },
  {
    id: '302',
    name: 'Control Arm Assembly (Lower Front)',
    description: 'Durable control arm assembly for restored suspension geometry.',
    price: 110.00,
    image: ControlArmAssembly,
    category: 'Suspension & Steering',
    vehicleType: 'SUV',
    vehicleModel: 'Explorer', // Added
    brand: 'Moog',
    productBrand: 'Moog', // Added for clarity
    dealer: 'Global Auto Spares',
    sku: 'MOOG-CA602',
    stock: 50,
    rating: 4.6,
    warranty: '1 year' // Added
  },
  {
    id: '303',
    name: 'Power Steering Pump',
    description: 'New power steering pump for effortless steering.',
    price: 190.00,
    image: PowerSteeringPump,
    category: 'Suspension & Steering',
    vehicleType: 'Truck',
    vehicleModel: 'Silverado', // Added
    brand: 'Cardone',
    productBrand: 'Cardone', // Added for clarity
    dealer: 'Speedy Parts Co.',
    sku: 'CARDONE-PSP703',
    stock: 30,
    rating: 4.1,
    warranty: '6 months' // Added
  },
  // Lighting
  {
    id: '401',
    name: 'LED Headlight Bulbs (H11)',
    description: 'Super bright LED bulbs for improved nighttime visibility.',
    price: 49.99,
    image: LEDHeadlightBulbs,
    category: 'Lighting',
    vehicleType: 'All',
    vehicleModel: 'Universal', // Added
    brand: 'Sylvania',
    productBrand: 'Sylvania', // Added for clarity
    dealer: 'AutoParts Pro',
    sku: 'SYLVANIA-LED801',
    stock: 100,
    rating: 4.5,
    warranty: '2 years' // Added
  },
  {
    id: '402',
    name: 'Tail Light Assembly (Rear Right)',
    description: 'OEM style replacement tail light for damaged units.',
    price: 85.00,
    image: TailLightAssembly,
    category: 'Lighting',
    vehicleType: 'Sedan',
    vehicleModel: 'Altima', // Added
    brand: 'Depo',
    productBrand: 'Depo', // Added for clarity
    dealer: 'CarCare Express',
    sku: 'DEPO-TL902',
    stock: 70,
    rating: 4.0,
    warranty: '1 year' // Added
  },
  // Exhaust Systems
  {
    id: '501',
    name: 'Performance Muffler',
    description: 'Sporty performance muffler for enhanced exhaust tone and flow.',
    price: 150.00,
    image: PerformanceMuffler,
    category: 'Exhaust Systems',
    vehicleType: 'Sports Car',
    vehicleModel: 'Mustang', // Added
    brand: 'Flowmaster',
    productBrand: 'Flowmaster', // Added for clarity
    dealer: 'Global Auto Spares',
    sku: 'FLOW-PM101',
    stock: 25,
    rating: 4.8,
    warranty: '5 years' // Added
  },
  // Tires & Wheels
  {
    id: '601',
    name: 'All-Season Tire (205/55R16)',
    description: 'Reliable all-season tire offering good grip in various conditions.',
    price: 99.00,
    image: AllSeasonTire,
    category: 'Tires & Wheels',
    vehicleType: 'Sedan',
    vehicleModel: 'Accord', // Added
    brand: 'Michelin',
    productBrand: 'Michelin', // Added for clarity
    dealer: 'Speedy Parts Co.',
    sku: 'MICHELIN-AS205',
    stock: 180,
    rating: 4.6,
    warranty: '60,000 miles' // Added
  },
  // Batteries & Electrical
  {
    id: '701',
    name: 'Car Battery (Group 24F)',
    description: 'Maintenance-free car battery with excellent cold cranking amps.',
    price: 130.00,
    image: CarBattery,
    category: 'Batteries & Electrical',
    vehicleType: 'Truck',
    vehicleModel: 'Ram 1500', // Added
    brand: 'EverStart',
    productBrand: 'EverStart', // Added for clarity
    dealer: 'AutoParts Pro',
    sku: 'ES-CB701',
    stock: 90,
    rating: 4.3,
    warranty: '3 years' // Added
  },
  // Interior Parts
  {
    id: '801',
    name: 'All-Weather Floor Mats',
    description: 'Custom-fit all-weather floor mats for ultimate interior protection.',
    price: 65.00,
    image: AllWeatherFloorMats,
    category: 'Interior Parts',
    vehicleType: 'SUV',
    vehicleModel: 'Grand Cherokee', // Added
    brand: 'WeatherTech',
    productBrand: 'WeatherTech', // Added for clarity
    dealer: 'CarCare Express',
    sku: 'WT-FM801',
    stock: 110,
    rating: 4.9,
    warranty: 'Lifetime' // Added
  },
];

// Combine all parts into a map for easy lookup by ID
export const getPartById = (id) => autoParts.find(part => part.id === id);

// Get related parts for a given part
export const getRelatedParts = (currentPartId, count = 4) => {
  const currentPart = autoParts.find(p => p.id === currentPartId);
  if (!currentPart) return [];

  return autoParts
    .filter(p => p.id !== currentPartId && p.category === currentPart.category)
    .sort(() => 0.5 - Math.random()) // Randomize for variety
    .slice(0, count);
};
