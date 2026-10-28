// Mobile app section for People & Workgroup Location. The two phones are a
// static, non-interactive illustration built in HTML/SVG, so the illustrated
// controls can never be mistaken for live product actions.

const Chevron = () => (
  <svg viewBox="0 0 8 8" className="mobile-chevron" aria-hidden="true">
    <path d="M1.5 3 4 5.5 6.5 3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const Pills = () => (
  <div className="mobile-pills">
    <span className="mobile-pill mobile-pill--light">
      <svg viewBox="0 0 10 10" aria-hidden="true">
        <path d="M5 7.5V2M5 2 2.8 4.2M5 2l2.2 2.2" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
      Share
    </span>
    <span className="mobile-pill">
      <svg viewBox="0 0 10 10" aria-hidden="true">
        <circle cx="5" cy="5" r="2.4" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M5 .8v1.6M5 7.6v1.6M.8 5h1.6M7.6 5h1.6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
      Locate
    </span>
    <span className="mobile-pill">
      <svg viewBox="0 0 10 10" aria-hidden="true">
        <rect x="1" y="1" width="3.2" height="3.2" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="5.8" y="1" width="3.2" height="3.2" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="1" y="5.8" width="3.2" height="3.2" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M6 6.2h1v1H6zM8 8h1v1H8z" fill="currentColor" />
      </svg>
      QR-code
    </span>
  </div>
);

const StatusLine = () => (
  <p className="mobile-status">
    <em>Unsafe</em>
    <i className="mobile-dot" />
    Person
  </p>
);

function PhoneMap() {
  return (
    <div className="mobile-phone mobile-phone--map">
      <div className="mobile-screen mobile-screen--map">
        <div className="mobile-topbar">
          <span className="mobile-search">Search</span>
          <span className="mobile-chip">
            Underground
            <Chevron />
          </span>
        </div>
        <div className="mobile-map">
          <svg viewBox="0 0 100 210" preserveAspectRatio="none" aria-hidden="true">
            <polygon className="mobile-zone" points="46,16 92,10 96,54 58,62 40,40" />
            <g className="mobile-tunnels">
              <path d="M-4 34 26 26 58 34 104 24" />
              <path d="M-4 74 34 66 62 78 104 68" />
              <path d="M-4 116 30 108 66 120 104 110" />
              <path d="M-4 158 40 150 72 162 104 152" />
              <path d="M18 -4 22 60 16 120 24 214" />
              <path d="M56 -4 50 70 60 140 52 214" />
              <path d="M86 -4 92 80 82 150 90 214" />
              <path d="M22 26 50 70 16 120 40 150" />
              <path d="M58 34 92 80 60 140 72 162" />
            </g>
          </svg>
          <span className="mobile-tag mobile-tag--a">Unsafe</span>
          <span className="mobile-tag mobile-tag--b">Unsafe</span>
          <span className="mobile-marker mobile-marker--a" />
          <span className="mobile-marker mobile-marker--b" />
        </div>
        <div className="mobile-sheet">
          <p className="mobile-sheet-title">Person</p>
          <p className="mobile-sheet-sub">Welders</p>
          <StatusLine />
          <Pills />
        </div>
      </div>
    </div>
  );
}

function PhonePerson() {
  return (
    <div className="mobile-phone mobile-phone--person">
      <div className="mobile-screen mobile-screen--person">
        <div className="mobile-sheet mobile-sheet--top">
          <p className="mobile-sheet-title">Person</p>
          <p className="mobile-sheet-sub">Welders</p>
          <StatusLine />
          <Pills />
        </div>
        <div className="mobile-photos">
          <div className="mobile-photo mobile-photo--worker">
            <svg viewBox="0 0 60 60" aria-hidden="true">
              <rect width="60" height="60" fill="#33322f" />
              <circle cx="30" cy="24" r="11" fill="#c98a5e" />
              <path d="M14 22a16 16 0 0 1 32 0z" fill="#f2c018" />
              <path d="M11 22h38v4H11z" fill="#e0ad0f" />
              <path d="M17 60c0-11 6-17 13-17s13 6 13 17z" fill="#f2c018" />
              <path d="M22 60v-11h5v11zM33 60v-11h5v11z" fill="#c9c9c9" />
            </svg>
          </div>
          <div className="mobile-photo mobile-photo--all">See all</div>
          <div className="mobile-photo mobile-photo--add">Add photos</div>
        </div>
        <div className="mobile-tabs">
          <span className="is-active">Overview</span>
          <span>Location</span>
          <span>Integrations</span>
          <span>Photos</span>
        </div>
        <div className="mobile-rows">
          <div className="mobile-row">
            <p className="mobile-row-title">Person</p>
            <p className="mobile-row-sub">Add description</p>
          </div>
          <div className="mobile-row">
            <p className="mobile-row-label">Work group</p>
            <p className="mobile-row-value">Welders</p>
            <p className="mobile-row-label">Contact details</p>
            <p className="mobile-row-value">Michael Smith</p>
            <p className="mobile-row-sub">072-156 19 58</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <div className="mobile-visual" aria-hidden="true">
          <PhoneMap />
          <PhonePerson />
        </div>
      </div>
    </section>
  );
}
