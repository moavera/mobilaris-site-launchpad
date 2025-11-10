import { CheckCircle2, TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";
export const Evolution = () => {
  const highlights = [{
    icon: Shield,
    text: "Proven technology, refined through years of real-world deployments"
  }, {
    icon: TrendingUp,
    text: "Trusted by global leaders in mining, tunneling, and heavy industry"
  }, {
    icon: Zap,
    text: "Re-engineered core for performance, reliability, and scalability"
  }, {
    icon: CheckCircle2,
    text: "Enhanced 3D visualization and real-time awareness capabilities"
  }, {
    icon: ArrowRight,
    text: "Seamless upgrade path from earlier Mobilaris solutions to Site™"
  }];
  return <section id="evolution" className="py-24 md:py-32 relative overflow-hidden scroll-mt-20 group">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-primary text-sm font-semibold tracking-wide">Next Generation Technology</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Mobilaris 2.0 - Site™
            </h2>
            <SectionShareButton sectionId="evolution" sectionName="Evolution" />
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">Our platform builds on a long history of real-time positioning and 3D visualization in industrial and mining operations.The new Mobilaris 2.0 - Site™ is the next generation, redesigned for higher performance, scalability, and user experience.</p>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mt-4">
            The new Mobilaris 2.0 - Site™ is the next generation, redesigned for higher performance, scalability, and user experience.
          </p>
        </div>

        {/* Highlights List */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {highlights.map((highlight, index) => <div key={index} className="flex items-start gap-5 p-8 rounded-2xl bg-card/30 border border-border/40 backdrop-blur-sm hover:bg-card/50 hover:border-primary/20 transition-all duration-300 animate-fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <highlight.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="text-lg md:text-xl text-foreground leading-relaxed pt-3">
                {highlight.text}
              </p>
            </div>)}
        </div>

        {/* Bottom Accent */}
        <div className="text-center animate-fade-in-up" style={{
        animationDelay: '0.5s'
      }}>
          <div className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
            <p className="text-base md:text-lg font-semibold text-primary">
              Building on decades of industrial expertise
            </p>
          </div>
        </div>
      </div>
    </section>;
};