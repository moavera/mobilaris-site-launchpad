import { Card } from "@/components/ui/card";
import { Satellite, Radio, Tag, Scan, Waves, MapPin } from "lucide-react";

const technologies = [
  {
    icon: Satellite,
    name: "GPS",
    description: "Outdoor tracking",
    color: "text-blue-500"
  },
  {
    icon: Radio,
    name: "BLE",
    description: "Indoor positioning",
    color: "text-purple-500"
  },
  {
    icon: Waves,
    name: "UWB",
    description: "Precision tracking",
    color: "text-red-500"
  },
  {
    icon: Tag,
    name: "RFID",
    description: "Asset management",
    color: "text-green-500"
  }
];

export const TechnologyAgnostic = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technology Agnostic Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deploy multiple positioning technologies on the same platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <tech.icon className={`w-16 h-16 mx-auto ${tech.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg text-muted-foreground">
            Deploy the right solution for each area • Adapt and scale easily as your site evolves • Unified data model and API
          </p>
        </div>
      </div>
    </section>
  );
};
