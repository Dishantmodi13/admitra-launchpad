import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileHeroGoToNav } from "@/components/site/MobileHeroGoToNav";
import { coachingProgramNavLinks } from "@/data/primary-nav";
import {
  useSectionScrollOffset,
  useSmoothScroll,
} from "@/components/site/SmoothScrollProvider";

const HERO_IMAGE = "/coaching/scholastic-hero.jpg";

const floatingCards = [
  {
    title: "Academic Excellence",
    subtitle: "Critical Thinking",
    position: "top-[8%] left-[-4%] sm:left-[-2%]",
    delay: "0s",
    duration: "7s",
  },
  {
    title: "Communication Skills",
    subtitle: "Public Speaking",
    position: "top-[32%] right-[-6%] sm:right-[-3%]",
    delay: "1.2s",
    duration: "8s",
  },
  {
    title: "Language Development",
    subtitle: "English Fluency",
    position: "bottom-[38%] left-[-2%] sm:left-[2%]",
    delay: "0.6s",
    duration: "7.5s",
  },
  {
    title: "Career Readiness",
    subtitle: "Interview Skills",
    position: "bottom-[12%] right-[4%] sm:right-[8%]",
    delay: "1.8s",
    duration: "6.5s",
  },
  {
    title: "Global Mindset",
    subtitle: "International Learning",
    position: "top-[58%] left-[18%] sm:left-[22%]",
    delay: "2.4s",
    duration: "8.5s",
  },
] as const;

const trustStats = [
  { value: "15+", label: "Years of Experience" },
  { value: "8,500+", label: "Students Mentored" },
  { value: "94%", label: "Success Rate" },
] as const;

function WorldMapOutline() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
      viewBox="0 0 1200 600"
      fill="none"
      aria-hidden
    >
      <ellipse cx="600" cy="300" rx="520" ry="240" stroke="#0F172A" strokeWidth="1" />
      <path
        d="M180 280c40-60 120-90 200-70 50 12 90 50 140 45 70-8 130-55 200-40 80 18 140 70 220 65 60-4 110-35 160-55"
        stroke="#0F172A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M220 360c60 30 140 20 220 35 90 18 170 60 260 45 70-12 130-50 200-35"
        stroke="#0F172A"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="340" cy="240" r="3" fill="#0F172A" opacity="0.5" />
      <circle cx="580" cy="210" r="2.5" fill="#0F172A" opacity="0.4" />
      <circle cx="820" cy="260" r="3" fill="#0F172A" opacity="0.5" />
      <circle cx="460" cy="340" r="2" fill="#0F172A" opacity="0.35" />
    </svg>
  );
}

function FloatingGlassCard({
  title,
  subtitle,
  position,
  delay,
  duration,
  scrollOffset,
}: {
  title: string;
  subtitle: string;
  position: string;
  delay: string;
  duration: string;
  scrollOffset: number;
}) {
  return (
    <div
      className={cn(
        "scholastic-glass-card absolute z-20 hidden min-w-[9.5rem] rounded-2xl border border-white/40 bg-white/55 px-3.5 py-3 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:block sm:min-w-[10.5rem] sm:px-4 sm:py-3.5",
        position,
      )}
      style={{
        animationDelay: delay,
        animationDuration: duration,
        transform: `translateY(${scrollOffset * 0.12}px)`,
      }}
    >
      <div className="flex items-start gap-2">
        <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
          <Check className="size-2.5 text-emerald-600" strokeWidth={3} />
        </span>
        <div>
          <p className="text-[11px] font-semibold leading-tight text-[#0F172A] sm:text-xs">
            {title}
          </p>
          <p className="mt-0.5 text-[10px] leading-snug text-slate-500 sm:text-[11px]">
            {subtitle}
          </p>
        </div>
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
  highlight?: boolean;
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
          "block text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-[3.35rem]",
          highlight &&
            "bg-gradient-to-r from-[#1e40af] via-[#3038CF] to-[#059669] bg-clip-text text-transparent",
        )}
      >
        {children}
      </span>
    </span>
  );
}

