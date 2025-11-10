import { Shield, Users, AlertTriangle } from "lucide-react";
export const PrivacySection = () => {
  return <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Privacy-First Tracking
          </h2>
          <p className="text-lg text-muted-foreground">Protecting worker privacy while maintaining safety when it matters most</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Normal Operations */}
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-md">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Normal Operations
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  In day-to-day operations, worker privacy is our priority. We track work groups rather than individuals, with all personal information encrypted and inaccessible to supervisors.
                </p>
                
              </div>
            </div>
          </div>

          {/* Emergency Situations */}
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-md">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-destructive/10 p-4 rounded-full">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Emergency Response
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  When critical situations occur—such as accidents, evacuations, or missing persons—authorized personnel can unlock personal information to enable direct contact and ensure worker safety.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 text-center">
          <p className="text-muted-foreground">
             Worker privacy is protected during normal operations, but safety comes first when emergencies strike.
          </p>
        </div>
      </div>
    </section>;
};