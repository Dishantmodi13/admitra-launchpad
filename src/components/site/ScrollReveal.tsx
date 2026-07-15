import {
  Children,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "fade" | "blur";

type RevealDistance = "default" | "wide";

function getDirectionStyles(distance: RevealDistance): Record<
  RevealDirection,
  { hidden: string; visible: string }
> {
  const leftHidden =
    distance === "wide" ? "-translate-x-24 opacity-0" : "-translate-x-10 opacity-0";
  const rightHidden =
    distance === "wide" ? "translate-x-24 opacity-0" : "translate-x-10 opacity-0";

  return {
    up: {
      hidden: "translate-y-10 opacity-0",
      visible: "translate-y-0 opacity-100",
    },
    down: {
      hidden: "-translate-y-10 opacity-0",
      visible: "translate-y-0 opacity-100",
    },
    left: {
      hidden: leftHidden,
      visible: "translate-x-0 opacity-100",
    },
    right: {
      hidden: rightHidden,
      visible: "translate-x-0 opacity-100",
    },
    scale: {
      hidden: "scale-[0.96] opacity-0",
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
}

const directionStyles = getDirectionStyles("default");

const revealTransition =
  "transform-gpu transition-[transform,opacity,filter] duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:blur-none";

function useRevealOnScroll(once = true, threshold = 0.1) {
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
          { threshold, rootMargin: "0px 0px -6% 0px" },
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
  distance?: RevealDistance;
  once?: boolean;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = "default",
  once = true,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, visible } = useRevealOnScroll(once, threshold);
  const styles = getDirectionStyles(distance)[direction];

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
  stagger = 120,
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
