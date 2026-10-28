import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/ContactSection";
import { ZoneVisual, DurationVisual, AcknowledgementVisual } from "@/components/messaging/MessagingVisuals";
import phones from "@/assets/companion-go-phones.png.asset.json";
import { Footer } from "@/components/Footer";
import heroStage from "@/assets/messaging-hero-stage.webp.asset.json";
import newMessage from "@/assets/messaging-composer-transparent.webp.asset.json";
import newMessageMobile from "@/assets/messaging-composer-transparent-mobile.webp.asset.json";

const corporateUrl = "https://mobilarisindustrialsolutions.se/";
const companionUrl = `${corporateUrl}companion/`;
const benefits = [
  ["Target one zone, several or the whole site", "Choose exactly which zones a message applies to – nobody else is disturbed."],
  ["Set how long a message is active", "Messages expire automatically when they are no longer relevant."],
  ["Severity from info to emergency", "From a shift update to an evacuation – everyone sees how urgent it is."],
  ["See who has received and acknowledged", "Follow up emergencies in real time on who has read and confirmed the message."],
];
const steps = [
  { title: "Choose the zones", text: "Pick one zone, several or the whole site – the message only reaches people there.", Visual: ZoneVisual },
  { title: "Set severity and duration", text: "From info to emergency, active for as long as it matters.", Visual: DurationVisual },
  { title: "Track acknowledgements", text: "See in real time who has received and confirmed the emergency-message.", Visual: AcknowledgementVisual },
];
const otherFeatures = [
  { n: "01", title: "People & Workgroup Location", text: "Who is where – and are they authorized.", href: "/people-workgroup-location" },
  { n: "03", title: "Emergency Support", text: "Faster, safer evacuations.", href: "/emergency-support" },
  { n: "04", title: "Asset Tracking", text: "Locate critical equipment in seconds.", href: "/asset-tracking" },
  { n: "05", title: "Sensor Integration", text: "Sensor alarms, shown in the map.", href: "/sensor-integration" },
];

