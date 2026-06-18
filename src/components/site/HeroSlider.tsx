import { useEffect, useState } from "react";
import heroWelcome from "@/assets/hero-welcome.jpg";
import heroCareer from "@/assets/hero-career.jpg";
import heroAbroad from "@/assets/hero-abroad.jpg";

const slides = [
  {
    image: heroWelcome,
    eyebrow: "Welcome to KAREER Studio",
    title: "Your Journey\nBeyond Borders.",
    body: "Partners in professional growth. Personalized, scientific consulting for global success.",
  },
  {
    image: heroCareer,
    eyebrow: "Career & Education Planning",
    title: "Map the future\nbefore it arrives.",
    body: "Research-backed methodologies that turn aspirations into a planned, purpose-driven trajectory.",
  },
  {
    image: heroAbroad,
    eyebrow: "Study Abroad",
    title: "An admit is just\nthe first stamp.",
    body: "Career-focused study abroad — from university shortlisting to visa, arrival, and beyond.",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
        >
          <img
            src={slide.image}
            alt={slide.eyebrow}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-24">
            <div className="max-w-3xl">
              <span
                key={`eyebrow-${index}`}
                className="mb-6 inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-cream/80 animate-reveal"
              >
                {slide.eyebrow}
              </span>
              <h1
                key={`title-${index}`}
                className="font-serif text-5xl italic leading-[0.95] text-cream md:text-7xl lg:text-8xl animate-reveal"
                style={{ whiteSpace: "pre-line" }}
              >
                {slide.title}
              </h1>
              <p
                key={`body-${index}`}
                className="mt-8 max-w-md text-cream/80 animate-reveal"
                style={{ animationDelay: "200ms" }}
              >
                {slide.body}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 right-8 z-10 flex gap-3 lg:right-24">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`grid size-12 place-items-center rounded-full border font-mono text-xs transition-all ${
              i === index
                ? "border-accent bg-accent text-accent-foreground"
                : "border-cream/30 text-cream/70 hover:bg-cream/10"
            }`}
          >
            0{i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}