import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Lightbulb,
  Rocket,
  Route as RouteIcon,
  Sparkles,
  Target,
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { StripeHero } from "@/components/site/StripeHero";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { heroNavLinks } from "@/data/primary-nav";
import {
  educationPhases,
  educationPlanningIntro,
  needForPlanning,
  planningProcess,
} from "@/data/education-planning";
import heroEducationPlanning from "@/assets/hero-education-planning.jpg";

export const Route = createFileRoute("/education-planning")({
  head: () => ({
    meta: [
      {
        title: "Education & Career Planning | Personalized Guidance | KAREER Studio",
      },
      {
        name: "description",
        content:
          "Effective education planning aligned with strengths, interests, and aspirations. ACCESS, PLAN, and MANAGE your academic journey with KAREER Studio.",
      },
    ],
  }),
  component: EducationPlanningPage,
});

const sectionLabelClass =
  "font-mono text-base uppercase tracking-[0.3em] text-accent md:text-lg";
const sectionSubtitleClass =
  "mt-4 font-serif text-4xl italic leading-snug text-foreground md:text-5xl lg:text-6xl";
const boxEyebrowClass =
  "font-mono text-sm uppercase tracking-[0.25em] text-accent md:text-base";
const processCardTitleClass =
  "mt-3 font-serif text-xl italic leading-tight md:text-2xl lg:text-3xl";
const cardTitleClass = "text-xl font-medium text-foreground md:text-2xl";

const reasonIcons = {
  route: RouteIcon,
  lightbulb: Lightbulb,
  target: Target,
  rocket: Rocket,
  sparkles: Sparkles,
} as const;

const educationHeroNavLinks = heroNavLinks(["education-planning", "study-abroad"]);

function boldKareerStudio(text: string) {
  return text.split(/(KAREER Studio)/g).map((part, i) =>
    part === "KAREER Studio" ? (
      <strong key={i} className="font-bold text-foreground">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function EducationPlanningPage() {
  return (
    <PageLayout>
      <StripeHero
        image={heroEducationPlanning}
        imageAlt="Students collaborating on education planning with books and a tablet"
        imagePosition="object-[center_40%]"
        quoteEyebrow="Education Planning"
        quote="‘We pair scientific assessments with senior mentor judgment to design the next 4–8 years of your academic life.’"
        stripeHeading="Education Planning"
        stripeTagline="A roadmap, not a guess."
        navLinks={educationHeroNavLinks}
      />

      {/* Introduction */}
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="left" className="mb-12 max-w-3xl">
            <h2 className={sectionLabelClass}>{educationPlanningIntro.label}</h2>
            <p className={sectionSubtitleClass}>{educationPlanningIntro.title}</p>
          </ScrollReveal>
          <ScrollRevealGroup
            className="mx-auto max-w-4xl space-y-6 text-justify text-muted-foreground"
            stagger={120}
            direction="up"
            threshold={0.08}
          >
            {educationPlanningIntro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed lg:text-lg">
                {boldKareerStudio(paragraph)}
              </p>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Education Planning Process */}
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="blur" className="mb-16 max-w-2xl">
            <h2 className={sectionLabelClass}>Our Process</h2>
            <p className={sectionSubtitleClass}>Education Planning Process</p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {planningProcess.map((block, i) => (
              <ScrollReveal key={block.phase} delay={i * 120} direction="up">
                <div className="group h-full border border-border bg-background p-8 transition-colors hover:border-accent/40 hover:bg-accent/[0.03] lg:p-10">
                  <p className={boxEyebrowClass}>{block.phase}</p>
                  <h3 className={processCardTitleClass}>{block.subtitle}</h3>
                  <ul className="mt-8 space-y-4">
                    {block.steps.map((step) => (
                      <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Need for Education Planning */}
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal direction="left">
              <h2 className={sectionLabelClass}>Why It Matters</h2>
              <p className={sectionSubtitleClass}>{needForPlanning.title}</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-justify text-muted-foreground leading-relaxed">
                {needForPlanning.intro}
              </p>
            </ScrollReveal>
          </div>

          <ScrollRevealGroup
            className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5"
            stagger={100}
            direction="up"
            threshold={0.06}
          >
            {needForPlanning.reasons.map((reason) => {
              const Icon = reasonIcons[reason.icon as keyof typeof reasonIcons];
              return (
                <div
                  key={reason.title}
                  className="flex h-full flex-col border border-border bg-background p-5 transition-colors hover:border-accent/40 lg:p-6"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                    <Icon className="size-5 text-accent" aria-hidden />
                  </span>
                  <h3 className={`${cardTitleClass} mt-5`}>{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {reason.body}
                  </p>
                </div>
              );
            })}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Phases of Education */}
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="blur" className="mb-16 max-w-2xl">
            <h2 className={sectionLabelClass}>The Journey</h2>
            <p className={sectionSubtitleClass}>Phases of Education</p>
          </ScrollReveal>

          <div className="space-y-12 lg:space-y-16">
            {educationPhases.map((phase, index) => (
              <ScrollReveal
                key={phase.phase}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={80}
              >
                <article className="overflow-hidden border border-border bg-background">
                  <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
                    <div className="border-b border-border bg-accent/5 p-8 lg:border-b-0 lg:border-r lg:p-10">
                      <p className={boxEyebrowClass}>{phase.tagline}</p>
                      <h3 className="mt-4 font-serif text-3xl italic md:text-4xl lg:text-5xl">
                        {phase.phase}
                      </h3>
                      <p className="mt-4 text-lg font-medium text-foreground md:text-xl">
                        {phase.focus}
                      </p>
                      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-foreground md:text-base">
                        {phase.ages}
                      </p>
                    </div>
                    <div className="p-8 lg:p-10">
                      <ul className="grid gap-0 md:flex md:divide-x md:divide-border">
                        {phase.items.map((item, itemIndex) => (
                          <li
                            key={item.title}
                            className={`py-6 md:flex-1 md:px-6 ${
                              itemIndex < phase.items.length - 1
                                ? "border-b border-border md:border-b-0"
                                : ""
                            }`}
                          >
                            <h4 className={cardTitleClass}>{item.title}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {item.body}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="blur">
            <h2 className={sectionLabelClass}>Enquire Now</h2>
            <p className={`${sectionSubtitleClass} mt-4`}>Unlock your potential</p>
            <p className="mt-8 text-muted-foreground">
              A complimentary session offers valuable insights and a chance to connect with
              industry experts!
            </p>
            <Link
              to="/enquiry"
              className="group mt-10 inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-[11px] uppercase tracking-widest text-background transition-colors hover:bg-accent"
            >
              Book Appointment
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
