import { Satellite, Radio, Tag, Scan, Waves, Wifi, Check } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";

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
    <section id="technology" className="py-16 md:py-24 bg-gradient-subtle scroll-mt-20 group">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Technology Agnostic Platform
              </h2>
              <SectionShareButton sectionId="technology" sectionName="Technology" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent whitespace-nowrap font-semibold">Mobilaris Site™</span> is built to integrate any positioning technology — giving you the freedom to balance accuracy, cost, and coverage across your operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 pb-8 border-b border-border/50">
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

          <ul className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base text-muted-foreground leading-relaxed"><strong className="text-foreground">Combine multiple technologies in one platform</strong> — GPS, Wi-Fi, BLE, RFID, LiDAR, and UWB all work seamlessly together.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base text-muted-foreground leading-relaxed"><strong className="text-foreground">Deploy the right solution for each area:</strong> GPS for outdoor visibility, BLE or RFID for indoor tracking, UWB for centimeter-level precision.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base text-muted-foreground leading-relaxed"><strong className="text-foreground">Adapt and scale easily as your site evolves</strong> — add or replace technologies without changing the platform.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base text-muted-foreground leading-relaxed"><strong className="text-foreground">Unified data model and API</strong> — all positioning data visualized and managed in one place.</span>
            </li>
          </ul>
          <p className="text-center text-lg font-semibold mt-12">
            Flexible architecture. One platform. Every technology.
          </p>
        </div>
      </div>
    </section>
  );
};
