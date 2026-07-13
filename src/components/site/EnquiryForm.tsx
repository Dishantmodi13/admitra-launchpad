import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  getCityOptions,
  getCountryOptions,
  getStateOptions,
  type LocationOption,
} from "@/lib/location-data";
import { SearchableLocationSelect } from "@/components/site/SearchableLocationSelect";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  country: z.string().min(1, "Please select a country"),
  state: z.string().min(1, "Please select a state"),
  city: z.string().min(1, "Please select a city"),
  message: z.string().trim().min(5, "Message too short").max(1000),
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
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}

export function EnquiryForm() {
  const [captcha, setCaptcha] = useState(() => makeCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [countryOptions, setCountryOptions] = useState<LocationOption[]>([]);
  const [stateOptions, setStateOptions] = useState<LocationOption[]>([]);
  const [cityOptions, setCityOptions] = useState<LocationOption[]>([]);
  const [locationsReady, setLocationsReady] = useState(false);

  const display = useMemo(() => `${captcha.a} ${captcha.op} ${captcha.b}`, [captcha]);

  useEffect(() => {
    getCountryOptions().then((options) => {
      setCountryOptions(options);
      setLocationsReady(true);
    });
  }, []);

  useEffect(() => {
    if (!country) {
      setStateOptions([]);
      return;
    }
    getStateOptions(country).then(setStateOptions);
  }, [country]);

  useEffect(() => {
    if (!country || !state) {
      setCityOptions([]);
      return;
    }
    getCityOptions(country, state).then(setCityOptions);
  }, [country, state]);

  function resetLocation() {
    setCountry("");
    setState("");
    setCity("");
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = enquirySchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      country,
      state,
      city,
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
    resetLocation();
    setCaptcha(makeCaptcha());
    setCaptchaInput("");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="space-y-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
          Your details
        </p>
        <h2 className="font-serif text-2xl italic md:text-3xl">Tell us about yourself</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full Name">
          <input name="name" placeholder="Enter your full name" required className={inputClass} />
        </Field>
        <Field label="Email Address">
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            required
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Contact Number">
        <input
          name="phone"
          type="tel"
          placeholder="Include country code if outside India"
          required
          className={inputClass}
        />
      </Field>

      <div className="space-y-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
          Location
        </p>
        <h3 className="font-serif text-xl italic">Where are you based?</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Field label="Country">
          <SearchableLocationSelect
            value={country}
            onValueChange={(value) => {
              setCountry(value);
              setState("");
              setCity("");
            }}
            options={countryOptions}
            placeholder={locationsReady ? "Select country" : "Loading countries..."}
            searchPlaceholder="Search countries..."
            disabled={!locationsReady}
          />
        </Field>

        <Field label="State / Province">
          <SearchableLocationSelect
            value={state}
            onValueChange={(value) => {
              setState(value);
              setCity("");
            }}
            options={stateOptions}
            placeholder={country ? "Select state" : "Choose country first"}
            searchPlaceholder="Search states..."
            disabled={!country}
          />
        </Field>

        <Field label="City">
          <SearchableLocationSelect
            value={city}
            onValueChange={setCity}
            options={cityOptions}
            placeholder={state ? "Select city" : "Choose state first"}
            searchPlaceholder="Search cities..."
            disabled={!state}
          />
        </Field>
      </div>

      <Field label="How can we help?">
        <textarea
          name="message"
          placeholder="Share your goals, questions, or preferred program"
          required
          className="h-28 w-full resize-none border-b border-border bg-transparent py-2.5 focus:border-accent focus:outline-none"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4 border-t border-border pt-6">
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
