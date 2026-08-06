export const ivyLeagueHero = {
  eyebrow: "Ivy League Admissions",
  quote: "Ivy League doesn't mean perfect.\nIt means purposeful.",
  stripeHeading: "Ivy League Admissions",
  stripeTagline: "Your future starts at the top - Harvard, Yale, Princeton, Columbia & beyond.",
};

export const ivyLeagueStats = [
  { value: 8, suffix: "", label: "Ivy League Universities" },
  { value: 200, suffix: "+", label: "Student Offers Secured" },
  { value: 95, suffix: "%", label: "Interview Success Rate" },
  { value: 60, suffix: "+", label: "Minimum SAGE Score for Candidacy" },
];

export const ivyLeagueOrigin = {
  eyebrow: "What Is the Ivy League?",
  title: "Eight universities. One century-old legacy.",
  paragraphs: [
    "The term \"Ivy League\" was coined in 1937 by sportswriter Coffaswell Adams while covering a football game between Columbia and the University of Pennsylvania. He described the old \"ivy-covered\" campuses of these schools - and the name stuck.",
    "The Ivy League is a group of eight private universities in the northeastern United States, originally united in the 1950s as an NCAA Division I athletic conference. Their fierce, competitive sports programs attracted major funding, research grants, and world-renowned faculty.",
    "Over time, athletic excellence was matched by outstanding academic performance - earning these eight institutions a reputation as some of the most prestigious universities on Earth, recognized far beyond the United States.",
  ],
};

export type University = {
  id: string;
  name: string;
  location: string;
  acceptanceRate: number;
  highlights: string[];
};

/** Ordered by acceptance rate, most competitive first */
export const universities: University[] = [
  {
    id: "harvard",
    name: "Harvard University",
    location: "Massachusetts",
    acceptanceRate: 3.5,
    highlights: [
      "The oldest Ivy League institution",
      "Renowned for research, diversity, and industry involvement",
      "Famous for law, computer science, economics, medicine & science",
    ],
  },
  {
    id: "yale",
    name: "Yale University",
    location: "New Haven, Connecticut",
    acceptanceRate: 3.7,
    highlights: [
      "Famous for rigorous programs spanning arts, sciences & humanities",
      "Deep tradition of residential college life and debate",
    ],
  },
  {
    id: "columbia",
    name: "Columbia University",
    location: "New York City",
    acceptanceRate: 3.85,
    highlights: [
      "Wide range of courses across arts and sciences",
      "Distinguished alumni groups and greater academic legacy",
    ],
  },
  {
    id: "princeton",
    name: "Princeton University",
    location: "New Jersey",
    acceptanceRate: 4.6,
    highlights: [
      "Particularly recognized for its undergraduate programs",
      "Emphasizes critical thinking and independent research",
    ],
  },
  {
    id: "dartmouth",
    name: "Dartmouth College",
    location: "Hanover, New Hampshire",
    acceptanceRate: 5.3,
    highlights: [
      "Enhanced relationships between students and faculty",
      "Well-known for its focus on liberal arts education",
    ],
  },
  {
    id: "brown",
    name: "Brown University",
    location: "Rhode Island",
    acceptanceRate: 5.4,
    highlights: [
      "Freedom to design your own education plan",
      "Most research-oriented, with higher community involvement",
    ],
  },
  {
    id: "upenn",
    name: "University of Pennsylvania",
    location: "Philadelphia",
    acceptanceRate: 6,
    highlights: [
      "Known for integrating disciplines in its academic approach",
      "Founded in part by Benjamin Franklin",
    ],
  },
  {
    id: "cornell",
    name: "Cornell University",
    location: "Upstate New York",
    acceptanceRate: 7.5,
    highlights: [
      "Widest range of programs - from agriculture to engineering",
      "Broad academic scope across every discipline",
    ],
  },
];

export type WhyIvyItem = {
  id: string;
  title: string;
  body: string;
  icon: string;
};

