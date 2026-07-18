import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { StripeHero } from "@/components/site/StripeHero";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { CountUpStat } from "@/components/site/CountUpStat";
import { IvyWhySection } from "@/components/site/IvyWhySection";
import { IvyUniversityShowcase } from "@/components/site/IvyUniversityShowcase";
import { IvyProfileExplorer } from "@/components/site/IvyProfileExplorer";
import { IvyAdmissionsTimeline } from "@/components/site/IvyAdmissionsTimeline";
import { IvyScoreBuilder } from "@/components/site/IvyScoreBuilder";
import { IvyComparison } from "@/components/site/IvyComparison";
import { IvyChecklist } from "@/components/site/IvyChecklist";
import { heroNavLinks } from "@/data/primary-nav";
import {
  ivyFinalCta,
  ivyLeagueHero,
  ivyLeagueOrigin,
  ivyLeagueStats,
  ivyServices,
  whoShouldConsider,
} from "@/data/ivy-league";
import heroIvyLeague from "@/assets/hero-ivy-league.jpg";

export const Route = createFileRoute("/ivy-league")({
  head: () => ({
    meta: [
      {
        title: "Ivy League Admissions Guidance | Harvard, Yale, Princeton | KAREER Studio",
      },
      {
        name: "description",
        content:
          "Purpose-built Ivy League admissions mentoring - profile building, essays, interviews, and a personalized roadmap to Harvard, Yale, Princeton, Columbia & beyond.",
      },
    ],
  }),
  component: IvyLeaguePage,
});

const sectionLabelClass =
  "font-mono text-base uppercase tracking-[0.3em] text-accent md:text-lg";
const sectionSubtitleClass =
  "mt-4 font-serif text-4xl italic leading-snug text-foreground md:text-5xl lg:text-6xl";

const ivyHeroNavLinks = heroNavLinks(["ivy-league"]);

const statLabelClass =
  "mt-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-base";

function IvyLeaguePage() {
  return (
    <PageLayout>
      <StripeHero
        image={heroIvyLeague}
        imageAlt="Students walking through an ivy-covered Ivy League campus"
        imagePosition="object-top"
        quoteEyebrow="Ivy League Admissions"
        quote={ivyLeagueHero.quote}
        quoteDetail="Get into Harvard. Yale. Princeton. Columbia - guided by Ivy alumni, with a 95% interview success rate."
        stripeHeading={ivyLeagueHero.stripeHeading}
        stripeTagline={ivyLeagueHero.stripeTagline}
        navLinks={ivyHeroNavLinks}
        ctaEyebrow="Get Started"
        ctaTitle="Book a Discovery Session"
        ctaTo="/enquiry"
      />

      <section className="border-b border-border px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {ivyLeagueStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100} direction="scale">
                <CountUpStat value={stat.value} suffix={stat.suffix} delay={i * 100} />
                <p className={statLabelClass}>{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <p className={sectionLabelClass}>{ivyLeagueOrigin.eyebrow}</p>
              <h2 className={sectionSubtitleClass}>{ivyLeagueOrigin.title}</h2>
            </ScrollReveal>

            <ScrollRevealGroup
              className="space-y-5 lg:col-span-7 lg:pt-2"
              stagger={90}
              direction="up"
              threshold={0.08}
            >
              {ivyLeagueOrigin.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                  {p}
                </p>
              ))}
            </ScrollRevealGroup>
          </div>
        </div>
      </section>

      <IvyWhySection />
      <IvyUniversityShowcase />
      <IvyProfileExplorer />
      <IvyScoreBuilder />
      <IvyAdmissionsTimeline />
      <IvyComparison />

      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <p className={sectionLabelClass}>Who Should Consider Ivy League?</p>
              <h2 className={sectionSubtitleClass}>Designed for ambitious students & families.</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                An Ivy League journey is a serious, long-term investment. Here&apos;s who we typically
                partner with.
              </p>
            </ScrollReveal>

            <ScrollRevealGroup
              className="grid auto-rows-fr gap-3 sm:grid-cols-2 lg:col-span-7"
              itemClassName="h-full"
              stagger={80}
              direction="up"
              threshold={0.05}
            >
              {whoShouldConsider.map((item) => (
                <div
                  key={item}
                  className="flex h-full min-h-[100px] items-start gap-3 rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:border-accent/30 hover:bg-secondary/30"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#8c1d2b]" strokeWidth={1.75} />
                  <p className="line-clamp-4 text-sm leading-relaxed text-foreground sm:text-base">{item}</p>
                </div>
              ))}
            </ScrollRevealGroup>
          </div>
        </div>
      </section>

      <IvyChecklist />

      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="left" className="mb-14 max-w-2xl">
            <p className={sectionLabelClass}>Our Expertise</p>
            <p className={sectionSubtitleClass}>End-to-end Ivy League mentoring.</p>
          </ScrollReveal>

          <ScrollRevealGroup
            className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3"
            itemClassName="h-full"
            stagger={90}
            direction="up"
            threshold={0.08}
          >
            {ivyServices.map((item, i) => (
              <div
                key={item.title}
                className="group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
              >
                <span className="font-mono text-4xl font-bold text-accent/70 transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 line-clamp-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
            <p className={sectionLabelClass}>Ready For The World&apos;s Best Education?</p>
            <h2 className={`${sectionSubtitleClass} mt-4`}>{ivyFinalCta.title}</h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {ivyFinalCta.assurances.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-[#8c1d2b]" strokeWidth={2} />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/enquiry"
                className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-[11px] uppercase tracking-widest text-background transition-colors hover:bg-accent"
              >
                Book a Discovery Session
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/enquiry"
                className="group inline-flex items-center gap-3 border border-border px-8 py-4 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Download the Ivy Starter Kit
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
