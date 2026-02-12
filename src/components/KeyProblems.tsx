import { ArrowRight } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";
import miningImage from "@/assets/mining-illustration.png";
import infrastructureImage from "@/assets/infrastructure-illustration.png";

const industries = [
  {
    label: "Mining",
    copy: "Mobilaris Site gives mining operations full real-time visibility of personnel, vehicles, and critical assets – both above and below ground.",
    image: miningImage,
  },
  {
    label: "Critical infrastructure",
    copy: "For factories, energy facilities and other complex industrial sites that require high levels of safety, coordination and operational control.",
    image: infrastructureImage,
  },
];

export const KeyProblems = () => {
  return (
    <section id="challenges" className="py-16 md:py-24 bg-background scroll-mt-20 group">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Built for Complex Operations
            </h2>
            <SectionShareButton sectionId="challenges" sectionName="Challenges" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/30 bg-[#232426] overflow-hidden transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">
                  {industry.label}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {industry.copy}
                </p>
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-2 text-white font-semibold underline decoration-primary decoration-2 underline-offset-8 hover:gap-3 transition-all duration-200"
                >
                  Explore solutions
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div className="px-4 pb-0">
                <img
                  src={industry.image}
                  alt={industry.label}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
