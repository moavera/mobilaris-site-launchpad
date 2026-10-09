import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { HeroNew } from "@/components/HeroNew";
import { useSectionShare } from "@/hooks/use-section-share";
import { KeyProblems } from "@/components/KeyProblems";
import { MobileFirst } from "@/components/MobileFirst";
import { Environments } from "@/components/Environments";
import { Principles } from "@/components/Principles";
import { KeyFeatures } from "@/components/KeyFeatures";
import { ChallengesSection } from "@/components/ChallengesSection";
import { GettingStarted } from "@/components/GettingStarted";


import { Partners } from "@/components/Partners";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
const SiteProduct = () => {
  useSectionShare();
  return <main className="min-h-screen">
      <Navigation />
      <HeroNew />
      <Reveal><Environments /></Reveal>
      <Principles />
      <Reveal><KeyFeatures /></Reveal>
      
      <Reveal><ChallengesSection /></Reveal>
      <Reveal><KeyProblems /></Reveal>
      
      
      
      <Reveal><GettingStarted /></Reveal>
      
      <Reveal><ContactSection /></Reveal>
      <Footer />
    </main>;
};
export default SiteProduct;