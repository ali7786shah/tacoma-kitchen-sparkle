import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div>
          <h4 className="text-lg font-semibold text-primary">[Your Company Name] Remodelers</h4>
          <p className="mt-2 text-sm text-foreground/70">Transforming Kitchens, Enhancing Homes. [Placeholder tagline]</p>
        </div>

        <div>
          <h5 className="font-semibold text-primary">Quick Links</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#why-us" className="hover:underline">Why Us</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-primary">Contact</h5>
          <ul className="mt-2 space-y-2 text-sm text-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> [Placeholder: +1 (555) 123-4567]</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> [Placeholder: hello@example.com]</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> [Placeholder: 1234 Market St, Tacoma, WA]</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-primary">Follow</h5>
          <div className="mt-2 flex gap-3 text-foreground/70">
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} [Your Company Name]. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
