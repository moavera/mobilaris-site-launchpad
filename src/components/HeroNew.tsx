import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import demoImage from "@/assets/hero-map-emergency.png.asset.json";

export const HeroNew = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const meshRef = useRef<HTMLDivElement>(null);

  // The mesh light follows the mouse pointer. The head (--mx/--my)
  // lerps quickly toward the cursor; the tail (--tx/--ty) lerps
  // slower, so it trails behind like a snake body. All motion is
  // GPU-composited transforms written via requestAnimationFrame.
  useEffect(() => {
    const section = sectionRef.current;
    const mesh = meshRef.current;
    if (!section || !mesh) return;

    let targetX = 0;
    let targetY = 0;
    let headX = 0;
    let headY = 0;
    let tailX = 0;
    let tailY = 0;
    let rafId = 0;
    let initialized = false;

    const seed = () => {
      const rect = section.getBoundingClientRect();
      targetX = headX = tailX = rect.width * 0.04;
      targetY = headY = tailY = rect.height * 0.14;
      initialized = true;
    };

    let clientX = 0;
    let clientY = 0;
    let hasPointer = false;

    const updateTarget = () => {
      if (!hasPointer) return;
      const rect = section.getBoundingClientRect();
      // Center the ribbon (92% wide, 50% tall) on the cursor.
      targetX = clientX - rect.left - rect.width * 0.46;
      targetY = clientY - rect.top - rect.height * 0.25;
      if (!initialized) {
        headX = tailX = targetX;
        headY = tailY = targetY;
        initialized = true;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      clientX = e.clientX;
      clientY = e.clientY;
      hasPointer = true;
      updateTarget();
    };

    // pointermove doesn't fire while scrolling — recompute the target
    // from the last known cursor position so the light follows along.
    const onScroll = () => updateTarget();

    const tick = () => {
      headX += (targetX - headX) * 0.08;
      headY += (targetY - headY) * 0.08;
      tailX += (targetX - tailX) * 0.03;
      tailY += (targetY - tailY) * 0.03;
      mesh.style.setProperty("--mx", `${headX.toFixed(1)}px`);
      mesh.style.setProperty("--my", `${headY.toFixed(1)}px`);
      mesh.style.setProperty("--tx", `${tailX.toFixed(1)}px`);
      mesh.style.setProperty("--ty", `${tailY.toFixed(1)}px`);
      rafId = requestAnimationFrame(tick);
    };

    seed();
    section.addEventListener("pointermove", onPointerMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      <div ref={meshRef} className="hero-mesh pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-mesh__base absolute inset-0" />
        <div className="hero-mesh__smoke hero-mesh__smoke--one absolute inset-0" />
        <div className="hero-mesh__smoke hero-mesh__smoke--two absolute inset-0" />
        <div className="hero-mesh__smoke hero-mesh__smoke--three absolute inset-0" />

        <div className="hero-mesh__fade absolute inset-x-0 bottom-0 h-40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-36 md:pt-44 pb-16 md:pb-24">
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Soft dark scrim behind the text so it stays readable when the light sweeps past */}
          <div
            className="pointer-events-none absolute -inset-x-16 -top-24 -bottom-10 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_50%_45%,hsl(var(--background)/0.85)_0%,hsl(var(--background)/0.5)_45%,transparent_75%)]"
            aria-hidden="true"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-6 leading-[1.1] tracking-tight">
            See your entire site
            <br />
            in real time
            <br />
          </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-9 max-w-xl mx-auto leading-relaxed">
            People, equipment and critical events.{" "}
            <br />
            Above ground, underground and indoors.
          </p>

          <div className="flex justify-center">
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
          className="relative max-w-5xl mx-auto mt-16 md:mt-20 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative overflow-hidden rounded-lg border border-white/15 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
            <img
              src={demoImage.url}
              alt="Mobilaris Site™ real-time map showing people, vehicles and assets"
              className="relative z-0 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
