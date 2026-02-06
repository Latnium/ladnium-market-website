import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { LiquidityRewardsSection } from '@/components/sections/LiquidityRewardsSection';
import { StablecoinsIntroSection } from '@/components/sections/StablecoinsIntroSection';
import { CollateralizationSection } from '@/components/sections/CollateralizationSection';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { TransparencySection } from '@/components/sections/TransparencySection';
import { FutureDevelopmentsSection } from '@/components/sections/FutureDevelopmentsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LiquidityRewardsSection />
      <StablecoinsIntroSection />
      <CollateralizationSection />
      <UseCasesSection />
      <TransparencySection />
      <FutureDevelopmentsSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
