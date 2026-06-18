import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/education-planning")({
  head: () => ({
    meta: [
      { title: "Education Planning — KAREER Studio" },
      {
        name: "description",
        content:
          "Scientific, personalized education planning — from school choice to international university admits.",
      },
    ],
  }),
  component: EducationPlanningPage,
});

const steps = [
  { n: "01", t: "Discover", b: "Scientific assessments uncover aptitude, interest, and trajectory." },
  { n: "02", t: "Design", b: "A bespoke roadmap aligning subjects, milestones, and outcomes." },
  { n: "03", t: "Develop", b: "Live coaching, mentor pairing, and habit architecture." },
  { n: "04", t: "Deploy", b: "Application strategy, interviews, and admit execution." },
];

function EducationPlanningPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Education Planning"
        title="A roadmap, not a guess."
        body="We pair scientific assessments with senior mentor judgment to design the next 4–8 years of your academic life."
      />
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-foreground pt-6">
              <span className="font-mono text-xs text-accent">{s.n}</span>
              <h3 className="mt-4 font-serif text-3xl italic">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}