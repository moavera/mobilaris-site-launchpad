import { Card } from "@/components/ui/card";
import { Wifi, Tag, Map, Radio } from "lucide-react";

const steps = [
  {
    icon: Radio,
    number: "1",
    title: "Choose your positioning technology",
    description: "WiFi, BLE, GPS, UWB, or a combination — deploy using existing infrastructure or add what you need.",
  },
  {
    icon: Tag,
    number: "2",
    title: "Order tags easily",
    description: "Simple tag ordering process. We'll help you get the right tags for your assets.",
  },
  {
    icon: Map,
    number: "3",
    title: "Import your site map",
    description: "Upload your site layout and you're ready to go. It's that simple!",
  },
];

export const GettingStarted = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What do I need?
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Ready to get started? Only 3 simple steps:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50 relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
              </div>
              <div className="mt-8 mb-4">
                <step.icon className="w-12 h-12 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Technology Note */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/5 border border-primary/20">
            <Wifi className="h-5 w-5 text-primary" />
            <p className="text-sm md:text-base text-foreground/80">
              <span className="font-semibold text-primary">Quick deployment option:</span> Leverage your existing WiFi infrastructure for easy setup
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
