import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-2 font-serif text-3xl font-bold italic">KAREER Studio</div>
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Powered by ADMITra
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A purpose-driven commitment to global education and career planning.
            Empowering the next generation of global citizens — beyond borders,
            beyond cultures.
          </p>
        </div>
        <div>
          <h4 className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Navigate
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/coaching" className="hover:text-accent">
                Coaching
              </Link>
            </li>
            <li>
              <Link to="/education-planning" className="hover:text-accent">
                Education Planning
              </Link>
            </li>
            <li>
              <Link to="/parenting-coaching" className="hover:text-accent">
                Parenting Coaching
              </Link>
            </li>
            <li>
              <Link to="/bookshelf" className="hover:text-accent">
                Bookshelf
              </Link>
            </li>
            <li>
              <Link to="/knowledge" className="hover:text-accent">
                Knowledge Center
              </Link>
            </li>
            <li>
              <a
                href="https://assessments.admitra.io"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                Assessments →
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Connect
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-accent">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Podcast
              </a>
            </li>
            <li className="pt-4 font-mono text-xs">hello@kareerstudio.com</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} KAREER Studio — All Rights Reserved
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          A division of ADMITra
        </p>
      </div>
    </footer>
  );
}