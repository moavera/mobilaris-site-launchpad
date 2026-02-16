import { Shield, Gauge, Zap, ClipboardCheck } from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";

const cards = [
  {
    icon: Shield,
    title: "Improve Safety",
    description: "Real-time awareness for faster emergency response.",
  },
  {
    icon: Gauge,
    title: "Operational Efficiency",
    description: "Clear visibility of vehicle movement and coordination.",
  },
  {
    icon: Zap,
    title: "Faster Decisions",
    description: "A shared real-time view of site activity.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Reporting",
    description: "Traceable historical data for audits.",
  },
];

export const ValueProposition = () => {
  return (
    <section id="value" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <h2 className="text-5xl leading-tight">
              Gain real-time control across your entire site
            </h2>
            <SectionShareButton sectionId="value" sectionName="Value Proposition" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Mobilaris Site gives operations full visibility of people, vehicles and assets in one shared real-time view — improving safety, coordination, and decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex items-start gap-6 p-6 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#181A21] border border-border/30 flex items-center justify-center">
                <card.icon className="h-8 w-8 text-foreground" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground mb-1">{card.title}</p>
                <p className="text-xl font-semibold leading-snug">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
