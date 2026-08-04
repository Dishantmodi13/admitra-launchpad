import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { Building2, Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

const registerRoles = [
  {
    id: "alumni",
    label: "Alumni",
    icon: Medal,
  },
  {
    id: "service-provider",
    label: "Service Provider",
    icon: Building2,
  },
] as const;

type RegisterRole = (typeof registerRoles)[number]["id"];

const registerSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  middleName: z.string().trim().max(80).optional(),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid mobile number").max(20),
  role: z.enum(["alumni", "service-provider"], {
    required_error: "Please select your role",
  }),
  agreed: z.literal(true, {
    errorMap: () => ({ message: "You must agree to continue" }),
  }),
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

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="font-sans text-xs font-bold text-foreground sm:text-sm">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

export function RegisterForm() {
  const [captcha, setCaptcha] = useState(() => makeCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [role, setRole] = useState<RegisterRole | "">("");
  const [agreed, setAgreed] = useState(false);

  const display = useMemo(() => `${captcha.a} ${captcha.op} ${captcha.b}`, [captcha]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    if (!role) {
      toast.error("Please select your role");
      return;
    }

    const parsed = registerSchema.safeParse({
      firstName: fd.get("firstName"),
      middleName: fd.get("middleName") || undefined,
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      role,
      agreed,
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

    toast.success("OTP sent. Check your email and mobile to complete sign up.");
    (e.target as HTMLFormElement).reset();
    setRole("");
    setAgreed(false);
    setCaptcha(makeCaptcha());
    setCaptchaInput("");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="space-y-3">
        <h2 className="font-serif text-3xl italic text-foreground sm:text-4xl">
          Create Account
        </h2>
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-accent underline-offset-4 hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="First Name" required>
          <input
            name="firstName"
            placeholder="First name"
            required
            className={inputClass}
          />
        </Field>
        <Field label="Middle Name">
          <input
            name="middleName"
            placeholder="Middle name (optional)"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Last Name" required>
        <input name="lastName" placeholder="Last name" required className={inputClass} />
      </Field>

      <Field label="Email Address" required>
        <input
          name="email"
          type="email"
          placeholder="you@email.com"
          required
          className={inputClass}
        />
      </Field>

      <Field label="Mobile Number" required>
        <input
          name="phone"
          type="tel"
          placeholder="Include country code if outside India"
          required
          className={inputClass}
        />
      </Field>

      <div className="space-y-3">
        <p className="font-sans text-xs font-bold text-foreground sm:text-sm">
          Select Your Role
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {registerRoles.map((item) => {
            const Icon = item.icon;
            const isSelected = role === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setRole(item.id)}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-300",
                  isSelected
                    ? "border-accent bg-accent/5 shadow-sm"
                    : "border-border bg-background hover:border-accent/40",
                )}
                aria-pressed={isSelected}
              >
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-lg text-lg",
                    isSelected ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground",
                  )}
                  aria-hidden
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3 border-t border-border pt-6">
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

      <div className="flex items-start gap-3">
        <Checkbox
          id="register-terms"
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked === true)}
          className="mt-0.5"
        />
        <label
          htmlFor="register-terms"
          className="text-sm leading-relaxed text-muted-foreground"
        >
          I agree to the{" "}
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
          .
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-foreground py-4 font-mono text-[11px] uppercase tracking-widest text-background transition-colors hover:bg-accent"
      >
        Send OTP
      </button>
    </form>
  );
}
