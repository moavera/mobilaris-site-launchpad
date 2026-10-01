import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import demoImage from "@/assets/demo-scenario.png";

export const HeroNew = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-mesh__base absolute inset-0" />
        <div className="hero-mesh__smoke hero-mesh__smoke--one absolute inset-0" />
        <div className="hero-mesh__smoke hero-mesh__smoke--two absolute inset-0" />
        <div className="hero-mesh__smoke hero-mesh__smoke--three absolute inset-0" />

        {/* Frosted-glass haze over the lit mesh */}
        <div className="hero-mesh__glow hero-mesh__glow--one absolute inset-0" aria-hidden="true" />
        <div className="hero-mesh__glow hero-mesh__glow--two absolute inset-0" aria-hidden="true" />
        <div className="hero-mesh__glow hero-mesh__glow--three absolute inset-0" aria-hidden="true" />

        <div className="hero-mesh__fade absolute inset-x-0 bottom-0 h-40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-36 md:pt-44 pb-0">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Pill badge with white lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="hidden sm:block h-px w-24 bg-gradient-to-r from-transparent to-white/70" />
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_8px_32px_0_rgba(0,0,0,0.25)] backdrop-blur-xl">
              Mobilaris Site™
            </span>
            <span className="hidden sm:block h-px w-24 bg-gradient-to-l from-transparent to-white/70" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-6 leading-[1.1] tracking-tight">
            See everything. Underground.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-9 max-w-xl mx-auto leading-relaxed">
            Real-time awareness of people, vehicles and assets – in one shared
            view.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="text-base px-8 rounded-full border border-white/25 bg-white/10 text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_12px_40px_0_rgba(0,0,0,0.35)]"
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

        {/* Framed product screenshot – glassmorphism frame */}
        <div
          className="relative max-w-5xl mx-auto mt-16 md:mt-20 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Gloss highlight along the top edge of the glass frame */}
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-t-3xl border border-white/20 bg-white/10 p-2 sm:p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            {/* Soft sheen across the glass frame */}
            <div
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-transparent to-transparent"
              aria-hidden="true"
            />
            <img
              src={demoImage}
              alt="Mobilaris Site™ real-time map showing people, vehicles and assets"
              className="relative z-0 w-full h-auto rounded-t-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
