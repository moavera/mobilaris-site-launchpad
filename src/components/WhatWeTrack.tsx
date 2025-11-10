import { Users, Package, Truck, Settings } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";
import { Card, CardContent } from "@/components/ui/card";
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

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    People
                  </h3>
                  <p className="text-muted-foreground">
                    Track work groups with privacy-first location monitoring
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Assets
                  </h3>
                  <p className="text-muted-foreground">
                    Monitor gas cylinders and critical equipment
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Machines & Vehicles
                  </h3>
                  <p className="text-muted-foreground">Real-time location tracking of machinery</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Custom
                  </h3>
                  <p className="text-muted-foreground">
                    Track any operational asset you need
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};