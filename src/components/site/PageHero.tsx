type PageHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  body?: string;
  imagePosition?: string;
};

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  body,
  imagePosition = "object-center",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[600px] lg:h-[88vh]">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        className={`h-full w-full object-cover ${imagePosition}`}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-24">
        <div className="max-w-3xl">
          <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-cream/80 animate-reveal sm:mb-6">
            {eyebrow}
          </span>
          <h1
            className="font-serif text-4xl italic leading-[0.95] text-cream sm:text-5xl md:text-7xl lg:text-8xl animate-reveal"
            style={{ whiteSpace: "pre-line" }}
          >
            {title}
          </h1>
          {body && (
            <p
              className="mt-8 max-w-md text-cream/80 animate-reveal"
              style={{ animationDelay: "200ms" }}
            >
              {body}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
