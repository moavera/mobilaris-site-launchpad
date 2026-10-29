import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SectionShareButton } from "@/components/SectionShareButton";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Field = "name" | "company" | "email";
type Errors = Partial<Record<Field, string>>;

const MAX = { name: 100, company: 120, email: 255 } as const;

export const BookDemo = () => {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    company: "",
    email: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const setField = (field: Field) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    const name = values.name.trim();
    const company = values.company.trim();
    const email = values.email.trim();

    if (!name) next.name = "Please enter your name";
    else if (name.length > MAX.name) next.name = "Name is too long";

    if (!company) next.company = "Please enter your company";
    else if (company.length > MAX.company) next.company = "Company name is too long";

    if (!email) next.email = "Please enter your email";
    else if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address";
    else if (email.length > MAX.email) next.email = "Email is too long";

    return next;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0 || !consent) return;

    setStatus("sending");
    const { error } = await supabase.from("demo_requests").insert({
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim().toLowerCase(),
      consent: true,
    });

    if (error) {
      setStatus("error");
      return;
    }
    setStatus("sent");
  };

  return (
    <section
      id="book-demo"
      className="group relative scroll-mt-20 bg-surface px-4 py-24 md:px-12 md:pb-[130px] md:pt-[110px] xl:px-[120px]"
    >
      <div className="absolute right-4 top-4 md:right-12 md:top-8">
        <SectionShareButton sectionId="book-demo" sectionName="Book a demo" />
      </div>

      <div className="mx-auto grid max-w-[1200px] items-start gap-12 md:gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col gap-6">
          <h2 className="text-[34px] font-semibold leading-[1.08] tracking-[-1.3px] text-paper md:text-5xl">
            Book a demo
          </h2>
          <p className="book-demo-lead">
            Tell us where to reach you and we will set up a time to walk through{" "}
            <strong className="book-demo-brand">Mobilaris Site™</strong> on a site like
            yours – people, vehicles, machinery and sensors on one live map.
          </p>
          <p className="book-demo-note">
            We use these details only to get back to you about{" "}
            <strong className="book-demo-brand">Mobilaris Site™</strong>.
          </p>
        </div>

        {status === "sent" ? (
          <div className="book-demo-done">
            <CheckCircle2 className="h-7 w-7 text-brand" strokeWidth={1.75} />
            <p className="text-[22px] font-medium leading-[1.3] tracking-[-0.4px] text-paper">
              Thanks, {values.name.trim().split(" ")[0] || "there"} – your demo request is
              in.
            </p>
            <p className="book-demo-lead">
              We will get back to you at{" "}
              <strong className="book-demo-brand">{values.email.trim()}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {(["name", "company", "email"] as Field[]).map((field) => (
              <div key={field}>
                <label className="book-demo-label" htmlFor={`demo-${field}`}>
                  {field === "name"
                    ? "Full name"
                    : field === "company"
                      ? "Company"
                      : "Work email"}
                </label>
                <input
                  id={`demo-${field}`}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  autoComplete={
                    field === "name"
                      ? "name"
                      : field === "company"
                        ? "organization"
                        : "email"
                  }
                  maxLength={MAX[field]}
                  value={values[field]}
                  onChange={setField(field)}
                  aria-invalid={errors[field] ? true : undefined}
                  aria-describedby={errors[field] ? `demo-${field}-error` : undefined}
                  className={`book-demo-field ${errors[field] ? "book-demo-field--invalid" : ""}`}
                  placeholder={
                    field === "name"
                      ? "Jane Andersson"
                      : field === "company"
                        ? "LKAB"
                        : "jane@company.com"
                  }
                />
                {errors[field] && (
                  <p id={`demo-${field}-error`} className="book-demo-error">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            <label className="book-demo-consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />
              <span>
                I consent to Mobilaris Industrial Solutions processing my data to provide
                information about Mobilaris Site.
              </span>
            </label>

            <div className="flex flex-col items-start gap-3 pt-1">
              <button
                type="submit"
                disabled={status === "sending" || !consent}
                className="book-demo-submit"
              >
                {status === "sending" ? "Sending..." : "Book a demo"}
                <ArrowRight className="h-5 w-5" />
              </button>
              {status === "error" && (
                <p className="book-demo-error">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
