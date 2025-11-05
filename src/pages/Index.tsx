import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, Zap, Sparkles } from "lucide-react";
import mobilarisLogo from "@/assets/mobilaris-industrial.png";
import heroImage from "@/assets/site-hero-launch.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-galano">
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
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Confetti Elements */}
        <div className="absolute inset-0 -z-5 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full animate-confetti opacity-0"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Sparkle Bursts */}
        <div className="absolute inset-0 -z-5 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute w-6 h-6 text-primary/40 animate-sparkle-burst"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left: Text Content */}
            <div>
              {/* Prominent New Launch Badge with fireworks entrance */}
              <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/10 backdrop-blur-sm border-2 border-primary/40 rounded-full px-6 py-3 mb-8 group hover:border-primary/60 transition-all animate-launch-badge opacity-0 shadow-lg shadow-primary/20">
                <div className="relative">
                  <Sparkles className="h-6 w-6 text-primary animate-glow-pulse" />
                  <div className="absolute inset-0 bg-primary/40 blur-lg animate-glow-pulse" />
                  {/* Mini sparkles around */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
                </div>
                <span className="text-base font-bold text-primary tracking-wide">🎉 NEW LAUNCH 🎊</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity animate-glow-pulse" />
                {/* Enhanced Shimmer effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight animate-launch-title opacity-0">
                Introducing<br />
                <span className="relative inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Mobilaris Site™
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary blur-2xl opacity-40 animate-glow-pulse" />
                  {/* Celebration sparkles */}
                  <Sparkles className="absolute -top-8 -right-8 w-8 h-8 text-primary animate-bounce-in opacity-0" style={{ animationDelay: '1s' }} />
                  <Sparkles className="absolute -bottom-4 -left-8 w-6 h-6 text-accent animate-bounce-in opacity-0" style={{ animationDelay: '1.2s' }} />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                The next generation of industrial site management. Real-time positioning and 3D visualization that brings total control to complex work environments.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Track everything, everywhere</p>
                    <p className="text-sm text-muted-foreground">Indoor, outdoor, and underground positioning in one unified system</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">3D visualization that scales</p>
                    <p className="text-sm text-muted-foreground">From single buildings to entire industrial complexes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Technology agnostic</p>
                    <p className="text-sm text-muted-foreground">Works with GPS, BLE, Wi-Fi, UWB, and more</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base px-8 shadow-lg hover:shadow-xl transition-all" asChild>
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
            </div>

            {/* Right: Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div 
                  className="relative rounded-2xl overflow-hidden border border-border/30 transition-all duration-700 hover:scale-[1.02]"
                  style={{ 
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                    boxShadow: '0 25px 70px -15px hsl(var(--primary) / 0.3), 0 0 100px -25px hsl(var(--primary) / 0.2)'
                  }}
                >
                  <img 
                    src={heroImage} 
                    alt="Mobilaris Site - Industrial Positioning Technology" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 -z-10 blur-3xl opacity-40"
                  style={{
                    background: 'radial-gradient(circle at 60% 50%, hsl(var(--primary) / 0.4), transparent 70%)',
                    transform: 'scale(1.1)'
                  }}
                />
              </div>
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