export const whyIvyLeague: WhyIvyItem[] = [
  {
    id: "prestige",
    title: "Academic Prestige That Opens Doors",
    body: "Ivy League degrees are globally recognized and instantly associated with brilliance, leadership, and integrity - from Wall Street to Silicon Valley, from the UN to NASA. An Ivy degree isn't just education, it's brand capital for life.",
    icon: "award",
  },
  {
    id: "career-outcomes",
    title: "Exceptional Career Outcomes",
    body: "Graduates consistently earn higher salaries and secure positions at McKinsey, BCG, Google, Apple, Goldman Sachs, and leading global NGOs - with average starting salaries often exceeding $100,000 a year.",
    icon: "trending-up",
  },
  {
    id: "faculty-research",
    title: "World-Class Faculty & Research",
    body: "Students work alongside Nobel laureates, Pulitzer Prize winners, and industry pioneers - with access to advanced research labs and innovation hubs in AI, biotech, climate, and social impact.",
    icon: "flask",
  },
  {
    id: "global-diversity",
    title: "Global Diversity & Exposure",
    body: "Ivy campuses attract the brightest minds from 150+ countries, creating a rich, collaborative environment through global internships, study abroad, and multicultural perspectives.",
    icon: "globe",
  },
  {
    id: "work-settlement",
    title: "Work & Settlement Advantages",
    body: "3-year OPT for STEM students, high acceptance rates for H-1B work visas, and pathways to EB Green Card / PR through top employers - graduates often transition smoothly into long-term U.S. careers.",
    icon: "plane",
  },
  {
    id: "alumni-network",
    title: "Elite Alumni Network",
    body: "Ivy League universities maintain powerful alumni networks across every industry - CEOs, scientists, diplomats, Oscar winners, and Pulitzer authors. An Ivy contact is often a career catalyst.",
    icon: "network",
  },
  {
    id: "flexible-learning",
    title: "Flexible, Interdisciplinary Learning",
    body: "Freedom to choose majors and minors, mix disciplines like CS + Economics or Biology + Ethics, and explore entrepreneurship, design, and public policy within any program.",
    icon: "shuffle",
  },
];

export type IvyScorePoint = {
  id: string;
  order: number;
  title: string;
  tagline: string;
  summary: string;
  musts: string[];
  proTip?: string;
};

