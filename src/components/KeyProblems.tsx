import { Card } from "@/components/ui/card";
import { Shield, Database, FileCheck } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { SectionShareButton } from "@/components/SectionShareButton";

const problems = [
  {
    icon: Shield,
    title: "Safety",
    description: "Ensure every worker returns home safely. Real-time location tracking prevents accidents and enables rapid emergency response.",
  },
  {
    icon: Database,
    title: "Operational Efficiency",
    description: "Gain total control of your operations. Locate and manage thousands of assets in seconds, eliminate downtime caused by misplaced equipment, and optimize resource utilization across your site.",
  },
  {
    icon: FileCheck,
    title: "Compliance with Legal Requirements",
    description: "Meet AFS regulations and industry standards effortlessly. Automated documentation and audit trails keep you compliant.",
  },
];

export const KeyProblems = () => {
  const [emblaRef] = useEmblaCarousel({ 
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false
  });

  return (
    <section id="challenges" className="py-32 scroll-mt-20 group">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Solving Your Biggest Challenges
            </h2>
            <SectionShareButton sectionId="challenges" sectionName="Challenges" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three critical problems that Mobilaris Site™ addresses for industrial operations
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden -mx-4" ref={emblaRef}>
            <div className="flex gap-4 px-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_85%] min-w-0"
                >
                  <Card className="p-8 h-full border-border">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <problem.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {problem.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-8 border-border hover:border-primary/30 transition-colors"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};