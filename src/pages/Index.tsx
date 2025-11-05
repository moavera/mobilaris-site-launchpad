import { HeroNew } from "@/components/HeroNew";
import { useSectionShare } from "@/hooks/use-section-share";
import { KeyProblems } from "@/components/KeyProblems";
import { MobileFirst } from "@/components/MobileFirst";
import { Environments } from "@/components/Environments";
import { EnvironmentLayers3D } from "@/components/EnvironmentLayers3D";
import { DeploymentOptions } from "@/components/DeploymentOptions";
import { GettingStarted } from "@/components/GettingStarted";
import { TechnologyIntegration } from "@/components/TechnologyIntegration";
import { SecurityFeatures } from "@/components/SecurityFeatures";
import { PrivacySection } from "@/components/PrivacySection";
import { Evolution } from "@/components/Evolution";
import { Partners } from "@/components/Partners";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
const Index = () => {
  useSectionShare();
  return <main className="min-h-screen">
      <HeroNew />
      
      <KeyProblems />
      <MobileFirst />
      <Environments />
      
      <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-slate-50">
            Positioning Everywhere
          </h2>
          <p className="text-2xl font-semibold text-center mb-4 text-foreground">
            Indoor • Outdoor • Underground
          </p>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            One unified positioning system that works seamlessly across all environments. Track assets and personnel whether they're inside buildings, outdoors on site, or deep underground in tunnels—all in real-time with the same accuracy.
          </p>
          <EnvironmentLayers3D />
          
        </div>
      </section>
      
      <DeploymentOptions />
      <GettingStarted />
      <TechnologyIntegration />
      <SecurityFeatures />
      <PrivacySection />
      <Evolution />
      <Partners />
      
      <ContactSection />
      <Footer />
    </main>;
};
export default Index;