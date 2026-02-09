import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/language";

const tools = ["React", "TypeScript", "Vite", "Tailwind CSS", "Cloudflare Workers"];

const standards = [
  "Performance budgets and Core Web Vitals checks",
  "Accessibility checks aligned with WCAG 2.1 AA",
  "Security basics: HTTPS, minimal third-party scripts",
];

const copy = {
  en: {
    kicker: "About the studio",
    title: "SH4DES is a digital studio focused on execution, not branding noise.",
    intro: "We build straightforward brochure websites for local businesses in Luxembourg. The work is calm, structured, and designed to make the service easy to understand.",
    body: "The studio is independent and operates in Luxembourg. We keep scope small, communicate clearly, and document what is included from the start.",
    toolsTitle: "Tools",
    standardsTitle: "Standards",
    ctaTitle: "Want a clear scope and a simple build?",
    ctaText: "Send a short note and we will reply with the scope questions.",
    ctaEmail: "Contact us at info@sh4des.com",
  },
  fr: {
    kicker: "A propos du studio",
    title: "SH4DES est un studio digital axe sur l'execution, pas le bruit marketing.",
    intro: "Nous construisons des sites vitrines clairs pour les entreprises locales au Luxembourg. Le travail est calme, structure et oriente comprehension.",
    body: "Le studio est independant et base au Luxembourg. Nous gardons un perimetre clair, communiquons simplement, et documentons ce qui est inclus.",
    toolsTitle: "Outils",
    standardsTitle: "Standards",
    ctaTitle: "Vous voulez un perimetre clair et un build simple?",
    ctaText: "Envoyez un court message et nous repondrons avec les questions de cadrage.",
    ctaEmail: "Contactez-nous a info@sh4des.com",
  },
};

export default function About() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">{content.kicker}</p>
            <h1 className="heading-xl mb-6">{content.title}</h1>
            <p className="body-lg mb-8">{content.intro}</p>
            <p className="body-md">{content.body}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <FadeIn>
            <h2 className="heading-lg mb-6">{language === "en" ? "Tools and standards" : "Outils et standards"}</h2>
            <div className="grid md:grid-cols-2 gap-10 md:gap-12">
              <div>
                <h3 className="text-base font-semibold mb-3">{content.toolsTitle}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-3">{content.standardsTitle}</h3>
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
