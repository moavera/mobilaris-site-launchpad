import { Building2, Mountain, Layers } from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";
import environmentPreview from "@/assets/environment-preview.png";
import environmentIndoor from "@/assets/environment-indoor.png";
import environmentUnderground from "@/assets/environment-underground.png";
const environments = [{
  icon: Layers,
  title: "Underground",
  description: "Navigate complex tunnel systems and underground facilities with precise positioning and real-time tracking, even in GPS-denied environments.",
  gradient: "from-purple-500/20 to-blue-500/20",
  image: environmentUnderground
}, {
  icon: Mountain,
  title: "Outdoor",
  description: "Track assets and personnel across large outdoor sites with GPS integration, geofencing, and environmental awareness capabilities.",
  gradient: "from-blue-500/20 to-cyan-500/20",
  image: environmentPreview
}, {
  icon: Building2,
  title: "Indoor",
  description: "Monitor movement through warehouses, factories, and facilities with meter-level accuracy using BLE, Wi-Fi, and UWB technologies.",
  gradient: "from-cyan-500/20 to-teal-500/20",
  image: environmentIndoor
}];
export const Environments = () => {
  return <section id="environments" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        {/* Two-column header layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-start gap-4">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">Positioning Everywhere</h2>
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
          {environments.map((env, index) => <div key={env.title} className="group relative rounded-2xl border border-border bg-card/30 backdrop-blur-sm overflow-hidden transition-all duration-300" style={{
          animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
        }}>
              {/* Visual preview area */}
              <div className="relative h-64 bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center border-b border-border overflow-hidden">
                <img src={env.image} alt={`${env.title} environment visualization with 3D mapping`} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500" style={{
              boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.4), 0 10px 30px -15px rgba(0, 0, 0, 0.3)'
            }} />
                {/* Shadow overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {env.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {env.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};