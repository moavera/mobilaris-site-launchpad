import { Button } from "@/components/ui/button";
import { MapPin, Shield, Zap } from "lucide-react";
import mobilarisLogo from "@/assets/mobilaris-industrial.png";
import heroImage from "@/assets/site-hero-launch.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <img 
            src={mobilarisLogo} 
            alt="Mobilaris Industrial Solutions" 
            className="h-8 w-auto" 
          />
          <div className="flex items-center gap-6">
            <a href="/site" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <Button size="sm" className="rounded-md" asChild>
              <a href="mailto:support@mobilaris.se">Contact</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Announcement Badge */}
          <div className="flex justify-center mb-8">
            <a 
              href="https://site.mobilaris.se/" 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
              New: Mobilaris 2.0 - Site™
            </a>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Mobilaris Site™</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
              Meet the system for modern industrial site management. Streamline real-time positioning, safety, and operations.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-20">
            <Button size="lg" className="rounded-md font-medium" asChild>
              <a href="/site">Start building</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-md font-medium border-border hover:bg-secondary" 
              asChild
            >
              <a href="https://site.mobilaris.se/demo-start">See live demo</a>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-lg overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src={heroImage} 
                alt="Mobilaris Site Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Precision Positioning</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Track everything in real-time across indoor, outdoor, and underground environments
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                  <Shield className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Enhanced Safety</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Protect workers with real-time alerts, zone management, and emergency response tools
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                  <Zap className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Operational Efficiency</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Optimize workflows, reduce delays, and improve coordination across your entire site
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;