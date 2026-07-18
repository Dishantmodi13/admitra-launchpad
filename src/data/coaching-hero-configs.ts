export type CoachingHeroGlassCard = {
  id: string;
  title: string;
  lines: string[];
  position: string;
  delay: string;
  duration: string;
  accent?: boolean;
};

export type CoachingHeroHeadlinePart = {
  text: string;
  gradient?: boolean;
};

export type CoachingTestHeroConfig = {
  slug: string;
  ariaLabel: string;
  eyebrow: string;
  headlineLine1: CoachingHeroHeadlinePart[];
  headlineLine2: CoachingHeroHeadlinePart[];
  description: string;
  heroImage: string;
  heroImageAlt: string;
  benefitsSectionId: string;
  trustBadges: readonly string[];
  floatingCards: CoachingHeroGlassCard[];
  accentValues: readonly string[];
  theme: {
    eyebrowClass: string;
    primaryGradient: string;
    secondaryGradient: string;
    background: string;
    mapStroke: string;
    blurOrbRight: string;
    blurOrbLeft: string;
    badgeIconBg: string;
    badgeIconColor: string;
    accentText: string;
    scrollHover: string;
    secondaryButtonHover: string;
    imageOverlay: string;
  };
};

export const greHeroConfig: CoachingTestHeroConfig = {
  slug: "gre",
  ariaLabel: "GRE Coaching",
  eyebrow: "GRE Coaching",
  headlineLine1: [
    { text: "Your " },
    { text: "Graduate School", gradient: true },
    { text: " Journey" },
  ],
  headlineLine2: [{ text: "Starts With GRE.", gradient: true }],
  description:
    "The GRE opens doors to master's and PhD programs worldwide. Live, expert-led coaching that sharpens verbal, quant, and analytical writing - and builds the score profile top programs expect.",
  heroImage: "/coaching/gre-hero.jpg",
  heroImageAlt:
    "Graduate students collaborating on GRE preparation in a modern study lounge",
  benefitsSectionId: "gre-benefits",
  trustBadges: [
    "95% Student Success",
    "Certified Trainers",
    "Section-wise Drills",
    "Personalized Feedback",
  ],
  accentValues: ["320+", "8,500+"],
  floatingCards: [
    {
      id: "score",
      title: "Target Score",
      lines: ["320+"],
      position: "top-[6%] left-[-5%] sm:left-[-2%]",
      delay: "0s",
      duration: "7s",
      accent: true,
    },
    {
      id: "sections",
      title: "Three Sections",
      lines: ["Verbal · Quant · AWA"],
      position: "top-[28%] right-[-7%] sm:right-[-3%]",
      delay: "1.1s",
      duration: "8s",
    },
    {
      id: "students",
      title: "Students Mentored",
      lines: ["8,500+"],
      position: "bottom-[34%] left-[-1%] sm:left-[3%]",
      delay: "0.5s",
      duration: "7.5s",
      accent: true,
    },
    {
      id: "community",
      title: "Global Community",
      lines: ["Students from 12+ Countries"],
      position: "bottom-[8%] right-[2%] sm:right-[6%]",
      delay: "1.7s",
      duration: "6.8s",
    },
  ],
  theme: {
    eyebrowClass: "text-[#5B2C6F]",
    primaryGradient: "from-[#4c1d95] via-[#5B2C6F] to-[#3038CF]",
    secondaryGradient: "from-[#5B2C6F] via-[#3038CF] to-[#7c3aed]",
    background:
      "radial-gradient(ellipse 75% 55% at 5% 15%, rgba(91,44,111,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 45% at 95% 85%, rgba(48,56,207,0.06) 0%, transparent 45%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    mapStroke: "#5B2C6F",
    blurOrbRight: "bg-violet-400/[0.05]",
    blurOrbLeft: "bg-[#5B2C6F]/[0.04]",
    badgeIconBg: "bg-violet-500/10",
    badgeIconColor: "text-violet-700",
    accentText: "text-[#5B2C6F]",
    scrollHover: "hover:text-[#5B2C6F]",
    secondaryButtonHover: "hover:border-[#5B2C6F]/35",
    imageOverlay: "from-[#0F172A]/30 via-transparent to-violet-900/10",
  },
};

