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
    value: "\u221E",
    copy: "positioning technologies supported \u2013 Wi\u2011Fi, LTE, BLE, GPS, UWB and more.",
    infinity: true,
  },
];

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
                  <span className="inline-block -translate-y-[28px] text-[101px] leading-none md:-translate-y-[34px] md:text-[130px]">
                    {stat.value}
                  </span>
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
