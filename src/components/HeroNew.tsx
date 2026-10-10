import heroImage from "@/assets/hero-mine-landscape.webp.asset.json";

export const HeroNew = () => {
  return (
    <section className="relative overflow-hidden bg-surface min-h-[1000px] sm:min-h-[1100px] md:min-h-0 md:aspect-[1920/1493]">
      <img
        src={heroImage.url}
        alt="Mobilaris Site™ live map in front of a mine landscape at dusk"
        className="intro-image absolute inset-x-0 bottom-0 h-[600px] w-full object-cover object-bottom sm:h-[760px] md:inset-0 md:h-full"
        style={{ animationDelay: "0.1s" }}
        decoding="async"
        fetchPriority="high"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[hsl(var(--surface))]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-36 text-center md:pt-[8.5%]">
        <div
          className="intro mb-6 inline-flex rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm md:text-[15px]"
          style={{ animationDelay: "0.05s" }}
        >
          Real-time positioning for mines and industry
        </div>

        <h1 className="mb-6 text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl md:text-[72px] lg:text-[80px]">
          <span className="intro inline-block" style={{ animationDelay: "0.15s" }}>Site-wide visibility,</span>
          <br />
          <span className="intro inline-block" style={{ animationDelay: "0.22s" }}>in real-time.</span>
        </h1>

        <p
          className="intro mx-auto mb-8 max-w-[680px] text-lg leading-relaxed text-white/70 md:text-[21px]"
          style={{ animationDelay: "0.3s" }}
        >
          Mobilaris Site™ puts people, vehicles and assets in one live map – indoors, outdoors and underground.
        </p>

        <div className="intro flex flex-wrap justify-center gap-3" style={{ animationDelay: "0.42s" }}>
          <a
            href="https://mobilarisindustrialsolutions.se/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-full bg-white px-7 text-base font-medium text-[hsl(var(--ink))] transition-colors hover:bg-white/90 md:h-14 md:px-8 md:text-lg"
          >
            Book a demo
          </a>
          <a
            href="#environments"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("environments")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex h-12 items-center rounded-full border border-white/25 bg-white/[0.04] px-7 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 md:h-14 md:px-8 md:text-lg"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
};
