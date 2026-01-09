// src/pages/TransportPage.tsx
import { SearchSection } from '../components/Transport/SearchSection';
import { ComparisonLayout } from '../components/Transport/ComparisonLayout';
import { Footer } from '../components/Transport/Footer';

export default function TransportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SearchSection />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <ComparisonLayout />
      </main>

      <Footer />
    </div>
  );
}
