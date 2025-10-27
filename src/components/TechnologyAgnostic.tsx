import { Card } from "@/components/ui/card";
import { Satellite, Radio, Tag, Scan, Waves, MapPin } from "lucide-react";

const technologies = [
  {
    icon: Satellite,
    name: "GPS",
    use: "Outdoor tracking",
    accuracy: "5-10m",
    color: "text-blue-500"
  },
  {
    icon: Radio,
    name: "BLE",
    use: "Indoor positioning",
    accuracy: "1-5m",
    color: "text-purple-500"
  },
  {
    icon: Tag,
    name: "RFID",
    use: "Asset tracking",
    accuracy: "3-10m",
    color: "text-green-500"
  },
  {
    icon: Scan,
    name: "LIDAR",
    use: "Vehicle navigation",
    accuracy: "0.5-2m",
    color: "text-orange-500"
  },
  {
    icon: Waves,
    name: "UWB",
    use: "Highest precision",
    accuracy: "0.1-0.5m",
    color: "text-red-500"
  },
  {
    icon: MapPin,
    name: "Wi-Fi",
    use: "Quick deployment",
    accuracy: "5-15m",
    color: "text-cyan-500"
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
            Our architecture enables multiple co-existing positioning technologies on the same site, 
            allowing flexibility in cost and accuracy to fit different needs across your facility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <tech.icon className={`w-12 h-12 mx-auto ${tech.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{tech.use}</p>
              <p className="text-xs text-muted-foreground font-mono">{tech.accuracy}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block bg-card border border-border/50 rounded-lg p-6 max-w-2xl">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Mix and match technologies</span> across different zones – 
              use cost-effective solutions where precision isn't critical, and deploy high-accuracy options where safety demands it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
