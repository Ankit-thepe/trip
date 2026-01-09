import { Clock, IndianRupee, Filter } from 'lucide-react';

export const TransportFilters = () => {
  return (
    <aside className="bg-white border border-gray-200 rounded-xl p-4 space-y-5 h-fit">
      <div className="flex items-center gap-2 font-semibold text-gray-900">
        <Filter className="w-4 h-4" /> Filters
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500">
          Max Budget
        </label>
        <input type="range" className="w-full mt-2 accent-blue-600" />
        <div className="flex justify-between text-xs text-gray-400">
          <span>₹500</span>
          <span>₹10,000</span>
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500">
          Departure Time
        </label>
        <select className="w-full mt-2 text-sm border-gray-200 rounded-lg">
          <option>Any Time</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Night</option>
        </select>
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500">
          Duration
        </label>
        <select className="w-full mt-2 text-sm border-gray-200 rounded-lg">
          <option>Any</option>
          <option>&lt; 5 hrs</option>
          <option>&lt; 10 hrs</option>
        </select>
      </div>

      <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold">
        Apply Filters
      </button>
    </aside>
  );
};
