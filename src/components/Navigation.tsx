import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logoImage from "@/assets/mobilaris-industrial-logga.svg";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSiteMenuOpen, setIsSiteMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The five Mobilaris Site features, laid out two / two / one across the mega-menu columns.
  const siteMenu = [
    {
      label: "People & Workgroup Location",
      href: "/people-workgroup-location",
      desc: "See where people and workgroups are across your site in real time.",
    },
    {
      label: "Messaging",
      href: "/messaging",
      desc: "Messages from the control room straight to people on site.",
    },
    {
      label: "Emergency Support",
      href: "/emergency-support",
      desc: "Instant visibility of people in hazardous areas and refuge chambers.",
    },
    {
      label: "Asset Tracking",
      href: "/asset-tracking",
      desc: "Track the location and status of vehicles, tools and machinery.",
    },
    {
      label: "Sensor Integration",
      href: "/sensor-integration",
      desc: "Sensor data alongside people and assets on the same map.",
    },
  ];


  const navLinks = [
    { label: "About", href: "https://mobilarisindustrialsolutions.se/about-us/" },
    { label: "Careers", href: "https://mobilarisindustrialsolutions.se/careers/" },
    { label: "Stories", href: "https://mobilarisindustrialsolutions.se/stories/" },
  ];

  const featureItem = (item: { label: string; href: string; desc: string }) => (
    <Link
      key={item.href}
      to={item.href}
      onClick={() => setIsSiteMenuOpen(false)}
      className="site-mega__item"
    >
      <span className="site-mega__title">{item.label}</span>
      <span className="site-mega__desc">{item.desc}</span>
    </Link>
  );

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
        onMouseLeave={() => setIsSiteMenuOpen(false)}
      >
      <div className="relative w-full px-6">
        <nav className="flex items-center justify-between h-32 max-w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="https://mobilarisindustrialsolutions.se/" className="block">
              <img
                src={logoImage}
                alt="Mobilaris Industrial Solutions"
                className="h-14 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 mr-[250px]">
            <Link
              to="/"
              onMouseEnter={() => setIsSiteMenuOpen(true)}
              onFocus={() => setIsSiteMenuOpen(true)}
              aria-expanded={isSiteMenuOpen}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-lg font-semibold text-white no-underline transition-colors hover:bg-white/10 ${
                isSiteMenuOpen ? "bg-white/10" : ""
              }`}
            >
              Mobilaris Site
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isSiteMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Link>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-semibold transition-opacity hover:opacity-80 flex items-center gap-1"
              >
                {link.label}
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

        {/* Mobilaris Site mega-menu */}
        <div
          className={`site-mega hidden lg:block ${isSiteMenuOpen ? "is-open" : ""}`}
          onMouseEnter={() => setIsSiteMenuOpen(true)}
          aria-hidden={!isSiteMenuOpen}
        >
          <div className="site-mega__grid">
            <div className="site-mega__col">{siteMenu.slice(0, 2).map(featureItem)}</div>
            <div className="site-mega__col">{siteMenu.slice(2, 4).map(featureItem)}</div>
            <div className="site-mega__col">{featureItem(siteMenu[4])}</div>
          </div>
          <div className="site-mega__footer">
            <p className="site-mega__note">A product by Mobilaris Industrial Solutions</p>
            <a
              href="https://mobilarisindustrialsolutions.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-mega__more"
            >
              Learn more
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
            <p className="py-2 text-xs font-semibold uppercase tracking-wider text-foreground/50">Mobilaris Site</p>
            {siteMenu.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="py-2 pl-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
            <p className="py-2 text-xs font-semibold uppercase tracking-wider text-foreground/50">Mobilaris Industrial Solutions</p>
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
