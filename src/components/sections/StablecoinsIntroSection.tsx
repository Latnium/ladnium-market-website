import { Section } from '@/components/ui/Section';
import { Scale } from 'lucide-react';

export function StablecoinsIntroSection() {
  return (
    <Section id="stablecoins">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Scale className="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Stablecoins - A New Standard for Stability
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Introduction to Ladnium Stablecoins
          </h3>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Collateralized Stablecoins for the Digital Economy
          </h4>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Ladnium Stablecoins offer a secure, fully collateralized digital currency backed by diversified assets such as GICs and income-producing investments. Whether you're making cross-border payments or handling business-to-business transfers, Ladnium ensures stability and security.
          </p>
        </div>

        {/* Placeholder for stability icon */}
        <div className="text-center mt-8">
          <div className="inline-block p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-500 dark:text-gray-400 italic">
              [Insert a stability icon here: A simple representation of a stable, balanced scale.]
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
