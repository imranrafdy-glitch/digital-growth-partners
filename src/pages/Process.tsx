import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Understanding your business",
    description:
      "Every engagement begins with listening. I take time to understand your business, your market, your goals, and what you've already tried. This is the foundation of everything that follows.",
  },
  {
    number: "02",
    title: "Building a solid foundation",
    description:
      "Before driving traffic, the fundamentals need to be right — a clear website, consistent messaging, proper tracking. I make sure your digital presence is ready to convert.",
  },
  {
    number: "03",
    title: "Launching visibility channels",
    description:
      "With the foundation in place, we activate the right channels — search visibility, advertising, social media — based on where your audience already is and what makes sense for your business.",
  },
  {
    number: "04",
    title: "Measuring and adjusting",
    description:
      "Data tells us what's working and what's not. I set up proper tracking from day one and use real performance data to refine the strategy — no guessing, no assumptions.",
  },
  {
    number: "05",
    title: "Continuous improvement",
    description:
      "Digital marketing is not a one-time project. I work with you over time to optimize, expand, and adapt as your business and market evolve. Consistency drives results.",
  },
];

export default function Process() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">Process</p>
            <h1 className="heading-xl mb-6">How I work</h1>
            <p className="body-lg">
              A clear, logical process ensures nothing is left to chance. Here's how every engagement is structured — from the first conversation to ongoing optimization.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-secondary/50">
        <div className="section-container max-w-3xl">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="relative pl-16 pb-16 last:pb-0">
                  {/* Vertical line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-5 top-10 w-px h-full bg-border" />
                  )}
                  {/* Number circle */}
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-medium font-body">{step.number}</span>
                  </div>

                  <h3 className="heading-md !text-xl mb-3">{step.title}</h3>
                  <p className="body-md">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Let's start with a conversation
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-md mx-auto">
              No commitment needed. Tell me about your situation and I'll let you know how I can help.
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
