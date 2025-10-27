import axiansLogo from "@/assets/axians.png";
import tpoLogo from "@/assets/tpo.jpeg";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Partners = () => {
  const partners = [
    {
      name: "Axians",
      description: "Leading mining technology provider",
      logo: axiansLogo,
      industry: "Mining Technology",
      partnership: "Technology Integration Partner"
    },
    {
      name: "TPO",
      description: "Technology partner",
      logo: tpoLogo,
      industry: "Industrial Solutions",
      partnership: "Strategic Partner"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-subtle">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
            Trusted Partnerships
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Working with industry leaders to deliver cutting-edge positioning solutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-elegant transition-all duration-500 animate-fade-in-up border-border/50 hover:scale-105 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Logo Container */}
              <div className="flex items-center justify-center h-32 mb-6 relative overflow-hidden rounded-lg bg-background/50 p-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Partner Info */}
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  {partner.name}
                </h3>

                <p className="text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground">
            Interested in partnership opportunities?{" "}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};