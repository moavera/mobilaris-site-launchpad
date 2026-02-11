import { Card } from "@/components/ui/card";
import { Shield, Database, FileCheck } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { SectionShareButton } from "@/components/SectionShareButton";

const problems = [
{
  icon: Shield,
  title: "Safety",
  description: "Ensure every worker returns home safely. Real-time location tracking prevents accidents and enables rapid emergency response."
},
{
  icon: Database,
  title: "Productivity",
  description: "Gain total control of your operations. Locate and manage thousands of assets in seconds, eliminate downtime caused by misplaced equipment, and optimize resource utilization across your site."
},
{
  icon: FileCheck,
  title: "Compliance",
  description: "Meet regulatory and industry standards effortlessly. Automated documentation and audit trails keep you compliant."
}];


export const KeyProblems = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false
  });

  return (
    <section id="challenges" className="py-20 bg-background scroll-mt-20 group">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Built for Complex Operations
            </h2>
            <SectionShareButton sectionId="challenges" sectionName="Challenges" />
          </div>
          


        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden -mx-4" ref={emblaRef}>
            <div className="flex gap-4 px-4">
              {problems.map((problem, index) =>
              <div
                key={index}
                className="flex-[0_0_85%] min-w-0">

                  <Card
                  className="p-8 h-full hover:shadow-elegant transition-all duration-300 border-border/50">

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
              )}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {}















          )}
        </div>
      </div>
    </section>);

};