import { useState } from "react";
import {
  Award,
  ChevronDown,
  FlaskConical,
  Globe,
  Network,
  Plane,
  Shuffle,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  sectionContentMt,
  sectionDivider,
  sectionLabelClass,
  sectionPadding,
  sectionSubtitleClass,
} from "@/lib/section-styles";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { whyIvyLeague } from "@/data/ivy-league";

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  "trending-up": TrendingUp,
  flask: FlaskConical,
  globe: Globe,
  plane: Plane,
  network: Network,
  shuffle: Shuffle,
};

function WhyIvyDetailPanel({
  active,
  activeIndex,
}: {
  active: (typeof whyIvyLeague)[number];
  activeIndex: number;
}) {
  const ActiveIcon = iconMap[active.icon] ?? Award;

  return (
    <div className="ivy-spotlight-reveal relative overflow-hidden rounded-3xl border border-[#8c1d2b]/20 bg-background p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10 lg:min-h-[320px]">
      <div className="ivy-shimmer pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="ivy-orbit-ring pointer-events-none absolute -right-20 -top-20 size-56 rounded-full border border-dashed border-[#8c1d2b]/15" />

      <div className="relative">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-[#8c1d2b]/10 text-[#8c1d2b]">
          <ActiveIcon className="size-7" strokeWidth={1.5} />
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-foreground sm:text-3xl">
          {active.title}
        </h3>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {active.body}
        </p>
        <div className="mt-8 flex items-center gap-2 border-t border-border pt-6">
          <span className="ivy-pulse-dot size-2 rounded-full bg-accent" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            Benefit {activeIndex + 1} of {whyIvyLeague.length}
          </span>
        </div>
      </div>
    </div>
  );
}

function IvyWhyMobileAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div className={`${sectionContentMt} space-y-2 lg:hidden`}>
      {whyIvyLeague.map((item, i) => {
        const Icon = iconMap[item.icon] ?? Award;
        const isExpanded = expandedId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-2xl border transition-all duration-500",
              isExpanded
                ? "border-[#8c1d2b]/40 bg-background shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
                : "border-border bg-background/60",
            )}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isExpanded}
              className="flex w-full items-start gap-3 p-4 text-left sm:p-5"
            >
              <div
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-500",
                  isExpanded
                    ? "bg-[#8c1d2b]/10 text-[#8c1d2b]"
                    : "bg-secondary text-muted-foreground",
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[10px] text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-sm font-semibold leading-snug text-foreground">
                  {item.title}
                </span>
              </div>
              <ChevronDown
                className={cn(
                  "mt-1 size-5 shrink-0 text-[#8c1d2b] transition-transform duration-300",
                  isExpanded && "rotate-180",
                )}
                strokeWidth={2}
                aria-hidden
              />
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border px-4 pb-5 pt-4 sm:px-5">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.body}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="ivy-pulse-dot size-2 rounded-full bg-accent" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                      Benefit {i + 1} of {whyIvyLeague.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function IvyWhySection() {
  const [activeId, setActiveId] = useState(whyIvyLeague[0]!.id);
  const active = whyIvyLeague.find((item) => item.id === activeId)!;
  const activeIndex = whyIvyLeague.findIndex((w) => w.id === activeId);

  return (
    <section id="why-ivy" className={`${sectionDivider} ${sectionPadding}`}>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="left" className="max-w-3xl">
          <p className={sectionLabelClass}>Why Ivy League?</p>
          <h2 className={sectionSubtitleClass}>Academic prestige that opens every door.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            <span className="lg:hidden">
              Tap a benefit and use the arrow to expand full details right on the card.
            </span>
            <span className="hidden lg:inline">
              Hover or tap a benefit to spotlight it - each reason families choose the Ivy path,
              summarized for clarity.
            </span>
          </p>
        </ScrollReveal>

        <IvyWhyMobileAccordion />

        <div className={`${sectionContentMt} hidden gap-6 lg:grid lg:grid-cols-12 lg:gap-10`}>
          <ScrollReveal direction="up" className="lg:col-span-5">
            <div className="grid auto-rows-fr grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2">
              {whyIvyLeague.map((item, i) => {
                const Icon = iconMap[item.icon] ?? Award;
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    className={cn(
                      "group relative flex h-full min-h-[112px] flex-col items-start rounded-2xl border p-4 text-left transition-all duration-500 sm:min-h-[140px] sm:p-5",
                      isActive
                        ? "border-[#8c1d2b]/40 bg-background shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
                        : "border-border bg-background/60 opacity-70 hover:border-accent/30 hover:opacity-100",
                    )}
                  >
                    <div
                      className={cn(
                        "mb-3 flex size-9 items-center justify-center rounded-xl transition-colors duration-500",
                        isActive
                          ? "bg-[#8c1d2b]/10 text-[#8c1d2b]"
                          : "bg-secondary text-muted-foreground group-hover:text-accent",
                      )}
                    >
                      <Icon className="size-4" strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-auto line-clamp-3 text-xs font-semibold leading-snug text-foreground sm:text-sm">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={80} className="lg:col-span-7">
            <div key={activeId}>
              <WhyIvyDetailPanel active={active} activeIndex={activeIndex} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
