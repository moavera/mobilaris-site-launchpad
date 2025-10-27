import { CheckCircle2, TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";

export const Evolution = () => {
  const highlights = [
    {
      icon: Shield,
      text: "Proven technology, refined through years of real-world deployments"
    },
    {
      icon: TrendingUp,
      text: "Trusted by global leaders in mining, tunneling, and heavy industry"
    },
    {
      icon: Zap,
      text: "Re-engineered core for performance, reliability, and scalability"
    },
    {
      icon: CheckCircle2,
      text: "Enhanced 3D visualization and real-time awareness capabilities"
    },
    {
      icon: ArrowRight,
      text: "Seamless upgrade path from earlier Mobilaris solutions to Site™"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">Next Generation Technology</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mobilaris 2.0 - Site™
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our platform builds on a long history of real-time positioning and 3D visualization in industrial and mining operations. 
            The new Mobilaris 2.0 - Site™ is the next generation, redesigned for higher performance, scalability, and user experience.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <highlight.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed pt-2">
                {highlight.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
            <p className="text-sm font-medium text-primary">
              Building on decades of industrial expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
