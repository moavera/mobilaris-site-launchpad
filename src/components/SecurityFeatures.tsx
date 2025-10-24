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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built with security and reliability at the core, ensuring your operations run smoothly and safely
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
                    className="p-8 h-full hover:shadow-elegant transition-all duration-300 border-border/50"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
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
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
