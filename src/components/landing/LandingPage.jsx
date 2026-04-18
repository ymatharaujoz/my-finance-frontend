import { FeaturesSection } from './FeaturesSection';
import { FinalCTASection } from './FinalCTASection';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { IntegrationsSection } from './IntegrationsSection';
import { PricingSection } from './PricingSection';

export function LandingPage({ onAccessPlatform }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-slate-900">
      <div className="page-shell">
        <HeroSection onAccessPlatform={onAccessPlatform} />
        <IntegrationsSection />
        <FeaturesSection />
        <PricingSection />
        <FinalCTASection />
        <Footer />
      </div>
    </main>
  );
}
