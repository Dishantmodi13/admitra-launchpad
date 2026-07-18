import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import Lenis from "lenis";
import { useRouterState } from "@tanstack/react-router";
import "lenis/dist/lenis.css";

type SmoothScrollContextValue = {
  lenis: Lenis | null;
  scrollY: number;
  scrollToSection: (id: string, offset?: number) => void;
  scrollToTop: () => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  scrollY: 0,
  scrollToSection: () => {},
  scrollToTop: () => {},
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function useSectionScrollOffset(ref: RefObject<HTMLElement | null>) {
  const { lenis, scrollY } = useSmoothScroll();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      setOffset(Math.max(0, -el.getBoundingClientRect().top));
    };

    update();

    if (lenis) {
      lenis.on("scroll", update);
      return () => lenis.off("scroll", update);
    }

    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis, ref, scrollY]);

  return offset;
}

function SmoothScrollRouteSync({ lenis }: { lenis: Lenis | null }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.85 });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.35,
      infinite: false,
    });

    setLenis(instance);

    instance.on("scroll", ({ scroll }) => {
      setScrollY(scroll);
    });

    let frame = 0;
    const raf = (time: number) => {
      instance.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    if (lenis) return;

    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  const scrollToSection = (id: string, offset = -88) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (lenis) {
      lenis.scrollTo(el, { offset, duration: 1.35 });
      return;
    }

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis, scrollY, scrollToSection, scrollToTop }}>
      <SmoothScrollRouteSync lenis={lenis} />
      {children}
    </SmoothScrollContext.Provider>
  );
}
