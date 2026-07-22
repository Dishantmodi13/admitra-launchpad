import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import type {
  CoachingHeroGlassCard,
  CoachingHeroHeadlinePart,
  CoachingTestHeroConfig,
} from "@/data/coaching-hero-configs";
import { cn } from "@/lib/utils";
import { MobileHeroGoToNav } from "@/components/site/MobileHeroGoToNav";
import { coachingProgramNavLinks } from "@/data/primary-nav";
import {
  useSectionScrollOffset,
  useSmoothScroll,
} from "@/components/site/SmoothScrollProvider";

function WorldMapOutline({ stroke }: { stroke: string }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
      viewBox="0 0 1200 600"
      fill="none"
      aria-hidden
    >
      <ellipse cx="600" cy="280" rx="500" ry="220" stroke={stroke} strokeWidth="1" />
      <path
        d="M200 260c50-55 130-80 210-65 55 10 100 45 155 40 75-7 140-50 215-38 85 16 150 65 230 58"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="380" cy="220" r="2.5" fill={stroke} opacity="0.45" />
      <circle cx="620" cy="200" r="2" fill={stroke} opacity="0.35" />
      <circle cx="850" cy="250" r="2.5" fill={stroke} opacity="0.45" />
    </svg>
  );
}

function FloatingGlassCard({
  card,
  scrollOffset,
  accentValues,
  accentTextClass,
}: {
  card: CoachingHeroGlassCard;
  scrollOffset: number;
  accentValues: readonly string[];
  accentTextClass: string;
}) {
  return (
    <div
      className={cn(
        "scholastic-glass-card absolute z-20 hidden min-w-[9rem] rounded-2xl border border-white/45 bg-white/60 px-3.5 py-3 shadow-[0_8px_32px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:block sm:px-4 sm:py-3.5",
        card.position,
      )}
      style={{
        animationDelay: card.delay,
        animationDuration: card.duration,
        transform: `translateY(${scrollOffset * 0.1}px)`,
      }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-[11px]">
        {card.title}
      </p>
      <div className="mt-1.5 space-y-0.5">
        {card.lines.map((line) => (
          <p
            key={line}
            className={cn(
              "leading-snug text-[#0F172A]",
              card.accent && accentValues.includes(line)
                ? cn("text-lg font-bold tracking-tight sm:text-xl", accentTextClass)
                : "text-[11px] font-medium sm:text-xs",
            )}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function HeadlineLine({
  parts,
  gradientClass,
  delay,
  visible,
  fullGradient = false,
}: {
  parts: CoachingHeroHeadlinePart[];
  gradientClass: string;
  delay: number;
  visible: boolean;
  fullGradient?: boolean;
}) {
  return (
    <span
      className={cn(
        "block overflow-hidden",
        visible ? "scholastic-text-reveal" : "opacity-0",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span
        className={cn(
          "block text-[2.1rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#0F172A] sm:text-[2.65rem] lg:text-[3.1rem]",
          fullGradient && cn("bg-gradient-to-r bg-clip-text text-transparent", gradientClass),
        )}
      >
        {parts.map((part) =>
          part.gradient ? (
            <span
              key={part.text}
              className={cn(
                "bg-gradient-to-r bg-clip-text text-transparent",
                gradientClass,
              )}
            >
              {part.text}
            </span>
          ) : (
            <span key={part.text}>{part.text}</span>
          ),
        )}
      </span>
    </span>
  );
}

export function CoachingTestHero({ config }: { config: CoachingTestHeroConfig }) {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollOffset = useSectionScrollOffset(sectionRef);
  const { scrollToSection } = useSmoothScroll();
  const [visible, setVisible] = useState(false);
  const { theme } = config;

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const timer = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const scrollToBenefits = () => {
    scrollToSection(config.benefitsSectionId);
  };

  return (
    <section
      ref={sectionRef}
      aria-label={config.ariaLabel}
      className="relative overflow-hidden border-b border-slate-200/60 bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{ background: theme.background }}
      />

      <WorldMapOutline stroke={theme.mapStroke} />

      <div
        className={cn(
          "pointer-events-none absolute -right-20 top-16 size-80 rounded-full blur-3xl",
          theme.blurOrbRight,
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute -left-12 bottom-24 size-64 rounded-full blur-3xl",
          theme.blurOrbLeft,
        )}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-14 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-5">
            <p
              className={cn(
                "font-mono text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm sm:tracking-[0.24em]",
                theme.eyebrowClass,
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "80ms" }}
            >
              {config.eyebrow}
            </p>

            <h1 className="mt-5">
              <HeadlineLine
                visible={visible}
                delay={140}
                parts={config.headlineLine1}
                gradientClass={theme.primaryGradient}
              />
              <HeadlineLine
                visible={visible}
                delay={280}
                parts={config.headlineLine2}
                gradientClass={theme.secondaryGradient}
                fullGradient={config.headlineLine2.every((p) => p.gradient)}
              />
            </h1>

            <p
              className={cn(
                "mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-[1.05rem]",
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "420ms" }}
            >
              {config.description}
            </p>

            <div
              className={cn(
                "mt-8 flex flex-wrap items-center gap-3 sm:gap-4",
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "540ms" }}
            >
              <Link
                to="/enquiry"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#0F172A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e293b] hover:shadow-[0_8px_32px_rgba(15,23,42,0.22)]"
              >
                Book Free Demo Class
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <button
                type="button"
                onClick={scrollToBenefits}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#0F172A] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-md",
                  theme.secondaryButtonHover,
                )}
              >
                Check Benefits
              </button>
            </div>

            <div
              className={cn(
                "mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-200/80 pt-4 sm:mt-10 sm:gap-x-5 sm:gap-y-3 sm:pt-8",
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "660ms" }}
            >
              {config.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 sm:text-sm"
                >
                  <span
                    className={cn(
                      "flex size-4 shrink-0 items-center justify-center rounded-full",
                      theme.badgeIconBg,
                    )}
                  >
                    <Check className={cn("size-2.5", theme.badgeIconColor)} strokeWidth={3} />
                  </span>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "relative lg:col-span-7",
              visible ? "scholastic-fade-in" : "opacity-0",
            )}
            style={{ animationDelay: "300ms" }}
          >
            <div
              className="relative mx-auto aspect-[16/10] max-w-2xl overflow-hidden rounded-[1.75rem] shadow-[0_28px_90px_rgba(15,23,42,0.14)] ring-1 ring-slate-900/5 sm:aspect-[16/9] lg:mx-0 lg:ml-auto lg:max-w-none"
              style={{ transform: `translateY(${scrollOffset * -0.06}px)` }}
            >
              <img
                src={config.heroImage}
                alt={config.heroImageAlt}
                width={1600}
                height={900}
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover object-center"
              />
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-t",
                  theme.imageOverlay,
                )}
                aria-hidden
              />
            </div>

            {config.floatingCards.map((card) => (
              <FloatingGlassCard
                key={card.id}
                card={card}
                scrollOffset={scrollOffset}
                accentValues={config.accentValues}
                accentTextClass={theme.accentText}
              />
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
              {config.floatingCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-xl border border-white/50 bg-white/75 px-3 py-2.5 shadow-sm backdrop-blur-md"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    {card.title}
                  </p>
                  {card.lines.map((line) => (
                    <p
                      key={line}
                      className={cn(
                        "text-[11px] text-[#0F172A]",
                        card.accent &&
                          config.accentValues.includes(line) &&
                          cn("text-base font-bold", theme.accentText),
                      )}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToBenefits}
          className={cn(
            "scholastic-scroll-indicator absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 lg:flex",
            theme.scrollHover,
          )}
          aria-label="Scroll to benefits"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.28em]">Scroll</span>
          <ArrowDown className="size-4" />
        </button>
      </div>

      <MobileHeroGoToNav navLinks={coachingProgramNavLinks()} />
    </section>
  );
}