export default function MessagingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const originalTitle = document.title;
    document.title = "Messaging | Mobilaris Site™";
    return () => { document.title = originalTitle; };
  }, []);
  return <main className="messaging-page bg-surface text-foreground">
    <Navigation />
    <section className="message-hero relative overflow-hidden pt-[116px] md:pt-[136px]">
      <div className="message-stage relative h-[620px] md:h-[720px]">
        <img src={heroStage.url} alt="" aria-hidden="true" className="message-hero-bg intro-image" loading="eager" style={{ animationDelay: "0.1s" }} />
        <div className="message-content relative z-10 flex h-full flex-col justify-end pb-20"><p className="intro mb-6 text-base text-foreground/45" style={{ animationDelay: "0.15s" }}>Messaging</p><h1 className="max-w-[800px] text-[42px] font-medium leading-[1.08] md:text-[64px]"><span className="intro inline-block" style={{ animationDelay: "0.22s" }}>Reach the right people</span><br className="hidden sm:block" /><span className="intro inline-block" style={{ animationDelay: "0.3s" }}>on site, in seconds</span></h1></div>
      </div>
      <Reveal bg="bg-surface"><div className="message-content grid gap-8 py-20 md:grid-cols-2 md:gap-24 md:py-[120px]"><h2 className="text-[32px] font-medium leading-[1.12] md:text-[40px]">Target any zone.<br /><span className="text-foreground/45">Track acknowledgements.</span></h2><p className="max-w-[560px] text-base leading-relaxed text-foreground/60 md:text-lg">From the control room, messages go straight to people on site – a fire, a closed road or an update before the next shift. Choose which zones a message applies to and how long it stays active.</p></div></Reveal>
      <Reveal bg="bg-surface"><div className="px-3 pb-20 md:px-5 md:pb-[120px]"><div className="message-showcase-frame"><picture><source media="(max-width: 767px)" srcSet={newMessageMobile.url} /><img src={newMessage.url} alt="Message composer in the Mobilaris Site app: severity, subject, message, recipients and active period" loading="lazy" className="message-showcase-img" /></picture></div></div></Reveal>
    </section>
    <Reveal bg="bg-surface"><section className="message-benefits py-20 md:py-[120px]"><div className="message-content"><h2 className="max-w-[900px] text-[32px] font-medium leading-[1.17] md:text-[40px]">Key benefits. <span className="text-foreground/45">Everything you need to reach people underground – and know that they got the message.</span></h2><div className="mt-16 grid border-y border-foreground/10 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([title,text],index) => <div key={title} className={`border-foreground/10 py-8 sm:px-7 sm:odd:border-r lg:border-r lg:first:pl-0 lg:last:border-r-0 ${index === 0 ? "" : "border-t"} ${index === 1 ? "sm:border-t-0" : ""} lg:border-t-0`}><p className="mb-5 text-xs text-foreground/40">0{index+1}</p><h3 className="mb-4 text-xl font-medium leading-snug">{title}</h3><p className="text-base leading-relaxed text-foreground/50">{text}</p></div>)}</div></div></section></Reveal>
    <Reveal bg="bg-paper"><section className="bg-paper py-24 text-ink md:pb-[120px] md:pt-[160px]"><div className="message-content"><h2 className="max-w-[900px] text-[34px] font-medium leading-[1.12] md:text-[48px]">From the control room to every phone. <span className="text-ink/45">Three steps in a few seconds.</span></h2><div className="mt-16 grid gap-5 lg:grid-cols-3">{steps.map(({title,text,Visual},index) => <article key={title} className="rounded-[20px] border border-ink/5 bg-card-light p-7"><Visual /><p className="mb-3 mt-8 text-sm text-brand">Step {index+1}</p><h3 className="mb-3 text-[22px] font-medium leading-snug">{title}</h3><p className="text-base leading-relaxed text-ink/60">{text}</p></article>)}</div></div></section></Reveal>
    <Reveal bg="bg-paper"><section className="bg-paper px-3 pb-6 md:px-6"><div className="rounded-[28px] bg-background"><div className="message-content grid items-center gap-10 py-16 lg:min-h-[601px] lg:grid-cols-2 lg:py-16"><div className="max-w-[470px]"><p className="mb-6 text-sm text-brand">Companion GO™</p><h2 className="text-[36px] font-medium leading-[1.14] md:text-[48px]">Your phone becomes the tag. <span className="text-foreground/45">No extra hardware – even underground.</span></h2><p className="mb-6 mt-6 text-base leading-relaxed text-foreground/60">Messages are received in the Companion GO™ app, which also works as a virtual tag – so people can be positioned and reached without carrying a physical tag.</p><Button asChild variant="link" className="h-auto p-0 text-brand"><a href={companionUrl} target="_blank" rel="noopener noreferrer">Learn about Companion GO™ <ArrowRight /></a></Button></div><img src={phones.url} alt="Companion GO™ showing positioning, an evacuation message and the message inbox" loading="lazy" className="mx-auto h-auto max-h-[487px] w-full max-w-[403px] object-contain lg:mr-0" /></div></div></section></Reveal>
    <Reveal bg="bg-paper"><section className="bg-paper py-24 text-ink md:py-[140px]"><div className="message-content"><div className="flex flex-wrap items-end justify-between gap-6"><h2 className="text-[30px] font-medium leading-tight md:text-[40px]">More features. <span className="text-ink/45">One platform, one live map.</span></h2><Button asChild variant="link" className="h-auto p-0 text-brand"><Link to="/#key-features">All features <ArrowRight /></Link></Button></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{otherFeatures.map(feature => <a key={feature.n} href={feature.href} target={feature.href.startsWith("https") ? "_blank" : undefined} rel={feature.href.startsWith("https") ? "noopener noreferrer" : undefined} className="group flex min-h-[256px] flex-col rounded-[20px] border border-ink/5 bg-card-light p-7 transition-colors hover:bg-ink/10"><div className="mb-14 flex items-center justify-between"><span className="text-sm text-ink/40">{feature.n}</span><span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper"><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span></div><h3 className="mb-3 text-xl font-medium leading-snug">{feature.title}</h3><p className="text-base leading-relaxed text-ink/60">{feature.text}</p></a>)}</div></div></section></Reveal>
    <Reveal bg="bg-white"><ContactSection /></Reveal>
    <Footer />
  </main>;
}
