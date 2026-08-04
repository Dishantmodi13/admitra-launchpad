import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().trim().email("Invalid email").max(255),
});

function makeCaptcha() {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  const op = Math.random() > 0.5 ? "+" : "-";
  const answer = op === "+" ? a + b : a - b;
  return { a, b, op, answer };
}

const inputClass =
  "w-full border-b border-border bg-transparent py-2.5 text-base focus:border-accent focus:outline-none";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="font-sans text-xs font-bold text-foreground sm:text-sm">
        {label}
      </label>
      {children}
    </div>
  );
}

const policyLinks = (
  <>
    <a
      href="https://core.admitra.io/terms-of-service"
      target="_blank"
      rel="noreferrer"
      className="text-accent underline-offset-4 hover:underline"
    >
      Terms of Service
    </a>
    ,{" "}
    <a
      href="https://core.admitra.io/privacy-policy"
      target="_blank"
      rel="noreferrer"
      className="text-accent underline-offset-4 hover:underline"
    >
      Privacy Policy
    </a>
    and{" "}
    <a
      href="https://core.admitra.io/cookie-policy"
      target="_blank"
      rel="noreferrer"
      className="text-accent underline-offset-4 hover:underline"
    >
      Cookie Policy
    </a>
  </>
);

export function LoginForm() {
  const [captcha, setCaptcha] = useState(() => makeCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  const display = useMemo(() => `${captcha.a} ${captcha.op} ${captcha.b}`, [captcha]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const parsed = loginSchema.safeParse({
      email: fd.get("email"),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }

    if (Number(captchaInput) !== captcha.answer) {
      toast.error("Verification incorrect. Please solve the puzzle again.");
      setCaptcha(makeCaptcha());
      setCaptchaInput("");
      return;
    }

    toast.success("OTP sent. Check your email to sign in.");
    (e.target as HTMLFormElement).reset();
    setCaptcha(makeCaptcha());
    setCaptchaInput("");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="space-y-3">
        <h2 className="font-serif text-3xl italic text-foreground sm:text-4xl">
          Welcome Back
        </h2>
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            Sign up for free
          </Link>
        </p>
      </div>

      <Field label="Email Address">
        <input
          name="email"
          type="email"
          placeholder="you@email.com"
          required
          className={inputClass}
        />
      </Field>

      <div className="space-y-3">
        <p className="font-sans text-xs font-bold text-foreground sm:text-sm">
          Solve to verify
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-mono text-sm">{display} =</span>
          <input
            type="text"
            inputMode="numeric"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            placeholder="?"
            required
            className="w-20 border border-border bg-background px-3 py-1.5 text-center"
            aria-label="Captcha answer"
          />
          <button
            type="button"
            onClick={() => {
              setCaptcha(makeCaptcha());
              setCaptchaInput("");
            }}
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent"
          >
            ↻ refresh
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-foreground py-4 font-mono text-[11px] uppercase tracking-widest text-background transition-colors hover:bg-accent"
      >
        Send OTP
      </button>

      <div className="space-y-4 border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          New to the platform?{" "}
          <Link
            to="/register"
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            Create New Account
          </Link>
        </p>
        <p className="text-xs leading-relaxed text-muted-foreground">
          By continuing, you agree to our {policyLinks}.
        </p>
      </div>
    </form>
  );
}
