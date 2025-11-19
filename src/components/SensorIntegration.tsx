import { Gauge, Thermometer, Wind, Droplet, Radio, Settings, Fan, Puzzle } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";
import { Card, CardContent } from "@/components/ui/card";
export const SensorIntegration = () => {
  return <section id="sensor-integration" className="py-12 bg-background scroll-mt-20 group">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl font-bold text-foreground md:text-5xl">
              Sensor Integration
            </h2>
            <SectionShareButton sectionId="sensor-integration" sectionName="Sensor Integration" />
          </div>
          <p className="text-base text-muted-foreground">
            Monitor environmental factors alongside your tracked people and assets for a complete operational view
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Air Quality */}
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Wind className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Air Quality</h4>
                  <p className="text-muted-foreground text-sm">O₂, CO, NO₂, methane, CO₂, PM2.5/PM10</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Temperature & Humidity */}
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Thermometer className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Temperature & Humidity</h4>
                  <p className="text-muted-foreground text-sm">Heat stress and condensation detection</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dust Level */}
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Droplet className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Dust Level</h4>
                  <p className="text-muted-foreground text-sm">Worker safety and equipment monitoring</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gas Detectors */}
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Radio className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Gas Detectors</h4>
                  <p className="text-muted-foreground text-sm">Stationary and wearable detection</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Machine Status */}
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Machine Status</h4>
                  <p className="text-muted-foreground text-sm">SCADA, OPC UA, MQTT monitoring</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ventilation Control */}
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Fan className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Ventilation Control</h4>
                  <p className="text-muted-foreground text-sm">PLC/SCADA airflow automation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Custom */}
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Puzzle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Custom</h4>
                  <p className="text-muted-foreground text-sm">Integrate your own sensors and systems</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};