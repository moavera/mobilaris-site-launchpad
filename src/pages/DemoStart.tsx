import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Map, Users } from "lucide-react";
import videoBackground from "@/assets/snurren_blur.mp4";
const DemoStart = () => {
  return <main className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-[1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover saturate-110 contrast-110 brightness-110"
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
        
        {/* Dark purple gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(271_81%_20%/0.7),hsl(220_20%_8%/0.8))]" />
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
            Welcome to <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent whitespace-nowrap">Mobilaris Site™</span> Demo
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