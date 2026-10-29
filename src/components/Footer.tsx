import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import micLogo from "@/assets/mic_logo.svg";

const eyebrow = "text-brand text-[13px] font-bold uppercase tracking-[0.2em] mb-8";
const linkCls = "block text-ink hover:text-brand transition-colors text-[17px] leading-relaxed";
const parentLinkCls = "block text-ink hover:text-brand transition-colors text-[17px] leading-relaxed font-semibold";
const subLinkCls = "block text-ink/70 hover:text-brand transition-colors text-[16px] leading-relaxed";

// The product column mirrors the "Mobilaris Site" mega-menu: same five features, same order.
const productLinks = [
  { label: "People & Workgroup Location", href: "/people-workgroup-location" },
  { label: "Messaging", href: "/messaging" },
  { label: "Emergency Support", href: "/emergency-support" },
  { label: "Asset Tracking", href: "/asset-tracking" },
  { label: "Sensor Integration", href: "/sensor-integration" },
];

const companyLinks = [
  { label: "About", href: "https://mobilarisindustrialsolutions.se/about-us/" },
  { label: "Stories", href: "https://mobilarisindustrialsolutions.se/stories/" },
  { label: "Career", href: "https://mobilarisindustrialsolutions.se/careers/" },
  { label: "Contact", href: "https://mobilarisindustrialsolutions.se/contact/" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mobilaris/", Icon: Linkedin, filled: true },
  { label: "Facebook", href: "https://www.facebook.com/MobilarisAB", Icon: Facebook, filled: true },
  { label: "Instagram", href: "https://www.instagram.com/worldofmobilaris/", Icon: Instagram, filled: false },
];

export const Footer = () => {
  return (
    <footer className="bg-paper py-24">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* First Row - Newsletter and Navigate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          {/* Newsletter Section - Takes 6 columns */}
          <div className="lg:col-span-6">
            <h3 className={eyebrow}>Newsletter</h3>
            <h4 className="text-ink text-[28px] font-bold mb-10 leading-[1.3]">
              Subscribe to our newsletter to stay up&nbsp;to<br className="hidden lg:block" /> date with the future of industry
            </h4>
            <button
              className="bg-ink hover:bg-brand text-paper font-semibold rounded-[8px] px-9 py-4 inline-flex items-center gap-3 transition-all duration-200 group"
              onClick={() => (window.location.href = "#contact")}
            >
              Subscribe
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Navigate Section - one heading over two link columns */}
          <div className="lg:col-span-6">
            <h3 className={eyebrow}>Navigate</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
              <nav className="space-y-5">
                <div>
                  <Link to="/" className={parentLinkCls}>
                    Mobilaris Site
                  </Link>
                  <ul className="mt-4 space-y-3.5 border-l border-ink/10 pl-5">
                    {productLinks.map((item) => (
                      <li key={item.href}>
                        <Link to={item.href} className={subLinkCls}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              <nav className="space-y-5">
                {companyLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkCls}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Second Row - Our Headquarters & Social Media */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Our Headquarters - Takes 4 columns */}
          <div className="lg:col-span-4">
            <h3 className={eyebrow}>Our Headquarters</h3>
            <div className="flex items-start gap-4">
              <a
                href="https://www.mobilarisinnovationcenter.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={micLogo} alt="Mobilaris Innovation Center" className="h-[40px] w-auto" />
              </a>
            </div>
          </div>

          {/* Empty spacer - 2 columns */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Social Media - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className={eyebrow}>Social Media</h3>
            <div className="flex gap-[18px]">
              {socials.map(({ label, href, Icon, filled }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-ink text-paper hover:bg-brand transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" fill={filled ? "currentColor" : "none"} strokeWidth={filled ? 0 : 1.7} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
