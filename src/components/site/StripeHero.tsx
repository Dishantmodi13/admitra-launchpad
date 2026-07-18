import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  /** Tighter blue stripe - more hero image visible */
  compactStripe?: boolean;
  /** Extra image transform classes (e.g. scale / translate for focal point) */
  imageClassName?: string;
  /** Override bottom offset for the overlay block */
  contentBottomClass?: string;
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
  compactStripe = false,
  imageClassName = "",
  contentBottomClass,
}: StripeHeroProps) {
  const isShortTagline = stripeTagline.length < 120;

  return (
    <section className="relative min-h-[600px] h-[88vh] overflow-x-hidden">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        className={cn(
          "absolute inset-0 h-full w-full object-cover brightness-110",
          imagePosition,
          imageClassName,
        )}
        loading="eager"
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t to-transparent",
          compactStripe ? "from-black/35 via-black/5" : "from-black/50 via-black/10",
        )}
      />

      <div
        className={cn(
          "absolute inset-x-0 z-10 pt-1 font-gilroy",
          contentBottomClass ??
            (compactStripe
              ? "bottom-[14vh] sm:bottom-[16vh] lg:bottom-[18vh]"
              : "bottom-[10vh] sm:bottom-[12vh] lg:bottom-[14vh]"),
        )}
      >
        <div className="px-6 pb-0 sm:px-10 lg:px-14 lg:pr-[15%]">
          <p
            className={cn(
              "font-bold uppercase tracking-[0.22em] text-white animate-reveal",
              compactStripe
                ? "text-[10px] sm:text-[11px] lg:text-xs"
                : "text-[11px] sm:text-xs lg:text-sm",
            )}
          >
            {boldKareerStudio(quoteEyebrow)}
          </p>
          <p
            className={cn(
              "mt-1.5 max-w-2xl font-extrabold uppercase leading-snug tracking-wide text-white animate-reveal",
              compactStripe
                ? "text-sm sm:text-base lg:text-lg"
                : "text-base sm:text-lg lg:text-xl xl:text-2xl",
            )}
            style={{ animationDelay: "80ms" }}
          >
            {quote}
          </p>
          {quoteDetail && (
            <p
              className={cn(
                "mt-2 max-w-xl font-normal normal-case leading-relaxed tracking-normal text-white/85 animate-reveal",
                compactStripe ? "text-[11px] sm:text-xs" : "text-xs sm:text-sm",
              )}
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
                  compactStripe
                    ? "min-w-0 flex-1 px-6 py-2 sm:px-10 lg:px-14 lg:py-2.5"
                    : isShortTagline
                      ? "min-w-0 flex-1 px-6 py-3.5 sm:px-10 lg:px-14 lg:py-5"
                      : "min-w-0 flex-1 px-6 py-3 sm:px-10 lg:px-14 lg:py-4"
                }
              >
                <div className="w-fit max-w-full">
                  <h1
                    className={cn(
                      "font-bold leading-none tracking-tight text-white",
                      compactStripe
                        ? "text-xl sm:text-2xl lg:text-[1.75rem]"
                        : "text-2xl sm:text-3xl lg:text-[2rem]",
                    )}
                  >
                    {boldKareerStudio(stripeHeading)}
                  </h1>
                  <p className="mt-1 text-right text-[10px] text-white/75 sm:text-[11px]">
                    {stripeSubheading}
                  </p>
                </div>
                <p
                  className={cn(
                    "max-w-2xl animate-reveal text-white/95",
                    compactStripe
                      ? "mt-2 text-xs font-medium italic leading-snug sm:text-sm"
                      : isShortTagline
                        ? "mt-3 text-sm font-medium italic leading-snug sm:text-base lg:mt-3.5 lg:text-lg"
                        : "mt-2.5 max-w-3xl text-xs font-normal leading-snug text-white/92 sm:text-sm lg:mt-3",
                  )}
                  style={{ animationDelay: "120ms" }}
                >
                  {boldKareerStudio(stripeTagline)}
                </p>
              </div>

              <div
                className={
                  compactStripe
                    ? "w-full shrink-0 px-6 pb-3 sm:px-6 lg:w-[min(100%,320px)] lg:px-4 lg:pb-3 lg:pt-2"
                    : isShortTagline
                      ? "w-full shrink-0 px-6 pb-5 sm:px-6 lg:w-[min(100%,360px)] lg:px-5 lg:pb-5 lg:pt-5"
                      : "w-full shrink-0 px-6 pb-5 sm:px-6 lg:w-[min(100%,360px)] lg:px-5 lg:pb-4 lg:pt-4"
                }
              >
                <p
                  className={cn(
                    "font-semibold text-white",
                    compactStripe ? "text-xs sm:text-sm" : "text-sm sm:text-base",
                  )}
                >
                  Go to
                </p>
                <nav aria-label="Quick navigation">
                  <ul className={cn(compactStripe ? "mt-1 space-y-1" : "mt-2 space-y-2")}>
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
