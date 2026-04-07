const cards = [
  {
    title: "Limited visibility of personnel",
    description: "It can be difficult to quickly locate personnel across large or complex environments, especially in time-critical situations.",
  },
  {
    title: "Inefficient coordination",
    description: "Without a shared real-time view, teams rely on manual communication, which can lead to delays and misalignment.",
  },
  {
    title: "Delayed incident response",
    description: "Limited visibility makes it harder to assess situations and respond effectively when incidents occur.",
  },
  {
    title: "Limited asset overview",
    description: "Vehicles and equipment are distributed across the site, making them difficult to locate and manage efficiently.",
  },
];

export const RiskSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Lack of real-time visibility creates risk
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Managing complex industrial sites without real-time insight makes it harder to keep people safe, coordinate work and respond to incidents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl bg-secondary/60 p-8 flex flex-col gap-4"
            >
              <h3 className="text-xl font-semibold leading-snug">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export const RiskSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Lack of real-time visibility creates risk
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Managing complex industrial sites without real-time insight makes it harder to keep people safe, coordinate work and respond to incidents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/30 bg-card/50 p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
