import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import logoImage from "@/assets/site-logo-2.png";
import demoImage from "@/assets/demo-scenario.png";

export const HeroNew = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <a href="/">
          <img src={logoImage} alt="Mobilaris Logo" className="h-10 w-auto cursor-pointer opacity-90 hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline - Linear Style */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-[-0.02em]">
            Total control of your site,{" "}
            <span className="text-primary">everywhere</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Real-time positioning and 3D visualization eliminates guess-work during critical operations
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-base px-8 h-12 rounded-full"
              asChild
            >
              <a href="mailto:support@mobilaris.se">
                Contact us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-base px-8 h-12 rounded-full"
              asChild
            >
              <a href="/demo-start">
                Try Demo Site
                <Play className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Demo Image - Linear Style */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative rounded-lg overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src={demoImage} 
                alt="Mobilaris Site Demo" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};