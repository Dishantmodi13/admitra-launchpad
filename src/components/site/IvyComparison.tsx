import { useState } from "react";
import {
  Briefcase,
  Check,
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
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { comparisonDestinations, comparisonFactors } from "@/data/ivy-league";

const sectionLabelClass =
  "font-mono text-base uppercase tracking-[0.3em] text-accent md:text-lg";
const sectionSubtitleClass =
  "mt-4 font-serif text-4xl italic leading-snug text-foreground md:text-5xl lg:text-6xl";

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

function scoreFor(factor: (typeof comparisonFactors)[0], key: DestKey) {
  return factor[`${key}Score` as keyof typeof factor] as number;
}

function textFor(factor: (typeof comparisonFactors)[0], key: DestKey) {
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

export function IvyComparison() {
  const [activeId, setActiveId] = useState(comparisonFactors[0]!.id);
  const active = comparisonFactors.find((f) => f.id === activeId)!;
  const Icon = iconMap[active.icon] ?? Globe;

  const ivyWins = comparisonFactors.filter(
    (f) =>
      f.ivyScore >= f.indiaScore &&
      f.ivyScore >= f.ukScore &&
      f.ivyScore >= f.canadaScore,
  ).length;

  return (
    <section id="ivy-vs-world" className="border-b border-border px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="left" className="max-w-3xl">
          <p className={sectionLabelClass}>Where Should Your Child Study?</p>
          <h2 className={sectionSubtitleClass}>Ivy League vs. India, UK & Canada.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Tap any factor on the left to compare destinations side-by-side - with simple scores
            and a plain-language takeaway for parents.
          </p>
        </ScrollReveal>

        <div className="mt-8 flex flex-wrap gap-3">
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

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
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
                        "flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] transition-all duration-300",
                        isActive
                          ? "border-[#8c1d2b]/40 bg-[#8c1d2b]/10 text-[#8c1d2b]"
                          : "border-transparent text-muted-foreground opacity-0 group-hover:opacity-100",
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
              <div className="ivy-spotlight-reveal relative min-h-[520px] overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-[0_16px_48px_rgba(15,23,42,0.06)] sm:p-8">
                <div className="ivy-orbit-ring pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-dashed border-[#8c1d2b]/15" />

                <div className="relative flex items-start gap-4 border-b border-border pb-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#8c1d2b]/10 text-[#8c1d2b]">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                      Comparing on
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
                      {active.label}
                    </h3>
                  </div>
                </div>

                <div className="relative mt-5 rounded-2xl border border-[#8c1d2b]/20 bg-[#8c1d2b]/[0.04] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8c1d2b]">
                    For parents
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">
                    {active.parentTip}
                  </p>
                </div>

                <ScrollRevealGroup
                  className="mt-6 grid gap-3 sm:grid-cols-2"
                  stagger={70}
                  direction="up"
                  threshold={0.05}
                >
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
                </ScrollRevealGroup>

                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-5">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="size-4 text-[#8c1d2b]" strokeWidth={2} />
                    Higher bar = stronger on this factor
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Scores are illustrative · Tap left to explore all 8 factors
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
