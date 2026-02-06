import { Section } from '@/components/ui/Section';
import { Gift } from 'lucide-react';

export function LiquidityRewardsSection() {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Gift className="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Liquidity Rewards for Ladnium Holders
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Latnium-Based Rewards
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Holders of Ladnium are rewarded in Latnium tokens based on a fixed percentage of the circulating supply of supported stablecoins. This ensures transparency and consistency in the rewards distribution, offering participants predictable compensation for their contributions to liquidity.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Efficient and Accessible Rewards
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Easy Participation: Ladnium makes it easy for users to participate in liquidity provision and earn Latnium rewards, offering a seamless and transparent process that strengthens the digital currency ecosystem.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
