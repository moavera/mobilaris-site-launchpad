import { Siren, Search, RadioTower, ShieldCheck, BarChart3 } from "lucide-react";

const useCases = [
  {
    icon: Siren,
    title: "Emergency response",
    description:
      "During an evacuation or incident, see exactly who is underground or in a risk zone. Know who has reached safety and who hasn't — in seconds, not minutes.",
    detail: "Muster lists update automatically. Rescue teams see live positions of missing persons.",
  },
  {
    icon: Search,
    title: "Finding people and equipment",
    description:
      "Locate a specific person, vehicle or tool instantly on the 3D map. No radio calls, no walking around. Just search and find.",
    detail: "Search by name, tag ID or equipment type. Get directions to the exact location.",
  },
  {
    icon: RadioTower,
    title: "Coordinating daily operations",
    description:
      "See where work crews are, which vehicles are active, and how traffic flows through your site. Plan and adjust in real time.",
    detail: "Shift supervisors and dispatchers share the same live view to coordinate work.",
  },
  {
    icon: ShieldCheck,
    title: "Monitoring restricted and hazardous areas",
    description:
      "Set up geofences around danger zones, blasting areas or restricted sections. Get alerts when someone enters who shouldn't be there.",
    detail: "Automatic notifications to control room and safety personnel when boundaries are crossed.",
  },
  {
    icon: BarChart3,
    title: "Understanding how your site is used",
    description:
      "Review historical movement data to see traffic patterns, bottlenecks and utilization. Make better decisions about where to place resources.",
    detail: "Heatmaps and travel-time reports based on actual positioning data.",
  },
];

export const ProductUseCases = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Use cases
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            What you can do with Mobilaris Site
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These are the scenarios our customers use every day — across mining operations, 
            tunnels, processing plants and large industrial facilities.
          </p>
        </div>

        <div className="space-y-6">
          {useCases.map((uc, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/40 bg-card/50 p-8 md:p-10 transition-all duration-300 hover:border-primary/30 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <uc.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">{uc.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    {uc.description}
                  </p>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">
                    {uc.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
