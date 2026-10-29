import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import siteLogo from "@/assets/site-logo-mono-white.png.asset.json";
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

  // Lock body scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // The five Mobilaris Site features, laid out two / two / one across the mega-menu columns.
  const siteMenu = [
    {
      label: "People & Workgroup Location",
      href: "/people-workgroup-location",
      desc: "Locate personnel and ensure authorized access",
    },
    {
      label: "Messaging",
      href: "/messaging",
      desc: "Reach the right people on site, in seconds",
    },
    {
      label: "Emergency Support",
      href: "/emergency-support",
      desc: "A live overview when every second counts",
    },
    {
      label: "Asset Tracking",
      href: "/asset-tracking",
      desc: "Find any machine, tool or vehicle in seconds",
    },
    {
      label: "Sensor Integration",
      href: "/sensor-integration",
      desc: "Real-time insights from connected sensors",
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
            <Link to="/" className="block">
              <img
                src={siteLogo.url}
                alt="Mobilaris Site"
                className="h-14 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
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
              Product
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

        {/* Product mega-menu */}
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
      </div>
      </header>

      {/* Full-screen mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] flex flex-col bg-background">
          {/* Top row mirrors the header: logo left, close right */}
          <div className="flex items-center justify-between px-6 h-32 flex-shrink-0">
            <Link to="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src={siteLogo.url}
                alt="Mobilaris Site"
                className="h-14 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground hover:opacity-80 transition-opacity"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Link list */}
          <nav className="flex-1 overflow-y-auto px-6 pb-6">
            <p className="pt-2 pb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
              Product
            </p>
            <div className="flex flex-col">
              {siteMenu.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 text-lg font-medium text-foreground/85 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="pt-8 pb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
              Mobilaris Industrial Solutions
            </p>
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-lg font-medium text-foreground/85 transition-colors hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Contact CTA pinned to the bottom */}
          <div className="px-6 pb-8 pt-4 flex-shrink-0">
            <a
              href="https://mobilarisindustrialsolutions.se/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-base font-semibold border border-foreground/40 rounded-full px-6 py-4 text-foreground transition-colors hover:bg-foreground hover:text-background"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </>
  );
};
