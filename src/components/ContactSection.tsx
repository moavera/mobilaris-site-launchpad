import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";
import brochureAsset from "@/assets/broschyr.pdf.asset.json";

const BROCHURE_FILENAME = "Mobilaris Site™.pdf";

export const ContactSection = () => {
  const [preparing, setPreparing] = useState(false);

  const downloadBrochure = async () => {
    setPreparing(true);
    try {
      const response = await fetch(brochureAsset.url);
      if (!response.ok) throw new Error("Could not load the brochure");
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = BROCHURE_FILENAME;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
    } catch {
      window.open(brochureAsset.url, "_blank", "noopener,noreferrer");
    } finally {
      setPreparing(false);
    }
  };

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
            href={brochureAsset.url}
            download={BROCHURE_FILENAME}
            aria-busy={preparing}
            onClick={(event) => {
              event.preventDefault();
              void downloadBrochure();
            }}
            className={`flex items-center gap-3 rounded-full border border-white/35 px-7 py-[18px] text-[16px] font-medium text-white transition-colors hover:border-white/60 ${
              preparing ? "opacity-60" : ""
            }`}
          >
            Download brochure
          </a>
        </div>
      </div>
    </section>
  );
};
