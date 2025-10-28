import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import logoImage from "@/assets/site-logo-2.png";
import demoScenario from "@/assets/demo-scenario.png";

export const HeroNew = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <img src={logoImage} alt="Mobilaris Logo" className="h-12 md:h-16 w-auto" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <span className="text-sm font-medium text-primary">Real-time Site Intelligence</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Total control of your site,{" "}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                everywhere
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Real-time positioning and 3D visualization eliminates guess-work during critical operations. 
              Track vehicles, people, and assets with precision.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-sm font-medium">🚗 Vehicles</span>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-sm font-medium">👷 People</span>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-sm font-medium">📦 Assets</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 group" 
                asChild
              >
                <a href="mailto:support@mobilaris.se">
                  Contact us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 group" 
                asChild
              >
                <a href="/demo-start">
                  Try Demo Site
                  <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src={demoScenario} 
                alt="3D site visualization showing tracked vehicles, people, and zones" 
                className="w-full h-auto"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
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