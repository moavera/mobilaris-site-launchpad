// Illustrations for the Sensor Integration "steps" cards (Figma node 407:1451).
// The mine map is drawn from the same tunnel geometry the other feature pages use, so the
// mock-ups stay sharp at any width; colours come from the .sensor-steps tokens in index.css.

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
const zoneShape =
  "M0.649765 7.36319C0.174474 3.65593 3.16773 0.421051 6.90068 0.607698L115.012 6.01327C117.784 6.15184 120.098 8.17272 120.61 10.9001L130.491 63.5994C131.154 67.136 128.577 70.4568 124.986 70.6923L15.3646 77.8806C12.2021 78.088 9.42371 75.8 9.02069 72.6564L0.649765 7.36319Z";

const integrations = [
  { name: "Ventilation control", meta: "42 fans", state: "Connected", ok: true },
  { name: "Gas detection", meta: "18 detectors", state: "Connected", ok: true },
  { name: "Temperature", meta: "Pending setup", state: "Pending", ok: false },
];

/**
 * The tunnel network, laid out inside a map frame of `width` × `height` design units and
 * stretched to fill whatever the card actually is. `x`/`y` place the frame's top-left corner
 * inside the tunnel drawing, which is what crops the map to the section worth showing.
 */
function MineMap({ width, height, x, y }: { width: number; height: number; x: number; y: number }) {
  return (
    <svg className="sensor-map-svg" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden="true">
      <svg x={x} y={y} width="511.75" height="182.38" viewBox="0 0 511.69 182.375" preserveAspectRatio="none">
        <g className="sensor-map-lines">
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
        <g className="sensor-map-route">
          {route.map((d) => <path key={d} d={d} />)}
        </g>
      </svg>
    </svg>
  );
}

export function SensorStepVisual({ step }: { step: number }) {
  return (
    <div className="sensor-step-visual" aria-hidden="true">
      {step === 0 && (
        <>
          <div className="sensor-mini-header"><span>Integrations</span></div>
          <div className="sensor-list">
            {integrations.map((row) => (
              <div key={row.name} className="sensor-row">
                <div className="sensor-row-text"><b>{row.name}</b><small>{row.meta}</small></div>
                <span className={`sensor-row-state${row.ok ? "" : " sensor-row-state--pending"}`}>
                  <i />{row.state}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <div className="sensor-mini-header">
            <span>Map · Level 420</span>
            <span className="sensor-alarm-text">1 sensor alarm</span>
          </div>
          <div className="sensor-map sensor-map--alarm">
            <MineMap width={287} height={168} x={-112.52} y={-14.28} />
            <i className="sensor-glow" style={{ left: "39.55%", top: "25.6%" }} />
            <span className="sensor-chip sensor-chip--alarm" style={{ left: "40.77%", top: "26.79%" }}>CO 48 ppm</span>
            <i className="sensor-pin" style={{ left: "50.17%", top: "43.45%" }} />
            <i className="sensor-dot" style={{ left: "37.28%", top: "56.55%" }} />
            <i className="sensor-dot" style={{ left: "67.94%", top: "33.93%" }} />
            <i className="sensor-dot" style={{ left: "64.46%", top: "63.69%" }} />
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="sensor-map sensor-map--action">
            <svg className="sensor-map-svg" viewBox="0 0 287 140" preserveAspectRatio="none" aria-hidden="true">
              <svg x={-140.37} y={-19.68} width="511.75" height="182.38" viewBox="0 0 511.69 182.375" preserveAspectRatio="none">
                <g className="sensor-map-lines">
                  {drift.map((d) => <path key={d} d={d} />)}
                </g>
              </svg>
              <svg x={-115.43} y={64.85} width="461.87" height="44.8" viewBox="0 0 461.816 44.7808" preserveAspectRatio="none">
                <g className="sensor-map-route">
                  {route.map((d) => <path key={d} d={d} />)}
                </g>
              </svg>
              <svg x={76.33} y={27} width="132" height="78" viewBox="0 0 131.195 78.4936" preserveAspectRatio="none">
                <path className="sensor-zone" d={zoneShape} />
              </svg>
            </svg>
            <i className="sensor-glow" style={{ left: "37.4%", top: "24.29%" }} />
            <span className="sensor-chip sensor-chip--alarm" style={{ left: "38.33%", top: "26.43%" }}>CO 48 ppm</span>
            <i className="sensor-pin" style={{ left: "47.85%", top: "45.71%" }} />
            <i className="sensor-dot" style={{ left: "37.74%", top: "59.29%" }} />
            <i className="sensor-dot" style={{ left: "59.35%", top: "36.43%" }} />
            <i className="sensor-dot" style={{ left: "62.14%", top: "63.57%" }} />
            <span className="sensor-chip" style={{ left: "27.87%", top: "79.29%" }}>Drift 12 · 3 people</span>
          </div>
          <div className="sensor-actions">
            <span className="sensor-action">Message zone</span>
            <span className="sensor-action sensor-action--alarm">Start evacuation</span>
          </div>
        </>
      )}
    </div>
  );
}
