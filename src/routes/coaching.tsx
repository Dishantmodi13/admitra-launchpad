import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { cn } from "@/lib/utils";
import heroCoaching from "@/assets/hero-coaching.jpg";

export const Route = createFileRoute("/coaching")({
  head: () => ({
    meta: [
      { title: "Coaching — KAREER Studio" },
      {
        name: "description",
        content:
          "Online live coaching: Scholastic & Language, IELTS, GRE, SAT, and PTE — led by expert trainers.",
      },
    ],
  }),
  component: CoachingPage,
});

const programs = [
  {
    n: "01",
    title: "Scholastic & Language Coaching",
    body: "Foundational fluency for school-age learners — reading, writing, vocabulary, and critical thinking built over a structured arc.",
    span: "lg:col-span-2",
  },
  {
    n: "02",
    title: "IELTS Coaching",
    body: "Band-targeted live coaching with full-length mock tests, speaking partners, and an examiner-grade evaluation loop.",
    span: "lg:col-span-2",
  },
  {
    n: "03",
    title: "GRE Coaching",
    body: "Quant, verbal, and AWA — diagnostic-led prep with custom problem sets and adaptive review.",
    span: "lg:col-span-2",
  },
  {
    n: "04",
    title: "SAT Coaching",
    body: "College Board-aligned prep with section drills, reading strategy, and weekly proctored simulations.",
    span: "lg:col-span-3",
  },
  {
    n: "05",
    title: "PTE Coaching",
    body: "AI-grader-aware preparation. Pronunciation, fluency, and template mastery for the integrated tasks.",
    span: "lg:col-span-3",
  },
];

function CoachingPage() {
  return (
    <PageLayout>
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="left">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Coaching
              </span>
              <h1 className="mt-6 font-serif text-5xl italic leading-[1.05] md:text-6xl lg:text-7xl">
                Live, expert coaching —
                <br />
                built for outcomes.
              </h1>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground">
                Five focused programs delivered online by trainers who have helped
                hundreds of students cross the bar.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120} className="lg:justify-self-end">
              <div className="relative mx-auto max-w-lg overflow-hidden border border-border bg-secondary sm:max-w-xl lg:mx-0 lg:ml-auto lg:max-w-[480px] xl:max-w-[540px]">
                <img
                  src={heroCoaching}
                  alt="Indian student in a live online coaching session"
                  width={800}
                  height={500}
                  className="aspect-[16/10] w-full object-cover object-center"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-foreground/10 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-6">
          {programs.map((p) => (
            <div
              key={p.n}
              className={cn(
                "group border border-border bg-background p-10 transition-colors hover:border-accent/40 hover:bg-accent/[0.03]",
                p.span,
              )}
            >
              <span className="font-mono text-xs text-accent">{p.n}</span>
              <h3 className="mt-6 font-serif text-2xl italic leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
