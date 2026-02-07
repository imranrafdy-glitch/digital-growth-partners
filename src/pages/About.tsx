import FadeIn from "@/components/FadeIn";

const values = [
  {
    title: "Structured thinking",
    text: "I approach every project with a clear framework. Objectives are defined before actions are taken, and every decision can be explained.",
  },
  {
    title: "Performance-oriented",
    text: "What gets measured gets improved. I focus on outcomes that matter to your business — leads, clients, revenue — not vanity metrics.",
  },
  {
    title: "Transparent communication",
    text: "You'll always know what's being done, why, and what the results are. No jargon, no black boxes, no surprises.",
  },
  {
    title: "Long-term partnership",
    text: "Real results take time and consistency. I build lasting working relationships based on trust, reliability, and mutual respect.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">About</p>
            <h1 className="heading-xl mb-6">A digital partner, not a salesperson</h1>
            <p className="body-lg mb-8">
              I help businesses make better decisions about their online presence. My role is to bring clarity, structure, and measurable improvement to how you show up online and attract clients.
            </p>
            <p className="body-md">
              I work primarily with local and service-based businesses — the kind of businesses where every lead counts and every euro spent on marketing should justify itself. My approach is grounded in strategy, driven by data, and focused on real outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="section-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">Values</p>
            <h2 className="heading-lg mb-16 max-w-md">What guides the work</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="font-display text-xl mb-3 text-foreground">{value.title}</h3>
                  <p className="body-md">{value.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <h2 className="heading-lg mb-6">Why this approach</h2>
            <p className="body-lg mb-6">
              The digital space is full of noise — agencies promising overnight results, tools that overcomplicate simple problems, and strategies built on trends rather than fundamentals.
            </p>
            <p className="body-md mb-6">
              I believe in doing less, but doing it well. A clear website, a focused strategy, honest reporting, and continuous improvement. That's what works — especially for businesses that can't afford to waste time or budget on things that don't deliver.
            </p>
            <p className="body-md">
              If you're looking for a partner who values clarity over complexity and results over appearances, I'd be happy to talk.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Let's work together
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-md mx-auto">
              I'm always open to discussing how I can help your business grow online.
            </p>
            <a
              href="mailto:info@shades.lu"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium bg-primary-foreground text-primary rounded-sm hover:opacity-90 transition-opacity"
            >
              Contact me at info@shades.lu
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
