import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import demoImage from "@/assets/demo-scenario.png";

export const HeroNew = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Ambient glow behind the product frame */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[600px]">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-300px] w-[1200px] h-[600px] rounded-full bg-primary/40 blur-[150px]" />
        <div className="absolute bottom-[-160px] left-[4%] w-[440px] h-[440px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-160px] right-[4%] w-[440px] h-[440px] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-36 md:pt-44 pb-0">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Pill badge with gradient lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="hidden sm:block h-px w-24 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-semibold text-foreground">
              Mobilaris Site™
            </span>
            <span className="hidden sm:block h-px w-24 bg-gradient-to-l from-transparent to-primary/60" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.08] tracking-tight">
            Real-time awareness for mining and critical infrastructure
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-9 max-w-2xl mx-auto leading-relaxed">
            A shared real-time view of people, vehicles and assets – supporting
            safer coordination in safety-critical environments.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="text-base px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a
                href="https://mobilarisindustrialsolutions.se/contact/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Framed product screenshot */}
        <div
          className="relative max-w-5xl mx-auto mt-16 md:mt-20 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="rounded-t-3xl border border-b-0 border-border bg-card/80 p-2 sm:p-3 shadow-elegant overflow-hidden">
            <img
              src={demoImage}
              alt="Mobilaris Site™ real-time map showing people, vehicles and assets"
              className="w-full h-auto rounded-t-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
