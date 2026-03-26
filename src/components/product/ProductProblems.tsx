import { MapPinOff, Radio, ShieldAlert, Users } from "lucide-react";

const problems = [
  {
    icon: MapPinOff,
    title: "You don't know where people and equipment are",
    description:
      "When someone asks 'Where is the loader?' or 'Who is in drift 4?', the answer is often a phone call, a guess, or silence. Time is wasted searching instead of working.",
  },
  {
    icon: Users,
    title: "Coordination depends on radio calls and assumptions",
    description:
      "Shift handovers, vehicle movements and work orders rely on word of mouth. Miscommunication leads to delays, conflicts and double work.",
  },
  {
    icon: ShieldAlert,
    title: "Safety incidents happen because of blind spots",
    description:
      "Without knowing who is in a hazardous area or near heavy equipment, you can't act fast enough. During emergencies, locating everyone takes too long.",
  },
  {
    icon: Radio,
    title: "Alarms and sensor data don't reach the right people",
    description:
      "Gas detectors, ventilation alerts and geofence breaches trigger notifications — but without location context, it's hard to know who is affected and how to respond.",
  },
];

export const ProductProblems = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            The problem
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Running a complex site without real-time visibility
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Large mining and industrial sites are high-risk, fast-moving environments. 
            When you lack a clear picture of what's happening on the ground, small problems quickly become big ones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/40 bg-card/50 p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
