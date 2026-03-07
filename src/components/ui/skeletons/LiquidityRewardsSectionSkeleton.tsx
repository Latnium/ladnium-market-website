import { Section } from '@/components/ui/Section';
import { SkeletonBox } from './SkeletonBox';
import { SkeletonCircle } from './SkeletonCircle';
import { SkeletonText } from './SkeletonText';

export function LiquidityRewardsSectionSkeleton() {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <SkeletonCircle size="md" />
          </div>
          <div className="mx-auto max-w-md">
            <SkeletonBox className="h-9 w-full" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg">
              <SkeletonBox className="h-7 w-3/4 mb-4" />
              <SkeletonText lines={4} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
