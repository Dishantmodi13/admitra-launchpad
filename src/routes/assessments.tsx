import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { StripeHero } from "@/components/site/StripeHero";
import { heroNavLinks } from "@/data/primary-nav";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { CountUpStat } from "@/components/site/CountUpStat";
import { AssessmentStack } from "@/components/site/AssessmentStack";
import { cn } from "@/lib/utils";
import heroAssessments from "@/assets/hero-assessments.jpg";
import {
  assessmentStats,
  assessmentTicker,
  howItWorks,
  parentBenefits,
  reportFeatures,
  studentAssessments,
} from "@/data/assessments";

export const Route = createFileRoute("/assessments")({
  head: () => ({
    meta: [
      { title: "Assessment Center - KAREER Studio" },
      {
        name: "description",
        content:
          "Career discovery, resilience profiling, academic-interest mapping, study-abroad readiness, and employability - nine expert assessments for students and parents.",
      },
    ],
  }),
  component: AssessmentsPage,
});

const audienceCardClass =
  "group relative h-full overflow-hidden border border-border p-6 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_24px_48px_-16px_oklch(0.22_0.018_230/0.18)] sm:p-8 lg:p-10";

const assessmentsHeroNavLinks = heroNavLinks(["assessments"]);

function splitAssessmentListItem(item: string) {
  const separator = " - ";
  const separatorIndex = item.indexOf(separator);
  if (separatorIndex === -1) {
    return { name: item, description: null as string | null };
  }
  return {
    name: item.slice(0, separatorIndex),
    description: item.slice(separatorIndex + separator.length),
  };
}

function AssessmentListItem({ item }: { item: string }) {
  const { name, description } = splitAssessmentListItem(item);

  return (
    <span>
      <span className="font-bold text-foreground">{name}</span>
      {description ? <span className="text-muted-foreground"> - {description}</span> : null}
    </span>
  );
}

function AssessmentsPage() {
  return (
    <PageLayout>
      <StripeHero
        image={heroAssessments}
        imageAlt="Student reviewing a personalized career assessment report"
        imagePosition="object-[center_40%]"
        quoteEyebrow="Assessment Center"
        quote="Career discovery, resilience profiling, academic-interest mapping, study-abroad readiness, and employability - one trusted platform for students and parents."
        stripeHeading="Assessment Center"
        stripeTagline="Know yourself. Choose smarter."
        navLinks={assessmentsHeroNavLinks}
        ctaEyebrow="Get Started"
        ctaTitle="Book a Discovery Session"
        ctaTo="/enquiry"
      />

      <section className="border-b border-border px-4 py-6 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid justify-items-center gap-5 border-t border-border pt-6 text-center sm:grid-cols-3 sm:justify-items-stretch sm:gap-8 sm:pt-12 sm:text-left lg:pt-12">
            {assessmentStats.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100} direction="scale" className="w-full max-w-xs sm:max-w-none">
                <CountUpStat
                  value={item.value}
                  suffix={item.suffix}
                  padStart={item.padStart}
                  delay={i * 100}
                  className="mx-auto sm:mx-0"
                />
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="overflow-hidden border-b border-border bg-foreground py-4 text-background">
        <div className="flex animate-[scroll_30s_linear_infinite] gap-8 whitespace-nowrap">
          {[...assessmentTicker, ...assessmentTicker].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/70"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Who should take */}
      <section className="px-4 py-12 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="blur">
            <h2 className="max-w-2xl font-serif text-4xl italic md:text-5xl">
              Who should take these assessments?
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Eight assessments are built for students. The Litmus Test is designed
              for parents. Register once and access the tests that fit your role.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            <ScrollReveal direction="left">
              <div
                className={cn(
                  audienceCardClass,
                  "bg-background hover:bg-accent/[0.04]",
                )}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                <h3 className="font-serif text-3xl italic transition-colors duration-300 group-hover:text-accent">
                  Students
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-accent">
                  Grades 6-12 & college
                </p>
                <ul className="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
                  {studentAssessments.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110"
                        aria-hidden
                      />
                      <AssessmentListItem item={item} />
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className="mt-10 inline-block font-mono text-[11px] uppercase tracking-widest text-accent underline-offset-4 transition-all duration-300 group-hover:translate-x-1 group-hover:underline"
                >
                  Register now →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div
                className={cn(
                  audienceCardClass,
                  "bg-accent/5 hover:bg-accent/10",
                )}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                <h3 className="font-serif text-3xl italic transition-colors duration-300 group-hover:text-accent">
                  Parents
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-accent">
                  Actively supporting their child
                </p>
                <ul className="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
                  {parentBenefits.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110"
                        aria-hidden
                      />
                      <AssessmentListItem item={item} />
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className="mt-10 inline-block font-mono text-[11px] uppercase tracking-widest text-accent underline-offset-4 transition-all duration-300 group-hover:translate-x-1 group-hover:underline"
                >
                  Register now →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* All assessments */}
      <section
        id="assessment-stack"
        className="border-y border-border px-4 py-12 sm:px-6 lg:py-32"
        style={{ overflow: "visible" }}
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="blur">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              Explore
            </span>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl italic md:mt-4 md:text-5xl">
              Our 9 Assessments
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Each assessment is built around a proven psychological model, and
              everyone ends with an instant, personalized report. Find the test that
              answers your biggest question.
            </p>
          </ScrollReveal>

          <AssessmentStack />
        </div>
      </section>

      {/* Report features */}
      <section className="px-4 py-12 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="blur">
            <h2 className="font-serif text-4xl italic md:text-5xl">
              More than just a score
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Every assessment delivers a complete, actionable package - not a single
              number.
            </p>
          </ScrollReveal>

          <ScrollRevealGroup
            className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
            stagger={100}
            direction="up"
          >
            {reportFeatures.map((f) => (
              <div key={f.title} className="bg-background p-8">
                <h3 className="font-serif text-xl italic">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border bg-foreground px-4 py-12 text-background sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="blur">
            <h2 className="font-serif text-4xl italic md:text-5xl">
              From sign-up to report in minutes
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {howItWorks.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 120} direction="up">
                <div className="border-t border-background/20 pt-8">
                  <span className="font-mono text-xs text-accent">{step.n}</span>
                  <h3 className="mt-4 font-serif text-2xl italic">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-background/65">
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="blur">
            <h2 className="font-serif text-4xl italic md:text-5xl">
              Ready to discover your strengths & direction?
            </h2>
            <p className="mt-6 text-muted-foreground">
              Join thousands of students and parents who use Assessment Center to make
              confident decisions about careers, streams, and education - backed by
              science, not guesswork.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
              <li>OTP verification - no password needed</li>
              <li>Access all 9 assessments</li>
              <li>Premium PDF reports included</li>
            </ul>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/register"
                className="bg-foreground px-8 py-4 font-mono text-[11px] uppercase tracking-widest text-background transition-colors hover:bg-accent"
              >
                Register & start your first test
              </Link>
              <Link
                to="/login"
                className="border border-border px-8 py-4 font-mono text-[11px] uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
              >
                Already have an account? Login
              </Link>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              No credit card required to register. Assessments are available via your
              school portal or individual purchase.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
