const steps = [
  {
    number: "01",
    title: "Positioning data comes in",
    description:
      "Tags on people and equipment send their position via the technologies already deployed on your site — WiFi, BLE, UWB, GPS, or others. Mobilaris Site collects and combines all of it.",
  },
  {
    number: "02",
    title: "Everything appears on the 3D map",
    description:
      "A detailed 3D model of your site — including underground levels, buildings and outdoor areas — shows every tracked object in real time. The map updates continuously.",
  },
  {
    number: "03",
    title: "You act on what you see",
    description:
      "Search for a person, check who is in a zone, trigger an evacuation, or review historical movements. The interface is built for operators and managers who need fast answers, not technical expertise.",
  },
];

export const ProductHowItWorks = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Simple to understand, powerful to use
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-6xl md:text-7xl font-bold text-primary/10 block mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
