import { Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7] py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h3 className="text-[#8B5CF6] text-xs font-bold uppercase tracking-widest mb-6">
              Newsletter
            </h3>
            <h4 className="text-[#1A1A1A] text-2xl font-bold mb-8 leading-tight">
              Subscribe to our newsletter to stay up to date with the future of industry
            </h4>
            <Button 
              variant="default" 
              className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white rounded-lg px-8 py-6 h-auto group"
              onClick={() => window.location.href = '#contact'}
            >
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Navigate Section - Column 1 */}
          <div className="lg:col-span-1">
            <h3 className="text-[#8B5CF6] text-xs font-bold uppercase tracking-widest mb-6">
              Navigate
            </h3>
            <nav className="space-y-4">
              <a href="#" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-base">
                Home
              </a>
              <a href="#asset-tracking" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-base">
                Asset Tracking
              </a>
              <a href="#people-workgroup" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-base">
                People & Workgroup Location
              </a>
              <a href="#evacuation" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-base">
                Evacuation Support
              </a>
              <a href="#collision" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-base">
                Collision Avoidance
              </a>
            </nav>
          </div>

          {/* Navigate Section - Column 2 */}
          <div className="lg:col-span-1">
            <h3 className="text-transparent text-xs font-bold uppercase tracking-widest mb-6 select-none">
              Navigate
            </h3>
            <nav className="space-y-4">
              <a href="#about" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-base">
                About
              </a>
              <a href="#stories" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-base">
                Stories
              </a>
              <a href="#career" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-base">
                Career
              </a>
              <a href="#contact" className="block text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors text-base">
                Contact
              </a>
            </nav>
          </div>

          {/* Our Headquarters & Social Media */}
          <div className="lg:col-span-1">
            {/* Our Headquarters */}
            <h3 className="text-[#8B5CF6] text-xs font-bold uppercase tracking-widest mb-6">
              Our Headquarters
            </h3>
            <div className="mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-sm"></div>
                </div>
                <div>
                  <div className="text-[#1A1A1A] font-bold text-sm uppercase leading-tight">
                    Mobilaris
                  </div>
                  <div className="text-[#1A1A1A] font-bold text-sm uppercase leading-tight">
                    Innovation
                  </div>
                  <div className="text-[#1A1A1A] font-bold text-sm uppercase leading-tight">
                    Center
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-[#8B5CF6] text-xs font-bold uppercase tracking-widest mb-6">
                Social Media
              </h3>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-7 w-7" fill="currentColor" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-7 w-7" fill="currentColor" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1A1A1A] hover:text-[#8B5CF6] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-7 w-7" fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
