import siteLogo from "@/assets/site-logo.png";
import mobilarisLogo from "@/assets/mobilaris-industrial.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0A0A0B] to-[#121214] text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="h-16 sm:h-20 mb-6">
              <img 
                src={siteLogo} 
                alt="Mobilaris Site logo" 
                className="h-full w-auto object-contain select-none"
                draggable={false}
              />
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-lg">
              Real-time positioning and 3D-visualization of your site
            </p>
          </div>

          <div className="flex flex-col justify-center md:items-end">
            <div className="inline-block">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-medium">
                Part of
              </p>
              <div className="h-12 sm:h-14">
                <img 
                  src={mobilarisLogo} 
                  alt="Mobilaris Industrial Solutions" 
                  className="h-full w-auto object-contain opacity-90 select-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-white/40">
            © {new Date().getFullYear()} Mobilaris Industrial Solutions. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-white/80 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white/80 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
