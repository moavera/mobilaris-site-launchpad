import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import assetTrackingImage from "@/assets/asset-tracking.jpg";
import workersSafetyImage from "@/assets/workers-safety.jpg";
import evacuationSupportImage from "@/assets/evacuation-support.jpg";

const solutions = [
  {
    title: "Asset Tracking",
    description: "Instant tracking of critical assets, allowing you to reduce time wasted on searching and ensure production stays on schedule—all with just one click.",
    image: assetTrackingImage,
  },
  {
    title: "People & Workgroup Location",
    description: "Location-based insights and seamless site coordination. Ensure the safety of employees, optimize workflows and prevent unauthorized access.",
    image: workersSafetyImage,
  },
  {
    title: "Evacuation Support",
    description: "Faster and safer evacuations. Follow the emergency progress in real-time and see the location of people in need of urgent assistance.",
    image: evacuationSupportImage,
  },
];

export const Solutions = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Turn real-time location data into operational excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:bg-transparent">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
