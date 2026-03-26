import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ProductCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            See your site in real time
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a demo to see how Mobilaris Site works with your specific site layout, 
            existing infrastructure, and operational needs. We'll show you what real-time 
            positioning looks like for your operation.
          </p>
          <Button size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
            <a href="https://mobilarisindustrialsolutions.se/contact/" target="_blank" rel="noopener noreferrer">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
