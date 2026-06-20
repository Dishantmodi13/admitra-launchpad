import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import heroEducationPlanning from "@/assets/hero-education-planning.jpg";

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
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="left">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Education Planning
              </span>
              <h1 className="mt-6 font-serif text-5xl italic leading-[1.05] md:text-6xl lg:text-7xl">
                A roadmap,
                <br />
                not a guess.
              </h1>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground">
                We pair scientific assessments with senior mentor judgment to design
                the next 4–8 years of your academic life.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120} className="lg:justify-self-end">
              <div className="relative mx-auto max-w-lg overflow-hidden border border-border bg-secondary sm:max-w-xl lg:mx-0 lg:ml-auto lg:max-w-[480px] xl:max-w-[540px]">
                <img
                  src={heroEducationPlanning}
                  alt="Student mapping a personalized education and career roadmap"
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
