// Illustrations for the Emergency Support "steps" cards (Figma node 406:1354).
// Drawn in HTML/SVG so the mock-ups stay sharp at any width; colours come from the
// .emergency-steps tokens in index.css.

const driftLines = "M0.5 30L75.5 25.9 145.5 35.5 215.5 39.6 300.5 46.4M53.5 0.5L75.5 25.9 61.5 58.8 79.5 106.8M145.5 35.5L135.5 72.5 195.5 84.8 300.5 79.4M215.5 39.6L227.5 9.4 255.5 0.5M0.5 80.7L61.5 58.8";
const driftRoute = "M0.8 3.6L46.8 0.8 90.8 6.3 130.8 3.6 186.8 11.8 270.8 13.2M90.8 6.3L102.8 25.5";
const driftLinesTall = "M0.6 46.7L75.6 40.3 145.6 55.3 215.6 61.7 300.6 72.4M53.6 0.6L75.6 40.3 61.6 91.7 79.6 166.7M145.6 55.3L135.6 113.1 195.6 132.4 300.6 123.8M215.6 61.7L227.6 14.5 255.6 0.6M0.6 126L61.6 91.7";
const driftRouteTall = "M1 5.3L47 1 91 9.6 131 5.3 187 18.2 271 20.3M91 9.6L103 39.6";

const AlertIcon = () => (
  <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M5 1L9.16667 8.75H0.833333L5 1Z" stroke="currentColor" strokeWidth="1.08333" strokeLinejoin="round" />
    <path d="M5 4.16667V6.16667" stroke="currentColor" strokeWidth="1.08333" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M2 5.2L4 7.2L8 2.8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const checklist = [
  { label: "Alert sent to affected zones", done: true },
  { label: "Ventilation stopped in Drift 12", done: true },
  { label: "Rescue team notified", done: true },
  { label: "Everyone accounted for", done: false, count: "12 / 22" },
  { label: "Area cleared", done: false },
];

export function EmergencyStepVisual({ step }: { step: number }) {
  return (
    <div className={`emergency-step-visual emergency-step-visual--${step}`} aria-hidden="true">
      {step === 0 && (
        <>
          <div className="emergency-mini-header">
            <span>Alarm</span>
            <span className="emergency-alarm-text">Level 420</span>
          </div>
          <div className="emergency-map">
            <svg className="emergency-map-lines" viewBox="0 0 301 107" preserveAspectRatio="none">
              <path d={driftLines} />
            </svg>
            <svg className="emergency-map-route" viewBox="0 0 271.7 26.3" preserveAspectRatio="none">
              <path d={driftRoute} />
            </svg>
            <i className="emergency-glow" />
            <i className="emergency-pin" />
            <span className="emergency-dot" style={{ left: "18.7%", top: "29px" }} />
            <span className="emergency-dot" style={{ left: "59.6%", top: "47px" }} />
            <span className="emergency-dot" style={{ left: "80.1%", top: "87px" }} />
            <span className="emergency-chip" style={{ left: "31.9%", top: "46px" }}>
              Gas alarm · Drift 12
            </span>
          </div>
          <div className="emergency-sensor">
            <div className="emergency-sensor-text">
              <b>CO 48 ppm – limit 35</b>
              <small>Gas detector GD-12 · 14:02</small>
            </div>
            <span className="emergency-start">
              <AlertIcon />
              Start emergency
            </span>
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <div className="emergency-count-row">
            <div className="emergency-count">
              <b>12</b>
              <span>/22 safe</span>
            </div>
            <span className="emergency-badge">
              <i />
              Emergency
            </span>
          </div>
          <div className="emergency-progress">
            <i style={{ flex: "12 0 0" }} className="emergency-progress-safe" />
            <i style={{ flex: "10 0 0" }} className="emergency-progress-danger" />
          </div>
          <div className="emergency-map emergency-map--tall">
            <svg className="emergency-map-lines" viewBox="0 0 301.2 167.3" preserveAspectRatio="none">
              <path d={driftLinesTall} />
            </svg>
            <svg className="emergency-map-route" viewBox="0 0 272.1 40.6" preserveAspectRatio="none">
              <path d={driftRouteTall} />
            </svg>
            <span className="emergency-dot emergency-dot--person" style={{ left: "15.7%", top: "34px" }} />
            <span className="emergency-chip emergency-chip--danger" style={{ left: "7.1%", top: "16px" }}>
              S. Bergman
            </span>
            <span className="emergency-dot emergency-dot--person" style={{ left: "66.1%", top: "24px" }} />
            <span className="emergency-chip emergency-chip--danger" style={{ left: "60.6%", top: "6px" }}>
              J. Källe
            </span>
            <span className="emergency-dot emergency-dot--person" style={{ left: "78.4%", top: "112px" }} />
            <span className="emergency-chip emergency-chip--danger" style={{ left: "68.8%", top: "94px" }}>
              E. Andersson
            </span>
            <span className="emergency-dot emergency-dot--refuge" style={{ left: "31.7%", top: "75px" }} />
            <span className="emergency-chip emergency-chip--refuge" style={{ left: "22.4%", top: "92px" }}>
              Refuge 1 · 8/8
            </span>
            <span className="emergency-dot emergency-dot--refuge" style={{ left: "59.0%", top: "89px" }} />
            <span className="emergency-chip emergency-chip--refuge" style={{ left: "49.5%", top: "106px" }}>
              Refuge 2 · 2/8
            </span>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="emergency-mini-header">
            <span>Checklist</span>
            <span className="emergency-checklist-count">3 of 5 done</span>
          </div>
          <div className="emergency-progress emergency-progress--check">
            <i style={{ width: "59%" }} />
          </div>
          <div className="emergency-checklist">
            {checklist.map((item) => (
              <div key={item.label}>
                <span className={item.done ? "emergency-check-box" : "emergency-check-box emergency-check-box--open"}>
                  {item.done && <CheckIcon />}
                </span>
                <p className={item.done ? "emergency-check-done" : ""}>{item.label}</p>
                {item.count && <span className="emergency-check-count">{item.count}</span>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
