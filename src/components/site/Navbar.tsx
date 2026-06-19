import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import kareerStudioLogo from "@/assets/kareer-studio-logo.png";

const coachingItems = [
  { label: "Scholastic & Language", to: "/coaching" },
  { label: "IELTS Coaching", to: "/coaching" },
  { label: "GRE Coaching", to: "/coaching" },
  { label: "SAT Coaching", to: "/coaching" },
  { label: "PTE Coaching", to: "/coaching" },
];

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "Education Planning", to: "/education-planning" as const },
  { label: "Parenting Coaching", to: "/parenting-coaching" as const },
  { label: "Bookshelf", to: "/bookshelf" as const },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function CoachingDropdown() {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 transition-colors hover:text-foreground">
        Coaching <ChevronDown className="h-3 w-3" />
      </button>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="w-56 rounded-xl border border-border bg-popover p-2 shadow-xl">
          {coachingItems.map((c) => (
            <Link
              key={c.label}
              to={c.to}
              className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [home, educationPlanning, parentingCoaching, bookshelf] = navLinks;

  const closeMobile = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="shrink-0" onClick={scrollToTop}>
          <img
            src={kareerStudioLogo}
            alt="KAREER studio — Powered by ADMITra"
            width={180}
            height={48}
            className="h-9 w-auto object-contain mix-blend-lighten md:h-10"
          />
        </Link>

        <div className="hidden items-center gap-7 text-[13px] font-medium text-muted-foreground lg:flex">
          <Link
            to={home.to}
            className="transition-colors hover:text-foreground"
            onClick={scrollToTop}
          >
            {home.label}
          </Link>
          <Link
            to={educationPlanning.to}
            className="transition-colors hover:text-foreground"
          >
            {educationPlanning.label}
          </Link>
          <CoachingDropdown />
          <Link
            to={parentingCoaching.to}
            className="transition-colors hover:text-foreground"
          >
            {parentingCoaching.label}
          </Link>
          <Link
            to={bookshelf.to}
            className="transition-colors hover:text-foreground"
          >
            {bookshelf.label}
          </Link>
          <a
            href="https://assessments.admitra.io"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-accent px-3 py-1.5 font-mono text-[11px] uppercase tracking-tight text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Assessments →
          </a>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login" className="text-sm font-medium opacity-70 hover:opacity-100">
            Login
          </Link>
          <Link
            to="/register"
            className="text-sm font-medium opacity-70 hover:opacity-100"
          >
            Register
          </Link>
          <Link
            to="/enquiry"
            className="bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent"
          >
            Enquire
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4 text-sm">
            <Link
              to={home.to}
              className="py-2"
              onClick={() => {
                scrollToTop();
                closeMobile();
              }}
            >
              {home.label}
            </Link>
            <Link
              to={educationPlanning.to}
              className="py-2"
              onClick={closeMobile}
            >
              {educationPlanning.label}
            </Link>
            <Link to="/coaching" className="py-2" onClick={closeMobile}>
              Coaching
            </Link>
            <Link
              to={parentingCoaching.to}
              className="py-2"
              onClick={closeMobile}
            >
              {parentingCoaching.label}
            </Link>
            <Link
              to={bookshelf.to}
              className="py-2"
              onClick={closeMobile}
            >
              {bookshelf.label}
            </Link>
            <a
              href="https://assessments.admitra.io"
              target="_blank"
              rel="noreferrer"
              className="py-2 text-accent"
            >
              Assessments Center →
            </a>
            <Link to="/enquiry" className="py-2" onClick={closeMobile}>
              Enquiry
            </Link>
            <div className="mt-2 flex gap-3 border-t border-border pt-3">
              <Link to="/login" onClick={closeMobile}>
                Login
              </Link>
              <Link to="/register" onClick={closeMobile}>
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
