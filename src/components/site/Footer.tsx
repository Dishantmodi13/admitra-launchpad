import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { footerNavItems } from "@/data/primary-nav";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Podcast", href: "#" },
];

const mapsUrl = "https://maps.app.goo.gl/hhFbyjyS6YySQbQz7";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="KAREERstudio - Powered by ADMITra"
              width={200}
              height={54}
              className="h-11 w-auto object-contain md:h-12"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A purpose-driven commitment to global education and career planning.
            Empowering the next generation of global citizens - beyond borders,
            beyond cultures.
          </p>
        </div>

        {/* Navigate */}
        <div className="lg:col-span-2">
          <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Navigate
          </h4>
          <ul className="space-y-2.5 text-sm">
            {footerNavItems.map((item) => (
              <li key={item.key}>
                <Link to={item.to} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Contact
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="leading-relaxed text-muted-foreground transition-colors hover:text-accent"
              >
                303, Rajshree Center,
                <br />
                Near Kalaghoda, Sayajigunj,
                <br />
                Vadodara-390020 GJ, IN
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+912653138392"
                  className="transition-colors hover:text-accent"
                >
                  +91 265 31 38 392
                </a>
                <a
                  href="tel:+918104215365"
                  className="transition-colors hover:text-accent"
                >
                  +91 810 42 15 365
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <a
                href="mailto:hello@kareerstudio.com"
                className="transition-colors hover:text-accent"
              >
                hello@kareerstudio.com
              </a>
            </li>
          </ul>
        </div>

        {/* Hours & Social */}
        <div className="lg:col-span-3">
          <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Hours
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <div className="space-y-1.5">
                <p>Mon – Sat: 10:00 – 19:30</p>
                <p>Sun: On Request</p>
              </div>
            </li>
          </ul>

          <h4 className="mb-4 mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Connect
          </h4>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border pt-8 sm:flex-row sm:gap-4 lg:mt-16">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} KAREER Studio - All Rights Reserved
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          A division of ADMITra
        </p>
      </div>
    </footer>
  );
}
