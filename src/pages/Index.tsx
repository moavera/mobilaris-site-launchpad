import { HeroNew } from "@/components/HeroNew";

import { KeyProblems } from "@/components/KeyProblems";
import { MobileFirst } from "@/components/MobileFirst";
import { GettingStarted } from "@/components/GettingStarted";
import { SecurityFeatures } from "@/components/SecurityFeatures";

import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Partners } from "@/components/Partners";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroNew />
      
      <KeyProblems />
      <MobileFirst />
      <GettingStarted />
      <SecurityFeatures />
      <Partners />
      
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
