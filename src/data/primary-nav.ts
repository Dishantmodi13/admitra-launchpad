export type PrimaryNavItem = {
  key: string;
  label: string;
  to: string;
};

export const primaryNavItems: PrimaryNavItem[] = [
  { key: "education-planning", label: "Education Planning", to: "/education-planning" },
  { key: "study-abroad", label: "Study Abroad", to: "/study-abroad" },
  { key: "ivy-league", label: "Ivy League", to: "/ivy-league" },
  { key: "coaching", label: "Coaching", to: "/coaching" },
  { key: "assessments", label: "Assessment Center", to: "/assessments" },
];

export const coachingDropdownItems: PrimaryNavItem[] = [
  { key: "scholastic-language", label: "Scholastic & Language", to: "/coaching/scholastic-language" },
  { key: "ielts", label: "IELTS Coaching", to: "/coaching/ielts" },
  { key: "gre", label: "GRE Coaching", to: "/coaching/gre" },
  { key: "sat", label: "SAT Coaching", to: "/coaching/sat" },
  { key: "pte", label: "PTE Coaching", to: "/coaching/pte" },
];

export const footerNavItems: PrimaryNavItem[] = [
  { key: "home", label: "Home", to: "/" },
  ...primaryNavItems,
];

export function heroNavLinks(excludeKeys: string[] = []) {
  const items: PrimaryNavItem[] = [
    { key: "home", label: "Home", to: "/" },
    ...primaryNavItems,
  ];
  return items
    .filter((item) => !excludeKeys.includes(item.key))
    .map(({ key, label, to }) => ({ key, label, to }));
}
