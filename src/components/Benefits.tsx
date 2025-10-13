import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Zap, Users } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Boost Operational Efficiency",
    description: "Streamline workflows and reduce downtime with real-time insights into asset and personnel locations.",
  },
  {
    icon: Shield,
    title: "Enhance Worker Safety",
    description: "Protect your workforce with instant location awareness and emergency response capabilities.",
  },
  {
    icon: Zap,
    title: "Reduce Costs",
    description: "Minimize wasted time and resources by eliminating search efforts and optimizing resource allocation.",
  },
  {
    icon: Users,
    title: "Improve Coordination",
    description: "Enable seamless collaboration across teams with shared, real-time situational awareness.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Turn real-time location data into operational excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Optimize operational efficiency and workforce safety by turning location-based data into 
            actionable insights. Through enhanced transparency and site awareness, Mobilaris Site™ enables 
            the next level of operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
