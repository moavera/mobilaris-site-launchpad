import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Truck } from "lucide-react";
import logoImage from "@/assets/site-logo-2.png";
import demoImage from "@/assets/demo-scenario.png";
import heroVideo from "@/assets/test.mp4";
export const HeroNew = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover object-center scale-105">
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      
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
                <span className="text-foreground font-medium text-sm flex items-center gap-2"><Truck className="h-4 w-4" /> Vehicles</span>
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
              <Button size="lg" className="text-base px-6 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <a href="mailto:support@mobilaris.se">
                  Contact us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="relative text-base px-6 overflow-hidden group border-2 border-primary/50" asChild>
                <a href="/demo-start" className="relative z-10">
                  {/* Animated gradient overlay */}
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[shimmer_3s_ease-in-out_infinite] translate-x-[-200%]" />
                  Try Demo Site
                  <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
            
            <style>{`
              @keyframes shimmer {
                0% {
                  transform: translateX(-200%);
                }
                95% {
                  transform: translateX(200%);
                }
                100% {
                  transform: translateX(200%);
                }
              }
            `}</style>
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