export const ivyScorePoints: IvyScorePoint[] = [
  {
    id: "academic-excellence",
    order: 1,
    title: "Academic Excellence",
    tagline: "Not just perfect scores",
    summary: "Ivy Leagues want intellectual curiosity, not just report cards.",
    musts: [
      "Top 5-10% class ranking or equivalent (90%+ in CBSE/ICSE/IB)",
      "High SAT/ACT scores (typically 1450+ SAT or 32+ ACT)",
      "Strong AP/IB/Advanced coursework where available",
      "National or international academic achievements (Olympiads, NTSE, board toppers)",
    ],
    proTip:
      "Deep engagement with learning outside the classroom - research, MOOCs, passion projects - counts more than just marks.",
  },
  {
    id: "spike",
    order: 2,
    title: "Spike in One Area",
    tagline: "Not just an all-rounder",
    summary:
      "Ivy schools prefer students who go deep and wide in one compelling area - outliers, not checklist-followers.",
    musts: [
      "Published author at age 17",
      "Founded a startup or NGO with measurable impact",
      "Conducted original research, even pre-college",
      "Olympiad medalist or national-level athlete",
      "Built an AI tool solving a real-world problem",
    ],
  },
  {
    id: "leadership",
    order: 3,
    title: "Leadership & Initiative",
    tagline: "Self-starters and bold thinkers",
    summary: "Ivy Leagues love changemakers. Leadership isn't always titles - it's impact and ownership.",
    musts: [
      "Founded or led a club, initiative, campaign, or business",
      "Took leadership in a crisis (e.g., COVID volunteering, education access)",
      "Started a podcast, YouTube channel, or publication",
      "Mentored juniors or built community initiatives",
    ],
  },
  {
    id: "global-impact",
    order: 4,
    title: "Global or Social Impact",
    tagline: "Thinking beyond yourself",
    summary: "Ivy Leagues seek future global leaders, activists, entrepreneurs, and scientists.",
    musts: [
      "Started a rural education initiative",
      "Built a platform connecting underprivileged students to tutors",
      "Published policy research or attended UN youth summits",
      "Developed tech for sustainability or public health",
    ],
  },
  {
    id: "storytelling",
    order: 5,
    title: "Authentic, Reflective Storytelling",
    tagline: "Your essay is your soul on paper",
    summary: "A well-written, introspective essay can outweigh small gaps in scores.",
    musts: [
      "Honesty over perfection",
      "Unique life experiences or identity",
      "Personal challenges and growth",
      "Deep self-awareness and lived passion",
    ],
  },
  {
    id: "curiosity",
    order: 6,
    title: "Engagement with Learning",
    tagline: "Intellectual curiosity, always on",
    summary: "Ivy Leagues are academic havens - they want students who nerd out, passionately.",
    musts: [
      "Started a blog or research journal",
      "Pursued university-level coursework via Coursera, EdX, etc.",
      "Connected academic interest with real-world application",
    ],
  },
  {
    id: "recommendations",
    order: 7,
    title: "Strong Recommendations",
    tagline: "Third-party endorsements with depth",
    summary: "A strong, honest letter from a teacher who knows you well beats one from a famous name who doesn't.",
    musts: [
      "Highlights intellectual spark, classroom presence, initiative",
      "Shows how you grew and helped others",
      "Feels personal - not generic",
    ],
  },
  {
    id: "context",
    order: 8,
    title: "Financial Need & Background",
    tagline: "Context matters, not mandatory",
    summary:
      "Ivy Leagues are need-blind or need-aware, but do consider context. If you've overcome adversity - share it, don't hide it.",
    musts: [
      "Overcoming hardship (financial, social, personal)",
      "Being a first-generation college applicant",
      "Living in underrepresented regions or minority groups",
    ],
  },
];

export type ComparisonFactor = {
  id: string;
  label: string;
  icon: string;
  ivy: string;
  india: string;
  uk: string;
  canada: string;
  /** 1-5 strength for visual comparison bars */
  ivyScore: number;
  indiaScore: number;
  ukScore: number;
  canadaScore: number;
  /** Plain-language takeaway for parents */
  parentTip: string;
};

export const comparisonDestinations = [
  { key: "ivy" as const, label: "Ivy League", short: "USA", color: "#8c1d2b" },
  { key: "india" as const, label: "India", short: "IIT / DU", color: "#3038CF" },
  { key: "uk" as const, label: "UK", short: "Oxford", color: "#059669" },
  { key: "canada" as const, label: "Canada", short: "Toronto", color: "#d97706" },
];

