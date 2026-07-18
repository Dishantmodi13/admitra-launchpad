import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { ivyTimelinePhases } from "@/data/ivy-league";
import {
  sectionContentMt,
  sectionDivider,
  sectionLabelClass,
  sectionPadding,
  sectionSubtitleClass,
} from "@/lib/section-styles";

export function IvyAdmissionsTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setActiveIndex(ivyTimelinePhases.length - 1);
      return;
    }

    const items = container.querySelectorAll("[data-ivy-timeline-phase]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.ivyTimelinePhase);
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.45, rootMargin: "-10% 0px -35% 0px" },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const progress = ((activeIndex + 1) / ivyTimelinePhases.length) * 100;

  return (
    <section id="ivy-timeline" className={`${sectionDivider} ${sectionPadding}`}>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="left" className="max-w-2xl">
          <p className={sectionLabelClass}>Ivy Admissions Timeline</p>
          <h2 className={sectionSubtitleClass}>
            Your grade-by-grade roadmap to the Ivy League
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            From first discovery in Grade 8 to enrollment day - a structured framework so you
            never wonder &ldquo;what should I be doing now?&rdquo;
          </p>
        </ScrollReveal>

        <div className={`${sectionContentMt} lg:hidden`}>
          <div className="relative h-1.5 overflow-hidden rounded-full bg-secondary">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#8c1d2b] to-brand-blue transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="no-scrollbar -mx-6 mt-4 flex gap-2 overflow-x-auto px-6 pb-1">
            {ivyTimelinePhases.map((phase, i) => (
              <button
                key={phase.id}
                type="button"
                onClick={() => {
                  setActiveIndex(i);
                  document
                    .getElementById(`ivy-timeline-${phase.id}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className={cn(
                  "shrink-0 rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-wider transition-colors",
                  activeIndex === i
                    ? "bg-[#8c1d2b] text-white"
                    : "border border-border bg-background text-muted-foreground",
                )}
              >
                {phase.gradeLabel}
              </button>
            ))}
          </div>
        </div>

        <div className={`${sectionContentMt} lg:grid lg:grid-cols-12 lg:gap-10`}>
          <div className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28">
              <div className="relative h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#8c1d2b] to-brand-blue transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <ul className="mt-8 space-y-3">
                {ivyTimelinePhases.map((phase, i) => (
                  <li key={phase.id}>
                    <button
                      type="button"
                      onClick={() => {
                        document
                          .getElementById(`ivy-timeline-${phase.id}`)
                          ?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-500",
                        activeIndex === i
                          ? "bg-[#8c1d2b]/[0.08] text-foreground"
                          : "text-muted-foreground hover:bg-secondary/60",
                      )}
                    >
                      <span
                        className="size-2.5 shrink-0 rounded-full transition-transform duration-500"
                        style={{
                          backgroundColor: phase.color,
                          transform: activeIndex === i ? "scale(1.4)" : "scale(1)",
                        }}
                      />
                      <span className="text-sm font-medium">{phase.phase}</span>
                      <span className="ml-auto font-mono text-[10px] uppercase tracking-wider opacity-60">
                        {phase.gradeLabel}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div ref={containerRef} className="relative lg:col-span-8">
            <div
              className="absolute bottom-0 left-[1.125rem] top-0 hidden w-px bg-border lg:block"
              aria-hidden
            />
            <div
              className="absolute left-[1.125rem] top-0 hidden w-px bg-gradient-to-b from-[#8c1d2b] to-brand-blue transition-all duration-700 lg:block"
              style={{ height: `${progress}%` }}
              aria-hidden
            />

            <div className="space-y-8 lg:space-y-12">
              {ivyTimelinePhases.map((phase, i) => (
                <div
                  key={phase.id}
                  id={`ivy-timeline-${phase.id}`}
                  data-ivy-timeline-phase={i}
                  className={cn(
                    "relative pl-0 transition-all duration-700 lg:pl-12",
                    activeIndex === i ? "opacity-100" : "opacity-60 lg:opacity-50",
                  )}
                >
                  <div
                    className="absolute left-0 top-8 hidden size-[2.25rem] items-center justify-center rounded-full border-4 border-background lg:flex"
                    style={{ backgroundColor: phase.color }}
                  >
                    <span className="text-[10px] font-bold text-white">{i + 1}</span>
                  </div>

                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border transition-all duration-700",
                      activeIndex === i
                        ? "border-[#8c1d2b]/30 shadow-[0_16px_48px_rgba(15,23,42,0.08)]"
                        : "border-border bg-background",
                    )}
                  >
                    <div
                      className="h-1.5 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${phase.color}, transparent)`,
                      }}
                    />
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                            {phase.timeframe}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                            {phase.phase}
                          </h3>
                        </div>
                        <span
                          className="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white"
                          style={{ backgroundColor: phase.color }}
                        >
                          {phase.gradeLabel}
                        </span>
                      </div>

                      <ul className="mt-6 space-y-3">
                        {phase.steps.map((step) => (
                          <li
                            key={step}
                            className="flex gap-3 text-sm text-muted-foreground sm:text-base"
                          >
                            <span
                              className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: `${phase.color}20` }}
                            >
                              <Check className="size-3" style={{ color: phase.color }} />
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
