import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  badge?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  showCTA = true,
  ctaText = "Get Free Estimate",
  ctaLink = "/contact",
  badge,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-background to-accent" />
      )}
      
      {/* Decorative elements - trending glassmorphism effect */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cta/10 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {badge && (
            <span className="mb-4 inline-flex items-center rounded-full border border-cta/30 bg-cta/10 px-4 py-1.5 text-sm font-medium text-cta-foreground backdrop-blur-sm">
              {badge}
            </span>
          )}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-foreground/80 md:text-xl lg:text-2xl">
              {subtitle}
            </p>
          )}
          {showCTA && (
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="xl" variant="cta" asChild className="group">
                <Link to={ctaLink}>
                  <Phone className="mr-2 h-5 w-5" />
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
