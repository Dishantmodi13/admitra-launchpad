import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "sonner";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <section className="border-b border-border px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl italic leading-[1.05] md:text-7xl">
          {title}
        </h1>
        {body && (
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">{body}</p>
        )}
      </div>
    </section>
  );
}