import { useEffect, useState } from "react";
import { Radio, MapPin, Building2, Mountain } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";

export const EnvironmentJourney = () => {
  const [activeEnvironment, setActiveEnvironment] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEnvironment((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const environments = [
    {
      id: "underground",
      icon: Mountain,
      title: "Underground",
      subtitle: "Deep Below Surface",
      description: "Reliable positioning in mines and tunnels where GPS fails. Our system maintains continuous tracking in the most challenging subterranean environments.",
      gradient: "from-slate-700 via-slate-600 to-slate-500",
    },
    {
      id: "outdoor",
      icon: MapPin,
      title: "Outdoor",
      subtitle: "Open Air Operations",
      description: "Seamless tracking across vast construction sites, ports, and logistics yards. Monitor operations in real-time across unlimited outdoor spaces.",
      gradient: "from-blue-600 via-cyan-500 to-sky-400",
    },
    {
      id: "indoor",
      icon: Building2,
      title: "Indoor",
      subtitle: "Controlled Environments",
      description: "Precision monitoring in warehouses, factories, and multi-level production facilities. Track assets and personnel with sub-meter accuracy.",
      gradient: "from-orange-500 via-amber-500 to-yellow-400",
    },
  ];

  return (
    <section
      id="environment-journey"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-muted/30 scroll-mt-20 group"
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
            Watch how our adaptive positioning technology seamlessly transitions across any environment
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main animated card */}
          <div className="relative min-h-[500px] mb-12">
            {environments.map((env, index) => (
              <div
                key={env.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeEnvironment === index
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0"
                }`}
              >
                <div className={`relative p-12 md:p-16 rounded-3xl bg-gradient-to-br ${env.gradient} overflow-hidden`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,white_49%,white_51%,transparent_52%)] bg-[length:30px_30px]" />
                  </div>

                  {/* Signal pulse animation */}
                  <div className="absolute top-8 right-8">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full animate-ping" />
                      </div>
                      <div className="relative w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Radio className="w-6 h-6 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-white">
                    <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                      {env.subtitle}
                    </div>
                    
                    <div className="flex items-start gap-6 mb-8">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <env.icon className="w-12 h-12 md:w-16 md:h-16" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-4xl md:text-6xl font-bold mb-4">
                          {env.title}
                        </h3>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                          {env.description}
                        </p>
                      </div>
                    </div>

                    {/* Status indicators */}
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">Real-time Tracking</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">Signal: Excellent</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">100% Uptime</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Environment selector */}
          <div className="flex justify-center gap-4">
            {environments.map((env, index) => (
              <button
                key={env.id}
                onClick={() => setActiveEnvironment(index)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
                  activeEnvironment === index
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card hover:bg-accent border border-border"
                }`}
              >
                <env.icon className="w-5 h-5" />
                <span className="font-medium hidden sm:inline">{env.title}</span>
              </button>
            ))}
          </div>

          {/* Reliability statement */}
          <div className="text-center mt-20 p-8 md:p-12 bg-card rounded-2xl border border-border shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Uncompromising Reliability
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our adaptive positioning technology automatically adjusts to your environment, 
              ensuring continuous tracking and monitoring no matter where your operations take you. 
              From deep underground to open skies, maintain complete visibility of your assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
