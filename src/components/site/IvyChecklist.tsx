import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { parentChecklist, studentChecklist } from "@/data/ivy-league";
import {
  sectionDivider,
  sectionLabelClass,
  sectionPadding,
  sectionSubtitleClass,
} from "@/lib/section-styles";

type Track = "students" | "parents";

export function IvyChecklist() {
  const [track, setTrack] = useState<Track>("students");
  const items = track === "students" ? studentChecklist : parentChecklist;

  return (
    <section id="roadmap" className={`${sectionDivider} ${sectionPadding}`}>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="left" className="max-w-3xl">
          <p className={sectionLabelClass}>Application & Admission Checklist</p>
          <h2 className={sectionSubtitleClass}>Your grade-by-grade roadmap to the Ivy League.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Ivy admissions are won years before senior year. Switch between the student and parent
            tracks to see exactly what needs to happen, and when.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100} direction="up" className="mt-10">
          <div
            className="inline-flex rounded-2xl border border-border bg-secondary/40 p-1.5"
            role="tablist"
            aria-label="Checklist track"
          >
            {(["students", "parents"] as Track[]).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={track === t}
                onClick={() => setTrack(t)}
                className={cn(
                  "rounded-xl px-6 py-2.5 text-sm font-semibold capitalize transition-all duration-300",
                  track === t
                    ? "bg-background text-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                For {t}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollRevealGroup
          key={track}
          className="mt-10 grid auto-rows-fr gap-3 sm:grid-cols-2"
          itemClassName="h-full"
          stagger={70}
          direction="up"
          threshold={0.03}
        >
          {items.map((item, i) => (
            <div
              key={item.task}
              className="group flex h-full min-h-[108px] items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-accent/30 hover:bg-secondary/30"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-xs font-semibold text-accent transition-colors group-hover:bg-accent/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex min-h-0 flex-1 flex-col">
                <p className="line-clamp-3 text-sm font-medium leading-snug text-foreground sm:text-base">
                  {item.task}
                </p>
                <span className="mt-auto inline-block w-fit rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 pt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  {item.timing}
                </span>
              </div>
            </div>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
