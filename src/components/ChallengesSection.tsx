import { SectionShareButton } from "./SectionShareButton";
import { AlertTriangle, Clock, Eye, Radio } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Safety Blind Spots",
    description: "Without real-time visibility, hazardous situations go undetected until it's too late.",
  },
  {
    icon: Clock,
    title: "Delayed Response Times",
    description: "Manual processes slow down emergency response and critical decision-making.",
  },
  {
    icon: Eye,
    title: "Limited Situational Awareness",
    description: "Fragmented data sources make it hard to see the full operational picture.",
  },
  {
    icon: Radio,
    title: "Poor Coordination",
    description: "Disconnected teams and systems lead to inefficiencies and miscommunication.",
  },
];

export const ChallengesSection = () => {
  return (
    <section id="challenges" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-start gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Solving critical safety and operational challenges
          </h2>
          <SectionShareButton sectionId="challenges" sectionName="Challenges" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/30 bg-[#232426] p-8 transition-all duration-300"
            >
              <item.icon className="h-8 w-8 text-primary mb-5" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
