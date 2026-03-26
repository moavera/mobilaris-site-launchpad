import { MapPin, Eye, Box } from "lucide-react";

const capabilities = [
  {
    icon: MapPin,
    title: "Real-time positioning",
    description:
      "Track the live location of every person, vehicle and piece of equipment on your site — underground and above ground.",
  },
  {
    icon: Eye,
    title: "3D map of your entire site",
    description:
      "See everything on an interactive 3D model. Navigate between levels, zoom into specific areas, and understand your site at a glance.",
  },
  {
    icon: Box,
    title: "Works with your existing systems",
    description:
      "Mobilaris Site connects to the positioning technologies already on your site — WiFi, BLE, UWB, GPS and more — and combines them into one unified view.",
  },
];

export const ProductSolution = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            The solution
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            One live view of your entire operation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mobilaris Site gives everyone — from control room operators to safety managers — 
            a shared, real-time picture of the site. No more guessing, no more phone calls. 
            Just open the map and see what's happening.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{cap.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
