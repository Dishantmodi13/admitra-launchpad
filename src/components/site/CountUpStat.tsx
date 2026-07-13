import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function useCountUp(target: number, active: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    let start: number | null = null;
    let raf = 0;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setCount(target);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return count;
}

interface CountUpStatProps {
  value: number;
  suffix?: string;
  padStart?: number;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function CountUpStat({
  value,
  suffix = "",
  padStart,
  className,
  delay = 0,
  duration = 2000,
  threshold = 0.2,
}: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active, duration);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    let observer: IntersectionObserver;
    let timeout: ReturnType<typeof setTimeout>;
    let raf2 = 0;

    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              timeout = setTimeout(() => setActive(true), delay);
              observer.unobserve(el);
            }
          },
          { threshold, rootMargin: "0px 0px -5% 0px" },
        );
        observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timeout);
      observer?.disconnect();
    };
  }, [delay, threshold]);

  const display =
    padStart !== undefined
      ? String(count).padStart(padStart, "0")
      : String(count);

  return (
    <div ref={ref} className={cn("font-serif text-5xl italic text-accent md:text-6xl", className)}>
      {display}
      {suffix}
    </div>
  );
}
