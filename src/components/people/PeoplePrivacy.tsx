// Privacy section for People & Workgroup Location. The map is a static,
// non-interactive illustration image.
import privacyIllustration from "@/assets/privacy-illustration.webp.asset.json";

export function PeoplePrivacy() {
  return (
    <section className="bg-paper px-3 pb-3 md:px-6 md:pb-6">
      <div className="privacy-card">
        <div className="privacy-text">
          <p className="privacy-eyebrow">Privacy</p>
          <h2 className="privacy-title">Privacy on your terms. <span>You decide who sees what.</span></h2>
          <p className="privacy-body">Mobilaris Site™ adapts to your company’s privacy policy. Show identities at all times, keep everyone anonymous until an emergency – or let only selected roles see who is who. Positioning data is always protected.</p>
        </div>
        <div className="privacy-illustration" aria-hidden="true">
          <img src={privacyIllustration.url} alt="" className="privacy-illustration__img" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
