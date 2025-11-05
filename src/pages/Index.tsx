import { Button } from "@/components/ui/button";
import { ArrowBigRight, MapPin, Shield, Zap, Sparkles, ArrowRight } from "lucide-react";
import mobilarisLogo from "@/assets/mobilaris-industrial.png";
import heroImage from "@/assets/site-hero-launch.png";
import arrowForward from "@/assets/arrow-forward.svg";
const Index = () => {
  return <main className="min-h-screen bg-background font-galano">
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

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" style={{
      backgroundColor: 'hsl(274 100% 8%)'
    }}>
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-8 max-w-5xl mx-auto animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight" style={{
                color: 'hsl(274 100% 75%)'
              }}>
                <span style={{ color: '#ffffff' }}>Introducing</span><br />
                Mobilaris Site™
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Real-time positioning and 3D visualization that brings total control to complex work environments.
              </p>
            </div>
            
            <Button size="lg" className="group relative overflow-hidden px-8 py-7 h-auto font-bold text-lg shadow-2xl transition-all duration-500 hover:px-9 hover:py-7 hover:shadow-purple-500/50 [&_svg]:!size-auto animate-fade-in" style={{
              backgroundColor: 'hsl(274 100% 58%)',
              color: 'hsl(0 0% 100%)',
              animationDelay: '0.2s'
            }} asChild>
              <a href="/site" className="flex items-center gap-0 group-hover:gap-2 transition-all duration-500">
                <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap text-base font-bold group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500">
                  Visit Mobilaris Site™
                </span>
                <img src={arrowForward} alt="Arrow" className="size-12 group-hover:size-4 transition-all duration-500 flex-shrink-0" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left: Text Content */}
            <div className="animate-fade-in-up">
              {/* Prominent New Launch Badge */}
              <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-8 group hover:border-primary/50 transition-all">
                <div className="relative">
                  <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                  <div className="absolute inset-0 bg-primary/20 blur-md animate-pulse" />
                </div>
                <span className="text-base font-semibold text-primary tracking-wide">NEW LAUNCH</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                Introducing<br />
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Mobilaris Site™
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
            <div className="relative animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-border/30 transition-all duration-700 hover:scale-[1.02]" style={{
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                boxShadow: '0 25px 70px -15px hsl(var(--primary) / 0.3), 0 0 100px -25px hsl(var(--primary) / 0.2)'
              }}>
                  <img src={heroImage} alt="Mobilaris Site - Industrial Positioning Technology" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-40" style={{
                background: 'radial-gradient(circle at 60% 50%, hsl(var(--primary) / 0.4), transparent 70%)',
                transform: 'scale(1.1)'
              }} />
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
    </main>;
};
export default Index;