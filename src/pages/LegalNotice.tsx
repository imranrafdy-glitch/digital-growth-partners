import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    kicker: "Legal notice",
    title: "Legal notice",
    lines: [
      "Business name: SH4DES",
      "Business form: not provided",
      "Country: Luxembourg",
      "Registration / VAT: not provided",
      "Contact: info@sh4des.com",
    ],
  },
  fr: {
    kicker: "Mentions legales",
    title: "Mentions legales",
    lines: [
      "Nom commercial: SH4DES",
      "Forme: non communiquee",
      "Pays: Luxembourg",
      "Immatriculation / TVA: non communique",
      "Contact: info@sh4des.com",
    ],
  },
};

export default function LegalNotice() {
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
