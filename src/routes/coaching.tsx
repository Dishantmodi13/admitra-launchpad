import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageLayout } from "@/components/site/PageLayout";

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
  },
  {
    n: "02",
    title: "IELTS Coaching",
    body: "Band-targeted live coaching with full-length mock tests, speaking partners, and an examiner-grade evaluation loop.",
  },
  {
    n: "03",
    title: "GRE Coaching",
    body: "Quant, verbal, and AWA — diagnostic-led prep with custom problem sets and adaptive review.",
  },
  {
    n: "04",
    title: "SAT Coaching",
    body: "College Board-aligned prep with section drills, reading strategy, and weekly proctored simulations.",
  },
  {
    n: "05",
    title: "PTE Coaching",
    body: "AI-grader-aware preparation. Pronunciation, fluency, and template mastery for the integrated tasks.",
  },
];

function CoachingPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Coaching"
        title="Live, expert coaching — built for outcomes."
        body="Five focused programs delivered online by trainers who have helped hundreds of students cross the bar."
      />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.n}
              className="group bg-background p-10 transition-colors hover:bg-accent/5"
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