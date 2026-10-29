import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { PeopleMobile } from "@/components/people/PeopleMobile";
import { PeoplePrivacy } from "@/components/people/PeoplePrivacy";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-mine-landscape-hd.webp.asset.json";
import peopleShowcase from "@/assets/people-showcase-map.webp.asset.json";
import peopleHeroMap from "@/assets/hero-people-map.webp.asset.json";
import emergencyAsset from "@/assets/Emergency_bild.png.asset.json";
import emergencyShowcase from "@/assets/emergency-showcase-map.webp.asset.json";
import emergencyHeroMap from "@/assets/hero-emergency-map.webp.asset.json";
import assetAsset from "@/assets/asset_tracking_bild.png.asset.json";
import assetHeroMap from "@/assets/hero-asset-map.webp.asset.json";
import sensorAsset from "@/assets/fan-mockup-cutout.webp.asset.json";
import sensorHeroMap from "@/assets/hero-sensor-map.webp.asset.json";
import { PeopleStepVisual } from "@/components/people/PeopleStepVisuals";
import { EmergencyStepVisual } from "@/components/emergency/EmergencyStepVisuals";
import { SensorStepVisual } from "@/components/sensor/SensorStepVisuals";
import { SensorSpotlight } from "@/components/sensor/SensorSpotlight";

type FeatureConfig = {
  slug: string; label: string; h1: [string, string]; introTitle: [string, string]; intro: string;
  heroImage?: string; peopleExtras?: boolean; stepsVisual?: "people" | "emergency" | "sensor"; spotlight?: "sensor"; image: string; imageAlt: string; showcaseWide?: boolean; showcaseRight?: boolean; benefits: [string, string][]; stepsTitle: [string, string]; steps: [string, string][];
};

export const featureLinks = [
  { n: "01", title: "People & Workgroup Location", text: "Who is where – and are they authorized.", href: "/people-workgroup-location" },
  { n: "02", title: "Messaging", text: "Reach the right people, in the right zones.", href: "/messaging" },
  { n: "03", title: "Emergency Support", text: "Faster, safer evacuations.", href: "/emergency-support" },
  { n: "04", title: "Asset Tracking", text: "Locate critical equipment in seconds.", href: "/asset-tracking" },
  { n: "05", title: "Sensor Integration", text: "Sensor alarms, shown in the map.", href: "/sensor-integration" },
];

