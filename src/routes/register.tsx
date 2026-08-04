import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { RegisterForm } from "@/components/site/RegisterForm";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create Account - KAREER Studio" },
      {
        name: "description",
        content:
          "Create your KAREER Studio account with OTP verification. Sign up as alumni or service provider.",
      },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <PageLayout>
      <section className="grid min-h-[calc(100vh-160px)] border-y border-border lg:grid-cols-2">
        <div className="flex flex-col justify-center border-b border-border bg-accent/5 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-24">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-accent md:text-base">
            Student Area
          </span>
          <h1 className="mt-6 font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-7xl">
            Join KAREER Studio
          </h1>
          <p className="mt-6 max-w-sm text-muted-foreground sm:mt-8">
            Create your account with a one-time password — no password to remember. Access
            assessments, coaching progress, and your personalized education roadmap.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
            <li>OTP verification — secure and password-free</li>
            <li>Alumni and service provider roles</li>
            <li>Powered by ADMITra</li>
          </ul>
        </div>
        <div className="bg-background p-6 sm:p-10 lg:overflow-y-auto lg:p-16 xl:p-24">
          <RegisterForm />
        </div>
      </section>
    </PageLayout>
  );
}
