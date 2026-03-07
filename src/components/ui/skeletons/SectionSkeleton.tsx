import { Section } from '@/components/ui/Section';
import { SkeletonBox } from './SkeletonBox';
import { SkeletonCircle } from './SkeletonCircle';
import { SkeletonText } from './SkeletonText';

/**
 * Generic section-shaped skeleton for any section that doesn't have a dedicated skeleton.
 */
export function SectionSkeleton() {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <SkeletonCircle size="md" />
          </div>
          <SkeletonBox className="h-9 w-48 mx-auto mb-4" />
          <SkeletonText lines={2} className="max-w-xl mx-auto" />
        </div>
        <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg">
          <SkeletonText lines={4} />
        </div>
      </div>
    </Section>
  );
}
