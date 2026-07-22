import { useState } from "react";
import {
  BookOpen,
  Briefcase,
  Calendar,
  ChevronDown,
  Compass,
  FileStack,
  Gavel,
  Globe,
  GraduationCap,
  Heart,
  HeartPulse,
  Home,
  Languages,
  Layers,
  Mic,
  MousePointerClick,
  PiggyBank,
  Plane,
  Scale,
  Shield,
  ShieldCheck,
  Stamp,
  Trophy,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import {
  challengePhases,
  type ChallengePhase,
  type ChallengePhaseId,
  type StudyAbroadChallenge,
} from "@/data/study-abroad";
import {
  sectionContentMt,
  sectionDivider,
  sectionLabelClass,
  sectionPadding,
  sectionSubtitleClass,
} from "@/lib/section-styles";

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  wallet: Wallet,
  stamp: Stamp,
  globe: Globe,
  "book-open": BookOpen,
  briefcase: Briefcase,
  heart: Heart,
  compass: Compass,
  "file-stack": FileStack,
  languages: Languages,
  calendar: Calendar,
  scale: Scale,
  "piggy-bank": PiggyBank,
  shield: Shield,
  mic: Mic,
  trophy: Trophy,
  home: Home,
  "heart-pulse": HeartPulse,
  "graduation-cap": GraduationCap,
  plane: Plane,
  users: Users,
  gavel: Gavel,
  "shield-check": ShieldCheck,
};

function ChallengeIcon({ name }: { name: string }) {
  const Icon = iconMap[name] ?? Compass;
  return <Icon className="size-5" strokeWidth={1.75} />;
}

function ChallengeCard({
  challenge,
  index,
}: {
  challenge: StudyAbroadChallenge;
  index: number;
}) {
  return (
    <article
      className="group relative w-full rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-accent/30 hover:bg-secondary/40 sm:p-6"
      style={{ transitionDelay: `${index * 30}ms` }}
    >
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-secondary text-accent transition-colors duration-500 group-hover:bg-accent/10">
        <ChallengeIcon name={challenge.icon} />
      </div>
      <h3 className="text-sm font-semibold text-foreground sm:text-base">{challenge.title}</h3>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
        {challenge.summary}
      </p>
    </article>
  );
}

function PhaseIntroPanel({ phase }: { phase: ChallengePhase }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6">
      <div className="study-abroad-orbit-ring pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-dashed border-accent/15" />
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">{phase.tagline}</p>
      <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">{phase.introTitle}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {phase.introBody}
      </p>
    </div>
  );
}

function StudyAbroadPhaseMobileAccordion() {
  const [expandedId, setExpandedId] = useState<ChallengePhaseId | null>(null);

  const toggle = (id: ChallengePhaseId) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div className={`${sectionContentMt} space-y-2 lg:hidden`}>
      {challengePhases.map((phase, i) => {
        const isExpanded = expandedId === phase.id;

        return (
          <div
            key={phase.id}
            className={cn(
              "overflow-hidden rounded-2xl border transition-all duration-500",
              isExpanded
                ? "border-accent/40 bg-background shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
                : "border-border bg-background/60",
            )}
          >
            <button
              type="button"
              onClick={() => toggle(phase.id)}
              aria-expanded={isExpanded}
              className="flex w-full items-start gap-3 p-4 text-left sm:p-5"
            >
              <div
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-xl font-mono text-[10px] font-bold transition-colors duration-500",
                  isExpanded
                    ? "bg-accent/10 text-accent"
                    : "bg-secondary text-muted-foreground",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {phase.tagline}
                </span>
                <span className="mt-1 block text-sm font-semibold leading-snug text-foreground sm:text-base">
                  {phase.label}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {phase.challenges.length} areas
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
                <div className="space-y-4 border-t border-border px-4 pb-5 pt-4 sm:px-5">
                  <PhaseIntroPanel phase={phase} />
                  <div className="grid gap-4">
                    {phase.challenges.map((challenge, index) => (
                      <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
                    ))}
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

export function StudyAbroadChallengeExplorer() {
  const [activePhase, setActivePhase] = useState<ChallengePhaseId>("pre-decision");

  const phase = challengePhases.find((p) => p.id === activePhase)!;

  return (
    <section
      id="study-abroad-journey"
      className={`${sectionDivider} ${sectionPadding}`}
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" className="max-w-3xl">
          <p className={sectionLabelClass}>We Understand You</p>
          <h2 className={sectionSubtitleClass}>
            Every stage has its own storm. We map the calm path through it.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            <span className="lg:hidden">
              Tap a phase and use the arrow to expand the full challenges and guidance for that
              stage.
            </span>
            <span className="hidden lg:inline">
              Study abroad isn&apos;t one decision - it&apos;s three distinct journeys. Tap a phase
              to explore the challenges students face, and how we guide you through each one.
            </span>
          </p>
        </ScrollReveal>

        <StudyAbroadPhaseMobileAccordion />

        <div className="hidden lg:block">
          <ScrollReveal delay={120} direction="up" className={sectionContentMt}>
            <div
              className="flex flex-col gap-2 rounded-2xl border border-border bg-secondary/40 p-2 md:flex-row md:gap-0"
              role="tablist"
              aria-label="Study abroad challenge phases"
            >
              {challengePhases.map((p) => {
                const isActive = activePhase === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActivePhase(p.id)}
                    className={cn(
                      "group flex flex-1 items-start justify-between gap-3 rounded-xl px-4 py-4 text-left transition-all duration-500 sm:px-6 sm:py-5",
                      isActive
                        ? "border border-border bg-background text-foreground shadow-md"
                        : "text-muted-foreground hover:bg-background/60 hover:text-foreground",
                    )}
                  >
                    <div className="min-w-0">
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                        {p.tagline}
                      </span>
                      <span className="mt-1 block text-lg font-semibold sm:text-xl">{p.label}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {p.challenges.length} areas
                      </span>
                    </div>
                    <span
                      className={cn(
                        "mt-0.5 hidden shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 sm:flex sm:text-[10px]",
                        isActive
                          ? "border-accent/40 bg-accent/10 text-accent"
                          : "border-border bg-background/80 text-muted-foreground group-hover:border-accent/30 group-hover:text-accent",
                      )}
                    >
                      <MousePointerClick className="size-3 shrink-0" aria-hidden />
                      Click
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <ScrollRevealGroup
              key={activePhase}
              className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2"
              stagger={110}
              direction="up"
              threshold={0.04}
            >
              {phase.challenges.map((challenge, i) => (
                <ChallengeCard key={challenge.id} challenge={challenge} index={i} />
              ))}
            </ScrollRevealGroup>

            <ScrollReveal direction="right" className="lg:col-span-5">
              <div className="sticky top-28 overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:p-10">
                <div className="study-abroad-orbit-ring pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-dashed border-accent/15" />
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent md:text-sm">
                  {phase.tagline}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                  {phase.introTitle}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {phase.introBody}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