export const features: Record<string, FeatureConfig> = {
  people: {
    slug: "/people-workgroup-location", label: "People & Workgroup Location",
    heroImage: peopleHeroMap.url, peopleExtras: true, stepsVisual: "people",
    h1: ["Locate personnel and ensure authorized access", ""],
    introTitle: ["Locate, track and understand your workforce", ""],
    intro: "See where people and workgroups are across your site in real time. Connect check-in stations to personnel tags or your existing access control system to improve workforce visibility, identify personnel in hazardous areas and support safer operations.",
    image: peopleShowcase.url, imageAlt: "Mobilaris Site map showing people and vehicles across the site, with a warning on one person", showcaseWide: true,
    benefits: [["Live position of every person", "Tags or the Companion GO™ app show where people are, above and below ground."], ["Workgroups at a glance", "See how teams are distributed and where each crew is working."], ["Authorized access only", "Check-in stations and access control show who is allowed in each zone."], ["Hazardous area awareness", "Know who is in restricted or dangerous areas before you send people in."]],
    stepsTitle: ["From check-in to a live overview.", "In three simple steps."],
    steps: [["Check in at the gate", "People check in with their tag or Companion GO™ – linked to your access control."], ["Keep track in real time", "Personnel positions update on the map as people move across the site."], ["Find and filter", "Filter by workgroup or zone to see who is where and get a clear overview of personnel across the site."]],
  },
  emergency: {
    slug: "/emergency-support", label: "Emergency Support",
    heroImage: emergencyHeroMap.url, stepsVisual: "emergency",
    h1: ["A live overview", "when every second counts"],
    introTitle: ["See who is in danger.", "Follow the evacuation live."],
    intro: "During an emergency, get instant visibility of people in hazardous areas and refuge chambers. Follow the evacuation in real time and see who needs urgent assistance.",
    image: emergencyShowcase.url, imageAlt: "Emergency overview in Mobilaris Site showing a fire in zone 24, personnel positions and refuge chamber status", showcaseWide: true,
    benefits: [["Alert everyone affected", "Send evacuation or shelter-in-place messages to everyone in the affected zones."], ["People in hazardous areas", "See instantly who is in the affected zones when an alarm is raised."], ["Refuge chamber status", "Know how many people are in each chamber – and who they are."], ["Live evacuation progress", "Follow evacuation progress live and complete your site’s emergency checklist as you go."]],
    stepsTitle: ["From alarm to all clear.", "Three steps to a coordinated emergency response."],
    steps: [["Raise the alarm", "Trigger an emergency via sensors, people or authorized users in the control room or on the go."], ["Follow the evacuation", "Track movement to exits and refuge chambers, and identify personnel needing assistance."], ["Verify everyone is safe", "Use your emergency checklist to track response steps and confirm everyone is safe. Send all clear and download a full report."]],
  },
  assets: {
    slug: "/asset-tracking", label: "Asset Tracking",
    heroImage: assetHeroMap.url,
    h1: ["Find any machine,", "tool or vehicle in seconds"],
    introTitle: ["Less searching.", "More production."],
    intro: "Track the location and status of vehicles, tools and machinery across your operation. Reduce search time, support planning and make sure critical equipment is available when needed.",
    image: assetAsset.url, imageAlt: "Vehicles and equipment shown in the Mobilaris Site map",
    benefits: [["Vehicles, tools and machinery", "Tag anything you need to find, from loaders to hand tools."], ["Last known position", "See where an asset is, or where it was last seen."], ["Status and usage", "Know which equipment is available and which is in use."], ["Better planning", "Use location history to plan shifts and maintenance."]],
    stepsTitle: ["From tag to found.", "Three steps to find any asset."],
    steps: [["Tag your assets", "Attach a tag to vehicles, tools or machinery."], ["Search the site", "Search by name or type and see the asset in the map."], ["Go and get it", "Go straight to the right place instead of searching."]],
  },
  sensors: {
    slug: "/sensor-integration", label: "Sensor Integration",
    heroImage: sensorHeroMap.url, stepsVisual: "sensor", spotlight: "sensor",
    h1: ["Real-time insights", "from connected sensors"],
    introTitle: ["Connect sensors.", "Visualize alarms."],
    intro: "View ventilation, gas and environmental sensor data alongside people and assets on the same map. When an alarm is triggered, see its location and identify nearby personnel.",
    image: sensorAsset.url, imageAlt: "Ventilation fan VF-320 with carbon monoxide, nitrogen dioxide, oxygen and air flow readings next to its alarm on the site map", showcaseRight: true,
    benefits: [["Integrate with existing sensors", "Bring ventilation, gas detection and other systems into one live view."], ["Alarms and warnings in real time", "See status changes the moment they happen, at the exact location."], ["People near an alarm", "Know who is close to an alarm before you send anyone in."], ["Act directly", "Message the affected zone or start an evacuation from the same view."]],
    stepsTitle: ["From sensor alert to action.", "All in one view."],
    steps: [["Connect your sensors", "Integrate with your existing systems without replacing your current setup."], ["See alarms in the map", "Warnings and alarms appear on the map, showing who is nearby."], ["Act straight away", "Message an entire zone or initiate an evacuation directly from Mobilaris Site™."]],
  },
};

const StepPlaceholder = () => <div className="flex aspect-[4/3] items-center justify-center rounded-[14px] bg-paper text-ink/30" aria-hidden="true"><ImageIcon className="h-8 w-8" /></div>;

