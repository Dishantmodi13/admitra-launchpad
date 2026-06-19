import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";
import book4 from "@/assets/book-4.jpg";
import book5 from "@/assets/book-5.jpg";
import book6 from "@/assets/book-6.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import whyChooseUs from "@/assets/why-choose-us.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAREER Studio — Powered by ADMITra | Study Abroad & Career Planning" },
      {
        name: "description",
        content:
          "KAREER Studio: Your partner in professional growth beyond borders. Personalized, scientific consulting in global education, study abroad, live coaching, and parenting.",
      },
      { property: "og:title", content: "KAREER Studio — Powered by ADMITra" },
      {
        property: "og:description",
        content:
          "Personalized, scientific consulting in global education, study abroad and live coaching.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Global Career & Education Advisory",
    body: "Scientific mapping of your professional trajectory across international markets.",
  },
  {
    n: "02",
    title: "Career-Focused Study Abroad",
    body: "End-to-end guidance from university shortlisting to visa, arrival, and beyond.",
  },
  {
    n: "03",
    title: "Online Live Coaching",
    body: "Language proficiency and scholastic prep — IELTS, GRE, SAT, PTE — delivered live.",
  },
  {
    n: "04",
    title: "Parenting Coaching",
    body: "Strategic guidance for parents supporting their child's global ambitions.",
  },
];

const pillars = [
  { stat: "15+", label: "Years of Practice" },
  { stat: "500+", label: "Global Admits" },
  { stat: "8", label: "Scientific Assessments" },
  { stat: "40+", label: "Partner Universities" },
];

const whyChooseReasons = [
  {
    title: "Expert Advice",
    body: "Experienced professionals with global exposure, offering personalized guidance for your journey.",
  },
  {
    title: "Global Network",
    body: "Access to prestigious international institutions and trusted partners worldwide.",
  },
  {
    title: "Comprehensive Services",
    body: "Education planning, university applications, career strategy, coaching, and ongoing support.",
  },
  {
    title: "Personalized Approach",
    body: "Strategies shaped around your goals, interests, and academic achievements.",
  },
];

const books = [
  { cover: book1, title: "The Global Scholar", series: "Study Abroad" },
  { cover: book2, title: "Ivy League Prep", series: "Admissions" },
  { cover: book3, title: "Future Career", series: "Career Planning" },
  { cover: book4, title: "IELTS Mastery", series: "Coaching" },
  { cover: book5, title: "Global Parenting", series: "Parenting" },
  { cover: book6, title: "Visa Handbook", series: "Study Abroad" },
];

const stories = [
  {
    image: blog1,
    kind: "Podcast",
    title: "Voices of the Globe: Episode 12",
    meta: "28 min • Hosted by KAREER Studio",
  },
  {
    image: blog2,
    kind: "Blog",
    title: "New Student Visa Regulations for 2026",
    meta: "5 min read • Knowledge Center",
  },
];

