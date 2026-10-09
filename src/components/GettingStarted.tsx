import { Tag, Map, Radio } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";

const steps = [
  {
    n: "01",
    icon: Radio,
    title: "Leverage what you already have",
    description:
      "Start fast by using your current Wi-Fi network or other available signals for positioning.",
  },
  {
    n: "02",
    icon: Tag,
    title: "Add precision where needed",
    description:
      "Extend coverage with BLE, UWB, GPS, or hybrid options for higher accuracy in critical zones.",
  },
  {
    n: "03",
    icon: Map,
    title: "Import your site map",
    description:
      "Upload your layout and begin visualizing people, vehicles, and assets in real time.",
  },
];

export const GettingStarted = () => {
  return (
    <section
      id="getting-started"
      className="group scroll-mt-20 bg-paper px-4 py-24 md:px-12 md:pb-[120px] md:pt-[160px] xl:px-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 md:gap-16">
        <div className="flex items-start gap-3">
          <h2 className="max-w-[900px] text-[34px] font-medium leading-[1.08] tracking-[-1.3px] text-ink md:text-[52px]">
            What do I need?{" "}
            <span className="text-ink/[0.42]">Ready to get started? Only 3 simple steps:</span>
          </h2>
          <SectionShareButton sectionId="getting-started" sectionName="Getting Started" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-[10px] rounded-[20px] border border-ink/5 bg-card-light p-6 md:p-8"
            >
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-medium text-ink/40">{step.n}</p>
                <step.icon className="h-[18px] w-[18px] text-brand" strokeWidth={1.75} />
              </div>
              <h3 className="text-[20px] font-medium tracking-[-0.24px] text-ink md:text-[22px]">
                {step.title}
              </h3>
              <p className="text-[15px] leading-[1.55] text-ink/[0.62]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
