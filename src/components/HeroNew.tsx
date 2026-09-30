import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import demoImage from "@/assets/demo-scenario.png";

export const HeroNew = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Soft multi-color gradient wash fading out towards the bottom */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% 108%, hsl(262 90% 78% / 0.55) 0%, hsl(280 85% 72% / 0.35) 35%, hsl(300 80% 75% / 0.18) 60%, transparent 80%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 30% at 18% 105%, hsl(320 85% 75% / 0.30) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 30% at 82% 105%, hsl(250 90% 78% / 0.30) 0%, transparent 70%)",
          }}
        />
        {/* Fade the wash into the page background so the very bottom is clean */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-36 md:pt-44 pb-0">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Pill badge with white lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="hidden sm:block h-px w-24 bg-gradient-to-r from-transparent to-white/70" />
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-5 py-2 text-sm font-medium text-foreground">
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

        {/* Framed product screenshot – transparent frame, no glow shadow */}
        <div
          className="relative max-w-5xl mx-auto mt-16 md:mt-20 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="rounded-t-3xl border border-b-0 border-white/15 bg-white/5 backdrop-blur-sm p-2 sm:p-3 overflow-hidden">
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
