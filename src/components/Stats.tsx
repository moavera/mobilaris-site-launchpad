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
 * cap height of "50+" and "2012") everywhere. The lobes are true circles that
 * overlap slightly at the middle, giving the classic round ∞ silhouette
 * instead of a flat, ribbon-like lemniscate.
 */
const SW = 7.45; // stroke width in viewBox units
const R = 21.27; // lobe radius — fills the full cap-height band
const C = 20.55; // lobe centre offset from the middle; R > C => the lobes cross
const CY = R + SW / 2;
const VB_W = (C + R) * 2 + SW;
const VB_H = R * 2 + SW;

const InfinityMark = ({ className }: { className?: string }) => (
  <svg
    viewBox={`0 0 ${VB_W.toFixed(2)} ${VB_H.toFixed(2)}`}
    className={className}
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle
      cx={(VB_W / 2 - C).toFixed(2)}
      cy={CY}
      r={R}
      stroke="currentColor"
      strokeWidth={SW}
    />
    <circle
      cx={(VB_W / 2 + C).toFixed(2)}
      cy={CY}
      r={R}
      stroke="currentColor"
      strokeWidth={SW}
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
