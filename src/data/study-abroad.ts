export const studyAbroadIntro = {
  eyebrow: "Career-Focused Study Abroad",
  headline: "Turn global dreams into a planned, employable career path.",
  summary:
    "At KAREER Studio, we pair scientific assessments with senior mentor judgment to design your international education journey - from first doubts to departure day.",
  pillars: [
    { value: 25, suffix: "+", label: "Challenge areas we guide you through" },
    { value: 5, suffix: "", label: "Phases on your global timeline" },
    { value: 40, suffix: "+", label: "Partner universities worldwide" },
  ],
};

export type ChallengePhaseId = "pre-decision" | "pre-admission" | "post-admission";

export type StudyAbroadChallenge = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  icon: string;
};
export type ChallengePhase = {
  id: ChallengePhaseId;
  label: string;
  tagline: string;
  introTitle: string;
  introBody: string;
  challenges: StudyAbroadChallenge[];
};

export const challengePhases: ChallengePhase[] = [
  {
    id: "pre-decision",
    label: "Pre-Decision",
    tagline: "Before you commit",
    introTitle: "Pre-decision challenges",
    introBody:
      "Exploring international careers often aligns with the pursuit of higher education abroad, presenting an unparalleled opportunity for students. However, the decision to study abroad encompasses multifaceted considerations that extend beyond academic advancement. It serves as a pivotal point not just for higher education but also for strategic career planning.",
    challenges: [
      {
        id: "information-overload",
        title: "Information Overload",
        summary:
          "Destinations, courses, rankings, and advice from every direction - filtering signal from noise is the first real challenge.",
        detail:
          "The abundance of information available about various study destinations, courses, and institutions can be overwhelming. You may find it challenging to sift through this information and make informed choices that truly align with your profile and career goals.",
        icon: "layers",
      },
      {
        id: "financial-concerns",
        title: "Financial Concerns",
        summary:
          "Tuition, living expenses, scholarships, and funding options across countries create real uncertainty for students and families.",
        detail:
          "Cost is a major factor. Students and their families might face uncertainty regarding tuition fees, living expenses, scholarships, and funding options available in different countries - making early financial clarity essential.",
        icon: "wallet",
      },
      {
        id: "visa-immigration",
        title: "Visa and Immigration Procedures",
        summary:
          "Documentation, deadlines, and legal requirements vary by country and can feel daunting before you've even chosen a destination.",
        detail:
          "Navigating visa requirements and immigration processes can be complex and time-consuming. Understanding the documentation, deadlines, and legal aspects can be daunting when you are still weighing your options.",
        icon: "stamp",
      },
      {
        id: "cultural-adjustment",
        title: "Cultural Adjustment",
        summary:
          "A new culture, language barriers, and social norms can shape your entire experience abroad - preparation starts long before departure.",
        detail:
          "Adapting to a new culture, language barriers, and social norms can pose challenges. This adjustment period may impact a student's overall experience and well-being abroad - something worth planning for from day one.",
        icon: "globe",
      },
      {
        id: "academic-differences",
        title: "Academic Differences",
        summary:
          "Teaching methods, assessment styles, and classroom culture differ widely between India and universities overseas.",
        detail:
          "Differences in educational systems, teaching methods, and assessment styles between countries can create academic challenges for students studying abroad. Knowing what to expect helps you choose the right fit.",
        icon: "book-open",
      },
      {
        id: "career-concerns",
        title: "Career Concerns",
        summary:
          "How will this degree affect employability at home or abroad? Job markets and post-graduation pathways need honest evaluation.",
        detail:
          "Students might worry about how their study abroad experience will impact their future career prospects. Understanding the job market, networking opportunities, and post-graduation prospects in a foreign country can be challenging without expert guidance.",
        icon: "briefcase",
      },
      {
        id: "homesickness",
        title: "Homesickness & Support",
        summary:
          "Distance from family and friends can affect mental health - building a support plan before you leave matters.",
        detail:
          "Being away from family and friends can lead to feelings of homesickness. Lack of a strong support system in the new environment can affect mental health and well-being - a factor families often underestimate at the decision stage.",
        icon: "heart",
      },
      {
        id: "guidance-gap",
        title: "Support & Guidance",
        summary:
          "Many students lack reliable, unbiased counsel at home to navigate the complex study abroad admission process effectively.",
        detail:
          "Students might lack access to proper guidance and resources in their home countries to navigate the complex study abroad admission process effectively. The right mentor changes everything at this stage.",
        icon: "compass",
      },
    ],
  },
  {
    id: "pre-admission",
    label: "Pre-Admission",
    tagline: "Building your profile",
    introTitle: "Pre-admission challenges",
    introBody:
      "Once you commit to studying abroad, the application phase demands precision at every step. International universities require essays, recommendation letters, standardized test scores, and carefully prepared documents - each with its own deadlines and standards. Competing against highly qualified applicants worldwide means your profile, preparation, and timing must be flawless.",
    challenges: [
      {
        id: "application-complexity",
        title: "Application Complexity",
        summary:
          "Essays, recommendation letters, standardized test scores, and university portals - each requirement has its own rules and deadlines.",
        detail:
          "The application process for international universities can be intricate, involving various documents, essays, recommendation letters, and standardized test scores. Understanding and meeting each requirement can be overwhelming without a structured plan.",
        icon: "file-stack",
      },
      {
        id: "language-tests",
        title: "Language Proficiency Tests",
        summary:
          "IELTS, TOEFL, or PTE scores must meet strict cut-offs - particularly demanding for non-native English speakers.",
        detail:
          "Many universities require language proficiency tests like TOEFL or IELTS. Achieving the required scores can be challenging, particularly for non-native speakers who need targeted coaching and realistic timelines.",
        icon: "languages",
      },
      {
        id: "deadlines",
        title: "Navigating Admission Deadlines",
        summary:
          "Universities worldwide run on different timelines - missing one deadline can push your entire plan back by a year.",
        detail:
          "Different universities worldwide have varying application deadlines. Keeping track of these deadlines while ensuring all materials are submitted on time can be stressful without a central tracker and mentor oversight.",
        icon: "calendar",
      },
      {
        id: "credential-translation",
        title: "Translating Academic Credentials",
        summary:
          "Converting Indian transcripts, grades, and qualifications to meet foreign university standards takes expertise and precision.",
        detail:
          "Understanding and converting academic transcripts, grades, and qualifications from different educational systems to meet the requirements of foreign universities can be complex and time-consuming.",
        icon: "scale",
      },
      {
        id: "financial-planning",
        title: "Financial Planning",
        summary:
          "Tuition, accommodation, living costs, and proof-of-funds for visas - budgeting early prevents last-minute surprises.",
        detail:
          "Estimating and managing the costs of tuition fees, living expenses, accommodation, and potential scholarships or financial aid can be discouraging. Students often face uncertainty regarding their financial capacity and funding options.",
        icon: "piggy-bank",
      },
      {
        id: "visa-prep",
        title: "Visa and Immigration Procedures",
        summary:
          "Paperwork, interviews, and legal compliance often begin before your admit letter arrives - preparation cannot wait.",
        detail:
          "Securing the necessary visas and understanding immigration regulations can be a significant hurdle. Navigating paperwork, interviews, and meeting legal requirements can be challenging during the application phase itself.",
        icon: "shield",
      },
      {
        id: "admission-interviews",
        title: "Adapting to Admission Interviews",
        summary:
          "University interviews in a different cultural context require preparation beyond academic knowledge alone.",
        detail:
          "Some universities conduct interviews as part of their admission process. Preparing for and acing these interviews, especially in a different cultural context, can be stressful without mock sessions and feedback.",
        icon: "mic",
      },
      {
        id: "competition",
        title: "Competition",
        summary:
          "Global applicant pools are intensely competitive - standing out requires a differentiated, authentic profile.",
        detail:
          "The global nature of study abroad programs means intense competition among applicants. Standing out amidst a pool of highly qualified candidates can be a challenge that demands strategic profile building.",
        icon: "trophy",
      },
    ],
  },
  {
    id: "post-admission",
    label: "Post-Admission",
    tagline: "Landing & thriving abroad",
    introTitle: "Post-admission challenges",
    introBody:
      "Receiving your acceptance letter is a milestone - not the finish line. The path from admit to arrival involves visa processing, financial planning, housing, healthcare, travel logistics, and emotional preparation. Each step carries its own complexities, and navigating them with the right support ensures a smooth transition into your new academic life abroad.",
    challenges: [
      {
        id: "visa-final",
        title: "Visa and Immigration Procedures",
        summary:
          "Embassy appointments, documentation, and compliance checks demand meticulous attention after your admit arrives.",
        detail:
          "Navigating the visa application process can be complex and time-consuming. Students may encounter difficulties in obtaining the necessary documentation, meeting visa requirements, and scheduling embassy appointments.",
        icon: "stamp",
      },
      {
        id: "finance-abroad",
        title: "Financial Planning",
        summary:
          "Currency exchange, banking setup, tuition payments, and daily budgeting in a new country need a clear plan.",
        detail:
          "Managing finances for tuition fees, accommodation, living expenses, and travel costs can be challenging. Students may face uncertainties about currency exchange rates, banking procedures, and budgeting for their time abroad.",
        icon: "wallet",
      },
      {
        id: "housing",
        title: "Housing Arrangements",
        summary:
          "Finding safe, affordable accommodation in an unfamiliar rental market is one of the biggest pre-departure hurdles.",
        detail:
          "Securing suitable accommodation in the destination country can be daunting, especially if students are unfamiliar with local housing markets, rental procedures, and safety considerations.",
        icon: "home",
      },
      {
        id: "healthcare",
        title: "Healthcare & Insurance",
        summary:
          "Understanding coverage, clinics, and pre-existing condition requirements in a foreign healthcare system takes research.",
        detail:
          "Understanding healthcare systems, obtaining health insurance coverage, and accessing medical services in a foreign country can be challenging. Students may need to navigate unfamiliar healthcare processes and address any pre-existing health concerns.",
        icon: "heart-pulse",
      },
      {
        id: "academic-prep",
        title: "Academic Preparation",
        summary:
          "Course materials, academic standards, and assessment methods at your destination university deserve early attention.",
        detail:
          "Preparing for academic requirements and expectations at the destination university can be stressful. Students may need to familiarize themselves with course materials, academic standards, and assessment methods to ensure a smooth transition.",
        icon: "graduation-cap",
      },
      {
        id: "logistics",
        title: "Logistical Arrangements",
        summary:
          "Flights, airport transfers, luggage limits, customs rules, and shipping belongings all require careful coordination.",
        detail:
          "Organizing travel logistics, such as booking flights, transportation from the airport, and shipping belongings, requires careful planning. Students may encounter logistical challenges related to luggage allowances, customs regulations, and transportation options.",
        icon: "plane",
      },
      {
        id: "emotional-support",
        title: "Emotional Support",
        summary:
          "Homesickness, loneliness, and separation from family can be emotionally taxing - support networks matter.",
        detail:
          "Coping with homesickness, loneliness, and separation from family and friends can be emotionally taxing. Students may need access to support networks, counseling services, and resources for mental health and well-being.",
        icon: "users",
      },
      {
        id: "legal-admin",
        title: "Legal & Administrative Obligations",
        summary:
          "Residency rules, employment regulations, and tax obligations abroad involve bureaucratic processes that take time.",
        detail:
          "Understanding legal rights and responsibilities, such as residency requirements, employment regulations, and tax obligations, is essential for students living abroad. Navigating bureaucratic processes and administrative tasks can be time-consuming and complex.",
        icon: "gavel",
      },
      {
        id: "safety",
        title: "Safety & Security",
        summary:
          "Local laws, emergency procedures, and personal safety awareness are paramount in any new environment.",
        detail:
          "Ensuring personal safety and security in a new environment is paramount. Students may need to familiarize themselves with local laws, emergency procedures, and safety precautions to mitigate risks and stay safe while studying abroad.",
        icon: "shield-check",
      },
    ],
  },
];

