import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="section-container py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl mb-4">SHADES</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Helping local and service-based businesses grow their online visibility and acquire real clients.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-primary-foreground/50 font-body font-medium">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "/services" },
                { label: "Process", href: "/process" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-primary-foreground/50 font-body font-medium">Contact</h4>
            <a href="mailto:info@shades.lu" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              info@shades.lu
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} SHADES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
