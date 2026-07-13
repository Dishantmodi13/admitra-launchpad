export type CoachingArchBannerConfig = {
  eyebrow: string;
  title: string;
  gradientFrom: string;
  gradientTo: string;
  accent: string;
};

export const coachingArchBanners: Record<string, CoachingArchBannerConfig> = {
  "scholastic-language": {
    eyebrow: "Scholastic & Language",
    title: "Reading · Writing · Languages · Test Prep",
    gradientFrom: "#3038CF",
    gradientTo: "#5B6AE8",
    accent: "#E07A3A",
  },
  ielts: {
    eyebrow: "IELTS Coaching",
    title: "Global English · Study Abroad Ready",
    gradientFrom: "#C8102E",
    gradientTo: "#3038CF",
    accent: "#F5B335",
  },
  gre: {
    eyebrow: "GRE Coaching",
    title: "Graduate Admissions · Verbal · Quant · AWA",
    gradientFrom: "#5B2C6F",
    gradientTo: "#3038CF",
    accent: "#E07A3A",
  },
  sat: {
    eyebrow: "SAT Coaching",
    title: "US College Admissions · Reading · Math · Writing",
    gradientFrom: "#009CDE",
    gradientTo: "#3038CF",
    accent: "#F5B335",
  },
  pte: {
    eyebrow: "PTE Coaching",
    title: "Computer-Based English · Immigration · Study Abroad",
    gradientFrom: "#007C8A",
    gradientTo: "#3038CF",
    accent: "#E07A3A",
  },
};

export function getCoachingArchBanner(slug: string) {
  return coachingArchBanners[slug];
}
