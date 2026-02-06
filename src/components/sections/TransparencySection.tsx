import { Section } from '@/components/ui/Section';
import { FileText } from 'lucide-react';

export function TransparencySection() {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <FileText className="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transparency and Trust
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Clear and Transparent Reporting
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Ladnium Stablecoins prioritize transparency with regular audits and public reports to ensure users have full confidence in the value backing their digital currency.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Tooltip: Public reports are documents that show the assets backing Ladnium and the results of their audits.
          </p>
        </div>

        {/* Placeholder for transparency graphic */}
        <div className="text-center mt-8">
          <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-500 dark:text-gray-400 italic">
              [Insert transparency graphic: An open book or magnifying glass over a document.]
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
