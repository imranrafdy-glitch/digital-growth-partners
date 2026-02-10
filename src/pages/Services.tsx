import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    kicker: "Service",
    title: "Fast brochure websites",
    intro: "One focused offer for local businesses in Luxembourg. We build a clean, fast website that explains your business and makes it easy to contact you.",
    scopeTitle: "Scope",
    scopeIntro: "The scope is defined in writing before any build starts. This avoids ambiguity and keeps delivery predictable.",
    includedTitle: "Included",
    excludedTitle: "Excluded",
    included: [
      "Single-page or multi-section layout",
      "Content structure and page hierarchy",
      "Contact flow (email, map, or booking link)",
      "Metadata and indexing setup",
    ],
    excluded: [
      "Ongoing marketing management",
      "Paid advertising setup or budgets",
      "Copywriting for large catalogues",
      "Custom web applications",
    ],
    riskTitle: "Satisfaction clause",
    riskText: "If the first delivery does not match the agreed scope, we revise until it matches, with up to two revision rounds. Any scope change beyond that is quoted separately.",
    ctaTitle: "Ready to define the scope?",
    ctaText: "Send a short description of your business and we will reply with three questions.",
    ctaEmail: "Contact us at info@sh4des.com",
  },
  fr: {
    kicker: "Service",
    title: "Sites vitrines rapides",
    intro: "Un seul service pour les entreprises locales au Luxembourg. Nous construisons un site propre et rapide qui explique votre activite et facilite le contact.",
    scopeTitle: "Perimetre",
    scopeIntro: "Le perimetre est defini par ecrit avant de commencer. Cela evite les ambiguities et rend la livraison previsible.",
    includedTitle: "Inclus",
    excludedTitle: "Exclus",
    included: [
      "Mise en page une ou plusieurs sections",
      "Structure de contenu et hierarchie",
      "Parcours de contact (email, carte ou lien de reservation)",
      "Metadonnees et indexation",
    ],
    excluded: [
      "Gestion marketing continue",
      "Mise en place de publicites payantes",
      "Redaction pour grands catalogues",
      "Applications web sur mesure",
    ],
    riskTitle: "Clause de satisfaction",
    riskText: "Si la premiere livraison ne correspond pas au scope convenu, nous corrigeons jusqu'a correspondance, avec deux series de revisions incluses. Tout changement de scope est facture a part.",
    ctaTitle: "Pret a definir le perimetre?",
    ctaText: "Envoyez une description courte et nous repondrons avec trois questions.",
    ctaEmail: "Contactez-nous a info@sh4des.com",
  },
};

export default function Services() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">Service</p>
            <h1 className="heading-xl mb-6">{content.title}</h1>
            <p className="body-lg">
              {content.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="section-container">
          <FadeIn>
            <h2 className="heading-lg mb-6">{content.scopeTitle}</h2>
            <p className="body-md max-w-2xl mb-6">
              {content.scopeIntro}
            </p>
          </FadeIn>
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border rounded-sm p-6">
                <h3 className="text-base font-semibold mb-3">{content.includedTitle}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {content.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-border rounded-sm p-6">
                <h3 className="text-base font-semibold mb-3">{content.excludedTitle}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {content.excluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <h2 className="heading-lg mb-4">{content.riskTitle}</h2>
            <p className="body-md">{content.riskText}</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-6">
              {content.ctaTitle}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-md mx-auto">
              {content.ctaText}
            </p>
            <a
              href="mailto:info@sh4des.com"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium bg-primary-foreground text-primary rounded-sm hover:opacity-90 transition-opacity"
            >
              {content.ctaEmail}
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