export const satHeroConfig: CoachingTestHeroConfig = {
  slug: "sat",
  ariaLabel: "SAT Coaching",
  eyebrow: "SAT Coaching",
  headlineLine1: [
    { text: "Your " },
    { text: "US College", gradient: true },
    { text: " Dream" },
  ],
  headlineLine2: [{ text: "Starts With SAT.", gradient: true }],
  description:
    "The SAT is your gateway to top US universities and scholarships. Structured live coaching across reading, writing, and math - built to raise your score with confidence and clarity.",
  heroImage: "/coaching/sat-hero.jpg",
  heroImageAlt:
    "Motivated students preparing for the SAT together in a modern learning center",
  benefitsSectionId: "sat-benefits",
  trustBadges: [
    "95% Student Success",
    "Certified Trainers",
    "Timed Mock Tests",
    "Personalized Feedback",
  ],
  accentValues: ["1500+", "8,500+"],
  floatingCards: [
    {
      id: "score",
      title: "Target Score",
      lines: ["1500+"],
      position: "top-[6%] left-[-5%] sm:left-[-2%]",
      delay: "0s",
      duration: "7s",
      accent: true,
    },
    {
      id: "sections",
      title: "Three Sections",
      lines: ["Reading · Writing · Math"],
      position: "top-[28%] right-[-7%] sm:right-[-3%]",
      delay: "1.1s",
      duration: "8s",
    },
    {
      id: "students",
      title: "Students Mentored",
      lines: ["8,500+"],
      position: "bottom-[34%] left-[-1%] sm:left-[3%]",
      delay: "0.5s",
      duration: "7.5s",
      accent: true,
    },
    {
      id: "community",
      title: "Global Community",
      lines: ["Students from 12+ Countries"],
      position: "bottom-[8%] right-[2%] sm:right-[6%]",
      delay: "1.7s",
      duration: "6.8s",
    },
  ],
  theme: {
    eyebrowClass: "text-[#009CDE]",
    primaryGradient: "from-[#0369a1] via-[#009CDE] to-[#38bdf8]",
    secondaryGradient: "from-[#009CDE] via-[#3038CF] to-[#0ea5e9]",
    background:
      "radial-gradient(ellipse 75% 55% at 5% 15%, rgba(0,156,222,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 45% at 95% 85%, rgba(48,56,207,0.06) 0%, transparent 45%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    mapStroke: "#009CDE",
    blurOrbRight: "bg-sky-400/[0.05]",
    blurOrbLeft: "bg-[#009CDE]/[0.04]",
    badgeIconBg: "bg-sky-500/10",
    badgeIconColor: "text-sky-600",
    accentText: "text-[#009CDE]",
    scrollHover: "hover:text-[#009CDE]",
    secondaryButtonHover: "hover:border-[#009CDE]/35",
    imageOverlay: "from-[#0F172A]/30 via-transparent to-sky-900/10",
  },
};

export const pteHeroConfig: CoachingTestHeroConfig = {
  slug: "pte",
  ariaLabel: "PTE Coaching",
  eyebrow: "PTE Coaching",
  headlineLine1: [
    { text: "Your " },
    { text: "Global English", gradient: true },
    { text: " Journey" },
  ],
  headlineLine2: [{ text: "Starts With PTE.", gradient: true }],
  description:
    "PTE is your computer-based path to study abroad, work, and immigration. Live coaching for speaking, writing, reading, and listening - with the fluency and technique exam day demands.",
  heroImage: "/coaching/pte-hero.jpg",
  heroImageAlt:
    "International students preparing for PTE in a modern computer-based learning lab",
  benefitsSectionId: "pte-benefits",
  trustBadges: [
    "95% Student Success",
    "Certified Trainers",
    "Computer-based Mock Tests",
    "Personalized Feedback",
  ],
  accentValues: ["79+", "8,500+"],
  floatingCards: [
    {
      id: "score",
      title: "Target Score",
      lines: ["79+"],
      position: "top-[6%] left-[-5%] sm:left-[-2%]",
      delay: "0s",
      duration: "7s",
      accent: true,
    },
    {
      id: "sections",
      title: "Four Skills",
      lines: ["Speaking · Writing", "Reading · Listening"],
      position: "top-[28%] right-[-7%] sm:right-[-3%]",
      delay: "1.1s",
      duration: "8s",
    },
    {
      id: "students",
      title: "Students Mentored",
      lines: ["8,500+"],
      position: "bottom-[34%] left-[-1%] sm:left-[3%]",
      delay: "0.5s",
      duration: "7.5s",
      accent: true,
    },
    {
      id: "community",
      title: "Global Community",
      lines: ["Students from 12+ Countries"],
      position: "bottom-[8%] right-[2%] sm:right-[6%]",
      delay: "1.7s",
      duration: "6.8s",
    },
  ],
  theme: {
    eyebrowClass: "text-[#007C8A]",
    primaryGradient: "from-[#0f766e] via-[#007C8A] to-[#2dd4bf]",
    secondaryGradient: "from-[#007C8A] via-[#3038CF] to-[#14b8a6]",
    background:
      "radial-gradient(ellipse 75% 55% at 5% 15%, rgba(0,124,138,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 45% at 95% 85%, rgba(48,56,207,0.05) 0%, transparent 45%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    mapStroke: "#007C8A",
    blurOrbRight: "bg-teal-400/[0.05]",
    blurOrbLeft: "bg-[#007C8A]/[0.04]",
    badgeIconBg: "bg-teal-500/10",
    badgeIconColor: "text-teal-700",
    accentText: "text-[#007C8A]",
    scrollHover: "hover:text-[#007C8A]",
    secondaryButtonHover: "hover:border-[#007C8A]/35",
    imageOverlay: "from-[#0F172A]/30 via-transparent to-teal-900/10",
  },
};
