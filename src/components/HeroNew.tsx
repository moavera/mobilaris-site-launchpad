import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import demoImage from "@/assets/hero-map-emergency.png.asset.json";

export const HeroNew = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-mesh__base absolute inset-0" />
        <div className="hero-mesh__fade absolute inset-x-0 bottom-0 h-40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-48 sm:pt-52 md:pt-60 pb-16 md:pb-24">
        <div
          className="relative max-w-4xl mx-auto text-center"
        >
          {/* Soft dark scrim behind the text so it stays readable when the light sweeps past */}
          <div
            className="pointer-events-none absolute -inset-x-16 -top-24 -bottom-10 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_50%_45%,hsl(var(--background)/0.85)_0%,hsl(var(--background)/0.5)_45%,transparent_75%)]"
            aria-hidden="true"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-6 leading-[1.1] tracking-tight">
            <span className="intro inline-block" style={{ animationDelay: "0.05s" }}>See your entire site</span>
            <br />
            <span className="intro inline-block" style={{ animationDelay: "0.15s" }}>in real time</span>
          </h1>

            <p className="intro text-lg sm:text-xl text-muted-foreground mb-9 max-w-xl mx-auto leading-relaxed" style={{ animationDelay: "0.3s" }}>
            People, equipment and critical events.{" "}
            <br />
            Above ground, underground and indoors.
          </p>

          <div className="intro flex justify-center" style={{ animationDelay: "0.42s" }}>
            <Button
              size="lg"
              className="text-base px-8 rounded-full bg-[#974FF4] text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#8640de] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.35)]"
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

        {/* Product screenshot – clean frame */}
        <div
          className="intro-image relative max-w-5xl mx-auto mt-20 md:mt-28"
          style={{ animationDelay: "0.55s" }}
        >
          <div className="relative overflow-hidden rounded-lg border border-white/15 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
            <img
              src={demoImage.url}
              alt="Mobilaris Site™ real-time map showing people, vehicles and assets"
              className="relative z-0 w-full h-auto"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
