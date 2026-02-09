import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    kicker: "Privacy policy",
    title: "Privacy policy",
    lines: [
      "Controller: SH4DES, Luxembourg.",
      "Contact: info@sh4des.com.",
      "Data collected: name, email, and message content when you contact us.",
      "Purpose: to respond to inquiries and scope website projects.",
      "Legal basis: legitimate interest in responding to requests.",
      "Retention: messages are kept only as long as needed for communication and record keeping.",
      "Recipients: no third-party sharing unless required by law.",
      "Your rights: access, correction, deletion, and restriction. Email us to exercise these rights.",
    ],
  },
  fr: {
    kicker: "Politique de confidentialite",
    title: "Politique de confidentialite",
    lines: [
      "Responsable: SH4DES, Luxembourg.",
      "Contact: info@sh4des.com.",
      "Donnees collecte es: nom, email et contenu du message lors du contact.",
      "Finalite: repondre aux demandes et cadrer les projets de site web.",
      "Base legale: interet legitime a repondre aux demandes.",
      "Conservation: messages conserves uniquement le temps necessaire au suivi.",
      "Destinataires: aucun partage tiers sauf obligation legale.",
      "Vos droits: acces, rectification, suppression, limitation. Ecrivez-nous pour exercer ces droits.",
    ],
  },
};

export default function PrivacyPolicy() {
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
