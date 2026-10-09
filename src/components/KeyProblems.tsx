import { SectionShareButton } from "@/components/SectionShareButton";
import miningImage from "@/assets/mining-illustration.png";
import infrastructureImage from "@/assets/infrastructure-illustration.png";

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

        <div className="grid gap-5 md:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry.n}
              className="flex flex-col overflow-hidden rounded-[28px] bg-surface"
            >
              <div className="flex flex-col gap-[10px] px-6 pt-6 md:px-8 md:pt-8">
                <p className="text-[13px] font-medium text-foreground/40">{industry.n}</p>
                <h3 className="text-[22px] font-medium tracking-[-0.24px] text-foreground md:text-[24px]">
                  {industry.label}
                </h3>
                <p className="text-[15px] leading-[1.55] text-foreground/60">{industry.copy}</p>
              </div>
              <img
                src={industry.image}
                alt={industry.label}
                loading="lazy"
                decoding="async"
                className="mt-8 h-auto w-full md:mt-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
