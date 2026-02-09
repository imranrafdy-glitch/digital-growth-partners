import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="section-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
                Website Studio • Luxembourg
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="heading-xl mb-8">
                We design and deploy SEO-ready brochure websites for local businesses in Luxembourg.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="body-lg max-w-xl mb-10">
                One clear service. One clear outcome: a fast, structured website that presents your business and makes it easy to contact you.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
                >
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium border border-border text-foreground rounded-sm hover:bg-secondary transition-colors"
                >
                  See the service
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding">
        <div className="section-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              What you get
            </p>
            <h2 className="heading-lg mb-12 max-w-lg">
              A complete brochure website package
            </h2>
          </FadeIn>

          <FadeIn>
            <ul className="grid md:grid-cols-2 gap-4 max-w-3xl">
              <li className="border border-border rounded-sm p-5 text-sm text-muted-foreground">Single-page or multi-section layout based on scope</li>
              <li className="border border-border rounded-sm p-5 text-sm text-muted-foreground">Copy structure, content layout, and contact flow</li>
              <li className="border border-border rounded-sm p-5 text-sm text-muted-foreground">Mobile-first build with clean performance budget</li>
              <li className="border border-border rounded-sm p-5 text-sm text-muted-foreground">SEO-ready metadata and indexing setup</li>
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Concept work */}
      <section className="section-padding bg-secondary/50">
        <div className="section-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              Work samples
            </p>
            <h2 className="heading-lg mb-6">Concept projects</h2>
            <p className="body-md max-w-2xl mb-8">
              These are self-initiated concept projects used to demonstrate layout, structure, and clarity. They are not client work.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border rounded-sm p-6">
                <h3 className="text-base font-semibold mb-2">Concept Project: Local Physio Clinic</h3>
                <p className="text-sm text-muted-foreground">Clear services overview, appointment flow, and location-first layout.</p>
              </div>
              <div className="border border-border rounded-sm p-6">
                <h3 className="text-base font-semibold mb-2">Concept Project: Artisan Bakery</h3>
                <p className="text-sm text-muted-foreground">Menu highlights, opening hours, and map-driven contact section.</p>
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
              Ready for a website that explains your business clearly?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-lg mx-auto">
              Tell us what you do, and we will reply with three questions to scope the site.
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
