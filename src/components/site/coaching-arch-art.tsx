import type { ComponentType, ReactNode } from "react";

type ArtProps = {
  accent?: string;
};

function ArtLayer({ children }: { children: ReactNode }) {
  return <div className="relative h-full w-full">{children}</div>;
}

function FlagUk() {
  return (
    <svg viewBox="0 0 48 32" className="h-7 w-10 shrink-0 rounded-sm shadow-md md:h-8 md:w-12" aria-hidden>
      <rect width="48" height="32" fill="#012169" />
      <path d="M0 0L48 32M48 0L0 32" stroke="#fff" strokeWidth="6" />
      <path d="M0 0L48 32M48 0L0 32" stroke="#C8102E" strokeWidth="3" />
      <path d="M24 0V32M0 16H48" stroke="#fff" strokeWidth="10" />
      <path d="M24 0V32M0 16H48" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FlagAu() {
  return (
    <svg viewBox="0 0 48 32" className="h-7 w-10 shrink-0 rounded-sm shadow-md md:h-8 md:w-12" aria-hidden>
      <rect width="48" height="32" fill="#012169" />
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0L24 16M24 0L0 16" stroke="#fff" strokeWidth="3" />
      <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M12 0V16M0 8H24" stroke="#fff" strokeWidth="5" />
      <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="3" />
      <circle cx="34" cy="22" r="3" fill="#fff" />
      <circle cx="40" cy="12" r="2.5" fill="#fff" />
      <circle cx="30" cy="10" r="2" fill="#fff" />
    </svg>
  );
}

function FlagCa() {
  return (
    <svg viewBox="0 0 48 32" className="h-7 w-10 shrink-0 rounded-sm shadow-md md:h-8 md:w-12" aria-hidden>
      <rect width="12" height="32" fill="#D52B1E" />
      <rect x="12" width="24" height="32" fill="#fff" />
      <rect x="36" width="12" height="32" fill="#D52B1E" />
      <path
        d="M24 8l1.5 4.5h4.7l-3.8 2.8 1.5 4.5L24 17l-3.9 2.8 1.5-4.5-3.8-2.8h4.7z"
        fill="#D52B1E"
      />
    </svg>
  );
}

function FlagUs() {
  return (
    <svg viewBox="0 0 48 32" className="h-7 w-10 shrink-0 rounded-sm shadow-md md:h-8 md:w-12" aria-hidden>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={i * 4.57} width="48" height="4.57" fill={i % 2 === 0 ? "#B22234" : "#fff"} />
      ))}
      <rect width="20" height="16" fill="#3C3B6E" />
    </svg>
  );
}

function PlaneIcon({ className, color = "#fff" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 48" className={className} aria-hidden>
      <path d="M2 24h18l8-10 4 10h22l-8 4 8 4H32l-4 10-4-10H2v-4z" fill={color} />
    </svg>
  );
}

export function IeltsArchArt({ accent = "#F5B335" }: ArtProps) {
  return (
    <ArtLayer>
      <div className="absolute left-[4%] top-[20%] flex gap-2 md:left-[6%] md:top-[18%]">
        <FlagUk />
        <FlagAu />
        <FlagCa />
      </div>
      <PlaneIcon
        className="absolute right-[6%] top-[22%] h-8 w-14 opacity-95 md:right-[8%] md:h-10 md:w-16"
        color="#fff"
      />
      <PlaneIcon
        className="absolute right-[16%] top-[42%] h-7 w-12 -rotate-6 opacity-80 md:h-8 md:w-14"
        color={accent}
      />
      <PlaneIcon
        className="absolute left-[32%] top-[12%] h-6 w-10 -scale-x-100 rotate-3 opacity-50 md:h-7 md:w-12"
        color="#fff"
      />
    </ArtLayer>
  );
}

