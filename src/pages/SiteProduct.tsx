import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { HeroNew } from "@/components/HeroNew";
import { useSectionShare } from "@/hooks/use-section-share";
import { MobileFirst } from "@/components/MobileFirst";
import { Environments } from "@/components/Environments";
import { Principles } from "@/components/Principles";
import { KeyFeatures } from "@/components/KeyFeatures";
import { Stats } from "@/components/Stats";
import { GettingStarted } from "@/components/GettingStarted";
import { BookDemo } from "@/components/BookDemo";


import { Partners } from "@/components/Partners";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
const SiteProduct = () => {
  useSectionShare();
  return <main className="min-h-screen">
      <Navigation />
      <HeroNew />
      <Reveal bg="bg-surface"><Environments /></Reveal>
      <Reveal bg="bg-white"><KeyFeatures /></Reveal>
      <Principles />
      <Reveal bg="bg-white"><Stats /></Reveal>
      <Reveal bg="bg-surface"><BookDemo /></Reveal>
      
      
      
      
      <Reveal bg="bg-paper"><GettingStarted /></Reveal>
      
      <Reveal bg="bg-white"><ContactSection /></Reveal>
      <Footer />
    </main>;
};
export default SiteProduct;