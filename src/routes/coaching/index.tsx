import { createFileRoute, Link } from "@tanstack/react-router";
import { MousePointerClick } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { StripeHero } from "@/components/site/StripeHero";
import { heroNavLinks } from "@/data/primary-nav";
import { cn } from "@/lib/utils";
import heroCoaching from "@/assets/hero-coaching.jpg";

export const Route = createFileRoute("/coaching/")({
  head: () => ({
    meta: [
      { title: "Coaching - KAREER Studio" },
      {
        name: "description",
        content:
          "Online live coaching: Scholastic & Language, IELTS, GRE, SAT, and PTE - led by expert trainers.",
      },
    ],
  }),
  component: CoachingPage,
});

const programs = [
  {
    n: "01",
    title: "Scholastic & Language Coaching",
    slug: "scholastic-language",
    body: "Foundational fluency for school-age learners - reading, writing, vocabulary, and critical thinking built over a structured arc.",
    span: "lg:col-span-2",
  },
  {
    n: "02",
    title: "IELTS Coaching",
    slug: "ielts",
    body: "Band-targeted live coaching with full-length mock tests, speaking partners, and an examiner-grade evaluation loop.",
    span: "lg:col-span-2",
  },
  {
    n: "03",
    title: "GRE Coaching",
    slug: "gre",
    body: "Quant, verbal, and AWA - diagnostic-led prep with custom problem sets and adaptive review.",
    span: "lg:col-span-2",
  },
  {
    n: "04",
    title: "SAT Coaching",
    slug: "sat",
    body: "College Board-aligned prep with section drills, reading strategy, and weekly proctored simulations.",
    span: "lg:col-span-3",
  },
  {
    n: "05",
    title: "PTE Coaching",
    slug: "pte",
    body: "AI-grader-aware preparation. Pronunciation, fluency, and template mastery for the integrated tasks.",
    span: "lg:col-span-3",
  },
];

// Ivy League must appear in the hero "Go to" list.
const coachingHeroNavLinks = heroNavLinks(["coaching"]);

function CoachingPage() {
  return (
    <PageLayout>
      <StripeHero
        image={heroCoaching}
        imageAlt="Student in a live online coaching session with headphones and study materials"
        imagePosition="object-[center_40%]"
        quoteEyebrow="Coaching"
        quote="Five focused programs delivered online by trainers who have helped hundreds of students cross the bar."
        stripeHeading="Coaching"
        stripeTagline="Live, expert coaching - built for outcomes."
        navLinks={coachingHeroNavLinks}
        ctaEyebrow="Get Started"
        ctaTitle="Book a Discovery Session"
        ctaTo="/enquiry"
      />

      <section className="px-4 py-6 sm:px-6 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-6">
          {programs.map((p) => (
            <Link
              key={p.n}
              to="/coaching/$slug"
              params={{ slug: p.slug }}
              className={cn(
                "group flex flex-col border border-border bg-background p-5 transition-colors hover:border-accent/40 hover:bg-accent/[0.03] sm:p-8 lg:p-10",
                p.span,
              )}
            >
              <span className="font-mono text-3xl font-extrabold leading-none text-accent sm:text-4xl">{p.n}</span>
              <h3 className="mt-3 font-serif text-2xl italic leading-snug transition-colors group-hover:text-accent sm:mt-6">
                {p.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-accent">
                <MousePointerClick className="size-3 shrink-0" aria-hidden />
                Click
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
