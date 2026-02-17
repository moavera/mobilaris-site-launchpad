import { SectionShareButton } from "./SectionShareButton";
import emergencyDashboard from "@/assets/emergency-dashboard.png";
import iphoneImage from "@/assets/iphone.png";
import mobildesktopImage from "@/assets/mobildesktop.png";

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
              During emergencies, get instant visibility of people, vehicles and critical assets.
              Verify evacuation status in real time and support faster, safer decision-making when every second counts.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-32">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Personnel and workgroup coordination
            </h3>
            <p className="text-muted-foreground text-xl leading-relaxed">
              In daily operations, understand where your workforce is, how teams are distributed, and who is operating in hazardous areas.
              Improve coordination, safety awareness and operational control across the site.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={iphoneImage} alt="Mobile app showing personnel tracking and workgroup coordination" className="w-full h-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-32">
          <div className="rounded-xl overflow-hidden">
            <img src={mobildesktopImage} alt="Asset tracking dashboard showing tag board and mobile views" className="w-full h-auto" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Asset Tracking
            </h3>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Track the location and status of vehicles, equipment and critical assets across your operation.
              Reduce uncertainty, support planning and ensure critical resources are available when needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
