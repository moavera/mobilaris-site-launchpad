import { Building2, Mountain, Layers, ArrowRight } from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";
const environments = [{
  icon: Layers,
  title: "Underground",
  description: "Navigate complex tunnel systems and underground facilities with precise positioning and real-time tracking, even in GPS-denied environments.",
  gradient: "from-purple-500/20 to-blue-500/20"
}, {
  icon: Mountain,
  title: "Outdoor",
  description: "Track assets and personnel across large outdoor sites with GPS integration, geofencing, and environmental awareness capabilities.",
  gradient: "from-blue-500/20 to-cyan-500/20"
}, {
  icon: Building2,
  title: "Indoor",
  description: "Monitor movement through warehouses, factories, and facilities with meter-level accuracy using BLE, Wi-Fi, and UWB technologies.",
  gradient: "from-cyan-500/20 to-teal-500/20"
}];
export const Environments = () => {
  return <section id="environments" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        {/* Two-column header layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-start gap-4">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Positioning That Works Everywhere
            </h2>
            <SectionShareButton sectionId="environments" sectionName="Environments" />
          </div>
          <div className="flex items-center">
            <p className="text-xl text-muted-foreground">
              Our system is built for every environment, from deep underground tunnels to open outdoor sites and complex indoor facilities. It automatically adapts the positioning technology to ensure accurate, continuous tracking wherever your operations happen.
            </p>
          </div>
        </div>

        {/* Grid of environment cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {environments.map((env, index) => (
            <div 
              key={env.title} 
              className="group relative rounded-2xl border border-border bg-card/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Visual preview area */}
              <div className="relative h-64 bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center border-b border-border">
                <div className={`absolute inset-0 bg-gradient-to-br ${env.gradient} opacity-20`} />
                <env.icon className="h-20 w-20 text-primary/40 relative z-10" />
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Environment Type</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {env.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {env.description}
                </p>
                
                {/* Interactive element */}
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};