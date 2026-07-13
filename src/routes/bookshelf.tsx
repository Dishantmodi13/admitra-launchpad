import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { StripeHero } from "@/components/site/StripeHero";
import { heroNavLinks } from "@/data/primary-nav";
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
      { title: "Bookshelf - KAREER Studio" },
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
  { cover: book2, title: "Ivy League Prep", series: "Admissions", desc: "How top-school applications are really evaluated - and what to do about it." },
  { cover: book3, title: "Future Career", series: "Career Planning", desc: "Mapping interests to industries that will exist in 2035." },
  { cover: book4, title: "IELTS Mastery", series: "Coaching", desc: "Band-by-band breakdown of the four IELTS modules." },
  { cover: book5, title: "Global Parenting", series: "Parenting", desc: "A short book for parents of internationally-minded children." },
  { cover: book6, title: "Visa Handbook", series: "Study Abroad", desc: "A practical handbook to the most-asked study-abroad visas." },
];

const bookshelfHeroNavLinks = heroNavLinks();

function BookshelfPage() {
  return (
    <PageLayout>
      <StripeHero
        image={heroBookshelf}
        imageAlt="Curated bookshelf with vintage books and trailing plants"
        imagePosition="object-[center_45%]"
        quoteEyebrow="Bookshelf"
        quote="‘Free resources to help you decide, prepare, and arrive. Every title is ₹0/-.’"
        stripeHeading="Bookshelf"
        stripeTagline="The Knowledge Library."
        navLinks={bookshelfHeroNavLinks}
      />

      <section className="overflow-hidden px-6 py-24">
        <AutoScrollBookRow books={books} />
      </section>
    </PageLayout>
  );
}