export default function FeaturePage({ feature }: { feature: FeatureConfig }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const originalTitle = document.title;
    document.title = `${feature.label} | Mobilaris Site™`;
    return () => { document.title = originalTitle; };
  }, [feature]);
  const others = featureLinks.filter(f => f.href !== feature.slug);
  return <main className="messaging-page bg-surface text-foreground">
    <Navigation />
    <section className={`message-hero relative overflow-hidden pt-[116px] ${feature.heroImage ? "md:pt-0" : "md:pt-[136px]"}`}>
      <div className={feature.heroImage ? "feature-map-stage" : "message-stage relative h-[620px] md:h-[720px]"}>
        <div className={feature.heroImage ? "feature-map-visual message-stage relative" : "absolute inset-0"}>
          <img src={feature.heroImage ?? heroBg.url} alt="" aria-hidden="true" className="message-hero-bg intro-image" loading="eager" style={{ animationDelay: "0.1s" }} />
        </div>
        <div className={`message-content relative z-10 flex flex-col ${feature.heroImage ? "feature-map-copy pb-12 pt-6 md:pb-16 md:pt-8" : "h-full justify-end pb-20"}`}><p className="intro mb-6 text-base text-foreground/45" style={{ animationDelay: "0.15s" }}>{feature.label}</p><h1 className="max-w-[800px] text-[42px] font-medium leading-[1.08] md:text-[64px]"><span className="intro inline-block" style={{ animationDelay: "0.22s" }}>{feature.h1[0]}</span><br className="hidden sm:block" /> <span className="intro inline-block" style={{ animationDelay: "0.3s" }}>{feature.h1[1]}</span></h1></div>
      </div>


      <Reveal bg="bg-surface"><div className="message-content grid gap-8 py-20 md:grid-cols-2 md:gap-24 md:py-[120px]"><h2 className="text-[32px] font-medium leading-[1.12] md:text-[40px]">{feature.introTitle[0]}{feature.introTitle[1] && <><br /><span className="text-foreground/45">{feature.introTitle[1]}</span></>}</h2><p className="max-w-[560px] text-base leading-relaxed text-foreground/60 md:text-lg">{feature.intro}</p></div></Reveal>
      <Reveal bg="bg-surface"><div className="px-3 pb-20 md:px-5 md:pb-[120px]"><div className={`message-showcase-frame ${feature.showcaseWide ? "message-showcase-frame--shot" : feature.showcaseRight ? "message-showcase-frame--right flex justify-end" : "flex justify-center"}`}><img src={feature.image} alt={feature.imageAlt} loading="lazy" className={feature.showcaseWide ? "message-showcase-img" : `h-auto w-full max-w-[720px]${feature.showcaseRight ? " message-showcase-drop" : ""}`} /></div></div></Reveal>
    </section>
    <Reveal bg="bg-surface"><section className="message-benefits py-20 md:py-[120px]"><div className="message-content"><h2 className="max-w-[900px] text-[32px] font-medium leading-[1.17] md:text-[40px]">Key benefits. <span className="text-foreground/45">Alarms with context, so teams can respond where it matters.</span></h2><div className="mt-16 grid border-y border-foreground/10 sm:grid-cols-2 lg:grid-cols-4">{feature.benefits.map(([title,text],index) => <div key={title} className={`border-foreground/10 py-8 sm:px-7 sm:odd:border-r lg:border-r lg:first:pl-0 lg:last:border-r-0 ${index === 0 ? "" : "border-t"} ${index === 1 ? "sm:border-t-0" : ""} lg:border-t-0`}><p className="mb-5 text-xs text-foreground/40">0{index+1}</p><h3 className="mb-4 text-xl font-medium leading-snug">{title}</h3><p className="text-base leading-relaxed text-foreground/50">{text}</p></div>)}</div></div></section></Reveal>
    <Reveal bg="bg-paper"><section className={`bg-paper py-24 text-ink md:pb-[120px] md:pt-[160px] ${feature.stepsVisual === "people" ? "people-steps" : ""}${feature.stepsVisual === "emergency" ? " emergency-steps" : ""}${feature.stepsVisual === "sensor" ? " sensor-steps" : ""}`}><div className="message-content"><h2 className="max-w-[900px] text-[34px] font-medium leading-[1.12] md:text-[48px]">{feature.stepsTitle[0]}{feature.heroImage ? <br /> : " "}<span className="text-ink/45">{feature.stepsTitle[1]}</span></h2><div className="mt-16 grid gap-5 lg:grid-cols-3">{feature.steps.map(([title,text],index) => <article key={title} className="rounded-[20px] border border-ink/5 bg-card-light p-7">{feature.stepsVisual === "people" ? <PeopleStepVisual step={index} /> : feature.stepsVisual === "emergency" ? <EmergencyStepVisual step={index} /> : feature.stepsVisual === "sensor" ? <SensorStepVisual step={index} /> : <StepPlaceholder />}<p className="mb-3 mt-8 text-sm text-brand">Step {index+1}</p><h3 className="mb-3 text-[22px] font-medium leading-snug">{title}</h3><p className="text-base leading-relaxed text-ink/60">{text}</p></article>)}</div></div></section></Reveal>
    {feature.spotlight === "sensor" && <Reveal bg="bg-paper"><SensorSpotlight /></Reveal>}
    {feature.peopleExtras && <Reveal bg="bg-paper"><PeopleMobile /></Reveal>}
    {feature.peopleExtras && <Reveal bg="bg-paper"><PeoplePrivacy /></Reveal>}
    <Reveal bg="bg-paper"><section className="bg-paper py-24 text-ink md:py-[140px]"><div className="message-content"><div className="flex flex-wrap items-end justify-between gap-6"><h2 className="text-[30px] font-medium leading-tight md:text-[40px]">More features. <span className="text-ink/45">One platform, one live map.</span></h2><Button asChild variant="link" className="h-auto p-0 text-brand"><Link to="/#key-features">All features <ArrowRight /></Link></Button></div><div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">{others.map(f => <Link key={f.n} to={f.href} className="group flex min-h-0 flex-col rounded-[20px] border border-ink/5 bg-card-light p-5 transition-colors hover:bg-ink/10 sm:min-h-[256px] sm:p-7"><div className="mb-6 flex items-center justify-between sm:mb-14"><span className="text-sm text-ink/40">{f.n}</span><span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper"><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span></div><h3 className="mb-2 text-lg font-medium leading-snug sm:mb-3 sm:text-xl">{f.title}</h3><p className="text-sm leading-relaxed text-ink/60 sm:text-base">{f.text}</p></Link>)}</div></div></section></Reveal>
    <Reveal bg="bg-white"><ContactSection /></Reveal>
    <Footer />
  </main>;
}
