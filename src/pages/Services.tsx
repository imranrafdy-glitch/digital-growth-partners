import FadeIn from "@/components/FadeIn";

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">Service</p>
            <h1 className="heading-xl mb-6">SEO-ready brochure websites</h1>
            <p className="body-lg">
              One focused offer for local businesses in Luxembourg. We build a clean, fast website that explains your business and makes it easy to contact you.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="section-container">
          <FadeIn>
            <h2 className="heading-lg mb-6">Scope</h2>
            <p className="body-md max-w-2xl mb-6">
              The scope is defined in writing before any build starts. This avoids ambiguity and keeps delivery predictable.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border rounded-sm p-6">
                <h3 className="text-base font-semibold mb-3">Included</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Single-page or multi-section layout</li>
                  <li>Content structure and page hierarchy</li>
                  <li>Contact flow (email, map, or booking link)</li>
                  <li>On-page SEO metadata</li>
                </ul>
              </div>
              <div className="border border-border rounded-sm p-6">
                <h3 className="text-base font-semibold mb-3">Excluded</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Ongoing marketing management</li>
                  <li>Paid advertising setup or budgets</li>
                  <li>Copywriting for large catalogues</li>
                  <li>Custom web applications</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <h2 className="heading-lg mb-4">Satisfaction clause</h2>
            <p className="body-md">
              If the first delivery does not match the agreed scope, we revise until it matches, with up to two revision rounds. Any scope change beyond that is quoted separately.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-6">
              Ready to define the scope?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-md mx-auto">
              Send a short description of your business and we will reply with three questions.
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
