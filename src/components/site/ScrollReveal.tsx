import {
  Children,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "fade" | "blur";

const directionStyles: Record<
  RevealDirection,
  { hidden: string; visible: string }
> = {
  up: {
    hidden: "translate-y-12 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  down: {
    hidden: "-translate-y-12 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  left: {
    hidden: "-translate-x-12 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  right: {
    hidden: "translate-x-12 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  scale: {
    hidden: "scale-90 opacity-0",
    visible: "scale-100 opacity-100",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  blur: {
    hidden: "translate-y-8 opacity-0 blur-sm",
    visible: "translate-y-0 opacity-100 blur-0",
  },
};

const revealTransition =
  "transition-all duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-[transform,opacity]";

function useRevealOnScroll(once = true, threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    let observer: IntersectionObserver;
    let raf2 = 0;

    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible(true);
              if (once) observer.unobserve(el);
            } else if (!once) {
              setVisible(false);
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
      observer?.disconnect();
    };
  }, [once, threshold]);

  return { ref, visible };
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  once?: boolean;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  threshold = 0.12,
}: ScrollRevealProps) {
  const { ref, visible } = useRevealOnScroll(once, threshold);
  const styles = directionStyles[direction];

  return (
    <div
      ref={ref}
      className={cn(
        revealTransition,
        visible ? styles.visible : styles.hidden,
        className,
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

interface ScrollRevealGroupProps {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  stagger?: number;
  direction?: RevealDirection;
  once?: boolean;
  threshold?: number;
}

export function ScrollRevealGroup({
  children,
  className,
  itemClassName,
  stagger = 140,
  direction = "up",
  once = true,
  threshold = 0.08,
}: ScrollRevealGroupProps) {
  const { ref, visible } = useRevealOnScroll(once, threshold);
  const styles = directionStyles[direction];
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className={cn(
            revealTransition,
            visible ? styles.visible : styles.hidden,
            itemClassName,
          )}
          style={{ transitionDelay: visible ? `${i * stagger}ms` : "0ms" }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
