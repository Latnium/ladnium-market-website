import { SkeletonBox } from './SkeletonBox';
import { SkeletonCircle } from './SkeletonCircle';
import { SkeletonText } from './SkeletonText';

export function HeroSectionSkeleton() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <SkeletonCircle size="lg" />
          </div>
          <div className="mx-auto mb-6 max-w-2xl">
            <SkeletonBox className="h-12 w-full" />
          </div>
          <div className="mx-auto mb-10 max-w-xl">
            <SkeletonText lines={2} />
          </div>
          <div className="mx-auto max-w-lg">
            <SkeletonText lines={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
