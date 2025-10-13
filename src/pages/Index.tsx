import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductIntro } from "@/components/ProductIntro";
import { Solutions } from "@/components/Solutions";
import { Benefits } from "@/components/Benefits";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <ProductIntro />
      <Solutions />
      <Benefits />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