export const comparisonFactors: ComparisonFactor[] = [
  {
    id: "recognition",
    label: "Global Recognition",
    icon: "globe",
    ivy: "Brand power in 190+ countries",
    india: "Strong in India, moderate abroad",
    uk: "High in Europe & Asia",
    canada: "Recognized in N. America & Asia",
    ivyScore: 5,
    indiaScore: 3,
    ukScore: 4,
    canadaScore: 4,
    parentTip: "An Ivy degree opens doors worldwide - employers in the US, Europe, and Asia recognize the name instantly.",
  },
  {
    id: "salary",
    label: "Salary & ROI",
    icon: "trending-up",
    ivy: "$100K+ avg. starting salary in top firms",
    india: "₹15L-25L avg. placement packages",
    uk: "£30K-50K salary; limited work rights",
    canada: "C$60K avg. salary; moderate ROI",
    ivyScore: 5,
    indiaScore: 3,
    ukScore: 3,
    canadaScore: 4,
    parentTip: "Ivy graduates consistently earn the highest starting salaries - often 3-4× Indian packages when converted.",
  },
  {
    id: "flexibility",
    label: "Academic Flexibility",
    icon: "shuffle",
    ivy: "Change majors, explore interdisciplinary fields",
    india: "Very rigid; locked-in streams",
    uk: "Medium flexibility",
    canada: "Medium-high flexibility",
    ivyScore: 5,
    indiaScore: 2,
    ukScore: 3,
    canadaScore: 4,
    parentTip: "Your child can switch from Economics to Computer Science - Ivy campuses encourage exploration, not lock-in.",
  },
  {
    id: "research",
    label: "Research Access",
    icon: "flask",
    ivy: "Nobel-winning faculty, cutting-edge innovation hubs",
    india: "Limited labs, tight funding",
    uk: "Excellent research reputation",
    canada: "Good access to research funding",
    ivyScore: 5,
    indiaScore: 2,
    ukScore: 5,
    canadaScore: 4,
    parentTip: "Undergraduates work alongside Nobel laureates and publish research - rare at most Indian universities.",
  },
  {
    id: "safety",
    label: "Safety & Student Life",
    icon: "shield-check",
    ivy: "24x7 care, global diversity, vibrant campus life",
    india: "Limited support, competitive pressure",
    uk: "Good safety, some mental health services",
    canada: "Among the safest globally",
    ivyScore: 4,
    indiaScore: 3,
    ukScore: 4,
    canadaScore: 5,
    parentTip: "Ivy campuses offer round-the-clock support, counseling, and a globally diverse peer community.",
  },
  {
    id: "visa",
    label: "Visa & PR Path",
    icon: "stamp",
    ivy: "OPT (3 yrs) + H1B + EB PR access",
    india: "No mobility unless applying abroad",
    uk: "2 yrs stay-back; strict PR path",
    canada: "Post-grad work permit + PR pathway",
    ivyScore: 5,
    indiaScore: 1,
    ukScore: 3,
    canadaScore: 5,
    parentTip: "STEM graduates get 3 years of US work authorization - a direct path to H-1B and long-term residency.",
  },
  {
    id: "alumni",
    label: "Alumni Network",
    icon: "network",
    ivy: "Ivy alumni in top policy, VC, tech & UN bodies",
    india: "Tech-focused, limited abroad",
    uk: "Academic & public sector focused",
    canada: "Strong in North America",
    ivyScore: 5,
    indiaScore: 3,
    ukScore: 4,
    canadaScore: 4,
    parentTip: "One Ivy connection can unlock internships at Goldman Sachs, Google, or the UN - the network is lifelong.",
  },
  {
    id: "outcomes",
    label: "Post-Degree Outcomes",
    icon: "briefcase",
    ivy: "Global career & settlement opportunities",
    india: "Mostly domestic career paths",
    uk: "Limited global roles unless PhD/Law/Med",
    canada: "Balanced opportunities + PR",
    ivyScore: 5,
    indiaScore: 2,
    ukScore: 3,
    canadaScore: 4,
    parentTip: "Ivy alumni lead at McKinsey, NASA, Silicon Valley startups, and global NGOs - careers without borders.",
  },
];

export const whoShouldConsider = [
  "CBSE / ICSE / IB / Cambridge Board students",
  "IIT, NIT, BITS, IIIT aspirants or students",
  "Families with ₹80L+ annual income",
  "Parents who value global legacy & outcomes",
  "Families that value global exposure, elite networks & long-term ROI",
  "Students scoring 60+ on the SAGE (Scholastic Aptitude for Global Excellence) test",
];

export type IvyService = {
  title: string;
  body: string;
};

