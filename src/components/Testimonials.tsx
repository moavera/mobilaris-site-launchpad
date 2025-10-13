import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Featured Case Study */}
          <Card className="p-8 md:p-12 animate-fade-in-up hover:shadow-elegant transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  M
                </div>
              </div>
              <div className="flex-1">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed">
                  "I'm thrilled to have full control of gas cylinders at Sickla. Site™ has 
                  transformed how we manage safety and compliance."
                </p>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-bold text-lg">Micke</p>
                  <p className="text-muted-foreground">Safety Manager, Sickla Industrial Site</p>
                </div>
              </div>
            </div>
          </Card>

          {/* SVOA Testimonial */}
          <Card className="p-8 md:p-12 animate-fade-in-up hover:shadow-elegant transition-all duration-300" style={{ animationDelay: "0.15s" }}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">SVOA</span>
                </div>
              </div>
              <div className="flex-1">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed">
                  "Mobilaris Site™ has proven to be an invaluable tool for our operations. 
                  The real-time visibility and safety features have exceeded our expectations."
                </p>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-bold text-lg">Swedish Industry Association (SVOA)</p>
                  <p className="text-muted-foreground">Industry Partner</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