export function GreArchArt({ accent = "#E07A3A" }: ArtProps) {
  return (
    <ArtLayer>
      <svg
        viewBox="0 0 80 80"
        className="absolute left-[5%] top-[18%] h-14 w-14 md:left-[7%] md:h-16 md:w-16"
        aria-hidden
      >
        <rect x="8" y="36" width="64" height="36" rx="4" fill="#fff" opacity="0.9" />
        <polygon points="40,8 72,36 8,36" fill={accent} />
        <rect x="30" y="48" width="20" height="24" fill="#3038CF" opacity="0.8" />
      </svg>
      <svg
        viewBox="0 0 64 64"
        className="absolute left-[15%] top-[42%] h-10 w-10 md:h-12 md:w-12"
        aria-hidden
      >
        <rect x="10" y="8" width="44" height="48" rx="3" fill="#fff" opacity="0.95" />
        <rect x="14" y="14" width="36" height="4" fill="#5B2C6F" />
        <rect x="14" y="22" width="28" height="3" fill="#3038CF" opacity="0.6" />
        <rect x="14" y="29" width="32" height="3" fill="#3038CF" opacity="0.6" />
        <rect x="14" y="36" width="24" height="3" fill="#3038CF" opacity="0.6" />
      </svg>
      <svg
        viewBox="0 0 80 80"
        className="absolute right-[6%] top-[16%] h-14 w-14 md:right-[8%] md:h-[4.5rem] md:w-[4.5rem]"
        aria-hidden
      >
        <circle cx="40" cy="40" r="28" fill="#fff" opacity="0.2" />
        <path d="M20 52 L32 28 L44 44 L56 24 L64 52 Z" fill={accent} opacity="0.9" />
        <circle cx="40" cy="40" r="28" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
      </svg>
    </ArtLayer>
  );
}

export function SatArchArt({ accent = "#F5B335" }: ArtProps) {
  return (
    <ArtLayer>
      <div className="absolute left-[5%] top-[20%] md:left-[7%]">
        <FlagUs />
      </div>
      <svg
        viewBox="0 0 48 96"
        className="absolute left-[14%] top-[38%] h-12 w-6 md:h-14 md:w-7"
        aria-hidden
      >
        <rect x="4" y="8" width="40" height="8" fill={accent} />
        <rect x="20" y="16" width="8" height="72" fill="#fff" opacity="0.9" />
        <polygon points="24,4 32,16 16,16" fill="#3038CF" />
      </svg>
      <svg
        viewBox="0 0 64 64"
        className="absolute right-[7%] top-[18%] h-14 w-14 md:h-16 md:w-16"
        aria-hidden
      >
        <rect x="8" y="8" width="48" height="48" rx="6" fill="#fff" opacity="0.92" />
        <rect x="14" y="14" width="36" height="10" fill="#009CDE" opacity="0.3" />
        <text x="32" y="40" textAnchor="middle" fill="#3038CF" fontSize="18" fontWeight="bold">
          800
        </text>
      </svg>
      <svg
        viewBox="0 0 64 64"
        className="absolute right-[16%] top-[42%] h-9 w-9"
        aria-hidden
      >
        <polygon points="32,6 38,24 58,24 42,36 48,56 32,44 16,56 22,36 6,24 26,24" fill={accent} />
      </svg>
    </ArtLayer>
  );
}

