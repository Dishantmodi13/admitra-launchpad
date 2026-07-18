import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { ivyScorePoints } from "@/data/ivy-league";

const sectionLabelClass =
  "font-mono text-base uppercase tracking-[0.3em] text-accent md:text-lg";
const sectionSubtitleClass =
  "mt-4 font-serif text-4xl italic leading-snug text-foreground md:text-5xl lg:text-6xl";

const RING_RADIUS = 78;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const RING_SIZE = 220;
const RING_CENTER = RING_SIZE / 2;

function ScoreRing({ checked, total }: { checked: number; total: number }) {
  const ratio = checked / total;
  const offset = RING_CIRCUMFERENCE * (1 - ratio);

  const feedback =
    checked === 0
      ? "Tap the points you already have"
      : checked <= 2
        ? "Early stage - plenty of room to build"
        : checked <= 5
          ? "Solid foundation - keep building"
          : checked <= 7
            ? "Strong Ivy-ready profile"
            : "Exceptional profile";

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div
        className="relative flex items-center justify-center"
        style={{ width: RING_SIZE, height: RING_SIZE }}
      >
        <svg
          width={RING_SIZE}
          height={RING_SIZE}
          viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
          className="-rotate-90"
        >
          <circle
            cx={RING_CENTER}
            cy={RING_CENTER}
            r={RING_RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="text-secondary"
          />
          <circle
            cx={RING_CENTER}
            cy={RING_CENTER}
            r={RING_RADIUS}
            fill="none"
            stroke="#8c1d2b"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="ivy-ring-fill"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-serif text-6xl italic text-foreground md:text-7xl">{checked}</span>
          <span className="mt-1 text-sm uppercase tracking-wide text-muted-foreground">
            of {total} points
          </span>
        </div>
      </div>
      <p className="max-w-[260px] text-base font-medium text-foreground">{feedback}</p>
    </div>
  );
}

export function IvyScoreBuilder() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<string | null>(ivyScorePoints[0]?.id ?? null);

  const toggleChecked = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="ivy-score" className="border-b border-border px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal direction="left" className="lg:col-span-7">
            <p className={sectionLabelClass}>The Ivy League Score</p>
            <h2 className={sectionSubtitleClass}>Eight points admissions committees quietly score.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Ivy admissions look far beyond grades. Tap each point you already have to see your
              readiness build in real time - then explore what it takes to strengthen the rest.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={100} className="lg:col-span-5">
            <div className="sticky top-28 flex items-center justify-center overflow-hidden rounded-3xl border border-border bg-secondary/30 p-8">
              <div className="ivy-orbit-ring pointer-events-none absolute -right-12 -top-12 size-40 rounded-full border border-dashed border-[#8c1d2b]/15" />
              <div className="ivy-orbit-ring-reverse pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full border border-dashed border-accent/15" />
              <ScoreRing checked={checked.size} total={ivyScorePoints.length} />
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12 space-y-3">
          {ivyScorePoints.map((point) => {
            const isChecked = checked.has(point.id);
            const isExpanded = expanded === point.id;

            return (
              <ScrollReveal key={point.id} direction="up" delay={point.order * 30} threshold={0.02}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border border-border bg-background transition-colors duration-300",
                    isExpanded && "border-accent/30",
                  )}
                >
                  <div className="flex items-center gap-4 p-4 sm:p-5">
                    <button
                      type="button"
                      onClick={() => toggleChecked(point.id)}
                      aria-pressed={isChecked}
                      aria-label={`Mark "${point.title}" as achieved`}
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300",
                        isChecked
                          ? "border-[#8c1d2b] bg-[#8c1d2b] text-white"
                          : "border-border text-transparent hover:border-[#8c1d2b]/40",
                      )}
                    >
                      <Check className="size-4" strokeWidth={2.5} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : point.id)}
                      className="flex min-w-0 flex-1 items-center justify-between gap-3 text-left"
                      aria-expanded={isExpanded}
                    >
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                          Point {String(point.order).padStart(2, "0")} · {point.tagline}
                        </span>
                        <span className="mt-0.5 block text-base font-semibold text-foreground sm:text-lg">
                          {point.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                          isExpanded && "rotate-180 text-accent",
                        )}
                      />
                    </button>
                  </div>

                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-border px-5 pb-5 pt-4 sm:px-6">
                        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {point.summary}
                        </p>
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                          {point.musts.map((must) => (
                            <li
                              key={must}
                              className="flex gap-2 text-xs leading-relaxed text-foreground/85 sm:text-sm"
                            >
                              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                              {must}
                            </li>
                          ))}
                        </ul>
                        {point.proTip && (
                          <p className="mt-4 rounded-xl bg-secondary/50 p-3 text-xs italic text-muted-foreground sm:text-sm">
                            Pro tip: {point.proTip}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
