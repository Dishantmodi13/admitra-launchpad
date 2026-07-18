import { useState } from "react";
import {
  BookOpen,
  Calendar,
  Compass,
  FileStack,
  FileText,
  FlaskConical,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  Mail,
  Medal,
  Mic,
  PenLine,
  PenTool,
  PiggyBank,
  Plane,
  Search,
  Sun,
  Target,
  Trophy,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { MousePointerClick } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import {
  profilePhases,
  type IvyProfilePillar,
  type ProfilePhaseId,
} from "@/data/ivy-league";
import {
  sectionContentMt,
  sectionDivider,
  sectionLabelClass,
  sectionPadding,
  sectionSubtitleClass,
} from "@/lib/section-styles";

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  "book-open": BookOpen,
  zap: Zap,
  users: Users,
  lightbulb: Lightbulb,
  wallet: Wallet,
  sun: Sun,
  compass: Compass,
  "pen-line": PenLine,
  trophy: Trophy,
  flask: FlaskConical,
  search: Search,
  "file-text": FileText,
  heart: Heart,
  medal: Medal,
  globe: Globe,
  "file-stack": FileStack,
  "pen-tool": PenTool,
  calendar: Calendar,
  mic: Mic,
  "piggy-bank": PiggyBank,
  mail: Mail,
  plane: Plane,
  "graduation-cap": GraduationCap,
};

function PillarIcon({ name }: { name: string }) {
  const Icon = iconMap[name] ?? Compass;
  return <Icon className="size-5" strokeWidth={1.75} />;
}

function PillarCard({ pillar, index }: { pillar: IvyProfilePillar; index: number }) {
  return (
    <article
      className="group relative flex h-full min-h-[196px] flex-col rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#8c1d2b]/30 hover:bg-secondary/40 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] sm:min-h-[208px] sm:p-6"
      style={{ transitionDelay: `${index * 30}ms` }}
    >
      <div className="mb-4 flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-[#8c1d2b] transition-colors duration-500 group-hover:bg-[#8c1d2b]/10">
        <PillarIcon name={pillar.icon} />
      </div>
      <h3 className="line-clamp-2 text-sm font-semibold text-foreground sm:text-base">{pillar.title}</h3>
      <p className="mt-3 line-clamp-4 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
        {pillar.summary}
      </p>
    </article>
  );
}

export function IvyProfileExplorer() {
  const [activePhase, setActivePhase] = useState<ProfilePhaseId>("foundation");
  const phase = profilePhases.find((p) => p.id === activePhase)!;

  return (
    <section id="ivy-journey" className={`${sectionDivider} ${sectionPadding}`}>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" className="max-w-3xl">
          <p className={sectionLabelClass}>Your Ivy Journey</p>
          <h2 className={sectionSubtitleClass}>
            Every grade has its own mission. We map the path through it.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Ivy admissions aren&apos;t won in senior year - they&apos;re built over years. Tap a phase
            to explore what ambitious students focus on at each stage, and how KAREER guides you
            through every one.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120} direction="up" className={sectionContentMt}>
          <div
            className="flex flex-col gap-2 rounded-2xl border border-border bg-secondary/40 p-2 md:flex-row md:gap-0"
            role="tablist"
            aria-label="Ivy profile building phases"
          >
            {profilePhases.map((p) => {
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
                      {p.pillars.length} focus areas
                    </span>
                  </div>
                  <span
                    className={cn(
                      "mt-0.5 hidden shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 sm:flex sm:text-[10px]",
                      isActive
                        ? "border-[#8c1d2b]/40 bg-[#8c1d2b]/10 text-[#8c1d2b]"
                        : "border-border bg-background/80 text-muted-foreground group-hover:border-[#8c1d2b]/30 group-hover:text-[#8c1d2b]",
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

        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:gap-10">
          <ScrollRevealGroup
            key={activePhase}
            className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2"
            itemClassName="h-full"
            stagger={110}
            direction="up"
            threshold={0.04}
          >
            {phase.pillars.map((pillar, i) => (
              <PillarCard key={pillar.id} pillar={pillar} index={i} />
            ))}
          </ScrollRevealGroup>

          <ScrollReveal direction="right" className="lg:col-span-5">
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:p-10">
              <div className="ivy-orbit-ring pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-dashed border-[#8c1d2b]/20" />
              <div className="ivy-orbit-ring-reverse pointer-events-none absolute -bottom-12 -left-12 size-36 rounded-full border border-dashed border-accent/15" />
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent md:text-sm">
                {phase.tagline}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                {phase.introTitle}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {phase.introBody}
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <span className="ivy-pulse-dot size-2.5 rounded-full bg-[#8c1d2b]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {phase.pillars.length} areas in this phase
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
