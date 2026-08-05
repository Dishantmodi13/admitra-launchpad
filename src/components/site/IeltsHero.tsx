import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { newTabLinkProps } from "@/lib/standalone-routes";
import { MobileHeroGoToNav } from "@/components/site/MobileHeroGoToNav";
import { coachingProgramNavLinks } from "@/data/primary-nav";
import {
  useSectionScrollOffset,
  useSmoothScroll,
} from "@/components/site/SmoothScrollProvider";

const HERO_IMAGE = "/coaching/ielts-hero.jpg";

const trustBadges = [
  "95% Student Success",
  "Certified Trainers",
  "Mock Tests",
  "Personalized Feedback",
] as const;

type GlassCard = {
  id: string;
  title: string;
  lines: string[];
  position: string;
  delay: string;
  duration: string;
  accent?: boolean;
};

const floatingCards: GlassCard[] = [
  {
    id: "band",
    title: "Overall Band Goal",
    lines: ["7.5+"],
    position: "top-[6%] left-[-5%] sm:left-[-2%]",
    delay: "0s",
    duration: "7s",
    accent: true,
  },
  {
    id: "skills",
    title: "Four Skills",
    lines: ["Listening", "Reading", "Writing", "Speaking"],
    position: "top-[28%] right-[-7%] sm:right-[-3%]",
    delay: "1.1s",
    duration: "8s",
  },
  {
    id: "students",
    title: "Students Mentored",
    lines: ["8,500+"],
    position: "bottom-[34%] left-[-1%] sm:left-[3%]",
    delay: "0.5s",
    duration: "7.5s",
    accent: true,
  },
  {
    id: "community",
    title: "Global Community",
    lines: ["Students from 12+ Countries"],
    position: "bottom-[8%] right-[2%] sm:right-[6%]",
    delay: "1.7s",
    duration: "6.8s",
  },
];

function AirportArchitecture() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 opacity-[0.035] sm:h-40"
      viewBox="0 0 1200 160"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 160V80L120 40L240 80V160M240 160V60L360 20L480 60V160M480 160V70L600 30L720 70V160M720 160V55L840 15L960 55V160M960 160V75L1080 35L1200 75V160"
        stroke="#0F172A"
        strokeWidth="1"
      />
      <path d="M0 80H1200" stroke="#0F172A" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

function WorldMapOutline() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
      viewBox="0 0 1200 600"
      fill="none"
      aria-hidden
    >
      <ellipse cx="600" cy="280" rx="500" ry="220" stroke="#1e40af" strokeWidth="1" />
      <path
        d="M200 260c50-55 130-80 210-65 55 10 100 45 155 40 75-7 140-50 215-38 85 16 150 65 230 58"
        stroke="#1e40af"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="380" cy="220" r="2.5" fill="#1e40af" opacity="0.45" />
      <circle cx="620" cy="200" r="2" fill="#1e40af" opacity="0.35" />
      <circle cx="850" cy="250" r="2.5" fill="#1e40af" opacity="0.45" />
    </svg>
  );
}

