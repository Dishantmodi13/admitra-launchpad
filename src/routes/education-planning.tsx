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
  sectionDivider,
  sectionDividerTop,
  sectionLabelClass,
  sectionSubtitleClass,
  cardEyebrowClass,
  cardTitleClass,
} from "@/lib/section-styles";
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

const processCardTitleClass =
  "mt-2 font-serif text-xl italic leading-tight md:mt-3 md:text-2xl lg:text-3xl";
const epSectionPadding = "px-4 py-5 lg:px-6 lg:py-16";
const epSectionHeaderMb = "mb-3 max-w-2xl lg:mb-8";

const reasonIcons = {
  route: RouteIcon,
  lightbulb: Lightbulb,
  target: Target,
  rocket: Rocket,
  sparkles: Sparkles,
} as const;

const educationHeroNavLinks = heroNavLinks(["education-planning"]);

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
        quote="We pair scientific assessments with senior mentor Judgement to design the next 4-8 years of your academic life."
        stripeHeading="Education Planning"
        stripeTagline="A roadmap, not a guess."
        navLinks={educationHeroNavLinks}
        ctaEyebrow="Get Started"
        ctaTitle="Book a Discovery Session"
        ctaTo="/enquiry"
      />

      {/* Introduction */}
      <section className={`${sectionDivider} ${epSectionPadding}`}>
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="left" className="mb-4 max-w-3xl lg:mb-8">
            <h2 className={sectionLabelClass}>{educationPlanningIntro.label}</h2>
            <p className={sectionSubtitleClass}>{educationPlanningIntro.title}</p>
          </ScrollReveal>
          <ScrollRevealGroup
            className="mx-auto max-w-4xl space-y-4 text-left text-muted-foreground lg:space-y-6 lg:text-justify"
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
      <section className={`${sectionDivider} ${epSectionPadding}`}>
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="blur" className={epSectionHeaderMb}>
            <h2 className={sectionLabelClass}>Our Process</h2>
            <p className={sectionSubtitleClass}>Education Planning Process</p>
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-3 lg:gap-8">
            {planningProcess.map((block, i) => (
              <ScrollReveal key={block.phase} delay={i * 120} direction="up">
                <div className="group h-full border border-border bg-background p-6 transition-colors hover:border-accent/40 hover:bg-accent/[0.03] lg:p-10">
                  <p className={cardEyebrowClass}>{block.phase}</p>
                  <h3 className={processCardTitleClass}>{block.subtitle}</h3>
                  <ul className="mt-5 space-y-3 lg:mt-8 lg:space-y-4">
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
      <section className={`${sectionDivider} ${epSectionPadding}`}>
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-5 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal direction="left">
              <h2 className={sectionLabelClass}>Why It Matters</h2>
              <p className={sectionSubtitleClass}>{needForPlanning.title}</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-left leading-relaxed text-muted-foreground lg:text-justify">
                {needForPlanning.intro}
              </p>
            </ScrollReveal>
          </div>

          <ScrollRevealGroup
            className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-5 lg:gap-5"
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
                  <h3 className={`${cardTitleClass} mt-4 lg:mt-5`}>{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:mt-3">
                    {reason.body}
                  </p>
                </div>
              );
            })}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Phases of Education */}
      <section className={`overflow-x-clip ${sectionDivider} ${epSectionPadding}`}>
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="blur" className={epSectionHeaderMb}>
            <h2 className={sectionLabelClass}>The Journey</h2>
            <p className={sectionSubtitleClass}>Phases of Education</p>
          </ScrollReveal>

          <div className="space-y-6 lg:space-y-16">
            {educationPhases.map((phase, index) => (
              <ScrollReveal
                key={phase.phase}
                direction={index % 2 === 0 ? "left" : "right"}
                distance="wide"
                delay={120}
                threshold={0.18}
              >
                <article className="overflow-hidden border border-border bg-background">
                  <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
                    <div className="border-b border-border bg-accent/5 p-6 lg:border-b-0 lg:border-r lg:p-10">
                      <p className={cardEyebrowClass}>{phase.tagline}</p>
                      <h3 className="mt-2 font-serif text-3xl italic md:mt-4 md:text-4xl lg:text-5xl">
                        {phase.phase}
                      </h3>
                      <p className="mt-2 text-lg font-bold text-foreground md:mt-4 md:text-xl">
                        {phase.focus}
                      </p>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-foreground md:mt-3 md:text-base md:tracking-[0.15em]">
                        {phase.ages}
                      </p>
                    </div>
                    <div className="p-6 lg:p-10">
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
      <section className={`${sectionDividerTop} ${epSectionPadding}`}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="blur">
            <h2 className={sectionLabelClass}>Enquire Now</h2>
            <p className={`${sectionSubtitleClass} mt-2 lg:mt-4`}>Unlock your potential</p>
            <p className="mt-4 text-muted-foreground lg:mt-8">
              A complimentary session offers valuable insights and a chance to connect with
              industry experts!
            </p>
            <Link
              to="/enquiry"
              className="group mt-6 inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-[11px] uppercase tracking-widest text-background transition-colors hover:bg-accent lg:mt-10"
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
