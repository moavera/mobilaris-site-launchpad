import { SectionShareButton } from "./SectionShareButton";
import emergencyDashboard from "@/assets/emergency-dashboard.png";

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
          <div className="rounded-xl overflow-hidden">
            <img src={emergencyDashboard} alt="Emergency management dashboard showing real-time alerts and site monitoring" className="w-full h-auto" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Safety and Emergency
            </h3>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Get instant visibility of people, vehicles and critical assets during emergencies.
              Verify evacuation status in real time and support faster, safer decision-making when every second counts.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Personnel and workgroup coordination
            </h3>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Understand where your workforce is, how teams are distributed, and who is operating in hazardous areas.
              Improve daily coordination, safety awareness and operational control across the site.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={emergencyDashboard} alt="Asset tracking dashboard showing vehicle and equipment locations" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
