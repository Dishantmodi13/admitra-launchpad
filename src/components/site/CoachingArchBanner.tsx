import { getCoachingArchBanner } from "@/data/coaching-arch-banners";
import { coachingArchArt } from "@/components/site/coaching-arch-art";

type CoachingArchBannerProps = {
  slug: string;
};

export function CoachingArchBanner({ slug }: CoachingArchBannerProps) {
  const config = getCoachingArchBanner(slug);
  const Art = coachingArchArt[slug];

  if (!config || !Art) return null;

  return (
    <section aria-label="Program banner" className="w-full">
      <div
        className="relative h-[8.75rem] w-full overflow-hidden sm:h-[9.75rem] md:h-[11.25rem] lg:h-[12rem] [border-radius:0_0_50%_50%_/_0_0_2.75rem_2.75rem] md:[border-radius:0_0_50%_50%_/_0_0_3.25rem_3.25rem]"
        style={{
          background: `linear-gradient(135deg, ${config.gradientFrom} 0%, ${config.gradientTo} 100%)`,
        }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Art accent={config.accent} />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-5 text-center sm:pb-6 md:pb-7">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-white/90 sm:text-[11px]">
            {config.eyebrow}
          </p>
          <p className="mt-1.5 max-w-2xl font-serif text-lg italic leading-snug text-white sm:text-xl md:text-2xl lg:text-[1.65rem]">
            {config.title}
          </p>
        </div>
      </div>
    </section>
  );
}
