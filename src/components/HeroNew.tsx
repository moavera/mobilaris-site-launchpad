import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-industrial-site.jpg";

export const HeroNew = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial site with digital tracking overlay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Hook Question */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Visualize your site in seconds
          </h1>
          
          {/* Key Message */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Real-time positioning and 3D visualization of your site
            </p>
          </div>

          {/* Visual Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3">
              <span className="text-white font-semibold">🚗 Vehicles</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3">
              <span className="text-white font-semibold">👷 People</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3">
              <span className="text-white font-semibold">📦 Assets</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant text-lg px-8">
              Book Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8"
            >
              <Play className="mr-2 h-5 w-5" />
              Try Demo Site
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
