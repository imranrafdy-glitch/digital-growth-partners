import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    kicker: "Concept project",
    title: "Artisan Bakery",
    intro: "A product-first layout that highlights craftsmanship, menu, and ordering. This is a concept project, not client work.",
    whyTitle: "Why this structure",
    whyText: "Bakery sites succeed when the product is front and center. The split hero shows the product image and story side-by-side, with a single action to order or visit.",
    howTitle: "How it is built",
    howText: "Hero split with product image, a short story block, and a simple menu/visit section. The layout keeps attention on the visual and the next action.",
  },
  fr: {
    kicker: "Projet concept",
    title: "Boulangerie artisanale",
    intro: "Un layout centre sur le produit pour mettre en avant le savoir-faire, le menu et la commande. Projet concept, pas un client.",
    whyTitle: "Pourquoi cette structure",
    whyText: "Une boulangerie gagne quand le produit est en avant. Le hero partage l'image et l'histoire, avec une action claire pour commander ou visiter.",
    howTitle: "Comment c'est construit",
    howText: "Hero en deux colonnes avec image produit, bloc histoire, et section menu/visite. L'ensemble guide vers l'action suivante.",
  },
};

export default function WorkBakery() {
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
            src="/concept-bakery.png"
            alt="Concept preview for an artisan bakery website"
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
