import { Briefcase } from "lucide-react";
import axiansLogo from "@/assets/axians.png";

export const Partners = () => {
  const partners = [{
    name: "Axians",
    description: "Leading mining technology provider",
    logo: axiansLogo
  }, {
    name: "GlobalMine Solutions",
    description: "International mining operations",
    icon: Briefcase
  }];
  return <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Working together with leading organizations to revolutionize site management
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => {
          return <div key={index} className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Logo/Icon */}
                  <div className="mb-6 inline-flex items-center justify-center h-16">
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="h-12 w-auto object-contain" />
                    ) : (
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <partner.icon className="h-8 w-8 text-primary" />
                      </div>
                    )}
                  </div>

                  {/* Partner Info */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {partner.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              </div>;
        })}
        </div>
      </div>
    </section>;
};