import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { CountUpStat } from "@/components/site/CountUpStat";
import whyChooseUs from "@/assets/why-choose-us.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAREER Studio - Powered by ADMITra | Study Abroad & Career Planning" },
      {
        name: "description",
        content:
          "KAREER Studio: Plan your education, shape your career, and build your global future through personalized education planning, study abroad consulting, psychometric assessments, and live coaching.",
      },
      { property: "og:title", content: "KAREER Studio - Powered by ADMITra" },
      {
        property: "og:description",
        content:
          "Personalized, scientific consulting in global education, study abroad and live coaching.",
      },
    ],
  }),
  component: Index,
});

const focusAreas = [
  "Career and education planning",
  "Career-focused study abroad consulting",
  "IVY League Admission Coaching & Consulting",
  "Coaching for language and scholastic proficiency",
  "Psychometric Assessment Center",
];

const whyChooseReasons = [
  {
    title: "Expert Advice",
    body: "Our team comprises experienced professionals with extensive global exposure, ready to offer personalized advice for your unique journey.",
  },
  {
    title: "Global Network",
    body: "Access a vast network of prestigious educational international institutions and esteemed service providers worldwide, creating pathways to success.",
  },
  {
    title: "Comprehensive Services",
    body: "We offer a suite of services covering education planning, application process in international universities, career strategizing, language & scholastic coaching, value added services and ongoing support.",
  },
  {
    title: "Personalized Approach",
    body: "Your ambitions are at the core of our focus. We personalize our strategies to align perfectly with your educational and career goals understanding your potential intelligence, acquired intelligence, interest areas and current academic achievements.",
  },
];

const pillars = [
  { value: 15, suffix: "+", label: "Years of Practice" },
  { value: 500, suffix: "+", label: "Global Admits" },
  { value: 8, suffix: "", label: "Scientific Assessments" },
  { value: 40, suffix: "+", label: "Partner Universities" },
];

function boldKareerStudio(
  text: string,
  emphasisClass = "font-bold text-foreground",
  additionalPhrases: string[] = [],
) {
  const phrases = ["KAREER Studio", ...additionalPhrases];
  const pattern = new RegExp(
    `(${phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );
  return text.split(pattern).map((part, i) =>
    phrases.includes(part) ? (
      <strong key={i} className={emphasisClass}>
        {part}
      </strong>
    ) : (
      part
    ),
  );
}


function Index() {
  return (
    <PageLayout>
      <HeroSlider />

      {/* Hero Subtext */}
      <section className="border-b border-border px-6 py-16 lg:py-20">
        <ScrollRevealGroup
          className="mx-auto max-w-4xl space-y-6 text-justify text-muted-foreground"
          stagger={120}
          direction="up"
          threshold={0.1}
        >
          <p className="text-base leading-relaxed lg:text-lg">
            {boldKareerStudio(
              "KAREER Studio is a student-focused education and career planning platform, built to help students identify their Academic & Career Potential, choose the right Academic Path, prepare for Global Employable Careers, and develop the skills required for a successful future.",
              "font-bold text-foreground",
            )}
          </p>
          <p className="text-base leading-relaxed lg:text-lg">
            We do not believe in one-size-fits-all counselling. Every student has a
            different potential, learning pattern, personality, ambition, family
            background, financial reality, and career possibility. Our role is to bring
            clarity to that complexity.
          </p>
        </ScrollRevealGroup>
      </section>

      {/* Who We Are — label + subtitle left, content right */}
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-accent md:text-base">
              Who We Are
            </h2>
            <p className="mt-4 font-serif text-3xl italic leading-snug text-foreground md:text-4xl lg:text-5xl">
              Your Education Partner for Assessing, Planning and Managing Academic
              Success
            </p>
          </ScrollReveal>

          <ScrollRevealGroup
            className="space-y-6 text-justify text-muted-foreground"
            stagger={120}
            direction="right"
            threshold={0.05}
          >
            <p>
              At {boldKareerStudio("KAREER Studio")}, we are more than career advisors. We
              are strategic education consulting partners for students and parents who want
              to make smart academic and career decisions.
            </p>
            <p className="font-bold text-foreground">
              We specialize in scientific and personalized guidance across five critical areas:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <p>
              Our approach is rooted in research-backed assessments, structured
              counselling, practical planning, and continuous student support. We help
              students understand their potential, explore suitable career pathways,
              select the right academic options, and prepare for opportunities that go
              beyond borders.
            </p>
            <p className="font-bold text-foreground">
              Because the truth is simple: a successful career is not created by
              choosing a popular course. It is created by making planned, informed, and
              purpose-driven decisions at the right time.
            </p>
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Why KAREER Studio — content left, heading right */}
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollRevealGroup
              className="order-2 space-y-4 text-justify text-muted-foreground lg:order-1"
              stagger={120}
              direction="left"
              threshold={0.08}
            >
              <p>
                Marks are important, but they are not enough. Today&apos;s students need
                clarity, direction, skill-readiness, global exposure, and the ability
                to make decisions that match future career realities.
              </p>
              <p>
                Many students choose streams, degrees, colleges, or countries without
                understanding the long-term impact of those emotional decisions. This
                often leads to confusion, course mismatch, financial stress, weak
                employability, and career dissatisfaction.
              </p>
              <p>
                {boldKareerStudio(
                  "KAREER Studio helps students avoid these mistakes through a structured and scientific planning process.",
                )}
              </p>
            </ScrollRevealGroup>

            <ScrollReveal direction="right" className="order-1 lg:order-2 lg:text-right">
              <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-accent md:text-base">
                Why KAREER Studio?
              </h2>
              <p className="mt-4 font-serif text-3xl italic leading-snug text-foreground md:text-4xl lg:ml-auto lg:max-w-lg lg:text-5xl">
                Because Career Success Needs More Than Marks
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us — heading top, image left, content right */}
      <section className="border-b border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" className="mb-16 max-w-2xl">
            <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-accent md:text-base">
              Why Choose Us
            </h2>
            <p className="mt-4 font-serif text-3xl italic leading-snug text-foreground md:text-4xl lg:text-5xl">
              Trusted Guidance for Your Global Journey
            </p>
          </ScrollReveal>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal direction="left">
              <div className="overflow-hidden border border-border">
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

            <ScrollRevealGroup
              className="space-y-6"
              stagger={100}
              direction="right"
              threshold={0.08}
            >
              {whyChooseReasons.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                    <Check className="size-3.5 text-accent" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-justify text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollRevealGroup>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 lg:mt-20 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.label} delay={i * 100} direction="scale">
                <div>
                  <CountUpStat value={p.value} suffix={p.suffix} delay={i * 100} />
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
