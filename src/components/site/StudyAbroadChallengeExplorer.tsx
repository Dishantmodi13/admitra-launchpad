import { useState } from "react";
import {
  BookOpen,
  Briefcase,
  Calendar,
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
import { challengePhases, type ChallengePhaseId, type StudyAbroadChallenge } from "@/data/study-abroad";

const sectionLabelClass =
  "font-mono text-base uppercase tracking-[0.3em] text-accent md:text-lg";
const sectionSubtitleClass =
  "mt-4 font-serif text-4xl italic leading-snug text-foreground md:text-5xl lg:text-6xl";

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

export function StudyAbroadChallengeExplorer() {
  const [activePhase, setActivePhase] = useState<ChallengePhaseId>("pre-decision");

  const phase = challengePhases.find((p) => p.id === activePhase)!;

  return (
    <section
      id="study-abroad-journey"
      className="border-b border-border px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" className="max-w-3xl">
          <p className={sectionLabelClass}>We Understand You</p>
          <h2 className={sectionSubtitleClass}>
            Every stage has its own storm. We map the calm path through it.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Study abroad isn&apos;t one decision — it&apos;s three distinct journeys. Tap a phase
            to explore the challenges students face, and how we guide you through each one.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120} direction="up" className="mt-12">
          <div
            className="flex flex-col gap-2 rounded-2xl border border-border bg-secondary/40 p-2 sm:flex-row sm:gap-0"
            role="tablist"
            aria-label="Study abroad challenge phases"
          >
            {challengePhases.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={activePhase === p.id}
                onClick={() => setActivePhase(p.id)}
                className={cn(
                  "flex-1 rounded-xl px-4 py-4 text-left transition-all duration-500 sm:px-6 sm:py-5",
                  activePhase === p.id
                    ? "border border-border bg-background text-foreground shadow-md"
                    : "text-muted-foreground hover:bg-background/60 hover:text-foreground",
                )}
              >
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  {p.tagline}
                </span>
                <span className="mt-1 block text-lg font-semibold sm:text-xl">{p.label}</span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {p.challenges.length} areas
                </span>
              </button>
            ))}
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
    </section>
  );
}
