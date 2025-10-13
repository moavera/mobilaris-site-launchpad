import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Our experts will get back to you soon.",
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Want to know more?</h2>
            <p className="text-lg text-muted-foreground">
              Send us a message and our experts will get back to you.
            </p>
          </div>

          <Card className="p-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name *
                  </label>
                  <Input id="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone number *
                  </label>
                  <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company *
                  </label>
                  <Input id="company" required placeholder="Your company" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email address *
                  </label>
                  <Input id="email" type="email" required placeholder="you@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message (optional)
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your needs..." 
                  rows={4}
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1 accent-primary"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  I accept the privacy policy *
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full shadow-elegant">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
