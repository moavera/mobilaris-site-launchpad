import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionShareButton } from "@/components/SectionShareButton";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="group scroll-mt-20 bg-paper px-4 py-24 md:px-12 md:pb-[120px] md:pt-[160px] xl:px-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-12">
        <div className="flex items-start gap-3">
          <h2 className="max-w-[900px] text-[34px] font-medium leading-[1.08] tracking-[-1.3px] text-ink md:text-[52px]">
            Want to know more?{" "}
            <span className="text-ink/[0.42]">
              Get in touch with our experts and learn how Mobilaris Site™ can transform your
              operations.
            </span>
          </h2>
          <SectionShareButton sectionId="contact" sectionName="Contact" />
        </div>

        <div>
          <Button
            size="lg"
            asChild
            className="rounded-full bg-brand px-8 text-base text-brand-foreground shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-brand/90 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.35)]"
          >
            <a
              href="https://mobilarisindustrialsolutions.se/contact/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
