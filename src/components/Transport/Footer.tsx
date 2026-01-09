// src/components/Transport/Footer.tsx
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-black text-white mb-2">
            TravelCompare
          </h3>
          <p className="text-sm">
            Compare flights, trains, buses & cabs instantly — smarter travel starts here.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>Transport</li>
            <li>Destinations</li>
            <li>Trip Planner</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-6">
        © 2025 TravelCompare. All rights reserved.
      </div>
    </footer>
  );
};
