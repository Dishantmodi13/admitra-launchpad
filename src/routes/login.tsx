import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "Login - KAREER Studio" }, { name: "description", content: "Student area login." }],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <PageLayout>
      <section className="grid min-h-[80vh] place-items-center px-6 py-24">
        <div className="w-full max-w-md">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Student Area
          </span>
          <h1 className="mt-6 font-serif text-5xl italic">Welcome back.</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Login to continue your KAREER Studio journey.
          </p>
          <form className="mt-10 space-y-6">
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-full border-b border-border bg-transparent py-3 focus:border-accent focus:outline-none"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full border-b border-border bg-transparent py-3 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-foreground py-4 font-mono uppercase tracking-widest text-background hover:bg-accent"
            >
              Login
            </button>
          </form>
          <p className="mt-8 text-sm text-muted-foreground">
            New here?{" "}
            <Link to="/register" className="text-accent underline-offset-4 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}