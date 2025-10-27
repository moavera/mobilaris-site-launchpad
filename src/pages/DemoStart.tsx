import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Map, Users } from "lucide-react";
const DemoStart = () => {
  return <main className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse" style={{
        animationDelay: '1.5s'
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{
        animationDelay: '0.75s'
      }} />
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(160,41,255,0.02)_50%,transparent_100%)] bg-[length:100%_4px] animate-[slide-in-right_15s_linear_infinite]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center animate-fade-in-up">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Live Demo Environment</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Welcome to Mobilaris Site™ Demo
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Experience real-time positioning and 3D visualization technology in action. 
            Explore how our platform transforms site management with instant visibility 
            of vehicles, people, and assets across your entire operation.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3">
              <Map className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">3D Visualization</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">Real-time Tracking</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">Complete Coverage</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant text-lg px-12 py-6 h-auto group" asChild>
            <a href="https://demo.mobilaris.com" target="_blank" rel="noopener noreferrer">
              Start Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          {/* Info Text */}
          
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary/30 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`
      }} />)}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) translateX(${Math.random() * 100 - 50}px);
          }
        }
      `}</style>
    </main>;
};
export default DemoStart;