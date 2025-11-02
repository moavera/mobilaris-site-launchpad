import { Radio, MapPin, Building2, Mountain } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";

export const EnvironmentJourney = () => {
  const environments = [
    {
      id: "underground",
      icon: Mountain,
      title: "Underground",
      subtitle: "Deep Below Surface",
      description: "Reliable positioning in mines and tunnels where GPS fails. Maintain continuous tracking in the most challenging subterranean environments.",
      gradient: "from-slate-700 to-slate-600",
    },
    {
      id: "outdoor",
      icon: MapPin,
      title: "Outdoor",
      subtitle: "Open Air Operations",
      description: "Seamless tracking across vast construction sites, ports, and logistics yards. Monitor operations in real-time across unlimited outdoor spaces.",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      id: "indoor",
      icon: Building2,
      title: "Indoor",
      subtitle: "Controlled Environments",
      description: "Precision monitoring in warehouses, factories, and multi-level production facilities. Track assets and personnel with sub-meter accuracy.",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section
      id="environment-journey"
      className="relative py-32 overflow-hidden bg-muted/30 scroll-mt-20 group"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              One System, Every Environment
            </h2>
            <SectionShareButton
              sectionId="environment-journey"
              sectionName="Environment Journey"
            />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Adaptive positioning technology that seamlessly works across any environment
          </p>
        </div>

        {/* Visual journey indicator */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-blue-500 to-amber-500 -translate-y-1/2 hidden md:block" />
            
            {/* Signal beacon */}
            <div className="flex justify-center items-center gap-8 md:gap-16 relative z-10">
              {environments.map((env, index) => (
                <div key={env.id} className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: `${index * 0.3}s` }} />
                    </div>
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${env.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <Radio className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{env.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environment cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {environments.map((env, index) => (
            <div
              key={env.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-elegant transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient header */}
              <div className={`relative p-8 bg-gradient-to-br ${env.gradient} text-white overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,white_49%,white_51%,transparent_52%)] bg-[length:20px_20px]" />
                </div>
                
                <div className="relative z-10">
                  <env.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{env.title}</h3>
                  <p className="text-sm text-white/80">{env.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {env.description}
                </p>

                {/* Status indicators */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-muted-foreground">Real-time Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-muted-foreground">100% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-muted-foreground">Sub-meter Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reliability statement */}
        <div className="text-center max-w-4xl mx-auto p-8 md:p-12 bg-card rounded-2xl border border-border shadow-elegant">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Uncompromising Reliability & Adaptability
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our adaptive positioning technology automatically adjusts to your environment, 
            ensuring continuous tracking and monitoring no matter where your operations take you. 
            From deep underground to open skies, maintain complete visibility of your assets with seamless transitions between any environment.
          </p>
        </div>
      </div>
    </section>
  );
};
