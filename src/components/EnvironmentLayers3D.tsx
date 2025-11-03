import environmentLayers from "@/assets/environment-layers-exploded.png";

export const EnvironmentLayers3D = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background shadow-lg">
      <img 
        src={environmentLayers} 
        alt="Exploded view showing multi-level positioning across surface buildings, ground level with trees, and underground tunnel systems"
        className="w-full h-auto"
      />
    </div>
  );
};
