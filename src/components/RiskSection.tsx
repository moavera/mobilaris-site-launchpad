import riskCard1Image from "@/assets/risk-card-1.png";
import riskCard2Image from "@/assets/risk-card-2.png";
import riskCard3Image from "@/assets/risk-card-3.png";

const cards = [
  {
    title: "Limited visibility of personnel and assets",
    description: "Quickly locating people, vehicles and equipment in complex environments is challenging.",
    image: riskCard1Image,
  },
  {
    title: "Challenges in coordinating operations",
    description: "Without a shared real-time view, coordination is slower and less reliable.",
    image: riskCard2Image,
  },
  {
    title: "Delayed response to incidents and risks",
    description: "Limited visibility slows assessment and response during incidents.",
    image: riskCard3Image,
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
              className="rounded-2xl bg-secondary/60 overflow-hidden flex flex-col"
            >
              <div className="p-8 flex flex-col gap-4">
                <h3 className="text-xl font-semibold leading-snug">{card.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
              {card.image && (
                <div className="mt-auto px-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
