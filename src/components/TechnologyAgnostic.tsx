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

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-3">Deploy the Right Solution</h3>
            <p className="text-muted-foreground">
              GPS for outdoor visibility, BLE or RFID for indoor tracking, UWB for centimeter-level precision.
            </p>
          </div>

          <div className="text-center p-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Scan className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-3">Adapt and Scale Easily</h3>
            <p className="text-muted-foreground">
              As your site evolves — add or replace technologies without changing the platform.
            </p>
          </div>

          <div className="text-center p-6 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-3">Unified Data Model</h3>
            <p className="text-muted-foreground">
              All positioning data visualized and managed in one place with a single API.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
