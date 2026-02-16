import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SensorIntegration } from "@/components/SensorIntegration";
import { MobileFirst } from "@/components/MobileFirst";
import { DeploymentOptions } from "@/components/DeploymentOptions";
import { TechnologyIntegration } from "@/components/TechnologyIntegration";
import { SecurityFeatures } from "@/components/SecurityFeatures";
import { PrivacySection } from "@/components/PrivacySection";
import { Evolution } from "@/components/Evolution";
import { Gauge, Puzzle, Rocket, Settings, Smartphone, Users } from "lucide-react";
import heroImage from "@/assets/why-mobilaris-hero.png";

const sections = [
  {
    icon: Gauge,
    title: "Sensor Integration",
    description: "Monitor environmental factors alongside tracked people and assets for a complete operational view.",
    details: "Mobilaris Site integrates seamlessly with a wide range of sensors — from gas detectors and ventilation monitors to temperature and humidity sensors. This gives you a holistic picture of your environment, combining positional data with environmental readings in one unified dashboard.",
  },
  {
    icon: Puzzle,
    title: "Technology Agnostic Platform",
    description: "Integrate any positioning technology — GPS, BLE, RFID, UWB, Wi-Fi, LiDAR — in one unified platform.",
    details: "No vendor lock-in. Mobilaris Site supports all major positioning technologies and can combine multiple sources for optimal accuracy. Whether you're using existing Wi-Fi infrastructure or deploying dedicated UWB anchors, everything feeds into the same real-time view.",
  },
  {
    icon: Rocket,
    title: "Easy to Get Started, Effortless",
    description: "Start with your existing infrastructure and scale precision where needed — up and running in days, not months.",
    details: "Mobilaris Site is designed for rapid deployment. Begin with what you have — existing Wi-Fi access points, GPS receivers, or Bluetooth beacons — and expand coverage incrementally. Our team supports you from pilot to full-scale rollout.",
  },
  {
    icon: Settings,
    title: "Flexible Deployment Solutions",
    description: "Deploy in the cloud for speed or on-premises for full control — with standardized containers and unified auth.",
    details: "Choose the deployment model that fits your organization. Cloud deployment gets you started fast with minimal IT overhead, while on-premises installations give you complete data sovereignty. Both options use standardized containers and a unified authentication layer.",
  },
  {
    icon: Smartphone,
    title: "Work on the Move",
    description: "Access real-time data, notifications, and asset tracking from anywhere with our mobile app for iOS and Android.",
    details: "The Mobilaris Site mobile app puts real-time situational awareness in your pocket. Receive instant notifications, track assets, and view personnel positions — all from your smartphone or tablet, whether you're on-site or remote.",
  },
  {
    icon: Users,
    title: "Developed in Close Collaboration",
    description: "Built together with customers and industry partners to solve real operational challenges on the ground.",
    details: "Every feature in Mobilaris Site has been shaped by real-world feedback from mining, construction, and industrial operations. We work side-by-side with our customers to ensure the platform addresses genuine operational needs — not theoretical ones.",
  },
];

const WhyMobilarisSite = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-24 overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Why <span className="text-foreground font-bold">Mobilaris Site™</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Discover why leading industrial operations trust Mobilaris Site for real-time situational awareness, safety and operational efficiency.
              </p>
          </div>
          <div className="max-w-4xl mx-auto">
              <img
                src={heroImage}
                alt="Mobilaris Site dashboard showing real-time map overview"
                className="w-full h-auto rounded-xl"
              />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">

          <div className="space-y-12 max-w-4xl mx-auto">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-xl border border-border/30 bg-[#232426] p-8 md:p-10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <section.icon className="h-10 w-10 text-primary flex-shrink-0" />
                  <h2>{section.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4">{section.description}</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">{section.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Evolution />
      <SensorIntegration />
      <MobileFirst />
      <DeploymentOptions />
      <TechnologyIntegration />
      <SecurityFeatures />
      <PrivacySection />

      <Footer />
    </main>
  );
};

export default WhyMobilarisSite;
