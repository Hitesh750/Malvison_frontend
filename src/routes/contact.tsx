import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Malvion Technologies" },
      {
        name: "description",
        content:
          "Get in touch with Malvion Technologies. Email, phone, and project inquiry form.",
      },
      { property: "og:title", content: "Contact — Malvion Technologies" },
      {
        property: "og:description",
        content: "Tell us about your project. We respond within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
  name: formData.get("name"),
  email: formData.get("email"),
  company: formData.get("company"),
  project_budget: formData.get("budget"),        
  project_description: formData.get("message"),  
};

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);

    setSent(true); // success UI
  } catch (error) {
    console.error(error);
    alert("Error sending message");
  }
}

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="text-mono-eyebrow mb-6">Contact</div>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Let's engineer something <span className="text-accent">remarkable.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            From AI-powered platforms and cloud-native architectures to scalable
            web and mobile products — share your idea, tech stack, or business
            challenge. Our team will review your requirements and respond with a
            tailored proposal, architecture outline, and timeline within one
            business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "AI / LLM Integration",
              "Cloud & DevOps",
              "Full-Stack Web Apps",
              "API & Backend Systems",
              "MVP in 4–6 weeks",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-px mx-auto grid max-w-7xl gap-12 py-20 md:grid-cols-5">
          <div className="space-y-6 md:col-span-2">
            <ContactRow
              icon={Mail}
              label="Email"
              value="hiteshmalviya06@gmail.com"
              href="mailto:hiteshmalviya06@gmail.com"
            />
            <ContactRow icon={Phone} label="Phone" value="+91 95097 22217" href="tel:+919509722217" />
            <ContactRow icon={MapPin} label="Location" value="Jodhpur, India" />

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="text-mono-eyebrow mb-2">Office hours</div>
              <p className="text-sm text-foreground/80">
                Monday – Friday <br /> 10:00 — 19:00 IST
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            {sent ? (
              <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-border bg-card p-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">Request Submit Successfully</h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Thanks for reaching out. We'll be in touch within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-medium text-accent hover:underline"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-8 md:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Hitesh Malviya" required />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <Field label="Company" name="company" placeholder="Acme Inc." />
                  <Field label="Budget (optional)" name="budget" placeholder="$10k – $50k" />
                </div>
                <div className="mt-5">
                  <label className="text-mono-eyebrow mb-2 block">Project details</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your goals, timeline, and what success looks like..."
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-all hover:translate-y-[-1px] hover:shadow-lg"
                >
                  Send message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/50">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <div>
        <div className="text-mono-eyebrow">{label}</div>
        <div className="mt-1 font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-mono-eyebrow mb-2 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </div>
  );
}
