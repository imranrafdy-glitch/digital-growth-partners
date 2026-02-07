import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Globe, Megaphone, Search } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: Globe,
    title: "Website Creation",
    description: "Professional, performance-oriented websites that communicate credibility and convert visitors into clients.",
    href: "/services#websites",
  },
  {
    icon: Search,
    title: "Digital Strategy",
    description: "Visibility on search platforms and social media, built on clear objectives — not trends.",
    href: "/services#strategy",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description: "Search-based advertising targeting high-intent users. Focused on calls, bookings, and real leads.",
    href: "/services#ads",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description: "Measure what matters. Clear performance insights that drive better decisions.",
    href: "/services#analytics",
  },
];

const principles = [
  { number: "01", title: "Strategy first", text: "Every action is tied to a business objective. No guesswork." },
  { number: "02", title: "Measurable results", text: "Performance is tracked, reported, and used to improve." },
  { number: "03", title: "Transparent process", text: "You understand what is being done and why — at every stage." },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="section-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
                Digital Marketing Consultant
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="heading-xl mb-8">
                Helping businesses turn online visibility into real clients
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="body-lg max-w-xl mb-10">
                I work with local and service-based businesses to build a clear digital presence, attract the right audience, and generate measurable results.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
                >
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium border border-border text-foreground rounded-sm hover:bg-secondary transition-colors"
                >
                  View services
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        {/* Subtle decorative element */}
        <div className="absolute top-1/2 right-0 w-1/3 h-96 bg-accent/5 rounded-l-full -translate-y-1/2 pointer-events-none" />
      </section>

      {/* Approach */}
      <section className="section-padding bg-secondary/50">
        <div className="section-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              The approach
            </p>
            <h2 className="heading-lg mb-6 max-w-xl">
              Strategy, execution, measurement
            </h2>
            <p className="body-lg max-w-2xl mb-16">
              Digital marketing works when every decision has a reason. I combine strategic thinking with hands-on execution and transparent reporting to deliver outcomes you can see and understand.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {principles.map((p, i) => (
              <FadeIn key={p.number} delay={i * 0.1}>
                <div>
                  <span className="text-accent font-display text-3xl">{p.number}</span>
                  <h3 className="heading-md mt-3 mb-3 !text-xl">{p.title}</h3>
                  <p className="body-md">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding">
        <div className="section-container">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              Services
            </p>
            <h2 className="heading-lg mb-16 max-w-lg">
              What I can help you with
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <Link
                  to={service.href}
                  className="group block p-8 border border-border rounded-sm hover:border-foreground/20 transition-colors"
                >
                  <service.icon className="h-6 w-6 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-xl mb-3 text-foreground">{service.title}</h3>
                  <p className="body-md mb-4">{service.description}</p>
                  <span className="text-sm font-medium text-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Ready to grow your business online?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-lg mx-auto">
              Let's discuss how a clear digital strategy can bring measurable results to your business.
            </p>
            <a
              href="mailto:info@shades.lu"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium bg-primary-foreground text-primary rounded-sm hover:opacity-90 transition-opacity"
            >
              Contact me at info@shades.lu
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
