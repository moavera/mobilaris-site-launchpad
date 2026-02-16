import { SectionShareButton } from "./SectionShareButton";

export const ChallengesSection = () => {
  return (
    <section id="challenges" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-start gap-4 mb-12">
          <h2 className="leading-tight max-w-3xl">
            Solving critical safety and operational challenges
          </h2>
          <SectionShareButton sectionId="challenges" sectionName="Challenges" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl bg-[#232426] border border-border/30 aspect-video flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Image placeholder</span>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Safety and Emergency management
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
