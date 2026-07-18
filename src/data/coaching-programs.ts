import scholasticFeatures from "@/assets/coaching/scholastic/features.png";
import scholasticIelts from "@/assets/coaching/scholastic/ielts.png";
import scholasticGre from "@/assets/coaching/scholastic/gre.png";
import scholasticSat from "@/assets/coaching/scholastic/sat.png";
import scholasticPte from "@/assets/coaching/scholastic/pte.png";
import benefitFlex from "@/assets/coaching/programs/flex.png";
import benefitIne from "@/assets/coaching/programs/ine.png";
import benefitCost from "@/assets/coaching/programs/cost.png";
import benefitEng from "@/assets/coaching/programs/eng.png";
import benefitOnline from "@/assets/coaching/programs/online.png";
import benefitNet from "@/assets/coaching/programs/net.png";
import benefitLive from "@/assets/coaching/programs/live.png";

export type CoachingBenefit = {
  title: string;
  points: string[];
  image: string;
};

export type CoachingProgramLink = {
  label: string;
  slug: string;
  image?: string;
  backgroundImage?: string;
  points?: string[];
};

export type CoachingProgram = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  pageTitle: string;
  sectionTitle: string;
  intro: string[];
  introImage?: string;
  programLinks?: CoachingProgramLink[];
  benefits?: CoachingBenefit[];
  benefitsHeading?: string;
};