export const ivyServices: IvyService[] = [
  {
    title: "1:1 Mentoring",
    body: "Personal guidance from mentors and Ivy League alumni, starting as early as Grade 8.",
  },
  {
    title: "Profile Building",
    body: "Structured extracurricular, leadership, and impact-project planning aligned with your spike area.",
  },
  {
    title: "Essay & SOP Support",
    body: "Authentic, reflective storytelling that turns your lived experience into a compelling personal essay.",
  },
  {
    title: "Application Strategy",
    body: "College shortlisting, deadline tracking, and a differentiated strategy across every application.",
  },
  {
    title: "Interview Prep",
    body: "Mock interviews and feedback loops that built our 95% interview success rate.",
  },
  {
    title: "Scholarship & Financial Aid Guidance",
    body: "Navigating need-based aid, funding documentation, and visa-readiness financial planning.",
  },
];

export type ChecklistItem = {
  task: string;
  timing: string;
};

export const studentChecklist: ChecklistItem[] = [
  { task: "Maintain a high GPA (ICSE/CBSE/IB)", timing: "Year-round" },
  { task: "Prepare for SAT / ACT / TOEFL", timing: "Grade 10-11" },
  { task: "Build extracurriculars - Olympiads, MUN, volunteering, internships", timing: "Start by Grade 9" },
  { task: "Identify leadership & community projects", timing: "Grade 9-11" },
  { task: "Begin college research", timing: "Grade 10" },
  { task: "Draft personal statement (essays)", timing: "Grade 11" },
  { task: "Build recommender relationships with teachers & mentors", timing: "Grade 11" },
  { task: "Finalize college list & deadlines", timing: "Grade 11-12" },
  { task: "Submit CommonApp / Coalition App", timing: "Sept-Jan (Grade 12)" },
  { task: "Practice for interviews", timing: "Jan-Feb of application year" },
];

export const parentChecklist: ChecklistItem[] = [
  { task: "Attend orientation or consultation with a mentor", timing: "As early as Grade 9" },
  { task: "Plan financials - tuition, living costs, investments", timing: "Grade 9-10" },
  { task: "Understand financial aid / scholarship options", timing: "Grade 10-11" },
  { task: "Plan travel & visa timelines", timing: "After offers (Apr-June)" },
  { task: "Monitor application deadlines", timing: "Grade 11-12" },
  { task: "Prepare funding documents for visa / scholarship", timing: "Grade 12" },
  { task: "Support your child's mental & emotional readiness", timing: "Always" },
];

export const ivyFinalCta = {
  title: "Your Child Is Exceptional. Let Their Education Match That.",
  assurances: [
    "Personalized Ivy Admission Roadmap",
    "Elite Mentors from Ivy Leagues",
    "ROI-Backed Strategy for Global Impact",
  ],
};

export type ProfilePhaseId = "foundation" | "acceleration" | "application";

export type IvyProfilePillar = {
  id: string;
  title: string;
  summary: string;
  icon: string;
};

export type ProfilePhase = {
  id: ProfilePhaseId;
  label: string;
  tagline: string;
  introTitle: string;
  introBody: string;
  pillars: IvyProfilePillar[];
};

