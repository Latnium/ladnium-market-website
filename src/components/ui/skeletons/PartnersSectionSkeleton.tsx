import { Section } from '@/components/ui/Section';
import { SkeletonBox } from './SkeletonBox';
import { SkeletonCircle } from './SkeletonCircle';
import { SkeletonText } from './SkeletonText';

export function PartnersSectionSkeleton() {
  return (
    <Section
      id="partners"
      className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <SkeletonCircle size="md" />
          </div>
          <SkeletonBox className="h-9 w-32 mx-auto" />
        </div>
        <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg">
          <SkeletonText lines={3} />
        </div>
      </div>
    </Section>
  );
}
