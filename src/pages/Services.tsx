import { Globe, Search, Megaphone, BarChart3 } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "Website Creation & Online Presence",
    intro: "A professional website is the foundation of your digital presence. We create structured, performance-oriented websites that communicate credibility and guide visitors toward action.",
    points: [
      "Professional showcase websites designed for clarity and conversion",
      "Structured information architecture and intuitive navigation",
      "Fully mobile-optimized and responsive design",
      "Integration of contact forms, booking links, maps, and external platforms",
      "Focus on usability, loading speed, and overall credibility",
    ],
  },
  {
    id: "strategy",
    icon: Search,
    title: "Digital Marketing Strategy",
    intro: "Visibility without strategy is noise. We help businesses build a coherent online presence that reaches the right audience through the right channels — based on objectives, not trends.",
    points: [
      "Focused on local and service-based businesses",
      "Visibility on Google and relevant search platforms",
      "Social media presence strategy across Instagram, TikTok, and Facebook",
      "Consistent branding and messaging across all channels",
      "Marketing decisions driven by business goals and market context",
    ],
  },
  {
    id: "ads",
    icon: Megaphone,
    title: "Google Ads Management",
    intro: "Google Ads lets you reach people actively searching for what you offer. We build and manage campaigns structured around high-intent keywords and local targeting — focused on generating real leads, not vanity metrics.",
    points: [
      "Search-based advertising targeting high-intent users",
      "Local and regional targeting for service-area businesses",
      "Structured campaigns built around keyword intent and user behavior",
      "Continuous optimization, testing, and monitoring",
      "Focus on calls, bookings, and measurable lead generation",
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Performance Tracking",
    intro: "Good decisions come from good data. We set up proper tracking to measure what matters — so you always know what's working, what's not, and where to improve.",
    points: [
      "Setup of website and marketing analytics infrastructure",
      "Measurement of traffic sources and user behavior",
      "Tracking of key actions: contact forms, calls, bookings",
      "Clear performance insights delivered in understandable formats",
      "Data used to refine strategy and improve outcomes over time",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">Services</p>
            <h1 className="heading-xl mb-6">What we offer</h1>
            <p className="body-lg">
              Every service is designed to work together — from building your digital foundation to driving qualified traffic and measuring results. No unnecessary complexity. No empty promises.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${i % 2 === 0 ? "bg-secondary/50" : ""}`}
        >
          <div className="section-container">
            <FadeIn>
              <div className="flex items-start gap-4 mb-6">
                <service.icon className="h-7 w-7 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
                <h2 className="heading-lg">{service.title}</h2>
              </div>
              <p className="body-lg max-w-2xl mb-10">{service.intro}</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ul className="space-y-4 max-w-2xl">
                {service.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="body-md">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Interested in working together?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-md mx-auto">
              Every project starts with a conversation. Tell us about your business and objectives.
            </p>
            <a
              href="mailto:info@shades.lu"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium bg-primary-foreground text-primary rounded-sm hover:opacity-90 transition-opacity"
            >
              Contact us at info@shades.lu
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
