import { HeroNew } from "@/components/HeroNew";
import { StatsCounter } from "@/components/StatsCounter";
import { KeyProblems } from "@/components/KeyProblems";
import { MobileFirst } from "@/components/MobileFirst";
import { GettingStarted } from "@/components/GettingStarted";

import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroNew />
      <StatsCounter />
      <KeyProblems />
      <MobileFirst />
      <GettingStarted />
      
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
