import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import logoImage from "@/assets/site-logo-2.png";
import demoImage from "@/assets/demo-scenario.png";

export const HeroNew = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <img src={logoImage} alt="Mobilaris Logo" className="h-12 md:h-16 w-auto" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text and Buttons */}
          <div className="max-w-2xl animate-fade-in-up">
            {/* Hook Question */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
              Total control of your site, <span className="text-primary">everywhere</span>
            </h1>
            
            {/* Key Message */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              <span className="text-foreground font-semibold">Mobilaris Site™</span> - real-time positioning and 3D visualization eliminates guess-work during critical operations
            </p>

            {/* Visual Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-lg px-5 py-2.5">
                <span className="text-foreground font-medium text-sm">🚗 Vehicles</span>
              </div>
              <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-lg px-5 py-2.5">
                <span className="text-foreground font-medium text-sm">👷 People</span>
              </div>
              <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-lg px-5 py-2.5">
                <span className="text-foreground font-medium text-sm">📦 Assets</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                className="text-base px-6 shadow-lg hover:shadow-xl transition-all duration-300" 
                asChild
              >
                <a href="mailto:support@mobilaris.se">
                  Contact us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-6 hover:bg-accent transition-all duration-300" 
                asChild
              >
                <a href="/demo-start">
                  Try Demo Site
                  <Play className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative lg:pl-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img 
                src={demoImage} 
                alt="Mobilaris Site Demo" 
                className="w-full h-auto"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};