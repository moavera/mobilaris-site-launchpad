import { Card } from "@/components/ui/card";
import { Shield, Database, FileCheck } from "lucide-react";

const problems = [
  {
    icon: Shield,
    title: "Safety",
    description: "Ensure every worker returns home safely. Real-time location tracking prevents accidents and enables rapid emergency response.",
  },
  {
    icon: Database,
    title: "Gas Cylinders",
    description: "Gain total control of your operations. Locate and manage thousands of assets in seconds, eliminate downtime caused by misplaced equipment, and optimize resource utilization across your site.",
  },
  {
    icon: FileCheck,
    title: "Compliance with Legal Requirements",
    description: "Meet AFS regulations and industry standards effortlessly. Automated documentation and audit trails keep you compliant.",
  },
];

export const KeyProblems = () => {
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50"
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
          ))}
        </div>
      </div>
    </section>
  );
};
