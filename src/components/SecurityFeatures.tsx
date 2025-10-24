import { Card } from "@/components/ui/card";
import { Shield, Activity, Code2, Lock, Box } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const features = [
  {
    icon: Shield,
    title: "Modern Standards",
    description: "Built on modern, proven standards for seamless operation and reliability across your industrial infrastructure.",
  },
  {
    icon: Activity,
    title: "Comprehensive Observability",
    description: "Full observability and logging capabilities ensure complete visibility into system performance and operations.",
  },
  {
    icon: Code2,
    title: "Infrastructure as Code",
    description: "Automated, infrastructure-as-code management streamlines deployment and ensures consistency across environments.",
  },
  {
    icon: Lock,
    title: "Secure OAuth2 Access",
    description: "Enterprise-grade OAuth2-based access control protects your data and ensures only authorized access.",
  },
  {
    icon: Box,
    title: "Containerized Deployment",
    description: "Lightweight, containerized deployment enables rapid scaling and simplified maintenance.",
  },
];

export const SecurityFeatures = () => {
  const [emblaRef] = useEmblaCarousel({ 
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false
  });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-semibold">Enterprise-Grade Security</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built on Modern Standards
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive security and reliability features that ensure seamless, safe operations
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden -mx-4" ref={emblaRef}>
            <div className="flex gap-4 px-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_85%] min-w-0"
                >
                  <Card 
                    className="p-8 h-full bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-10 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 animate-fade-in-up border-border/50 hover:border-primary/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
