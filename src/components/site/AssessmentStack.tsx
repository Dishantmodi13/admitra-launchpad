import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { assessments } from "@/data/assessments";

const STACK_BASE_TOP = 88;
const STACK_STEP = 14;

export function AssessmentStack() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  if (reducedMotion) {
    return (
      <div className="mt-16 space-y-8">
        {assessments.map((a) => (
          <AssessmentCard key={a.title} assessment={a} index={0} stacked={false} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative mt-16 pb-32">
      {assessments.map((a, i) => (
        <div
          key={a.title}
          className="mb-10 last:mb-0"
          style={{
            position: "sticky",
            top: STACK_BASE_TOP + i * STACK_STEP,
            zIndex: i + 1,
          }}
        >
          <AssessmentCard assessment={a} index={i} stacked />
        </div>
      ))}
    </div>
  );
}

function AssessmentCard({
  assessment: a,
  index,
  stacked,
}: {
  assessment: (typeof assessments)[number];
  index: number;
  stacked: boolean;
}) {
  return (
    <article
      className={cn(
        "grid gap-8 border border-border bg-background p-8 lg:grid-cols-[auto_1fr] lg:p-10",
        stacked && "rounded-xl shadow-[0_12px_40px_-16px_oklch(0.22_0.018_230/0.2)] ring-1 ring-border/60",
        stacked &&
          "origin-top transition-[box-shadow,transform] duration-500 hover:shadow-[0_24px_56px_-16px_oklch(0.22_0.018_230/0.28)]",
      )}
    >
      <div className="flex flex-col items-start gap-4">
        <span className="text-4xl" aria-hidden>
          {a.icon}
        </span>
        {stacked && (
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent/80">
            {String(index + 1).padStart(2, "0")} / 08
          </span>
        )}
      </div>
      <div>
        <h3 className="font-serif text-2xl italic md:text-3xl">{a.title}</h3>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-accent">
          {a.subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {a.description}
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-foreground">
              Best for
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">{a.bestFor}</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-foreground">
              What it measures
            </h4>
            <ul className="mt-2 space-y-1.5">
              {a.measures.map((m) => (
                <li
                  key={m}
                  className="text-sm text-muted-foreground before:mr-2 before:text-accent before:content-['·']"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          to="/register"
          className="mt-8 inline-block font-mono text-[11px] uppercase tracking-widest text-accent underline-offset-4 hover:underline"
        >
          Register to take this test →
        </Link>
      </div>
    </article>
  );
}
