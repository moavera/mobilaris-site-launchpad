import { Card } from "@/components/ui/card";
import { Clock, Layers, Gauge, Database } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Timely information for everyone",
    description: "Our solutions ensure that critical information is available to those who need it the most, at the right time.",
  },
  {
    icon: Layers,
    title: "Open and future proof",
    description: "Scalable solutions built to fit any operations, on top of any systems already in place, or to be added in the future.",
  },
  {
    icon: Gauge,
    title: "Effortless to use",
    description: "Information clearly visualized and understandable without translation or interpretation. Easy to use and understand.",
  },
  {
    icon: Database,
    title: "Data-driven decisions",
    description: "With easy access to reliable data, our solutions enable better decisions based on facts instead of guesses.",
  },
];

export const ProductIntro = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Introducing Mobilaris Site™
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            Real-time site coordination and decision support solutions for real industry needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our Site™ platform delivers real-time positioning intelligence of anything you need to track, 
            boosting operational efficiency, reducing costs, and enhancing worker safety. The platform is 
            technology-agnostic, seamlessly integrating multiple technologies, sources, and systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
