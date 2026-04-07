const cards = [
  {
    title: "Limited visibility of personnel and assets",
    description: "Locating people, vehicles, and equipment quickly in large or complex environments is challenging, especially in urgent situations.",
  },
  {
    title: "Challenges in coordinating operations",
    description: "Without a shared real-time view, coordination is slower and less reliable.",
  },
  {
    title: "Delayed response to incidents and risks",
    description: "Limited visibility slows assessment and response during incidents.",
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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
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
