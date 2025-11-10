import { Users, Package, Truck, Shield, AlertCircle, Gauge, CheckCircle } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* People Tracking */}
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">People</CardTitle>
              <CardDescription className="text-base">
                Track work groups with privacy-first location monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Normal Operations</p>
                    <p className="text-sm text-muted-foreground">Group-level tracking with encrypted personal data</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Emergency Response</p>
                    <p className="text-sm text-muted-foreground">Unlock data for contact and rescue visibility</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Assets and Machines Tracking */}
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-2">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Assets and Machines</CardTitle>
              <CardDescription className="text-base">
                Track everything that matters to your operation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Gas Cylinders</p>
                    <p className="text-sm text-muted-foreground">Meet legal tracking requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Vehicles & Machinery</p>
                    <p className="text-sm text-muted-foreground">Real-time location monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Custom Assets</p>
                    <p className="text-sm text-muted-foreground">Track any operational requirement</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};