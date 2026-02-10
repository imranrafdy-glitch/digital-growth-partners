import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    kicker: "Concept project",
    title: "Local Physio Clinic",
    intro: "A calm, medical-focused layout designed to make services, booking, and location clear at a glance. This is a concept project, not client work.",
    whyTitle: "Why this structure",
    whyText: "Physio clients need reassurance, clarity, and fast booking. The hero highlights outcomes, the CTA is prominent, and the location is placed early for local discovery.",
    howTitle: "How it is built",
    howText: "Single-page layout with service blocks, booking CTA, and a location section. Clean typography and minimal colors keep the focus on trust and ease of contact.",
  },
  fr: {
    kicker: "Projet concept",
    title: "Cabinet de physio local",
    intro: "Un layout calme et medical pour rendre les services, la prise de rendez-vous et la localisation visibles immédiatement. Projet concept, pas un client.",
    whyTitle: "Pourquoi cette structure",
    whyText: "Les patients cherchent assurance et clarté. Le hero met en avant le bénéfice, l'appel à l'action est visible, et la localisation apparaît tôt.",
    howTitle: "Comment c'est construit",
    howText: "Page unique avec sections services, CTA de réservation et section localisation. Typographie simple et palette réduite pour faciliter la lecture.",
  },
};

export default function WorkPhysio() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className="section-padding">
      <div className="section-container max-w-4xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">{content.kicker}</p>
          <h1 className="heading-xl mb-6">{content.title}</h1>
          <p className="body-lg mb-8">{content.intro}</p>
        </FadeIn>

        <FadeIn>
          <img
            src="/concept-physio.png"
            alt="Concept preview for a local physio clinic website"
            className="w-full rounded-sm border border-border"
          />
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-2">{content.whyTitle}</h2>
              <p className="text-sm text-muted-foreground">{content.whyText}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">{content.howTitle}</h2>
              <p className="text-sm text-muted-foreground">{content.howText}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
