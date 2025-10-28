import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import logoImage from "@/assets/site-logo-2.png";

export const HeroNew = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <img src={logoImage} alt="Mobilaris Logo" className="h-12 md:h-16 w-auto" />
      </div>


      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
        <div className="flex items-center justify-center lg:justify-start">
          {/* Left: Text and Buttons */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Hook Question */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">Total control of your site, <span style={{ color: '#D39DFF' }}>everywhere</span></h1>
            
            {/* Key Message */}
            <div className="mb-6 md:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed"><span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent whitespace-nowrap font-semibold">Mobilaris Site™</span> - real-time positioning and 3D visualization eliminates guess-work during critical operations</p>
            </div>

            {/* Visual Tags */}
            <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10 justify-center lg:justify-start">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-white font-semibold text-sm sm:text-base">🚗 Vehicles</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-white font-semibold text-sm sm:text-base">👷 People</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-white font-semibold text-sm sm:text-base">📦 Assets</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant text-lg px-8" asChild>
                <a href="mailto:support@mobilaris.se">
                  Contact us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 text-white hover:bg-white/10" asChild>
                <a href="/demo-start">
                  Try Demo Site
                  <Play className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>;
};