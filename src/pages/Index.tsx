import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, Zap, ChevronRight } from "lucide-react";
import mobilarisLogo from "@/assets/mobilaris-industrial.png";
import sitePreview from "@/assets/dashboard-preview.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img src={mobilarisLogo} alt="Mobilaris Industrial Solutions" className="h-10 md:h-12 w-auto" />
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <a href="/site">Products</a>
            </Button>
            <Button asChild>
              <a href="mailto:support@mobilaris.se">Contact</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">Industrial Solutions</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[1.05] tracking-tight">
              Making industrial sites <span className="text-primary">safer and smarter</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Real-time positioning technology that transforms how you manage people, vehicles, and assets in complex industrial environments
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="/site">
                  Explore Mobilaris Site™
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <a href="mailto:support@mobilaris.se">
                  Contact Sales
                </a>
              </Button>
            </div>

            {/* Featured Product Preview */}
            <div className="relative group">
              <a href="/site" className="block">
                <div 
                  className="relative rounded-xl overflow-hidden border border-border/50 transition-all duration-500 hover:border-primary/50 hover:scale-[1.02]"
                  style={{ 
                    boxShadow: '0 20px 60px -10px hsl(var(--foreground) / 0.1)'
                  }}
                >
                  <img 
                    src={sitePreview} 
                    alt="Mobilaris Site Platform" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between bg-background/95 backdrop-blur-sm rounded-lg p-4 border border-border">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Mobilaris Site™</h3>
                        <p className="text-sm text-muted-foreground">Real-time positioning & 3D visualization</p>
                      </div>
                      <ChevronRight className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Precision Positioning</h3>
              <p className="text-muted-foreground">Track everything in real-time across indoor, outdoor, and underground environments</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Enhanced Safety</h3>
              <p className="text-muted-foreground">Protect workers with real-time alerts, zone management, and emergency response tools</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Operational Efficiency</h3>
              <p className="text-muted-foreground">Optimize workflows, reduce delays, and improve coordination across your entire site</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
