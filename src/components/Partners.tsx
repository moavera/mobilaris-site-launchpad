import axiansLogo from "@/assets/axians.png";
import tpoLogo from "@/assets/tpo.jpeg";
export const Partners = () => {
  const partners = [{
    name: "Axians",
    description: "Leading mining technology provider",
    logo: axiansLogo
  }, {
    name: "TPO",
    description: "Technology partner",
    logo: tpoLogo
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
          
        </div>

        {/* Partners Logos */}
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 max-w-5xl mx-auto">
          {partners.map((partner, index) => <div key={index} className="flex flex-col items-center gap-6 animate-fade-in-up transition-transform duration-300" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Logo/Icon */}
              <div className="flex items-center justify-center h-40 w-64 relative">
                <img src={partner.logo} alt={partner.name} className="h-32 w-auto object-contain" />
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};