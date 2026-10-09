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
 * cap height of "50+" and "2012") everywhere. The silhouette is two round
 * lobes that cross at the middle — the classic ∞ shape — not a flat
 * ribbon-like lemniscate.
 */
const SW = 7.45; // stroke width in viewBox units (matches the digit stems)
const SX = 42; // lobe half-width from the centre crossing
const P = 6; // pinch: how far the crossing control point sits from the centre
const SY = 31.55; // control-point rise; sized so the ink fills the full cap band
const CX = SX + SW / 2;
const W = SX * 2 + SW;
const H = 50;

const infinityPath = () =>
  `M ${CX} 25 ` +
  `C ${CX - P} ${25 - SY} ${CX - SX} 0 ${CX - SX} 25 ` +
  `C ${CX - SX} 50 ${CX - P} ${25 + SY} ${CX} 25 ` +
  `C ${CX + P} ${25 - SY} ${CX + SX} 0 ${CX + SX} 25 ` +
  `C ${CX + SX} 50 ${CX + P} ${25 + SY} ${CX} 25 Z`;

const InfinityMark = ({ className }: { className?: string }) => (
  <svg
    viewBox={`0 0 ${W.toFixed(2)} ${H}`}
    className={className}
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d={infinityPath()}
      stroke="currentColor"
      strokeWidth={SW}
      strokeLinejoin="round"
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
                  <InfinityMark className="inline-block h-[0.72em] w-auto translate-y-[0.026em] align-baseline" />
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
