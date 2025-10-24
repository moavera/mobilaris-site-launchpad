export const Partners = () => {
  const partners = [
    { name: "Partner 1", id: 1 },
    { name: "Partner 2", id: 2 },
    { name: "Partner 3", id: 3 },
    { name: "Partner 4", id: 4 },
    { name: "Partner 5", id: 5 },
    { name: "Partner 6", id: 6 },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the leading organizations that rely on our solutions for their critical operations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-primary/60">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
