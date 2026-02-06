import { Section } from '@/components/ui/Section';
import { Handshake } from 'lucide-react';

export function FutureDevelopmentsSection() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Handshake className="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Future Developments and Compliance
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Bank Integration and Compliance
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Ladnium Stablecoins are committed to staying ahead of evolving regulatory standards by actively working to ensure full compliance with international financial regulations. Future integrations with traditional banking systems will enable seamless fiat deposits and withdrawals, ensuring that Ladnium remains a secure, legally sound, and convenient digital currency for all users. These developments aim to maintain Ladnium's ease of use while supporting its role in global commerce and finance.
          </p>
          <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-md">
            <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
              <span className="font-bold">Key Benefit:</span> Use a currency that's ready for the future of finance.
            </p>
          </div>
        </div>

        {/* Placeholder for bank integration icon */}
        <div className="text-center mt-8">
          <div className="inline-block p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-500 dark:text-gray-400 italic">
              [Insert bank integration icon: A handshake symbolizing partnership between digital and traditional finance.]
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
