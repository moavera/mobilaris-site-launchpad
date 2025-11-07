import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImage from "@/assets/mobilaris-industrial-logga.svg";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "https://mobilarisindustrialsolutions.se/", hasDropdown: true },
    { label: "About", href: "https://mobilarisindustrialsolutions.se/about-us/" },
    { label: "Careers", href: "https://mobilarisindustrialsolutions.se/careers/" },
    { label: "Stories", href: "https://mobilarisindustrialsolutions.se/stories/" },
  ];

  return (
    <>
      {/* Fixed Contact Button */}
      <a
        href="https://mobilarisindustrialsolutions.se/contact/"
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden lg:block fixed top-0 right-0 text-white no-underline rounded-b-lg z-[999] font-medium tracking-wider transition-all duration-700 ease-out delay-200 hover:font-bold ${
          isScrolled ? 'px-[40px] py-[25px]' : 'px-[75px] py-[50px]'
        }`}
        style={{ background: isScrolled ? '#A029FF' : '#ffffff29', opacity: 1 }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#A029FF'}
        onMouseLeave={(e) => e.currentTarget.style.background = isScrolled ? '#A029FF' : '#ffffff29'}
      >
        Contact us
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "opacity-0 invisible -translate-y-full"
            : "opacity-100 visible translate-y-0"
        }`}
      >
      <div className="w-full px-6">
        <nav className="flex items-center justify-between h-32 max-w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="https://www.mobilarisinnovationcenter.se/" className="block">
              <img
                src={logoImage}
                alt="Mobilaris Industrial Solutions"
                className="h-14 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 mr-[250px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-semibold transition-opacity hover:opacity-80 flex items-center gap-1"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:opacity-80 transition-opacity"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 flex items-center gap-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </a>
              ))}
              <a
                href="https://mobilarisindustrialsolutions.se/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium border-2 border-foreground px-6 py-2 rounded text-center hover:bg-foreground hover:text-background transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact us
              </a>
            </div>
          </div>
        )}
      </div>
      </header>
    </>
  );
};
