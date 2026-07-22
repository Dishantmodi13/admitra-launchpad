import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { CoachingBenefit, CoachingProgram } from "@/data/coaching-programs";
import {
  getBenefitIconStyle,
  getProgramLinkStyle,
} from "@/data/coaching-icon-styles";
import { CoachingArchBanner } from "@/components/site/CoachingArchBanner";
import { ScholasticHero } from "@/components/site/ScholasticHero";
import { IeltsHero } from "@/components/site/IeltsHero";
import { GreHero } from "@/components/site/GreHero";
import { SatHero } from "@/components/site/SatHero";
import { PteHero } from "@/components/site/PteHero";
import { PageLayout } from "@/components/site/PageLayout";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  sectionLabelClass,
  sectionPadding,
  sectionSubtitleClass,
  cardTitleClass,
} from "@/lib/section-styles";

const pageTitleClass =
  "font-serif text-3xl font-bold italic leading-snug text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]";

const cardHoverClass =
  "group relative transform-gpu rounded-xl border border-border bg-background transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.03] hover:border-accent/50 hover:shadow-xl hover:shadow-foreground/10 hover:z-10";

const coachingSectionClass = "px-4 py-6 sm:px-6 lg:py-16";
const bulletListClass = "space-y-3";
const bulletItemClass = "flex gap-3 text-sm leading-relaxed text-muted-foreground";

