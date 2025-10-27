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
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Technology Agnostic Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deploy multiple positioning technologies on the same platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-4 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <tech.icon className={`w-10 h-10 mx-auto mb-2 ${tech.color}`} />
              <h3 className="text-sm font-bold mb-1">{tech.name}</h3>
              <p className="text-xs text-muted-foreground">{tech.accuracy}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground">
            Deploy the right solution for each area • Adapt and scale easily as your site evolves • Unified data model and API
          </p>
        </div>
      </div>
    </section>
  );
};
