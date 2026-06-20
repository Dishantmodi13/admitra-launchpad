import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import heroParentingCoaching from "@/assets/hero-parenting-coaching.jpg";

export const Route = createFileRoute("/parenting-coaching")({
  head: () => ({
    meta: [
      { title: "Parenting Coaching — KAREER Studio" },
      {
        name: "description",
        content:
          "Empowering parents to support their child's global academic and career aspirations.",
      },
    ],
  }),
  component: ParentingPage,
});

function ParentingPage() {
  return (
    <PageLayout>
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="left">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Parenting Coaching
              </span>
              <h1 className="mt-6 font-serif text-5xl italic leading-[1.05] md:text-6xl lg:text-7xl">
                Raising globally
                <br />
                minded children — together.
              </h1>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground">
                A program for parents who want to walk alongside their child's global
                ambitions with clarity and calm.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120} className="lg:justify-self-end">
              <div className="relative mx-auto max-w-lg overflow-hidden border border-border bg-secondary sm:max-w-xl lg:mx-0 lg:ml-auto lg:max-w-[480px] xl:max-w-[540px]">
                <img
                  src={heroParentingCoaching}
                  alt="Parent and child planning an academic journey together"
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl italic">What you get</h2>
            <ul className="mt-8 space-y-4 text-muted-foreground">
              <li className="flex gap-4">
                <span className="font-mono text-xs text-accent">01</span>
                <span>Monthly mentor sessions with senior consultants.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-xs text-accent">02</span>
                <span>Parent–child alignment frameworks and check-ins.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-xs text-accent">03</span>
                <span>Cultural & cost-of-living briefings for target countries.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-xs text-accent">04</span>
                <span>A private community of parents on the same journey.</span>
              </li>
            </ul>
          </div>
          <div className="border-l border-border p-12">
            <h2 className="font-serif text-3xl italic">Why it matters</h2>
            <p className="mt-6 text-muted-foreground">
              The hardest part of a global education is rarely academic — it's
              alignment. KAREER Studio's parenting program turns guesswork
              into shared vocabulary, and shared vocabulary into momentum.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
