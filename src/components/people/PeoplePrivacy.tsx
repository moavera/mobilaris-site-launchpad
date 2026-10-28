// Non-interactive illustration: privacy section for People & Workgroup Location.
const Lock = () => (
  <svg viewBox="0 0 12 12" className="privacy-pill__lock" aria-hidden="true">
    <rect x="2.5" y="5.5" width="7" height="5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.1" />
    <path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" fill="none" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);

const Pill = ({ x, y, name, sub, lock = true }: { x: number; y: number; name: string; sub: string; lock?: boolean }) => (
  <div className="privacy-pill" style={{ left: `${x}%`, top: `${y}%` }}>
    {lock && <Lock />}
    <div><p className="privacy-pill__name">{name}</p><p className="privacy-pill__sub">{sub}</p></div>
  </div>
);

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
          <svg viewBox="0 0 680 380" preserveAspectRatio="xMidYMid slice" className="privacy-map">
            <g stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" fill="none">
              <path d="M0 110 L330 90 L680 140" /><path d="M120 0 L180 170 L300 380" /><path d="M480 0 L460 200" />
              <path d="M0 230 L250 250 L420 290 L680 270" /><path d="M560 0 L520 160 L620 380" /><path d="M330 90 L390 0" />
              <path d="M0 330 L200 300" /><path d="M240 70 L230 100" /><path d="M300 60 L290 95" />
            </g>
            <g stroke="rgba(255,255,255,0.35)" strokeWidth="3" fill="none" strokeLinecap="round">
              <path d="M0 196 L119 190 L238 205 L333 197 L460 210 L598 237 L680 236" />
              <path d="M262 214 L250 330" /><path d="M460 210 L480 160" />
            </g>
          </svg>
          <span className="privacy-dot" style={{ left: "17.5%", top: "50%" }} />
          <span className="privacy-dot" style={{ left: "49%", top: "52.5%" }} />
          <span className="privacy-dot" style={{ left: "38.5%", top: "74.5%" }} />
          <span className="privacy-glow" style={{ left: "87.9%", top: "62%" }} />
          <span className="privacy-dot privacy-dot--alert" style={{ left: "87.9%", top: "62%" }} />
          <Pill x={8.5} y={31.5} name="Anonymous" sub="Tag 4F21" />
          <Pill x={40} y={34.3} name="Anonymous" sub="Tag 7A03" />
          <Pill x={29.5} y={56.3} name="Anonymous" sub="Tag 2C9E" />
          <Pill x={78.5} y={44} name="Anna Lind" sub="Crew 3 · Emergency" lock={false} />
          <div className="privacy-status"><span />Emergency – identities unlocked for rescue</div>
        </div>
      </div>
    </section>
  );
}