export const profilePhases: ProfilePhase[] = [
  {
    id: "foundation",
    label: "Foundation",
    tagline: "Grades 8-9",
    introTitle: "Lay the groundwork early",
    introBody:
      "Ivy admissions are won years before senior year. The foundation phase is about discovering your spike, building academic discipline, and starting the extracurricular narrative that will define your application - without burning out.",
    pillars: [
      {
        id: "sage-assessment",
        title: "SAGE Assessment",
        summary:
          "Take the Scholastic Aptitude for Global Excellence test to benchmark readiness and identify strengths worth building on.",
        icon: "target",
      },
      {
        id: "academic-discipline",
        title: "Academic Discipline",
        summary:
          "Maintain top-tier grades across CBSE, ICSE, or IB - Ivy committees look for sustained excellence, not a last-minute sprint.",
        icon: "book-open",
      },
      {
        id: "spike-discovery",
        title: "Discover Your Spike",
        summary:
          "Identify the one area you'll go deep in - research, entrepreneurship, arts, athletics, or social impact.",
        icon: "zap",
      },
      {
        id: "early-extracurriculars",
        title: "Early Extracurriculars",
        summary:
          "Join clubs, Olympiads, MUN, or volunteering - depth and consistency matter more than a long list of activities.",
        icon: "users",
      },
      {
        id: "intellectual-curiosity",
        title: "Intellectual Curiosity",
        summary:
          "Start a reading habit, blog, or passion project that shows you love learning beyond the classroom.",
        icon: "lightbulb",
      },
      {
        id: "parent-planning",
        title: "Parent Financial Planning",
        summary:
          "Families begin tuition planning, scholarship research, and mentor consultations as early as Grade 9.",
        icon: "wallet",
      },
      {
        id: "summer-exploration",
        title: "Summer Programs",
        summary:
          "Explore selective summer programs, research internships, or academic camps that align with your spike.",
        icon: "sun",
      },
      {
        id: "mentor-match",
        title: "Mentor Orientation",
        summary:
          "Connect with an Ivy-aware mentor who can map a multi-year roadmap tailored to your profile and goals.",
        icon: "compass",
      },
    ],
  },
  {
    id: "acceleration",
    label: "Acceleration",
    tagline: "Grades 10-11",
    introTitle: "Build a profile that stands out",
    introBody:
      "This is where outliers separate from checklist-followers. Standardized tests, leadership projects, original research, and authentic storytelling all converge - every month counts toward a differentiated application.",
    pillars: [
      {
        id: "sat-act",
        title: "SAT / ACT Preparation",
        summary:
          "Target 1450+ SAT or 32+ ACT. Start prep in Grade 10 and complete testing by early Grade 11.",
        icon: "pen-line",
      },
      {
        id: "leadership-spike",
        title: "Leadership & Spike Projects",
        summary:
          "Found a club, NGO, startup, or campaign with measurable impact - Ivy schools want changemakers, not passive participants.",
        icon: "trophy",
      },
      {
        id: "research",
        title: "Original Research",
        summary:
          "Conduct pre-college research, publish findings, or build a tool that solves a real-world problem in your spike area.",
        icon: "flask",
      },
      {
        id: "college-research",
        title: "College Research",
        summary:
          "Shortlist target Ivies by fit - academic strengths, campus culture, financial aid policies, and program offerings.",
        icon: "search",
      },
      {
        id: "essay-drafting",
        title: "Essay Drafting",
        summary:
          "Begin personal statement drafts in Grade 11. Authentic, reflective storytelling is your soul on paper.",
        icon: "file-text",
      },
      {
        id: "recommenders",
        title: "Recommender Relationships",
        summary:
          "Build genuine relationships with teachers who know your intellectual spark - strong letters beat famous names.",
        icon: "heart",
      },
      {
        id: "competitions",
        title: "Olympiads & Competitions",
        summary:
          "National or international achievements - Olympiad medals, NTSE, debate championships - signal academic outliers.",
        icon: "medal",
      },
      {
        id: "community-impact",
        title: "Community Impact at Scale",
        summary:
          "Scale your social initiative - rural education, sustainability, mental health awareness - with documented outcomes.",
        icon: "globe",
      },
    ],
  },
  {
    id: "application",
    label: "Application Season",
    tagline: "Grade 12",
    introTitle: "Execute with precision",
    introBody:
      "Application season demands flawless execution - every essay, deadline, interview, and financial aid form must be strategic. With under 4% acceptance rates at top Ivies, there is zero margin for error.",
    pillars: [
      {
        id: "common-app",
        title: "CommonApp / Coalition App",
        summary:
          "Submit polished applications between September and January - each supplement tailored to the specific university.",
        icon: "file-stack",
      },
      {
        id: "supplemental-essays",
        title: "Supplemental Essays",
        summary:
          "Craft school-specific essays that show genuine fit - why this Ivy, why this program, why now.",
        icon: "pen-tool",
      },
      {
        id: "early-decision",
        title: "Early Decision Strategy",
        summary:
          "Evaluate ED/EA vs. Regular Decision for each school - binding early apps can boost odds but limit options.",
        icon: "calendar",
      },
      {
        id: "interviews",
        title: "Alumni Interviews",
        summary:
          "Prepare for conversational alumni interviews with mock sessions - our students achieve a 95% success rate.",
        icon: "mic",
      },
      {
        id: "financial-aid",
        title: "Financial Aid Forms",
        summary:
          "Complete CSS Profile, FAFSA, and institutional aid forms - Ivy schools are need-blind or need-aware.",
        icon: "piggy-bank",
      },
      {
        id: "offer-decisions",
        title: "Offer Decisions",
        summary:
          "Compare admit letters, financial packages, and campus visits before making your final enrollment choice.",
        icon: "mail",
      },
      {
        id: "visa-prep",
        title: "Visa & Travel Planning",
        summary:
          "After offers (April-June), begin F-1 visa documentation, funding proofs, and travel arrangements.",
        icon: "plane",
      },
      {
        id: "enrollment",
        title: "Enrollment & Transition",
        summary:
          "Confirm enrollment, attend pre-orientation, and prepare academically and emotionally for your Ivy chapter.",
        icon: "graduation-cap",
      },
    ],
  },
];

