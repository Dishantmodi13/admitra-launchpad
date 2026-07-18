import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type MobileGoToLink = {
  key: string;
  label: string;
  to: string;
};

export function MobileHeroGoToNav({ navLinks }: { navLinks: MobileGoToLink[] }) {
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("mobile-go-to-nav-active");
    return () => {
      document.documentElement.classList.remove("mobile-go-to-nav-active");
    };
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (barRef.current && !barRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isActive]);

  if (!mounted || navLinks.length === 0) return null;

  return createPortal(
    <div
      ref={barRef}
      role="region"
      aria-label="Quick page navigation"
      className={cn(
        "fixed inset-x-4 z-[90] overflow-hidden rounded-full transition-all duration-300 lg:hidden",
        "bottom-[calc(1.25rem+env(safe-area-inset-bottom))]",
        isActive
          ? "border border-white/15 bg-brand-blue/85 shadow-[0_12px_40px_rgba(48,56,207,0.35)] backdrop-blur-lg"
          : "border border-white/15 bg-brand-blue/65 shadow-[0_10px_36px_rgba(48,56,207,0.28)] backdrop-blur-lg",
      )}
    >
      <div className="flex items-center gap-2.5 px-3 py-2.5 sm:px-4">
        <button
          type="button"
          className="shrink-0"
          aria-expanded={isActive}
          onClick={() => setIsActive((open) => !open)}
        >
          <p
            className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors"
          >
            Go to
          </p>
        </button>

        <span
          className={cn(
            "h-5 w-px shrink-0",
            isActive ? "bg-white/20" : "bg-white/30",
          )}
          aria-hidden
        />

        <nav aria-label="Quick navigation" className="min-w-0 flex-1">
          <ul className="no-scrollbar flex gap-2 overflow-x-auto pe-0.5">
            {navLinks.map((link) => {
              const isCurrent =
                link.to === "/"
                  ? pathname === "/"
                  : pathname === link.to || pathname.startsWith(`${link.to}/`);

              return (
                <li key={link.key} className="shrink-0">
                  <Link
                    to={link.to}
                    onClick={() => setIsActive(false)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.05em] transition-colors sm:px-3.5 sm:py-2 sm:text-xs",
                      isActive
                        ? isCurrent
                          ? "border-white bg-white text-foreground"
                          : "border-white/30 bg-white/10 text-white hover:bg-white/20"
                        : isCurrent
                          ? "border-white bg-white text-brand-blue"
                          : "border-white/30 bg-white/12 text-white hover:bg-white/20",
                    )}
                  >
                    <ArrowRight className="size-3 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>,
    document.body,
  );
}
