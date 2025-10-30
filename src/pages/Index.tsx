import { HeroNew } from "@/components/HeroNew";
import { useSectionShare } from "@/hooks/use-section-share";
import { KeyProblems } from "@/components/KeyProblems";
import { MobileFirst } from "@/components/MobileFirst";
import { GettingStarted } from "@/components/GettingStarted";
import { TechnologyIntegration } from "@/components/TechnologyIntegration";
import { SecurityFeatures } from "@/components/SecurityFeatures";
import { Evolution } from "@/components/Evolution";
import { Partners } from "@/components/Partners";

import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  useSectionShare();
  
  return (
    <main className="min-h-screen">
      <HeroNew />
      
      <KeyProblems />
      <MobileFirst />
      <GettingStarted />
      <TechnologyIntegration />
      <SecurityFeatures />
      <Evolution />
      <Partners />
      
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
