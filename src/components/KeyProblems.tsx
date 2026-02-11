import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Database, FileCheck, ArrowRight, Mountain, Factory } from "lucide-react";
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

const industries = [
  {
    icon: Mountain,
    label: "Mining",
    headline: "Built for complex mining environments",
    copy: "Mobilaris Site gives mining operations full real-time visibility of personnel, vehicles, and critical assets – both above and below ground.",
    benefits: [
      "Real-time positioning underground",
      "Evacuation and incident support",
      "Improved safety and risk reduction",
      "More efficient production and planning",
    ],
  },
  {
    icon: Factory,
    label: "Critical Infrastructure",
    headline: "Designed for demanding industrial sites",
    copy: "For factories, energy facilities and other complex industrial sites that require high levels of safety, coordination and operational control.",
    benefits: [
      "Coordination of people and vehicles",
      "Improved compliance and work environment",
      "Faster operational decision-making",
      "Reduced downtime",
    ],
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
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-8 h-full transition-all duration-300 border-border/50">
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
          ))}
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="p-8 md:p-10 border-border/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <industry.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {industry.label}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {industry.headline}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {industry.copy}
              </p>
              <ul className="space-y-2">
                {industry.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Button size="lg" className="text-base px-6" asChild>
            <a href="#solutions">
              Explore our solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>);
};
