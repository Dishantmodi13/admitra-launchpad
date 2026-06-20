import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { AutoScrollBookRow } from "@/components/site/AutoScrollBookRow";
import heroBookshelf from "@/assets/hero-bookshelf.jpg";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";
import book4 from "@/assets/book-4.jpg";
import book5 from "@/assets/book-5.jpg";
import book6 from "@/assets/book-6.jpg";

export const Route = createFileRoute("/bookshelf")({
  head: () => ({
    meta: [
      { title: "Bookshelf — KAREER Studio" },
      {
        name: "description",
        content:
          "Free books and guides on study abroad, careers, coaching and parenting. All resources ₹0/-.",
      },
    ],
  }),
  component: BookshelfPage,
});

const books = [
  { cover: book1, title: "The Global Scholar", series: "Study Abroad", desc: "A field guide to building a globally portable academic profile." },
  { cover: book2, title: "Ivy League Prep", series: "Admissions", desc: "How top-school applications are really evaluated — and what to do about it." },
  { cover: book3, title: "Future Career", series: "Career Planning", desc: "Mapping interests to industries that will exist in 2035." },
  { cover: book4, title: "IELTS Mastery", series: "Coaching", desc: "Band-by-band breakdown of the four IELTS modules." },
  { cover: book5, title: "Global Parenting", series: "Parenting", desc: "A short book for parents of internationally-minded children." },
  { cover: book6, title: "Visa Handbook", series: "Study Abroad", desc: "A practical handbook to the most-asked study-abroad visas." },
];

function BookshelfPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="left">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Bookshelf
              </span>
              <h1 className="mt-6 font-serif text-5xl italic leading-[1.05] md:text-6xl lg:text-7xl">
                The Knowledge
                <br />
                Library.
              </h1>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground">
                Free resources to help you decide, prepare, and arrive. Every title
                is ₹0/-.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-accent">
                All Resources ₹0/-
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120} className="lg:justify-self-end">
              <div className="relative mx-auto max-w-lg overflow-hidden border border-border bg-secondary sm:max-w-xl lg:mx-0 lg:ml-auto lg:max-w-[480px] xl:max-w-[540px]">
                <img
                  src={heroBookshelf}
                  alt="Curated bookshelf with premium education guides and resources"
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

      <section className="overflow-hidden px-6 py-24">
        <AutoScrollBookRow books={books} />
      </section>
    </PageLayout>
  );
}
