import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "border-b border-border/50 bg-background/80 shadow-lg backdrop-blur-xl" 
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg transition-transform group-hover:scale-105">
            <span className="text-lg font-bold text-primary-foreground">K</span>
            <div className="absolute -inset-1 rounded-xl bg-cta/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">Kitchen Remodeling</span>
            <span className="text-xs font-medium text-muted-foreground">Tacoma, WA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              to={item.href} 
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === item.href 
                  ? "text-primary" 
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {item.label}
              {location.pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-cta" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:2532432998" className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            (253) 243-2998
          </a>
          <Button asChild variant="cta" size="lg">
            <Link to="/contact">Free Estimate</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm text-foreground lg:hidden" 
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-border/50 bg-background/95 backdrop-blur-xl lg:hidden animate-fade-up">
          <div className="container grid gap-1 py-6">
            {navItems.map((item, index) => (
              <Link 
                key={item.href} 
                to={item.href} 
                className={`flex items-center rounded-xl px-4 py-3 text-base font-medium transition-all ${
                  location.pathname === item.href 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground/80 hover:bg-accent"
                }`} 
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-border/50">
              <a href="tel:2532432998" className="flex items-center justify-center gap-2 py-2 text-base font-medium text-primary">
                <Phone className="h-5 w-5" />
                (253) 243-2998
              </a>
              <Button asChild variant="cta" size="lg" className="w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Get Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
