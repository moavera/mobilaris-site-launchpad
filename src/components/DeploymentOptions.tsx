import { Card } from "@/components/ui/card";
import { Cloud, Server } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";

export const DeploymentOptions = () => {
  return (
    <section id="deployment" className="py-20 bg-background scroll-mt-20 group">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Flexible Deployment Solutions</h2>
            <SectionShareButton sectionId="deployment" sectionName="Deployment" />
          </div>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deploy Mobilaris Site™ your way. Whether you need cloud agility or on-premises control, 
            we support both with standardized containers and unified authorization flows.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="mb-4">
                <Cloud className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-2xl font-bold mb-2">Cloud</h4>
              </div>
              <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc list-outside ml-5">
                <li className="pl-2">Deploy in minutes with zero infrastructure management</li>
                <li className="pl-2">Automatic updates and maintenance included</li>
                <li className="pl-2">Elastic scalability to handle traffic spikes</li>
                <li className="pl-2">Standardized OAuth 2.0 and SAML authentication</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="mb-4">
                <Server className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-2xl font-bold mb-2">On-Premises</h4>
              </div>
              <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc list-outside ml-5">
                <li className="pl-2">Full data sovereignty with complete control</li>
                <li className="pl-2">Docker containers for consistent deployments</li>
                <li className="pl-2">Integration with existing IT infrastructure</li>
                <li className="pl-2">Air-gapped installation support available</li>
                <li className="pl-2">Compatible with enterprise SSO and Active Directory</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
