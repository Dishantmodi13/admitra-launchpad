import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { StripeHero } from "@/components/site/StripeHero";
import { StudyAbroadChallengeExplorer } from "@/components/site/StudyAbroadChallengeExplorer";
import { StudyAbroadTimeline } from "@/components/site/StudyAbroadTimeline";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { CountUpStat } from "@/components/site/CountUpStat";
import { heroNavLinks } from "@/data/primary-nav";
import { kareerApproach, studyAbroadIntro } from "@/data/study-abroad";
import heroStudyAbroad from "@/assets/hero-study-abroad.jpg";

export const Route = createFileRoute("/study-abroad")({
  head: () => ({
    meta: [
      {
        title: "Study Abroad Consulting | Global Education Guidance | KAREER Studio",
      },
      {
        name: "description",
        content:
          "Career-focused study abroad consulting with personalized higher education solutions, scientific assessments, and end-to-end support from exploration to departure.",
      },
    ],
  }),
  component: StudyAbroadPage,
});

const sectionLabelClass =
  "font-mono text-base uppercase tracking-[0.3em] text-accent md:text-lg";
const sectionSubtitleClass =
  "mt-4 font-serif text-4xl italic leading-snug text-foreground md:text-5xl lg:text-6xl";

const studyAbroadHeroNavLinks = heroNavLinks(["study-abroad"]);

const pillarLabelClass =
  "mt-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-base";

function StudyAbroadPage() {
  return (
    <PageLayout>
      <StripeHero
        image={heroStudyAbroad}
        imageAlt="Indian students preparing for an international study abroad journey"
        imagePosition="object-[center_40%]"
        quoteEyebrow="Career-Focused Study Abroad"
        quote="‘We pair scientific assessments with senior mentor judgment to turn your global education dream into a planned, employable career path.’"
        stripeHeading="Study Abroad"
        stripeTagline="Personalized higher education solutions - from first doubts to departure day."
        navLinks={studyAbroadHeroNavLinks}
        ctaEyebrow="Get Started"
        ctaTitle="Book a Discovery Session"
        ctaTo="/enquiry"
      />

      <section className="border-b border-border px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="left" className="mb-12 max-w-3xl">
            <h2 className={sectionLabelClass}>{studyAbroadIntro.eyebrow}</h2>
            <p className={sectionSubtitleClass}>{studyAbroadIntro.headline}</p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              {studyAbroadIntro.summary}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 border-t border-border pt-12 sm:grid-cols-3">
            {studyAbroadIntro.pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.label} delay={i * 100} direction="scale">
                <CountUpStat
                  value={pillar.value}
                  suffix={pillar.suffix}
                  delay={i * 100}
                />
                <p className={pillarLabelClass}>{pillar.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StudyAbroadChallengeExplorer />
      <StudyAbroadTimeline />

      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="left" className="mb-14 max-w-2xl">
            <p className={sectionLabelClass}>The KAREER Difference</p>
            <p className={sectionSubtitleClass}>Not just an agent. A strategic partner.</p>
          </ScrollReveal>

          <ScrollRevealGroup
            className="grid gap-6 sm:grid-cols-2"
            stagger={100}
            direction="up"
            threshold={0.08}
          >
            {kareerApproach.map((item, i) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
              >
                <span className="font-mono text-4xl font-bold text-accent/70 transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="blur">
            <h2 className={sectionLabelClass}>Enquire Now</h2>
            <p className={`${sectionSubtitleClass} mt-4`}>Unlock your potential</p>
            <p className="mt-8 text-muted-foreground">
              A complimentary session offers valuable insights and a chance to connect with
              industry experts who understand your full study abroad journey.
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
