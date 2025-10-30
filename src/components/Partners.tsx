import axiansLogo from "@/assets/axians.png";
import tpoLogo from "@/assets/tpo.jpeg";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionShareButton } from "@/components/SectionShareButton";
export const Partners = () => {
  const partners = [{
    name: "Axians",
    description: "Infrastructure partner",
    logo: axiansLogo,
    industry: "Mining Technology",
    partnership: "Technology Integration Partner"
  }, {
    name: "TPO",
    description: "Infrastructure partner",
    logo: tpoLogo,
    industry: "Industrial Solutions",
    partnership: "Strategic Partner"
  }];
  return <section id="partners" className="py-32 border-t border-border scroll-mt-20 group">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our Partners
            </h2>
            <SectionShareButton sectionId="partners" sectionName="Partners" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Working with industry leaders to deliver cutting-edge positioning solutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, index) => <Card key={index} className="p-12 border-border">
              {/* Logo Container */}
              <div className="flex items-center justify-center h-24 mb-6">
                <img src={partner.logo} alt={partner.name} className="h-full w-auto object-contain opacity-80" />
              </div>

              {/* Partner Info */}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">
                  {partner.name}
                </h3>

                <p className="text-muted-foreground text-base">
                  {partner.description}
                </p>
              </div>
            </Card>)}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Interested in partnership opportunities?{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>;
};