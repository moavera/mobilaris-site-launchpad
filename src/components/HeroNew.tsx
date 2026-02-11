import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Truck } from "lucide-react";
import logoImage from "@/assets/site-logo-2.png";
import demoImage from "@/assets/demo-scenario.png";
import heroVideo from "@/assets/Linjevideo4.0.mp4";
export const HeroNew = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover object-center scale-105">
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-background/60 via-background/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text and Buttons */}
          <div className="max-w-2xl animate-fade-in-up">
            {/* Hook Question */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.15] tracking-tight">
              <span className="block whitespace-nowrap">Real-time situational awareness</span>
              <span className="block whitespace-nowrap">for mining and critical infrastructure</span>
            </h1>
            
            {/* Key Message */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Mobilaris Site™ provides a real-time overview of people, vehicles and assets – helping mining and industrial operations work safer, smarter and more efficiently. 
            </p>

            {/* Visual Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-lg px-5 py-2.5">
                <span className="text-foreground font-medium text-sm flex items-center gap-2"><Truck className="h-4 w-4" />Vehicles & machines</span>
              </div>
              <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-lg px-5 py-2.5">
                <span className="text-foreground font-medium text-sm">👷 People</span>
              </div>
              <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-lg px-5 py-2.5">
                <span className="text-foreground font-medium text-sm">📦 Assets</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base px-6 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <a href="/demo-start">
                  Try Demo Site
                  <Play className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Image - Linear Style */}
          <div className="relative lg:pl-8 animate-fade-in perspective-1000" style={{
          animationDelay: '0.2s'
        }}>
            
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>;
};