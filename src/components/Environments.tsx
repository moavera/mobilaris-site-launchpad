import { Building2, Mountain, Layers } from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";

const environments = [
  {
    icon: Layers,
    title: "Underground",
    description: "Navigate complex tunnel systems and underground facilities with precise positioning and real-time tracking, even in GPS-denied environments.",
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Mountain,
    title: "Outdoor",
    description: "Track assets and personnel across large outdoor sites with GPS integration, geofencing, and environmental awareness capabilities.",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Building2,
    title: "Indoor",
    description: "Monitor movement through warehouses, factories, and facilities with meter-level accuracy using BLE, Wi-Fi, and UWB technologies.",
    gradient: "from-cyan-500/20 to-teal-500/20"
  }
];

export const Environments = () => {
  return (
    <section id="environments" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Adapt to Any Environment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Our system seamlessly transitions between different environments, providing reliable tracking wherever your operations take you.
            </p>
          </div>
          <SectionShareButton sectionId="environments" sectionName="Environments" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {environments.map((env, index) => (
            <div
              key={env.title}
              className="group relative"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative h-full p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${env.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <env.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {env.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {env.description}
                  </p>

                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-primary/60 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span className="font-semibold text-foreground">Seamless adaptability.</span> Whether you're tracking vehicles in underground mines, monitoring equipment across outdoor construction sites, or managing workflows in indoor warehouses, our technology-agnostic platform ensures continuous, reliable positioning.
          </p>
        </div>
      </div>
    </section>
  );
};
