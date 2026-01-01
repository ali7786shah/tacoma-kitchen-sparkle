import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
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
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-primary/70" />
          <span className="text-lg font-semibold text-primary">[Your Company]</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.href ? "text-primary" : "text-foreground/80"}`}>
              {item.label}
            </Link>
          ))}
          <Button asChild variant="cta" className="ml-2">
            <Link to="/contact"><Phone className="mr-2 h-4 w-4" /> Free Estimate</Link>
          </Button>
        </div>

        <button className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border lg:hidden">
          <div className="container grid gap-2 py-4">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className={`rounded-md px-2 py-2 text-base font-medium transition-colors hover:bg-accent ${location.pathname === item.href ? "bg-accent text-primary" : "text-foreground/90"}`} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Button asChild variant="cta" className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}><Phone className="mr-2" /> Request Free Estimate</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
