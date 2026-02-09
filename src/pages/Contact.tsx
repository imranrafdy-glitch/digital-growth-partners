import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) {
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mdalkanl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("We could not send your message. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="section-padding">
        <div className="section-container max-w-2xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">Contact</p>
            <h1 className="heading-xl mb-6">Get in touch</h1>
            <p className="body-lg mb-4">
              For new website requests, contact us at:
            </p>
            <a
              href="mailto:info@sh4des.com"
              className="inline-block text-xl font-semibold text-foreground hover:text-accent transition-colors mb-12"
            >
              info@sh4des.com
            </a>
            <p className="body-md mb-10">
              Response time: within 24 hours. You will receive a reply with three scope questions.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            {submitted ? (
              <div className="p-10 border border-border rounded-sm text-center">
                <h3 className="font-display text-2xl mb-3 text-foreground">Message sent</h3>
                <p className="body-md">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="rounded-sm border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {error}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    disabled={submitting}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    disabled={submitting}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    disabled={submitting}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-shadow resize-none"
                    placeholder="Tell us about your business and objectives…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center px-7 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Sending..." : "Send message"}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