function FloatingGlassCard({
  card,
  scrollOffset,
}: {
  card: GlassCard;
  scrollOffset: number;
}) {
  return (
    <div
      className={cn(
        "scholastic-glass-card absolute z-20 hidden rounded-2xl border border-white/45 bg-white/60 px-3.5 py-3 shadow-[0_8px_32px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:block sm:px-4 sm:py-3.5",
        card.position,
        card.id === "band" && "min-w-[8.5rem]",
        card.id === "skills" && "min-w-[9.5rem]",
        card.id === "students" && "min-w-[10rem]",
        card.id === "community" && "min-w-[11rem]",
      )}
      style={{
        animationDelay: card.delay,
        animationDuration: card.duration,
        transform: `translateY(${scrollOffset * 0.1}px)`,
      }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-[11px]">
        {card.title}
      </p>
      <div className="mt-1.5 space-y-0.5">
        {card.lines.map((line) => (
          <p
            key={line}
            className={cn(
              "leading-snug text-[#0F172A]",
              card.accent &&
                (line === "7.5+" || line === "8,500+")
                ? "text-lg font-bold tracking-tight text-[#1e40af] sm:text-xl"
                : "text-[11px] font-medium sm:text-xs",
            )}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function HeadlineLine({
  children,
  highlight,
  delay,
  visible,
}: {
  children: ReactNode;
  highlight?: "blue" | "sky";
  delay: number;
  visible: boolean;
}) {
  return (
    <span
      className={cn(
        "block overflow-hidden",
        visible ? "scholastic-text-reveal" : "opacity-0",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span
        className={cn(
          "block text-[2.1rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#0F172A] sm:text-[2.65rem] lg:text-[3.1rem]",
          highlight === "blue" &&
            "bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] bg-clip-text text-transparent",
          highlight === "sky" &&
            "bg-gradient-to-r from-[#1d4ed8] via-[#3038CF] to-[#0ea5e9] bg-clip-text text-transparent",
        )}
      >
        {children}
      </span>
    </span>
  );
}

export function IeltsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollOffset = useSectionScrollOffset(sectionRef);
  const { scrollToSection } = useSmoothScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const timer = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const scrollToBenefits = () => {
    scrollToSection("ielts-benefits");
  };

  return (
    <section
      ref={sectionRef}
      aria-label="IELTS Coaching"
      className="relative overflow-hidden border-b border-slate-200/60 bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 5% 15%, rgba(37,99,235,0.07) 0%, transparent 50%), radial-gradient(ellipse 60% 45% at 95% 85%, rgba(14,165,233,0.06) 0%, transparent 45%), radial-gradient(ellipse 40% 30% at 80% 10%, rgba(249,115,22,0.03) 0%, transparent 40%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        }}
      />

      <WorldMapOutline />
      <AirportArchitecture />

      <div
        className="pointer-events-none absolute -right-20 top-16 size-80 rounded-full bg-sky-400/[0.05] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-12 bottom-24 size-64 rounded-full bg-[#1e40af]/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-14 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-5">
            <p
              className={cn(
                "font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb] sm:text-sm sm:tracking-[0.24em]",
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "80ms" }}
            >
              IELTS Coaching
            </p>

            <h1 className="mt-5">
              <HeadlineLine visible={visible} delay={140}>
                Your{" "}
                <span className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] bg-clip-text text-transparent">
                  Study Abroad
                </span>{" "}
                Journey
              </HeadlineLine>
              <HeadlineLine visible={visible} delay={280} highlight="sky">
                Starts With IELTS.
              </HeadlineLine>
            </h1>

            <p
              className={cn(
                "mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-[1.05rem]",
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "420ms" }}
            >
              IELTS is your passport to studying abroad. Live, expert-led coaching
              that builds the band score universities trust - and the confidence to
              step onto an international campus.
            </p>

            <div
              className={cn(
                "mt-8 flex flex-wrap items-center gap-3 sm:gap-4",
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "540ms" }}
            >
              <Link
                to="/enquiry"
                {...newTabLinkProps}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#0F172A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e293b] hover:shadow-[0_8px_32px_rgba(15,23,42,0.22)]"
              >
                Book Free Demo Class
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <button
                type="button"
                onClick={scrollToBenefits}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#0F172A] backdrop-blur-sm transition-all duration-300 hover:border-[#2563eb]/35 hover:bg-white hover:shadow-md"
              >
                Check Benefits
              </button>
            </div>

            <div
              className={cn(
                "mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-200/80 pt-4 sm:mt-10 sm:gap-x-5 sm:gap-y-3 sm:pt-8",
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "660ms" }}
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 sm:text-sm"
                >
                  <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-sky-500/10">
                    <Check className="size-2.5 text-sky-600" strokeWidth={3} />
                  </span>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "relative lg:col-span-7",
              visible ? "scholastic-fade-in" : "opacity-0",
            )}
            style={{ animationDelay: "300ms" }}
          >
            <div
              className="relative mx-auto aspect-[16/10] max-w-2xl overflow-hidden rounded-[1.75rem] shadow-[0_28px_90px_rgba(15,23,42,0.14)] ring-1 ring-slate-900/5 sm:aspect-[16/9] lg:mx-0 lg:ml-auto lg:max-w-none"
              style={{ transform: `translateY(${scrollOffset * -0.06}px)` }}
            >
              <img
                src={HERO_IMAGE}
                alt="Diverse international students collaborating and preparing for IELTS in a modern learning space"
                width={1600}
                height={900}
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 via-transparent to-sky-900/10"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5"
                aria-hidden
              />
            </div>

            {floatingCards.map((card) => (
              <FloatingGlassCard key={card.id} card={card} scrollOffset={scrollOffset} />
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
              {floatingCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-xl border border-white/50 bg-white/75 px-3 py-2.5 shadow-sm backdrop-blur-md"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    {card.title}
                  </p>
                  {card.lines.map((line) => (
                    <p
                      key={line}
                      className={cn(
                        "text-[11px] text-[#0F172A]",
                        card.accent &&
                          (line === "7.5+" || line === "8,500+") &&
                          "text-base font-bold text-[#1e40af]",
                      )}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToBenefits}
          className="scholastic-scroll-indicator absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors hover:text-[#2563eb] lg:flex"
          aria-label="Scroll to benefits"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.28em]">Scroll</span>
          <ArrowDown className="size-4" />
        </button>
      </div>

      <MobileHeroGoToNav navLinks={coachingProgramNavLinks()} />
    </section>
  );
}
