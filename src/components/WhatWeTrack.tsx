import { Users, Package, Shield, AlertCircle, Radio } from "lucide-react";
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
          <p className="text-lg text-muted-foreground">
            Comprehensive tracking solutions for people, assets, and machines
          </p>
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
                    Group-level tracking with encrypted personal information
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-destructive/10 p-4 rounded-full">
                  <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Emergency Response
                  </h3>
                  <p className="text-muted-foreground">
                    Unlock personal data for contact and rescue visibility
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
                    Assets & Machines
                  </h3>
                  <p className="text-muted-foreground">
                    Track gas cylinders, vehicles, machinery, and custom assets
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Radio className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Real-time Monitoring
                  </h3>
                  <p className="text-muted-foreground">
                    Live location tracking across your entire site
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};