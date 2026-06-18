import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const coachingItems = [
  { label: "Scholastic & Language", to: "/coaching" },
  { label: "IELTS Coaching", to: "/coaching" },
  { label: "GRE Coaching", to: "/coaching" },
  { label: "SAT Coaching", to: "/coaching" },
  { label: "PTE Coaching", to: "/coaching" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-bold italic tracking-tight">
            KAREER Studio
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            Powered by ADMITra
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-[13px] font-medium text-muted-foreground lg:flex">
          <a
            href="https://assessments.admitra.io"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-accent px-3 py-1.5 font-mono text-[11px] uppercase tracking-tight text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Assessments →
          </a>
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
          <Link to="/education-planning" className="transition-colors hover:text-foreground">
            Education Planning
          </Link>
          <Link to="/parenting-coaching" className="transition-colors hover:text-foreground">
            Parenting
          </Link>
          <Link to="/bookshelf" className="transition-colors hover:text-foreground">
            Bookshelf
          </Link>
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
            <a
              href="https://assessments.admitra.io"
              target="_blank"
              rel="noreferrer"
              className="py-2 text-accent"
            >
              Assessments Center →
            </a>
            <Link to="/coaching" className="py-2" onClick={() => setOpen(false)}>
              Coaching
            </Link>
            <Link to="/education-planning" className="py-2" onClick={() => setOpen(false)}>
              Education Planning
            </Link>
            <Link to="/parenting-coaching" className="py-2" onClick={() => setOpen(false)}>
              Parenting Coaching
            </Link>
            <Link to="/bookshelf" className="py-2" onClick={() => setOpen(false)}>
              Bookshelf
            </Link>
            <Link to="/enquiry" className="py-2" onClick={() => setOpen(false)}>
              Enquiry
            </Link>
            <div className="mt-2 flex gap-3 border-t border-border pt-3">
              <Link to="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link to="/register" onClick={() => setOpen(false)}>
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}