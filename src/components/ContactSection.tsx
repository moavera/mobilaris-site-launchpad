import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@mobilaris.com?subject=Inquiry about Mobilaris Site";
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Want to know more?</h2>
            <p className="text-lg text-muted-foreground">
              Get in touch with our experts and learn how Mobilaris Site™ can transform your operations.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              onClick={handleEmailClick}
              className="bg-primary hover:bg-primary/90 shadow-elegant text-lg px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
