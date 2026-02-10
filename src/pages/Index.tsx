import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    kicker: "Website Studio • Luxembourg",
    headline: "We design and deploy websites for local businesses in Luxembourg.",
    intro: "One clear service. One clear outcome: a fast, structured website that presents your business and makes it easy to contact you.",
    ctaPrimary: "Start a conversation",
    ctaSecondary: "See the service",
    deliverablesKicker: "What you get",
    deliverablesTitle: "A complete brochure website package",
    deliverables: [
      "Single-page or multi-section layout based on scope",
      "Copy structure, content layout, and contact flow",
      "Mobile-first build with clean performance budget",
      "Metadata and indexing setup",
    ],
    workKicker: "Work samples",
    workTitle: "Concept projects",
    workIntro: "These are self-initiated concept projects used to demonstrate layout, structure, and clarity. They are not client work.",
    conceptOneTitle: "Concept Project: Local Physio Clinic",
    conceptOneText: "Clear services overview, appointment flow, and location-first layout.",
    conceptTwoTitle: "Concept Project: Artisan Bakery",
    conceptTwoText: "Menu highlights, opening hours, and map-driven contact section.",
    ctaTitle: "Ready for a website that explains your business clearly?",
    ctaText: "Tell us what you do, and we will reply with three questions to scope the site.",
    ctaEmail: "Contact us at info@sh4des.com",
  },
  fr: {
    kicker: "Studio web • Luxembourg",
    headline: "Nous concevons et deployons des sites vitrines rapides pour les entreprises locales au Luxembourg.",
    intro: "Un seul service, un seul objectif: un site rapide et structure qui presente votre activite et facilite le contact.",
    ctaPrimary: "Demarrer un echange",
    ctaSecondary: "Voir le service",
    deliverablesKicker: "Ce que vous obtenez",
    deliverablesTitle: "Un site vitrine complet",
    deliverables: [
      "Mise en page une ou plusieurs sections selon le scope",
      "Structure de contenu, mise en page et parcours de contact",
      "Site mobile-first avec budget performance clair",
      "Metadonnees et indexation pretes",
    ],
    workKicker: "Exemples",
    workTitle: "Projets concept",
    workIntro: "Ces projets sont auto-inites pour montrer la structure et la clarte. Ce ne sont pas des clients.",
    conceptOneTitle: "Projet concept: Cabinet de physio",
    conceptOneText: "Services clairs, prise de rendez-vous, mise en avant de la localisation.",
    conceptTwoTitle: "Projet concept: Boulangerie artisanale",
    conceptTwoText: "Mise en avant du menu, horaires, et contact avec carte.",
    ctaTitle: "Besoin d'un site qui explique clairement votre activite?",
    ctaText: "Expliquez votre activite, nous repondrons avec trois questions de cadrage.",
    ctaEmail: "Contactez-nous a info@sh4des.com",
  },
};

export default function Index() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="section-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
                {content.kicker}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="heading-xl mb-8">
                {content.headline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="body-lg max-w-xl mb-10">
                {content.intro}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
                >
                  {content.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium border border-border text-foreground rounded-sm hover:bg-secondary transition-colors"
                >
                  {content.ctaSecondary}
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
              {content.deliverablesKicker}
            </p>
            <h2 className="heading-lg mb-12 max-w-lg">
              {content.deliverablesTitle}
            </h2>
          </FadeIn>

          <FadeIn>
            <ul className="grid md:grid-cols-2 gap-4 max-w-3xl">
              {content.deliverables.map((item) => (
                <li key={item} className="border border-border rounded-sm p-5 text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Concept work */}
      <section className="section-padding bg-secondary/50">
        <div className="section-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              {content.workKicker}
            </p>
            <h2 className="heading-lg mb-6">{content.workTitle}</h2>
            <p className="body-md max-w-2xl mb-8">
              {content.workIntro}
            </p>
          </FadeIn>
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    to="/work/physio"
                    className="border border-border rounded-sm p-6 space-y-4 hover:border-foreground/40 transition-colors"
                  >
                    <img
                      src="/concept-physio.png"
                      alt="Concept preview for a local physio clinic website"
                      className="w-full h-40 object-cover rounded-sm border border-border"
                    />
                    <div>
                      <h3 className="text-base font-semibold mb-2">{content.conceptOneTitle}</h3>
                      <p className="text-sm text-muted-foreground">{content.conceptOneText}</p>
                    </div>
                  </Link>
                  <Link
                    to="/work/bakery"
                    className="border border-border rounded-sm p-6 space-y-4 hover:border-foreground/40 transition-colors"
                  >
                    <img
                      src="/concept-bakery.png"
                      alt="Concept preview for an artisan bakery website"
                      className="w-full h-40 object-cover rounded-sm border border-border"
                    />
                    <div>
                      <h3 className="text-base font-semibold mb-2">{content.conceptTwoTitle}</h3>
                      <p className="text-sm text-muted-foreground">{content.conceptTwoText}</p>
                    </div>
                  </Link>
            </div>
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
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-lg mx-auto">
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
