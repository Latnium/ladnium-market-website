import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tooltip?: string;
  keyBenefit?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tooltip,
  keyBenefit,
}: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
      {tooltip && (
        <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">
          {tooltip}
        </p>
      )}
      {keyBenefit && (
        <div className="mt-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-md">
          <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
            <span className="font-bold">Key Benefit:</span> {keyBenefit}
          </p>
        </div>
      )}
    </div>
  );
}
