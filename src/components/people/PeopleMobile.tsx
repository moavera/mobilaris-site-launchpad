import phonesAsset from "@/assets/mobile-phones.png.asset.json";

// Mobile app section for People & Workgroup Location: the two phones are the
// exported design image, so the illustrated controls can never be mistaken for
// live product actions.
export function PeopleMobile() {
  return (
    <section className="bg-paper px-3 pb-3 md:px-6 md:pb-6">
      <div className="mobile-card">
        <div className="mobile-text">
          <p className="mobile-eyebrow">Mobile</p>
          <h2 className="mobile-title">
            Find the right people. <span>Wherever you are.</span>
          </h2>
          <p className="mobile-body">
            Use the mobile app to search for a person or workgroup, see their location on the map and access key
            details at a glance, including photo, role, workgroup and contact information.
          </p>
        </div>
        <div className="mobile-visual">
          <img
            className="mobile-visual__img"
            src={phonesAsset.url}
            alt="The Mobilaris Site mobile app showing a map of people underground and a person's profile details"
          />
        </div>
      </div>
    </section>
  );
}
