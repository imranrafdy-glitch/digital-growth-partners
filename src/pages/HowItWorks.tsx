import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    kicker: "How It Works",
    title: "A transparent, four-step process",
    intro: "The process is short and explicit. Each step is documented so you know exactly what happens and when.",
    steps: [
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
    ],
  },
  fr: {
    kicker: "Comment ca marche",
    title: "Un processus clair en quatre etapes",
    intro: "Le processus est court et explicite. Chaque etape est documentee pour savoir quoi et quand.",
    steps: [
      {
        title: "Etape 1 — Definition du perimetre",
        text: "Nous definissons ce qui est inclus et exclu avant de commencer. Le perimetre est documente sur une page.",
      },
      {
        title: "Etape 2 — Design et calendrier",
        text: "La plupart des sites vitrines sont livrees en 2 a 4 semaines selon le perimetre. Le calendrier est confirme apres validation.",
      },
      {
        title: "Etape 3 — Revisions",
        text: "Deux series de revisions sont incluses. Toute demande supplementaire est quotee a part.",
      },
      {
        title: "Etape 4 — Livraison et handover",
        text: "Vous recevez le site final, une checklist de handover, et les acces si besoin de mise a jour.",
      },
    ],
  },
};

export default function HowItWorks() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <>
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">{content.kicker}</p>
            <h1 className="heading-xl mb-6">{content.title}</h1>
            <p className="body-lg">{content.intro}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="section-container max-w-3xl space-y-10">
          {content.steps.map((step) => (
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
