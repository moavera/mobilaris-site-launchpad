import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import corporateLogo from "@/assets/mobilaris-industrial-logga.svg";
import siteLogo from "@/assets/mobilaris-site-header-logo.png.asset.json";
import { Button } from "@/components/ui/button";

const corporateUrl = "https://mobilarisindustrialsolutions.se/";
const contactUrl = `${corporateUrl}contact/`;
const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Features", href: "/#key-features" },
  { label: "How it works", href: "/#getting-started" },
  { label: "Customers", href: `${corporateUrl}stories/` },
  { label: "Pricing", href: contactUrl },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 motion-reduce:transition-none ${isScrolled && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="flex h-9 items-center justify-between gap-4 bg-surface px-5 md:h-10 md:px-7 xl:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <a href={corporateUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-80">
            <img src={corporateLogo} alt="Mobilaris Industrial Solutions" className="h-5 w-auto" />
          </a>
          <span aria-hidden="true" className="hidden text-foreground/30 md:block">·</span>
          <p className="hidden truncate text-xs font-normal text-foreground/50 md:block xl:text-sm">Mobilaris Site™ is a product by Mobilaris Industrial Solutions</p>
        </div>
        <a href={corporateUrl} target="_blank" rel="noopener noreferrer" className="flex shrink-0 items-center gap-2 text-xs text-foreground/50 transition-colors hover:text-foreground xl:text-sm" aria-label="Visit Mobilaris Industrial Solutions">
          <span className="hidden lg:inline">mobilarisindustrialsolutions.se</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="site-header-main">
        <nav aria-label="Main navigation" className="flex h-20 items-center justify-between gap-5 px-5 md:h-24 md:px-7 xl:px-8">
          <a href={corporateUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-80">
            <img src={siteLogo.url} alt="Mobilaris Site™" className="h-9 w-auto md:h-10" />
          </a>
          <div className="hidden items-center gap-6 lg:flex xl:gap-9 2xl:gap-12">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("https") ? "_blank" : undefined} rel={link.href.startsWith("https") ? "noopener noreferrer" : undefined} className="whitespace-nowrap text-base font-normal text-foreground/60 transition-colors hover:text-foreground xl:text-lg">{link.label}</a>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-3 xl:gap-6">
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="hidden whitespace-nowrap text-base text-foreground/60 transition-colors hover:text-foreground lg:block xl:text-lg">Contact sales</a>
            <Button asChild className="h-10 rounded-full bg-paper px-5 text-sm font-medium text-ink hover:bg-paper/90 md:h-11 xl:px-6 xl:text-base">
              <a href={contactUrl} target="_blank" rel="noopener noreferrer">Book a demo</a>
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-foreground/10 hover:text-foreground lg:hidden" onClick={() => setIsMobileMenuOpen((open) => !open)} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100dvh-116px)] overflow-y-auto border-t border-foreground/10 bg-surface px-5 py-5 lg:hidden">
            {[...navLinks, { label: "Contact sales", href: contactUrl }].map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("https") ? "_blank" : undefined} rel={link.href.startsWith("https") ? "noopener noreferrer" : undefined} onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-foreground/70 transition-colors hover:text-foreground">{link.label}</a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
