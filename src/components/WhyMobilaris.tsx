import { Gauge, Puzzle, Rocket, Settings, Smartphone, Users, ArrowRight } from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: Gauge,
    title: "Sensor Integration",
    description: "Monitor environmental factors alongside tracked people and assets for a complete operational view.",
    link: "/why-mobilaris-site#sensor-integration",
  },
  {
    icon: Puzzle,
    title: "Technology Agnostic Platform",
    description: "Integrate any positioning technology — GPS, BLE, RFID, UWB, Wi-Fi, LiDAR — in one unified platform.",
    link: "/why-mobilaris-site#technology",
  },
  {
    icon: Rocket,
    title: "Easy to Get Started, Effortless",
    description: "Start with your existing infrastructure and scale precision where needed — up and running in days, not months.",
  },
  {
    icon: Settings,
    title: "Flexible Deployment Solutions",
    description: "Deploy in the cloud for speed or on-premises for full control — with standardized containers and unified auth.",
    link: "/why-mobilaris-site#deployment",
  },
  {
    icon: Smartphone,
    title: "Work on the Move",
    description: "Access real-time data, notifications, and asset tracking from anywhere with our mobile app for iOS and Android.",
    link: "/why-mobilaris-site#mobile-access",
  },
  {
    icon: Users,
    title: "Developed in Close Collaboration",
    description: "Built together with customers and industry partners to solve real operational challenges on the ground.",
  },
];

export const WhyMobilaris = () => {
  return (
    <section id="why-mobilaris" className="py-24 md:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2>
              Why <span className="text-foreground font-semibold">Mobilaris Site™</span>
            </h2>
            <SectionShareButton sectionId="why-mobilaris" sectionName="Why Mobilaris Site" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <Link
              to={card.link || "/why-mobilaris-site"}
              key={card.title}
              className="rounded-xl border border-border/30 bg-[#181A21] p-8 transition-all duration-300 hover:border-primary/50 group block no-underline"
            >
              <div className="flex items-start justify-between">
                <card.icon className="h-8 w-8 text-primary mb-5" />
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
