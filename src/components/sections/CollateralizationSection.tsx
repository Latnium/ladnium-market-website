import { Section } from '@/components/ui/Section';
import { Shield, Globe } from 'lucide-react';

export function CollateralizationSection() {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Use Ladnium Stablecoins?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Diversified Collateral Backing
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ladnium Stablecoins are fully backed by real-world assets, offering stability even in fluctuating markets. By combining GICs and other investments, Ladnium ensures your currency remains secure and reliable for everyday use.
            </p>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-md">
              <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
                <span className="font-bold">Key Benefit:</span> Preserve your wealth with a stable currency that&apos;s backed by solid, income-generating assets.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Fast and Efficient Payments
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Built on the Stellar network, Ladnium Stablecoins are designed for fast and low-cost transactions. This makes them practical for global commerce, remittances, and business transactions, ensuring that money moves seamlessly across borders.
            </p>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-md">
              <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
                <span className="font-bold">Key Benefit:</span> Enjoy near-instant global payments with low fees.
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder for world with currency symbol graphic */}
        <div className="text-center mt-8">
          <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-500 dark:text-gray-400 italic">
              [Insert a world with currency symbol graphic: Depicting a globe with currency flowing between countries.]
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
