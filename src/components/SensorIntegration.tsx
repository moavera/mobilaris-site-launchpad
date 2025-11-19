import { Gauge, Thermometer, Wind, Droplet, Activity, Lightbulb, Settings, Fan, Zap, Camera, Database, Building, Wrench, AlertTriangle, Radio } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";
import { Card, CardContent } from "@/components/ui/card";

export const SensorIntegration = () => {
  return (
    <section id="sensor-integration" className="py-12 bg-background scroll-mt-20 group">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sensor Integration
            </h2>
            <SectionShareButton sectionId="sensor-integration" sectionName="Sensor Integration" />
          </div>
          <p className="text-base text-muted-foreground">
            Monitor environmental factors alongside your tracked people and assets for a complete operational view
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {/* Environmental Sensors */}
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Air Quality</h4>
                  <p className="text-muted-foreground text-xs">O₂, CO, NO₂, methane, CO₂, PM2.5/PM10</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Temperature & Humidity</h4>
                  <p className="text-muted-foreground text-xs">Heat stress and condensation detection</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Droplet className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Dust Level</h4>
                  <p className="text-muted-foreground text-xs">Worker safety and equipment monitoring</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Light Level</h4>
                  <p className="text-muted-foreground text-xs">Automatic tunnel lighting control</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety & Detection */}
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Radio className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Gas Detectors</h4>
                  <p className="text-muted-foreground text-xs">Stationary and wearable detection</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Vibration & Seismic</h4>
                  <p className="text-muted-foreground text-xs">Rock falls and structural monitoring</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Industrial Systems */}
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Machine Status</h4>
                  <p className="text-muted-foreground text-xs">SCADA, OPC UA, MQTT monitoring</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Fan className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Ventilation Control</h4>
                  <p className="text-muted-foreground text-xs">PLC/SCADA airflow automation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Power & Energy</h4>
                  <p className="text-muted-foreground text-xs">Substations and charging stations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">SCADA Systems</h4>
                  <p className="text-muted-foreground text-xs">Bidirectional data exchange</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monitoring & Integration */}
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">CCTV & Thermal</h4>
                  <p className="text-muted-foreground text-xs">Visual alarm confirmation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">ERP Systems</h4>
                  <p className="text-muted-foreground text-xs">SAP integration and asset tracking</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Maintenance Systems</h4>
                  <p className="text-muted-foreground text-xs">Maximo and Infor EAM integration</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Incident Management</h4>
                  <p className="text-muted-foreground text-xs">Position-based alerts to control rooms</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
