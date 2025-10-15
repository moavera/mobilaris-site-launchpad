import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Cloud, Server } from "lucide-react";
import mobileAppImage from "@/assets/mobile-app.png";

export const MobileFirst = () => {
  return (
    <section className="py-20 bg-muted/30">
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
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-12 h-12 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">Mobile First Design!</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              Access Mobilaris Site™ from anywhere with our intuitive mobile app. Get real-time notifications, track assets, and manage safety protocols directly from your smartphone.
            </p>
            <ul className="text-lg text-muted-foreground space-y-2 list-disc list-inside mb-6">
              <li>Available for iOS and Android</li>
              <li>Real-time notifications and alerts</li>
              <li>Scan QR codes for quick asset information</li>
            </ul>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Try now
            </Button>
          </div>
        </div>

        {/* Deployment Options */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Choose Your Deployment</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="mb-4">
                <Cloud className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-2xl font-bold mb-2">Cloud</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Quick deployment, automatic updates, and scalable infrastructure. 
                Get started in minutes with our secure cloud solution.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="mb-4">
                <Server className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-2xl font-bold mb-2">On-Premises</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Complete control over your data with on-site hosting. 
                Perfect for organizations with strict data sovereignty requirements.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
