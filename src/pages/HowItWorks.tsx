import FadeIn from "@/components/FadeIn";

const steps = [
  {
    title: "Step 1 — Scope definition",
    text: "We define what is included and what is excluded before any build starts. The scope is written in one page so there are no surprises.",
  },
  {
    title: "Step 2 — Design & build timeline",
    text: "Most brochure websites are delivered in 2 to 4 weeks depending on scope. The timeline is confirmed once the scope is approved.",
  },
  {
    title: "Step 3 — Review & revision limits",
    text: "Two revision rounds are included. Additional changes or new sections are quoted separately.",
  },
  {
    title: "Step 4 — Delivery & handover",
    text: "You receive the final site, a handover checklist, and access to manage content updates if needed.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">How It Works</p>
            <h1 className="heading-xl mb-6">A transparent, four-step process</h1>
            <p className="body-lg">
              The process is short and explicit. Each step is documented so you know exactly what happens and when.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="section-container max-w-3xl space-y-10">
          {steps.map((step) => (
            <FadeIn key={step.title}>
              <div className="border border-border rounded-sm p-6">
                <h2 className="text-lg font-semibold mb-2">{step.title}</h2>
                <p className="body-md">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
