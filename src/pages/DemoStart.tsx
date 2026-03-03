import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Map, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import videoBackground from "@/assets/snurren_blur.mp4";
import logoImage from "@/assets/site-logo-2.png";

const DemoStart = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const DEMO_URL = "https://demo.site.mobilaris.se/api/share/vq5ejng0p6";

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!validateEmail(trimmed)) {
      setEmailError("Ange en giltig e-postadress");
      return;
    }
    setIsSubmitting(true);
    // Save to localStorage list
    const existing = JSON.parse(localStorage.getItem("demo_emails") || "[]");
    existing.push({ email: trimmed, timestamp: new Date().toISOString() });
    localStorage.setItem("demo_emails", JSON.stringify(existing));
    // Redirect to demo
    window.location.href = DEMO_URL;
  };

  return (
    <main className="min-h-screen relative flex items-start md:items-center justify-center overflow-hidden pt-28 md:pt-0">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <a href="/">
          <img
            src={logoImage}
            alt="Mobilaris Logo"
            className="h-12 md:h-16 w-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </a>
      </div>

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
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-6 md:py-12 max-w-4xl">
        <div className="text-center animate-fade-in-up">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Live Demo Environment</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent whitespace-nowrap">
              Mobilaris Site™
            </span>{" "}
            Demo
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            Experience real-time positioning and 3D visualization technology in action. Explore how our platform
            transforms site management with instant visibility of vehicles, people, and assets across your entire
            operation.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
              <Map className="h-4 w-4 text-primary" />
              <span className="text-foreground font-medium text-sm">3D Visualization</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-foreground font-medium text-sm">Real-time Tracking</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-elegant text-lg px-12 py-6 h-auto group"
            onClick={() => setShowEmailModal(true)}
          >
            Start Demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Info Text */}
        </div>
      </div>

      {/* Email Capture Modal */}
      <Dialog open={showEmailModal} onOpenChange={setShowEmailModal}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Få tillgång till demon
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Ange din e-postadress för att starta Mobilaris Site™ demo.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <Input
                type="email"
                placeholder="din@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                autoFocus
              />
              {emailError && (
                <p className="text-sm text-destructive mt-1.5">{emailError}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-lg py-5 h-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Startar..." : "Starta Demo"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Vi delar aldrig din e-post med tredje part.
            </p>
          </form>
        </DialogContent>
      </Dialog>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
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
    </main>
  );
};
export default DemoStart;
