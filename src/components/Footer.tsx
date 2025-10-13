export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mobilaris Industrial Solutions</h3>
            <p className="text-background/80 text-sm">
              Leading provider of real-time positioning and site coordination solutions 
              for industrial environments.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Asset Tracking</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">People & Workgroup Location</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Evacuation Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Mobilaris Industrial Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
