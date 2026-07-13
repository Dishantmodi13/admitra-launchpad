import benefitFlex from "@/assets/coaching/programs/flex.png";
import benefitIne from "@/assets/coaching/programs/ine.png";
import benefitCost from "@/assets/coaching/programs/cost.png";
import benefitEng from "@/assets/coaching/programs/eng.png";
import benefitOnline from "@/assets/coaching/programs/online.png";
import benefitNet from "@/assets/coaching/programs/net.png";
import benefitLive from "@/assets/coaching/programs/live.png";

export type CoachingIconStyle = {
  icon: string;
  surface: string;
};

const defaultBenefitIconStyle: CoachingIconStyle = {
  icon: "bg-accent",
  surface: "bg-accent/10",
};

export const coachingBenefitIconStyles: Record<string, CoachingIconStyle> = {
  [benefitFlex]: {
    icon: "bg-brand-blue",
    surface: "bg-brand-blue/10",
  },
  [benefitIne]: {
    icon: "bg-accent",
    surface: "bg-accent/12",
  },
  [benefitCost]: {
    icon: "bg-chart-2",
    surface: "bg-chart-2/15",
  },
  [benefitEng]: {
    icon: "bg-chart-1",
    surface: "bg-chart-1/15",
  },
  [benefitOnline]: {
    icon: "bg-chart-3",
    surface: "bg-chart-3/15",
  },
  [benefitNet]: {
    icon: "bg-chart-4",
    surface: "bg-chart-4/20",
  },
  [benefitLive]: {
    icon: "bg-chart-5",
    surface: "bg-chart-5/15",
  },
};

export type CoachingProgramLinkStyle = {
  icon: string;
  surface: string;
  cardGradient: string;
};

export const coachingProgramLinkStyles: Record<string, CoachingProgramLinkStyle> = {
  ielts: {
    icon: "bg-[#E31837]",
    surface: "bg-white/90",
    cardGradient:
      "bg-gradient-to-t from-black/88 via-[#E31837]/35 to-black/15",
  },
  gre: {
    icon: "bg-[#5B2C6F]",
    surface: "bg-white/90",
    cardGradient:
      "bg-gradient-to-t from-black/88 via-[#5B2C6F]/35 to-black/15",
  },
  sat: {
    icon: "bg-[#009CDE]",
    surface: "bg-white/90",
    cardGradient:
      "bg-gradient-to-t from-black/88 via-[#009CDE]/35 to-black/15",
  },
  pte: {
    icon: "bg-[#007C8A]",
    surface: "bg-white/90",
    cardGradient:
      "bg-gradient-to-t from-black/88 via-[#007C8A]/35 to-black/15",
  },
};

export function getBenefitIconStyle(image: string): CoachingIconStyle {
  return coachingBenefitIconStyles[image] ?? defaultBenefitIconStyle;
}

export function getProgramLinkStyle(slug: string): CoachingProgramLinkStyle | undefined {
  return coachingProgramLinkStyles[slug];
}
