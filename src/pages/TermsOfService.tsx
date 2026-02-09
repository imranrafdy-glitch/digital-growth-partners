import FadeIn from "@/components/FadeIn";

export default function TermsOfService() {
  return (
    <section className="section-padding">
      <div className="section-container max-w-3xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">Terms of service</p>
          <h1 className="heading-xl mb-6">Terms of service</h1>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>Services: design and deployment of brochure websites as described in the scope.</p>
            <p>Scope: defined in writing before work starts. Changes outside scope require a new quote.</p>
            <p>Revisions: two revision rounds are included unless otherwise agreed in writing.</p>
            <p>Client content: the client provides text, images, and legal content unless agreed otherwise.</p>
            <p>Delivery: timelines are estimates based on scope and client responsiveness.</p>
            <p>Liability: SH4DES is not liable for third-party outages or client-supplied content issues.</p>
            <p>Contact: info@sh4des.com.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
