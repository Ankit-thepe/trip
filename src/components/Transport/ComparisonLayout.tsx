// src/components/Transport/ComparisonLayout.tsx
import { FiltersPanel } from './FiltersPanel';
import { ComparisonTable } from './ComparisonTable';
import { BottomCards } from './BottomCards';
import { RecommendedBlock } from './RecommendedBlock';

export const ComparisonLayout = () => {
  return (
    <section className="py-16">
      {/* Section Header */}
      <div className="mb-12 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Compare <span className="text-blue-600">Transport Options</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-500 font-medium max-w-2xl">
          Compare price, comfort, duration, and availability across all modes in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">
        <FiltersPanel />

        <div className="space-y-14">
          <ComparisonTable />
          <RecommendedBlock />
          <BottomCards />
        </div>
      </div>
    </section>
  );
};
