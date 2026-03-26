import { Monitor, Smartphone } from "lucide-react";

export const ProductVisual = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            What you see
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            A live 3D map of your site
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Mobilaris Site interface shows your entire operation in a 3D model — 
            including underground tunnels, surface areas and buildings. Every tracked person, vehicle 
            and asset appears as a live dot on the map.
          </p>
        </div>

        {/* Product screenshot placeholder */}
        <div className="rounded-2xl border border-border/40 bg-card/30 overflow-hidden mb-12">
          <div className="aspect-video bg-gradient-to-br from-muted/50 via-primary/5 to-muted/30 flex items-center justify-center">
            <div className="text-center p-8">
              <Monitor className="w-16 h-16 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg font-medium mb-2">Product screenshot</p>
              <p className="text-muted-foreground/60 text-sm max-w-md">
                Place a screenshot of the 3D map here showing tracked objects, the site model, and the interface controls.
              </p>
            </div>
          </div>
        </div>

        {/* Annotations */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">People and vehicles as live markers</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each tracked object is shown with its name, type and current position. Click to see details, history or send a message.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Navigate the full 3D model</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rotate, zoom and switch between underground levels and surface views. The model reflects your actual site layout.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-primary" />
              <h4 className="font-semibold text-foreground">Works on mobile</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Field workers and supervisors can check the map from their phone — see who's nearby, find equipment, or check zone status on the go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
