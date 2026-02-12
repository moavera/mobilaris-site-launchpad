import { Shield, Gauge, Zap, ClipboardCheck } from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";

const cards = [
  {
    icon: Shield,
    title: "Improve Safety",
    points: [
      "Real-time awareness of personnel",
      "Faster emergency response",
      "Better evacuation coordination",
    ],
  },
  {
    icon: Gauge,
    title: "Increase Operational Efficiency",
    points: [
      "Optimize vehicle movement",
      "Reduce bottlenecks",
      "Improve shift coordination",
    ],
  },
  {
    icon: Zap,
    title: "Enable Faster Decisions",
    points: [
      "Live data in one interface",
      "Shared situational awareness",
      "Actionable insights",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Strengthen Compliance & Reporting",
    points: [
      "Historical data and traceability",
      "Documentation for audits",
      "Improved accountability",
    ],
  },
];

export const ValueProposition = () => {
  return (
    <section id="value" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-start gap-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Gain real-time control across your entire site
            </h2>
            <SectionShareButton sectionId="value" sectionName="Value Proposition" />
          </div>
          <div className="flex items-center">
            <p className="text-xl text-muted-foreground">
              Mobilaris Site gives operations full visibility of people, vehicles and assets in one shared real-time view — improving safety, coordination, and decision-making.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-border/30 bg-[#232426] p-8 transition-all duration-300"
            >
              <card.icon className="h-8 w-8 text-primary mb-5" />
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <ul className="space-y-3">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
