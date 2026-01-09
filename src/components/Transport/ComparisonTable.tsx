// src/components/Transport/ComparisonTable.tsx
import { useTransportStore } from '../../lib/store/transport/useTransportStore';

export const ComparisonTable = () => {
  const { summaries, selectedMode, setSelectedMode } = useTransportStore();

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      {summaries.map((item) => {
        const Icon = item.icon;
        const active = selectedMode === item.mode;

        return (
          <button
            key={item.id}
            onClick={() => setSelectedMode(item.mode)}
            className={`w-full flex items-center justify-between px-6 py-5 border-b last:border-none transition ${
              active
                ? 'bg-blue-50 border-l-4 border-blue-600'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-xl ${
                  active ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-black text-gray-900">{item.mode}</p>
                <p className="text-xs text-gray-400">
                  Avg {item.avgDuration}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-lg font-black text-blue-600">
                ₹{item.minPrice}
              </p>
              <span className="text-[10px] uppercase text-gray-400">
                {active ? 'Selected' : 'Tap to view'}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
