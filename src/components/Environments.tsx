import { Card } from "@/components/ui/card";
import { Building2, Compass, Mountain } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";

const environments = [
  {
    icon: Building2,
    title: "Indoor",
    description: "Warehouses, factories, production facilities, and multi-level buildings. Track assets and personnel across complex indoor spaces with precision.",
  },
  {
    icon: Compass,
    title: "Outdoor",
    description: "Construction sites, ports, logistics yards, and open-air facilities. Monitor operations across vast outdoor areas with real-time positioning.",
  },
  {
    icon: Mountain,
    title: "Underground",
    description: "Mines, tunnels, and underground facilities. Ensure safety and efficiency in challenging subterranean environments where GPS doesn't reach.",
  },
];

export const Environments = () => {
  return (
    <section id="environments" className="py-20 bg-muted/30 scroll-mt-20 group">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Works Anywhere You Do
            </h2>
            <SectionShareButton sectionId="environments" sectionName="Environments" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mobilaris Site™ adapts to any environment, providing reliable tracking and monitoring wherever your operations take you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {environments.map((env, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <env.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{env.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {env.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