function CoachingBulletList({
  items,
  className,
  itemClassName,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={cn(bulletListClass, className)}>
      {items.map((item) => (
        <li key={item} className={cn(bulletItemClass, itemClassName)}>
          <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MaskedIcon({
  src,
  iconClass,
  className,
}: {
  src: string;
  iconClass: string;
  className?: string;
}) {
  return (
    <div
      className={cn(iconClass, className)}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
      aria-hidden
    />
  );
}

function BenefitCard({
  benefit,
  index,
  delay,
  className,
  wrapperClassName,
}: {
  benefit: CoachingBenefit;
  index: number;
  delay: number;
  className?: string;
  wrapperClassName?: string;
}) {
  const iconStyle = getBenefitIconStyle(benefit.image);

  return (
    <ScrollReveal
      delay={delay}
      direction="up"
      threshold={0.06}
      className={cn("h-full", wrapperClassName)}
    >
      <div className={cn(cardHoverClass, "flex h-full flex-col p-4 lg:p-6", className)}>
        <span className="font-mono text-3xl font-extrabold leading-none text-accent/80 sm:text-4xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div
          className={cn(
            "mt-4 flex h-14 w-14 items-center justify-center rounded-xl",
            iconStyle.surface,
          )}
        >
          <MaskedIcon
            src={benefit.image}
            iconClass={iconStyle.icon}
            className="h-9 w-9 transition-transform duration-300 ease-out group-hover:scale-110"
          />
        </div>
        <h3 className={`${cardTitleClass} mt-4`}>{benefit.title}</h3>
        <CoachingBulletList items={benefit.points} className="mt-3" />
      </div>
    </ScrollReveal>
  );
}

function BenefitsGrid({ benefits }: { benefits: NonNullable<CoachingProgram["benefits"]> }) {
  if (benefits.length === 5) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5 [perspective:1200px]">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={benefit.title}
            benefit={benefit}
            index={index}
            delay={index * 90}
            wrapperClassName={cn("lg:col-span-2", index === 3 && "lg:col-start-2")}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 [perspective:1200px]">
      {benefits.map((benefit, index) => (
        <BenefitCard key={benefit.title} benefit={benefit} index={index} delay={index * 90} />
      ))}
    </div>
  );
}

function IntroSection({
  program,
  hideHeader = false,
}: {
  program: CoachingProgram;
  hideHeader?: boolean;
}) {
  if (hideHeader && !program.introImage) return null;

  return (
    <section className={`border-b border-border ${coachingSectionClass} lg:pb-14 lg:pt-14`}>
      <div className="mx-auto max-w-7xl">
        {!hideHeader && (
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-x-12 lg:gap-y-10">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <h1 className={pageTitleClass}>{program.pageTitle}</h1>
              {program.sectionTitle !== program.pageTitle && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                  {program.sectionTitle}
                </p>
              )}
            </ScrollReveal>

            <ScrollReveal direction="up" threshold={0.08} className="lg:col-span-7">
              <CoachingBulletList
                items={program.intro}
                itemClassName="text-base lg:text-lg"
              />
            </ScrollReveal>
          </div>
        )}

        {program.introImage && (
          <ScrollReveal direction="up" className={hideHeader ? undefined : "mt-5 lg:mt-20"}>
            <div className="mx-auto w-full max-w-[1024px] bg-content-surface">
              <img
                src={program.introImage}
                alt={program.pageTitle}
                width={1024}
                height={398}
                decoding="async"
                className="h-auto w-full object-contain mix-blend-darken"
              />
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

function ProgramsSection({
  program,
  sectionId,
}: {
  program: CoachingProgram;
  sectionId?: string;
}) {
  if (!program.programLinks?.length) return null;

  return (
    <section
      id={sectionId}
      className={`border-b border-border ${coachingSectionClass}`}
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="blur" className="mb-5 lg:mb-8">
          <h2 className={sectionLabelClass}>Programs</h2>
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 [perspective:1200px]">
          {program.programLinks.map((item, index) => {
            const linkStyle = getProgramLinkStyle(item.slug);
            const backgroundImage = item.backgroundImage;
            const hasPhotoBackground = Boolean(backgroundImage);

            return (
            <ScrollReveal key={item.slug} delay={index * 80} direction="up">
              <Link
                to="/coaching/$slug"
                params={{ slug: item.slug }}
                className={cn(
                  cardHoverClass,
                  "relative isolate flex h-full min-h-[14rem] flex-col overflow-hidden border-0 px-5 py-6 lg:min-h-[18rem] lg:px-6 lg:py-8",
                  hasPhotoBackground && "bg-foreground text-white shadow-lg hover:shadow-xl",
                )}
              >
                {backgroundImage && (
                  <img
                    src={backgroundImage}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    decoding="async"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                )}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0",
                    linkStyle?.cardGradient ?? "bg-gradient-to-t from-black/80 via-black/40 to-black/10",
                  )}
                  aria-hidden
                />

                <div className="relative z-10 flex h-full flex-col">
                <span
                  className={cn(
                    "font-mono text-3xl font-extrabold leading-none sm:text-4xl",
                    hasPhotoBackground ? "text-white/90" : "text-accent/80",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.image && (
                  <div
                    className={cn(
                      "mx-auto w-fit rounded-xl px-3 py-2 shadow-sm",
                      linkStyle?.surface ?? "bg-background/80",
                    )}
                  >
                    <img
                      src={item.image}
                      alt={item.label}
                      className="h-12 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-110 lg:h-14"
                    />
                  </div>
                )}
                <span
                  className={cn(
                    "mt-4 text-center font-serif text-2xl italic md:text-3xl",
                    hasPhotoBackground
                      ? "text-white group-hover:text-white"
                      : "transition-colors group-hover:text-accent",
                  )}
                >
                  {item.label}
                </span>
                {item.points?.length ? (
                  <CoachingBulletList
                    items={item.points}
                    className="mt-5 text-left"
                    itemClassName={hasPhotoBackground ? "text-white/90" : undefined}
                  />
                ) : null}
                <span
                  className={cn(
                    "mt-auto mx-auto w-fit rounded-sm px-3 py-2 pt-5 text-sm font-semibold underline decoration-2 underline-offset-[6px] transition-colors active:opacity-75",
                    hasPhotoBackground
                      ? "text-white decoration-white/90 group-hover:text-white group-hover:decoration-white"
                      : "text-accent decoration-accent/70 group-hover:decoration-accent",
                  )}
                >
                  Click
                </span>
                </div>
              </Link>
            </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection({
  program,
  sectionId,
}: {
  program: CoachingProgram;
  sectionId?: string;
}) {
  if (!program.benefits?.length) return null;

  return (
    <section
      id={sectionId}
      className={`border-b border-border ${coachingSectionClass}`}
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="blur" className="mb-5 max-w-2xl lg:mb-8">
          <h2 className={sectionLabelClass}>{program.benefitsHeading ?? "Benefits"}</h2>
        </ScrollReveal>
        <BenefitsGrid benefits={program.benefits} />
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={coachingSectionClass}>
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal direction="blur">
          <h3 className={sectionSubtitleClass}>Unlock your potential</h3>
          <p className="mt-4 text-muted-foreground lg:mt-6">
            A complimentary session offers valuable insights and a chance to connect with
            industry experts!
          </p>
          <Link
            to="/enquiry"
            className="group mt-8 inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-[11px] uppercase tracking-widest text-background transition-colors hover:bg-accent"
          >
            Book Appointment
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function CoachingProgramPage({ program }: { program: CoachingProgram }) {
  const hasCustomHero = [
    "scholastic-language",
    "ielts",
    "gre",
    "sat",
    "pte",
  ].includes(program.slug);

  const benefitsSectionId =
    program.slug === "scholastic-language"
      ? "scholastic-benefits"
      : program.slug === "ielts"
      ? "ielts-benefits"
      : program.slug === "gre"
        ? "gre-benefits"
        : program.slug === "sat"
          ? "sat-benefits"
          : program.slug === "pte"
            ? "pte-benefits"
            : undefined;

  function renderHero() {
    switch (program.slug) {
      case "scholastic-language":
        return <ScholasticHero />;
      case "ielts":
        return <IeltsHero />;
      case "gre":
        return <GreHero />;
      case "sat":
        return <SatHero />;
      case "pte":
        return <PteHero />;
      default:
        return <CoachingArchBanner slug={program.slug} />;
    }
  }

  return (
    <PageLayout>
      {renderHero()}
      <IntroSection program={program} hideHeader={hasCustomHero} />
      <ProgramsSection
        program={program}
        sectionId={program.slug === "scholastic-language" ? "scholastic-programs" : undefined}
      />
      <BenefitsSection program={program} sectionId={benefitsSectionId} />
      <CtaSection />
    </PageLayout>
  );
}
