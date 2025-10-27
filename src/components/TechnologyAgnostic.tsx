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
        <div className="text-center mb-8 animate-fade-in-up">
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Mobilaris Site™ is built to integrate any positioning technology — giving you the freedom to balance accuracy, cost, and coverage across your operations.
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

        <div className="max-w-4xl mx-auto space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground">
            <strong>Combine multiple technologies in one platform</strong> — GPS, Wi-Fi, BLE, RFID, LiDAR, and UWB all work seamlessly together.
          </p>
          <p className="text-muted-foreground">
            <strong>Deploy the right solution for each area:</strong> GPS for outdoor visibility, BLE or RFID for indoor tracking, UWB for centimeter-level precision.
          </p>
          <p className="text-muted-foreground">
            <strong>Adapt and scale easily as your site evolves</strong> — add or replace technologies without changing the platform.
          </p>
          <p className="text-muted-foreground">
            <strong>Unified data model and API</strong> — all positioning data visualized and managed in one place.
          </p>
          <p className="text-center text-lg font-semibold mt-6">
            Flexible architecture. One platform. Every technology.
          </p>
        </div>
      </div>
    </section>
  );
};
