import FadeIn from "@/components/FadeIn";

export default function LegalNotice() {
  return (
    <section className="section-padding">
      <div className="section-container max-w-3xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">Legal notice</p>
          <h1 className="heading-xl mb-6">Legal notice</h1>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>Business name: SH4DES</p>
            <p>Business form: Independent studio (sole proprietor)</p>
            <p>Country: Luxembourg</p>
            <p>Registration / VAT: not provided</p>
            <p>Contact: info@sh4des.com</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
