const stats = [
  {
    value: "50+",
    copy: "mines worldwide where Mobilaris solutions improve safety and productivity",
  },
  {
    value: "2012",
    copy: "the year we started working closely with customers in complex mining environments",
  },
  {
    value: "∞",
    copy: "positioning technologies supported – Wi‑Fi, LTE, BLE, GPS, UWB and more.",
    infinity: true,
  },
];

/**
 * The infinity glyph is drawn rather than typeset: the page's font does not
 * contain one, so the browser picks an arbitrary fallback whose weight varies
 * between machines. A stroked lemniscate keeps the stroke exactly as thin as
 * the digits next to it (stroke = 0.107em, ink height = 0.70em, matching the
 * cap height of "50+" and "2012") everywhere.
 */
const SW = 7.7; // stroke width in viewBox units
const SCL = 42.3; // (ink height - stroke) / 1, lemniscate scale
const CX = SCL + SW / 2;
const CY = (SCL + SW) / 2;

function lemniscatePath(segments = 12) {
  const pt = (t: number): [number, number] => [
    CX + SCL * Math.cos(t),
    CY + SCL * Math.sin(t) * Math.cos(t),
  ];
  const dPt = (t: number): [number, number] => [
    -SCL * Math.sin(t),
    SCL * Math.cos(2 * t),
  ];
  const step = (Math.PI * 2) / segments;
  let d = "";
  for (let i = 0; i < segments; i++) {
    const t0 = i * step;
    const t1 = (i + 1) * step;
    const [x0, y0] = pt(t0);
    const [x1, y1] = pt(t1);
    const [dx0, dy0] = dPt(t0);
    const [dx1, dy1] = dPt(t1);
    const c1x = x0 + (dx0 * step) / 3;
    const c1y = y0 + (dy0 * step) / 3;
    const c2x = x1 - (dx1 * step) / 3;
    const c2y = y1 - (dy1 * step) / 3;
    if (i === 0) d += `M ${x0.toFixed(2)} ${y0.toFixed(2)} `;
    d += `C ${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(
      2,
    )} ${x1.toFixed(2)} ${y1.toFixed(2)} `;
  }
  return `${d}Z`;
}

const INFINITY_D = lemniscatePath();

const InfinityMark = ({ className }: { className?: string }) => (
  <svg
    viewBox={`0 0 ${(SCL * 2 + SW).toFixed(2)} ${(SCL + SW).toFixed(2)}`}
    className={className}
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d={INFINITY_D}
      stroke="currentColor"
      strokeWidth={SW}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

export const Stats = () => {
  return (
    <section
      id="stats"
      className="group scroll-mt-20 bg-white px-4 py-24 md:px-12 md:pb-[140px] md:pt-[80px] xl:px-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 md:gap-14">
        <p className="max-w-[900px] text-[28px] font-medium leading-[1.15] tracking-[-0.8px] text-ink md:text-[40px]">
          Built on more than a decade underground.
          <span className="text-ink/[0.42]">
            {" "}
            Proven in some of the most demanding workplaces in the world.
          </span>
        </p>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.copy}
              className="flex flex-col gap-3 border-t border-ink/[0.12] pt-7"
            >
              <p className="h-[56px] text-[56px] font-medium leading-none tracking-[-2.16px] text-ink md:h-[72px] md:text-[72px]">
                {stat.infinity ? (
                  <InfinityMark className="inline-block h-[0.7em] w-auto align-baseline" />
                ) : (
                  stat.value
                )}
              </p>
              <p className="max-w-[320px] text-[15px] leading-[1.5] text-ink/[0.6]">
                {stat.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
