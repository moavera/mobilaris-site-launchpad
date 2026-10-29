// Illustrations for the Asset Tracking "steps" cards (Figma node 407:767).
// The mine map is drawn from the same tunnel geometry the other feature pages use, so the
// mock-ups stay sharp at any width; colours come from the .asset-steps tokens in index.css.

// Tunnel network (511.69 × 182.375) and the highlighted route (461.816 × 44.7808) sit at a
// fixed offset inside that frame, so one pair of offsets serves every card that shows the map.
const drift = [
  "M0.84487 50.97L128.345 43.9757L247.345 60.2957L366.345 67.29L510.845 78.9472",
  "M90.9449 0.844867L128.345 43.9763L104.545 99.9306L135.145 181.531",
  "M247.345 60.2967L230.345 123.245L332.345 144.228L510.845 134.902",
  "M366.345 67.2906L386.745 15.9992L434.345 0.844867",
  "M0.84487 137.234L104.545 99.9313",
];
const route = [
  "M1.40778 6.07059L79.6078 1.40773L154.408 10.7334L222.408 6.07059L317.608 20.0592L460.408 22.3906",
  "M154.408 10.7328L174.808 43.3728",
];
const routeOffset = { x: 24.94, y: 84.53 };

/**
 * The tunnel network, laid out inside a map frame of `width` × `height` design units and
 * stretched to fill whatever the card actually is. `x`/`y` place the frame's top-left corner
 * inside the tunnel drawing, which is what crops the map to the section worth showing.
 */
function MineMap({ width, height, x, y }: { width: number; height: number; x: number; y: number }) {
  return (
    <svg className="asset-map-svg" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden="true">
      <svg x={x} y={y} width="511.75" height="182.38" viewBox="0 0 511.69 182.375" preserveAspectRatio="none">
        <g className="asset-map-lines">
          {drift.map((d) => <path key={d} d={d} />)}
        </g>
      </svg>
      <svg
        x={x + routeOffset.x}
        y={y + routeOffset.y}
        width="461.87"
        height="44.8"
        viewBox="0 0 461.816 44.7808"
        preserveAspectRatio="none"
      >
        <g className="asset-map-route">
          {route.map((d) => <path key={d} d={d} />)}
        </g>
      </svg>
    </svg>
  );
}

/** Micro icons for the asset label pills, drawn as strokes so they stay crisp at 11 px. */
function AssetIcon({ kind }: { kind: "loader" | "drill" | "cylinder" }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "loader" && (
        <>
          <path d="M2 7.2V4.4h4v2.8" />
          <path d="M6 5.4h2.2l1.6 1.9" />
          <circle cx="3.4" cy="8.9" r="1.3" />
          <circle cx="8" cy="8.9" r="1.3" />
        </>
      )}
      {kind === "drill" && (
        <>
          <path d="M6 1.9 3.2 9.4h5.6z" />
          <path d="M4.3 6.6h3.4" />
          <path d="M2.2 9.4h7.6" />
        </>
      )}
      {kind === "cylinder" && (
        <>
          <path d="M4.3 4.5h3.4v4.9a1.2 1.2 0 0 1-1.2 1.2H5.5a1.2 1.2 0 0 1-1.2-1.2z" />
          <path d="M5.4 4.5V2.8h1.2v1.7" />
          <path d="M4.8 2.8h2.4" />
        </>
      )}
    </svg>
  );
}

const assets = [
  { name: "Loader LH-02", kind: "loader" as const, dot: { left: "28.6%", top: "39.62%" }, chip: { left: "14.3%", top: "26.79%" } },
  { name: "Drill rig DR-07", kind: "drill" as const, dot: { left: "70.6%", top: "67.62%" }, chip: { left: "56.51%", top: "54.76%" } },
  { name: "Gas cylinder G-12", kind: "cylinder" as const, dot: { left: "32.6%", top: "83.62%" }, chip: { left: "15.7%", top: "70.24%" } },
];

const hazardous = [
  { name: "Explosives", meta: "12 items · Magazine 3" },
  { name: "Gas cylinders", meta: "8 items · Storage B" },
];

export function AssetStepVisual({ step }: { step: number }) {
  return (
    <div className="asset-step-visual" aria-hidden="true">
      {step === 0 && (
        <>
          <p className="asset-visual-title">New asset</p>
          <div className="asset-pills">
            <span className="asset-pill asset-pill--on">Vehicle</span>
            <span className="asset-pill">Tool</span>
            <span className="asset-pill">Machine</span>
          </div>
          <div className="asset-list">
            <div className="asset-row">
              <div className="asset-row-text"><b>Loader LH-14</b><small>Tag 7A03 · Paired</small></div>
              <span className="asset-row-state"><i />Active</span>
            </div>
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <div className="asset-mini-header"><span>Map · Level 320</span><span className="asset-mini-total">3 assets</span></div>
          <div className="asset-map">
            <MineMap width={287} height={168} x={-112.52} y={-14.28} />
            {assets.map((a) => (
              <span key={a.name}>
                <i className="asset-dot" style={a.dot} />
                <span className="asset-chip" style={a.chip}><AssetIcon kind={a.kind} />{a.name}</span>
              </span>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="asset-mini-header"><span>Hazardous items</span><span className="asset-mini-total">Level 320</span></div>
          <div className="asset-list">
            {hazardous.map((row) => (
              <div key={row.name} className="asset-row">
                <div className="asset-row-text"><b>{row.name}</b><small>{row.meta}</small></div>
                <span className="asset-row-state"><i />In safe storage</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
