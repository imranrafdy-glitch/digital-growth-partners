import FadeIn from "@/components/FadeIn";

const tools = ["React", "TypeScript", "Vite", "Tailwind CSS", "Cloudflare Workers"];

const standards = [
  "Performance budgets and Core Web Vitals checks",
  "Accessibility checks aligned with WCAG 2.1 AA",
  "Security basics: HTTPS, minimal third-party scripts",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">About the studio</p>
            <h1 className="heading-xl mb-6">SH4DES is a digital studio focused on execution, not branding noise.</h1>
            <p className="body-lg mb-8">
              We build straightforward brochure websites for local businesses in Luxembourg. The work is calm, structured, and designed to make the service easy to understand.
            </p>
            <p className="body-md">
              The studio is independent and operates in Luxembourg. We keep scope small, communicate clearly, and document what is included from the start.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <FadeIn>
            <h2 className="heading-lg mb-6">Tools and standards</h2>
            <div className="grid md:grid-cols-2 gap-10 md:gap-12">
              <div>
                <h3 className="text-base font-semibold mb-3">Tools</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-3">Standards</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {standards.map((standard) => (
                    <li key={standard}>{standard}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-6">
              Want a clear scope and a simple build?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-md mx-auto">
              Send a short note and we will reply with the scope questions.
            </p>
            <a
              href="mailto:info@sh4des.com"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium bg-primary-foreground text-primary rounded-sm hover:opacity-90 transition-opacity"
            >
              Contact us at info@sh4des.com
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
