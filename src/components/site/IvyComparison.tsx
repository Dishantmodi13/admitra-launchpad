import { useState } from "react";
import {
  Briefcase,
  Check,
  ChevronDown,
  FlaskConical,
  Globe,
  MousePointerClick,
  Network,
  Shuffle,
  ShieldCheck,
  Stamp,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { comparisonDestinations, comparisonFactors } from "@/data/ivy-league";
import {
  sectionContentMt,
  sectionDivider,
  sectionLabelClass,
  sectionPadding,
  sectionSubtitleClass,
} from "@/lib/section-styles";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  "trending-up": TrendingUp,
  shuffle: Shuffle,
  flask: FlaskConical,
  "shield-check": ShieldCheck,
  stamp: Stamp,
  network: Network,
  briefcase: Briefcase,
};

type DestKey = "ivy" | "india" | "uk" | "canada";
type ComparisonFactor = (typeof comparisonFactors)[number];

function scoreFor(factor: ComparisonFactor, key: DestKey) {
  return factor[`${key}Score` as keyof typeof factor] as number;
}

function textFor(factor: ComparisonFactor, key: DestKey) {
  return factor[key];
}

function ComparisonBar({
  label,
  short,
  color,
  score,
  text,
  highlight,
  delay,
}: {
  label: string;
  short: string;
  color: string;
  score: number;
  text: string;
  highlight: boolean;
  delay: number;
}) {
  const width = (score / 5) * 100;

  return (
    <div
      className={cn(
        "rounded-2xl border p-4 transition-all duration-500 sm:p-5",
        highlight
          ? "border-[#8c1d2b]/30 bg-[#8c1d2b]/[0.04] shadow-[0_8px_24px_rgba(140,29,43,0.06)]"
          : "border-border bg-background",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p
            className={cn(
              "text-sm font-semibold",
              highlight ? "text-[#8c1d2b]" : "text-foreground",
            )}
          >
            {label}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {short}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {highlight && (
            <span className="rounded-full bg-[#8c1d2b]/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-[#8c1d2b]">
              Top pick
            </span>
          )}
          <span className="font-mono text-lg font-bold text-foreground">{score}/5</span>
        </div>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="ivy-comparison-bar h-full rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">{text}</p>
    </div>
  );
}

function ComparisonFactorDetail({
  active,
  animate = true,
}: {
  active: ComparisonFactor;
  animate?: boolean;
}) {
  const Icon = iconMap[active.icon] ?? Globe;

  return (
    <div
      className={cn(
        "relative min-h-0 overflow-hidden rounded-3xl border border-border bg-background p-5 shadow-[0_16px_48px_rgba(15,23,42,0.06)] sm:p-6",
        animate && "ivy-spotlight-reveal",
      )}
    >
      <div className="ivy-orbit-ring pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-dashed border-[#8c1d2b]/15" />

      <div className="relative flex items-start gap-4 border-b border-border pb-5">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#8c1d2b]/10 text-[#8c1d2b]">
          <Icon className="size-5" strokeWidth={1.5} />
        </div>
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Comparing on
          </p>
          <h3 className="mt-1 text-xl font-semibold text-foreground sm:text-2xl">
            {active.label}
          </h3>
        </div>
      </div>

      <div className="relative mt-4 rounded-2xl border border-[#8c1d2b]/20 bg-[#8c1d2b]/[0.04] p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8c1d2b]">
          For parents
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground">{active.parentTip}</p>
      </div>

      <div className="relative mt-4 grid gap-3">
        {comparisonDestinations.map((dest, i) => (
          <ComparisonBar
            key={dest.key}
            label={dest.label}
            short={dest.short}
            color={dest.color}
            score={scoreFor(active, dest.key)}
            text={textFor(active, dest.key)}
            highlight={dest.key === "ivy"}
            delay={i * 60}
          />
        ))}
      </div>

      <div className="relative mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4">
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          <Check className="size-4 text-[#8c1d2b]" strokeWidth={2} />
          Higher bar = stronger on this factor
        </span>
      </div>
    </div>
  );
}

function IvyComparisonMobileAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div className={`${sectionContentMt} space-y-2 lg:hidden`}>
      {comparisonFactors.map((factor) => {
        const FactorIcon = iconMap[factor.icon] ?? Globe;
        const isExpanded = expandedId === factor.id;

        return (
          <div
            key={factor.id}
            className={cn(
              "overflow-hidden rounded-2xl border transition-all duration-500",
              isExpanded
                ? "border-[#8c1d2b]/30 bg-secondary/20 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                : "border-border bg-secondary/40",
            )}
          >
            <button
              type="button"
              onClick={() => toggle(factor.id)}
              aria-expanded={isExpanded}
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300",
                    isExpanded
                      ? "bg-[#8c1d2b]/10 text-[#8c1d2b]"
                      : "bg-background text-muted-foreground",
                  )}
                >
                  <FactorIcon className="size-4" strokeWidth={1.75} />
                </div>
                <span className="text-sm font-semibold text-foreground">{factor.label}</span>
              </div>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-[#8c1d2b] transition-transform duration-300",
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
                <div className="border-t border-border px-3 pb-3 pt-3">
                  <ComparisonFactorDetail active={factor} animate={false} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function IvyComparison() {
  const [activeId, setActiveId] = useState(comparisonFactors[0]!.id);
  const active = comparisonFactors.find((f) => f.id === activeId)!;

  return (
    <section id="ivy-vs-world" className={`${sectionDivider} ${sectionPadding}`}>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="left" className="max-w-3xl">
          <p className={sectionLabelClass}>Where Should Your Child Study?</p>
          <h2 className={sectionSubtitleClass}>Ivy League vs. India, UK & Canada.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            <span className="lg:hidden">
              Tap any factor and use the arrow to expand the full comparison right below it.
            </span>
            <span className="hidden lg:inline">
              Tap any factor on the left to compare destinations side-by-side - with simple scores
              and a plain-language takeaway for parents.
            </span>
          </p>
        </ScrollReveal>

        <div className="mt-8 flex flex-wrap gap-3 max-lg:max-w-full">
          {comparisonDestinations.map((d) => (
            <span
              key={d.key}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              <span className="size-2 rounded-full" style={{ backgroundColor: d.color }} />
              {d.label}
            </span>
          ))}
        </div>

        <IvyComparisonMobileAccordion />

        <div className={`${sectionContentMt} hidden gap-6 lg:grid lg:grid-cols-12 lg:gap-10`}>
          <ScrollReveal direction="up" className="lg:col-span-4">
            <div
              className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-secondary/40 p-2 lg:min-h-[520px]"
              role="tablist"
              aria-label="Comparison factors"
            >
              {comparisonFactors.map((factor) => {
                const FactorIcon = iconMap[factor.icon] ?? Globe;
                const isActive = factor.id === activeId;
                return (
                  <button
                    key={factor.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(factor.id)}
                    className={cn(
                      "group flex flex-1 items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition-all duration-500 sm:px-5",
                      isActive
                        ? "border border-border bg-background text-foreground shadow-md"
                        : "text-muted-foreground hover:bg-background/60 hover:text-foreground",
                    )}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300",
                          isActive
                            ? "bg-[#8c1d2b]/10 text-[#8c1d2b]"
                            : "bg-background text-muted-foreground group-hover:text-accent",
                        )}
                      >
                        <FactorIcon className="size-4" strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-semibold sm:text-base">{factor.label}</span>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] transition-all duration-300",
                        isActive
                          ? "flex border-[#8c1d2b]/40 bg-[#8c1d2b]/10 text-[#8c1d2b]"
                          : "hidden border-transparent text-muted-foreground sm:flex sm:opacity-0 sm:group-hover:opacity-100",
                      )}
                    >
                      <MousePointerClick className="size-3" aria-hidden />
                      Click
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <div className="lg:col-span-8">
            <ScrollReveal key={activeId} direction="right">
              <ComparisonFactorDetail active={active} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
