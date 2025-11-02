import { useEffect, useRef, useState } from "react";
import { Radio, MapPin, Building2, Mountain } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";

export const EnvironmentJourney = () => {
  const [activeEnvironment, setActiveEnvironment] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      description: "Reliable positioning in mines and tunnels where GPS fails",
      color: "from-slate-900 to-slate-700",
      textColor: "text-slate-200",
      position: "bottom-0",
    },
    {
      id: "outdoor",
      icon: MapPin,
      title: "Outdoor",
      subtitle: "Open Air Operations",
      description: "Seamless tracking across vast construction sites and ports",
      color: "from-blue-600 to-cyan-500",
      textColor: "text-white",
      position: "top-1/2 -translate-y-1/2",
    },
    {
      id: "indoor",
      icon: Building2,
      title: "Indoor",
      subtitle: "Controlled Environments",
      description: "Precision monitoring in warehouses and production facilities",
      color: "from-orange-500 to-amber-400",
      textColor: "text-white",
      position: "top-0",
    },
  ];

  return (
    <section
      id="environment-journey"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-background scroll-mt-20 group"
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
            Follow the signal as it adapts seamlessly across underground tunnels, outdoor sites, and indoor facilities
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Journey visualization */}
          <div className="relative h-[600px] md:h-[700px]">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-700 via-blue-500 to-amber-400 opacity-30 -translate-x-1/2" />

            {/* Signal beacon animation */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out ${
                environments[activeEnvironment].position
              }`}
            >
              <div className="relative">
                {/* Animated pulse rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full animate-ping" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center animation-delay-500">
                  <div className="w-24 h-24 bg-primary/30 rounded-full animate-ping" />
                </div>
                
                {/* Signal icon */}
                <div className="relative w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow z-10">
                  <Radio className="w-8 h-8 text-white animate-pulse" />
                </div>
              </div>
            </div>

            {/* Environment cards */}
            {environments.map((env, index) => (
              <div
                key={env.id}
                className={`absolute left-0 right-0 ${env.position} transition-all duration-700 ${
                  activeEnvironment === index
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-40"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left side - Icon and visual */}
                  <div
                    className={`order-2 md:order-${
                      index % 2 === 0 ? "1" : "2"
                    }`}
                  >
                    <div
                      className={`relative p-12 rounded-3xl bg-gradient-to-br ${env.color} overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-grid-white/10" />
                      <env.icon className="w-32 h-32 text-white/90 relative z-10 mx-auto" />
                      
                      {/* Environment-specific decorative elements */}
                      {index === 0 && (
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                      )}
                      {index === 1 && (
                        <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-300/30 rounded-full blur-xl" />
                      )}
                      {index === 2 && (
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.1)_49%,rgba(255,255,255,0.1)_51%,transparent_52%)] bg-[length:20px_20px]" />
                      )}
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div
                    className={`order-1 md:order-${
                      index % 2 === 0 ? "2" : "1"
                    } ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                  >
                    <div className="space-y-4">
                      <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {env.subtitle}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold">
                        {env.title}
                      </h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        {env.description}
                      </p>
                      <div className="pt-4 space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-sm text-muted-foreground">
                            Real-time tracking active
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-sm text-muted-foreground">
                            Signal strength: Excellent
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Environment indicators */}
          <div className="flex justify-center gap-4 mt-12">
            {environments.map((env, index) => (
              <button
                key={env.id}
                onClick={() => setActiveEnvironment(index)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
                  activeEnvironment === index
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                <env.icon className="w-5 h-5" />
                <span className="font-medium hidden sm:inline">{env.title}</span>
              </button>
            ))}
          </div>

          {/* Reliability statement */}
          <div className="text-center mt-20 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              Uncompromising Reliability
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our adaptive positioning technology automatically adjusts to your environment, 
              ensuring continuous tracking and monitoring no matter where your operations take you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
