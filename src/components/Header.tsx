import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Service", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About the Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="absolute left-0 top-0 h-16 md:h-20 flex items-center pl-6 md:pl-8">
        <Link to="/" aria-label="SH4DES" className="flex flex-col">
          <span
            className="font-bold text-2xl md:text-4xl tracking-[0.16em] text-foreground"
            style={{
              textShadow: "0 2px 0 rgba(0,0,0,0.18)",
            }}
          >
            SH4DES
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-muted-foreground mt-1">
            SEO-ready websites for Luxembourg locals
          </span>
        </Link>
      </div>

      <nav className="section-container flex items-center h-16 md:h-20">

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border overflow-hidden">
          <ul className="section-container py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-base font-medium tracking-wide uppercase ${
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
