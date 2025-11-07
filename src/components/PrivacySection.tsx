import { Shield, Users, AlertTriangle } from "lucide-react";

export const PrivacySection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Privacy-First Tracking
          </h2>
          <p className="text-lg text-muted-foreground">
            Protecting privacy while ensuring safety
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Normal Operations */}
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-md">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Normal Operations
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Group-level tracking only</li>
                  <li>Encrypted personal data</li>
                  <li>Team-based positioning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Emergency Situations */}
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-md">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-accent/10 p-4 rounded-full">
                <AlertTriangle className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Emergency Response
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Authorized data access</li>
                  <li>Direct contact enabled</li>
                  <li>Rapid rescue support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
