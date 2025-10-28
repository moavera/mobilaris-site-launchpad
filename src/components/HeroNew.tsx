import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardImage from "@/assets/webimage.webp";

export const HeroNew = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      {/* Radial gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
              Real-time site coordination made simple
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent whitespace-nowrap font-semibold">Mobilaris Site™</span> - real-time positioning and 3D visualization eliminates guess-work during critical operations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <a href="mailto:support@mobilaris.se">
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="/demo-start">
                  <Play className="mr-2 h-5 w-5" />
                  Try demo
                </a>
              </Button>
            </div>

          {/* Dashboard Preview */}
          <div className="relative pt-12 animate-fade-in">
            <div className="relative rounded-lg overflow-hidden border border-border/50 shadow-2xl bg-card/50 backdrop-blur-sm">
              <img 
                src={dashboardImage}
                alt="Mobilaris Site dashboard showing real-time tracking"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

    </section>;
};