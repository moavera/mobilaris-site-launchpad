import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30 scroll-mt-20 group">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h2 className="text-3xl md:text-5xl font-bold">Want to know more?</h2>
              <SectionShareButton sectionId="contact" sectionName="Contact" />
            </div>
            <p className="text-lg text-muted-foreground">
              Get in touch with our experts and learn how Mobilaris Site™ can transform your operations.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-elegant text-lg px-8"
              asChild
            >
              <a href="mailto:support@mobilaris.se">
                <Mail className="mr-2 h-5 w-5" />
                Contact us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
