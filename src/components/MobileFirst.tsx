import { Button } from "@/components/ui/button";
import mobileAppImage from "@/assets/mobile-app.png";
import { SectionShareButton } from "@/components/SectionShareButton";

export const MobileFirst = () => {
  return (
    <section id="mobile-access" className="py-20 bg-muted/30 scroll-mt-20 group">
      <div className="container mx-auto px-4">
        {/* Mobile First */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in-up">
          {/* Image */}
          <div className="relative flex justify-center">
            <img 
              src={mobileAppImage} 
              alt="Mobilaris Site mobile app showing gas cylinder tracking"
              className="h-auto w-64 md:w-72 rounded-3xl shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="text-left">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold">Mobile First Design!</h2>
              <SectionShareButton sectionId="mobile-access" sectionName="Mobile Access" />
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              Access Mobilaris Site™ from anywhere with our intuitive mobile app. Get real-time notifications, track assets, and manage safety protocols directly from your smartphone.
            </p>
            <ul className="text-lg text-muted-foreground space-y-2 list-disc list-inside mb-6">
              <li>Available for iOS and Android</li>
              <li>Real-time notifications and alerts</li>
              <li>Scan QR codes for quick asset information</li>
            </ul>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="mailto:support@mobilaris.se">
                Contact us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
