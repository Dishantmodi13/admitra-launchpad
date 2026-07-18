import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/components/site/SmoothScrollProvider";

const SHOW_AFTER_PX = 240;

export function ScrollToTopButton() {
  const { scrollY, scrollToTop, lenis } = useSmoothScroll();
  const [fallbackScrollY, setFallbackScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lenis) return;

    const onScroll = () => setFallbackScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  const currentScrollY = lenis ? scrollY : fallbackScrollY;
  const visible = currentScrollY > SHOW_AFTER_PX;

  if (!mounted) return null;

  return createPortal(
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!visible}
      className={cn(
        "fixed right-4 z-[9999] flex size-12 items-center justify-center rounded-full",
        "border-2 border-background bg-foreground text-background",
        "shadow-[0_8px_28px_rgba(15,23,42,0.35)]",
        "transition-all duration-300 active:scale-95 lg:hidden",
        "bottom-[max(4rem,env(safe-area-inset-bottom))]",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="size-5" strokeWidth={2.5} />
    </button>,
    document.body,
  );
}
