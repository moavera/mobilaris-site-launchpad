import { MapPin } from "lucide-react";

export function PeopleStepVisual({ step }: { step: number }) {
  return <div className={`people-step-visual people-step-visual--${step}`} aria-hidden="true">
    {step === 0 && <>
      <div className="people-mini-header"><span>Check-in station</span><span><MapPin /> Gate 2</span></div>
      <div className="people-check-title">Check in<small>Enter your 5-digit Tag ID</small></div>
      <div className="people-tag-digits">{["2", "8", "4", "1", ""].map((digit, index) => <span key={index}>{digit || <i />}</span>)}</div>
      <div className="people-check-action">Check in</div>
    </>}
    {step === 1 && <>
      <div className="people-mini-header"><span>Live positions</span><span>Updated now</span></div>
      <svg className="people-live-map" viewBox="0 0 287 128" preserveAspectRatio="none">
        <path d="M-5 39L293 66 M50-5L76 132 M131 48L175 103L293 112 M248-5L221 10L209 56 M10 66L62 66L86 98L189 98 M0 95L287 106 M96 50L93 79" />
        {[[70,34],[150,50],[216,58],[132,96],[240,104],[100,74],[190,80]].map(([cx,cy], index) => <circle key={index} cx={cx} cy={cy} r={index === 5 ? 7 : 3.5} className={index === 6 ? "people-map-dot--safe" : "people-map-dot"} />)}
      </svg>
      <div className="people-map-totals"><div>118<small>Above ground</small></div><div>24<small>Underground</small></div></div>
    </>}
    {step === 2 && <>
      <div className="people-mini-header"><span>Filters</span><span>3 people</span></div>
      <div className="people-filter-tags"><span>Team B</span><span>Contractor</span><span>Level 380</span></div>
      <div className="people-member-label">Members</div>
      <div className="people-members">{[
        ["ES", "Erik Ström", "Workshop · Level 380", "Safe"],
        ["SN", "Sara Nilsson", "Workshop · Level 380", "Safe"],
        ["MB", "Mikael Berg", "Ramp 4", "Unsafe"],
      ].map(([initials, name, location, status]) => <div className="people-member" key={name}><span className="people-avatar">{initials}</span><div>{name}<small>{location}</small></div><span className={status === "Safe" ? "people-member-safe" : "people-member-unsafe"}>{status}</span></div>)}</div>
    </>}
  </div>;
}