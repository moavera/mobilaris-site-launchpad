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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Working together with leading organizations to revolutionize site management
          </p>
        </div>

        {/* Partners Logos */}
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center gap-6 animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Logo/Icon */}
              <div className="flex items-center justify-center h-32 w-48 relative">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-24 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                ) : (
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                    <partner.icon className="h-14 w-14 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                )}
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Partner Info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};