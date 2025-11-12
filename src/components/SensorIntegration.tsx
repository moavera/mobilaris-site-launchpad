import { Gauge, Thermometer, Wind, Droplet, Activity, Lightbulb, Settings, Fan, Zap, Camera, Database, Building, Wrench, AlertTriangle, Radio } from "lucide-react";
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

        {/* Environmental Sensors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Environmental Sensors</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Wind className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Air Quality
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Measure O₂, CO, NO₂, methane, CO₂, and dust particles (PM2.5/PM10) with map alerts
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
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Temperature & Humidity
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Detect heat stress or condensation risks across all zones
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Droplet className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Dust Level
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Monitor dust for worker safety and equipment maintenance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Light Level
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Automatic control of tunnel and area lighting
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety & Detection */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Safety & Detection</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Radio className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Gas Detectors
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Stationary or wearable gas detection with instant alerts
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Activity className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Vibration & Seismic
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Detect rock falls, blasts, or structural instability
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Industrial Systems */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Industrial Systems</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Machine Status
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      SCADA, OPC UA, MQTT monitoring for engine, fuel, speed, and errors
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Fan className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Ventilation Control
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Auto-adjust airflow via PLC/SCADA based on air quality or personnel
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Power & Energy
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Monitor substations, charging stations, and UPS devices
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      SCADA Systems
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Bidirectional data exchange for process and equipment data
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Monitoring & Integration */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Monitoring & Integration</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      CCTV & Thermal
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Visual confirmation of alarms or movements on the map
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      ERP Systems
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Link asset locations with maintenance or production data (SAP)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Maintenance Systems
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Locate equipment due for service (Maximo, Infor EAM)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <AlertTriangle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Incident Management
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Position-based alerts to safety or control room teams
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
