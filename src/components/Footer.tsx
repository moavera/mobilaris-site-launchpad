import siteLogo from "@/assets/site-logo.png";
import mobilarisLogo from "@/assets/mobilaris-industrial.png";

export const Footer = () => {
  return (
    <footer className="bg-[#121214] text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Product Branding */}
          <div className="flex flex-col items-start space-y-6">
            <div>
              <img 
                src={siteLogo} 
                alt="Mobilaris Site logo" 
                className="h-14 mb-3"
              />
              <p className="text-white/70 text-sm max-w-md">
                Real-time positioning and 3D-visualization of your site
              </p>
            </div>
          </div>

          {/* Right Column - Company Branding */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <div className="text-left md:text-right">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-3">
                Part of
              </p>
              <img 
                src={mobilarisLogo} 
                alt="Mobilaris Industrial Solutions" 
                className="h-10 mb-2"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} Mobilaris Industrial Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
