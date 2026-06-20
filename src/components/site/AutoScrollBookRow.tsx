import { useEffect, useMemo, useRef } from "react";

type Book = {
  cover: string;
  title: string;
  series: string;
  desc: string;
};

const SCROLL_SPEED = 0.65;
const SCROLL_SPEED_HOVER = 0.18;

export function AutoScrollBookRow({ books }: { books: Book[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);

  const loopBooks = useMemo(() => [...books, ...books], [books]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf = 0;

    const tick = () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!isDraggingRef.current && !reducedMotion) {
        const speed = isHoveredRef.current ? SCROLL_SPEED_HOVER : SCROLL_SPEED;
        el.scrollLeft += speed;

        const loopWidth = el.scrollWidth / 2;
        if (loopWidth > 0 && el.scrollLeft >= loopWidth) {
          el.scrollLeft -= loopWidth;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const endDrag = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    return () => {
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="no-scrollbar flex cursor-grab gap-6 overflow-x-auto pb-4 active:cursor-grabbing"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        isDraggingRef.current = false;
      }}
      onPointerDown={() => {
        isDraggingRef.current = true;
      }}
    >
      {loopBooks.map((b, i) => (
        <article
          key={`${b.title}-${i}`}
          className="group w-[230px] flex-shrink-0 sm:w-[250px]"
        >
          <div className="overflow-hidden bg-secondary">
            <img
              src={b.cover}
              alt={b.title}
              loading="lazy"
              width={360}
              height={540}
              draggable={false}
              className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
              {b.series}
            </span>
            <span className="font-mono text-xs">₹0/-</span>
          </div>
          <h3 className="mt-2 font-serif text-lg italic">{b.title}</h3>
          <p className="mt-2 text-xs text-muted-foreground">{b.desc}</p>
          <button
            type="button"
            className="mt-3 font-mono text-[11px] uppercase tracking-widest text-accent underline-offset-4 hover:underline"
          >
            Download →
          </button>
        </article>
      ))}
    </div>
  );
}
