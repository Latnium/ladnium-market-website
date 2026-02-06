import { Section } from '@/components/ui/Section';

export function UseCasesSection() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Practical Use Cases
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Fast and Efficient Payments
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Ladnium Stablecoins are designed for fast, efficient payments, making them practical for global commerce, business-to-business transfers, remittances, and everyday transactions. Built on the Stellar network, Ladnium Stablecoins offer low-cost transactions that allow businesses and consumers to move money seamlessly across borders, ensuring ease of use and practical application in various financial activities. This efficiency makes Ladnium an ideal solution for those seeking stability and speed in the digital economy.
          </p>
        </div>
      </div>
    </Section>
  );
}
