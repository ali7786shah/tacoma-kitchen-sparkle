import heroImg from "@/assets/hero-kitchen.jpg";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, BadgeCheck } from "lucide-react";

const tags = [
  "Kitchen Renovation",
  "Cabinets",
  "Islands",
  "Countertops",
  "Tile Backsplashes",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative isolate">
        <img
          src={heroImg}
          alt="Modern remodeled kitchen with island and pendant lights"
          className="absolute inset-0 -z-10 h-[80vh] w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background/95" />

        <div className="container flex min-h-[70vh] flex-col items-start justify-center py-16">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Your Dream Kitchen Starts Here in Tacoma
            </h1>
            <p className="mt-4 text-lg text-foreground/80 md:text-xl">
              Beautiful Designs. Professional Craftsmanship. Local Experts You Can Trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="xl" variant="cta">Request Free Estimate</Button>
              <Button size="xl" variant="primaryOutline" asChild>
                <a href="#gallery">View Gallery</a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-md border border-border bg-card/70 p-3 shadow-sm">
                <Star className="text-cta" />
                <div>
                  <p className="text-sm font-semibold">Google Reviews</p>
                  <p className="text-sm text-muted-foreground">4.9/5 rating</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-md border border-border bg-card/70 p-3 shadow-sm">
                <BadgeCheck className="text-primary" />
                <div>
                  <p className="text-sm font-semibold">Years in Business</p>
                  <p className="text-sm text-muted-foreground">10+ in Tacoma</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-md border border-border bg-card/70 p-3 shadow-sm">
                <ShieldCheck className="text-primary" />
                <div>
                  <p className="text-sm font-semibold">Licensed & Insured</p>
                  <p className="text-sm text-muted-foreground">Peace of mind</p>
                </div>
              </div>
            </div>

            {/* Tag menu */}
            <nav aria-label="Popular services" className="mt-6 overflow-x-auto">
              <ul className="flex w-full items-center gap-2">
                {tags.map((t) => (
                  <li key={t} className="shrink-0">
                    <span className="inline-flex items-center rounded-full border border-border bg-accent/40 px-3 py-1 text-xs font-medium text-foreground/80">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
