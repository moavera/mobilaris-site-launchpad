import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";
import techAsset from "@/assets/card-technology-agnostic.png.asset.json";
import valueAsset from "@/assets/card-value-from-day-one.png.asset.json";
import anywhereAsset from "@/assets/card-anywhere-you-work.png.asset.json";

const steps = [
  { title: "Technology-agnostic", description: "Works with the Wi‑Fi, LTE, BLE, GPS and UWB you already have. No rip-and-replace." },
  { title: "Value from day one", description: "Up and running fast – no big upfront project and no dedicated control room required." },
  { title: "Modular by design", description: "Start with the features you need and add more as your operation evolves." },
  { title: "Anywhere you work", description: "In the control room, on a tablet or in your pocket – the Companion GO™ app brings the live map to people on the move." },
  { title: "Privacy on your terms", description: "Adapts to your company’s privacy policy – show who is where at all times, or keep everyone anonymous until an emergency." },
];

const cardBase = "relative w-full overflow-hidden rounded-[20px] border border-foreground/[0.08] bg-[#131216] min-h-[440px] md:h-[520px]";
const caption = "text-[14px] text-foreground/45 text-center";

const CardTech = () => (
  <div className={cardBase}>
    <img src={techAsset.url} alt="Technology-agnostic: connect what you have, add what you need" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
  </div>
);

const CardValue = () => (
  <div className={cardBase}>
    <img src={valueAsset.url} alt="Live map in Mobilaris Site" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
  </div>
);

const modules = [
  { label: "People & Workgroup", active: true },
  { label: "Messaging", active: true },
  { label: "Emergency Support", active: true },
  { label: "Asset Tracking" },
  { label: "Sensor Integration" },
];

const CardModular = () => (
  <div className={`${cardBase} flex flex-col items-center justify-center gap-8 px-6 md:px-12 py-12`}>
    <div className="flex flex-wrap justify-center gap-3 max-w-[534px]">
      {modules.map((m) =>
        m.active ? (
          <div key={m.label} className="flex h-[108px] w-[150px] sm:w-[170px] flex-col justify-between rounded-[14px] border border-foreground/50 bg-foreground/[0.08] p-4">
            <div className="flex items-center gap-[7px]">
              <span className="size-2.5 rounded-full bg-[#4ade80]" />
              <span className="text-[12px] font-medium text-foreground/50">Active</span>
            </div>
            <p className="text-[15px] font-medium leading-[1.25] text-foreground">{m.label}</p>
          </div>
        ) : (
          <div key={m.label} className="flex h-[108px] w-[150px] sm:w-[170px] flex-col justify-between rounded-[14px] border border-dashed border-foreground/[0.18] bg-foreground/[0.02] p-4">
            <div className="flex items-center justify-between">
              <span className="size-2.5 rounded-full border border-foreground/30" />
              <span className="text-[12px] font-medium text-foreground/50">+ Add</span>
            </div>
            <p className="text-[15px] font-medium leading-[1.25] text-foreground/55">{m.label}</p>
          </div>
        ),
      )}
    </div>
    <p className={caption}>Start with what you need – add modules as your operation grows.</p>
  </div>
);

const CardAnywhere = () => (
  <div className={cardBase}>
    <img src={anywhereAsset.url} alt="Mobilaris Site on desktop and the Companion GO™ app" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
  </div>
);

const people = [
  { name: "Anonymous · Tag 4F21", place: "Level 420 · Area 22" },
  { name: "Anonymous · Tag 7A03", place: "Workshop" },
  { name: "Michael S. – Tag 3E02", place: "Level 380 · Refuge chamber", alarm: true },
  { name: "Anonymous · Tag 91B4", place: "Above ground · Building 2" },
];

const CardPrivacy = () => (
  <div className={`${cardBase} flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-12`}>
    <div className="w-full max-w-[480px] overflow-hidden rounded-[14px] border border-foreground/[0.08] bg-[rgba(14,13,17,0.6)]">
      {people.map((p, i) => (
        <div key={p.name} className={`flex items-center gap-[14px] px-[18px] py-4 ${i ? "border-t border-foreground/[0.06]" : ""} ${p.alarm ? "bg-foreground/[0.05]" : ""}`}>
          <div className={`flex size-8 shrink-0 items-center justify-center rounded-full text-[12px] font-medium ${p.alarm ? "bg-[rgba(151,79,244,0.5)] text-foreground" : "bg-foreground/[0.06] text-foreground/50"}`}>
            {p.alarm ? "MS" : "?"}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
            <p className={`text-[14px] font-medium ${p.alarm ? "text-foreground" : "text-foreground/85"}`}>{p.name}</p>
            <p className="text-[12px] text-foreground/45">{p.place}</p>
          </div>
          {p.alarm ? (
            <span className="rounded-full bg-[#f04763] px-2.5 py-[5px] text-[12px] font-medium text-foreground">Alarm</span>
          ) : (
            <Lock className="size-4 text-foreground/40" />
          )}
        </div>
      ))}
    </div>
    <p className={`${caption} max-w-[480px]`}>Set visibility to match your privacy policy. Here: anonymous by default, identified only in an emergency.</p>
  </div>
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
      <div className="rounded-[28px] bg-surface px-6 pt-16 pb-16 md:pl-[96px] md:pr-[56px] md:pt-[120px] md:pb-[120px] flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        <div className="w-full lg:w-[400px] lg:shrink-0 lg:sticky lg:top-[120px]">
          <h2 className="text-[36px] md:text-[46px] font-medium leading-[1.05] tracking-[-1.15px] text-foreground">
            Simple to deploy.
            <br />
            <span className="text-foreground/45">Built to scale.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.55] text-foreground/60">
            Built on more than a decade of mining experience. <strong className="font-bold text-foreground">Mobilaris Site™</strong> delivers value from day one, keeps complexity low and grows with your operation.
          </p>
          <div className="mt-10">
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

        <div className="flex w-full min-w-0 flex-1 flex-col gap-4">
          {cards.map((Card, i) => (
            <div key={i} ref={(el) => (cardRefs.current[i] = el)}>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