export const coachingPrograms: Record<string, CoachingProgram> = {
  "scholastic-language": {
    slug: "scholastic-language",
    metaTitle: "Test Prep & Career Coaching | IELTS, GRE, GMAT, SAT | KAREER Studio",
    metaDescription:
      "Instructor-led online live coaching for IELTS, GRE, GMAT, SAT, PTE, TOEFL, and German language with certified faculty.",
    pageTitle: "Scholastic & Language Coaching",
    sectionTitle: "Scholastic & Language Coaching",
    intro: [
      "Instructor-led online live coaching for IELTS, GRE, GMAT, SAT, PTE, TOEFL, and German language",
      "Dynamic, interactive sessions in real time with certified, seasoned faculty",
      "Personalized guidance, support, and tailored instruction for every learner",
      "Flexible virtual platforms for individuals and group coaching",
    ],
    introImage: scholasticFeatures,
    programLinks: [
      {
        label: "IELTS",
        slug: "ielts",
        image: scholasticIelts,
        backgroundImage: "/coaching/cards/ielts-flags-bg.jpg",
        points: [
          "Speaking, writing, reading, and listening preparation",
          "Band-targeted coaching with live mock tests",
        ],
      },
      {
        label: "GRE",
        slug: "gre",
        image: scholasticGre,
        backgroundImage: "/coaching/cards/gre-card-bg.jpg",
        points: [
          "Verbal, quantitative, and analytical writing prep",
          "Diagnostic-led practice and score strategy",
        ],
      },
      {
        label: "SAT",
        slug: "sat",
        image: scholasticSat,
        backgroundImage: "/coaching/cards/sat-card-bg.jpg",
        points: [
          "College Board-aligned curriculum",
          "Section drills and weekly practice tests",
        ],
      },
      {
        label: "PTE",
        slug: "pte",
        image: scholasticPte,
        backgroundImage: "/coaching/cards/pte-card-bg.jpg",
        points: [
          "Computer-based test format training",
          "Pronunciation, fluency, and integrated task prep",
        ],
      },
    ],
  },
  ielts: {
    slug: "ielts",
    metaTitle: "IELTS Coaching & Test Prep | Ace Your IELTS | KAREER Studio",
    metaDescription:
      "Online live IELTS coaching with experienced instructors - flexible, interactive preparation for speaking, writing, reading, and listening.",
    pageTitle: "IELTS",
    sectionTitle: "IELTS Coaching (Online-Live)",
    intro: [
      "Real-time online IELTS preparation - ideal when in-person classes are not an option",
      "Flexible scheduling for students with time or location constraints",
      "Interactive sessions across speaking, writing, reading, and listening",
      "Instant feedback from experienced instructors",
      "Study from home and connect with classmates worldwide",
    ],
    benefitsHeading: "Benefits",
    benefits: [
      {
        title: "Convenience and Flexibility",
        points: [
          "Attend classes from anywhere with an internet connection",
          "Schedule sessions at times that work for your busy lifestyle",
        ],
        image: benefitFlex,
      },
      {
        title: "Live Interaction with Faculties",
        points: [
          "Interact with experienced IELTS instructors in real time",
          "Receive instant feedback and clarification on your performance",
        ],
        image: benefitIne,
      },
      {
        title: "Cost-Effective",
        points: [
          "More affordable than many traditional in-person classes",
          "Eliminates travel costs and commute time",
        ],
        image: benefitCost,
      },
      {
        title: "Engaging and Interactive",
        points: [
          "Interactive activities across all four IELTS skills",
          "Exercises designed to build exam-ready confidence",
        ],
        image: benefitEng,
      },
      {
        title: "Access to Online Resources",
        points: [
          "Access practice tests, sample materials, and study guides",
          "Strengthen skills beyond live class hours",
        ],
        image: benefitOnline,
      },
      {
        title: "Networking Opportunities",
        points: [
          "Connect with classmates from around the world",
          "Gain motivation and support throughout your preparation",
        ],
        image: benefitNet,
      },
    ],
  },
  gre: {
    slug: "gre",
    metaTitle: "GRE Coaching & Test Prep | Boost Your Score | KAREER Studio",
    metaDescription:
      "Online live GRE coaching for verbal reasoning, quantitative reasoning, and analytical writing - personalized guidance from expert instructors.",
    pageTitle: "GRE",
    sectionTitle: "GRE Coaching (Online-Live)",
    intro: [
      "Standardized test for graduate and business program admissions worldwide",
      "Measures verbal reasoning, quantitative reasoning, and analytical writing",
      "Personalized instruction with targeted practice on each section",
      "Expert feedback on a schedule that fits your life",
      "Study from anywhere - no travel to a physical classroom",
    ],
    benefitsHeading: "Benefits",
    benefits: [
      {
        title: "Flexibility",
        points: [
          "Schedule sessions at times convenient for you",
          "Fit GRE preparation into a busy academic or work routine",
        ],
        image: benefitFlex,
      },
      {
        title: "Personalized attention",
        points: [
          "One-on-one guidance from your instructor",
          "Questions answered and performance reviewed in real time",
        ],
        image: benefitIne,
      },
      {
        title: "Live practice",
        points: [
          "Live problem-solving and section drills",
          "Immediate feedback to correct mistakes quickly",
        ],
        image: benefitLive,
      },
      {
        title: "Cost-effective",
        points: [
          "Lower cost than many in-person coaching programs",
          "No travel or relocation expenses",
        ],
        image: benefitCost,
      },
      {
        title: "Access to Online Resources",
        points: [
          "Practice tests, study materials, and interactive tools",
          "Resources to reinforce learning between sessions",
        ],
        image: benefitOnline,
      },
    ],
  },
  sat: {
    slug: "sat",
    metaTitle: "SAT Coaching & Test Prep | Achieve High Scores | KAREER Studio",
    metaDescription:
      "Online live SAT coaching for reading, writing, and mathematics - structured prep aligned with College Board standards.",
    pageTitle: "SAT",
    sectionTitle: "SAT Coaching (Online-Live)",
    intro: [
      "Widely used for US college admissions and scholarship decisions",
      "Assesses college readiness in reading, writing, and mathematics",
      "Developed and administered by the College Board",
      "Structured live lessons with practice tests and personalized feedback",
      "Reach your target score efficiently",
    ],
    benefitsHeading: "Benefits",
    benefits: [
      {
        title: "Flexibility",
        points: [
          "Schedule sessions at times convenient for you",
          "Fit SAT preparation around school and extracurriculars",
        ],
        image: benefitFlex,
      },
      {
        title: "Personalized attention",
        points: [
          "One-on-one guidance from your instructor",
          "Questions answered and performance reviewed in real time",
        ],
        image: benefitIne,
      },
      {
        title: "Live practice",
        points: [
          "Live section drills and timed practice",
          "Immediate feedback to sharpen test-day performance",
        ],
        image: benefitLive,
      },
      {
        title: "Cost-effective",
        points: [
          "Lower cost than many in-person coaching programs",
          "No travel or relocation expenses",
        ],
        image: benefitCost,
      },
      {
        title: "Access to Online Resources",
        points: [
          "Practice tests, study materials, and interactive tools",
          "Resources to reinforce learning between sessions",
        ],
        image: benefitOnline,
      },
    ],
  },
  pte: {
    slug: "pte",
    metaTitle: "PTE Coaching & Test Prep | Achieve Your Score | KAREER Studio",
    metaDescription:
      "Online live PTE coaching for speaking, writing, reading, and listening - computer-based English proficiency preparation.",
    pageTitle: "PTE",
    sectionTitle: "PTE Coaching (Online-Live)",
    intro: [
      "Computer-based test for speaking, writing, reading, and listening",
      "Accepted by universities, colleges, and immigration authorities",
      "Flexible, interactive live online preparation",
      "Experienced instructors with instant feedback",
      "Build skills for study abroad, work, or immigration from anywhere",
    ],
    benefitsHeading: "Benefits",
    benefits: [
      {
        title: "Convenience and Flexibility",
        points: [
          "Attend classes from anywhere with an internet connection",
          "Schedule sessions at times that work for your busy lifestyle",
        ],
        image: benefitFlex,
      },
      {
        title: "Live Interaction with Faculties",
        points: [
          "Interact with experienced PTE instructors in real time",
          "Receive instant feedback and clarification on your performance",
        ],
        image: benefitIne,
      },
      {
        title: "Cost-Effective",
        points: [
          "More affordable than many traditional in-person classes",
          "Eliminates travel costs and commute time",
        ],
        image: benefitCost,
      },
      {
        title: "Engaging and Interactive",
        points: [
          "Interactive activities across all PTE task types",
          "Exercises designed to build exam-ready confidence",
        ],
        image: benefitEng,
      },
      {
        title: "Access to Online Resources",
        points: [
          "Access practice tests, sample materials, and study guides",
          "Strengthen skills beyond live class hours",
        ],
        image: benefitOnline,
      },
      {
        title: "Networking Opportunities",
        points: [
          "Connect with classmates from around the world",
          "Gain motivation and support throughout your preparation",
        ],
        image: benefitNet,
      },
    ],
  },
};

export const coachingProgramList = Object.values(coachingPrograms);

export function getCoachingProgram(slug: string) {
  return coachingPrograms[slug];
}
