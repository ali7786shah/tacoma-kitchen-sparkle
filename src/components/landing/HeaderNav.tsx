import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="Home">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-primary/70" />
          <span className="text-lg font-semibold text-primary">[Your Company Name] Remodelers</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="cta" className="ml-2">
            <a href="#contact">
              <Phone className="mr-2" /> Free Estimate
            </a>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-base font-medium text-foreground/90 transition-colors hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="cta" className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>
                <Phone className="mr-2" /> Request Free Estimate
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
