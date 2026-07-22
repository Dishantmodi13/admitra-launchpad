import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { assessments } from "@/data/assessments";

const STACK_STEP = 14;
const STACK_TOP_GAP = 12;

function useNavbarStackOffset() {
  const [offset, setOffset] = useState(88);

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>("[data-site-navbar]");
    if (!nav) return;

    const update = () => {
      setOffset(Math.round(nav.getBoundingClientRect().height + STACK_TOP_GAP));
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(nav);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return offset;
}

function AssessmentCardDetails({
  assessment: a,
  index,
  showHeader = true,
  expandedOnly = false,
}: {
  assessment: (typeof assessments)[number];
  index: number;
  showHeader?: boolean;
  expandedOnly?: boolean;
}) {
  return (
    <>
      {showHeader && (
        <div className="flex flex-col items-start gap-3">
          <span className="text-3xl" aria-hidden>
            {a.icon}
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground">
            {String(index + 1).padStart(2, "0")} / {String(assessments.length).padStart(2, "0")}
          </span>
        </div>
      )}
      <div className={cn(showHeader && "mt-4")}>
        {!expandedOnly && (
          <>
            <h3 className="font-serif text-xl italic leading-snug sm:text-2xl">{a.title}</h3>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-accent">
              {a.subtitle}
            </p>
          </>
        )}
        <p className={cn("text-sm leading-relaxed text-muted-foreground", !expandedOnly && "mt-4")}>
          {a.description}
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
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
          className="mt-6 inline-block font-mono text-[11px] uppercase tracking-widest text-accent underline-offset-4 hover:underline"
        >
          Register to take this test →
        </Link>
      </div>
    </>
  );
}

function AssessmentMobileAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="mt-8 space-y-2 lg:mt-16 lg:hidden">
      {assessments.map((a, i) => {
        const isExpanded = expandedIndex === i;

        return (
          <div
            key={a.title}
            className={cn(
              "overflow-hidden rounded-2xl border transition-all duration-500",
              isExpanded
                ? "border-accent/40 bg-background shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
                : "border-border bg-background/60",
            )}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isExpanded}
              className="flex w-full items-start gap-3 p-4 text-left sm:p-5"
            >
              <div
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-xl text-xl transition-colors duration-500",
                  isExpanded ? "bg-accent/10" : "bg-secondary",
                )}
                aria-hidden
              >
                {a.icon}
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[10px] font-semibold text-foreground">
                  {String(i + 1).padStart(2, "0")} / {String(assessments.length).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-sm font-semibold leading-snug text-foreground">
                  {a.title}
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-accent">
                  {a.subtitle}
                </span>
              </div>
              <ChevronDown
                className={cn(
                  "mt-1 size-5 shrink-0 text-accent transition-transform duration-300",
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
                  <AssessmentCardDetails assessment={a} index={i} showHeader={false} expandedOnly />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AssessmentDesktopStack() {
  const stackBaseTop = useNavbarStackOffset();

  return (
    <div className="relative mt-16 hidden pb-32 lg:block">
      {assessments.map((a, i) => (
        <div
          key={a.title}
          className="mb-10 last:mb-0"
          style={{
            position: "sticky",
            top: stackBaseTop + i * STACK_STEP,
            zIndex: 10 + i,
          }}
        >
          <article
            className={cn(
              "grid gap-8 rounded-xl border border-border bg-background p-8 shadow-[0_12px_40px_-16px_oklch(0.22_0.018_230/0.2)] ring-1 ring-border/60 lg:grid-cols-[auto_1fr] lg:p-10",
              "origin-top transition-[box-shadow,transform] duration-500 hover:shadow-[0_24px_56px_-16px_oklch(0.22_0.018_230/0.28)]",
            )}
          >
            <div className="flex flex-col items-start gap-4">
              <span className="text-4xl" aria-hidden>
                {a.icon}
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground">
                {String(i + 1).padStart(2, "0")} / {String(assessments.length).padStart(2, "0")}
              </span>
            </div>
            <AssessmentCardDetails assessment={a} index={i} showHeader={false} />
          </article>
        </div>
      ))}
    </div>
  );
}

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
        {assessments.map((a, i) => (
          <article
            key={a.title}
            className="rounded-xl border border-border bg-background p-6 sm:p-8"
          >
            <AssessmentCardDetails assessment={a} index={i} />
          </article>
        ))}
      </div>
    );
  }

  return (
    <>
      <AssessmentMobileAccordion />
      <AssessmentDesktopStack />
    </>
  );
}
