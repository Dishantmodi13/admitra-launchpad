import { useMemo, useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  city: z.string().trim().min(2, "City is required").max(80),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

function makeCaptcha() {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  const op = Math.random() > 0.5 ? "+" : "-";
  const answer = op === "+" ? a + b : a - b;
  return { a, b, op, answer };
}

export function EnquiryForm() {
  const [captcha, setCaptcha] = useState(() => makeCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const display = useMemo(() => `${captcha.a} ${captcha.op} ${captcha.b}`, [captcha]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = enquirySchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      city: fd.get("city"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    if (Number(captchaInput) !== captcha.answer) {
      toast.error("Captcha incorrect. Try again.");
      setCaptcha(makeCaptcha());
      setCaptchaInput("");
      return;
    }
    toast.success("Thank you. Our team will reach out within 24 hours.");
    (e.target as HTMLFormElement).reset();
    setCaptcha(makeCaptcha());
    setCaptchaInput("");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          className="w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <input
          name="phone"
          type="tel"
          placeholder="Contact Number"
          required
          className="w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
        />
        <input
          name="city"
          placeholder="Your City"
          required
          className="w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
        />
      </div>
      <textarea
        name="message"
        placeholder="How can we help?"
        required
        className="h-24 w-full resize-none border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
      />
      <div className="flex flex-wrap items-center gap-4 py-2">
        <span className="font-mono text-sm">{display} =</span>
        <input
          type="text"
          inputMode="numeric"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          placeholder="?"
          required
          className="w-20 border border-border bg-background px-3 py-1 text-center"
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
        <span className="ml-auto text-[10px] uppercase tracking-widest text-muted-foreground">
          Security check
        </span>
      </div>
      <button
        type="submit"
        className="w-full bg-foreground py-4 font-mono uppercase tracking-widest text-background transition-colors hover:bg-accent"
      >
        Submit Enquiry
      </button>
    </form>
  );
}