function Index() {
  return (
    <PageLayout>
      <HeroSlider />

      {/* Who We Are */}
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <ScrollRevealGroup
          className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_auto_1fr]"
          stagger={160}
          direction="up"
          threshold={0.08}
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              Who We Are
            </span>
            <h2 className="mt-6 font-serif text-4xl italic leading-tight md:text-5xl">
              Your partner in professional growth beyond borders.
            </h2>
          </div>
          <div className="hidden h-full w-px bg-border lg:block" />
          <ScrollRevealGroup
            className="space-y-6 text-muted-foreground"
            stagger={120}
            direction="up"
            threshold={0.05}
          >
            <p>
              At KAREER Studio, we are more than just advisors; we are your
              partners in shaping your academic journey for an employable
              future. We specialize in guiding students towards global success
              through personalized and scientific consulting in Global
              Education & Career Planning, Career-Focused Study Abroad
              solutions, and Online Live Coaching.
            </p>
            <p>
              Rooted in research-backed methodologies, we are committed to
              unlocking your highest potential through planned and
              purpose-driven actions — guiding you toward opportunities that
              transcend borders and cultures.
            </p>
          </ScrollRevealGroup>
        </ScrollRevealGroup>
      </section>

      {/* Services */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollRevealGroup
            className="mb-16 flex flex-wrap items-end justify-between gap-6"
            stagger={120}
            direction="blur"
            threshold={0.08}
          >
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Our Services
              </span>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl italic leading-tight md:text-5xl">
                Crafted solutions, precisely aligned with your vision.
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              We partner with you to identify your potential, unique needs and
              aspirations — ensuring every solution unlocks new opportunities.
            </p>
          </ScrollRevealGroup>
          <ScrollRevealGroup
            className="grid gap-px rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4"
            stagger={120}
            direction="up"
            threshold={0.06}
          >
            {services.map((s) => (
              <div
                key={s.n}
                className="group bg-background p-8 transition-colors hover:bg-accent/5"
              >
                <span className="block font-mono text-xs text-accent">{s.n}</span>
                <h3 className="mt-6 font-serif text-2xl italic leading-snug">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-foreground px-6 py-24 text-background lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="left">
              <div className="overflow-hidden border border-background/10">
                <img
                  src={whyChooseUs}
                  alt="Student planning a global education journey"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal direction="right">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                  Why Choose Us
                </span>
                <h2 className="mt-4 font-serif text-4xl italic leading-tight md:text-5xl">
                  A dedication that knows no boundaries.
                </h2>
              </ScrollReveal>

              <ScrollRevealGroup
                className="mt-10 space-y-6"
                stagger={100}
                direction="up"
                threshold={0.08}
              >
                {whyChooseReasons.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                      <Check className="size-3.5 text-accent" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-medium text-background">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-background/65">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </ScrollRevealGroup>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-background/10 pt-12 lg:mt-20 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.label} delay={i * 100} direction="scale">
                <div>
                  <div className="font-serif text-5xl italic text-accent md:text-6xl">
                    {p.stat}
                  </div>
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background/60">
                    {p.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Center */}
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between">
            <ScrollReveal direction="blur">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                  Knowledge Center
                </span>
                <h2 className="mt-4 font-serif text-4xl italic md:text-5xl">
                  Voices of the Globe.
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="fade" delay={150}>
              <Link
                to="/knowledge"
                className="hidden font-mono text-[11px] uppercase tracking-widest text-accent underline-offset-4 hover:underline md:block"
              >
                View all →
              </Link>
            </ScrollReveal>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {stories.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 150} direction={i === 0 ? "left" : "right"}>
                <article className="group cursor-pointer overflow-hidden border border-border">
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      {s.kind}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl italic">{s.title}</h3>
                    <p className="mt-3 text-xs text-muted-foreground">{s.meta}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bookshelf */}
      <section className="overflow-hidden bg-foreground py-24 text-background lg:py-32">
        <div className="mb-12 flex items-end justify-between px-6">
          <ScrollReveal direction="up">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                The Bookshelf
              </span>
              <h2 className="mt-4 font-serif text-4xl italic md:text-5xl">
                The Knowledge Library.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={120}>
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              All Resources ₹0/-
            </p>
          </ScrollReveal>
        </div>
        <div className="no-scrollbar flex gap-6 overflow-x-auto px-6 pb-8">
          {books.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100} direction="up" className="flex-shrink-0">
              <div className="group w-[230px] sm:w-[250px]">
                <div className="overflow-hidden bg-secondary/10 transition-transform duration-500 group-hover:-translate-y-2">
                  <img
                    src={b.cover}
                    alt={b.title}
                    loading="lazy"
                    width={360}
                    height={540}
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <h4 className="font-serif text-base italic">{b.title}</h4>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest opacity-50">
                      {b.series}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-accent">₹0/-</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="grid border-y border-border lg:grid-cols-2">
        <ScrollReveal direction="left" className="flex flex-col justify-center border-r border-border bg-accent/5 p-12 lg:p-24">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Enquiry
          </span>
          <h2 className="mt-6 font-serif text-5xl italic leading-[1.05] md:text-6xl">
            Begin your departure.
          </h2>
          <p className="mt-8 max-w-sm text-muted-foreground">
            Map your future with us. Our consultants will respond within 24
            hours to chart your border-crossing journey.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={150} className="bg-background p-12 lg:p-24">
          <EnquiryForm />
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
