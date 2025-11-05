import { Shield, Users, AlertTriangle, Lock } from "lucide-react";

export const PrivacySection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Privacy-First Tracking
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            We believe in protecting worker privacy while maintaining safety capabilities when they matter most
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Normal Operations */}
          <div className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Normal Operations
                </h3>
                <p className="text-muted-foreground mb-4">
                  During regular work conditions
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">
                  <strong>Group-level tracking only</strong> - No individual identification
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">
                  Personal information remains <strong>encrypted and locked</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">
                  View positions by <strong>work groups and teams</strong>
                </span>
              </li>
            </ul>
          </div>

          {/* Emergency Situations */}
          <div className="bg-background border border-destructive/30 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-destructive/10 p-3 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Emergency Situations
                </h3>
                <p className="text-muted-foreground mb-4">
                  When lives are at risk
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-foreground">
                  <strong>Personal information unlocked</strong> by authorized personnel
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-foreground">
                  Enable direct contact with <strong>people in danger</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-foreground">
                  Rapid identification for <strong>evacuation and rescue</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
          <p className="text-foreground text-lg">
            <strong>Balance privacy with safety:</strong> Your workers' privacy is protected during normal operations, 
            but their safety comes first when emergencies strike.
          </p>
        </div>
      </div>
    </section>
  );
};
