import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const coachingItems = [
  { label: "Scholastic & Language", to: "/coaching" },
  { label: "IELTS Coaching", to: "/coaching" },
  { label: "GRE Coaching", to: "/coaching" },
  { label: "SAT Coaching", to: "/coaching" },
  { label: "PTE Coaching", to: "/coaching" },
];

const navLinks = [
  { label: "Home", to: "/" as const, exact: true },
  { label: "Education Planning", to: "/education-planning" as const },
  { label: "Parenting Coaching", to: "/parenting-coaching" as const },
  { label: "Bookshelf", to: "/bookshelf" as const },
];

const navUnderline =
  "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-300 after:content-['']";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function isActivePath(pathname: string, path: string, exact?: boolean) {
  return exact ? pathname === path : pathname === path;
}

function scrollIfActive(
  pathname: string,
  path: string,
  exact?: boolean,
  onAfter?: () => void,
) {
  if (isActivePath(pathname, path, exact)) {
    scrollToTop();
  }
  onAfter?.();
}

function NavLink({
  to,
  children,
  exact,
  pathname,
  onClick,
  className,
  activeClassName,
}: {
  to: string;
  children: ReactNode;
  exact?: boolean;
  pathname: string;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
}) {
  return (
    <Link
      to={to}
      onClick={() => scrollIfActive(pathname, to, exact, onClick)}
      activeOptions={{ exact }}
      className={cn(
        "relative transition-colors duration-300",
        navUnderline,
        className,
      )}
      activeProps={{
        className: cn(
          "text-foreground font-medium after:scale-x-100",
          activeClassName,
        ),
      }}
    >
      {children}
    </Link>
  );
}

function CoachingDropdown({
  isActive,
  pathname,
}: {
  isActive: boolean;
  pathname: string;
}) {
  return (
    <div className="group relative">
      <Link
        to="/coaching"
        onClick={() => scrollIfActive(pathname, "/coaching")}
        className={cn(
          "relative flex items-center gap-1 transition-colors duration-300",
          navUnderline,
          isActive
            ? "font-medium text-foreground after:scale-x-100"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        Coaching <ChevronDown className="h-3 w-3" />
      </Link>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="w-56 rounded-xl border border-border bg-background p-2 shadow-xl">
          {coachingItems.map((c) => (
            <Link
              key={c.label}
              to={c.to}
              onClick={() => scrollIfActive(pathname, c.to)}
              className="block rounded-lg bg-background px-3 py-2 text-sm text-foreground transition-colors hover:font-medium hover:text-accent"
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
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [home, educationPlanning, parentingCoaching, bookshelf] = navLinks;

  const closeMobile = () => setOpen(false);
  const coachingActive = pathname === "/coaching";

  const mobileLinkClass = (path: string, exact?: boolean) => {
    const active = exact ? pathname === path : pathname === path;
    return cn(
      "border-l-2 py-2 pl-3 transition-all duration-300",
      active
        ? "border-accent font-medium text-accent"
        : "border-transparent text-foreground hover:border-accent/40 hover:text-accent",
    );
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="shrink-0"
          onClick={() => scrollIfActive(pathname, "/", true)}
        >
          <img
            src={logo}
            alt="KAREERstudio — Powered by ADMITra"
            width={220}
            height={64}
            className="h-10 w-auto object-contain md:h-11"
          />
        </Link>

        <div className="hidden items-center gap-7 text-[13px] font-medium text-muted-foreground lg:flex">
          <NavLink to={home.to} exact pathname={pathname}>
            {home.label}
          </NavLink>
          <NavLink to={educationPlanning.to} pathname={pathname}>
            {educationPlanning.label}
          </NavLink>
          <CoachingDropdown isActive={coachingActive} pathname={pathname} />
          <NavLink to={parentingCoaching.to} pathname={pathname}>
            {parentingCoaching.label}
          </NavLink>
          <NavLink to={bookshelf.to} pathname={pathname}>
            {bookshelf.label}
          </NavLink>
          <Link
            to="/assessments"
            onClick={() => scrollIfActive(pathname, "/assessments")}
            className={cn(
              "rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-tight transition-all duration-300",
              pathname === "/assessments"
                ? "border-accent bg-accent text-accent-foreground shadow-[0_0_20px_oklch(0.62_0.18_35/0.35)]"
                : "border-accent text-accent hover:bg-accent hover:text-accent-foreground",
            )}
          >
            Assessments →
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            onClick={() => scrollIfActive(pathname, "/login")}
            className={cn(
              "text-sm font-medium transition-all duration-300",
              pathname === "/login"
                ? "text-accent underline decoration-accent underline-offset-4"
                : "opacity-70 hover:text-foreground hover:opacity-100",
            )}
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => scrollIfActive(pathname, "/register")}
            className={cn(
              "text-sm font-medium transition-all duration-300",
              pathname === "/register"
                ? "text-accent underline decoration-accent underline-offset-4"
                : "opacity-70 hover:text-foreground hover:opacity-100",
            )}
          >
            Register
          </Link>
          <Link
            to="/enquiry"
            onClick={() => scrollIfActive(pathname, "/enquiry")}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all duration-300",
              pathname === "/enquiry"
                ? "bg-accent text-accent-foreground shadow-[0_0_20px_oklch(0.62_0.18_35/0.35)]"
                : "bg-foreground text-background hover:bg-accent",
            )}
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
              className={mobileLinkClass(home.to, true)}
              onClick={() => scrollIfActive(pathname, home.to, true, closeMobile)}
            >
              {home.label}
            </Link>
            <Link
              to={educationPlanning.to}
              className={mobileLinkClass(educationPlanning.to)}
              onClick={() =>
                scrollIfActive(pathname, educationPlanning.to, false, closeMobile)
              }
            >
              {educationPlanning.label}
            </Link>
            <Link
              to="/coaching"
              className={mobileLinkClass("/coaching")}
              onClick={() => scrollIfActive(pathname, "/coaching", false, closeMobile)}
            >
              Coaching
            </Link>
            <Link
              to={parentingCoaching.to}
              className={mobileLinkClass(parentingCoaching.to)}
              onClick={() =>
                scrollIfActive(pathname, parentingCoaching.to, false, closeMobile)
              }
            >
              {parentingCoaching.label}
            </Link>
            <Link
              to={bookshelf.to}
              className={mobileLinkClass(bookshelf.to)}
              onClick={() => scrollIfActive(pathname, bookshelf.to, false, closeMobile)}
            >
              {bookshelf.label}
            </Link>
            <Link
              to="/assessments"
              className={mobileLinkClass("/assessments")}
              onClick={() => scrollIfActive(pathname, "/assessments", false, closeMobile)}
            >
              Assessments Center →
            </Link>
            <Link
              to="/enquiry"
              className={mobileLinkClass("/enquiry")}
              onClick={() => scrollIfActive(pathname, "/enquiry", false, closeMobile)}
            >
              Enquiry
            </Link>
            <div className="mt-2 flex gap-3 border-t border-border pt-3">
              <Link
                to="/login"
                className={cn(
                  pathname === "/login" && "font-medium text-accent",
                )}
                onClick={() => scrollIfActive(pathname, "/login", false, closeMobile)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={cn(
                  pathname === "/register" && "font-medium text-accent",
                )}
                onClick={() =>
                  scrollIfActive(pathname, "/register", false, closeMobile)
                }
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
