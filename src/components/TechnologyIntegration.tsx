import { Satellite, Radio, Tag, Scan, Waves, Wifi, Check } from "lucide-react";

const technologies = [
  { icon: Satellite, name: "GPS", color: "text-blue-500" },
  { icon: Wifi, name: "Wi-Fi", color: "text-cyan-500" },
  { icon: Radio, name: "BLE", color: "text-purple-500" },
  { icon: Tag, name: "RFID", color: "text-green-500" },
  { icon: Scan, name: "LiDAR", color: "text-orange-500" },
  { icon: Waves, name: "UWB", color: "text-red-500" }
];

export const TechnologyIntegration = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent whitespace-nowrap font-semibold">Mobilaris Site™</span> is built to integrate any positioning technology — giving you the freedom to balance accuracy, cost, and coverage across your operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <tech.icon className={`w-10 h-10 mx-auto mb-2 ${tech.color}`} />
                <h3 className="text-sm font-bold">{tech.name}</h3>
              </div>
            ))}
          </div>

          <ul className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground"><strong className="text-foreground">Combine multiple technologies in one platform</strong> — GPS, Wi-Fi, BLE, RFID, LiDAR, and UWB all work seamlessly together.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground"><strong className="text-foreground">Deploy the right solution for each area:</strong> GPS for outdoor visibility, BLE or RFID for indoor tracking, UWB for centimeter-level precision.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground"><strong className="text-foreground">Adapt and scale easily as your site evolves</strong> — add or replace technologies without changing the platform.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground"><strong className="text-foreground">Unified data model and API</strong> — all positioning data visualized and managed in one place.</span>
            </li>
          </ul>
          <p className="text-center text-lg font-semibold mt-8">
            Flexible architecture. One platform. Every technology.
          </p>
        </div>
      </div>
    </section>
  );
};
