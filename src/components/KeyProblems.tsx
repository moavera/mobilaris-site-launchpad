import { SectionShareButton } from "@/components/SectionShareButton";
import miningImage from "@/assets/mining-illustration.png";
import infrastructureImage from "@/assets/infrastructure-illustration.png";
import { cn } from "@/lib/utils";

const industries = [
  {
    n: "01",
    label: "Mining",
    copy: "Built for mining operations, Mobilaris Site delivers real-time insights across surface and underground environments, enhancing safety, coordination and site management.",
    image: miningImage,
  },
  {
    n: "02",
    label: "Critical infrastructure",
    copy: "Mobilaris Site gives real-time visibility across indoor, outdoor and tunnel sites, integrating with existing systems or helping select the best positioning approach.",
    image: infrastructureImage,
  },
];

export const KeyProblems = () => {
  return (
    <section
      id="challenges"
      className="group scroll-mt-20 bg-paper px-4 py-24 md:px-12 md:pb-[120px] md:pt-[160px] xl:px-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 md:gap-16">
        <div className="flex items-start gap-3">
          <h2 className="max-w-[900px] text-[34px] font-medium leading-[1.08] tracking-[-1.3px] text-ink md:text-[52px]">
            Built for complex industrial sites
          </h2>
          <SectionShareButton sectionId="challenges" sectionName="Challenges" />
        </div>

        <div className="flex flex-col gap-16 md:gap-28">
          {industries.map((industry, i) => {
            const flipped = i % 2 === 1;
            return (
              <div
                key={industry.n}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12 xl:gap-20"
              >
                <div className={cn("flex flex-col gap-4", flipped && "md:order-2")}>
                  <h3 className="text-[26px] font-medium tracking-[-0.4px] text-ink md:text-[32px]">
                    {industry.label}
                  </h3>
                  <p className="max-w-[460px] text-[16px] leading-[1.6] text-ink/[0.62]">
                    {industry.copy}
                  </p>
                </div>
                <div className={cn(flipped && "md:order-1")}>
                  <img
                    src={industry.image}
                    alt={industry.label}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
