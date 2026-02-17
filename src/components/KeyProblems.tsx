import { ArrowRight } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";
import miningImage from "@/assets/mining-illustration.png";
import infrastructureImage from "@/assets/infrastructure-illustration.png";

const industries = [
  {
    label: "Mining",
    copy: "Mobilaris Site gives mining operations a shared real-time view of personnel, vehicles and critical assets – supporting safer coordination both above and below ground.",
    image: miningImage,
  },
  {
    label: "Critical infrastructure",
    copy: "Mobilaris Site supports complex industrial sites with a shared real-time view of people, assets and activity – helping teams maintain safety, coordination and operational control.",
    image: infrastructureImage,
  },
];

export const KeyProblems = () => {
  return (
    <section id="challenges" className="py-16 md:py-24 bg-background scroll-mt-20 group">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-5xl font-semibold">
              Built for complex industrial sites
            </h2>
            <SectionShareButton sectionId="challenges" sectionName="Challenges" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/30 bg-[#181A21] overflow-hidden transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">
                  {industry.label}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {industry.copy}
                </p>
              </div>
              <div className="px-4 pb-4">
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