export type IvyTimelinePhase = {
  id: string;
  phase: string;
  timeframe: string;
  gradeLabel: string;
  color: string;
  steps: string[];
};

export const ivyTimelinePhases: IvyTimelinePhase[] = [
  {
    id: "discovery",
    phase: "Discovery",
    timeframe: "Grade 8 - 48 months before enrollment",
    gradeLabel: "Grade 8",
    color: "#8c1d2b",
    steps: [
      "Take the SAGE assessment to benchmark Ivy readiness",
      "Explore what the Ivy League means for your goals",
      "Begin mentor consultations with KAREER Studio",
      "Identify academic strengths and potential spike areas",
    ],
  },
  {
    id: "foundation",
    phase: "Foundation",
    timeframe: "Grades 9-10 - 30-36 months before",
    gradeLabel: "Grades 9-10",
    color: "#3038CF",
    steps: [
      "Maintain top 5-10% class ranking across all subjects",
      "Start extracurriculars with depth - clubs, Olympiads, MUN",
      "Parents plan tuition, living costs, and scholarship options",
      "Explore summer programs aligned with your spike",
    ],
  },
  {
    id: "acceleration",
    phase: "Acceleration",
    timeframe: "Grades 10-11 - 12-18 months before",
    gradeLabel: "Grades 10-11",
    color: "#059669",
    steps: [
      "Complete SAT/ACT with target scores (1450+ / 32+)",
      "Launch leadership or impact projects with measurable outcomes",
      "Draft personal statement and build recommender relationships",
      "Shortlist Ivy schools by fit, aid policy, and program strength",
    ],
  },
  {
    id: "application",
    phase: "Application",
    timeframe: "Grade 12 - 6-12 months before",
    gradeLabel: "Grade 12",
    color: "#d97706",
    steps: [
      "Submit CommonApp / Coalition applications (Sept-Jan)",
      "Complete supplemental essays for each target school",
      "Attend alumni interviews and submit financial aid forms",
      "Track Early Decision, Early Action, and Regular deadlines",
    ],
  },
  {
    id: "decision",
    phase: "Decision & Departure",
    timeframe: "Spring-Summer - enrollment month",
    gradeLabel: "Post-Admit",
    color: "#1e40af",
    steps: [
      "Compare offers, aid packages, and campus visit impressions",
      "Confirm enrollment and begin F-1 visa processing",
      "Prepare funding documents and travel logistics",
      "Attend pre-orientation - your Ivy chapter begins",
    ],
  },
];
