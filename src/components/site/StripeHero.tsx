import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { linkPropsForRoute } from "@/lib/standalone-routes";
import { MobileHeroGoToNav } from "@/components/site/MobileHeroGoToNav";

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

function formatHeroQuote(text: string) {
  return text.replace(/^[\s'‘’"`]+|[\s'‘’"`]+$/g, "");
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
  /** Shorter tagline shown on mobile when the main tagline is too long */
  stripeTaglineMobile?: string;
  navLinks: StripeHeroNavLink[];
  showAssessment?: boolean;
  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaTo?: string;
  /** Extra image transform classes (e.g. scale / translate for focal point) */
  imageClassName?: string;
  /** Override bottom offset for the overlay block (desktop) */
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
  stripeSubheading,
  stripeTagline,
  stripeTaglineMobile,
  navLinks,
  showAssessment = true,
  ctaEyebrow = "Start Here",
  ctaTitle = "Assessment Center",
  ctaTo = "/assessments",
  imageClassName = "",
  contentBottomClass,
}: StripeHeroProps) {
  const displayQuote = formatHeroQuote(quote);
  const ctaLinkProps = linkPropsForRoute(ctaTo);
  const isShortTagline = stripeTagline.length < 120;
  const mobileTagline = stripeTaglineMobile ?? stripeTagline;
  const showFullTaglineOnMobile = isShortTagline && !stripeTaglineMobile;

  const imageClass = cn(
    "h-full w-full object-cover brightness-110",
    imagePosition,
    imageClassName,
  );

  const bottomGradientClass =
    "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent";

  const leftGradientClass =
    "pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 via-[38%] to-transparent to-[78%]";

  const quoteEyebrowClass =
    "font-bold uppercase tracking-[0.22em] text-white animate-reveal text-[10px] sm:text-[11px] lg:text-xs";

  const quoteClass =
    "mt-1 max-w-2xl whitespace-pre-line font-extrabold uppercase leading-snug tracking-wide text-white animate-reveal text-xs sm:text-base lg:text-lg";

  return (
    <section className="relative overflow-x-hidden lg:min-h-[600px] lg:h-[88vh]">
      {/* Mobile: dedicated image band so the photo stays visible */}
      <div className="relative h-[38vh] min-h-[210px] max-h-[300px] shrink-0 sm:h-[42vh] sm:max-h-[340px] lg:hidden">
        <img
          src={image}
          alt={imageAlt}
          width={1920}
          height={1080}
          className={imageClass}
          loading="eager"
        />
        <div className={bottomGradientClass} />
        <div className={leftGradientClass} />
        <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-10 font-gilroy sm:px-6">
          <p className={quoteEyebrowClass}>{boldKareerStudio(quoteEyebrow)}</p>
          <p className={quoteClass} style={{ animationDelay: "80ms" }}>
            {displayQuote}
          </p>
          {quoteDetail && (
            <p className="mt-2 line-clamp-3 text-xs font-medium leading-relaxed text-white/95 sm:text-sm">
              {quoteDetail}
            </p>
          )}
        </div>
      </div>

      {/* Desktop: full-bleed background image */}
      <div className="absolute inset-0 hidden lg:block">
        <img
          src={image}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className={imageClass}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
        <div className={leftGradientClass} />
      </div>

      {/* Content: stacks below image on mobile, overlays on desktop */}
      <div
        className={cn(
          "relative z-10 font-gilroy lg:absolute lg:inset-x-0",
          contentBottomClass ?? "lg:bottom-[14vh]",
        )}
      >
        {/* Desktop-only quote (sits over the image) */}
        <div className="hidden px-6 pb-0 sm:px-10 lg:block lg:px-14 lg:pr-[15%]">
          <p className={quoteEyebrowClass}>{boldKareerStudio(quoteEyebrow)}</p>
          <p className={cn(quoteClass, "mt-1.5")} style={{ animationDelay: "80ms" }}>
            {displayQuote}
          </p>
          {quoteDetail && (
            <p
              className="mt-2.5 max-w-2xl animate-reveal text-sm font-medium normal-case leading-relaxed tracking-normal text-white/95 sm:text-base"
              style={{ animationDelay: "120ms" }}
            >
              {quoteDetail}
            </p>
          )}
        </div>

        <div className="relative">
          {/* Desktop CTA — floating card above the blue stripe */}
          {showAssessment && (
            <div className="hidden justify-end lg:flex lg:px-0 lg:pr-[15%]">
              <Link
                to={ctaTo}
                {...ctaLinkProps}
                className="group relative z-10 flex w-full max-w-[300px] items-center justify-between gap-3 border-t-4 border-brand-blue bg-white px-6 py-3 transition-colors hover:bg-white/95"
              >
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-blue">
                    {ctaEyebrow}
                  </span>
                  <span className="mt-0.5 block text-[14px] font-bold leading-tight text-foreground group-hover:text-brand-blue">
                    {ctaTitle}
                  </span>
                </div>
                <ArrowRight className="size-4 shrink-0 text-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand-blue" />
              </Link>
            </div>
          )}

          <div className="relative">
            {/* Mobile: solid blue bar. Desktop: translucent stripe over image */}
            <div
              className="pointer-events-none absolute inset-x-0 inset-y-0 bg-brand-blue lg:bg-brand-blue/55 lg:backdrop-blur-[2px]"
              aria-hidden
            />

            <div className="relative flex flex-col gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:flex-row lg:items-start lg:gap-8 lg:px-0 lg:py-0 lg:pr-[15%]">
              {/* Heading + tagline */}
              <div className="min-w-0 flex-1 lg:px-14 lg:py-4">
                {/* Company name — desktop only (shown in hero image area on mobile) */}
                <div className="hidden w-fit max-w-full lg:block">
                  <h1 className="text-lg font-bold leading-none tracking-tight text-white sm:text-2xl lg:text-[1.75rem]">
                    {boldKareerStudio(stripeHeading)}
                  </h1>
                  {stripeSubheading ? (
                    <p className="mt-0.5 text-right text-[9px] text-white/75 sm:text-[11px]">
                      {stripeSubheading}
                    </p>
                  ) : null}
                </div>

                {/* Mobile: tagline only — larger text */}
                <p
                  className={cn(
                    "text-white lg:hidden",
                    showFullTaglineOnMobile
                      ? "text-sm font-medium italic leading-relaxed sm:text-base"
                      : "text-sm font-medium leading-relaxed sm:text-base",
                  )}
                >
                  {boldKareerStudio(mobileTagline)}
                </p>

                {/* Mobile CTA */}
                {showAssessment && (
                  <Link
                    to={ctaTo}
                    {...ctaLinkProps}
                    className="group mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3.5 transition-colors hover:bg-white/95 lg:hidden"
                  >
                    <span className="text-base font-bold text-foreground group-hover:text-brand-blue">
                      {ctaTitle}
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-brand-blue transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}

                {/* Desktop: full tagline */}
                <p
                  className="mt-3 hidden max-w-3xl animate-reveal text-xs font-medium italic leading-snug text-white/95 sm:text-sm lg:block"
                  style={{ animationDelay: "120ms" }}
                >
                  {boldKareerStudio(stripeTagline)}
                </p>
              </div>

              {/* Go to navigation — desktop only (mobile uses fixed bottom bar) */}
              <div className="hidden w-full shrink-0 lg:block lg:w-[min(100%,360px)] lg:px-5 lg:pb-4 lg:pt-4">
                <p className="text-base font-bold text-white">Go to</p>
                <nav aria-label="Quick navigation" className="mt-2">
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.key}>
                        <Link
                          to={link.to}
                          className="group flex items-start gap-2.5 text-sm font-bold uppercase leading-snug tracking-[0.06em] text-white"
                        >
                          <ArrowRight className="mt-0.5 size-4 shrink-0" />
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

      <MobileHeroGoToNav navLinks={navLinks} />
    </section>
  );
}
