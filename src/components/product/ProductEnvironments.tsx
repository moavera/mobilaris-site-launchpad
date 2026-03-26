import { Mountain, Pickaxe } from "lucide-react";

const environments = [
  {
    icon: Pickaxe,
    title: "Underground mining",
    points: [
      "Track people and vehicles across multiple levels and drifts",
      "Support evacuations with real-time muster information",
      "Works with LTE, WiFi, BLE and other underground positioning systems",
    ],
  },
  {
    icon: Mountain,
    title: "Surface and industrial sites",
    points: [
      "Cover large outdoor areas, buildings and tunnel entrances",
      "Combine GPS, WiFi and indoor positioning into one view",
      "Monitor contractor access, vehicle traffic and restricted zones",
    ],
  },
];

export const ProductEnvironments = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Works everywhere
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            One platform for underground and above ground
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mobilaris Site handles both environments in a single system. No need for separate tools or switching between applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {environments.map((env, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-8 md:p-10"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <env.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">{env.title}</h3>
              <ul className="space-y-4">
                {env.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
