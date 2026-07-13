import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { StripeHero } from "@/components/site/StripeHero";
import { heroNavLinks } from "@/data/primary-nav";
import heroParentingCoaching from "@/assets/hero-parenting-coaching.jpg";

export const Route = createFileRoute("/parenting-coaching")({
  head: () => ({
    meta: [
      { title: "Parenting Coaching - KAREER Studio" },
      {
        name: "description",
        content:
          "Empowering parents to support their child's global academic and career aspirations.",
      },
    ],
  }),
  component: ParentingPage,
});

const parentingHeroNavLinks = heroNavLinks();

function ParentingPage() {
  return (
    <PageLayout>
      <StripeHero
        image={heroParentingCoaching}
        imageAlt="Parent and child planning an academic journey together"
        imagePosition="object-[center_40%]"
        quoteEyebrow="Parenting Coaching"
        quote="‘A program for parents who want to walk alongside their child's global ambitions with clarity and calm.’"
        stripeHeading="Parenting Coaching"
        stripeTagline="Raising globally minded children - together."
        navLinks={parentingHeroNavLinks}
      />

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
              The hardest part of a global education is rarely academic - it's
              alignment. KAREER Studio's parenting program turns guesswork
              into shared vocabulary, and shared vocabulary into momentum.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
