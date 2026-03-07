import {
  HeroSectionSkeleton,
  LiquidityRewardsSectionSkeleton,
  PartnersSectionSkeleton,
  SectionSkeleton,
} from '@/components/ui/skeletons';

export default function Loading() {
  return (
    <main className="min-h-screen">
      <div className="h-16 animate-pulse bg-gray-100" aria-hidden />
      <HeroSectionSkeleton />
      <LiquidityRewardsSectionSkeleton />
      <SectionSkeleton />
      <SectionSkeleton />
      <SectionSkeleton />
      <SectionSkeleton />
      <SectionSkeleton />
      <PartnersSectionSkeleton />
      <div className="h-24 animate-pulse bg-gray-100" aria-hidden />
    </main>
  );
}
