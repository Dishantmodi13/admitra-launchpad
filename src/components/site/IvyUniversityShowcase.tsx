import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { universities } from "@/data/ivy-league";
import {
  sectionContentMt,
  sectionDivider,
  sectionLabelClass,
  sectionPadding,
  sectionSubtitleClass,
} from "@/lib/section-styles";

const RING_RADIUS = 34;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

/** Constellation node positions (percent within the orbit container) */
const constellationPositions = [
  { x: 50, y: 8 },
  { x: 82, y: 22 },
  { x: 92, y: 52 },
  { x: 78, y: 82 },
  { x: 50, y: 92 },
  { x: 22, y: 82 },
  { x: 8, y: 52 },
  { x: 18, y: 22 },
];

function AcceptanceRing({ rate, index, active }: { rate: number; index: number; active: boolean }) {
  const filled = Math.max(rate, 2) / 10;
  const offset = RING_CIRCUMFERENCE * (1 - filled);

  return (
    <div className="relative flex size-20 shrink-0 items-center justify-center">
      <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90">
        <circle
          cx="40"
          cy="40"
          r={RING_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className="text-secondary"
        />
        <circle
          cx="40"
          cy="40"
          r={RING_RADIUS}
          fill="none"
          stroke="#8c1d2b"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={RING_CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="ivy-ring-fill"
          style={{ transitionDelay: `${index * 60}ms` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={cn(
            "font-mono text-sm font-bold transition-colors duration-500",
            active ? "text-[#8c1d2b]" : "text-foreground",
          )}
        >
          {rate}%
        </span>
        <span className="text-[8px] uppercase tracking-wide text-muted-foreground">admit</span>
      </div>
    </div>
  );
}

function IvyConstellation({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="ivy-orbit-ring pointer-events-none absolute inset-[12%] rounded-full border border-dashed border-[#8c1d2b]/20" />
      <div className="ivy-orbit-ring-reverse pointer-events-none absolute inset-[24%] rounded-full border border-dashed border-accent/15" />

      <svg className="pointer-events-none absolute inset-0 size-full" aria-hidden>
        {constellationPositions.map((pos, i) => {
          const next = constellationPositions[(i + 1) % constellationPositions.length]!;
          return (
            <line
              key={`line-${i}`}
              x1={`${pos.x}%`}
              y1={`${pos.y}%`}
              x2={`${next.x}%`}
              y2={`${next.y}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="ivy-constellation-line text-border"
              strokeDasharray="4 6"
            />
          );
        })}
      </svg>

      {universities.map((uni, i) => {
        const pos = constellationPositions[i]!;
        const isActive = activeIndex === i;
        const shortName = uni.name.split(" ")[0] ?? uni.name;

        return (
          <button
            key={uni.id}
            type="button"
            onClick={() => onSelect(i)}
            onMouseEnter={() => onSelect(i)}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            aria-label={`View ${uni.name}`}
            aria-pressed={isActive}
          >
            <span
              className={cn(
                "flex flex-col items-center gap-1 transition-all duration-500",
                isActive ? "scale-110" : "scale-100 opacity-70 hover:opacity-100",
              )}
            >
              <span
                className={cn(
                  "size-3 rounded-full border-2 border-background transition-all duration-500",
                  isActive
                    ? "size-4 bg-[#8c1d2b] shadow-[0_0_16px_rgba(140,29,43,0.5)]"
                    : "bg-accent/60",
                )}
              />
              <span
                className={cn(
                  "whitespace-normal text-center font-mono text-[9px] uppercase tracking-wider transition-colors duration-300 sm:whitespace-nowrap sm:text-[10px]",
                  isActive ? "font-semibold text-[#8c1d2b]" : "text-muted-foreground",
                )}
              >
                {shortName}
              </span>
            </span>
          </button>
        );
      })}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="rounded-full border border-border bg-background/90 px-4 py-2 text-center backdrop-blur-sm">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            The Ivy League
          </span>
          <p className="mt-0.5 font-serif text-lg italic text-foreground">8 Schools</p>
        </div>
      </div>
    </div>
  );
}

export function IvyUniversityShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeUni = universities[activeIndex]!;

  return (
    <section id="the-eight" className={`${sectionDivider} ${sectionPadding}`}>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="left" className="max-w-3xl">
          <p className={sectionLabelClass}>The League</p>
          <h2 className={sectionSubtitleClass}>Eight schools. Eight distinct legacies.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Every Ivy has its own personality - hover the constellation or tap a school to explore
            its admit rate, location, and what makes it unique.
          </p>
        </ScrollReveal>

        <div className={`${sectionContentMt} grid gap-8 lg:grid-cols-12 lg:gap-10`}>
          <ScrollReveal direction="scale" className="lg:col-span-5">
            <IvyConstellation activeIndex={activeIndex} onSelect={setActiveIndex} />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100} className="lg:col-span-7">
            <div
              key={activeUni.id}
              className="ivy-spotlight-reveal overflow-hidden rounded-3xl border border-[#8c1d2b]/20 bg-background p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10"
            >
              <div className="ivy-orbit-ring pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-dashed border-[#8c1d2b]/15" />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <AcceptanceRing
                  rate={activeUni.acceptanceRate}
                  index={activeIndex}
                  active
                />
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                    {activeUni.location}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                    {activeUni.name}
                  </h3>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    Acceptance rate: {activeUni.acceptanceRate}% · Rank #{activeIndex + 1} most
                    competitive
                  </p>
                </div>
              </div>

              <ul className="relative mt-8 space-y-3 border-t border-border pt-6">
                {activeUni.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#8c1d2b]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
