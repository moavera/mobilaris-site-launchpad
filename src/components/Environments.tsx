import isoOutdoor from "@/assets/iso-outdoor.svg";
import isoIndoor from "@/assets/iso-indoor.svg";
import isoUnderground from "@/assets/iso-underground.svg";

const pillars = [
  {
    title: "Outdoor",
    description: "Track assets and personnel across large outdoor sites with GPS integration and geofencing.",
    image: isoOutdoor,
    w: 310,
    h: 209.334,
  },
  {
    title: "Indoor",
    description: "Follow movement through warehouses, workshops and facilities using BLE, Wi‑Fi and UWB.",
    image: isoIndoor,
    w: 208.562,
    h: 320,
  },
  {
    title: "Underground",
    description: "Precise positioning in complex tunnel systems – even where GPS can’t reach.",
    image: isoUnderground,
    w: 330,
    h: 297.514,
  },
];

export const Environments = () => {
  return (
    <section id="environments" className="relative bg-surface py-24 md:py-40 px-4">
      <div className="container mx-auto flex flex-col gap-16 md:gap-24">
        <h2 className="max-w-[912px] text-3xl md:text-[44px] font-medium leading-[1.18] tracking-[-0.02em] text-foreground">
          One live picture of the entire operation.
          <span className="text-foreground/45"> From the surface down to the deepest tunnel – in the same view.</span>
        </h2>

        <div className="grid md:grid-cols-3 border-y border-foreground/[0.08]">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col px-8 pt-10 pb-12 ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/[0.08]" : ""}`}
            >
              <div className="flex h-[260px] md:h-[330px] items-center justify-center">
                <img
                  src={p.image}
                  alt={`${p.title} environment illustration`}
                  loading="lazy"
                  className="max-h-full max-w-full"
                  style={{ width: p.w, aspectRatio: `${p.w} / ${p.h}` }}
                />
              </div>
              <h3 className="text-[17px] font-medium text-foreground">{p.title}</h3>
              <p className="mt-2.5 text-[15px] leading-[1.55] text-foreground/50">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
