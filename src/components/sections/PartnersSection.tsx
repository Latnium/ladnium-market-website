import { Section } from '@/components/ui/Section';
import { Users } from 'lucide-react';

export function PartnersSection() {
  return (
    <Section id="partners" className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Users className="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Partners
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Ladnium Ecosystem utilizes Padmium to provide dependable and consistent exchange rates and market making technologies for its stablecoins.
          </p>
        </div>
      </div>
    </Section>
  );
}
