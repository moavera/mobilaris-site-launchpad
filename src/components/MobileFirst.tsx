import { Button } from "@/components/ui/button";
import mobileAppImage from "@/assets/mobile-app.png";
import { SectionShareButton } from "@/components/SectionShareButton";

export const MobileFirst = () => {
  return (
    <section id="mobile-access" className="py-32 border-t border-border scroll-mt-20 group">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-left order-2 md:order-1">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Mobile First Design</h2>
              <SectionShareButton sectionId="mobile-access" sectionName="Mobile Access" />
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Access Mobilaris Site™ from anywhere with our intuitive mobile app. Get real-time notifications, track assets, and manage safety protocols directly from your smartphone.
            </p>
            <ul className="text-base text-muted-foreground space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">→</span>
                <span>Available for iOS and Android</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">→</span>
                <span>Real-time notifications and alerts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">→</span>
                <span>Scan QR codes for quick asset information</span>
              </li>
            </ul>
            <Button size="lg" className="rounded-full" asChild>
              <a href="mailto:support@mobilaris.se">
                Contact us
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <img 
              src={mobileAppImage} 
              alt="Mobilaris Site mobile app showing gas cylinder tracking"
              className="h-auto w-64 md:w-80 rounded-2xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
