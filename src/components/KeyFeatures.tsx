import { ArrowRight } from "lucide-react";
import peopleAsset from "@/assets/people_workgroup_location_bild.png.asset.json";
import messagingAsset from "@/assets/Messaging_bild.png.asset.json";
import emergencyAsset from "@/assets/Emergency_bild.png.asset.json";
import assetAsset from "@/assets/asset_tracking_bild.png.asset.json";
import sensorAsset from "@/assets/sensor_integration_bild.png.asset.json";

/*
 * Image positions are percentages of each card's own width, taken from Figma
 * (row 1 cards 400 / 780 × 600, row 2 cards 386.67 × 540). Images are bottom
 * anchored, so they keep the same placement at every screen size.
 */
type Feature = {
  n: string;
  title: string;
  text: string;
  img: string;
  imgClass: string;
  wide?: boolean;
  narrow?: boolean;
};

const features: Feature[] = [
  {
    n: "01",
    title: "People & Workgroup Location",
    text: "Know who is where – and whether they are authorized. Connect a check-in station to personnel tags or your existing access control.",
    img: peopleAsset.url,
    imgClass: "left-[8%] w-[84%]",
    narrow: true,
  },
  {
    n: "02",
    title: "Messaging",
    text: "Reach the right people in the right zones – straight from the control room to the Companion GO™ app.",
    img: messagingAsset.url,
    // Mobile: centered so it fits the equal-size card; desktop: Figma placement.
    imgClass: "left-[8%] w-[84%] xl:left-[34.2%] xl:w-[49.2%]",
    wide: true,
  },
  {
    n: "03",
    title: "Emergency Support",
    text: "A live overview of people in hazardous areas and refuge chambers when every second counts.",
    img: emergencyAsset.url,
    imgClass: "right-0 w-[72.9%]",
  },
  {
    n: "04",
    title: "Asset Tracking",
    text: "Locate vehicles, tools and machinery in seconds – and turn search time into production.",
    img: assetAsset.url,
    imgClass: "left-[45.3%] w-[41.8%]",
  },
  {
    n: "05",
    title: "Sensor Integration",
    text: "Ventilation and gas alarms shown where they happen, together with who is nearby.",
    img: sensorAsset.url,
    imgClass: "left-[8.3%] w-[91.7%]",
  },
];

const FeatureCard = ({ f }: { f: Feature }) => (
  <div
    className={`relative w-full overflow-hidden rounded-[20px] border border-[rgba(20,19,23,0.05)] bg-[#f2f2f3] aspect-[386.67/540] ${
      f.wide ? "xl:aspect-auto xl:h-[600px] xl:col-span-4" : ""
    } ${f.narrow ? "xl:aspect-auto xl:h-[600px] xl:col-span-2" : ""} ${
      !f.wide && !f.narrow ? "xl:col-span-2 xl:row-start-2 xl:aspect-[386.67/540]" : ""
    }`}
  >
    <div className="relative z-10 flex flex-col gap-[10px] px-6 pt-6 md:px-8 md:pt-8">
      <p className="text-[13px] font-medium text-[rgba(20,19,23,0.4)]">{f.n}</p>
      <h3 className="text-[22px] md:text-[24px] font-medium tracking-[-0.24px] text-[#141317]">
        {f.title}
      </h3>
      <p className="text-[15px] leading-[1.55] text-[rgba(20,19,23,0.62)]">{f.text}</p>
      <span className="inline-flex items-center gap-[6px] pt-[6px] text-[14px] font-medium text-[#8e47f0]">
        Learn more <ArrowRight className="h-[14px] w-[14px]" />
      </span>
    </div>
    <img
      src={f.img}
      alt=""
      loading="lazy"
      decoding="async"
      className={`pointer-events-none absolute bottom-0 h-auto max-w-none ${f.imgClass}`}
    />
  </div>
);

export const KeyFeatures = () => (
  <section id="key-features" className="bg-white px-4 py-24 md:px-12 md:pt-[160px] md:pb-[120px] xl:px-[120px]">
    <div className="mx-auto flex max-w-[1200px] flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-5">
        <h2 className="max-w-[900px] text-[34px] md:text-[52px] font-medium leading-[1.08] tracking-[-1.3px] text-[#141317]">
          Modular by design.{" "}
          <span className="text-[rgba(20,19,23,0.42)]">
            Start with what you need – add the rest as your operation grows.
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-6">
        {features.map((f) => (
          <FeatureCard key={f.n} f={f} />
        ))}
      </div>
    </div>
  </section>
);