export type TimelinePhase = {
  id: string;
  phase: string;
  timeframe: string;
  monthsBefore: string;
  color: string;
  steps: string[];
};

export const timelinePhases: TimelinePhase[] = [
  {
    id: "exploration",
    phase: "Exploration",
    timeframe: "24-30 months before departure",
    monthsBefore: "24-30 mo",
    color: "#3038CF",
    steps: [
      "Research destinations & self-assessment",
      "Explore universities and programs",
      "Begin language proficiency prep",
      "Start financial planning & scholarships",
    ],
  },
  {
    id: "preparation",
    phase: "Preparation",
    timeframe: "14-16 months before departure",
    monthsBefore: "14-16 mo",
    color: "#1e40af",
    steps: [
      "Shortlist target universities",
      "Prepare for entrance & language exams",
      "Build academic & extracurricular profile",
      "Gather recommendations & documents",
    ],
  },
  {
    id: "application",
    phase: "Application",
    timeframe: "12-14 months before departure",
    monthsBefore: "12-14 mo",
    color: "#059669",
    steps: [
      "Submit university applications",
      "Apply for scholarships & aid",
      "Track responses & follow up",
    ],
  },
  {
    id: "pre-departure",
    phase: "Pre-Departure",
    timeframe: "3-6 months before departure",
    monthsBefore: "3-6 mo",
    color: "#d97706",
    steps: [
      "Accept offers & confirm enrollment",
      "Complete visa application",
      "Arrange accommodation & travel",
      "Attend pre-departure briefing",
    ],
  },
  {
    id: "departure",
    phase: "Departure",
    timeframe: "1-2 months before departure",
    monthsBefore: "1-2 mo",
    color: "#dc2626",
    steps: [
      "Pack essentials & organize documents",
      "Cultural & emotional preparation",
      "Depart - your global chapter begins",
    ],
  },
];

export const kareerApproach = [
  {
    title: "Scientific Assessment First",
    body: "Study Abroad Readiness and career assessments reveal where you stand before any country is chosen.",
  },
  {
    title: "Personalized Roadmap",
    body: "Every plan is built around your profile, budget, career goals, and family context - never a template.",
  },
  {
    title: "End-to-End Application Support",
    body: "From shortlisting to essays, tests, and interviews - structured deadlines so nothing is left to chance.",
  },
  {
    title: "Beyond the Admit Letter",
    body: "Visa, housing, finances, and pre-departure prep - we stay with you until you land confidently.",
  },
];
