import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageLayout } from "@/components/site/PageLayout";
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
      <PageHeader
        eyebrow="Bookshelf"
        title="The Knowledge Library."
        body="Free resources to help you decide, prepare, and arrive. Every title is ₹0/-."
      />
      <section className="overflow-hidden px-6 py-24">
        <div className="no-scrollbar flex gap-6 overflow-x-auto pb-4">
          {books.map((b) => (
            <article key={b.title} className="group w-[230px] flex-shrink-0 sm:w-[250px]">
              <div className="overflow-hidden bg-secondary">
                <img
                  src={b.cover}
                  alt={b.title}
                  loading="lazy"
                  width={360}
                  height={540}
                  className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {b.series}
                </span>
                <span className="font-mono text-xs">₹0/-</span>
              </div>
              <h3 className="mt-2 font-serif text-lg italic">{b.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{b.desc}</p>
              <button className="mt-3 font-mono text-[11px] uppercase tracking-widest text-accent underline-offset-4 hover:underline">
                Download →
              </button>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}