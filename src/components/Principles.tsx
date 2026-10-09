import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";
import techAsset from "@/assets/card-technology-agnostic.png.asset.json";
import valueAsset from "@/assets/card-value-from-day-one.png.asset.json";
import anywhereAsset from "@/assets/card-anywhere-you-work.png.asset.json";
import modularAsset from "@/assets/card-modular.png.asset.json";
import privacyAsset from "@/assets/card-privacy.png.asset.json";

const steps = [
  { title: "Technology-agnostic", description: "Works with the Wi‑Fi, LTE, BLE, GPS and UWB you already have. No rip-and-replace." },
  { title: "Value from day one", description: "Up and running fast – no big upfront project and no dedicated control room required." },
  { title: "Modular by design", description: "Start with the features you need and add more as your operation evolves." },
  { title: "Anywhere you work", description: "In the control room, on a tablet or in your pocket – the Companion GO™ app brings the live map to people on the move." },
  { title: "Privacy on your terms", description: "Adapts to your company’s privacy policy – show who is where at all times, or keep everyone anonymous until an emergency." },
];

const cardFrame = "relative w-full overflow-hidden rounded-[20px] border border-foreground/[0.08] bg-[#131216]";
// The two artwork cards are 1520×1026 and 1520×1040, so their height is always
// about 0.68× their width. Every other card uses the same ratio, which keeps all
// five cards the same height at any screen width.
const cardHeight = "aspect-[1520/1033]";
const caption = "text-[14px] text-foreground/45 text-center";

// Card 1 & 2: the Figma artwork already contains its own frame and rounded
// corners — render the image as the card itself so no second frame appears.
const CardTech = () => (
  <img src={techAsset.url} alt="Technology-agnostic: connect what you have, add what you need" loading="lazy" decoding="async" className="block h-auto w-full" />
);

const CardValue = () => (
  <img src={valueAsset.url} alt="Live map in Mobilaris Site" loading="lazy" decoding="async" className="block h-auto w-full" />
);

const CardModular = () => (
  <img src={modularAsset.url} alt="Modular by design: start with what you need – add modules as your operation grows" loading="lazy" decoding="async" className="block h-auto w-full" />
);

const CardAnywhere = () => (
  <div className={`${cardFrame} ${cardHeight}`}>
    <img src={anywhereAsset.url} alt="Mobilaris Site on desktop and the Companion GO™ app" loading="lazy" decoding="async" className="absolute right-0 top-1/2 w-[92%] max-w-full max-h-full -translate-y-1/2 object-contain object-right md:w-[78%]" />
  </div>
);

const CardPrivacy = () => (
  <img src={privacyAsset.url} alt="Privacy on your terms: anonymous by default, identified only in an emergency" loading="lazy" decoding="async" className="block h-auto w-full" />
);

const cards = [CardTech, CardValue, CardModular, CardAnywhere, CardPrivacy];

export const Principles = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.55;
      let idx = 0;
      let p = 0;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= line) {
          idx = i;
          p = Math.min(1, Math.max(0, (line - r.top) / (r.height + 16)));
        }
      });
      setActive(idx);
      setProgress(p);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (i: number) => {
    const el = cardRefs.current[i];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.55 + 40;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="principles" className="bg-white p-3 md:p-6">
      <div className="rounded-[28px] bg-surface px-6 pt-16 pb-16 md:pl-[96px] md:pr-[56px] md:pt-[120px] md:pb-[120px] flex flex-col gap-12 items-start lg:flex-row xl:gap-20">
        <div className="w-full lg:w-[300px] xl:w-[400px] lg:shrink-0 lg:sticky lg:top-[120px]">
          <h2 className="text-[36px] md:text-[46px] font-medium leading-[1.05] tracking-[-1.15px] text-foreground">
            Simple to deploy.
            <br />
            <span className="text-foreground/45">Built to scale.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.55] text-foreground/60">
            Built on more than a decade of mining experience. <strong className="font-bold text-foreground">Mobilaris Site™</strong> delivers value from day one, keeps complexity low and grows with your operation.
          </p>
          <div className="mt-10 hidden lg:block">
            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-expanded={isActive}
                  className={`block w-full text-left border-b border-foreground/10 pt-5 ${isActive ? "pb-0" : "pb-5"}`}
                >
                  <span className={`block text-[17px] font-medium transition-colors duration-300 ${isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/85"}`}>
                    {s.title}
                  </span>
                  <span
                    className="grid transition-[grid-template-rows,opacity] duration-500 ease-out"
                    style={{ gridTemplateRows: isActive ? "1fr" : "0fr", opacity: isActive ? 1 : 0 }}
                  >
                    <span className="overflow-hidden">
                      <span className="block pt-2.5 text-[15px] leading-[1.55] text-foreground/60">{s.description}</span>
                      <span className="mt-5 block h-[2px] w-full bg-foreground/10 overflow-hidden">
                        <span
                          className="block h-full bg-[#8e47f0] origin-left"
                          style={{ transform: `scaleX(${isActive ? progress : 0})` }}
                        />
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col gap-16 lg:gap-4">
          {cards.map((Card, i) => (
            <div key={i} ref={(el) => (cardRefs.current[i] = el)} className="flex flex-col gap-3 lg:gap-4">
              <div className="lg:hidden">
                <p className="text-[17px] font-medium text-foreground">{steps[i].title}</p>
                <p className="mt-2 text-[15px] leading-[1.55] text-foreground/60">{steps[i].description}</p>
              </div>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
