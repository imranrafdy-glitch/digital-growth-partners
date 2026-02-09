import FadeIn from "@/components/FadeIn";

export default function PrivacyPolicy() {
  return (
    <section className="section-padding">
      <div className="section-container max-w-3xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">Privacy policy</p>
          <h1 className="heading-xl mb-6">Privacy policy</h1>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>Controller: SH4DES, Luxembourg.</p>
            <p>Contact: info@sh4des.com.</p>
            <p>Data collected: name, email, and message content when you contact us.</p>
            <p>Purpose: to respond to inquiries and scope website projects.</p>
            <p>Legal basis: legitimate interest in responding to requests.</p>
            <p>Retention: messages are kept only as long as needed for communication and record keeping.</p>
            <p>Recipients: no third-party sharing unless required by law.</p>
            <p>Your rights: access, correction, deletion, and restriction. Email us to exercise these rights.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
