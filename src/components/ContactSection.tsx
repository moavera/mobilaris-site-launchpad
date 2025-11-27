import { Button } from "@/components/ui/button";
import { Mail, Play } from "lucide-react";
import { SectionShareButton } from "@/components/SectionShareButton";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background scroll-mt-20 group">
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

          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 text-base px-6"
              asChild
            >
              <a href="/demo-start">
                Try Demo Site™
                <Play className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8"
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
