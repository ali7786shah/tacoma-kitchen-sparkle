import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

const services = [
  "Full Kitchen Remodel",
  "Kitchen Cabinets",
  "Countertops",
  "Kitchen Islands",
  "Backsplash",
  "Kitchen Lighting",
];

const areas = ["Tacoma", "Lakewood", "Puyallup", "Spanaway", "University Place", "Graham", "Dupont", "Milton", "Fox Island", "Roy"];

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-primary text-primary-foreground">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/95" />
      
      <div className="container relative">
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cta shadow-lg">
                <span className="text-lg font-bold text-cta-foreground">K</span>
              </div>
              <div>
                <h4 className="text-lg font-bold">Kitchen Remodeling</h4>
                <p className="text-xs text-primary-foreground/70">Tacoma, WA</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              Transforming kitchens across Tacoma since 2009. Expert craftsmanship, transparent pricing, and exceptional customer service.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-cta hover:text-cta-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-cta hover:text-cta-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-cta hover:text-cta-foreground">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-cta flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold text-lg mb-4">Our Services</h5>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-primary-foreground/80 transition-colors hover:text-cta">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-lg mb-4">Contact Us</h5>
            <ul className="space-y-4">
              <li>
                <a href="tel:2532432998" className="flex items-start gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-cta">
                  <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                  <span className="font-semibold text-base">(253) 243-2998</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>Tacoma, WA<br />Pierce County</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock className="h-5 w-5 mt-0.5 shrink-0" />
                <span>Mon-Fri: 8am-6pm<br />Sat: 9am-4pm</span>
              </li>
            </ul>
            <Button asChild variant="cta" className="mt-6 w-full">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-primary-foreground/10 py-6">
          <p className="text-xs text-primary-foreground/60 mb-3">Service Areas:</p>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <span key={area} className="rounded-full bg-primary-foreground/10 px-3 py-1 text-xs text-primary-foreground/70">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-primary-foreground/60 md:flex-row">
            <p>© {new Date().getFullYear()} Kitchen Remodeling Tacoma. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cta transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cta transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cta transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
