import { useState } from "react";
import { SectionShareButton } from "./SectionShareButton";
import { Building2, Mountain, Drill } from "lucide-react";

const environments = [
  {
    id: "outdoor",
    icon: Mountain,
    title: "Outdoor",
    description: "Open-pit mines, construction sites, ports",
    layer: "top",
    gradient: "from-sky-500/20 to-blue-600/20",
    hoverGradient: "from-sky-500/30 to-blue-600/30",
  },
  {
    id: "indoor",
    icon: Building2,
    title: "Indoor",
    description: "Warehouses, factories, multi-floor facilities",
    layer: "middle",
    gradient: "from-violet-500/20 to-purple-600/20",
    hoverGradient: "from-violet-500/30 to-purple-600/30",
  },
  {
    id: "underground",
    icon: Drill,
    title: "Underground",
    description: "Mines, tunnels, subterranean operations",
    layer: "bottom",
    gradient: "from-orange-500/20 to-red-600/20",
    hoverGradient: "from-orange-500/30 to-red-600/30",
  },
];

export const Environments = () => {
  const [activeEnv, setActiveEnv] = useState<string | null>(null);

  return (
    <section id="environments" className="py-24 px-6 relative group">
      <div className="absolute top-4 right-6">
        <SectionShareButton sectionId="environments" sectionName="Environments" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Anywhere. Everywhere.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One platform that adapts to any environment — seamlessly positioning across surface, structure, and depth.
          </p>
        </div>

        {/* Cross-section visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Environment layers */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm">
            {environments.map((env, index) => {
              const Icon = env.icon;
              const isActive = activeEnv === env.id;
              
              return (
                <div
                  key={env.id}
                  onMouseEnter={() => setActiveEnv(env.id)}
                  onMouseLeave={() => setActiveEnv(null)}
                  className={`
                    absolute left-0 right-0 cursor-pointer
                    transition-all duration-700 ease-out
                    ${index === 0 ? 'top-0 h-[33.33%]' : ''}
                    ${index === 1 ? 'top-[33.33%] h-[33.33%]' : ''}
                    ${index === 2 ? 'top-[66.66%] h-[33.34%]' : ''}
                  `}
                  style={{
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    zIndex: isActive ? 10 : index,
                  }}
                >
                  {/* Background gradient */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br
                    ${isActive ? env.hoverGradient : env.gradient}
                    transition-all duration-700
                  `} />

                  {/* Border separator */}
                  {index < 2 && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />
                  )}

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-between px-12">
                    <div className={`
                      transition-all duration-700
                      ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-70'}
                    `}>
                      <div className="flex items-center gap-4 mb-2">
                        <Icon className={`
                          w-8 h-8 transition-all duration-700
                          ${isActive ? 'scale-110' : 'scale-100'}
                        `} />
                        <h3 className="text-3xl font-bold text-foreground">
                          {env.title}
                        </h3>
                      </div>
                      <p className={`
                        text-muted-foreground text-sm transition-all duration-700
                        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
                      `}>
                        {env.description}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className={`
                      transition-all duration-700
                      ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                    `}>
                      <div className="w-24 h-24 rounded-full bg-background/10 backdrop-blur-sm border border-border/30 flex items-center justify-center">
                        <Icon className="w-12 h-12" />
                      </div>
                    </div>
                  </div>

                  {/* Animated pulse on hover */}
                  {isActive && (
                    <div className="absolute inset-0 animate-pulse pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/5 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom info text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Hover to explore each environment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
