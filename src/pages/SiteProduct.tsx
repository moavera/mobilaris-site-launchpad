import { Navigation } from "@/components/Navigation";
import { HeroNew } from "@/components/HeroNew";
import { useSectionShare } from "@/hooks/use-section-share";
import { KeyProblems } from "@/components/KeyProblems";
import { MobileFirst } from "@/components/MobileFirst";
import { Environments } from "@/components/Environments";
import { ValueProposition } from "@/components/ValueProposition";
import { WhyMobilaris } from "@/components/WhyMobilaris";
import { GettingStarted } from "@/components/GettingStarted";
import { WhatWeTrack } from "@/components/WhatWeTrack";

import { Partners } from "@/components/Partners";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
const SiteProduct = () => {
  useSectionShare();
  return <main className="min-h-screen">
      <Navigation />
      <HeroNew />
      
      <KeyProblems />
      <Environments />
      <ValueProposition />
      <WhyMobilaris />
      <WhatWeTrack />
      
      
      <GettingStarted />
      
      <ContactSection />
      <Footer />
    </main>;
};
export default SiteProduct;