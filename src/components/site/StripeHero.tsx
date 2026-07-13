import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

function boldKareerStudio(text: string, emphasisClass = "font-extrabold") {
  return text.split(/(KAREER Studio)/g).map((part, i) =>
    part === "KAREER Studio" ? (
      <strong key={i} className={emphasisClass}>
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export type StripeHeroNavLink = {
  key: string;
  label: string;
  to: string;
};

type StripeHeroProps = {
  image: string;
  imageAlt: string;
  imagePosition?: string;
  quoteEyebrow: string;
  quote: string;
  quoteDetail?: string;
  stripeHeading: string;
  stripeSubheading?: string;
  stripeTagline: string;
  navLinks: StripeHeroNavLink[];
  showAssessment?: boolean;
  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaTo?: string;
};

export function StripeHero({
  image,
  imageAlt,
  imagePosition = "object-[center_35%]",
  quoteEyebrow,
  quote,
  quoteDetail,
  stripeHeading,
  stripeSubheading = "Powered by ADMITra",
  stripeTagline,
  navLinks,
  showAssessment = true,
  ctaEyebrow = "Start Here",
  ctaTitle = "Assessment Center",
  ctaTo = "/assessments",
}: StripeHeroProps) {
  const isShortTagline = stripeTagline.length < 120;

  return (
    <section className="relative min-h-[600px] h-[88vh] overflow-x-hidden">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        className={`absolute inset-0 h-full w-full object-cover brightness-110 ${imagePosition}`}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-[10vh] z-10 pt-1 font-gilroy sm:bottom-[12vh] lg:bottom-[14vh]">
        <div className="px-6 pb-0 sm:px-10 lg:px-14 lg:pr-[15%]">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white animate-reveal sm:text-xs lg:text-sm">
            {boldKareerStudio(quoteEyebrow)}
          </p>
          <p
            className="mt-1.5 max-w-2xl text-base font-extrabold uppercase leading-snug tracking-wide text-white animate-reveal sm:text-lg lg:text-xl xl:text-2xl"
            style={{ animationDelay: "80ms" }}
          >
            {quote}
          </p>
          {quoteDetail && (
            <p
              className="mt-2 max-w-xl text-xs font-normal normal-case leading-relaxed tracking-normal text-white/85 animate-reveal sm:text-sm"
              style={{ animationDelay: "120ms" }}
            >
              {quoteDetail}
            </p>
          )}
        </div>

        <div className="relative">
          {showAssessment && (
            <div className="flex justify-end px-6 sm:px-10 lg:px-0 lg:pr-[15%]">
              <Link
                to={ctaTo}
                className="group flex w-full max-w-[300px] items-center justify-between gap-3 border-t-4 border-brand-blue bg-white px-5 py-2.5 transition-colors hover:bg-white/95 sm:px-6 sm:py-3"
              >
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-blue">
                    {ctaEyebrow}
                  </span>
                  <span className="mt-0.5 block text-[13px] font-bold leading-tight text-foreground group-hover:text-brand-blue sm:text-[14px]">
                    {ctaTitle}
                  </span>
                </div>
                <ArrowRight className="size-4 shrink-0 text-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand-blue" />
              </Link>
            </div>
          )}

          <div className="relative">
            <div
              className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-brand-blue/55 backdrop-blur-[2px]"
              aria-hidden
            />

            <div className="relative flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8 lg:pr-[15%]">
              <div
                className={
                  isShortTagline
                    ? "min-w-0 flex-1 px-6 py-3.5 sm:px-10 lg:px-14 lg:py-5"
                    : "min-w-0 flex-1 px-6 py-3 sm:px-10 lg:px-14 lg:py-4"
                }
              >
                <div className="w-fit max-w-full">
                  <h1 className="text-2xl font-bold leading-none tracking-tight text-white sm:text-3xl lg:text-[2rem]">
                    {boldKareerStudio(stripeHeading)}
                  </h1>
                  <p className="mt-1.5 text-right text-[11px] text-white/75 sm:text-xs">
                    {stripeSubheading}
                  </p>
                </div>
                <p
                  className={
                    isShortTagline
                      ? "mt-3 max-w-2xl text-sm font-medium italic leading-snug text-white/95 animate-reveal sm:text-base lg:mt-3.5 lg:text-lg"
                      : "mt-2.5 max-w-3xl text-xs font-normal leading-snug text-white/92 animate-reveal sm:text-sm lg:mt-3"
                  }
                  style={{ animationDelay: "120ms" }}
                >
                  {boldKareerStudio(stripeTagline)}
                </p>
              </div>

              <div
                className={
                  isShortTagline
                    ? "w-full shrink-0 px-6 pb-5 sm:px-6 lg:w-[min(100%,360px)] lg:px-5 lg:pb-5 lg:pt-5"
                    : "w-full shrink-0 px-6 pb-5 sm:px-6 lg:w-[min(100%,360px)] lg:px-5 lg:pb-4 lg:pt-4"
                }
              >
                <p className="text-sm font-semibold text-white sm:text-base">Go to</p>
                <nav aria-label="Quick navigation">
                  <ul className="mt-2 space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.key}>
                        <Link
                          to={link.to}
                          className="group flex items-start gap-2.5 text-xs font-bold uppercase leading-snug tracking-[0.06em] text-white sm:text-sm"
                        >
                          <ArrowRight className="mt-0.5 size-3.5 shrink-0 sm:size-4" />
                          <span className="min-w-0 break-words rounded-sm transition-colors duration-200 group-hover:bg-white/25 group-hover:px-1">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