export function ScholasticHero() {
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

  const scrollToPrograms = () => {
    scrollToSection("scholastic-programs");
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Scholastic & Language Coaching"
      className="relative overflow-hidden border-b border-slate-200/60 bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 10% 20%, rgba(48,56,207,0.06) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 90% 80%, rgba(5,150,105,0.05) 0%, transparent 50%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        }}
      />

      <WorldMapOutline />

      <div
        className="pointer-events-none absolute -right-24 top-20 size-72 rounded-full bg-[#3038CF]/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-10 size-56 rounded-full bg-emerald-500/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-14 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-5 xl:col-span-5">
            <p
              className={cn(
                "font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#3038CF] sm:text-sm sm:tracking-[0.26em]",
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "80ms" }}
            >
              Scholastic & Language Coaching
            </p>

            <h1 className="mt-5">
              <HeadlineLine visible={visible} delay={160}>
                Build Skills.
              </HeadlineLine>
              <HeadlineLine visible={visible} delay={280}>
                Build Confidence.
              </HeadlineLine>
              <HeadlineLine visible={visible} delay={400} highlight>
                Build Your Global Future.
              </HeadlineLine>
            </h1>

            <p
              className={cn(
                "mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-[1.05rem]",
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "520ms" }}
            >
              A premium academic and language development program that prepares
              students for international education, confident communication, and
              future-ready careers.
            </p>

            <div
              className={cn(
                "mt-8 flex flex-wrap items-center gap-3 sm:gap-4",
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "640ms" }}
            >
              <Link
                to="/enquiry"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#0F172A] px-6 py-3.5 text-sm font-medium text-white shadow-[0_4px_24px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e293b] hover:shadow-[0_8px_32px_rgba(15,23,42,0.22)]"
              >
                Book Free Counselling
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <button
                type="button"
                onClick={scrollToPrograms}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-medium text-[#0F172A] backdrop-blur-sm transition-all duration-300 hover:border-[#3038CF]/30 hover:bg-white hover:shadow-md"
              >
                Explore Programs
              </button>
            </div>

            <div
              className={cn(
                "mt-5 grid grid-cols-3 gap-2 border-t border-slate-200/80 pt-4 sm:mt-10 sm:gap-6 sm:pt-8",
                visible ? "scholastic-fade-in" : "opacity-0",
              )}
              style={{ animationDelay: "760ms" }}
            >
              {trustStats.map((stat) => (
                <div key={stat.label} className="min-w-0 text-center sm:text-left">
                  <p className="text-lg font-semibold tracking-tight text-[#0F172A] sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[9px] leading-snug text-slate-500 sm:mt-1 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "relative lg:col-span-7 xl:col-span-7",
              visible ? "scholastic-fade-in" : "opacity-0",
            )}
            style={{ animationDelay: "320ms" }}
          >
            <div
              className="relative mx-auto aspect-[4/3] max-w-2xl overflow-hidden rounded-[1.75rem] shadow-[0_24px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/5 sm:aspect-[5/4] lg:max-w-none"
              style={{ transform: `translateY(${scrollOffset * -0.06}px)` }}
            >
              <img
                src={HERO_IMAGE}
                alt="Diverse international students collaborating in a modern university innovation hub"
                width={1200}
                height={960}
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0F172A]/20 via-transparent to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"
                aria-hidden
              />
            </div>

            {floatingCards.map((card) => (
              <FloatingGlassCard key={card.title} {...card} scrollOffset={scrollOffset} />
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
              {floatingCards.slice(0, 4).map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-white/50 bg-white/70 px-3 py-2.5 shadow-sm backdrop-blur-md"
                >
                  <p className="text-[11px] font-semibold text-[#0F172A]">{card.title}</p>
                  <p className="text-[10px] text-slate-500">{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToPrograms}
          className="scholastic-scroll-indicator absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors hover:text-[#3038CF] lg:flex"
          aria-label="Scroll to programs"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.28em]">Scroll</span>
          <ArrowDown className="size-4" />
        </button>
      </div>

      <MobileHeroGoToNav navLinks={coachingProgramNavLinks()} />
    </section>
  );
}
