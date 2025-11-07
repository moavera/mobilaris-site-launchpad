import { Users, Package, Truck, Shield, AlertCircle, Gauge } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";
export const WhatWeTrack = () => {
  return <section id="what-we-track" className="py-20 md:py-32 bg-muted/30 scroll-mt-20 group">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              What We Track
            </h2>
            <SectionShareButton sectionId="what-we-track" sectionName="What We Track" />
          </div>
          
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* People Tracking */}
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="bg-primary/10 p-4 rounded-full w-fit">
                <Users className="h-8 w-8 text-primary" />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  People
                </h3>
                <p className="text-base text-muted-foreground mb-6">
                  Track work groups to meet legal requirements for knowing personnel locations underground
                </p>
                
                <div className="space-y-3">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div>
                      <p className="text-lg font-medium text-foreground mb-1">Normal Operations</p>
                      <p className="text-base text-muted-foreground">Group-level tracking with encrypted personal information</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-medium text-foreground mb-1">Emergency Response</p>
                        <p className="text-base text-muted-foreground">Unlock personal data for contact and rescue service visibility</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assets Tracking */}
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="bg-primary/10 p-4 rounded-full w-fit">
                <Package className="h-8 w-8 text-primary" />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Assets
                </h3>
                <p className="text-base text-muted-foreground mb-6">
                  Track any asset that matters to your operation, from regulatory requirements to custom needs
                </p>
                
                <div className="space-y-3">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-lg font-medium text-foreground mb-1">Gas Cylinders</p>
                    <p className="text-base text-muted-foreground">Meet legal tracking requirements</p>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-lg font-medium text-foreground mb-1">Custom Assets</p>
                    <p className="text-base text-muted-foreground">Track whatever your operation requires</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicles/Machines Tracking */}
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="bg-primary/10 p-4 rounded-full w-fit">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Vehicles & Machines
                </h3>
                <p className="text-base text-muted-foreground mb-6">
                  Monitor vehicle and machinery locations across your site in real-time
                </p>
                
                <div className="space-y-3">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="flex items-start gap-3">
                      <Truck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-medium text-foreground mb-1">Real-time Location</p>
                        <p className="text-base text-muted-foreground">Track all vehicles and machinery across your site</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto bg-card border border-border rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
              <Gauge className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Sensor Integration
              </h3>
              <p className="text-muted-foreground">
                Integrate sensors to monitor environmental factors like air quality, temperature and more. Get a complete view of your operational environment alongside your tracked people, assets, and vehicles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};