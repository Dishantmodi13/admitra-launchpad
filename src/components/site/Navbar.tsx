import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  if (key === "coaching" && isCoachingPath(pathname)) return true;
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
    <div className="group relative shrink-0">
      <Link
        to="/coaching"
        onClick={() => {
          scrollIfActive(pathname, "/coaching", scrollToTop);
          onNavigate?.();
        }}
        className={cn(
          "relative flex shrink-0 items-center gap-1 transition-colors duration-300",
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

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

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
    <nav
      data-site-navbar
      className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-background/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:gap-6">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center rounded-sm bg-background/95 backdrop-blur-md"
          onClick={() => scrollIfActive(pathname, "/", scrollToTop, closeMobile)}
        >
          <img
            src={logo}
            alt="KAREERstudio - Powered by ADMITra"
            width={220}
            height={64}
            className="h-9 w-auto bg-background/95 object-contain sm:h-10 lg:h-11"
          />
        </Link>

        <div
          data-nav-links
          className="hidden min-w-0 flex-1 items-center justify-center gap-4 whitespace-nowrap px-3 text-[11px] font-medium uppercase tracking-[0.05em] text-muted-foreground lg:flex lg:gap-6 xl:gap-7 xl:text-[13px] xl:tracking-[0.06em]"
        >
          <Link
            to="/"
            onClick={() => scrollIfActive(pathname, "/", scrollToTop)}
            className={cn(
              "relative shrink-0 transition-colors duration-300",
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
                  "relative shrink-0 transition-colors duration-300",
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

        <div
          data-nav-auth
          className="hidden shrink-0 items-center gap-2.5 sm:flex sm:gap-3 lg:gap-4"
        >
          <Link
            to="/login"
            onClick={() => scrollIfActive(pathname, "/login", scrollToTop)}
            className={cn(
              "text-xs font-medium transition-all duration-300 md:text-sm",
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
              "text-xs font-medium transition-all duration-300 md:text-sm",
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
              "px-3 py-1.5 text-xs font-medium transition-all duration-300 md:px-4 md:py-2 md:text-sm",
              pathname === "/enquiry"
                ? "bg-accent text-accent-foreground shadow-[0_0_20px_oklch(0.62_0.18_35/0.35)]"
                : "bg-foreground text-background hover:bg-accent",
            )}
          >
            Enquire
          </Link>
        </div>

        <button
          className="shrink-0 sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background sm:hidden">
          <div className="flex flex-col gap-1 px-4 py-4 text-sm sm:px-6">
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
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              <Link
                to="/login"
                className={cn(
                  "rounded-lg border border-border px-4 py-3 text-center font-medium transition-colors hover:border-accent/40 hover:text-accent",
                  pathname === "/login" && "border-accent text-accent",
                )}
                onClick={() => scrollIfActive(pathname, "/login", scrollToTop, closeMobile)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={cn(
                  "rounded-lg border border-border px-4 py-3 text-center font-medium transition-colors hover:border-accent/40 hover:text-accent",
                  pathname === "/register" && "border-accent text-accent",
                )}
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
