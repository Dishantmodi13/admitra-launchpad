import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { coachingDropdownItems, primaryNavItems } from "@/data/primary-nav";
import { useSmoothScroll } from "@/components/site/SmoothScrollProvider";
import { cn } from "@/lib/utils";

const navUnderline =
  "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-300 after:content-['']";

function scrollIfActive(
  pathname: string,
  path: string,
  scrollToTop: () => void,
  onAfter?: () => void,
) {
  if (pathname === path) scrollToTop();
  onAfter?.();
}

function isCoachingPath(pathname: string) {
  return pathname === "/coaching" || pathname.startsWith("/coaching/");
}

function isNavItemActive(pathname: string, key: string, to: string) {
  if (pathname === to) return true;
  if (key === "study-abroad" && pathname === "/education-planning") return true;
  if ((key === "ivy-league" || key === "coaching") && isCoachingPath(pathname)) return true;
  return false;
}

function CoachingNavDropdown({
  pathname,
  scrollToTop,
  onNavigate,
}: {
  pathname: string;
  scrollToTop: () => void;
  onNavigate?: () => void;
}) {
  const active = isCoachingPath(pathname);

  return (
    <div className="group relative">
      <Link
        to="/coaching"
        onClick={() => {
          scrollIfActive(pathname, "/coaching", scrollToTop);
          onNavigate?.();
        }}
        className={cn(
          "relative flex items-center gap-1 transition-colors duration-300",
          navUnderline,
          active
            ? "font-medium text-foreground after:scale-x-100"
            : "hover:text-foreground",
        )}
      >
        Coaching
        <ChevronDown className="size-3 transition-transform duration-300 group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
        <div className="w-60 rounded-xl border border-border bg-popover p-2 shadow-xl">
          {coachingDropdownItems.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              onClick={() => {
                scrollIfActive(pathname, item.to, scrollToTop);
                onNavigate?.();
              }}
              className="block rounded-lg px-3 py-2 text-sm font-medium normal-case tracking-normal text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [coachingOpen, setCoachingOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollToTop } = useSmoothScroll();

  const closeMobile = () => {
    setOpen(false);
    setCoachingOpen(false);
  };

  const mobileLinkClass = (key: string, to: string) => {
    const active = isNavItemActive(pathname, key, to);
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
          onClick={() => scrollIfActive(pathname, "/", scrollToTop, closeMobile)}
        >
          <img
            src={logo}
            alt="KAREERstudio - Powered by ADMITra"
            width={220}
            height={64}
            className="h-10 w-auto object-contain md:h-11"
          />
        </Link>

        <div className="hidden items-center gap-6 text-[12px] font-medium uppercase tracking-[0.06em] text-muted-foreground lg:flex xl:gap-7 xl:text-[13px]">
          <Link
            to="/"
            onClick={() => scrollIfActive(pathname, "/", scrollToTop)}
            className={cn(
              "relative transition-colors duration-300",
              navUnderline,
              pathname === "/"
                ? "font-medium text-foreground after:scale-x-100"
                : "hover:text-foreground",
            )}
          >
            Home
          </Link>
          {primaryNavItems.map((item) => {
            if (item.key === "coaching") {
              return <CoachingNavDropdown key={item.key} pathname={pathname} scrollToTop={scrollToTop} />;
            }

            const active = isNavItemActive(pathname, item.key, item.to);
            return (
              <Link
                key={item.key}
                to={item.to}
                onClick={() => scrollIfActive(pathname, item.to, scrollToTop)}
                className={cn(
                  "relative transition-colors duration-300",
                  navUnderline,
                  active
                    ? "font-medium text-foreground after:scale-x-100"
                    : "hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            onClick={() => scrollIfActive(pathname, "/login", scrollToTop)}
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
            onClick={() => scrollIfActive(pathname, "/register", scrollToTop)}
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
            onClick={() => scrollIfActive(pathname, "/enquiry", scrollToTop)}
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
              to="/"
              className={cn(
                "border-l-2 py-2 pl-3 transition-all duration-300",
                pathname === "/"
                  ? "border-accent font-medium text-accent"
                  : "border-transparent text-foreground hover:border-accent/40 hover:text-accent",
              )}
              onClick={() => scrollIfActive(pathname, "/", scrollToTop, closeMobile)}
            >
              Home
            </Link>
            {primaryNavItems.map((item) => {
              if (item.key === "coaching") {
                return (
                  <div key={item.key}>
                    <Link
                      to="/coaching"
                      onClick={() => scrollIfActive(pathname, "/coaching", scrollToTop, closeMobile)}
                      className={cn(
                        "flex w-full items-center justify-between border-l-2 py-2 pl-3 text-left transition-all duration-300",
                        isCoachingPath(pathname)
                          ? "border-accent font-medium text-accent"
                          : "border-transparent text-foreground hover:border-accent/40 hover:text-accent",
                      )}
                    >
                      Coaching
                      <button
                        type="button"
                        aria-label="Expand coaching menu"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCoachingOpen((prev) => !prev);
                        }}
                        className="p-1"
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform duration-300",
                            coachingOpen && "rotate-180",
                          )}
                        />
                      </button>
                    </Link>
                    {coachingOpen && (
                      <div className="ml-3 space-y-1 border-l border-border pl-3">
                        {coachingDropdownItems.map((subItem) => (
                          <Link
                            key={subItem.key}
                            to={subItem.to}
                            className="block py-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                            onClick={() => scrollIfActive(pathname, subItem.to, scrollToTop, closeMobile)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.key}
                  to={item.to}
                  className={mobileLinkClass(item.key, item.to)}
                  onClick={() => scrollIfActive(pathname, item.to, scrollToTop, closeMobile)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/enquiry"
              className={mobileLinkClass("enquiry", "/enquiry")}
              onClick={() => scrollIfActive(pathname, "/enquiry", scrollToTop, closeMobile)}
            >
              Enquire
            </Link>
            <div className="mt-2 flex gap-3 border-t border-border pt-3">
              <Link
                to="/login"
                className={cn(pathname === "/login" && "font-medium text-accent")}
                onClick={() => scrollIfActive(pathname, "/login", scrollToTop, closeMobile)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={cn(pathname === "/register" && "font-medium text-accent")}
                onClick={() => scrollIfActive(pathname, "/register", scrollToTop, closeMobile)}
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
