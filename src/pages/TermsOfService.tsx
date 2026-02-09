import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    kicker: "Terms of service",
    title: "Terms of service",
    lines: [
      "Services: design and deployment of brochure websites as described in the scope.",
      "Scope: defined in writing before work starts. Changes outside scope require a new quote.",
      "Revisions: two revision rounds are included unless otherwise agreed in writing.",
      "Client content: the client provides text, images, and legal content unless agreed otherwise.",
      "Delivery: timelines are estimates based on scope and client responsiveness.",
      "Liability: SH4DES is not liable for third-party outages or client-supplied content issues.",
      "Contact: info@sh4des.com.",
    ],
  },
  fr: {
    kicker: "Conditions de service",
    title: "Conditions de service",
    lines: [
      "Services: conception et mise en ligne de sites vitrines definis dans le perimetre.",
      "Perimetre: defini par ecrit avant le debut. Toute demande hors perimetre fait l'objet d'un devis.",
      "Revisions: deux series de revisions incluses sauf accord different.",
      "Contenu client: le client fournit textes, images et contenus legaux sauf accord.",
      "Livraison: delais estimes selon le perimetre et la reactivite client.",
      "Responsabilite: SH4DES n'est pas responsable des pannes tierces ou des contenus fournis par le client.",
      "Contact: info@sh4des.com.",
    ],
  },
};

export default function TermsOfService() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className="section-padding">
      <div className="section-container max-w-3xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">{content.kicker}</p>
          <h1 className="heading-xl mb-6">{content.title}</h1>
          <div className="space-y-4 text-sm text-muted-foreground">
            {content.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
