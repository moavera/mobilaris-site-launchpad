import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ProductHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-6">
            Mobilaris Site™
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
            Know where everyone and everything is — right now
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Mobilaris Site shows the real-time location of people, vehicles and equipment on a 3D map of your site. 
            Whether you're underground or above ground, you get a shared, live picture that makes coordination 
            safer and faster.
          </p>
          <Button size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
            <a href="https://mobilarisindustrialsolutions.se/contact/" target="_blank" rel="noopener noreferrer">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
