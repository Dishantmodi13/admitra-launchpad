import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { LoginForm } from "@/components/site/LoginForm";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login - KAREER Studio" },
      {
        name: "description",
        content:
          "Sign in to KAREER Studio with OTP verification. Password-free access to assessments and your education roadmap.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <PageLayout>
      <section className="grid min-h-[calc(100vh-160px)] border-y border-border lg:grid-cols-2">
        <div className="flex flex-col justify-center border-b border-border bg-accent/5 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-24">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-accent md:text-base">
            Student Area
          </span>
          <h1 className="mt-6 font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-7xl">
            Welcome back
          </h1>
          <p className="mt-6 max-w-sm text-muted-foreground sm:mt-8">
            Sign in with a one-time password sent to your email. No password to remember —
            secure, fast access to your assessments, coaching, and planning tools.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
            <li>OTP login — no password required</li>
            <li>Access assessments and reports</li>
            <li>Powered by ADMITra</li>
          </ul>
        </div>
        <div className="bg-background p-6 sm:p-10 lg:overflow-y-auto lg:p-16 xl:p-24">
          <LoginForm />
        </div>
      </section>
    </PageLayout>
  );
}
