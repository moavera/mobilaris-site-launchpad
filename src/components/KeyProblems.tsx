import { Card } from "@/components/ui/card";
import { Shield, Database, FileCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Solving Your Biggest Challenges
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Three critical problems that Mobilaris Site™ addresses for industrial operations
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <div className="hidden md:flex justify-end gap-2 mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <Card 
                    className="p-8 h-full hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                        <problem.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
