import siteLogo from "@/assets/site-logo.png";
import mobilarisLogo from "@/assets/mobilaris-industrial.png";
import { Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-background py-20 border-t border-border/50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h3 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <h4 className="text-foreground text-xl font-semibold mb-6 leading-snug">
              Subscribe to our newsletter to stay up to date with the future of industry
            </h4>
            <Button 
              variant="default" 
              className="group"
              onClick={() => window.location.href = '#contact'}
            >
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Navigate Section */}
          <div className="lg:col-span-1">
            <h3 className="text-primary text-sm font-semibold uppercase tracking-wider mb-6">
              Navigate
            </h3>
            <nav className="space-y-3">
              <a href="#" className="block text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#asset-tracking" className="block text-foreground hover:text-primary transition-colors">
                Asset Tracking
              </a>
              <a href="#people-workgroup" className="block text-foreground hover:text-primary transition-colors">
                People & Workgroup Location
              </a>
              <a href="#evacuation" className="block text-foreground hover:text-primary transition-colors">
                Evacuation Support
              </a>
              <a href="#collision" className="block text-foreground hover:text-primary transition-colors">
                Collision Avoidance
              </a>
            </nav>
          </div>

          {/* Second Navigate Column */}
          <div className="lg:col-span-1">
            <h3 className="text-primary text-sm font-semibold uppercase tracking-wider mb-6 opacity-0">
              Navigate
            </h3>
            <nav className="space-y-3">
              <a href="#about" className="block text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#stories" className="block text-foreground hover:text-primary transition-colors">
                Stories
              </a>
              <a href="#career" className="block text-foreground hover:text-primary transition-colors">
                Career
              </a>
              <a href="#contact" className="block text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Our Headquarters */}
          <div className="lg:col-span-1">
            <h3 className="text-primary text-sm font-semibold uppercase tracking-wider mb-6">
              Our Headquarters
            </h3>
            <div className="mb-8">
              <div className="h-16 mb-4">
                <img 
                  src={mobilarisLogo} 
                  alt="Mobilaris Innovation Center" 
                  className="h-full w-auto object-contain select-none"
                  draggable={false}
                />
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                Social Media
              </h3>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
