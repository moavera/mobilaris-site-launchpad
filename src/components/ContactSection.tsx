import { ArrowRight } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";

export const ContactSection = () => {
  return (
    <section id="contact" className="group scroll-mt-20 bg-white px-3 pb-3 md:px-6 md:pb-6">
      <div
        className="relative flex flex-col items-center gap-7 overflow-hidden rounded-[28px] px-6 py-20 md:py-[140px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(142,71,240,0.75) 0%, rgba(142,71,240,0) 100%), linear-gradient(90deg, rgb(14,13,17) 0%, rgb(14,13,17) 100%)",
        }}
      >
        <div className="absolute right-6 top-6">
          <SectionShareButton sectionId="contact" sectionName="Contact" />
        </div>

        <h2 className="text-center text-[40px] font-medium leading-[1.02] tracking-[-1.2px] text-white md:text-[72px] md:tracking-[-2.16px]">
          See your entire site.
          <br />
          Live, from day one.
        </h2>

        <p className="max-w-[520px] text-center text-[16px] leading-[1.5] text-white/70 md:text-[19px]">
          Book a demo and we’ll show you how Mobilaris Site™ fits your operation.
        </p>

        <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
          <a
            href="https://mobilarisindustrialsolutions.se/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-white px-7 py-[18px] text-[16px] font-medium text-[#141317] transition-colors hover:bg-white/90"
          >
            Book a demo
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="https://mobilarisindustrialsolutions.se/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/35 px-7 py-[18px] text-[16px] font-medium text-white transition-colors hover:border-white/60"
          >
            Download brochure
          </a>
        </div>
      </div>
    </section>
  );
};
