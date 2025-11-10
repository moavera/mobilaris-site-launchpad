import { Gauge, Thermometer, Wind, Droplet } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";
import { Card, CardContent } from "@/components/ui/card";

export const SensorIntegration = () => {
  return (
    <section id="sensor-integration" className="py-20 md:py-32 bg-background scroll-mt-20 group">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Sensor Integration
            </h2>
            <SectionShareButton sectionId="sensor-integration" sectionName="Sensor Integration" />
          </div>
          <p className="text-lg text-muted-foreground">
            Monitor environmental factors alongside your tracked people and assets for a complete operational view
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Wind className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Air Quality
                  </h3>
                  <p className="text-muted-foreground">
                    Track air composition and quality in real-time
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Thermometer className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Temperature
                  </h3>
                  <p className="text-muted-foreground">
                    Monitor temperature across all zones
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Gauge className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Custom Sensors
                  </h3>
                  <p className="text-muted-foreground">
                    Integrate any environmental sensor you need
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
