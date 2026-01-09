// src/components/Transport/FiltersPanel.tsx
import { Filter, ChevronDown } from 'lucide-react';
import { useTransportStore } from '../../lib/store/transport/useTransportStore';

export const FiltersPanel = () => {
  const { filters, setBudget, setDepartureTime, setStops, setSortBy } =
    useTransportStore();

  return (
    <aside className="lg:sticky lg:top-28 space-y-6">
      <div className="hidden lg:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-700">
        <Filter className="w-4 h-4 text-blue-600" /> Filters
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-lg space-y-8">
        {/* Sort */}
        <div>
          <label className="block text-[11px] font-black uppercase text-gray-400 mb-2">
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full rounded-xl bg-gray-50 px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-200 outline-none"
          >
            <option value="price-low">Cheapest First</option>
            <option value="duration-short">Fastest First</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-[11px] font-black uppercase text-gray-400">
              Max Budget
            </span>
            <span className="text-sm font-black text-blue-600">
              ₹{filters.maxBudget}
            </span>
          </div>
          <input
            type="range"
            min={500}
            max={15000}
            step={500}
            value={filters.maxBudget}
            onChange={(e) => setBudget(+e.target.value)}
            className="w-full accent-blue-600"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-[11px] font-black uppercase text-gray-400 mb-2">
            Departure Time
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['Morning', 'Afternoon', 'Night', 'Any Time'].map((time) => (
              <button
                key={time}
                onClick={() => setDepartureTime(time)}
                className={`py-2 rounded-xl text-xs font-black transition ${
                  filters.departureTime === time
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50 text-gray-500 hover:bg-blue-50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Stops */}
        <div>
          <label className="block text-[11px] font-black uppercase text-gray-400 mb-2">
            Stops
          </label>
          <div className="flex gap-2">
            {['All', 'Non-stop', '1+ Stops'].map((stop) => (
              <button
                key={stop}
                onClick={() => setStops(stop)}
                className={`flex-1 py-2 rounded-xl text-xs font-black transition ${
                  filters.stops === stop
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-50 text-gray-500'
                }`}
              >
                {stop}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
