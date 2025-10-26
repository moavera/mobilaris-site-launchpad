import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardImage from "@/assets/webimage-3d.webp";
export const HeroNew = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] animate-pulse" style={{
        animationDelay: '1s'
      }} />
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(160,41,255,0.02)_50%,transparent_100%)] bg-[length:100%_4px] animate-[slide-in-right_20s_linear_infinite]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text and Buttons */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Hook Question */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">Total control of your site, <span style={{ color: '#D39DFF' }}>everywhere</span></h1>
            
            {/* Key Message */}
            <div className="mb-6 md:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">Real-time positioning and 3D visualization eliminates guess-work during critical operations</p>
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
            </div>
          </div>

          {/* Right: Image */}
          <div className="animate-fade-in-up">
            <img src={dashboardImage} alt="3D site visualization dashboard showing real-time positioning" className="w-full h-auto rounded-xl lg:rounded-2xl shadow-2xl" />
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