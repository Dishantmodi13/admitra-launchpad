import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageLayout } from "@/components/site/PageLayout";
import { sectionPadding } from "@/lib/section-styles";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      { title: "Knowledge Center - KAREER Studio" },
      {
        name: "description",
        content: "Podcasts and blogs from KAREER Studio - Voices of the Globe.",
      },
    ],
  }),
  component: KnowledgePage,
});

const items = [
  { kind: "Podcast", title: "Voices of the Globe: Episode 12", meta: "28 min • Hosted by KAREER Studio", img: blog1 },
  { kind: "Blog", title: "New Student Visa Regulations for 2026", meta: "5 min read", img: blog2 },
  { kind: "Podcast", title: "What admissions officers really want", meta: "33 min", img: blog1 },
  { kind: "Blog", title: "Building a globally portable career", meta: "7 min read", img: blog2 },
];

function KnowledgePage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Knowledge Center"
        title="Voices of the Globe."
        body="Long-form writing and conversations on study abroad, careers, and the parenting that surrounds them."
      />
      <section className={sectionPadding}>
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          {items.map((it, i) => (
            <article key={i} className="group cursor-pointer border border-border">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {it.kind}
                </span>
                <h3 className="mt-3 font-serif text-3xl italic">{it.title}</h3>
                <p className="mt-3 text-xs text-muted-foreground">{it.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}