import { Navigation } from "@/components/Navigation";
import { HeroNew } from "@/components/HeroNew";
import { useSectionShare } from "@/hooks/use-section-share";
import { KeyProblems } from "@/components/KeyProblems";
import { MobileFirst } from "@/components/MobileFirst";
import { Environments } from "@/components/Environments";
import { ValueProposition } from "@/components/ValueProposition";
import { EnvironmentLayers3D } from "@/components/EnvironmentLayers3D";
import { DeploymentOptions } from "@/components/DeploymentOptions";
import { GettingStarted } from "@/components/GettingStarted";
import { TechnologyIntegration } from "@/components/TechnologyIntegration";
import { SecurityFeatures } from "@/components/SecurityFeatures";
import { PrivacySection } from "@/components/PrivacySection";
import { WhatWeTrack } from "@/components/WhatWeTrack";
import { SensorIntegration } from "@/components/SensorIntegration";
import { Evolution } from "@/components/Evolution";
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
      <WhatWeTrack />
      <SensorIntegration />
      <MobileFirst />
      
      
      <Evolution />
      <DeploymentOptions />
      <GettingStarted />
      <TechnologyIntegration />
      <SecurityFeatures />
      <PrivacySection />
      
      
      <ContactSection />
      <Footer />
    </main>;
};
export default SiteProduct;