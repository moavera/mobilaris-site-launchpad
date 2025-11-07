import { Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7] py-24">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* First Row - Newsletter and Navigate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          {/* Newsletter Section - Takes 6 columns */}
          <div className="lg:col-span-6">
            <h3 className="text-[#8B5CF6] text-[13px] font-bold uppercase tracking-[0.2em] mb-8">
              Newsletter
            </h3>
            <h4 className="text-[#1A1A1A] text-[28px] font-bold mb-10 leading-[1.3]">
              Subscribe to our newsletter to stay up&nbsp;to<br className="hidden lg:block" /> date with the future of industry
            </h4>
            <button 
              className="bg-[#1A1A1A] hover:bg-[#333333] text-white font-semibold rounded-[8px] px-9 py-4 inline-flex items-center gap-3 transition-all duration-200 group"
              onClick={() => window.location.href = '#contact'}
            >
              Subscribe
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Navigate Section - Column 1 - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-[#8B5CF6] text-[13px] font-bold uppercase tracking-[0.2em] mb-8">
              Navigate
            </h3>
            <nav className="space-y-5">
              <a href="#" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-[17px] leading-relaxed">
                Home
              </a>
              <a href="https://mobilarisindustrialsolutions.se/asset-tracking/" target="_blank" rel="noopener noreferrer" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-[17px] leading-relaxed">
                Asset Tracking
              </a>
              <a href="#people-workgroup" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-[17px] leading-relaxed">
                People & Workgroup Location
              </a>
              <a href="https://mobilarisindustrialsolutions.se/evacuation-support/" target="_blank" rel="noopener noreferrer" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-[17px] leading-relaxed">
                Evacuation Support
              </a>
              <a href="#collision" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-[17px] leading-relaxed">
                Collision Avoidance
              </a>
            </nav>
          </div>

          {/* Navigate Section - Column 2 - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-transparent text-[13px] font-bold uppercase tracking-[0.2em] mb-8 select-none pointer-events-none">
              Navigate
            </h3>
            <nav className="space-y-5">
              <a href="#about" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-[17px] leading-relaxed">
                About
              </a>
              <a href="#stories" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-[17px] leading-relaxed">
                Stories
              </a>
              <a href="#career" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-[17px] leading-relaxed">
                Career
              </a>
              <a href="#contact" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-[17px] leading-relaxed">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Second Row - Our Headquarters & Social Media */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Our Headquarters - Takes 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="text-[#8B5CF6] text-[13px] font-bold uppercase tracking-[0.2em] mb-8">
              Our Headquarters
            </h3>
            <div className="flex items-start gap-4">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#DC2626] via-[#9333EA] to-[#DC2626] rounded-[10px] flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-[6px] bg-white rounded-[6px]"></div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[#1A1A1A] font-extrabold text-[13px] uppercase leading-[1.3] tracking-wide">
                  Mobilaris
                </div>
                <div className="text-[#1A1A1A] font-extrabold text-[13px] uppercase leading-[1.3] tracking-wide">
                  Innovation
                </div>
                <div className="text-[#1A1A1A] font-extrabold text-[13px] uppercase leading-[1.3] tracking-wide">
                  Center
                </div>
              </div>
            </div>
          </div>

          {/* Empty spacer - 2 columns */}
          <div className="hidden lg:block lg:col-span-2"></div>
          
          {/* Social Media - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-[#8B5CF6] text-[13px] font-bold uppercase tracking-[0.2em] mb-8">
              Social Media
            </h3>
            <div className="flex gap-5">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-[28px] w-[28px]" fill="currentColor" strokeWidth={0} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-[28px] w-[28px]" fill="currentColor" strokeWidth={0} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-[28px] w-[28px]" fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