export function PteArchArt({ accent = "#E07A3A" }: ArtProps) {
  return (
    <ArtLayer>
      <div className="absolute left-[5%] top-[18%] md:left-[7%]">
        <FlagAu />
      </div>
      <svg
        viewBox="0 0 80 56"
        className="absolute left-[14%] top-[40%] h-10 w-14 md:h-12 md:w-16"
        aria-hidden
      >
        <rect x="4" y="8" width="72" height="40" rx="4" fill="#fff" opacity="0.92" />
        <rect x="8" y="12" width="64" height="28" rx="2" fill="#007C8A" opacity="0.25" />
        <circle cx="40" cy="26" r="8" fill={accent} opacity="0.8" />
        <rect x="56" y="38" width="12" height="4" rx="1" fill="#3038CF" opacity="0.5" />
      </svg>
      <svg
        viewBox="0 0 64 64"
        className="absolute right-[7%] top-[16%] h-14 w-14 md:h-16 md:w-16"
        aria-hidden
      >
        <circle cx="32" cy="32" r="26" fill="#fff" opacity="0.2" />
        <circle cx="32" cy="32" r="26" fill="none" stroke="#fff" strokeWidth="2" opacity="0.6" />
        <ellipse cx="32" cy="32" rx="26" ry="12" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
        <ellipse cx="32" cy="32" rx="12" ry="26" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
        <circle cx="32" cy="32" r="4" fill={accent} />
      </svg>
      <svg
        viewBox="0 0 48 48"
        className="absolute right-[16%] top-[42%] h-9 w-9"
        aria-hidden
      >
        <rect x="8" y="16" width="8" height="20" rx="4" fill="#fff" opacity="0.9" />
        <rect x="20" y="10" width="8" height="26" rx="4" fill="#fff" opacity="0.9" />
        <rect x="32" y="18" width="8" height="18" rx="4" fill="#fff" opacity="0.9" />
        <line x1="4" y1="38" x2="44" y2="38" stroke={accent} strokeWidth="2" />
      </svg>
    </ArtLayer>
  );
}

export function ScholasticArchArt({ accent = "#E07A3A" }: ArtProps) {
  return (
    <ArtLayer>
      <svg
        viewBox="0 0 72 72"
        className="absolute left-[4%] top-[16%] h-14 w-14 md:left-[6%] md:h-16 md:w-16"
        aria-hidden
      >
        <rect x="10" y="14" width="52" height="44" rx="4" fill="#fff" opacity="0.92" />
        <rect x="14" y="18" width="44" height="6" fill="#3038CF" opacity="0.5" />
        <rect x="14" y="28" width="36" height="4" fill="#3038CF" opacity="0.3" />
        <rect x="14" y="36" width="40" height="4" fill="#3038CF" opacity="0.3" />
        <rect x="14" y="44" width="30" height="4" fill="#3038CF" opacity="0.3" />
      </svg>
      <svg
        viewBox="0 0 64 64"
        className="absolute left-[15%] top-[42%] h-11 w-11"
        aria-hidden
      >
        <circle cx="32" cy="32" r="24" fill="#fff" opacity="0.2" />
        <text x="20" y="28" fill="#fff" fontSize="12" fontWeight="bold">
          A
        </text>
        <text x="32" y="38" fill={accent} fontSize="12" fontWeight="bold">
          B
        </text>
        <text x="42" y="28" fill="#fff" fontSize="12" fontWeight="bold">
          C
        </text>
      </svg>
      <svg
        viewBox="0 0 64 64"
        className="absolute right-[6%] top-[14%] h-14 w-14 md:right-[8%] md:h-16 md:w-16"
        aria-hidden
      >
        <circle cx="32" cy="32" r="26" fill="#fff" opacity="0.15" />
        <circle cx="32" cy="32" r="26" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
        <ellipse cx="32" cy="32" rx="26" ry="10" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.35" />
        <circle cx="32" cy="32" r="5" fill={accent} />
      </svg>
      <svg
        viewBox="0 0 56 56"
        className="absolute right-[16%] top-[40%] h-10 w-10"
        aria-hidden
      >
        <rect x="8" y="20" width="40" height="24" rx="12" fill="#fff" opacity="0.9" />
        <text x="28" y="36" textAnchor="middle" fill="#3038CF" fontSize="11" fontWeight="bold">
          Hi!
        </text>
        <polygon points="8,28 2,24 8,32" fill="#fff" opacity="0.9" />
      </svg>
    </ArtLayer>
  );
}

export const coachingArchArt: Record<string, ComponentType<ArtProps>> = {
  "scholastic-language": ScholasticArchArt,
  ielts: IeltsArchArt,
  gre: GreArchArt,
  sat: SatArchArt,
  pte: PteArchArt,
};
